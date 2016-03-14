'use strict';

console.log('script init');
var mountNode = document.getElementById('mount');

var HelloMessage = React.createClass({
  displayName: 'HelloMessage',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'Hello ',
      this.props.name
    );
  }
});

ReactDOM.render(React.createElement(HelloMessage, { name: 'John' }), mountNode);