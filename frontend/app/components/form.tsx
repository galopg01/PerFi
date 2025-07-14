import React from "react";

type Field = {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "checkbox";
  placeholder?: string;
  min?: number;
  max?: number;
  step?: string;
  required?: boolean;
};

type GenericFormProps = {
  fields: Field[];
  buttonText: string;
  onSubmit?: (values: Record<string, any>) => void;
  initialValues?: Record<string, any>;
  columns?: number; // Nuevo prop opcional
};

export default function GenericForm({
  fields,
  buttonText,
  onSubmit,
  initialValues = {},
  columns = 1, // Valor por defecto 1
}: GenericFormProps) {
  const [values, setValues] = React.useState<Record<string, any>>(initialValues);

  // Sincroniza valores si initialValues cambia (por ejemplo, al volver atrás)
  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) onSubmit(values);
  };

  // Tailwind grid-cols-X dinámico
  const gridColsClass =
    columns > 1
      ? `grid grid-cols-1 md:grid-cols-${columns} gap-4`
      : "";

  return (
    <form className="py-2 max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className={gridColsClass}>
        {fields.map((field) => (
          <div className="mb-5" key={field.name}>
            <label
              htmlFor={field.name}
              className="block mb-2 text-sm font-medium text-text-light dark:text-text-dark"
            >
              {field.label}
            </label>
            {field.type === "checkbox" ? (
              <div className="flex items-start">
                <input
                  id={field.name}
                  name={field.name}
                  type="checkbox"
                  checked={!!values[field.name]}
                  onChange={handleChange}
                  className="w-4 h-4 border border-border-light rounded-sm bg-surface-light focus:ring-3 focus:ring-primary dark:bg-surface-dark dark:border-border-dark dark:focus:ring-primary dark:ring-offset-background-dark dark:focus:ring-offset-background-dark"
                  required={field.required}
                />
                <label
                  htmlFor={field.name}
                  className="ms-2 text-sm font-medium text-text-light dark:text-text-dark"
                >
                  {field.label}
                </label>
              </div>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                min={field.min}
                max={field.max}
                step={field.step}
                className="shadow-xs bg-surface-light border border-border-light text-text-light text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-surface-dark dark:border-border-dark dark:placeholder-muted-dark dark:text-text-dark dark:focus:ring-primary dark:focus:border-primary"
              />
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="btn w-full font-medium text-sm px-5 py-2.5 text-center"
      >
        {buttonText}
      </button>
    </form>
  );
}