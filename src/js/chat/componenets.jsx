console.log("Chat Components");

var ChatList = React.createClass({
    getChats: function() {
        var count = 0;
        $.ajax({
            type: "GET",
            url: '/getChat?page='+count,
            success: function(response) {
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
    componentDidMount: function() {
        var baseUrl = window.location.hostname + ":3001",
            socket = io.connect(baseUrl);
        socket.on('newMsg', function(response) {
            if(response.success == true) {
                this.state.chats.push(response.data);
                this.forceUpdate();
            }
        }.bind(this));
    },
    render: function() {
        return (
            <ul className="chat-holder">
                {
                    this.state.chats.map(function(chat) {
                        return (
                            <li className="chat-item">
                                <span className="user">
                                    {chat.user}
                                </span>
                                <span className="chat-text">
                                    {chat.text}
                                </span>
                            </li>
                        );
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

var Logout = React.createClass({
    getInitialState: function () {
        var decodedId = atob(base64Module.getPayload(base64Module.getCook("token"))),
            userName;
        decodedId = JSON.parse("{" + decodedId.match(/[^{}]+(?=\})/g) + "}");
        if(!!decodedId) {
            userName = decodedId.user;
        }
        return {
            uname: userName
        };
    },
    logout: function() {
        authModule.logout();
    },
    render: function() {
        return (
            <div>
                <p>
                    Hello,
                    <span className="uname">
                        {this.state.uname}
                    </span>
                </p>
                <a
                    href="#"
                    onClick={this.logout}>
                    Logout
                </a>
            </div>
        );
    }
});
