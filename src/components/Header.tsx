import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Input } from "./ui/input";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import GenreDropdown from "./GenreDropdown";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate("/search/" + search);
    }
  };

  return (
    <header className="fixed w-full top-0 p-5 z-[99] bg-gradient-to-t from gray-200/0 via-gray-900/25 to-gray-900">
      <nav className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            className="w-30 cursor-pointer invert dark:invert-0"
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="flex gap-2">
          <GenreDropdown />
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
