import { Link } from "react-router";
import logo from "/talent-iq-logo.svg";
import ThemeToggle from "./ThemeToggle";

function Footer() {
  return (
    <footer className="bg-base-200 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity text-center md:text-left">
          <img src={logo} alt="Talent IQ logo" className="h-12 w-12 rounded-lg border border-primary/40 bg-base-100/60" />
          <div>
            <p className="font-black text-xl tracking-wide">Talent IQ</p>
            <p className="text-sm text-base-content/60">Code Together, Learn Together</p>
          </div>
        </Link>

        <ThemeToggle />

        <div className="text-sm text-base-content/60 text-center md:text-right">
          <p>Collaborative coding interviews and peer learning platform.</p>
          <p>© {new Date().getFullYear()} Talent IQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
