import React from "react";
class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }

    render() {
        let user = this.props.githubUser;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card mt-3">
                            <img src={user.avatar_url} alt="" className="img-fluid" />
                            <div className="card-body text-center">

                                <p className="h3 mt-1">{user.name}</p>
                                <small>{user.bio}</small>
                                <br/>
                                <a href={user.html_url} target="_blank" className="btn btn-sm btn-danger">Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card mt-3">
                            <div className="card-header p-3">
                                <div className="row">
                                    <div className="col-md-3 text-center">
                                        <span className="badge badge-success">
                                            {user.followers} Followers
                                        </span>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <span className="badge badge-warning">
                                            {user.following} Following
                                        </span>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <span className="badge badge-primary">
                                            {user.public_repos} Repository
                                        </span>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <span className="badge badge-secondary">
                                            {user.public_gists} Gists
                                         </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-group p-1">
                                    <li className="list-group-item">
                                        <p className="lead">NAME : {user.name}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="lead">GITHUB PROFILE : <a href={user.html_url} target="_blank">{user.html_url}</a> </p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="lead">COMPANY : {user.company}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="lead">LOCATION : {user.location}</p>
                                    </li>
                                    <li className="list-group-item">
                                        <p className="lead">BLOG : {user.blog}</p>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default GithubProfileDetails;