import Navbar from "../Navbar/Navbar";

export default function Header() {
  return (
    <header className="p-5 w-full h-[100px] bg-white border-b fixed top-0 left-0 z-[999]">
      <div className="max-w-[2000px] mx-auto my-0">
        <Navbar></Navbar>
      </div>
    </header>
  );
}
