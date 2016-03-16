console.log("Chat Components");

var ChatList = React.createClass({
    getChats: function() {
        var count = 0;
        $.ajax({
            type: "GET",
            url: '/getChat?page='+count,
            success: function(response) {
                console.log(response);
                this.setState({
                    chats: response.data
                });
            }.bind(this)
        });
    },
    getInitialState: function() {
        this.getChats();
        return {
            chats: []
        };
    },
    render: function() {
        return (
            <ul className="chat-holder">
                {
                    this.state.chats.map(function(chat) {
                        return <li className="chat-item">{chat.text}</li>
                    })
                }
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
            <div className="chat-submit">
                <input type ="text" />
                <button id="sbmitBtn">Submit</button>
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
                className="chat-room"
                onClick={this.sentChat}>
                <div className="chatlist-wrap">
                    <ChatList/>
                </div>
                <ChatInput
                    ref="chatInput"/>
            </div>);
    }
});
