import React from "react";
class GithubRepoDetails extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let repos = this.props.githubRepos;
        return (
            <React.Fragment>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-nav text-white">
                                <h1>Repositories</h1>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        repos.map(repo => {
                                            return(
                                                <li className="list-group-item" key={repo.id}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <a href={repo.html_url} target="_blank"> {repo.name}</a>
                                                        </div>
                                                        <div className="col-md-3 text-center">
                                                            <span className="badge badge-warning">{repo.stargazers_count} Stars</span>
                                                        </div>
                                                        <div className="col-md-3 text-center">
                                                            <span className="badge badge-success">{repo.watchers_count} Watchers</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default GithubRepoDetails;