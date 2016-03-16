var LoginForm = React.createClass({
    getValues: function() {
        return {
            uname: this.refs.uname.getVal(),
            pwd: this.refs.pwd.getVal()
        }
    },
    handleClick: function(event) {
        event.preventDefault();
        var values;
        if($(event.target).data('btntype') == 'signup') {
            window.location = '/signup';
        } else if($(event.target).data('btntype') == 'login') {
            values = this.getValues();
            if(!!values.uname && !!values.pwd) {
                $.ajax({
                    type: "POST",
                    url: '/auth',
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
