ReactDOM.render(
    <ChatRoom />,
    document.getElementById('main')
);

var baseUrl = window.location.hostname + ":3001",
    socket = io.connect(baseUrl);
