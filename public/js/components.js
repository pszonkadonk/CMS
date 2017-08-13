'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavComponent = _react2.default.createClass({
    displayName: 'NavComponent',
    render: function render() {
        return _react2.default.createElement(
            'h3',
            null,
            'This is a NavComponent'
        );
    }
});
'use strict';

ReactDOM.render(React.createElement(NavComponent, null), document.getElementById('app'));