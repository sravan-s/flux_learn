var FormElementWithLabel = React.createClass({
    render: function() {
        return (
            <div className="form-element">
                <label htmlFor={this.props.id}>{this.props.labelText}< /label>
                <input type={this.props.inputType} id={this.props.id} />
            </div>
        );
    }
});

var FormBtn = React.createClass({
    clickHandler: function() {
        console.log('clked');
    },
    render: function() {
        return (
            <button type="button" onClick={this.clickHandler}>
                {this.props.text}
            </button>
        );
    }
});

var ReactForm = React.createClass({
    login: function() {
        console.log('hi');
    },
    gotoSignup: function() {
        console.log('this.refs');
    },
    render: function() {
        return(
            <form>
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
                    onClick={this.gotoSignup}/>
                <FormBtn
                    text="Login"
                    onClick={this.login}/>
            </form>
        );
    }
});
