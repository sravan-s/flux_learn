var SignupForm = React.createClass({
    getValues: function() {
        return {
            uname: this.refs.uname.getVal(),
            pwd: this.refs.pwd.getVal(),
            repwd: this.refs.repwd.getVal()
        }
    },
    handleClick: function(event) {
        event.preventDefault();
        var values;
        if($(event.target).data('btntype') == 'signup') {
            values = this.getValues();
            if(!!values.uname && !!values.pwd && !!values.repwd) {
                $.ajax({
                    type: "POST",
                    url: '/addUser',
                    data: values,
                    success: function(response) {
                        if(response.success == true) {
                            alert("Signup successful, please login");
                            window.location = "\login";
                        } else {
                            alert(response.message);
                        }
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
                <FormElementWithLabel
                    id="repeatpwd"
                    ref="repwd"
                    labelText="Repeat Password"
                    inputType="Password"/>
                <FormBtn
                    text="SignUp"
                    btntype="signup"
                    ref="signupBtn"/>
            </form>
        );
    }
});

