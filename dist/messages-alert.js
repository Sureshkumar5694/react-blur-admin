'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesAlert = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessagesAlert = exports.MessagesAlert = function (_React$Component) {
  _inherits(MessagesAlert, _React$Component);

  function MessagesAlert() {
    _classCallCheck(this, MessagesAlert);

    return _possibleConstructorReturn(this, (MessagesAlert.__proto__ || Object.getPrototypeOf(MessagesAlert)).apply(this, arguments));
  }

  _createClass(MessagesAlert, [{
    key: 'onClick',
    value: function onClick() {
      if (this.props.onClick) {
        this.props.onClick();
      }
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      return _react2.default.createElement(
        'div',
        { onClick: this.onClick.bind(this), className: 'clearfix' },
        _react2.default.createElement(
          'div',
          { className: 'img-area' },
          _react2.default.createElement('img', { src: this.props.user.picture, className: 'photo-msg-item' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'msg-area' },
          _react2.default.createElement(
            'div',
            null,
            this.props.subject
          ),
          _react2.default.createElement(
            'span',
            { title: this.props.timestamp },
            this.props.relativeTime
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderBody()
      );
    }
  }]);

  return MessagesAlert;
}(_react2.default.Component);

MessagesAlert.propTypes = {
  user: _propTypes2.default.object,
  subject: _propTypes2.default.string,
  createdAt: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  relativeTime: _propTypes2.default.string,
  timestamp: _propTypes2.default.string
};