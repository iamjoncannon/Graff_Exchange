(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/components/Socket.js":
/*!**********************************!*\
  !*** ./app/components/Socket.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _symbolHash = __webpack_require__(/*! ./symbolHash.json */ "./app/components/symbolHash.json");

var _symbolHash2 = _interopRequireDefault(_symbolHash);

var _actions_for_Portfolio = __webpack_require__(/*! ../../store/Portfolio/actions_for_Portfolio.js */ "./store/Portfolio/actions_for_Portfolio.js");

var _actions_for_Portfolio2 = _interopRequireDefault(_actions_for_Portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Socket = function (_React$Component) {
  _inherits(Socket, _React$Component);

  function Socket(props) {
    _classCallCheck(this, Socket);

    var _this = _possibleConstructorReturn(this, (Socket.__proto__ || Object.getPrototypeOf(Socket)).call(this, props));

    _this.connectToSocket = function () {

      var socket = io('https://ws-api.iextrading.com/1.0/last');

      var myBook = [];

      for (var stock in _this.props.portfolio) {

        myBook.push(_this.props.portfolio[stock].symbol);
      }

      socket.on('connect', function () {

        myBook.forEach(function (stock) {
          socket.emit('subscribe', stock);
        });
      });

      socket.on('message', function (message) {

        _this.props.handleSocketMessage(JSON.parse(message));
      });

      _this.setState({ socket: socket, portfolioSize: Object.keys(_this.props.portfolio).length });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Socket, [{
    key: 'componentDidUpdate',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var currentPortfolio, portfolioChanged;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                currentPortfolio = Object.keys(this.props.portfolio).length;
                portfolioChanged = currentPortfolio !== this.state.portfolioSize;

                if (!portfolioChanged) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return this.state.socket.close();

              case 5:

                this.connectToSocket();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate() {
        return _ref.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.connectToSocket();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: { height: "0", width: "0" } });
    }
  }]);

  return Socket;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref2) {
  var Portfolio_state = _ref2.Portfolio_state;

  return {
    portfolio: Portfolio_state.portfolio
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {

    handleSocketMessage: function handleSocketMessage(message) {
      return dispatch(_actions_for_Portfolio2.default.handleSocketMessage(message));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Socket);

/***/ })

}]);
//# sourceMappingURL=1.1e5de6a5c1a3c41ad0f8.js.map