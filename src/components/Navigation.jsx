import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/clienti">Clienti</Link></li>
        <li><Link to="/dipendenti">Dipendenti</Link></li>
        <li><Link to="/servizi">Servizi</Link></li>
        <li><Link to="/spese">Spese</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
