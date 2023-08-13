import Link from "next/link";
const Dropdown = ({ submenus, dropdown }) => {
  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="relative text-md">
          {submenu.soon !== false && (
            <Link  href={submenu.path}>
              <a
                className={`block p-2 hover:bg-t2 hover:bg-opacity-5 transition`}
                href="/#"
              >
                {submenu.name}
              </a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
