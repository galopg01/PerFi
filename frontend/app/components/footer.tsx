export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12  text-center text-sm text-muted-light dark:text-muted-dark">
      © {new Date().getFullYear()} PerFi. Todos los derechos reservados.
    </footer>
  );
}