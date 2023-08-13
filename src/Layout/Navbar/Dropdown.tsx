import Link from "next/link";
const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="relative text-md">
          {submenu.soon !== false && (
            <Link
              className={`block p-2 hover:bg-t2 hover:bg-opacity-5 transition`}
              href={submenu.path}
            >
              {submenu.name}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
