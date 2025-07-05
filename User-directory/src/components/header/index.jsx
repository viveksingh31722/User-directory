import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context";


// This is navbar, having the search input field and different navLinks like home and search.
// Here we are setting the value os search params state and finding the data in context file, using the function handleSubmit.
// Handle submit make the api call and check for the requested data and provide the data result, which can be used further

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);
    const navigate = useNavigate();

  const linkStyle = "px-4 py-2 rounded-md text-base font-medium transition";
  const activeStyle = "[&.active]:text-indigo-600 [&.active]:font-semibold [&.active]:underline [&.active]:underline-offset-4";
  const hoverStyle = "hover:text-indigo-500";

  return (
    <nav className="bg-white py-6 px-4 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 mb-8 dark:bg-gray-900 text-gray-800 dark:text-white-100 p-4">
      <h2 className="text-3xl font-bold text-gray-800 hover:text-indigo-600 transition">
        <NavLink to="/" className="inline-block">
          User Directory
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit} className="flex-1 mx-4 lg:mx-8 max-w-lg text-gray-800 dark:text-black">
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Search users..."
          onFocus={() => navigate("/search")}
          className="w-full bg-white p-3 pl-5 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-300 transition"
        />
      </form>

      <ul className="flex gap-6">
        <li>
          <NavLink
            to="/"
            end
            className={`${linkStyle} ${activeStyle} ${hoverStyle} text-gray-600`}
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/search"
            className={`${linkStyle} ${activeStyle} ${hoverStyle} text-gray-600`}
          >
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
