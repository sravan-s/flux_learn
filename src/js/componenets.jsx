var FormElementWithLabel = React.createClass({
    getVal: function() {
        return $(ReactDOM.findDOMNode(this)).find('input')[0].value;
    },
    render: function() {
        return (
            <div className="form-element">
                <label htmlFor={this.props.id}>{this.props.labelText}< /label>
                <input type={this.props.inputType} id={this.props.id}/>
            </div>
        );
    }
});

var FormBtn = React.createClass({
    render: function() {
        return (
            <button
                type="button"
                data-btntype={this.props.btntype}>
                {this.props.text}
            </button>
        );
    }
});

var ReactForm = React.createClass({
    getValues: function() {
        return {
            uname: this.refs.uname.getVal(),
            pwd: this.refs.pwd.getVal()
        }
    },
    handleClick: function(event) {
        var values;
        if($(event.target).data('btntype') == 'signup') {
            console.log('go to signup');
        } else if($(event.target).data('btntype') == 'login') {
            values = this.getValues();
            if(!!values.uname && !!values.pwd) {
                $.ajax({
                    type: "POST",
                    url: 'http://www.google.com',
                    data: values,
                    success: function(response) {
                        console.log(response);
                    }
                });
            }
        }
    },
    render: function() {
        return(
            <form
                onClick={this.handleClick}>
                <FormElementWithLabel
                    id="username"
                    ref="uname"
                    labelText="User Name"
                    inputType="Text"/>
                <FormElementWithLabel
                    id="password"
                    ref="pwd"
                    labelText="Password"
                    inputType="Password"/>
                <FormBtn
                    text="SignUp"
                    btntype="signup"
                    ref="signupBtn"/>
                <FormBtn
                    text="Login"
                    btntype="login"
                    ref="loginBtn"/>
            </form>
        );
    }
});
