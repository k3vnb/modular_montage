import { NavLink } from "react-router-dom";
import { NAV_ROUTES_LIST } from "routes";

export const Sidebar = () => {
  return (
    <div>
      Sidebar
      <ul style={{ listStyle: "none", padding: 0 }}>
        {NAV_ROUTES_LIST.map((route) => (
          <li key={route.label} style={{ marginTop: "10px" }}>
            <NavLink to={route.path}>
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
