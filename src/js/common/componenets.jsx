var FormElementWithLabel = React.createClass({
    getVal: function() {
        return $(ReactDOM.findDOMNode(this)).find('input')[0].value;
    },
    render: function() {
        return (
            <div className="form-element">
                <label htmlFor={this.props.id}>{this.props.labelText}< /label>
                <input type={this.props.inputType} id={this.props.id} required="required"/>
            </div>
        );
    }
});

var FormBtn = React.createClass({
    render: function() {
        return (
            <button
                data-btntype={this.props.btntype}>
                {this.props.text}
            </button>
        );
    }
});
