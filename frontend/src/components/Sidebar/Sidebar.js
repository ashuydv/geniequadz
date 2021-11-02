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
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <Divider/>
        <ul>
          <List>
            <Link to="/dashboard">
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText>Dashboard</ListItemText>
              </ListItem>
            </Link>
            <Link to="/lectures">
              <ListItem button>
                <ListItemIcon>
                  <Book />
                </ListItemIcon>
                <ListItemText>Lectures</ListItemText>
              </ListItem>
            </Link>
            <Link to="/conceptual">
              <ListItem button>
                <ListItemIcon>
                  <AttachFile />
                </ListItemIcon>
                <ListItemText>Conceptual Test</ListItemText>
              </ListItem>
            </Link>
            <Link to="/mentorship">
              <ListItem button>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText>Mentorship</ListItemText>
              </ListItem>
            </Link>
            <Link to="/notes">
              <ListItem button>
                <ListItemIcon>
                  <Notes />
                </ListItemIcon>
                <ListItemText>Notes</ListItemText>
              </ListItem>
            </Link>
            <Link to="/library">
              <ListItem button>
                <ListItemIcon>
                  <LibraryBooksSharpIcon />
                </ListItemIcon>
                <ListItemText>Library</ListItemText>
              </ListItem>
            </Link>
            <Link to="/revision">
              <ListItem button>
                <ListItemIcon>
                  <PreviewSharpIcon />
                </ListItemIcon>
                <ListItemText>Revision</ListItemText>
              </ListItem>
            </Link>
            <Link to="/projects">
              <ListItem button>
                <ListItemIcon>
                  <AccountTreeSharpIcon />
                </ListItemIcon>
                <ListItemText>Projects</ListItemText>
              </ListItem>
            </Link>
            <Link to="/certificate">
              <ListItem button>
                <ListItemIcon>
                  <CardMembershipSharpIcon />
                </ListItemIcon>
                <ListItemText>Certificates</ListItemText>
              </ListItem>
            </Link>
          </List>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
