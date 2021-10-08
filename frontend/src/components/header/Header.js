import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
          <Link class="flex title-font font-medium items-center text-white mb-4 md:mb-0" to='/'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">Logo</span>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <IconButton>
              <NotificationsNone className="text-white" />
            </IconButton>
            <IconButton>
              <Language className="text-white" />
            </IconButton>
            <IconButton>
              <Settings className="text-white" />
            </IconButton>
          </nav>
          <IconButton>
            <Avatar style={{ background: "orange" }}>AY</Avatar>
          </IconButton>
        </div>
      </header>
    </div>
  );
};

export default Header;
