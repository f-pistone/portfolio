export default function Navbar() {
  const navbarElements = [
    {
      name: "About",
    },
    {
      name: "Projects",
    },
    {
      name: "Contact",
    },
  ];
  return (
    <nav>
      <ul className="flex justify-end items-center gap-5">
        {navbarElements.map((navbarElement, index) => (
          <li key={index}>{navbarElement.name}</li>
        ))}
      </ul>
    </nav>
  );
}
