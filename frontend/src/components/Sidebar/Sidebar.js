import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Book from "@mui/icons-material/Book";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import AttachFile from "@mui/icons-material/AttachFile";
import AccountTreeSharpIcon from "@mui/icons-material/AccountTreeSharp";
import PreviewSharpIcon from "@mui/icons-material/PreviewSharp";
import { Link } from "react-router-dom";
import Notes from "@mui/icons-material/Notes";
import LibraryBooksSharpIcon from "@mui/icons-material/LibraryBooksSharp";
import CardMembershipSharpIcon from "@mui/icons-material/CardMembershipSharp";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <ul>
          <Link
            to="/dashboard"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <DashboardIcon className="icon" />
            Dashboard
          </Link>
          <Link
            to="/lectures"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <Book className="icon" />
            Lectures
          </Link>
          <Link
            to="/conceptual"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <AttachFile className="icon" />
            Conceptual Test
          </Link>
          <Link
            to="/mentorship"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <PeopleAlt className="icon" />
            Mentorship
          </Link>
          <Link to="/notes" className="li hover:bg-purple-500 hover:text-white">
            <Notes className="icon" />
            Notes
          </Link>
          <Link
            to="/library"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <LibraryBooksSharpIcon className="icon" />
            Library
          </Link>
          <Link
            to="/revision"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <PreviewSharpIcon className="icon" />
            Revision
          </Link>
          <Link
            to="/projects"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <AccountTreeSharpIcon className="icon" />
            Projects
          </Link>
          <Link
            to="/certificate"
            className="li hover:bg-purple-500 hover:text-white"
          >
            <CardMembershipSharpIcon className="icon" />
            Certificates
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
