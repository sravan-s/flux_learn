"use strict";

var FormElementWithLabel = React.createClass({
    displayName: "FormElementWithLabel",

    getVal: function getVal() {
        return $(ReactDOM.findDOMNode(this)).find('input')[0].value;
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "form-element" },
            React.createElement(
                "label",
                { htmlFor: this.props.id },
                this.props.labelText
            ),
            React.createElement("input", { type: this.props.inputType, id: this.props.id, required: "required" })
        );
    }
});

var FormBtn = React.createClass({
    displayName: "FormBtn",

    render: function render() {
        return React.createElement(
            "button",
            {
                "data-btntype": this.props.btntype },
            this.props.text
        );
    }
});

var ReactForm = React.createClass({
    displayName: "ReactForm",

    getValues: function getValues() {
        return {
            uname: this.refs.uname.getVal(),
            pwd: this.refs.pwd.getVal()
        };
    },
    handleClick: function handleClick(event) {
        event.preventDefault();
        var values;
        if ($(event.target).data('btntype') == 'signup') {
            console.log('go to signup');
        } else if ($(event.target).data('btntype') == 'login') {
            values = this.getValues();
            if (!!values.uname && !!values.pwd) {
                $.ajax({
                    type: "POST",
                    url: 'http://www.google.com',
                    data: values,
                    success: function success(response) {
                        console.log(response);
                    }
                });
            }
        }
    },
    render: function render() {
        return React.createElement(
            "form",
            {
                onClick: this.handleClick },
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
                btntype: "signup",
                ref: "signupBtn" }),
            React.createElement(FormBtn, {
                text: "Login",
                btntype: "login",
                ref: "loginBtn" })
        );
    }
});

ReactDOM.render(React.createElement(ReactForm, null), document.getElementById('main'));