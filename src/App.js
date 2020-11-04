import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubSearchApp from "./Components/GithubProfile/GithubSearchApp";
import GithubProfileDetails from "./Components/GithubProfile/GithubProfileDetails";
import GithubRepoDetails from "./Components/GithubRepo/GithubRepoDetails";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar navbar-dark bg-nav text-white">
            <i className="fab fa-github"></i> <a href="#" className="navbar-brand"><h4>GitHub Search Profile</h4></a>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col">
                    <GithubSearchApp/>
                </div>
            </div>
        </div>
        <div className="mb-5"></div>
    </React.Fragment>

  );
}

export default App;