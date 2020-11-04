import React from "react";
import GithubProfileDetails from "./GithubProfileDetails";
import GithubRepoDetails from "../GithubRepo/GithubRepoDetails";
import Axios from "axios";
import {CLIENT_ID, SECRET_KEY} from "../Credentials/Credentials";
class GithubSearchApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            githubUserName : '',
            githubUser : {},
            githubRepos : [],
            error : ''
        }
    }

    updateGithubUser = (e) => {
        this.setState({
            ...this.state,
            githubUserName : e.target.value
        })
    }

    searchProfile = (e) => {
        e.preventDefault();
        this.submitSearch(this.state.githubUserName);
    }

    submitSearch = (githubUser) => {
        let dataUrl = `https://api.github.com/users/${githubUser}?client_ud=${CLIENT_ID}&secret_key=${SECRET_KEY}`;
        let reposUrl = `https://api.github.com/users/${githubUser}/repos?client_ud=${CLIENT_ID}&secret_key=${SECRET_KEY}`;
        Axios.get(dataUrl).then(
            (response) => {
                this.setState({
                    ...this.state,
                    githubUser : response.data
                })
            }
        ).catch(
            (error) => {
                this.setState({
                    ...this.state,
                    error : error.message

                })
            }
        );
        Axios.get(reposUrl).then(
            (response) => {
                this.setState({
                    ...this.state,
                    githubRepos : response.data
                })
            }
        ).catch(
            (error) => {
                this.setState({
                    ...this.state,
                    error : error.message

                })
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                {/*<pre>{JSON.stringify(this.state)}</pre>*/}
                <div className="container p-3 mt-3">

                                <div className="card">
                                    <div className="card-header bg-nav">
                                        <h1 className="text-white">Github Search</h1>
                                    </div>
                                    <div className="card-body">
                                        <form action="" onSubmit={this.searchProfile}>
                                            <div className="input-group">
                                                <input
                                                    value={this.state.githubUserName}
                                                    onChange={this.updateGithubUser}
                                                    type="text" className="form-control" placeholder="Type here..."/>
                                                <div className="input-group-append">
                                                    <div className="input-group-text">
                                                        <button type="submit" className="input1">
                                                            <i className="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.state.githubUser).length > 0
                                    ?
                                    <React.Fragment>
                                        <GithubProfileDetails githubUser={this.state.githubUser}/>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <div className="container p-5 text-center">
                                            <p className="display-4">OOPS !!!!</p>
                                            <p className="display-4">There is no data yet.</p>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                   this.state.githubRepos.length > 0
                                    ?
                                    <React.Fragment>
                                        <GithubRepoDetails githubRepos={this.state.githubRepos}/>
                                    </React.Fragment>
                                    :
                                    null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GithubSearchApp;