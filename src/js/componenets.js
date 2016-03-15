var formElementWithLabel = React.createClass({
    render: function () {
        return 
            <div class="form-element">
                <label for={props.id}>{props.labelText}< /label>
                <input type={props.inputType} id={props.id} />
            < /div>;
    }
});
