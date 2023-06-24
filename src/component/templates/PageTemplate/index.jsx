import react from "react";
import { Navbar } from "../../molecules";

export const PageTemplate = ({ children }) => {
  return (
    <main>
      <nav className="navbar">
        <Navbar />
      </nav>
      <section>{children}</section>
    </main>
  );
};
