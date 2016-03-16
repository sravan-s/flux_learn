console.log("Chat Components");

var ChatList = React.createClass({
    handleClick: function() {
        var count = 0;
        $.ajax({
            type: "GET",
            url: '/getChat?page='+count,
            success: function(response) {
                console.log(response);
            }
        });
    },
    render: function() {
        return (
            <ul onClick={this.handleClick}>
                <li>Item1</li>
            </ul>
        );
    }
});

var ChatInput = React.createClass({
    getVal: function() {
        return $(ReactDOM.findDOMNode(this)).find('input')[0].value;
    },
    render: function() {
        return (
            <div>
                <input type ="text" />
                <button id="sbmitBtn">Submitt</button>
            </div>
        );
    }
});

var ChatRoom = React.createClass({
    sentChat: function(event) {
        event.preventDefault();
        var input = $(event.target).siblings('input')[0];
        var data = {
            text: this.refs.chatInput.getVal()
        };
        if($(event.target).attr('id') == 'sbmitBtn' && data.text) {
            $.ajax({
                type: "POST",
                url: '/addChat',
                data: data,
                success: function(response) {
                    if(response.success == true) {
                        input.value = "";
                    }
                }
            });
        }
    },
    getChat: function() {
        
    },
    render: function() {
        return (
            <div 
                onClick={this.sentChat}>
                <div>
                    <ChatList/>
                </div>
                <ChatInput
                    ref="chatInput"/>
            </div>);
    }
});
