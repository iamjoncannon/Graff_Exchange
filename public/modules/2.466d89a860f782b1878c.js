(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/components/indiv/PerformanceChart.js":
/*!**************************************************!*\
  !*** ./app/components/indiv/PerformanceChart.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./app/components/utils.js");
/* harmony import */ var _loadingDots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loadingDots */ "./app/components/loadingDots.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PerformanceChart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PerformanceChart, _React$Component);

  function PerformanceChart(props) {
    var _this;

    _classCallCheck(this, PerformanceChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PerformanceChart).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      if (false) {}

      _this.setState({
        dimensions: {
          width: _this.container.offsetWidth,
          height: _this.container.offsetHeight
        }
      });
    });

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
      var _this$state$dimension = this.state.dimensions,
          width = _this$state$dimension.width,
          height = _this$state$dimension.height;
      var _this$props = this.props,
          selectedPortfolioItem = _this$props.selectedPortfolioItem,
          period = _this$props.period,
          portfolio = _this$props.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];
      var data = selectedPortfolioItem_object.historical.slice(0, period).reverse();

      for (var each in data) {
        data[each].date = data[each].date.replace("2019-", "").replace("2018-", "");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["LineChart"], {
        width: width,
        height: height,
        data: data,
        margin: {
          top: 30,
          right: 30,
          left: 30,
          bottom: 5
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
        dataKey: "date",
        hide: !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isDesktop"])() || period > 100 ? true : false
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
        domain: ['auto', 'auto']
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        type: "monotone",
        dataKey: "open",
        stroke: "blue",
        dot: false
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        type: "monotone",
        dataKey: "high",
        stroke: "green",
        dot: false
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        type: "monotone",
        dataKey: "low",
        stroke: "red",
        dot: false
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_2__["Line"], {
        type: "monotone",
        dataKey: "close",
        stroke: "black",
        dot: false
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var dimensions = this.state.dimensions;
      var _this$props2 = this.props,
          portfolio = _this$props2.portfolio,
          selectedPortfolioItem = _this$props2.selectedPortfolioItem;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart",
        ref: function ref(el) {
          return _this2.container = el;
        }
      }, dimensions && selectedPortfolioItem_object.historical ? this.renderContent() : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loadingDots__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "10rem"
      }));
    }
  }]);

  return PerformanceChart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
    portfolio: Portfolio_state.portfolio
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(PerformanceChart));

/***/ })

}]);
//# sourceMappingURL=2.466d89a860f782b1878c.js.map