"use strict";

var FormElementWithLabel = React.createClass({
    displayName: "FormElementWithLabel",

    render: function render() {
        return React.createElement(
            "div",
            { className: "form-element" },
            React.createElement(
                "label",
                { htmlFor: this.props.id },
                this.props.labelText
            ),
            React.createElement("input", { type: this.props.inputType, id: this.props.id })
        );
    }
});

var FormBtn = React.createClass({
    displayName: "FormBtn",

    clickHandler: function clickHandler() {
        console.log('clked');
    },
    render: function render() {
        return React.createElement(
            "button",
            { type: "button", onClick: this.clickHandler },
            this.props.text
        );
    }
});

var ReactForm = React.createClass({
    displayName: "ReactForm",

    login: function login() {
        console.log('hi');
    },
    gotoSignup: function gotoSignup() {
        console.log('this.refs');
    },
    render: function render() {
        return React.createElement(
            "form",
            null,
            React.createElement(FormElementWithLabel, {
                id: "username",
                ref: "uname",
                labelText: "User Name",
                inputType: "Text" }),
            React.createElement(FormElementWithLabel, {
                id: "password",
                ref: "pwd",
                labelText: "Password",
                inputType: "Password" }),
            React.createElement(FormBtn, {
                text: "SignUp",
                onClick: this.gotoSignup }),
            React.createElement(FormBtn, {
                text: "Login",
                onClick: this.login })
        );
    }
});

ReactDOM.render(React.createElement(ReactForm, null), document.getElementById('main'));