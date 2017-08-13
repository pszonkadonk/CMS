class SignupForm extends React.Component {
    render() {
        return (
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="username" class="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                        <small id="usernameHelp" class="form-text text-muted">We'll never share your username with anyone else.</small>
                    </div>
                     <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                    </div>
                     <div class="form-group">
                        <label for="passwordConfirmation">Password</label>
                        <input type="passwordConfirmation" class="form-control" id="passwordConfirmation" placeholder="Password Confirmation" />
                    </div>                    
                    <div class="form-check">
                        <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" />
                        Sign Up
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button> 
                </form>
        );
    }
};

