class LoginForm extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <h1>Login</h1>
                        <form>
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input type="username" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                                <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                <input type="checkbox" className="form-check-input" />
                                Log In
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button> 
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

