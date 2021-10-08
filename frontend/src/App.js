import Header from "./components/header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Lectures from "./components/pages/Lectures/Lectures";
import Conceptual from "./components/pages/Conceptual/Conceptual";
import Mentorship from "./components/pages/Mentorship/Mentorship";
import Library from "./components/pages/Library/Library";
import Revision from "./components/pages/Revision/Revision";
import Project from "./components/pages/Projects/Project";
import Certificate from "./components/pages/Certificates/Certificate";
import Notes from "./components/pages/Notes/Notes";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Live from "./components/pages/Live/Live";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-1">
        <div className="flex">
          <Sidebar />
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/lectures" component={Lectures} />
              <Route path="/conceptual" component={Conceptual} />
              <Route path="/mentorship" component={Mentorship} />
              <Route path="/notes" component={Notes} />
              <Route path="/library" component={Library} />
              <Route path="/revision" component={Revision} />
              <Route path="/projects" component={Project} />
              <Route path="/certificate" component={Certificate} />
              <Route path="/live" component={Live} />
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
