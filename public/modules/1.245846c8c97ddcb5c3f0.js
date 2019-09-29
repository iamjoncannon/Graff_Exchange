(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app/components/indiv/PerformanceChart.js":
/*!**************************************************!*\
  !*** ./app/components/indiv/PerformanceChart.js ***!
  \**************************************************/
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

var _recharts = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./app/components/utils.js");

var _loadingDots = __webpack_require__(/*! ../loadingDots */ "./app/components/loadingDots.js");

var _loadingDots2 = _interopRequireDefault(_loadingDots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PerformanceChart = function (_React$Component) {
    _inherits(PerformanceChart, _React$Component);

    function PerformanceChart(props) {
        _classCallCheck(this, PerformanceChart);

        var _this = _possibleConstructorReturn(this, (PerformanceChart.__proto__ || Object.getPrototypeOf(PerformanceChart)).call(this, props));

        _this.resize = function () {

            _this.setState({
                dimensions: {
                    width: _this.container.offsetWidth,
                    height: _this.container.offsetHeight
                }
            });
        };

        _this.state = {};
        return _this;
    }

    _createClass(PerformanceChart, [{
        key: "componentDidMount",
        value: function componentDidMount() {

            this.resize();

            window.addEventListener("resize", this.resize.bind(this));
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {

            window.removeEventListener("resize", this.resize.bind(this));
        }
    }, {
        key: "renderContent",
        value: function renderContent() {
            var _state$dimensions = this.state.dimensions,
                width = _state$dimensions.width,
                height = _state$dimensions.height;
            var _props = this.props,
                selectedPortfolioItem = _props.selectedPortfolioItem,
                period = _props.period,
                portfolio = _props.portfolio;


            var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

            var data = selectedPortfolioItem_object.historical.slice(0, period).reverse();

            for (var each in data) {
                data[each].date = data[each].date.replace("2019-", "").replace("2018-", "");
            }

            return _react2.default.createElement(
                _recharts.LineChart,
                {
                    width: width, height: height, data: data,
                    margin: { top: 30, right: 30, left: 30, bottom: 5 }
                },
                _react2.default.createElement(_recharts.XAxis, { dataKey: "date", hide: !(0, _utils.isDesktop)() || period > 100 ? true : false }),
                _react2.default.createElement(_recharts.YAxis, { domain: ['auto', 'auto'] }),
                _react2.default.createElement(_recharts.Tooltip, null),
                _react2.default.createElement(_recharts.Line, { type: "monotone", dataKey: "open", stroke: "blue", dot: false }),
                _react2.default.createElement(_recharts.Line, { type: "monotone", dataKey: "high", stroke: "green", dot: false }),
                _react2.default.createElement(_recharts.Line, { type: "monotone", dataKey: "low", stroke: "red", dot: false }),
                _react2.default.createElement(_recharts.Line, { type: "monotone", dataKey: "close", stroke: "black", dot: false })
            );
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var dimensions = this.state.dimensions;
            var _props2 = this.props,
                portfolio = _props2.portfolio,
                selectedPortfolioItem = _props2.selectedPortfolioItem;


            var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

            return _react2.default.createElement(
                "div",
                { className: "chart", ref: function ref(el) {
                        return _this2.container = el;
                    } },
                dimensions && selectedPortfolioItem_object.historical ? this.renderContent() : _react2.default.createElement(_loadingDots2.default, { size: "10rem" })
            );
        }
    }]);

    return PerformanceChart;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref) {
    var Portfolio_state = _ref.Portfolio_state;


    return {
        selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
        portfolio: Portfolio_state.portfolio
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(PerformanceChart);

/***/ })

}]);
//# sourceMappingURL=1.245846c8c97ddcb5c3f0.js.map