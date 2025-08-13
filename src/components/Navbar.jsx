import { useState } from "react";
import pp from "../assets/pp.jpg";
import { User, Home, Languages, Link, Mail, Menu, X } from "lucide-react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const iconObj = {
        home: Home,
        about: User,
        lang: Languages,
        project: Link,
        contact: Mail,
    };

    function toggleMenu() {
        setMenuOpen((prev) => !prev);
    }

    function icon(IconComp, id) {
        return (
            <li
                className="h-[40px] w-[40px] flex justify-center items-center rounded-full"
                key={id}
            >
                <a
                    href={`#${id}`}
                    onClick={toggleMenu}
                    className="font-bold text-white hover:text-blue-500 transition duration-150 ease-in"
                    aria-label={id}
                >
                    <IconComp />
                </a>
            </li>
        );
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-[#212529] flex items-center justify-between px-4 py-2 shadow-md">
            {/* Profile Picture */}
            <div className="w-[60px] h-[60px] rounded-full hover:drop-shadow-xs hover:drop-shadow-gray-400 
      flex justify-center items-center hover:cursor-pointer">
                <img
                    src={pp}
                    alt="Profile"
                    className="object-cover h-[90%] w-[90%] rounded-full"
                />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex gap-4">
                    {Object.keys(iconObj).map((key) => icon(iconObj[key], key))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div
                className="md:hidden text-2xl hover:cursor-pointer text-white transition-all"
                onClick={toggleMenu}
            >
                {menuOpen ? (<X />) : (<Menu />)}
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-[#212529] md:hidden shadow-lg">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {Object.keys(iconObj).map((key) => icon(iconObj[key], key))}
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
