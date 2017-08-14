"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_React$Component) {
    _inherits(LoginForm, _React$Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.state = {
            username: "",
            password: ""
        };
        _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
        _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(LoginForm, [{
        key: "handleUsernameChange",
        value: function handleUsernameChange(event) {
            this.setState({
                username: event.target.value
            });
        }
    }, {
        key: "handlePasswordChange",
        value: function handlePasswordChange(event) {
            this.setState({
                password: event.target.value
            });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            if (this.state.username === '' || this.state.password === '') {
                alert("You must provide a valid username and password");
                return false;
            }

            var loginPayLoad = {
                username: this.state.username,
                password: this.state.password
            };

            $.post("/login", loginPayLoad);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 offset-md-3" },
                        React.createElement(
                            "h1",
                            null,
                            "Login"
                        ),
                        React.createElement(
                            "form",
                            { onSubmit: this.handleSubmit },
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "label",
                                    { "for": "username" },
                                    "Username"
                                ),
                                React.createElement("input", { type: "username", className: "form-control", id: "username", "aria-describedby": "usernameHelp", placeholder: "Enter username", value: this.state.username, onChange: this.handleUsernameChange })
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "label",
                                    { "for": "password" },
                                    "Password"
                                ),
                                React.createElement("input", { type: "password", className: "form-control", id: "password", placeholder: "Password", value: this.state.password, onChange: this.handlePasswordChange })
                            ),
                            React.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Submit"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoginForm;
}(React.Component);

;
"use strict";

var NavComponent = function NavComponent() {
    return React.createElement(
        "nav",
        { className: "navbar navbar-expand-lg navbar-light bg-light" },
        React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            "CMS System"
        ),
        React.createElement(
            "button",
            { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
            React.createElement("span", { className: "navbar-toggler-icon" })
        ),
        React.createElement(
            "div",
            { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
            React.createElement(
                "ul",
                { className: "navbar-nav mr-auto" },
                React.createElement(
                    "li",
                    { className: "nav-item" },
                    React.createElement(
                        "a",
                        { className: "nav-link", href: "#" },
                        "Sign Up ",
                        React.createElement(
                            "span",
                            { className: "sr-only" },
                            "(current)"
                        )
                    )
                ),
                React.createElement(
                    "li",
                    { className: "nav-item" },
                    React.createElement(
                        "a",
                        { className: "nav-link", href: "#" },
                        "Log In"
                    )
                ),
                React.createElement(
                    "li",
                    { className: "nav-item" },
                    React.createElement(
                        "a",
                        { className: "nav-link", href: "#" },
                        "Link 3"
                    )
                )
            )
        )
    );
};
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignupForm = function (_React$Component) {
    _inherits(SignupForm, _React$Component);

    function SignupForm(props) {
        _classCallCheck(this, SignupForm);

        var _this = _possibleConstructorReturn(this, (SignupForm.__proto__ || Object.getPrototypeOf(SignupForm)).call(this, props));

        _this.state = {
            username: "",
            password: "",
            passwordConfirmation: "",
            administrator: false
        };
        _this.handleUsernameChange = _this.handleUsernameChange.bind(_this);
        _this.handlePasswordChange = _this.handlePasswordChange.bind(_this);
        _this.handlePasswordConfirmationChange = _this.handlePasswordConfirmationChange.bind(_this);
        _this.handleAdministrator = _this.handleAdministrator.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);

        return _this;
    }

    _createClass(SignupForm, [{
        key: "handleUsernameChange",
        value: function handleUsernameChange(event) {
            this.setState({
                username: event.target.value
            });
        }
    }, {
        key: "handlePasswordChange",
        value: function handlePasswordChange(event) {
            this.setState({
                password: event.target.value
            });
        }
    }, {
        key: "handlePasswordConfirmationChange",
        value: function handlePasswordConfirmationChange(event) {
            this.setState({
                passwordConfirmation: event.target.value
            });
        }
    }, {
        key: "handleAdministrator",
        value: function handleAdministrator(event) {
            this.setState({
                administrator: !this.state.administrator //flip administrator on each click
            });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            if (this.state.username === '' || this.state.password === '') {
                alert("You must provide a valid username and password");
                return false;
            } else if (this.state.password !== this.state.passwordConfirmation) {
                alert("Your passwords do not match");
                return false;
            }

            var signupPayLoad = {
                username: this.state.username,
                password: this.state.password,
                administrator: this.state.administrator
            };

            $.post("/register", signupPayLoad);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 offset-md-3" },
                        React.createElement(
                            "h1",
                            null,
                            "Sign Up"
                        ),
                        React.createElement(
                            "form",
                            { onSubmit: this.handleSubmit },
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "label",
                                    { "for": "username" },
                                    "Username"
                                ),
                                React.createElement("input", { type: "username", className: "form-control", id: "username", "aria-describedby": "usernameHelp", placeholder: "Enter username", value: this.state.username, onChange: this.handleUsernameChange })
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "label",
                                    { "for": "password" },
                                    "Password"
                                ),
                                React.createElement("input", { type: "password", className: "form-control", id: "password", placeholder: "Password", value: this.state.password, onChange: this.handlePasswordChange })
                            ),
                            React.createElement(
                                "div",
                                { className: "form-group" },
                                React.createElement(
                                    "label",
                                    { "for": "passwordConfirmation" },
                                    "Password Confirmation"
                                ),
                                React.createElement("input", { type: "password", className: "form-control", id: "passwordConfirmation", placeholder: "Password Confirmation", value: this.state.passwordConfirmation, onChange: this.handlePasswordConfirmationChange })
                            ),
                            React.createElement(
                                "div",
                                { className: "form-check" },
                                React.createElement(
                                    "label",
                                    { className: "form-check-label" },
                                    React.createElement("input", { type: "checkbox", className: "form-check-input", onChange: this.handleAdministrator }),
                                    "Administrator Rights?"
                                )
                            ),
                            React.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Submit"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SignupForm;
}(React.Component);

;
'use strict';

ReactDOM.render(React.createElement(NavComponent, null), document.getElementById('navbar'));
ReactDOM.render(React.createElement(LoginForm, null), document.getElementById('app'));
// ReactDOM.render(<SignupForm />, document.getElementById('app'));