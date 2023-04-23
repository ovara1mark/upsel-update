import react from "react";
import { Navbar } from "../../molecules";

export const PageTemplate = ({ header, children, footer }) => {
  return (
    <main>
      <nav className="navbar">
        <Navbar />
      </nav>
      <section>{children}</section>
      <footer>{footer}</footer>
    </main>
  );
};
