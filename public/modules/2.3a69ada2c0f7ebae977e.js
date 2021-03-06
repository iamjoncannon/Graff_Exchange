(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./app/components/DataNav.js":
/*!***********************************!*\
  !*** ./app/components/DataNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DataNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function DataNav(props) {
  var data = props.data,
      switchItem = props.switchItem,
      selectedDataNavItem = props.selectedDataNavItem;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "data-nav"
  }, data.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: i,
      onClick: function onClick() {
        return switchItem(item);
      },
      className: selectedDataNavItem === item ? "selected" : undefined
    }, item);
  }));
}
;

/***/ }),

/***/ "./app/components/Footer.js":
/*!**********************************!*\
  !*** ./app/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./app/components/utils.js");


var front_end_url = "https://github.com/iamjoncannon/Graff_Exchange";
var back_end_url = "https://github.com/iamjoncannon/Graff_Exchange_API";

var Footer = function Footer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: front_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://jayceecodesphotos.s3.amazonaws.com/react.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: front_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://jayceecodesphotos.s3.amazonaws.com/redux.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: front_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png",
    style: {
      backgroundColor: "white",
      borderRadius: "10px"
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: back_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _utils__WEBPACK_IMPORTED_MODULE_1__["logoUrl"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: back_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: back_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://cdn.iconscout.com/icon/free/png-512/redis-6-1175105.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: back_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://jayceecodesphotos.s3.amazonaws.com/postgres.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: back_end_url,
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://jayceecodesphotos.s3.amazonaws.com/aws.png",
    style: {
      borderRadius: "10px"
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./app/components/Landing.js":
/*!***********************************!*\
  !*** ./app/components/Landing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./app/components/utils.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _store_User_thunks_for_User_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/User/thunks_for_User.js */ "./store/User/thunks_for_User.js");
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







var Landing =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Landing, _React$Component);

  function Landing(props) {
    var _this;

    _classCallCheck(this, Landing);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Landing).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "DemoAccount", function () {
      _this.setState({
        mode: 'sign-in',
        email: "moneybags@graff.app",
        password: "password"
      });

      setTimeout(function () {
        return _this.handleSubmit();
      }, 50);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.setState(_defineProperty({}, evt.target.name, evt.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (evt) {
      if (evt) {
        evt.preventDefault();
        evt.stopPropagation();
      }

      var _this$state = _this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          email = _this$state.email,
          password = _this$state.password; // validate email

      var re = /\S+@\S+\.\S+/;

      if (!re.test(email)) {
        _this.setState({
          local_landing_page_error: "Invalid Email"
        });

        setTimeout(function () {
          return _this.setState({
            local_landing_page_error: null
          });
        }, 5000);
        return;
      }

      if (password === "") {
        _this.setState({
          local_landing_page_error: "Invalid Password"
        });

        setTimeout(function () {
          return _this.setState({
            local_landing_page_error: null
          });
        }, 5000);
        return;
      }

      if (_this.state.mode === "sign-in") {
        _this.props.handleLogin(email, password);
      }

      if (_this.state.mode === "sign-up") {
        // validate that passwords match
        if (password !== _this.state.confirm_password) {
          _this.setState({
            local_landing_page_error: "Passwords do not match"
          });

          setTimeout(function () {
            return _this.setState({
              local_landing_page_error: null
            });
          }, 5000);
          return;
        }

        _this.props.handleRegister(firstName, lastName, email, password);
      }

      _this.setState({
        submitted: true,
        server_landing_page_error: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMode", function (mode) {
      _this.setState({
        mode: mode,
        server_landing_page_error: false,
        local_landing_page_error: null
      });
    });

    _this.state = {
      mode: 'sign-in',
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
      submitted: false,
      server_landing_page_error: true,
      local_landing_page_error: null
    };
    return _this;
  }

  _createClass(Landing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // the background needs to be cream for the desktop to seem inset
      // ...but only for this page
      document.body.style.backgroundColor = "#F9FAFB";
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.style.backgroundColor = 'white';
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.server_landing_page_error && this.state.submitted) {
        this.setState({
          submitted: false,
          server_landing_page_error: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isDesktop = window.innerWidth > 1100;
      var _this$state2 = this.state,
          mode = _this$state2.mode,
          local_landing_page_error = _this$state2.local_landing_page_error; // this.state is a boolean- don't display if user switches between screens 

      var server_landing_page_error = this.state.server_landing_page_error && this.props.server_landing_page_error;

      if (this.props.isLoggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
          to: "/all/watchlist"
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: isDesktop && mode === "sign-up" ? "landing landing-rev" : "landing"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "header"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "title"
        }, "Graff Exchange"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "blurb"
        }, _utils__WEBPACK_IMPORTED_MODULE_1__["blurb"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: _utils__WEBPACK_IMPORTED_MODULE_1__["logoUrl"]
        }), !isDesktop && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "sign-btns"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: mode === "sign-up" ? "unselected" : undefined,
          onClick: function onClick() {
            return _this2.handleMode("sign-in");
          }
        }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: mode === "sign-in" && !isDesktop ? "unselected" : undefined,
          onClick: function onClick() {
            return _this2.handleMode("sign-up");
          }
        }, "Sign Up")), isDesktop && mode === "sign-up" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "sign-btns"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " Already have an account? "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.handleMode("sign-in");
          }
        }, "Sign In")), isDesktop && mode == "sign-in" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "sign-btns"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Don't have an account? "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick() {
            return _this2.handleMode("sign-up");
          }
        }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, mode === "sign-up" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "First Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "firstName",
          value: this.state.firstName,
          onChange: this.handleChange
        })), mode === "sign-up" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Last Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "text",
          name: "lastName",
          value: this.state.lastName,
          onChange: this.handleChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          type: "email",
          name: "email",
          required: true,
          value: this.state.email,
          onChange: this.handleChange
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          onChange: this.handleChange,
          type: "password",
          name: "password",
          value: this.state.password
        })), mode === "sign-up" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          onChange: this.handleChange,
          type: "password",
          name: "confirm_password",
          value: this.state.confirm_password
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          onClick: this.handleSubmit
        }, mode === 'sign-in' && !this.state.submitted ? "Sign In" : mode === 'sign-up' && !this.state.submitted ? "Sign Up" : this.state.submitted ? "Loading..." : ""), server_landing_page_error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "error-message"
        }, this.props.server_landing_page_error), local_landing_page_error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "error-message"
        }, local_landing_page_error), mode === "sign-in" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: this.DemoAccount
        }, "Sign into Demo Account"))));
      }
    }
  }]);

  return Landing;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var User_state = _ref.User_state;
  return {
    isLoggedIn: User_state.isLoggedIn,
    server_landing_page_error: User_state.landing_page_error
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleLogin: function handleLogin(email, password) {
      return dispatch(Object(_store_User_thunks_for_User_js__WEBPACK_IMPORTED_MODULE_4__["loginThunk"])(email, password));
    },
    handleRegister: function handleRegister() {
      return dispatch(_store_User_thunks_for_User_js__WEBPACK_IMPORTED_MODULE_4__["registerThunk"].apply(void 0, arguments));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Landing));

/***/ }),

/***/ "./app/components/MainNav.js":
/*!***********************************!*\
  !*** ./app/components/MainNav.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./app/components/utils.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Socket */ "./app/components/Socket.js");
/* harmony import */ var _store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/Portfolio/thunks_for_Portfolio.js */ "./store/Portfolio/thunks_for_Portfolio.js");
/* harmony import */ var _store_User_actions_for_User_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/User/actions_for_User.js */ "./store/User/actions_for_User.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








 // since the main nav gets mounted 
// when the user logs in, and its mounted
// through the application workflow, it will
// be used to retrieve initial data and will
// host the socket

var MainNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MainNav, _React$Component);

  function MainNav(props) {
    _classCallCheck(this, MainNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainNav).call(this, props));
  }

  _createClass(MainNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          token = _this$props.token,
          hydratePortfolio = _this$props.hydratePortfolio;
      hydratePortfolio(token);
    }
  }, {
    key: "render",
    value: function render() {
      var pathname = this.props.location.pathname;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Socket__WEBPACK_IMPORTED_MODULE_4__["default"], null), _utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "desk-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Graff Exchange"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.Name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Balance: $", Number(this.props.Balance).toFixed(2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.props.LogOut
      }, "Log Out")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-screens"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/all/watchlist"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-home fa-".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"] ? "2" : "7", "x ").concat(pathname.includes("/all") ? "selected" : "")
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"])() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _utils__WEBPACK_IMPORTED_MODULE_2__["logoUrl"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: Object.keys(this.props.portfolio).length > 0 ? "/indiv/perf" : "/all/watchlist"
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"])() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Holdings"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-chart-bar fa-".concat(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"] ? "2" : "7", "x ").concat(pathname.includes("/indiv") ? "selected" : "")
      }))));
    }
  }]);

  return MainNav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;

var mapStateToProps = function mapStateToProps(_ref) {
  var User_state = _ref.User_state,
      Portfolio_state = _ref.Portfolio_state;
  return {
    Name: User_state.Name,
    Balance: User_state.balance,
    token: User_state.token,
    portfolio: Portfolio_state.portfolio
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    LogOut: function LogOut() {
      return dispatch(_store_User_actions_for_User_js__WEBPACK_IMPORTED_MODULE_6__["default"].LogOut());
    },
    hydratePortfolio: function hydratePortfolio(token) {
      return dispatch(Object(_store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_5__["hydratePortfolioThunk"])(token));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MainNav));

/***/ }),

/***/ "./app/components/Socket.js":
/*!**********************************!*\
  !*** ./app/components/Socket.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Portfolio_actions_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/Portfolio/actions_for_Portfolio.js */ "./store/Portfolio/actions_for_Portfolio.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





if (!io) {
  io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
}

var Socket =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Socket, _React$Component);

  function Socket(props) {
    var _this;

    _classCallCheck(this, Socket);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Socket).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "connectToSocket", function () {
      var socket = io('https://ws-api.iextrading.com/1.0/last', {
        transports: ["websocket", "polling"]
      });
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

      _this.setState({
        socket: socket,
        portfolioSize: Object.keys(_this.props.portfolio).length
      });
    });

    _this.state = {};
    return _this;
  }

  _createClass(Socket, [{
    key: "componentDidUpdate",
    value: function () {
      var _componentDidUpdate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
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
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidUpdate() {
        return _componentDidUpdate.apply(this, arguments);
      }

      return componentDidUpdate;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.connectToSocket();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: "0",
          width: "0"
        }
      });
    }
  }]);

  return Socket;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    portfolio: Portfolio_state.portfolio
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSocketMessage: function handleSocketMessage(message) {
      return dispatch(_store_Portfolio_actions_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_2__["default"].handleSocketMessage(message));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Socket));

/***/ }),

/***/ "./app/components/app.js":
/*!*******************************!*\
  !*** ./app/components/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Landing */ "./app/components/Landing.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./app/components/Footer.js");
/* harmony import */ var _MainNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainNav */ "./app/components/MainNav.js");
/* harmony import */ var _indiv_IndivNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indiv/IndivNav */ "./app/components/indiv/IndivNav.js");
/* harmony import */ var _indiv_IndivPerf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./indiv/IndivPerf */ "./app/components/indiv/IndivPerf.js");
/* harmony import */ var _indiv_IndivFin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indiv/IndivFin */ "./app/components/indiv/IndivFin.js");
/* harmony import */ var _indiv_IndivNews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./indiv/IndivNews */ "./app/components/indiv/IndivNews.js");
/* harmony import */ var _indiv_IndivTrans__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indiv/IndivTrans */ "./app/components/indiv/IndivTrans.js");
/* harmony import */ var _portfolio_AllNav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/AllNav */ "./app/components/portfolio/AllNav.js");
/* harmony import */ var _portfolio_AllWatchlist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/AllWatchlist */ "./app/components/portfolio/AllWatchlist.js");
/* harmony import */ var _portfolio_AllTrans__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./portfolio/AllTrans */ "./app/components/portfolio/AllTrans.js");















var App = function App(props) {
  // login route
  if (props.location.pathname === "/") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _Landing__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      exact: true,
      path: "/",
      component: _Footer__WEBPACK_IMPORTED_MODULE_4__["default"]
    }));
  } else {
    // trying to hit logged in route 
    // but not logged in 
    if (!props.isLoggedIn) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
        to: "/"
      });
    } else {
      // logged in routes
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/",
        component: _MainNav__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/indiv",
        component: _indiv_IndivNav__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/indiv/perf",
        component: _indiv_IndivPerf__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/indiv/finan",
        component: _indiv_IndivFin__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/indiv/news",
        component: _indiv_IndivNews__WEBPACK_IMPORTED_MODULE_9__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/indiv/trans",
        component: _indiv_IndivTrans__WEBPACK_IMPORTED_MODULE_10__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/all",
        component: _portfolio_AllNav__WEBPACK_IMPORTED_MODULE_11__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/all/watchlist",
        component: _portfolio_AllWatchlist__WEBPACK_IMPORTED_MODULE_12__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/all/transactions",
        component: _portfolio_AllTrans__WEBPACK_IMPORTED_MODULE_13__["default"]
      }));
    }
  }
};

var mapStateToProps = function mapStateToProps(_ref) {
  var User_state = _ref.User_state;
  return {
    isLoggedIn: User_state.isLoggedIn
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, null)(App)));

/***/ }),

/***/ "./app/components/indiv/IndivFin.js":
/*!******************************************!*\
  !*** ./app/components/indiv/IndivFin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataNav */ "./app/components/DataNav.js");
/* harmony import */ var _store_Portfolio_thunks_for_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/Portfolio/thunks_for_Portfolio */ "./store/Portfolio/thunks_for_Portfolio.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./app/components/utils.js");
/* harmony import */ var _loadingDots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../loadingDots */ "./app/components/loadingDots.js");
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






 // Financials Page- displays quarterly financial reports

var IndivFin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndivFin, _React$Component);

  function IndivFin(props) {
    var _this;

    _classCallCheck(this, IndivFin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndivFin).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "dataSwitch", function (newDisplay) {
      _this.setState({
        selectedDataNavItem: newDisplay
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hydrate_data", function () {
      var _this$props = _this.props,
          hydrateQuarterlyFinancialsThunk = _this$props.hydrateQuarterlyFinancialsThunk,
          selectedPortfolioItem = _this$props.selectedPortfolioItem;
      hydrateQuarterlyFinancialsThunk(selectedPortfolioItem);
    });

    _this.state = {
      selectedDataNavItem: null
    };
    return _this;
  }

  _createClass(IndivFin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          selectedPortfolioItem = _this$props2.selectedPortfolioItem,
          portfolio = _this$props2.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isCell"])() && !selectedPortfolioItem_object.financials) {
        this.hydrate_data();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          selectedPortfolioItem = _this$props3.selectedPortfolioItem,
          portfolio = _this$props3.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isCell"])() && !selectedPortfolioItem_object.financials) {
        this.hydrate_data();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          selectedPortfolioItem = _this$props4.selectedPortfolioItem,
          portfolio = _this$props4.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem]; // have to cascade like this to prevent null errors

      var is_Loaded = selectedPortfolioItem_object && selectedPortfolioItem_object.financials && selectedPortfolioItem_object.financials.length;
      var no_financial_data = selectedPortfolioItem_object && selectedPortfolioItem_object.financials && selectedPortfolioItem_object.financials.length === 0; // harvest dates of reports from data 

      var data_nav_items = [];

      if (is_Loaded) {
        var financials = selectedPortfolioItem_object.financials;
        financials.forEach(function (each) {
          return data_nav_items.push(each.date);
        });
      } // interesting situation- we want to manage this nav state locally,
      // but state depends on data hydrated globally 


      var selectedDataNavItem; // solution- if this state proprty is null, ie component just mounted 

      if (!this.state.selectedDataNavItem) {
        selectedDataNavItem = data_nav_items[0];
      } else {
        selectedDataNavItem = this.state.selectedDataNavItem;
      }

      var whichFinancial = data_nav_items.indexOf(selectedDataNavItem);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, is_Loaded && whichFinancial !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "indiv-fin indiv-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, selectedDataNavItem), Object.entries(selectedPortfolioItem_object.financials[whichFinancial]).map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[1]));
      })) : no_financial_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error_message"
      }, "Data Not Available") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "block",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loadingDots__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: "10vh"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: data_nav_items,
        selectedDataNavItem: selectedDataNavItem,
        switchItem: this.dataSwitch
      }));
    }
  }]);

  return IndivFin;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    portfolio: Portfolio_state.portfolio,
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hydrateQuarterlyFinancialsThunk: function hydrateQuarterlyFinancialsThunk(symbol) {
      return dispatch(Object(_store_Portfolio_thunks_for_Portfolio__WEBPACK_IMPORTED_MODULE_3__["hydrateQuarterlyFinancialsThunk"])(symbol));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(IndivFin));

/***/ }),

/***/ "./app/components/indiv/IndivNav.js":
/*!******************************************!*\
  !*** ./app/components/indiv/IndivNav.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./app/components/utils.js");
/* harmony import */ var _IndivSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IndivSelector */ "./app/components/indiv/IndivSelector.js");
/* harmony import */ var _TradeBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TradeBox */ "./app/components/indiv/TradeBox.js");
/* harmony import */ var _store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/Portfolio/thunks_for_Portfolio.js */ "./store/Portfolio/thunks_for_Portfolio.js");
/* harmony import */ var _store_Portfolio_actions_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/Portfolio/actions_for_Portfolio.js */ "./store/Portfolio/actions_for_Portfolio.js");
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







 // this component manages hydrating data
// for the individual stock section
// as well as the navigational logic of
// that section

var IndivNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndivNav, _React$Component);

  function IndivNav(props) {
    var _this;

    _classCallCheck(this, IndivNav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndivNav).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        isModalShowing: false
      });
    });

    _this.state = {
      whichItem: null,
      isModalShowing: false,
      whichModal: null
    };
    return _this;
  }

  _createClass(IndivNav, [{
    key: "hydrate_data",
    value: function hydrate_data() {
      var selectedPortfolioItem = this.props.selectedPortfolioItem;
      this.props.hydrateSinglePortfolioPage(selectedPortfolioItem);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          selectedPortfolioItem = _this$props.selectedPortfolioItem,
          portfolio = _this$props.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isCell"])() && !selectedPortfolioItem_object.historical) {
        this.hydrate_data();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          selectedPortfolioItem = _this$props2.selectedPortfolioItem,
          portfolio = _this$props2.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isCell"])() && !selectedPortfolioItem_object.historical) {
        this.hydrate_data();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isModalShowing = _this$state.isModalShowing,
          whichModal = _this$state.whichModal;
      var pathname = this.props.location.pathname;
      var _this$props3 = this.props,
          selectedPortfolioItem = _this$props3.selectedPortfolioItem,
          portfolio = _this$props3.portfolio,
          handleSymbolSelect = _this$props3.handleSymbolSelect;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "individual-nav"
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isCell"])() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-bars fa-7x",
        onClick: function onClick() {
          return _this2.setState({
            isModalShowing: true,
            whichModal: 'page-selector'
          });
        }
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          width: Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"])() ? "1.7vw" : "7vw"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.setState({
            isModalShowing: true,
            whichModal: 'symbol-selector'
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, selectedPortfolioItem_object && selectedPortfolioItem_object.symbol), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-angle-down fa-7x"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: function onClick() {
          return _this2.setState({
            isModalShowing: true,
            whichModal: 'trade-box'
          });
        }
      }, "Trade")), !Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isCell"])() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "page-selector"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndivSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pathname: pathname,
        exit: function exit() {}
      })), isModalShowing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-container",
        onClick: function onClick() {
          return _this2.setState({
            isModalShowing: false
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        className: whichModal
      }, whichModal === 'page-selector' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_IndivSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pathname: pathname,
        exit: this.closeModal
      }), whichModal === 'trade-box' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TradeBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
        exit: this.closeModal
      }), whichModal === 'symbol-selector' && portfolio && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(e) {
          handleSymbolSelect(e.target.textContent);

          _this2.setState({
            isModalShowing: false
          });
        }
      }, Object.entries(portfolio).sort().map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: i
        }, item[0]);
      })))));
    }
  }]);

  return IndivNav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
    portfolio: Portfolio_state.portfolio
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hydrateSinglePortfolioPage: function hydrateSinglePortfolioPage() {
      return dispatch(_store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_5__["hydrateSinglePortfolioPage"].apply(void 0, arguments));
    },
    handleSymbolSelect: function handleSymbolSelect(symbol) {
      return dispatch(_store_Portfolio_actions_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_6__["default"].handleSymbolSelect(symbol));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(IndivNav));

/***/ }),

/***/ "./app/components/indiv/IndivNews.js":
/*!*******************************************!*\
  !*** ./app/components/indiv/IndivNews.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Portfolio_thunks_for_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/Portfolio/thunks_for_Portfolio */ "./store/Portfolio/thunks_for_Portfolio.js");
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







var IndivNews =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndivNews, _React$Component);

  function IndivNews(props) {
    var _this;

    _classCallCheck(this, IndivNews);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndivNews).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "hydrate_data", function () {
      var _this$props = _this.props,
          hydrateNewsThunk = _this$props.hydrateNewsThunk,
          selectedPortfolioItem = _this$props.selectedPortfolioItem;
      hydrateNewsThunk(selectedPortfolioItem);
    });

    return _this;
  }

  _createClass(IndivNews, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          selectedPortfolioItem = _this$props2.selectedPortfolioItem,
          portfolio = _this$props2.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isCell"])() && !selectedPortfolioItem_object.news) {
        this.hydrate_data();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          selectedPortfolioItem = _this$props3.selectedPortfolioItem,
          portfolio = _this$props3.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isCell"])() && !selectedPortfolioItem_object.news) {
        this.hydrate_data();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          selectedPortfolioItem = _this$props4.selectedPortfolioItem,
          portfolio = _this$props4.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];
      var is_loaded = selectedPortfolioItem_object && selectedPortfolioItem_object.news && selectedPortfolioItem_object.news.length;
      var no_news_data = selectedPortfolioItem_object && selectedPortfolioItem_object.news && selectedPortfolioItem_object.news.length === 0;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "indiv-container"
      }, is_loaded ? selectedPortfolioItem_object.news.map(function (newsItem, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "news-box",
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: newsItem.news_url,
          target: "_blank"
        }, newsItem.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, newsItem.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, newsItem.text)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: newsItem.image_url
        }));
      }) : no_news_data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error_message"
      }, "Data Not Available") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "block",
          textAlign: "center"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loadingDots__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "10vh"
      })));
    }
  }]);

  return IndivNews;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    portfolio: Portfolio_state.portfolio,
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hydrateNewsThunk: function hydrateNewsThunk(symbol) {
      return dispatch(Object(_store_Portfolio_thunks_for_Portfolio__WEBPACK_IMPORTED_MODULE_2__["hydrateNewsThunk"])(symbol));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(IndivNews));

/***/ }),

/***/ "./app/components/indiv/IndivPerf.js":
/*!*******************************************!*\
  !*** ./app/components/indiv/IndivPerf.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DataNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DataNav */ "./app/components/DataNav.js");
/* harmony import */ var _store_Portfolio_thunks_for_Portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/Portfolio/thunks_for_Portfolio */ "./store/Portfolio/thunks_for_Portfolio.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./app/components/utils.js");
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






var PerformanceChart = Object(react__WEBPACK_IMPORTED_MODULE_0__["lazy"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./PerformanceChart */ "./app/components/indiv/PerformanceChart.js"));
});

var IndivPerf =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndivPerf, _React$Component);

  function IndivPerf(props) {
    var _this;

    _classCallCheck(this, IndivPerf);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndivPerf).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "hydrate_data", function () {
      var _this$props = _this.props,
          hydrateTimeSeriesDataThunk = _this$props.hydrateTimeSeriesDataThunk,
          selectedPortfolioItem = _this$props.selectedPortfolioItem;
      hydrateTimeSeriesDataThunk(selectedPortfolioItem);
    });

    _defineProperty(_assertThisInitialized(_this), "dataSwitch", function (newDisplay) {
      _this.setState({
        selectedDataNavItem: newDisplay
      });
    });

    _this.state = {
      selectedDataNavItem: "Week",
      current_holding: 0
    };
    return _this;
  } // for mobile, data is hydrated by the nav
  // component  


  _createClass(IndivPerf, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          selectedPortfolioItem = _this$props2.selectedPortfolioItem,
          portfolio = _this$props2.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isCell"])() && !selectedPortfolioItem_object.historical) {
        this.hydrate_data();
      }
    } // the individual components don't remount when the nav component
    // updates the selected portfolio item- we have to have each of them
    // determine if they need to hydrate appropriate data upon update 

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props3 = this.props,
          selectedPortfolioItem = _this$props3.selectedPortfolioItem,
          portfolio = _this$props3.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];

      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isCell"])() && !selectedPortfolioItem_object.historical) {
        this.hydrate_data();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var selectedDataNavItem = this.state.selectedDataNavItem;
      var _this$props4 = this.props,
          selectedPortfolioItem = _this$props4.selectedPortfolioItem,
          portfolio = _this$props4.portfolio;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];
      var current_holding = selectedPortfolioItem_object.current_holding;

      function formatChange(input) {
        return (input * 100).toFixed(2);
      }

      function chartPeriod(period) {
        switch (period) {
          case "Week":
            return 5;

          case "Month":
            return 30;

          case "Year":
            return 365;
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "indiv-perf"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ticker-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$ ", selectedPortfolioItem_object && selectedPortfolioItem_object.price ? selectedPortfolioItem_object.price : selectedPortfolioItem_object.data.latestPrice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, selectedPortfolioItem_object && selectedPortfolioItem_object.data && formatChange(selectedPortfolioItem_object.data.changePercent), "%")), selectedPortfolioItem_object && selectedPortfolioItem_object.price && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "first-datapoints"
      }, [["Holdings", "".concat(current_holding)], ["Value", "$".concat((current_holding * selectedPortfolioItem_object.price).toFixed(2))]].map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[0]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[1]));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chart-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, selectedDataNavItem), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
        fallback: "Loading..."
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PerformanceChart, {
        period: chartPeriod(selectedDataNavItem)
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DataNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        data: ["Week", "Month", "Year"],
        selectedDataNavItem: selectedDataNavItem,
        switchItem: this.dataSwitch
      }));
    }
  }]);

  return IndivPerf;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
    portfolio: Portfolio_state.portfolio
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    hydrateTimeSeriesDataThunk: function hydrateTimeSeriesDataThunk(symbol) {
      return dispatch(Object(_store_Portfolio_thunks_for_Portfolio__WEBPACK_IMPORTED_MODULE_3__["hydrateTimeSeriesDataThunk"])(symbol));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(IndivPerf));

/***/ }),

/***/ "./app/components/indiv/IndivSelector.js":
/*!***********************************************!*\
  !*** ./app/components/indiv/IndivSelector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndivSelector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function IndivSelector(props) {
  var pathname = props.pathname;

  function isSelectedSelector(selector) {
    return pathname.includes(selector) ? "selected" : undefined;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: props.exit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/indiv/perf"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: isSelectedSelector("perf")
  }, "Performance")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/indiv/finan"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: isSelectedSelector("finan")
  }, "Financials")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/indiv/news"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: isSelectedSelector("news")
  }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/indiv/trans"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: isSelectedSelector("trans")
  }, "Transactions")));
}
;

/***/ }),

/***/ "./app/components/indiv/IndivTrans.js":
/*!********************************************!*\
  !*** ./app/components/indiv/IndivTrans.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var IndivTrans =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndivTrans, _React$Component);

  function IndivTrans(props) {
    var _this;

    _classCallCheck(this, IndivTrans);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndivTrans).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(IndivTrans, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          transactionHistory = _this$props.transactionHistory,
          selectedPortfolioItem = _this$props.selectedPortfolioItem;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "indiv-trans indiv-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Quantity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Date")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, transactionHistory && Object.entries(transactionHistory).reverse().filter(function (item) {
        return item[1].symbol === selectedPortfolioItem && item[1].quantity > 0;
      }).map(function (item, i) {
        var date = item[1].date_conducted;
        date = date.slice(0, date.indexOf(":") - 2);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[1].type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[1].quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$", item[1].price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, date));
      })));
    }
  }]);

  return IndivTrans;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    transactionHistory: Portfolio_state.transactionHistory,
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(IndivTrans));

/***/ }),

/***/ "./app/components/indiv/TradeBox.js":
/*!******************************************!*\
  !*** ./app/components/indiv/TradeBox.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/Portfolio/thunks_for_Portfolio.js */ "./store/Portfolio/thunks_for_Portfolio.js");
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





var TradeBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TradeBox, _React$Component);

  function TradeBox(props) {
    var _this;

    _classCallCheck(this, TradeBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TradeBox).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleTrade", function (type) {
      var _this$props = _this.props,
          portfolio = _this$props.portfolio,
          selectedPortfolioItem = _this$props.selectedPortfolioItem,
          makeTradeThunk = _this$props.makeTradeThunk,
          balance = _this$props.balance;
      var selectedPortfolioItem_object = portfolio[selectedPortfolioItem];
      var quantity = selectedPortfolioItem_object.quantity,
          price = selectedPortfolioItem_object.price,
          symbol = selectedPortfolioItem_object.symbol; // validate the trade

      if (type === "Sell" && _this.state.size > quantity) {
        _this.setState({
          isToolTipShowing: true,
          tooltipMessage: "Insufficient holdings to cover trade."
        });

        setTimeout(function () {
          _this.setState({
            isToolTipShowing: false
          });
        }, 2000);
        return;
      } else if (type === "Buy" && _this.state.size * price > balance) {
        _this.setState({
          isToolTipShowing: true,
          tooltipMessage: "Insufficient balance to cover trade."
        });

        setTimeout(function () {
          _this.setState({
            isToolTipShowing: false
          });
        }, 2000);
        return;
      } else {
        makeTradeThunk(symbol, _this.state.size, type, price);

        _this.setState({
          size: 0
        });

        _this.props.exit();

        return;
      }
    });

    _this.state = {
      size: 0,
      isToolTipShowing: false,
      tooltipMessage: ''
    };
    return _this;
  }

  _createClass(TradeBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Quantity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        min: "1",
        max: "5",
        onChange: function onChange(e) {
          return _this2.setState({
            size: e.target.value
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.handleTrade('Buy');
        }
      }, "Buy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.handleTrade('Sell');
        }
      }, "Sell")), this.state.isToolTipShowing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.state.tooltipMessage));
    }
  }]);

  return TradeBox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;

var mapStateToProps = function mapStateToProps(_ref) {
  var User_state = _ref.User_state,
      Portfolio_state = _ref.Portfolio_state;
  return {
    portfolio: Portfolio_state.portfolio,
    selectedPortfolioItem: Portfolio_state.selectedPortfolioItem,
    balance: User_state.balance
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    makeTradeThunk: function makeTradeThunk() {
      return dispatch(_store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_2__["makeTradeThunk"].apply(void 0, arguments));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(TradeBox));

/***/ }),

/***/ "./app/components/loadingDots.js":
/*!***************************************!*\
  !*** ./app/components/loadingDots.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var LoadingDots = function LoadingDots(props) {
  var style = {
    display: "inline",
    color: "black",
    fontSize: props.size
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading-dots"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: style
  }, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: style
  }, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: style
  }, "."));
};

/* harmony default export */ __webpack_exports__["default"] = (LoadingDots);

/***/ }),

/***/ "./app/components/portfolio/AddSymbolBox.js":
/*!**************************************************!*\
  !*** ./app/components/portfolio/AddSymbolBox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _symbolHash_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbolHash.json */ "./app/components/symbolHash.json");
var _symbolHash_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../symbolHash.json */ "./app/components/symbolHash.json", 1);
/* harmony import */ var _store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store/Portfolio/thunks_for_Portfolio.js */ "./store/Portfolio/thunks_for_Portfolio.js");
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






var AddSymbolBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AddSymbolBox, _React$Component);

  function AddSymbolBox(props) {
    var _this;

    _classCallCheck(this, AddSymbolBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddSymbolBox).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "validateSymbol", function (text) {
      return !!_symbolHash_json__WEBPACK_IMPORTED_MODULE_2__[text];
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var text = e.target.value;

      _this.setState({
        input: text
      });

      if (_this.validateSymbol(text)) {
        _this.setState({
          stockName: _symbolHash_json__WEBPACK_IMPORTED_MODULE_2__[text]
        });
      } else {
        _this.setState({
          stockName: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function () {
      var _this$state = _this.state,
          stockName = _this$state.stockName,
          input = _this$state.input;
      var _this$props = _this.props,
          makeTradeThunk = _this$props.makeTradeThunk,
          exit = _this$props.exit;

      if (stockName && !_this.props.portfolio[input]) {
        makeTradeThunk(input, 0, "Buy", 0, true);
      }

      exit();
    });

    _this.state = {
      stockName: null,
      input: null
    };
    return _this;
  }

  _createClass(AddSymbolBox, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          stockName = _this$state2.stockName,
          input = _this$state2.input;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "trade-box symbol-box",
        id: "add-symbol-box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Symbol"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        min: "1",
        max: "5",
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleSubmit,
        style: {
          opacity: stockName && !this.props.portfolio[input] ? "1" : ".3"
        }
      }, "Add")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.state.stockName ? stockName : " "));
    }
  }]);

  return AddSymbolBox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state,
      User_state = _ref.User_state;
  return {
    token: User_state.token,
    portfolio: Portfolio_state.portfolio
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    makeTradeThunk: function makeTradeThunk() {
      return dispatch(_store_Portfolio_thunks_for_Portfolio_js__WEBPACK_IMPORTED_MODULE_3__["makeTradeThunk"].apply(void 0, arguments));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(AddSymbolBox));

/***/ }),

/***/ "./app/components/portfolio/AllNav.js":
/*!********************************************!*\
  !*** ./app/components/portfolio/AllNav.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AllNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllNav, _React$Component);

  function AllNav(props) {
    _classCallCheck(this, AllNav);

    return _possibleConstructorReturn(this, _getPrototypeOf(AllNav).call(this, props));
  }

  _createClass(AllNav, [{
    key: "render",
    value: function render() {
      var pathname = this.props.location.pathname;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/all/watchlist"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: pathname.includes("watchlist") ? "selected" : undefined
      }, "Portfolio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/all/transactions"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: pathname.includes("transactions") ? "selected" : undefined
      }, "Transactions")));
    }
  }]);

  return AllNav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/portfolio/AllTrans.js":
/*!**********************************************!*\
  !*** ./app/components/portfolio/AllTrans.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var AllTrans =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllTrans, _React$Component);

  function AllTrans(props) {
    var _this;

    _classCallCheck(this, AllTrans);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AllTrans).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(AllTrans, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-trans"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Transaction History"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Symbol"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Quantity"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "@Buy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Date")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object.entries(this.props.transactionHistory).reverse().filter(function (item) {
        return item[1].quantity > 0;
      }).map(function (item, i) {
        // note- date is relative to GMT from server
        // conversion 
        var date = item[1].date_conducted.slice(0, item[1].date_conducted.indexOf("GMT")).slice(0, item[1].date_conducted.indexOf(":") - 2);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: "_allTransItem"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[1].type), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[1].symbol), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, item[1].quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "$", item[1].price.toFixed(2)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, date));
      })));
    }
  }]);

  return AllTrans;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var Portfolio_state = _ref.Portfolio_state;
  return {
    transactionHistory: Portfolio_state.transactionHistory
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(AllTrans));

/***/ }),

/***/ "./app/components/portfolio/AllWatchlist.js":
/*!**************************************************!*\
  !*** ./app/components/portfolio/AllWatchlist.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./app/components/utils.js");
/* harmony import */ var _AddSymbolBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddSymbolBox */ "./app/components/portfolio/AddSymbolBox.js");
/* harmony import */ var _loadingDots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loadingDots */ "./app/components/loadingDots.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var AllWatchList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AllWatchList, _React$Component);

  function AllWatchList(props) {
    var _this;

    _classCallCheck(this, AllWatchList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AllWatchList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "closeModal", function () {
      _this.setState({
        isModalShowing: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleEdit", function (item) {
      var hideList = _this.state.hideList;
      var symbol = item[1].symbol;
      var LS_Key = "".concat(_this.props.email, "-hideList");
      var newHidelist;

      if (hideList.includes(symbol)) {
        newHidelist = hideList.filter(function (item) {
          return item !== symbol;
        });
      } else {
        newHidelist = [].concat(_toConsumableArray(_this.state.hideList), [item[1].symbol]);
      }

      localStorage.setItem(LS_Key, JSON.stringify(newHidelist));

      _this.setState({
        hideList: newHidelist
      });
    });

    _this.state = {
      isModalShowing: false,
      edit: false,
      hideList: []
    };
    return _this;
  }

  _createClass(AllWatchList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var LS_Key = "".concat(this.props.email, "-hideList");
      var storedHideList = localStorage.getItem(LS_Key);
      this.setState({
        hideList: storedHideList ? JSON.parse(localStorage.getItem(LS_Key)) : []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isModalShowing = _this$state.isModalShowing,
          edit = _this$state.edit;
      var _this$props = this.props,
          portfolio = _this$props.portfolio,
          token_error = _this$props.token_error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "all-watchlist"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-plus fa-plus-edit fa-".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"])() ? "2" : "7", "x"),
        onClick: function onClick() {
          return _this2.setState({
            edit: false,
            isModalShowing: true
          });
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-edit fa-".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"])() ? "2" : "7", "x"),
        onClick: function onClick() {
          return _this2.setState({
            edit: !edit,
            isModalShowing: false
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Portfolio"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, token_error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error_message"
      }, "Error validating account- please try signing in again."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "error_message"
      }, "We apologize for the inconvenience")), portfolio ? Object.entries(portfolio).sort().filter(function (item) {
        if (_this2.state.edit) {
          return true;
        } else {
          return !_this2.state.hideList.includes(item[1].symbol);
        }
      }).map(function (item, i) {
        var _item$ = item[1],
            data = _item$.data,
            symbol = _item$.symbol;
        var hideList = _this2.state.hideList;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: "watchlist-item-container"
        }, _this2.state.edit && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-".concat(hideList.includes(symbol) ? "plus" : "minus", " fa-").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isDesktop"])() ? "2" : "7", "x"),
          onClick: function onClick() {
            return _this2.handleEdit(item);
          }
        }), data && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "watchlist-item",
          style: {
            opacity: hideList.includes(symbol) ? ".5" : "1"
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            color: data.latestPrice < item[1].price ? "green" : "red"
          }
        }, " ", item[1].symbol), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", data.companyName), "$", item[1].price ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            color: data.latestPrice < item[1].price ? "green" : "red"
          }
        }, item[1].price) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            color: data.latestPrice > data.open ? "green" : "red"
          }
        }, data.latestPrice)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.change), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, data.changePercent, "%"))));
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loadingDots__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "10rem"
      }))), isModalShowing && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-container",
        onClick: function onClick() {
          return _this2.setState({
            isModalShowing: false
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddSymbolBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
        exit: this.closeModal
      }))));
    }
  }]);

  return AllWatchList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var User_state = _ref.User_state,
      Portfolio_state = _ref.Portfolio_state;
  return {
    email: User_state.email,
    portfolio: Portfolio_state.portfolio,
    token_error: Portfolio_state.token_error
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(AllWatchList));

/***/ }),

/***/ "./app/components/symbolHash.json":
/*!****************************************!*\
  !*** ./app/components/symbolHash.json ***!
  \****************************************/
/*! exports provided: A, AA, AAAU, AABA, AAC, AADR, AAL, AAMC, AAME, AAN, AAOI, AAON, AAP, AAPL, AAT, AAU, AAWW, AAXJ, AAXN, AB, ABB, ABBV, ABC, ABCB, ABDC, ABEO, ABEOW, ABEV, ABG, ABIL, ABIO, ABM, ABMD, ABR, ABR-A, ABR-B, ABR-C, ABT, ABTX, ABUS, AC, ACA, ACAD, ACAM, ACAMU, ACAMW, ACB, ACBI, ACC, ACCO, ACER, ACES, ACGL, ACGLO, ACGLP, ACH, ACHC, ACHN, ACHV, ACIA, ACIM, ACIO, ACIU, ACIW, ACLS, ACM, ACMR, ACN, ACNB, ACOR, ACP, ACRE, ACRS, ACRX, ACSG, ACSI, ACST, ACT, ACTG, ACTT, ACTTU, ACTTW, ACU, ACV, ACWF, ACWI, ACWV, ACWX, ACY, ADAP, ADBE, ADC, ADES, ADI, ADIL, ADILW, ADM, ADMA, ADMP, ADMS, ADNT, ADOM, ADP, ADPT, ADRA, ADRD, ADRE, ADRO, ADRU, ADS, ADSK, ADSW, ADT, ADTN, ADUS, ADVM, ADX, ADXS, AE, AEB, AEE, AEF, AEG, AEGN, AEH, AEHR, AEIS, AEL, AEM, AEMD, AEO, AEP, AEP-B, AER, AERI, AES, AETI, AEY, AEYE, AEZS, AFB, AFC, AFG, AFGB, AFGE, AFGH, AFH, AFHBL, AFI, AFIF, AFIN, AFINP, AFK, AFL, AFMD, AFT, AFTY, AG, AGBAU, AGCO, AGD, AGE, AGEN, AGFS, AGFSW, AGG, AGGE, AGGP, AGGY, AGI, AGIO, AGLE, AGM, AGM-A, AGM-C, AGM-D, AGM.A, AGMH, AGN, AGNC, AGNCB, AGNCM, AGNCN, AGND, AGO, AGO-B, AGO-E, AGO-F, AGQ, AGR, AGRO, AGRX, AGS, AGT, AGTC, AGX, AGYS, AGZ, AGZD, AHC, AHH, AHH-A, AHL-C, AHL-D, AHPI, AHT, AHT-D, AHT-F, AHT-G, AHT-H, AHT-I, AI, AI-B, AI-C, AIA, AIC, AIEQ, AIF, AIG, AIG+, AIG-A, AIHS, AIIQ, AIMC, AIMT, AIN, AINC, AINV, AIQ, AIR, AIRG, AIRI, AIRR, AIRT, AIRTP, AIRTW, AIT, AITB, AIV, AIW, AIY, AIZ, AIZP, AJG, AJRD, AJX, AJXA, AKAM, AKBA, AKCA, AKER, AKG, AKO.A, AKO.B, AKR, AKRO, AKRX, AKS, AKTS, AKTX, AL, AL-A, ALAC, ALACR, ALACU, ALACW, ALB, ALBO, ALC, ALCO, ALDR, ALDX, ALE, ALEC, ALEX, ALFA, ALG, ALGN, ALGR, ALGRR, ALGRU, ALGRW, ALGT, ALIM, ALJJ, ALK, ALKS, ALL, ALL-A, ALL-B, ALL-D, ALL-E, ALL-F, ALL-G, ALLE, ALLK, ALLO, ALLT, ALLY, ALLY-A, ALNA, ALNY, ALO, ALOT, ALP-Q, ALPN, ALRM, ALRN, ALSK, ALSN, ALT, ALTM, ALTR, ALTS, ALTY, ALV, ALX, ALXN, ALYA, AM, AMAG, AMAL, AMAT, AMBA, AMBC, AMBCW, AMBO, AMC, AMCA, AMCI, AMCIU, AMCIW, AMCR, AMCX, AMD, AME, AMED, AMEH, AMG, AMGN, AMH, AMH-D, AMH-E, AMH-F, AMH-G, AMH-H, AMID, AMJ, AMJL, AMKR, AMLP, AMN, AMNB, AMOM, AMOT, AMOV, AMP, AMPE, AMPH, AMR, AMRB, AMRC, AMRH, AMRHW, AMRK, AMRN, AMRS, AMRWW, AMRX, AMS, AMSC, AMSF, AMSWA, AMT, AMTB, AMTBB, AMTD, AMTX, AMU, AMUB, AMWD, AMX, AMZA, AMZN, AN, ANAB, ANAT, ANCN, ANDA, ANDAR, ANDAU, ANDAW, ANDE, ANDX, ANET, ANF, ANFI, ANGI, ANGL, ANGO, ANH, ANH-A, ANH-B, ANH-C, ANIK, ANIP, ANIX, ANSS, ANTE, ANTM, ANY, AOA, AOBC, AOD, AOIL, AOK, AOM, AON, AOR, AOS, AOSL, AP, APA, APAM, APC, APD, APDN, APDNW, APEI, APEN, APEX, APH, APHA, APLE, APLS, APLT, APM, APO, APO-A, APO-B, APOG, APOP, APOPW, APPF, APPN, APPS, APRN, APT, APTO, APTS, APTV, APTX, APU, APVO, APWC, APY, APYX, AQ, AQB, AQMS, AQN, AQNA, AQNB, AQST, AQUA, AQXP, AR, ARA, ARAV, ARAY, ARC, ARCB, ARCC, ARCE, ARCH, ARCI, ARCM, ARCO, ARCT, ARCW, ARD, ARDC, ARDS, ARDX, ARE, ARE-D, AREC, ARES, ARES-A, AREX, ARGD, ARGO, ARGT, ARGX, ARI, ARKF, ARKG, ARKK, ARKQ, ARKR, ARKW, ARL, ARLO, ARLP, ARMK, ARMP, ARNA, ARNC, ARNC-, AROC, AROW, ARPO, ARQL, ARR, ARR-A*, ARR-B, ARRY, ARTL, ARTLW, ARTNA, ARTW, ARTX, ARVN, ARW, ARWR, ARYA, ARYAU, ARYAW, ASA, ASB, ASB-C, ASB-D, ASB-E, ASC, ASEA, ASET, ASFI, ASG, ASGN, ASH, ASHR, ASHS, ASHX, ASIX, ASLN, ASM, ASMB, ASML, ASNA, ASND, ASPN, ASPS, ASPU, ASR, ASRT, ASRV, ASRVP, ASTC, ASTE, ASUR, ASV, ASX, ASYS, AT, ATAI, ATAX, ATEC, ATEN, ATEX, ATGE, ATH, ATH-A, ATHE, ATHM, ATHX, ATI, ATIF, ATIS, ATISW, ATKR, ATLC, ATLO, ATMP, ATNI, ATNM, ATNX, ATO, ATOM, ATOS, ATR, ATRA, ATRC, ATRI, ATRO, ATRS, ATSG, ATTO, ATU, ATUS, ATV, ATVI, ATXI, AU, AUB, AUBN, AUDC, AUG, AUMN, AUO, AUPH, AUSF, AUTL, AUTO, AUY, AVA, AVAL, AVAV, AVB, AVCO, AVD, AVDL, AVDR, AVEO, AVGO, AVGR, AVH, AVID, AVK, AVLR, AVNS, AVNW, AVP, AVRO, AVT, AVTR, AVTR-A, AVX, AVXL, AVY, AVYA, AWF, AWI, AWK, AWP, AWR, AWRE, AWSM, AWTM, AWX, AX, AXAS, AXDX, AXE, AXGN, AXGT, AXJL, AXJV, AXL, AXLA, AXNX, AXO, AXP, AXR, AXS, AXS-D, AXS-E, AXSM, AXTA, AXTI, AXU, AY, AYI, AYR, AYTU, AYX, AZN, AZO, AZPN, AZRE, AZRX, AZUL, AZZ, B, BA, BAB, BABA, BABY, BAC, BAC-A, BAC-B, BAC-C, BAC-E, BAC-K, BAC-L, BAC-M, BAC-W*, BAC-Y, BAF, BAH, BAL, BAM, BANC, BANC-D, BANC-E, BAND, BANF, BANFP, BANR, BANX, BAP, BAPR, BAR, BAS, BASI, BATRA, BATRK, BATT, BAX, BB, BBAR, BBAX, BBBY, BBC, BBCA, BBCP, BBD, BBDC, BBDO, BBEU, BBF, BBGI, BBH, BBIO, BBJP, BBK, BBL, BBN, BBP, BBRE, BBSA, BBSI, BBT, BBT-D, BBT-E, BBT-F, BBT-G, BBT-H, BBU, BBUS, BBVA, BBW, BBX, BBY, BC, BC-A, BC-B, BC-C, BCBP, BCC, BCD, BCE, BCEI, BCEL, BCH, BCI, BCLI, BCM, BCML, BCNA, BCO, BCOM, BCOR, BCOV, BCOW, BCPC, BCRH, BCRX, BCS, BCSF, BCTF, BCV, BCV-A, BCX, BCYC, BDC, BDC-B, BDCL, BDCS, BDCZ, BDGE, BDJ, BDL, BDN, BDR, BDRY, BDSI, BDX, BDXA, BE, BEAT, BECN, BEDU, BELFA, BELFB, BEMO, BEN, BEP, BERN, BERY, BEST, BF.A, BF.B, BFAM, BFC, BFIN, BFIT, BFK, BFO, BFOR, BFRA, BFS, BFS-C, BFS-D, BFST, BFY, BFZ, BG, BGB, BGCP, BGFV, BGG, BGH, BGI, BGIO, BGNE, BGR, BGRN, BGS, BGSF, BGT, BGX, BGY, BH, BH.A, BHB, BHC, BHE, BHF, BHFAL, BHFAP, BHGE, BHK, BHLB, BHP, BHR, BHR-B, BHR-D, BHTG, BHV, BHVN, BIB, BIBL, BICK, BID, BIDU, BIF, BIG, BIIB, BIKR, BIL, BILI, BIMI, BIO, BIO.B, BIOC, BIOL, BIOS, BIOX, BIOX+, BIP, BIQI, BIS, BIT, BITA, BIV, BIZD, BJ, BJAN, BJK, BJRI, BJUL, BJUN, BK, BK-C, BKCC, BKCH, BKD, BKE, BKEP, BKEPP, BKF, BKH, BKI, BKJ, BKK, BKLN, BKN, BKNG, BKS, BKSC, BKT, BKTI, BKU, BKYI, BL, BLBD, BLCM, BLCN, BLD, BLDP, BLDR, BLE, BLES, BLFS, BLHY, BLIN, BLK, BLKB, BLL, BLMN, BLNK, BLNKW, BLOK, BLPH, BLRX, BLUE, BLV, BLW, BLX, BMA, BMCH, BME, BMI, BML-G, BML-H, BML-J, BML-L, BMLP, BMO, BMRA, BMRC, BMRN, BMTC, BMY, BND, BNDC, BNDW, BNDX, BNED, BNFT, BNGO, BNGOW, BNKD, BNKO, BNKU, BNKZ, BNO, BNS, BNSO, BNTC, BNTCW, BNY, BOCH, BOCT, BOE, BOH, BOIL, BOKF, BOKFL, BOLD, BOMN, BOND, BOOM, BOON, BOOT, BOSC, BOSS, BOTJ, BOTZ, BOUT, BOX, BOXL, BP, BPFH, BPL, BPMC, BPMP, BPMX, BPOP, BPOPM, BPOPN, BPR, BPRAP, BPRN, BPT, BPTH, BPY, BPYPP, BQH, BR, BRAC, BRACR, BRACU, BRACW, BRC, BREW, BRF, BRFS, BRG, BRG-A, BRG-C, BRG-D, BRGL, BRID, BRK.A, BRK.B, BRKL, BRKR, BRKS, BRN, BRO, BROG, BROGR, BROGU, BROGW, BRPA, BRPAR, BRPAU, BRPAW, BRPM, BRPM+, BRPM=, BRQS, BRSS, BRT, BRX, BRY, BRZU, BSA, BSAC, BSAE, BSBE, BSBR, BSCE, BSCJ, BSCK, BSCL, BSCM, BSCN, BSCO, BSCP, BSCQ, BSCR, BSCS, BSD, BSDE, BSE, BSET, BSGM, BSIG, BSJJ, BSJK, BSJL, BSJM, BSJN, BSJO, BSJP, BSJQ, BSL, BSM, BSMX, BSQR, BSRR, BST, BSTC, BSTZ, BSV, BSVN, BSX, BT, BTA, BTAI, BTAL, BTE, BTEC, BTG, BTI, BTN, BTO, BTT, BTU, BTX, BTZ, BUD, BUI, BUL, BURG, BURL, BUSE, BUY, BUYN, BV, BVAL, BVN, BVSN, BVXV, BVXVW, BW, BWA, BWAY, BWB, BWEN, BWFG, BWG, BWL.A, BWMC, BWMCU, BWMCW, BWX, BWXT, BWZ, BX, BXC, BXG, BXMT, BXMX, BXP, BXP-B, BXS, BY, BYD, BYFC, BYLD, BYM, BYND, BYSI, BZH, BZM, BZQ, BZUN, C, C-J, C-K, C-N, C-S, CAAP, CAAS, CABO, CAC, CACC, CACG, CACI, CADC, CADE, CAE, CAF, CAG, CAH, CAI, CAI-A, CAI-B, CAJ, CAKE, CAL, CALA, CALF, CALM, CALX, CAMP, CAMT, CANE, CANF, CANG, CAPE, CAPL, CAPR, CAR, CARA, CARB, CARE, CARG, CARO, CARS, CART, CARV, CARZ, CASA, CASH, CASI, CASS, CASY, CAT, CATB, CATC, CATH, CATM, CATO, CATS, CATY, CB, CBAN, CBAT, CBAY, CBB, CBB-B, CBD, CBFV, CBH, CBIO, CBL, CBL-D, CBL-E, CBLI, CBLK, CBM, CBMB, CBMG, CBND, CBNK, CBO, CBOE, CBON, CBPO, CBPX, CBRE, CBRL, CBS, CBS.A, CBSH, CBSHP, CBT, CBTX, CBU, CBX, CBZ, CC, CCA, CCB, CCBG, CCC, CCC+, CCCL, CCD, CCEP, CCF, CCH, CCH+, CCH=, CCI, CCI-A, CCIH, CCJ, CCK, CCL, CCLP, CCM, CCMP, CCNE, CCNI, CCO, CCOI, CCOR, CCR, CCRC, CCRN, CCS, CCU, CCX=, CCXI, CCZ, CDAY, CDC, CDE, CDEV, CDK, CDL, CDLX, CDMO, CDMOP, CDNA, CDNS, CDOR, CDR, CDR-B, CDR-C, CDTX, CDW, CDXC, CDXS, CDZI, CE, CEA, CECE, CECO, CEE, CEF, CEFL, CEFS, CEI, CEIX, CEL, CELC, CELG, CELGZ, CELH, CELP, CEM, CEMB, CEMI, CEN, CENT, CENTA, CENX, CEO, CEPU, CEQP, CEQP-, CERC, CERN, CERS, CET, CETV, CETX, CETXP, CETXW, CEV, CEVA, CEW, CEY, CEZ, CF, CFA, CFBI, CFBK, CFFA, CFFAU, CFFAW, CFFI, CFFN, CFG, CFG-D, CFMS, CFO, CFR, CFR-A, CFRX, CFX, CFXA, CG, CGA, CGBD, CGC, CGEN, CGIX, CGNX, CGO, CGW, CHA, CHAC, CHAC+, CHAC=, CHAD, CHAP, CHAU, CHCI, CHCO, CHCT, CHD, CHDN, CHE, CHEF, CHEK, CHEKW, CHEKZ, CHEP, CHFC, CHFS, CHGG, CHGX, CHH, CHI, CHIC, CHIE, CHIH, CHII, CHIK, CHIL, CHIM, CHIQ, CHIR, CHIS, CHIU, CHIX, CHK, CHK-D, CHKP, CHKR, CHL, CHMA, CHMG, CHMI, CHMI-A, CHMI-B, CHN, CHNA, CHNG, CHNGU, CHNR, CHRA, CHRS, CHRW, CHS, CHSCL, CHSCM, CHSCN, CHSCO, CHSCP, CHSP, CHT, CHTR, CHU, CHUY, CHW, CHWY, CHY, CI, CIA, CIB, CIBR, CIC, CIC+, CIC=, CID, CIDM, CIEN, CIF, CIFS, CIG, CIG.C, CIGI, CIH, CII, CIK, CIL, CIM, CIM-A, CIM-B, CIM-C, CIM-D, CINF, CINR, CIO, CIO-A, CIR, CISN, CIT, CIVB, CIVBP, CIX, CIZ, CIZN, CJ, CJJD, CJNK, CKH, CKPT, CKX, CL, CLAR, CLB, CLBK, CLBS, CLCT, CLDB, CLDC, CLDR, CLDT, CLDX, CLF, CLFD, CLGN, CLGX, CLH, CLI, CLIR, CLIX, CLLS, CLM, CLMT, CLNC, CLNE, CLNY, CLNY-B, CLNY-E, CLNY-G, CLNY-H, CLNY-I, CLNY-J, CLOU, CLPR, CLPS, CLR, CLRB, CLRBW, CLRBZ, CLRG, CLRO, CLS, CLSD, CLSN, CLTL, CLUB, CLVS, CLW, CLWT, CLX, CLXT, CM, CMA, CMBM, CMBS, CMC, CMCL, CMCM, CMCO, CMCSA, CMCT, CMCTP, CMD, CMDY, CME, CMF, CMFN, CMFNL, CMG, CMI, CMLS, CMO, CMO-E, CMP, CMPR, CMRE, CMRE-B, CMRE-C, CMRE-D, CMRE-E, CMRX, CMS, CMS-B, CMSA, CMSC, CMSD, CMT, CMTL, CMU, CN, CNA, CNAC, CNACR, CNACU, CNACW, CNAT, CNBKA, CNC, CNCE, CNCR, CNDT, CNET, CNF, CNFR, CNFRL, CNHI, CNHX, CNI, CNK, CNMD, CNNE, CNO, CNOB, CNP, CNP-B, CNQ, CNR, CNRG, CNS, CNSL, CNST, CNTF, CNTY, CNX, CNXM, CNXN, CNXT, CNY, CNYA, CO, COCP, CODA, CODI, CODI-A, CODI-B, CODX, COE, COF, COF-C, COF-D, COF-F, COF-G, COF-H, COF-P, COG, COHN, COHR, COHU, COKE, COLB, COLD, COLL, COLM, COM, COMB, COMG, COMM, COMT, CONE, CONN, COO, COOP, COP, COPX, COR, CORE, CORN, CORP, CORR, CORR-A, CORT, CORV, COST, COT, COTY, COUP, COW, COWN, COWNL, COWNZ, COWZ, CP, CPA, CPAC, CPAH, CPB, CPE, CPE-A*, CPER, CPF, CPG, CPHC, CPHI, CPI, CPIX, CPK, CPL, CPLG, CPLP, CPRI, CPRT, CPRX, CPS, CPSH, CPSI, CPSS, CPST, CPT, CPTA, CPTAG, CPTAL, CQP, CQQQ, CR, CRAI, CRAK, CRAY, CRBN, CRBP, CRC, CRCM, CRD.A, CRD.B, CREE, CREG, CRESY, CREX, CREXW, CRF, CRH, CRHM, CRI, CRIS, CRK, CRL, CRM, CRMD, CRMT, CRNT, CRNX, CROC, CRON, CROP, CROX, CRR, CRS, CRSA, CRSAU, CRSAW, CRSP, CRT, CRTO, CRTX, CRUS, CRUSC, CRVL, CRVS, CRWD, CRWS, CRY, CRZO, CS, CSA, CSB, CSBR, CSCO, CSD, CSF, CSFL, CSGP, CSGS, CSII, CSIQ, CSL, CSLT, CSM, CSML, CSOD, CSPI, CSQ, CSS, CSSE, CSSEP, CSTE, CSTM, CSTR, CSU, CSV, CSWC, CSWCL, CSWI, CSX, CTA-A, CTA-B, CTAA, CTAC, CTACU, CTACW, CTAS, CTB, CTBB, CTBI, CTDD, CTEK, CTG, CTHR, CTIB, CTIC, CTK, CTL, CTLT, CTMX, CTO, CTR, CTRA, CTRC, CTRE, CTRL, CTRM, CTRN, CTRP, CTRV, CTS, CTSH, CTSO, CTST, CTT, CTV, CTVA, CTWS, CTXR, CTXRW, CTXS, CTY, CTZ, CUB, CUBA, CUBE, CUBI, CUBI-C, CUBI-D, CUBI-E, CUBI-F, CUE, CUI, CUK, CULP, CUO, CUR, CURE, CURO, CUT, CUTR, CUZ, CVA, CVBF, CVCO, CVCY, CVE, CVEO, CVET, CVGI, CVGW, CVI, CVIA, CVLT, CVLY, CVM, CVNA, CVR, CVRS, CVS, CVTI, CVU, CVV, CVX, CVY, CW, CWAI, CWB, CWBC, CWBR, CWCO, CWEB, CWEN, CWEN.A, CWH, CWI, CWK, CWS, CWST, CWT, CX, CXDC, CXE, CXH, CXO, CXP, CXSE, CXW, CY, CYAD, CYAN, CYB, CYBE, CYBR, CYCC, CYCCP, CYCN, CYD, CYH, CYOU, CYRN, CYRX, CYRXW, CYTK, CYTX, CYTXZ, CZA, CZNC, CZR, CZWI, CZZ, D, DAC, DAIO, DAKT, DAL, DALI, DALT, DAN, DAR, DARE, DATA, DAUD, DAVA, DAVE, DAX, DB, DBA, DBAW, DBB, DBC, DBD, DBE, DBEF, DBEM, DBEU, DBEZ, DBGR, DBI, DBJP, DBKO, DBL, DBLV, DBMF, DBO, DBP, DBS, DBV, DBVT, DBX, DCAR, DCF, DCHF, DCI, DCIX, DCO, DCOM, DCP, DCP-B, DCP-C, DCPH, DCUD, DCUE, DD, DDD, DDF, DDG, DDIV, DDLS, DDM, DDMX, DDMXU, DDMXW, DDS, DDT, DDWM, DE, DEA, DEAC, DEACU, DEACW, DECK, DEEF, DEF, DEFA, DEI, DELL, DEM, DEMG, DENN, DEO, DERM, DES, DESC, DESP, DEST, DEUR, DEUS, DEW, DEWJ, DEX, DEZU, DF, DFBH, DFBHU, DFBHW, DFE, DFEN, DFFN, DFIN, DFJ, DFND, DFNL, DFP, DFRG, DFS, DFVL, DFVS, DG, DGAZ, DGBP, DGICA, DGICB, DGII, DGL, DGLD, DGLY, DGP, DGRE, DGRO, DGRS, DGRW, DGS, DGSE, DGT, DGX, DGZ, DHDG, DHF, DHI, DHIL, DHR, DHR-A, DHS, DHT, DHX, DHXM, DHY, DIA, DIAL, DIAX, DIG, DIM, DIN, DINT, DIOD, DIS, DISCA, DISCB, DISCK, DISH, DIT, DIV, DIVA, DIVB, DIVC, DIVO, DIVY, DJCI, DJCO, DJD, DJP, DJPY, DK, DKL, DKS, DKT, DL, DLA, DLB, DLBR, DLBS, DLHC, DLN, DLNG, DLNG-A, DLNG-B, DLPH, DLPN, DLPNW, DLR, DLR-C, DLR-G, DLR-I, DLR-J, DLR-K, DLS, DLTH, DLTR, DLX, DMAC, DMB, DMDV, DMF, DMLP, DMO, DMPI, DMRC, DMRE, DMRI, DMRL, DMRM, DMRS, DNBF, DNI, DNJR, DNKN, DNL, DNLI, DNN, DNOW, DNP, DNR, DO, DOC, DOCU, DOG, DOGS, DOGZ, DOL, DOMO, DON, DOO, DOOO, DOOR, DORM, DOV, DOVA, DOW, DOX, DPG, DPHC, DPHCU, DPHCW, DPK, DPLO, DPST, DPW, DPZ, DQ, DQML, DRAD, DRD, DRE, DRH, DRI, DRIO, DRIOW, DRIP, DRIV, DRN, DRNA, DRQ, DRR, DRRX, DRSK, DRUA, DRV, DRW, DRYS, DS, DS-B, DS-C, DS-D, DSE, DSGX, DSI, DSKE, DSKEW, DSL, DSLV, DSM, DSPG, DSS, DSSI, DSTL, DSU, DSWL, DSX, DSX-B, DTD, DTE, DTEA, DTEC, DTF, DTH, DTIL, DTJ, DTLA-, DTN, DTO, DTQ, DTSS, DTUL, DTUS, DTV, DTW, DTY, DTYL, DTYS, DUC, DUG, DUK, DUK-A, DUKB, DUKH, DURA, DUSA, DUSL, DUST, DVA, DVAX, DVCR, DVD, DVEM, DVHL, DVLU, DVN, DVOL, DVP, DVY, DVYA, DVYE, DVYL, DWAQ, DWAS, DWAT, DWCR, DWFI, DWIN, DWLD, DWM, DWMC, DWMF, DWPP, DWSH, DWSN, DWT, DWTR, DWX, DX, DX-A, DX-B, DXB, DXC, DXCM, DXD, DXF, DXGE, DXJ, DXJS, DXLG, DXPE, DXR, DXYN, DY, DYAI, DYB, DYLS, DYNF, DYNT, DYSL, DZK, DZSI, DZZ, E, EA, EAB, EAD, EAE, EAF, EAGG, EAI, EARN, EARS, EASG, EASI, EAST, EAT, EB, EBAY, EBAYL, EBF, EBIX, EBIZ, EBMT, EBND, EBR, EBR.B, EBS, EBSB, EBTC, EC, ECA, ECC, ECCA, ECCB, ECCX, ECCY, ECF, ECF-A, ECH, ECHO, ECL, ECNS, ECOL, ECOM, ECON, ECOR, ECOW, ECPG, ECT, ED, EDAP, EDC, EDD, EDEN, EDF, EDI, EDIT, EDIV, EDN, EDNT, EDOG, EDOW, EDRY, EDSA, EDTX, EDTXU, EDTXW, EDU, EDUC, EDV, EDZ, EE, EEA, EEB, EEFT, EEH, EEI, EELV, EEM, EEMA, EEMD, EEMO, EEMS, EEMV, EEMX, EES, EET, EEV, EEX, EFA, EFAD, EFAS, EFAV, EFAX, EFBI, EFC, EFF, EFG, EFII, EFL, EFNL, EFO, EFOI, EFR, EFSC, EFT, EFU, EFV, EFX, EFZ, EGAN, EGBN, EGF, EGHT, EGI, EGIF, EGLE, EGO, EGOV, EGP, EGPT, EGRX, EGY, EHC, EHI, EHT, EHTH, EIDO, EIDX, EIG, EIGI, EIGR, EIM, EIRL, EIS, EIX, EJUL, EKAR, EKSO, EL, ELAN, ELC, ELD, ELF, ELGX, ELJ, ELLO, ELMD, ELOX, ELP, ELS, ELSE, ELTK, ELU, ELVT, ELY, EMAG, EMAN, EMB, EMBH, EMCB, EMCF, EMCG, EMCI, EMD, EMDV, EME, EMEM, EMF, EMFM, EMGF, EMHY, EMIF, EMIH, EMKR, EML, EMLC, EMLP, EMMF, EMMS, EMN, EMO, EMP, EMQQ, EMR, EMSG, EMSH, EMTL, EMTY, EMX, EMXC, ENB, ENBA, ENBL, ENDP, ENFC, ENFR, ENG, ENIA, ENIA^, ENIC, ENJ, ENLC, ENLV, ENO, ENOB, ENOR, ENPH, ENR, ENR-A, ENS, ENSG, ENSV, ENT, ENTA, ENTG, ENTR, ENTX, ENTXW, ENV, ENVA, ENX, ENZ, ENZL, EOD, EOG, EOI, EOLS, EOS, EOT, EP-C, EPAM, EPAY, EPC, EPD, EPHE, EPI, EPIX, EPM, EPOL, EPP, EPR, EPR-C, EPR-E, EPR-G, EPRF, EPRT, EPS, EPSN, EPU, EPV, EPZM, EQ, EQAL, EQBK, EQC, EQC-D, EQH, EQIX, EQL, EQM, EQNR, EQR, EQRR, EQS, EQT, EQWL, ERA, ERC, ERF, ERH, ERI, ERIC, ERIE, ERII, ERJ, ERM, EROS, ERSX, ERUS, ERX, ERY, ERYP, ES, ESBA, ESBK, ESCA, ESE, ESEA, ESG, ESGD, ESGE, ESGF, ESGG, ESGL, ESGN, ESGR, ESGRO, ESGRP, ESGS, ESGU, ESGV, ESGW, ESI, ESLT, ESML, ESNT, ESP, ESPO, ESPR, ESQ, ESRT, ESS, ESSA, ESTA, ESTC, ESTE, ESTR, ESTRW, ESV, ESXB, ET, ETB, ETFC, ETG, ETH, ETHO, ETJ, ETM, ETN, ETO, ETON, ETP-C, ETP-D, ETP-E, ETR, ETRN, ETSY, ETTX, ETV, ETW, ETX, ETY, EUDG, EUDV, EUFL, EUFN, EUFX, EUM, EUMF, EUMV, EUO, EURL, EURN, EURZ, EUSA, EUSC, EUXL, EV, EVA, EVBG, EVBN, EVC, EVER, EVF, EVFM, EVFTC, EVG, EVGBC, EVGN, EVH, EVI, EVIX, EVK, EVLMC, EVLO, EVLV, EVM, EVN, EVOK, EVOL, EVOP, EVR, EVRG, EVRI, EVSI, EVSIW, EVSTC, EVT, EVTC, EVV, EVX, EVY, EW, EWA, EWBC, EWC, EWCO, EWD, EWEM, EWG, EWGS, EWH, EWI, EWJ, EWJE, EWJV, EWK, EWL, EWM, EWMC, EWN, EWO, EWP, EWQ, EWRE, EWS, EWSC, EWT, EWU, EWUS, EWV, EWW, EWX, EWY, EWZ, EWZS, EXAS, EXC, EXD, EXEL, EXFO, EXG, EXI, EXIV, EXK, EXLS, EXP, EXPD, EXPE, EXPI, EXPO, EXPR, EXR, EXT, EXTN, EXTR, EYE, EYEG, EYEGW, EYEN, EYES, EYESW, EYLD, EYPT, EZA, EZJ, EZM, EZPW, EZT, EZU, F, F-B, FAAR, FAB, FAD, FAF, FALN, FAM, FAMI, FAN, FANG, FANH, FARM, FARO, FAS, FAST, FAT, FATE, FAUS, FAX, FAZ, FB, FBC, FBGX, FBHS, FBIO, FBIOP, FBIZ, FBK, FBM, FBMS, FBNC, FBND, FBP, FBSS, FBT, FBZ, FC, FCA, FCAL, FCAN, FCAP, FCAU, FCBC, FCBP, FCCO, FCCY, FCEF, FCEL, FCF, FCFS, FCG, FCN, FCNCA, FCO, FCOM, FCOR, FCPT, FCSC, FCT, FCTR, FCVT, FCX, FDBC, FDC, FDD, FDEF, FDEM, FDEU, FDEV, FDHY, FDIS, FDIV, FDL, FDLO, FDM, FDMO, FDN, FDNI, FDP, FDRR, FDS, FDT, FDTS, FDUS, FDUSL, FDUSZ, FDVV, FDX, FE, FEDU, FEI, FEIM, FELE, FELP, FEM, FEMB, FEMS, FEN, FENC, FENG, FENY, FEO, FEP, FET, FEU, FEUL, FEUZ, FEX, FEYE, FEZ, FF, FFA, FFBC, FFBW, FFC, FFEU, FFG, FFHG, FFHL, FFIC, FFIN, FFIU, FFIV, FFNW, FFR, FFSG, FFTG, FFTI, FFTY, FFWM, FG, FG+, FGB, FGBI, FGD, FGEN, FGM, FGP, FHB, FHK, FHL, FHLC, FHN, FHN-A, FI, FIBK, FIBR, FICO, FID, FIDI, FIDU, FIEE, FIF, FIHD, FII, FILL, FINS, FINU, FINX, FINZ, FIS, FISI, FISK, FISR, FISV, FIT, FITB, FITBI, FITE, FIV, FIVA, FIVE, FIVG, FIVN, FIW, FIX, FIXD, FIXX, FIYY, FIZZ, FJP, FKO, FKU, FL, FLAG, FLAT, FLAU, FLAX, FLBL, FLBR, FLC, FLCA, FLCH, FLCO, FLDM, FLDR, FLEE, FLEH, FLEU, FLEX, FLFR, FLGB, FLGE, FLGR, FLGT, FLHK, FLHY, FLIA, FLIC, FLIN, FLIO, FLIR, FLIY, FLJH, FLJP, FLKR, FLKS, FLL, FLLA, FLLV, FLM, FLMB, FLMI, FLMN, FLMNW, FLMX, FLN, FLNG, FLNT, FLO, FLOT, FLOW, FLQD, FLQE, FLQG, FLQH, FLQL, FLQM, FLQS, FLR, FLRN, FLRT, FLRU, FLS, FLSA, FLSW, FLT, FLTB, FLTR, FLTW, FLWS, FLXN, FLXS, FLY, FLZA, FM, FMAO, FMAT, FMB, FMBH, FMBI, FMC, FMCI, FMCIU, FMCIW, FMF, FMHI, FMK, FMN, FMNB, FMO, FMS, FMX, FMY, FN, FNB, FNB-E, FNCB, FNCL, FND, FNDA, FNDB, FNDC, FNDE, FNDF, FNDX, FNF, FNG, FNGD, FNGO, FNGU, FNGZ, FNHC, FNI, FNJN, FNK, FNKO, FNLC, FNSR, FNV, FNWB, FNX, FNY, FOCS, FOE, FOF, FOLD, FOMX, FONR, FOR, FORD, FORK, FORM, FORR, FORTY, FOSL, FOVL, FOX, FOXA, FOXF, FPA, FPAC, FPAC+, FPAC=, FPAY, FPAYW, FPE, FPEI, FPF, FPH, FPI, FPI-B, FPL, FPRX, FPX, FPXE, FPXI, FQAL, FR, FRA, FRAC, FRAF, FRAK, FRAN, FRBA, FRBK, FRC, FRC-D, FRC-F, FRC-G, FRC-H, FRC-I, FRD, FRDM, FRED, FREL, FRGI, FRI, FRLG, FRME, FRN, FRO, FRPH, FRPT, FRSX, FRT, FRT-C, FRTA, FSB, FSBC, FSBW, FSCT, FSD, FSFG, FSI, FSK, FSLR, FSLY, FSM, FSMB, FSMD, FSP, FSS, FSTA, FSTR, FSV, FSZ, FT, FTA, FTAC, FTACU, FTACW, FTAG, FTAI, FTC, FTCH, FTCS, FTDR, FTEC, FTEK, FTEO, FTF, FTFT, FTGC, FTHI, FTI, FTK, FTLB, FTLS, FTNT, FTNW, FTR, FTRI, FTS, FTSD, FTSI, FTSL, FTSM, FTSV, FTV, FTV-A, FTVA, FTXD, FTXG, FTXH, FTXL, FTXN, FTXO, FTXR, FUD, FUE, FUL, FULT, FUMB, FUN, FUNC, FUND, FUSB, FUT, FUTY, FUV, FV, FVAL, FVC, FVCB, FVD, FVE, FVL, FVRR, FWDB, FWONA, FWONK, FWP, FWRD, FXA, FXB, FXC, FXCH, FXD, FXE, FXF, FXG, FXH, FXI, FXL, FXN, FXNC, FXO, FXP, FXR, FXS, FXSG, FXU, FXY, FXZ, FYC, FYLD, FYT, FYX, G, GAA, GAB, GAB-D, GAB-G, GAB-H, GAB-J, GABC, GAIA, GAIN, GAINL, GAINM, GAL, GALT, GAM, GAM-B, GAMR, GARD, GARS, GASL, GASS, GASX, GATX, GAZ, GBAB, GBCI, GBDC, GBF, GBIL, GBL, GBLI, GBLIL, GBLIZ, GBR, GBT, GBUY, GBX, GCAP, GCBC, GCC, GCE, GCI, GCO, GCOW, GCP, GCV, GCV-B, GCVRZ, GD, GDAT, GDDY, GDEN, GDG, GDI, GDL, GDL-C, GDMA, GDNA, GDO, GDOT, GDP, GDS, GDV, GDV-A, GDV-D, GDV-G, GDV-H, GDVD, GDX, GDXJ, GDXS, GDXX, GE, GEC, GECC, GECCL, GECCM, GECCN, GEF, GEF.B, GEL, GEM, GEMP, GEN, GENC, GENE, GENY, GEO, GEOS, GER, GERN, GES, GEVO, GF, GFED, GFF, GFI, GFIN, GFN, GFNCP, GFNSL, GFY, GGAL, GGB, GGG, GGM, GGN, GGN-B, GGO, GGO-A, GGT, GGT-B, GGT-E, GGZ, GGZ-A, GH, GHC, GHDX, GHG, GHII, GHL, GHM, GHSI, GHY, GHYB, GHYG, GIB, GIFI, GIG, GIG+, GIG=, GIGB, GIGE, GIGM, GIG^, GII, GIII, GIL, GILD, GILT, GIM, GIS, GIX, GIX+, GIX=, GIX^, GJH, GJO, GJP, GJR, GJS, GJT, GJV, GKOS, GLAC, GLACR, GLACU, GLACW, GLAD, GLADD, GLADN, GLBS, GLBY, GLBZ, GLD, GLDD, GLDI, GLDM, GLDW, GLG, GLIBA, GLIBP, GLIF, GLL, GLMD, GLNG, GLO, GLOB, GLOG, GLOG-A, GLOP, GLOP-A, GLOP-B, GLOP-C, GLOW, GLP, GLP-A, GLPG, GLPI, GLQ, GLRE, GLT, GLTR, GLU, GLU-A, GLU-B, GLUU, GLV, GLW, GLYC, GM, GMAN, GMDA, GME, GMED, GMF, GMHI, GMHIU, GMHIW, GMLP, GMLPP, GMO, GMOM, GMRE, GMRE-A, GMS, GMTA, GMZ, GNAF, GNC, GNCA, GNE, GNE-A, GNFT, GNK, GNL, GNL-A, GNLN, GNMA, GNMK, GNMX, GNOM, GNPX, GNR, GNRC, GNT, GNT-A, GNTX, GNTY, GNUS, GNW, GO, GOAT, GOAU, GOEX, GOF, GOGL, GOGO, GOL, GOLD, GOLF, GOOD, GOODM, GOODO, GOODP, GOOG, GOOGL, GOOS, GORO, GOSS, GOVT, GPAQ, GPAQU, GPAQW, GPC, GPI, GPJA, GPK, GPL, GPM, GPMT, GPN, GPOR, GPP, GPRE, GPRK, GPRO, GPS, GPX, GQRE, GRA, GRAF, GRAF+, GRAF=, GRAM, GRBK, GRC, GREK, GRES, GRF, GRFS, GRI, GRID, GRIF, GRIN, GRMN, GRNB, GRNQ, GROW, GRP=, GRPN, GRSH, GRSHU, GRSHW, GRTS, GRU, GRUB, GRVY, GRX, GRX-A, GRX-B, GS, GS-A, GS-B*, GS-C, GS-D, GS-J, GS-K, GS-N, GSAH, GSAH+, GSAH=, GSAT, GSB, GSBC, GSBD, GSC, GSEU, GSEW, GSG, GSH, GSHD, GSIE, GSIT, GSJY, GSK, GSKY, GSL, GSL-B, GSLC, GSM, GSP, GSS, GSSC, GSST, GSUM, GSV, GSVC, GSX, GSY, GT, GTE, GTES, GTHX, GTIM, GTIP, GTLS, GTN, GTN.A, GTO, GTS, GTT, GTX, GTY, GTYH, GUDB, GULF, GUNR, GURE, GURU, GUSH, GUT, GUT-A, GUT-C, GV, GVA, GVAL, GVI, GVIP, GVP, GWB, GWGH, GWPH, GWR, GWRE, GWRS, GWW, GWX, GXC, GXF, GXG, GXGXU, GYB, GYC, GYLD, GYRO, H, HA, HABT, HACK, HAE, HAFC, HAIL, HAIN, HAIR, HAL, HALL, HALO, HAO, HAP, HARP, HAS, HASI, HAUD, HAUZ, HAWX, HAYN, HBAN, HBANN, HBANO, HBB, HBCP, HBI, HBIO, HBM, HBMD, HBNC, HBP, HCA, HCAC, HCACU, HCACW, HCAP, HCAPZ, HCC, HCCH, HCCHR, HCCHU, HCCHW, HCCI, HCFT, HCHC, HCI, HCKT, HCM, HCP, HCR, HCSG, HCXY, HCXZ, HD, HDAW, HDB, HDEF, HDG, HDGE, HDLV, HDMV, HDS, HDSN, HDV, HE, HEAR, HEB, HEBT, HECO, HEDJ, HEEM, HEES, HEFA, HEI, HEI.A, HELE, HEP, HEQ, HERD, HES, HESM, HEWC, HEWG, HEWI, HEWJ, HEWL, HEWP, HEWU, HEWW, HEWY, HEXO, HEZU, HFBC, HFBL, HFC, HFFG, HFRO, HFWA, HFXE, HFXI, HFXJ, HGH, HGLB, HGSH, HGV, HHC, HHHH, HHHHR, HHHHU, HHHHW, HHR, HHS, HI, HIBB, HIE, HIFS, HIG, HIG-G, HIHO, HII, HIIQ, HIL, HIMX, HIO, HIPS, HIVE, HIW, HIX, HJLI, HJLIW, HJPX, HJV, HK, HK+, HL, HL-B, HLF, HLG, HLI, HLIO, HLIT, HLM-, HLNE, HLT, HLTH, HLX, HMC, HMG, HMHC, HMI, HMLP, HMLP-A, HMN, HMNF, HMOP, HMST, HMSY, HMTV, HMY, HNDL, HNGR, HNI, HNNA, HNP, HNRG, HNW, HOFT, HOG, HOLD, HOLI, HOLX, HOMB, HOME, HOML, HOMZ, HON, HONE, HONR, HOOK, HOPE, HOS, HOTH, HOV, HOVNP, HP, HPE, HPF, HPI, HPJ, HPP, HPQ, HPR, HPS, HPT, HQH, HQL, HQY, HR, HRB, HRC, HRI, HRL, HROW, HRTG, HRTX, HRZN, HSAC, HSACU, HSACW, HSBC, HSBC-A, HSC, HSCZ, HSDT, HSGX, HSIC, HSII, HSKA, HSON, HSPX, HSRT, HST, HSTM, HSY, HT, HT-C, HT-D, HT-E, HTA, HTAB, HTBI, HTBK, HTBX, HTD, HTEC, HTFA, HTGC, HTGM, HTH, HTHT, HTLD, HTLF, HTRB, HTUS, HTY, HTZ, HUBB, HUBG, HUBS, HUD, HUM, HUN, HURC, HURN, HUSA, HUSE, HUSV, HUYA, HVBC, HVT, HVT.A, HWBK, HWC, HWCC, HWCPL, HWKN, HX, HXL, HY, HYACU, HYB, HYD, HYDB, HYDD, HYDW, HYEM, HYG, HYGH, HYGS, HYGV, HYHG, HYI, HYIH, HYLB, HYLD, HYLS, HYLV, HYMB, HYND, HYRE, HYS, HYT, HYUP, HYXE, HYXU, HYZD, HZN, HZNP, HZO, I, IAA, IAC, IAE, IAF, IAG, IAGG, IAI, IAK, IART, IAT, IAU, IAUF, IBA, IBB, IBCD, IBCE, IBCP, IBD, IBDC, IBDD, IBDK, IBDL, IBDM, IBDN, IBDO, IBDP, IBDQ, IBDR, IBDS, IBDT, IBHA, IBHB, IBHC, IBHD, IBHE, IBIO, IBKC, IBKCN, IBKCO, IBKCP, IBKR, IBM, IBMH, IBMI, IBMJ, IBMK, IBML, IBMM, IBMN, IBMO, IBMP, IBMQ, IBN, IBND, IBOC, IBP, IBTX, IBUY, ICAD, ICBK, ICCC, ICCH, ICD, ICE, ICF, ICFI, ICHR, ICL, ICLK, ICLN, ICLR, ICOL, ICON, ICOW, ICPT, ICSH, ICUI, ICVT, IDA, IDCC, IDE, IDEV, IDEX, IDHD, IDHQ, IDIV, IDLB, IDLV, IDMO, IDN, IDNA, IDOG, IDRA, IDRV, IDSA, IDSY, IDT, IDU, IDV, IDX, IDXG, IDXX, IDYA, IEA, IEAWW, IEC, IECS, IEDI, IEF, IEFA, IEFN, IEHS, IEI, IEIH, IEMD, IEME, IEMG, IEMV, IEO, IEP, IESC, IETC, IEUR, IEUS, IEV, IEX, IEZ, IFEU, IFF, IFFT, IFGL, IFIX, IFLY, IFMK, IFN, IFRA, IFRX, IFV, IG, IGA, IGBH, IGC, IGD, IGE, IGEB, IGF, IGHG, IGI, IGIB, IGIH, IGLB, IGLD, IGM, IGN, IGOV, IGR, IGRO, IGSB, IGT, IGV, IGVT, IHAK, IHC, IHD, IHDG, IHE, IHF, IHG, IHI, IHIT, IHT, IHTA, IHY, IHYD, IHYV, IID, IIF, IIGD, IIGV, III, IIIN, IIIV, IIM, IIN, IIPR, IIPR-A, IIVI, IJH, IJJ, IJK, IJR, IJS, IJT, IJUL, IKNX, ILF, ILMN, ILPT, ILTB, IMAC, IMACW, IMAX, IMFC, IMFD, IMFI, IMFP, IMGN, IMH, IMI, IMKTA, IMLP, IMMP, IMMR, IMMU, IMO, IMOM, IMOS, IMRN, IMRNW, IMTB, IMTE, IMTM, IMUX, IMV, IMXI, INAG, INAP, INAU, INB, INBK, INBKL, INBKZ, INCO, INCY, INDA, INDB, INDL, INDS, INDY, INF, INFI, INFN, INFO, INFR, INFU, INFY, ING, INGN, INGR, INKM, INMB, INN, INN-D, INN-E, INNT, INO, INOD, INOV, INPX, INR, INS, INSE, INSG, INSI, INSM, INSP, INST, INSU, INSUU, INSUW, INSW, INSW-A, INT, INTC, INTF, INTG, INTL, INTT, INTU, INUV, INVA, INVE, INVH, INWK, INXN, IO, IONS, IOO, IOR, IOSP, IOTS, IOVA, IP, IPAC, IPAR, IPAY, IPB, IPDN, IPE, IPFF, IPG, IPGP, IPHI, IPHS, IPI, IPIC, IPKW, IPLDP, IPO, IPOA, IPOA+, IPOA=, IPOS, IPWR, IQ, IQDE, IQDF, IQDG, IQDY, IQI, IQIN, IQLT, IQV, IR, IRBO, IRBT, IRCP, IRDM, IRET, IRET-C, IRIX, IRL, IRM, IRMD, IROQ, IRR, IRS, IRT, IRTC, IRWD, ISBC, ISCA, ISCF, ISD, ISDR, ISDS, ISDX, ISEE, ISEM, ISG, ISHG, ISIG, ISMD, ISNS, ISR, ISRA, ISRG, ISRL, ISSC, ISTB, ISTR, ISZE, IT, ITA, ITB, ITCB, ITCI, ITE, ITEQ, ITGR, ITI, ITIC, ITM, ITMR, ITOT, ITP, ITRI, ITRM, ITRN, ITT, ITUB, ITW, IUS, IUSB, IUSG, IUSS, IUSV, IVAC, IVAL, IVC, IVE, IVENC, IVFGC, IVFVC, IVH, IVLU, IVOG, IVOL, IVOO, IVOV, IVR, IVR-A, IVR-B, IVR-C, IVV, IVW, IVZ, IWB, IWC, IWD, IWF, IWL, IWM, IWN, IWO, IWP, IWR, IWS, IWV, IWX, IWY, IX, IXC, IXG, IXJ, IXN, IXP, IXSE, IXUS, IYC, IYE, IYF, IYG, IYH, IYJ, IYK, IYLD, IYM, IYR, IYT, IYW, IYY, IYZ, IZEA, IZRL, JACK, JAG, JAGG, JAGX, JAKK, JAMF, JASN, JAX, JAZZ, JBGS, JBHT, JBK, JBL, JBLU, JBN, JBR, JBSS, JBT, JCAP, JCAP-B, JCE, JCI, JCO, JCOM, JCP, JCPB, JCS, JCTCF, JD, JDD, JDIV, JDST, JE, JE-A, JEC, JEF, JELD, JEMD, JEQ, JETS, JFIN, JFK, JFKKR, JFKKU, JFKKW, JFR, JG, JGH, JHAA, JHB, JHCS, JHD, JHEM, JHG, JHI, JHMA, JHMC, JHMD, JHME, JHMF, JHMH, JHMI, JHML, JHMM, JHMS, JHMT, JHMU, JHS, JHSC, JHX, JHY, JIGB, JILL, JJA, JJC, JJE, JJG, JJM, JJN, JJP, JJS, JJSF, JJT, JJU, JKD, JKE, JKF, JKG, JKH, JKHY, JKI, JKJ, JKK, JKL, JKS, JLL, JLS, JMBS, JMEI, JMF, JMIA, JMIN, JMLP, JMM, JMOM, JMP, JMPB, JMPD, JMST, JMT, JMU, JMUB, JNCE, JNJ, JNK, JNPR, JNUG, JO, JOB, JOBS, JOE, JOF, JOUT, JP, JPC, JPED, JPEM, JPEU, JPGB, JPGE, JPHF, JPHY, JPI, JPIN, JPLS, JPM, JPM-A, JPM-C, JPM-D, JPM-E, JPM-F, JPM-G, JPM-H, JPMB, JPME, JPMF, JPMV, JPN, JPNL, JPS, JPSE, JPST, JPT, JPUS, JPXN, JQC, JQUA, JRI, JRJC, JRO, JRS, JRSH, JRVR, JSD, JSM, JSMD, JSML, JT, JTA, JTD, JUST, JVA, JVAL, JW.A, JW.B, JWN, JXI, JYNT, K, KAI, KALA, KALL, KALU, KALV, KAMN, KAR, KARS, KB, KBA, KBAL, KBE, KBH, KBLM, KBLMR, KBLMU, KBLMW, KBR, KBSF, KBWB, KBWD, KBWP, KBWR, KBWY, KCAPL, KCCB, KCE, KCNY, KDMN, KDP, KE, KEG, KELYA, KELYB, KEM, KEMQ, KEMX, KEN, KEP, KEQU, KERN, KERNW, KEX, KEY, KEY-I, KEY-J, KEY-K, KEYS, KF, KFFB, KFRC, KFS, KFY, KFYP, KGC, KGJI, KGRN, KHC, KIDS, KIE, KIM, KIM-I, KIM-J, KIM-K, KIM-L, KIM-M, KIN, KINS, KIO, KIQ, KIRK, KKR, KKR-A, KKR-B, KL, KLAC, KLCD, KLDO, KLDW, KLIC, KLXE, KMB, KMDA, KMED, KMF, KMI, KMPH, KMPR, KMT, KMX, KN, KNAB, KNDI, KNG, KNL, KNOP, KNOW, KNSA, KNSL, KNX, KO, KOD, KODK, KOF, KOIN, KOL, KOLD, KOMP, KOOL, KOP, KOPN, KORP, KORU, KOS, KOSS, KPTI, KR, KRA, KRC, KRE, KREF, KRG, KRMA, KRNT, KRNY, KRO, KRP, KRTX, KRYS, KSA, KSCD, KSM, KSS, KSU, KSU-, KT, KTB, KTCC, KTF, KTH, KTN, KTOS, KTOV, KTOVW, KTP, KURA, KURE, KVHI, KW, KWEB, KWR, KXI, KXIN, KYN, KYN-F, KZIA, KZR, L, LABD, LABU, LAC, LACK, LACQ, LACQU, LACQW, LAD, LADR, LAIX, LAKE, LAMR, LANC, LAND, LANDP, LARK, LASR, LAUR, LAWS, LAZ, LAZY, LB, LBAI, LBC, LBDC, LBJ, LBRDA, LBRDK, LBRT, LBTYA, LBTYB, LBTYK, LBY, LC, LCA, LCAHU, LCAHW, LCI, LCII, LCNB, LCUT, LD, LDL, LDOS, LDP, LDRI, LDRS, LDSF, LDUR, LE, LEA, LEAD, LEAF, LECO, LEDS, LEE, LEG, LEGH, LEGR, LEJU, LEMB, LEN, LEN.B, LEND, LEO, LEU, LEVI, LEVL, LEXEA, LEXEB, LFAC, LFACU, LFACW, LFC, LFEQ, LFUS, LFVN, LGC, LGC+, LGC=, LGF.A, LGF.B, LGI, LGIH, LGL, LGLV, LGND, LGOV, LH, LHC, LHC+, LHC=, LHCG, LHX, LIFE, LII, LILA, LILAK, LIN, LINC, LIND, LINDW, LINX, LIQT, LIT, LITB, LITE, LIVE, LIVN, LIVX, LJPC, LK, LKCO, LKFN, LKOR, LKQ, LKSD, LL, LLEX, LLIT, LLNW, LLQD, LLY, LM, LMAT, LMB, LMBS, LMFA, LMFAW, LMHA, LMHB, LMLP, LMNR, LMNX, LMRK, LMRKN, LMRKO, LMRKP, LMST, LMT, LN, LNC, LND, LNDC, LNG, LNGR, LNN, LNT, LNTH, LOAC, LOACR, LOACU, LOACW, LOAN, LOB, LOCO, LODE, LOGC, LOGI, LOGM, LOMA, LONE, LOOP, LOPE, LOR, LORL, LOUP, LOV, LOVE, LOW, LOWC, LPCN, LPG, LPI, LPL, LPLA, LPSN, LPT, LPTH, LPTX, LPX, LQD, LQDA, LQDH, LQDI, LQDT, LRAD, LRCX, LRET, LRGE, LRGF, LRN, LSAF, LSBK, LSCC, LSI, LSLT, LSST, LSTR, LSXMA, LSXMB, LSXMK, LTBR, LTC, LTHM, LTL, LTM, LTPZ, LTRPA, LTRPB, LTRX, LTS, LTS-A, LTSF, LTSH, LTSK, LTSL, LTXB, LUB, LULU, LUNA, LUV, LVHB, LVHD, LVHE, LVHI, LVIN, LVL, LVS, LVUS, LW, LWAY, LX, LXFR, LXP, LXP-C, LXRX, LXU, LYB, LYFT, LYG, LYL, LYTS, LYV, LZB, M, MA, MAA, MAA-I, MAAX, MAC, MACK, MAG, MAGA, MAGS, MAIN, MAMS, MAN, MANH, MANT, MANU, MAR, MARA, MARK, MARPS, MAS, MASI, MAT, MATW, MATX, MAV, MAXR, MAYS, MBB, MBCN, MBG, MBI, MBII, MBIN, MBINP, MBIO, MBOT, MBRX, MBSD, MBT, MBTF, MBUU, MBWM, MC, MCA, MCB, MCBC, MCC, MCD, MCEF, MCEP, MCF, MCFT, MCHI, MCHP, MCHX, MCI, MCK, MCN, MCO, MCR, MCRB, MCRI, MCRN, MCRO, MCS, MCV, MCX, MCY, MD, MDB, MDC, MDCA, MDCO, MDGL, MDGS, MDGSW, MDIV, MDJH, MDLQ, MDLX, MDLY, MDLZ, MDP, MDR, MDRR, MDRX, MDSO, MDT, MDU, MDWD, MDY, MDYG, MDYV, MEAR, MEC, MED, MEDP, MEET, MEI, MEIP, MELI, MEN, MEOH, MER-K, MERC, MESA, MESO, MET, MET-A, MET-E, METC, MEXX, MFA, MFA-B, MFAC, MFAC+, MFAC=, MFC, MFD, MFDX, MFEM, MFG, MFGP, MFIN, MFINL, MFL, MFM, MFMS, MFNC, MFO, MFSF, MFT, MFUS, MFV, MG, MGA, MGC, MGEE, MGEN, MGF, MGI, MGIC, MGK, MGLN, MGM, MGNX, MGP, MGPI, MGR, MGRC, MGTA, MGTX, MGU, MGV, MGY, MGY+, MGYR, MH-A, MH-C, MH-D, MHD, MHE, MHF, MHH, MHI, MHK, MHLA, MHLD, MHN, MHNC, MHO, MIC, MICR, MICT, MIDD, MIDF, MIDU, MIDZ, MIE, MIK, MILN, MIME, MIN, MINC, MIND, MINDP, MINI, MINT, MIST, MITK, MITO, MITT, MITT-A, MITT-B, MIXT, MIY, MJ, MJCO, MKC, MKC.V, MKGI, MKL, MKSI, MKTX, MLAB, MLCO, MLHR, MLI, MLM, MLN, MLND, MLNT, MLNX, MLP, MLPA, MLPB, MLPC, MLPE, MLPG, MLPI, MLPO, MLPQ, MLPX, MLPY, MLPZ, MLQD, MLR, MLSS, MLTI, MLVF, MMAC, MMC, MMD, MMDM, MMDMR, MMDMU, MMDMW, MMI, MMIN, MMIT, MMLP, MMM, MMP, MMS, MMSI, MMT, MMTM, MMU, MMX, MMYT, MN, MNA, MNCL, MNCLU, MNCLW, MNDO, MNE, MNI, MNK, MNKD, MNLO, MNOV, MNP, MNR, MNR-C, MNRL, MNRO, MNSB, MNST, MNTA, MNTX, MO, MOAT, MOBL, MOD, MODN, MOFG, MOG.A, MOG.B, MOGO, MOGU, MOH, MOM, MOMO, MOO, MOR, MORF, MORL, MORN, MORT, MOS, MOSC, MOSC+, MOSC=, MOSY, MOTI, MOTS, MOV, MOXC, MPA, MPAA, MPB, MPC, MPLX, MPO, MPV, MPVD, MPW, MPWR, MPX, MQT, MQY, MR, MRAM, MRBK, MRC, MRCC, MRCCL, MRCY, MREO, MRGR, MRIC, MRIN, MRK, MRKR, MRLN, MRNA, MRNS, MRO, MRRL, MRSN, MRTN, MRTX, MRUS, MRVL, MS, MS-A, MS-E, MS-F, MS-G, MS-I, MS-K, MSA, MSB, MSBF, MSBI, MSC, MSCI, MSD, MSEX, MSFT, MSG, MSGN, MSI, MSL, MSM, MSN, MSON, MSTR, MSUS, MSVB, MT, MTB, MTB-, MTB-C, MTBC, MTBCP, MTC, MTCH, MTD, MTDR, MTEM, MTEX, MTFB, MTFBW, MTG, MTH, MTL, MTL-, MTLS, MTN, MTNB, MTOR, MTP, MTR, MTRN, MTRX, MTSC, MTSI, MTSL, MTT, MTUM, MTW, MTX, MTZ, MU, MUA, MUB, MUC, MUDS, MUDSU, MUDSW, MUE, MUFG, MUH, MUI, MUJ, MUNI, MUR, MUS, MUSA, MUST, MUTE, MUX, MVBF, MVC, MVCD, MVF, MVIN, MVIS, MVO, MVT, MVV, MWA, MWK, MX, MXC, MXDE, MXDU, MXE, MXF, MXI, MXIM, MXL, MYC, MYD, MYE, MYF, MYFW, MYGN, MYI, MYJ, MYL, MYN, MYND, MYNDW, MYO, MYOK, MYOS, MYOV, MYRG, MYSZ, MYT, MYY, MZA, MZZ, NAC, NACP, NAD, NAII, NAIL, NAK, NAKD, NAN, NANO, NANR, NAOV, NAT, NATH, NATI, NATR, NAV, NAV-D, NAVB, NAVI, NAZ, NBB, NBEV, NBH, NBHC, NBIX, NBL, NBLX, NBN, NBO, NBR, NBR-A, NBRV, NBTB, NBW, NBY, NC, NCA, NCB, NCBS, NCI, NCLH, NCMI, NCNA, NCR, NCSM, NCTY, NCV, NCV-A, NCZ, NCZ-A, NDAQ, NDLS, NDP, NDRA, NDRAW, NDSN, NE, NEA, NEAR, NEBU, NEBUU, NEBUW, NEE, NEE-I, NEE-J, NEE-K, NEE-N, NEE-R, NEED, NEM, NEN, NEO, NEOG, NEON, NEOS, NEP, NEPT, NERD, NERV, NES, NESR, NESRW, NETE, NETL, NEU, NEV, NEW, NEWA, NEWM, NEWR, NEWT, NEWTI, NEWTZ, NEXA, NEXT, NFBK, NFC, NFC+, NFC=, NFE, NFG, NFJ, NFLT, NFLX, NFO, NFRA, NFTY, NG, NGD, NGE, NGG, NGHC, NGHCN, NGHCO, NGHCP, NGHCZ, NGL, NGL-B, NGL-C, NGLS-A, NGM, NGS, NGVC, NGVT, NH, NHA, NHC, NHF, NHI, NHLD, NHLDW, NHS, NHTC, NI, NI-B, NIB, NICE, NICK, NID, NIE, NIHD, NIM, NINE, NIO, NIQ, NIU, NJR, NJV, NK, NKE, NKG, NKSH, NKTR, NKX, NL, NLNK, NLR, NLS, NLSN, NLY, NLY-C*, NLY-D, NLY-F, NLY-G, NLY-I, NM, NM-G, NM-H, NMCI, NMFC, NMFX, NMI, NMIH, NMK-B, NMK-C, NML, NMM, NMR, NMRD, NMRK, NMS, NMT, NMY, NMZ, NNA, NNBR, NNC, NNDM, NNI, NNN, NNN-E, NNN-F, NNVC, NNY, NOA, NOAH, NOBL, NOC, NODK, NOG, NOK, NOM, NOMD, NORW, NOV, NOVN, NOVT, NOW, NP, NPK, NPN, NPO, NPTN, NPV, NQP, NR, NRC, NRCG, NRCG+, NRE, NRG, NRGD, NRGO, NRGU, NRGX, NRGZ, NRIM, NRK, NRO, NRP, NRT, NRUC, NRZ, NRZ-A, NS, NS-A, NS-B, NS-C, NSA, NSA-A, NSC, NSEC, NSIT, NSL, NSP, NSPR, NSPR+, NSPR+B, NSS, NSSC, NSTG, NSYS, NTAP, NTB, NTC, NTCT, NTEC, NTES, NTEST, NTEST.A, NTEST.B, NTEST.C, NTG, NTGN, NTGR, NTIC, NTIP, NTLA, NTN, NTNX, NTP, NTR, NTRA, NTRP, NTRS, NTRSP, NTSX, NTWK, NTX, NTZ, NUAG, NUAN, NUBD, NUDM, NUE, NUEM, NUGT, NULC, NULG, NULV, NUM, NUMG, NUMV, NUO, NURE, NURO, NUROW, NUS, NUSA, NUSC, NUV, NUVA, NUW, NVAX, NVCN, NVCR, NVDA, NVEC, NVEE, NVFY, NVG, NVGS, NVIV, NVLN, NVMI, NVO, NVR, NVRO, NVS, NVT, NVTA, NVTR, NVUS, NWBI, NWE, NWFL, NWHM, NWL, NWLI, NWN, NWPX, NWS, NWSA, NX, NXC, NXE, NXGN, NXJ, NXN, NXP, NXPI, NXQ, NXR, NXRT, NXST, NXTC, NXTD, NXTDW, NXTG, NYCB, NYCB-A, NYCB-U, NYF, NYMT, NYMTN, NYMTO, NYMTP, NYMX, NYNY, NYT, NYV, NZF, NONE, O, OAK, OAK-A, OAK-B, OAS, OASM, OBAS, OBCI, OBE, OBLN, OBNK, OBOR, OBSV, OC, OCC, OCCI, OCCIP, OCFC, OCIO, OCN, OCSI, OCSL, OCSLL, OCUL, OCX, ODC, ODFL, ODP, ODT, OEC, OEF, OESX, OEUR, OFC, OFED, OFG, OFG-A, OFG-B, OFG-D, OFIX, OFLX, OFS, OFSSL, OFSSZ, OGCP, OGE, OGEN, OGI, OGIG, OGS, OHAI, OHI, OHRP, OI, OIA, OIBR.C, OIH, OII, OIIM, OIL, OILD, OILK, OILU, OILX, OIS, OKDCC, OKE, OKTA, OLBK, OLD, OLED, OLEM, OLLI, OLN, OLP, OMAB, OMC, OMCL, OMER, OMEX, OMF, OMFL, OMFS, OMI, OMN, OMOM, OMP, ON, ONB, ONCE, ONCS, ONCT, ONCY, ONDK, ONE, ONEO, ONEQ, ONEV, ONEY, ONLN, ONTX, ONTXW, ONVO, OOMA, OPB, OPBK, OPER, OPES, OPESU, OPESW, OPGN, OPGNW, OPHC, OPI, OPINI, OPK, OPNT, OPOF, OPP, OPRA, OPRX, OPTN, OPTT, OPY, OQAL, OR, ORA, ORAN, ORBC, ORC, ORCL, ORG, ORGO, ORGS, ORI, ORIT, ORLY, ORMP, ORN, ORRF, ORTX, OSB, OSBC, OSBCP, OSCV, OSG, OSIS, OSIZ, OSK, OSLE, OSMT, OSN, OSPN, OSS, OSTK, OSUR, OSW, OTEL, OTEX, OTIC, OTIV, OTLK, OTLKW, OTTR, OTTW, OUNZ, OUSA, OUSM, OUT, OVBC, OVID, OVLU, OVLY, OVOL, OXBR, OXBRW, OXFD, OXLC, OXLCM, OXLCO, OXM, OXSQ, OXSQL, OXSQZ, OXY, OYLD, OZK, OZM, PAA, PAAC, PAACR, PAACU, PAACW, PAAS, PAC, PACA, PACB, PACD, PACK, PACK+, PACQ, PACQU, PACQW, PACW, PAG, PAGP, PAGS, PAHC, PAI, PAK, PALL, PAM, PANL, PANW, PAPR, PAR, PARR, PASS, PATI, PATK, PAVE, PAVM, PAVMW, PAVMZ, PAWZ, PAYC, PAYS, PAYX, PB, PBA, PBB, PBBI, PBC, PBCT, PBCTP, PBD, PBDM, PBE, PBEE, PBF, PBFX, PBH, PBHC, PBI, PBI-B, PBIP, PBJ, PBND, PBP, PBPB, PBR, PBR.A, PBS, PBSM, PBT, PBTP, PBTS, PBUS, PBW, PBY, PBYI, PCAR, PCB, PCEF, PCF, PCG, PCG-A, PCG-B, PCG-C, PCG-D, PCG-E, PCG-G, PCG-H, PCG-I, PCH, PCI, PCK, PCM, PCMI, PCN, PCOM, PCQ, PCRX, PCSB, PCTI, PCTY, PCY, PCYG, PCYO, PD, PDBC, PDCE, PDCO, PDD, PDEX, PDFS, PDI, PDLB, PDLI, PDM, PDN, PDP, PDS, PDSB, PDT, PE, PEB, PEB-C, PEB-D, PEB-E, PEB-F, PEBK, PEBO, PECK, PECKW, PED, PEG, PEGA, PEGI, PEI, PEI-B, PEI-C, PEI-D, PEIX, PEJ, PEK, PEN, PENN, PEO, PEP, PER, PERI, PES, PESI, PETQ, PETS, PETX, PETZ, PEX, PEXL, PEY, PEZ, PFBC, PFBI, PFD, PFE, PFF, PFFA, PFFD, PFFL, PFFR, PFG, PFGC, PFH, PFI, PFIE, PFIG, PFIN, PFIS, PFL, PFLT, PFM, PFMT, PFN, PFNX, PFO, PFPT, PFS, PFSI, PFSW, PFXF, PG, PGAL, PGC, PGF, PGHY, PGJ, PGM, PGNX, PGP, PGR, PGRE, PGTI, PGX, PGZ, PH, PHAS, PHB, PHCF, PHD, PHDG, PHG, PHI, PHIO, PHIOW, PHK, PHM, PHO, PHT, PHUN, PHUNW, PHX, PHYL, PHYS, PI, PIC=, PICB, PICK, PICO, PID, PIE, PIH, PIHPP, PII, PILL, PIM, PIN, PINC, PINS, PIO, PIR, PIRS, PIXY, PIY, PIZ, PJAN, PJC, PJH, PJP, PJT, PJUL, PJUN, PK, PKB, PKBK, PKD, PKE, PKG, PKI, PKO, PKOH, PKW, PKX, PLAB, PLAG, PLAN, PLAT, PLAY, PLBC, PLCE, PLCY, PLD, PLG, PLL, PLM, PLMR, PLNT, PLOW, PLPC, PLSE, PLT, PLTM, PLUG, PLUS, PLW, PLX, PLXP, PLXS, PLYA, PLYM, PLYM-A, PM, PMBC, PMD, PME, PMF, PML, PMM, PMO, PMOM, PMR, PMT, PMT-A, PMT-B, PMTS, PMX, PNBK, PNC, PNC-P, PNC-Q, PNF, PNFP, PNI, PNM, PNNT, PNQI, PNR, PNRG, PNRL, PNTR, PNW, POAI, POCT, PODD, POL, POLA, POOL, POPE, POR, POST, POWI, POWL, PPA, PPBI, PPC, PPDF, PPDM, PPEM, PPG, PPH, PPHI, PPIH, PPL, PPLC, PPLN, PPLT, PPMC, PPR, PPSC, PPSI, PPT, PPTY, PPX, PQG, PQIN, PQLC, PQSG, PQSV, PRA, PRAA, PRAH, PRCP, PRE-F, PRE-G, PRE-H, PRE-I, PREF, PRF, PRFT, PRFZ, PRGO, PRGS, PRGX, PRH, PRI, PRID, PRIF-A, PRIF-B, PRIF-C, PRIF-D, PRIM, PRK, PRLB, PRME, PRMW, PRN, PRNB, PRNT, PRO, PROV, PRPH, PRPL, PRPO, PRQR, PRS, PRSC, PRSP, PRT, PRTA, PRTH, PRTK, PRTO, PRTS, PRTY, PRU, PRVB, PRVL, PS, PSA, PSA-A, PSA-B, PSA-C, PSA-D, PSA-E, PSA-F, PSA-G, PSA-H, PSA-U, PSA-V, PSA-W, PSA-X, PSB, PSB-U, PSB-V, PSB-W, PSB-X, PSB-Y, PSC, PSCC, PSCD, PSCE, PSCF, PSCH, PSCI, PSCM, PSCT, PSCU, PSDO, PSEC, PSET, PSF, PSI, PSJ, PSK, PSL, PSLV, PSMB, PSMC, PSMG, PSMM, PSMT, PSN, PSNL, PSO, PSP, PSQ, PSR, PST, PSTG, PSTI, PSTL, PSV, PSX, PSXP, PT, PTC, PTCT, PTE, PTEN, PTEU, PTF, PTGX, PTH, PTI, PTIN, PTLA, PTLC, PTMC, PTMN, PTN, PTNQ, PTNR, PTR, PTSI, PTVCA, PTVCB, PTY, PUB, PUI, PUK, PUK-, PUK-A, PULM, PULS, PUMP, PUTW, PUYI, PVAC, PVAL, PVBC, PVG, PVH, PVI, PVL, PVT, PVT+, PVT=, PVTL, PW, PW-A, PWB, PWC, PWOD, PWR, PWS, PWV, PWZ, PXD, PXE, PXF, PXH, PXI, PXJ, PXLW, PXQ, PXS, PY, PYN, PYPE, PYPL, PYS, PYT, PYX, PYZ, PZA, PZC, PZD, PZG, PZN, PZT, PZZA, QABA, QADA, QADB, QAI, QARP, QAT, QBAK, QCLN, QCOM, QCRH, QD, QDEF, QDEL, QDF, QDIV, QDYN, QED, QEFA, QEMM, QEP, QES, QFIN, QGEN, QGRO, QGTA, QHC, QID, QINT, QIWI, QLC, QLD, QLS, QLTA, QLYS, QMN, QMOM, QNST, QQEW, QQQ, QQQE, QQQX, QQXT, QRFT, QRHC, QRTEA, QRTEB, QRVO, QSR, QSY, QTEC, QTNT, QTRH, QTRX, QTS, QTS-A, QTS-B, QTT, QTUM, QTWO, QUAD, QUAL, QUIK, QUMU, QUOT, QURE, QUS, QVAL, QVCD, QVM, QWLD, QYLD, R, RA, RAAX, RACE, RAD, RADA, RAIL, RALS, RAMP, RAND, RARE, RARX, RAVE, RAVI, RAVN, RBA, RBB, RBBN, RBC, RBCAA, RBCN, RBIN, RBKB, RBNC, RBS, RBUS, RBZ, RC, RCA, RCD, RCG, RCI, RCII, RCKT, RCKY, RCL, RCM, RCMT, RCON, RCP, RCS, RCUS, RDCM, RDFN, RDHL, RDI, RDIB, RDIV, RDN, RDNT, RDS.A, RDS.B, RDUS, RDVT, RDVY, RDWR, RDY, RE, REAL, RECN, REDU, REDV, REED, REEM, REET, REFA, REFR, REG, REGI, REGL, REGN, REI, REK, REKR, RELL, RELV, RELX, REM, REML, REMX, RENN, REPH, REPL, RES, RESI, RESN, RETA, RETL, RETO, REV, REVG, REW, REX, REXN, REXR, REXR-A, REXR-B, REZ, REZI, RF, RF-A, RF-B, RF-C, RFAP, RFCI, RFDA, RFDI, RFEM, RFEU, RFFC, RFG, RFI, RFIL, RFL, RFP, RFUN, RFV, RGA, RGCO, RGEN, RGI, RGLB, RGLD, RGLS, RGNX, RGR, RGS, RGT, RH, RHE, RHE-A, RHI, RHP, RHS, RIBT, RICK, RIDV, RIF, RIG, RIGL, RIGS, RILY, RILYG, RILYH, RILYI, RILYL, RILYO, RILYZ, RINF, RING, RIO, RIOT, RISE, RIV, RIVE, RJA, RJF, RJI, RJN, RJZ, RKDA, RL, RLGT, RLGY, RLH, RLI, RLJ, RLJ-A, RLM, RLY, RM, RMAX, RMBI, RMBL, RMBS, RMCF, RMD, RMED, RMG, RMG+, RMG=, RMI, RMNI, RMPL-, RMR, RMT, RMTI, RNDB, RNDM, RNDV, RNEM, RNET, RNG, RNGR, RNLC, RNMC, RNP, RNR, RNR-C, RNR-E, RNR-F, RNSC, RNST, RNWK, ROAD, ROAM, ROAN, ROBO, ROBT, ROCK, RODI, RODM, ROG, ROGS, ROIC, ROK, ROKT, ROKU, ROL, ROLL, ROM, ROOF, ROP, RORE, ROSE, ROSEU, ROSEW, ROST, ROUS, ROX, ROYT, RP, RPAI, RPAY, RPAYW, RPD, RPG, RPLA, RPLA+, RPLA=, RPM, RPT, RPT-D, RPUT, RPV, RQI, RRBI, RRC, RRD, RRGB, RRR, RRTS, RS, RSF, RSG, RSP, RST, RSX, RSXJ, RTEC, RTH, RTIX, RTL, RTLR, RTM, RTN, RTRX, RTTR, RTW, RUBI, RUBY, RUHN, RUN, RUSHA, RUSHB, RUSL, RUSS, RUTH, RVEN, RVI, RVLT, RVLV, RVNC, RVNU, RVP, RVRS, RVSB, RVT, RWCD, RWDC, RWDE, RWED, RWGE, RWGE+, RWGE=, RWGV, RWIU, RWJ, RWK, RWL, RWLK, RWLS, RWM, RWO, RWR, RWSL, RWT, RWUI, RWVG, RWW, RWX, RXD, RXI, RXL, RXN, RXN-A, RY, RY-T, RYAAY, RYAM, RYAM-A, RYB, RYE, RYF, RYH, RYI, RYJ, RYLD, RYN, RYT, RYTM, RYU, RYZZ, RZA, RZB, RZG, RZV, S, SA, SAA, SAB, SABR, SACH, SAEX, SAF, SAFE, SAFM, SAFT, SAGE, SAGG, SAH, SAIA, SAIC, SAIL, SAL, SALM, SALT, SAM, SAMA, SAMAU, SAMAW, SAMG, SAN, SAN-B, SAND, SANM, SANW, SAP, SAR, SASR, SATS, SAUC, SAVA, SAVE, SB, SB-C, SB-D, SBAC, SBB, SBBP, SBBX, SBCF, SBFG, SBFGP, SBGI, SBGL, SBH, SBI, SBIO, SBLK, SBLKZ, SBM, SBNA, SBNY, SBOW, SBPH, SBR, SBRA, SBS, SBSI, SBT, SBUX, SC, SCA, SCAP, SCC, SCCB, SCCO, SCD, SCE-B, SCE-C, SCE-D, SCE-E, SCE-G, SCE-H, SCE-J, SCE-K, SCE-L, SCHA, SCHB, SCHC, SCHD, SCHE, SCHF, SCHG, SCHH, SCHK, SCHL, SCHM, SCHN, SCHO, SCHP, SCHR, SCHV, SCHW, SCHW-C, SCHW-D, SCHX, SCHZ, SCI, SCID, SCIF, SCIJ, SCIU, SCIX, SCJ, SCKT, SCL, SCM, SCO, SCOM, SCON, SCOR, SCPE=, SCPH, SCPL, SCS, SCSC, SCVL, SCWX, SCX, SCYX, SCZ, SD, SDAG, SDCI, SDD, SDEM, SDG, SDGA, SDI, SDIV, SDLP, SDOG, SDOW, SDP, SDPI, SDR, SDRL, SDS, SDT, SDVY, SDY, SDYL, SE, SEA, SEAC, SEAS, SEB, SECO, SECT, SEDG, SEE, SEED, SEEL, SEF, SEIC, SEIX, SELB, SELF, SEM, SEMG, SENEA, SENEB, SENS, SERV, SES, SESN, SF, SF-A, SF-B, SFB, SFBC, SFBS, SFE, SFET, SFHY, SFIG, SFIX, SFL, SFLY, SFM, SFNC, SFST, SFUN, SFY, SFYF, SFYX, SG, SGA, SGB, SGBX, SGC, SGDJ, SGDM, SGEN, SGG, SGH, SGLB, SGLBW, SGMA, SGMO, SGMS, SGOC, SGOL, SGRP, SGRY, SGU, SH, SHAG, SHAK, SHBI, SHE, SHEN, SHG, SHI, SHIP, SHIPW, SHIPZ, SHLL, SHLL+, SHLL=, SHLO, SHLX, SHM, SHO, SHO-E, SHO-F, SHOO, SHOP, SHOS, SHSP, SHV, SHW, SHY, SHYD, SHYG, SHYL, SIBN, SIC, SID, SIEB, SIEN, SIF, SIFY, SIG, SIGA, SIGI, SIJ, SIL, SILC, SILJ, SILK, SILV, SIM, SIMO, SIMS, SINA, SINO, SINT, SIRI, SITC, SITC-A, SITC-J, SITC-K, SITE, SITO, SIVB, SIVR, SIX, SIZ, SIZE, SJB, SJI, SJIU, SJM, SJNK, SJR, SJT, SJW, SKF, SKIS, SKM, SKOR, SKT, SKX, SKY, SKYS, SKYW, SKYY, SLAB, SLB, SLCA, SLCT, SLDB, SLF, SLG, SLG-I, SLGG, SLGL, SLGN, SLIM, SLM, SLMBP, SLNO, SLNOW, SLP, SLQD, SLRC, SLS, SLT, SLTB*, SLV, SLVO, SLVP, SLX, SLY, SLYG, SLYV, SM, SMAR, SMB, SMBC, SMBK, SMCP, SMDD, SMDV, SMED, SMEZ, SMFG, SMG, SMH, SMHB, SMHD, SMHI, SMIN, SMIT, SMLF, SMLL, SMLP, SMLV, SMM, SMMCU, SMMD, SMMF, SMMT, SMMU, SMMV, SMN, SMOG, SMP, SMPL, SMRT, SMSI, SMTA, SMTC, SMTS, SMTX, SNA, SNAP, SNBR, SNCR, SND, SNDE, SNDR, SNDX, SNE, SNES, SNFCA, SNGX, SNGXW, SNH, SNHNI, SNHNL, SNLN, SNMP, SNN, SNNA, SNOA, SNOAW, SNP, SNPE, SNPS, SNR, SNSR, SNSS, SNV, SNV-D, SNV-E, SNX, SNY, SO, SOCL, SOGO, SOHO, SOHOB, SOHON, SOHOO, SOHU, SOI, SOIL, SOJA, SOJB, SOJC, SOL, SOLO, SOLOW, SOLY, SON, SONA, SONM, SONO, SOR, SORL, SOVB, SOXL, SOXS, SOXX, SOYB, SP, SPAB, SPAQ, SPAQ+, SPAQ=, SPAR, SPB, SPCB, SPDN, SPDV, SPDW, SPE, SPE-B, SPEM, SPEX, SPFF, SPFI, SPG, SPG-J, SPGI, SPGP, SPH, SPHB, SPHD, SPHQ, SPHS, SPI, SPIB, SPKE, SPKEP, SPLB, SPLG, SPLK, SPLP, SPLP-A, SPLV, SPMD, SPMO, SPMV, SPN, SPNE, SPNS, SPOK, SPOT, SPPI, SPPP, SPR, SPRO, SPRT, SPSB, SPSC, SPSM, SPTL, SPTM, SPTN, SPTS, SPUU, SPVM, SPVU, SPWH, SPWR, SPXB, SPXC, SPXE, SPXL, SPXN, SPXS, SPXT, SPXU, SPXV, SPXX, SPY, SPYB, SPYD, SPYG, SPYV, SPYX, SQ, SQBG, SQLV, SQM, SQNS, SQQQ, SR, SR-A, SRAX, SRC, SRC-A, SRCE, SRCI, SRCL, SRDX, SRE, SRE-A, SRE-B, SREA, SRET, SREV, SRF, SRG, SRG-A, SRI, SRL, SRLN, SRLP, SRNE, SRPT, SRRA, SRRK, SRS, SRT, SRTS, SRTSW, SRTY, SRV, SRVR, SSB, SSBI, SSD, SSFN, SSG, SSI, SSKN, SSL, SSNC, SSNT, SSO, SSP, SSPY, SSRM, SSTI, SSTK, SSW, SSW-D, SSW-E, SSW-G, SSW-H, SSW-I, SSWA, SSY, SSYS, ST, STAA, STAF, STAG, STAG-C, STAR, STAR-D, STAR-G, STAR-I, STAY, STBA, STC, STCN, STE, STFC, STG, STI, STI-A, STIM, STIP, STK, STKL, STKS, STL, STL-A, STLD, STM, STML, STMP, STN, STND, STNE, STNG, STNL, STNLU, STNLW, STOK, STON, STOR, STOT, STPP, STPZ, STRA, STRL, STRM, STRO, STRS, STRT, STT, STT-C, STT-D, STT-E, STT-G, STWD, STX, STXB, STZ, STZ.B, SU, SUB, SUI, SUM, SUMR, SUN, SUNS, SUNW, SUP, SUPN, SUPV, SURF, SUSA, SUSB, SUSC, SUSL, SUZ, SVA, SVBI, SVM, SVMK, SVRA, SVT, SVVC, SVXY, SWAN, SWAV, SWCH, SWI, SWIR, SWJ, SWK, SWKS, SWM, SWN, SWP, SWX, SWZ, SXC, SXI, SXT, SXTC, SY, SYBT, SYBX, SYE, SYF, SYG, SYK, SYKE, SYLD, SYMC, SYN, SYNA, SYNC, SYNH, SYNL, SYPR, SYRS, SYV, SYX, SYY, SZC, SZC^, SZK, SZNE, T, TA, TAC, TACO, TACOW, TACT, TAGS, TAIL, TAIT, TAK, TAL, TALO, TALO+, TAN, TANH, TANNI, TANNL, TANNZ, TAO, TAOP, TAP, TAP.A, TAPR, TARO, TAST, TAT, TATT, TAWK, TAXF, TAYD, TBB, TBBK, TBC, TBF, TBI, TBIO, TBK, TBLT, TBLTU, TBLTW, TBLU, TBND, TBNK, TBPH, TBT, TBX, TC, TCBI, TCBIL, TCBIP, TCBK, TCCO, TCDA, TCF, TCF-D, TCFC, TCGP, TCI, TCLD, TCMD, TCO, TCO-J, TCO-K, TCON, TCP, TCPC, TCRD, TCRR, TCRW, TCRZ, TCS, TCTL, TCX, TD, TDA, TDAC, TDACU, TDACW, TDC, TDE, TDF, TDG, TDI, TDIV, TDJ, TDOC, TDS, TDTF, TDTT, TDW, TDW+, TDW+A, TDW+B, TDY, TEAF, TEAM, TECD, TECH, TECK, TECL, TECS, TECTP, TEDU, TEF, TEI, TEL, TELL, TEN, TENB, TENX, TEO, TER, TERM, TERP, TESS, TEUM, TEVA, TEX, TFI, TFIV, TFLO, TFLT, TFSL, TFX, TG, TGA, TGB, TGC, TGE, TGEN, TGH, TGI, TGLS, TGNA, TGP, TGP-A, TGP-B, TGS, TGT, TGTX, TH, THC, THCAU, THCB, THCBU, THCBW, THCX, THD, THFF, THG, THGA, THM, THO, THOR, THQ, THR, THRM, THS, THW, THWWW, TIBR, TIBRU, TIBRW, TIF, TIGO, TIGR, TILE, TILT, TIP, TIPT, TIPX, TIPZ, TISI, TITN, TIVO, TJX, TK, TKAT, TKC, TKKS, TKKSR, TKKSU, TKKSW, TKR, TLC, TLDH, TLEH, TLF, TLGT, TLH, TLI, TLK, TLND, TLRA, TLRD, TLRY, TLSA, TLT, TLTD, TLTE, TLYS, TM, TMCX, TMCXU, TMCXW, TMDI, TMDX, TME, TMF, TMFC, TMHC, TMK, TMK-C, TMO, TMP, TMQ, TMSR, TMST, TMUS, TMV, TNA, TNAV, TNC, TNDM, TNET, TNK, TNP, TNP-B*, TNP-C, TNP-D, TNP-E, TNP-F, TNXP, TOCA, TOK, TOL, TOLZ, TOO, TOO-A, TOO-B, TOO-E, TOPS, TORC, TOT, TOTA, TOTAR, TOTAU, TOTAW, TOTL, TOUR, TOWN, TOWR, TPAY, TPB, TPC, TPCO, TPGH, TPGH+, TPGH=, TPH, TPHD, TPHS, TPIC, TPL, TPLC, TPOR, TPR, TPRE, TPTX, TPVG, TPVY, TPX, TPYP, TPZ, TQQQ, TR, TRC, TRCB, TRCH, TRCO, TREC, TREE, TREX, TRGP, TRHC, TRI, TRIB, TRIL, TRIP, TRK, TRMB, TRMD, TRMK, TRMT, TRN, TRND, TRNE, TRNE+, TRNE=, TRNO, TRNS, TRNX, TROV, TROW, TROX, TRP, TRPX, TRQ, TRS, TRST, TRT, TRTN, TRTN-A, TRTN-B, TRTX, TRTY, TRU, TRUE, TRUP, TRV, TRVG, TRVI, TRVN, TRWH, TRX, TRXC, TS, TSBK, TSC, TSCAP, TSCBP, TSCO, TSE, TSEM, TSG, TSI, TSLA, TSLF, TSLX, TSM, TSN, TSQ, TSRI, TSS, TST, TSU, TTAC, TTAI, TTC, TTD, TTEC, TTEK, TTGT, TTI, TTM, TTMI, TTNP, TTOO, TTP, TTPH, TTS, TTT, TTTN, TTWO, TU, TUES, TUFN, TUP, TUR, TURN, TUSA, TUSK, TUZ, TV, TVC, TVE, TVIX, TVTY, TW, TWAR, TWI, TWIN, TWLO, TWM, TWMC, TWN, TWNK, TWNKW, TWO, TWO-A, TWO-B, TWO-C, TWO-D, TWO-E, TWOU, TWST, TWTR, TX, TXMD, TXN, TXRH, TXT, TY, TY-, TYBS, TYD, TYG, TYHT, TYL, TYME, TYNS, TYO, TYPE, TZA, TZAC, TZACU, TZACW, TZOO, UA, UAA, UAE, UAG, UAL, UAMY, UAN, UAPR, UAUD, UAVS, UBA, UBCP, UBER, UBFO, UBG, UBIO, UBNK, UBNT, UBOH, UBOT, UBP, UBP-G, UBP-H, UBR, UBS, UBSI, UBT, UBX, UCBI, UCC, UCFC, UCHF, UCI, UCIB, UCO, UCOM, UCON, UCTT, UDN, UDOW, UDR, UE, UEC, UEIC, UEPS, UEUR, UEVM, UFAB, UFCS, UFI, UFO, UFPI, UFPT, UFS, UG, UGA, UGAZ, UGBP, UGE, UGI, UGL, UGLD, UGP, UHAL, UHS, UHT, UIHC, UIS, UITB, UIVM, UJAN, UJB, UJPY, UJUL, UJUN, UL, ULBI, ULBR, ULE, ULH, ULST, ULTA, ULVM, UMBF, UMC, UMDD, UMH, UMH-B, UMH-C, UMH-D, UMPQ, UMRX, UN, UNAM, UNB, UNF, UNFI, UNG, UNH, UNIT, UNL, UNM, UNMA, UNP, UNT, UNTY, UNVR, UOCT, UONE, UONEK, UPL, UPLD, UPRO, UPS, UPV, UPW, UPWK, UQM, URA, URBN, URE, URG, URGN, URI, UROV, URR, URTH, URTY, USA, USAC, USAI, USAK, USAP, USAS, USAT, USATP, USAU, USB, USB-A, USB-H, USB-M, USB-O, USB-P, USCI, USCR, USD, USDP, USDU, USDY, USEG, USEQ, USFD, USFR, USHG, USHY, USI, USIG, USIO, USL, USLB, USLM, USLV, USM, USMC, USMF, USMV, USNA, USO, USOD, USOI, USOU, USPH, USRT, USSG, UST, USTB, USV, USVM, USWS, USWSW, USX, UTES, UTF, UTG, UTHR, UTI, UTL, UTMD, UTRN, UTSI, UTSL, UTX, UUP, UUU, UUUU, UUUU+, UVE, UVSP, UVV, UVXY, UWM, UWT, UXI, UXIN, UYG, UYM, UZA, UZB, UZC, V, VAC, VALE, VALQ, VALU, VALX, VAM, VAMO, VAPO, VAR, VAW, VB, VBF, VBFC, VBIV, VBK, VBLT, VBND, VBR, VBTX, VC, VCEL, VCF, VCIF, VCIT, VCLT, VCNX, VCR, VCRA, VCSH, VCTR, VCV, VCYT, VDC, VDE, VEA, VEC, VECO, VEDL, VEEV, VEGA, VEGI, VEON, VER, VER-F, VERB, VERBW, VERI, VERU, VET, VETS, VEU, VFC, VFF, VFH, VFL, VFLQ, VFMF, VFMO, VFMV, VFQY, VFVA, VG, VGFO, VGI, VGIT, VGK, VGLT, VGM, VGR, VGSH, VGT, VGZ, VHC, VHI, VHT, VIA, VIAB, VIAV, VICI, VICL, VICR, VIDG, VIDI, VIG, VIGI, VIIX, VIOG, VIOO, VIOT, VIOV, VIPS, VIRC, VIRT, VIS, VISI, VISL, VIV, VIVE, VIVO, VIXM, VIXY, VJET, VKI, VKQ, VKTX, VKTXW, VLGEA, VLO, VLRS, VLRX, VLT, VLU, VLUE, VLY, VLYPO, VLYPP, VMBS, VMC, VMI, VMM, VMO, VMOT, VMW, VNCE, VNDA, VNE, VNET, VNLA, VNM, VNO, VNO-K, VNO-L, VNO-M, VNOM, VNQ, VNQI, VNRX, VNTR, VO, VOC, VOD, VOE, VONE, VONG, VONV, VOO, VOOG, VOOV, VOT, VOX, VOXX, VOYA, VOYA-B, VPC, VPG, VPL, VPU, VPV, VQT, VRA, VRAI, VRAY, VRCA, VREX, VRIG, VRML, VRNA, VRNS, VRNT, VRP, VRRM, VRS, VRSK, VRSN, VRTS, VRTSP, VRTU, VRTV, VRTX, VSAT, VSDA, VSEC, VSGX, VSH, VSI, VSL, VSLR, VSM, VSMV, VSS, VST, VST+A, VSTM, VSTO, VT, VTA, VTC, VTEB, VTGN, VTHR, VTI, VTIP, VTIQ, VTIQU, VTIQW, VTN, VTNR, VTR, VTSI, VTV, VTVT, VTWG, VTWO, VTWV, VUG, VUSE, VUZI, VV, VVI, VVPR, VVR, VVUS, VVV, VWO, VWOB, VXF, VXRT, VXUS, VXX, VXZ, VYGR, VYM, VYMI, VZ, W, WAAS, WAB, WABC, WAFD, WAFU, WAGE, WAIR, WAL, WALA, WANT, WASH, WAT, WATT, WB, WBA, WBAI, WBAL, WBC, WBIA, WBIB, WBIC, WBID, WBIE, WBIF, WBIG, WBII, WBIL, WBIT, WBIY, WBK, WBND, WBS, WBS-F, WBT, WCC, WCFB, WCG, WCHN, WCN, WD, WDAY, WDC, WDFC, WDIV, WDR, WDRW, WEA, WEAT, WEBK, WEC, WEI, WELL, WEN, WERN, WES, WETF, WEX, WEYS, WF, WFC, WFC-L, WFC-N, WFC-O, WFC-P, WFC-Q, WFC-R, WFC-T, WFC-V, WFC-W, WFC-X, WFC-Y, WFE-A, WFHY, WFIG, WGO, WH, WHD, WHF, WHFBZ, WHG, WHLM, WHLR, WHLRD, WHLRP, WHR, WIA, WIFI, WIL, WILC, WINA, WINC, WING, WINS, WIP, WIRE, WISA, WIT, WIW, WIX, WK, WKHS, WLDN, WLDR, WLFC, WLH, WLK, WLKP, WLL, WLTW, WM, WMB, WMC, WMGI, WMK, WMS, WMT, WNC, WNEB, WNS, WOMN, WOOD, WOR, WORK, WORX, WOW, WP, WPC, WPG, WPG-H, WPG-I, WPM, WPP, WPRT, WPS, WPX, WRB, WRB-B, WRB-C, WRB-D, WRB-E, WRE, WRI, WRK, WRLD, WRLS, WRLSR, WRLSU, WRLSW, WRN, WRTC, WSBC, WSBF, WSC, WSFS, WSM, WSO, WSO.B, WSR, WST, WSTG, WSTL, WTBA, WTER, WTFC, WTFCM, WTI, WTID, WTIU, WTM, WTMF, WTR, WTRE, WTREP, WTRH, WTRU, WTS, WTT, WTTR, WU, WUBA, WVE, WVFC, WVVI, WVVIP, WW, WWD, WWE, WWR, WWW, WY, WYDE, WYND, WYNN, WYY, X, XAN, XAN-C, XAR, XBI, XBIO, XBIT, XBUY, XCEM, XCOM, XDIV, XEC, XEL, XELA, XELB, XENE, XENT, XERS, XES, XFLT, XFOR, XHB, XHE, XHR, XHS, XIN, XITK, XLB, XLC, XLE, XLEY, XLF, XLG, XLI, XLK, XLNX, XLP, XLRE, XLRN, XLSR, XLSY, XLTY, XLU, XLUY, XLV, XLY, XME, XMHQ, XMLV, XMMO, XMPT, XMVM, XMX, XNCR, XNET, XNTK, XOG, XOM, XOMA, XON, XONE, XOP, XPER, XPH, XPL, XPO, XPP, XRAY, XRF, XRLV, XRT, XRX, XSD, XSHD, XSHQ, XSLV, XSMO, XSOE, XSPA, XSVM, XSW, XT, XTH, XTL, XTLB, XTN, XTNT, XVZ, XWEB, XXII, XYF, XYL, XYN, XYNPW, Y, YANG, YCBD, YCL, YCOM, YCS, YELP, YETI, YEXT, YGRN, YGTY, YGYI, YI, YIN, YINN, YJ, YLCO, YLD, YLDE, YMAB, YMLI, YMLP, YNDX, YOGA, YOLO, YORW, YPF, YRCW, YRD, YRIV, YTEN, YTRA, YUM, YUMA, YUMC, YVR, YXI, YY, YYY, Z, ZAGG, ZAYO, ZAZZT, ZB-A, ZB-G, ZB-H, ZBH, ZBIO, ZBK, ZBRA, ZBZX, ZBZZT, ZCAN, ZCZZT, ZDEU, ZDGE, ZEAL, ZEN, ZEUS, ZEXIT, ZF, ZFGN, ZG, ZGBR, ZGNX, ZHOK, ZIEXT, ZIG, ZION, ZIONW, ZIOP, ZIV, ZIXI, ZJPN, ZJZZT, ZKIN, ZLAB, ZM, ZMLP, ZN, ZNGA, ZNH, ZNWAA, ZOM, ZROZ, ZS, ZSAN, ZSL, ZTEST, ZTO, ZTR, ZTS, ZUMZ, ZUO, ZVO, ZVV, ZVVV, ZVZZT, ZWZZT, ZXIET, ZXZZT, ZYME, ZYNE, ZYXI, BTCUSDT, EOSUSDT, ETHUSDT, BNBUSDT, ONTUSDT, BCCUSDT, ADAUSDT, XRPUSDT, TUSDUSDT, TRXUSDT, LTCUSDT, ETCUSDT, IOTAUSDT, ICXUSDT, NEOUSDT, VENUSDT, XLMUSDT, QTUMUSDT, default */
/***/ (function(module) {

module.exports = {"A":"Agilent Technologies Inc.","AA":"Alcoa Corporation","AAAU":"Perth Mint Physical Gold","AABA":"Altaba Inc.","AAC":"AAC Holdings Inc.","AADR":"AdvisorShares Dorsey Wright ADR","AAL":"American Airlines Group Inc.","AAMC":"Altisource Asset Management Corp Com","AAME":"Atlantic American Corporation","AAN":"Aaron's Inc.","AAOI":"Applied Optoelectronics Inc.","AAON":"AAON Inc.","AAP":"Advance Auto Parts Inc W/I","AAPL":"Apple Inc.","AAT":"American Assets Trust Inc.","AAU":"Almaden Minerals Ltd.","AAWW":"Atlas Air Worldwide Holdings","AAXJ":"iShares MSCI All Country Asia ex Japan Index Fund","AAXN":"Axon Enterprise Inc.","AB":"AllianceBernstein Holding L.P. Units","ABB":"ABB Ltd","ABBV":"AbbVie Inc.","ABC":"AmerisourceBergen Corporation","ABCB":"Ameris Bancorp","ABDC":"Alcentra Capital Corp.","ABEO":"Abeona Therapeutics Inc.","ABEOW":"","ABEV":"Ambev S.A. American Depositary Shares (Each representing 1)","ABG":"Asbury Automotive Group Inc","ABIL":"Ability Inc.","ABIO":"ARCA biopharma Inc.","ABM":"ABM Industries Incorporated","ABMD":"ABIOMED Inc.","ABR":"Arbor Realty Trust","ABR-A":"Arbor Realty Trust Preferred Series A","ABR-B":"Arbor Realty Trust Cumulative Redeemable Preferred Series B","ABR-C":"Arbor Realty Trust Cumulative Redeemable Preferred Series C","ABT":"Abbott Laboratories","ABTX":"Allegiance Bancshares Inc.","ABUS":"Arbutus Biopharma Corporation","AC":"Associated Capital Group Inc.","ACA":"Arcosa Inc.","ACAD":"ACADIA Pharmaceuticals Inc.","ACAM":"Acamar Partners Acquisition Corp.","ACAMU":"Acamar Partners Acquisition Corp. Units","ACAMW":"Acamar Partners Acquisition Corp. Warrant","ACB":"Aurora Cannabis Inc.","ACBI":"Atlantic Capital Bancshares Inc.","ACC":"American Campus Communities Inc","ACCO":"Acco Brands Corporation","ACER":"Acer Therapeutics Inc.","ACES":"ALPS Clean Energy","ACGL":"Arch Capital Group Ltd.","ACGLO":"Arch Capital Group Ltd. Depositary Shares Each Representing 1/1000th Interest in a Share of5.45% Non-Cumulative Preferred Shares Series F","ACGLP":"Arch Capital Group Ltd. Depositary Shares Representing Interest in 5.25% Non-Cumulative Preferred Series E Shrs","ACH":"Aluminum Corporation of China Limited American Depositary Shares","ACHC":"Acadia Healthcare Company Inc.","ACHN":"Achillion Pharmaceuticals Inc.","ACHV":"Achieve Life Sciences Inc.","ACIA":"Acacia Communications Inc.","ACIM":"SPDR MSCI ACWI IMI","ACIO":"ETF Series Solutions Aptus Collared Income Opportunity","ACIU":"AC Immune SA","ACIW":"ACI Worldwide Inc.","ACLS":"Axcelis Technologies Inc.","ACM":"AECOM","ACMR":"ACM Research Inc.","ACN":"Accenture plc Class A (Ireland)","ACNB":"ACNB Corporation","ACOR":"Acorda Therapeutics Inc.","ACP":"Aberdeen Income Credit Strategies Fund","ACRE":"Ares Commercial Real Estate Corporation","ACRS":"Aclaris Therapeutics Inc.","ACRX":"AcelRx Pharmaceuticals Inc.","ACSG":"Xtrackers MSCI ACWI ex USA ESG Leaders Equity","ACSI":"American Customer Satisfaction","ACST":"Acasti Pharma Inc.","ACT":"AdvisorShares Vice ETF","ACTG":"Acacia Research Corporation","ACTT":"Act II Global Acquisition Corp.","ACTTU":"Act II Global Acquisition Corp. Unit","ACTTW":"Act II Global Acquisition Corp. Warrant","ACU":"Acme United Corporation.","ACV":"AllianzGI Diversified Income & Convertible Fund of Beneficial Interest","ACWF":"iShares Edge MSCI Multifactor Global","ACWI":"iShares MSCI ACWI Index Fund","ACWV":"iShares Edge MSCI Min Vol Global","ACWX":"iShares MSCI ACWI Ex US Index Fund","ACY":"AeroCentury Corp.","ADAP":"Adaptimmune Therapeutics plc","ADBE":"Adobe Inc.","ADC":"Agree Realty Corporation","ADES":"Advanced Emissions Solutions Inc.","ADI":"Analog Devices Inc.","ADIL":"Adial Pharmaceuticals Inc","ADILW":"Adial Pharmaceuticals Inc Warrant","ADM":"Archer-Daniels-Midland Company","ADMA":"ADMA Biologics Inc","ADMP":"Adamis Pharmaceuticals Corporation","ADMS":"Adamas Pharmaceuticals Inc.","ADNT":"Adient plc","ADOM":"ADOMANI Inc.","ADP":"Automatic Data Processing Inc.","ADPT":"Adaptive Biotechnologies Corporation","ADRA":"Invesco BLDRS Asia 50 ADR Index Fund","ADRD":"Invesco BLDRS Developed Markets 100 ADR Index Fund","ADRE":"Invesco BLDRS Emerging Markets 50 ADR Index Fund","ADRO":"Aduro Biotech Inc.","ADRU":"Invesco BLDRS Europe Select ADR Index Fund","ADS":"Alliance Data Systems Corporation","ADSK":"Autodesk Inc.","ADSW":"Advanced Disposal Services Inc.","ADT":"ADT Inc.","ADTN":"ADTRAN Inc.","ADUS":"Addus HomeCare Corporation","ADVM":"Adverum Biotechnologies Inc.","ADX":"Adams Diversified Equity Fund Inc.","ADXS":"Advaxis Inc.","AE":"Adams Resources & Energy Inc.","AEB":"AEGON N.V. Perp. Cap. Secs. Floating Rate (Netherlands)","AEE":"Ameren Corporation","AEF":"Aberdeen Emerging Markets Equity Income Fund Inc.","AEG":"AEGON N.V.","AEGN":"Aegion Corp","AEH":"AEGON N.V. Perp. Cap Secs.","AEHR":"Aehr Test Systems","AEIS":"Advanced Energy Industries Inc.","AEL":"American Equity Investment Life Holding Company","AEM":"Agnico Eagle Mines Limited","AEMD":"Aethlon Medical Inc.","AEO":"American Eagle Outfitters Inc.","AEP":"American Electric Power Company Inc.","AEP-B":"American Electric Power Company Inc. Corporate Unit","AER":"AerCap Holdings N.V.","AERI":"Aerie Pharmaceuticals Inc.","AES":"The AES Corporation","AETI":"American Electric Technologies Inc.","AEY":"ADDvantage Technologies Group Inc.","AEYE":"AudioEye Inc.","AEZS":"Aeterna Zentaris Inc.","AFB":"AllianceBernstein National Municipal Income Fund Inc","AFC":"Allied Capital Corporation 6.875% Notes due April 15 2047","AFG":"American Financial Group Inc.","AFGB":"American Financial Group Inc. 5.875% Subordinated Debentures due 2059","AFGE":"","AFGH":"","AFH":"Atlas Financial Holdings Inc.","AFHBL":"Atlas Financial Holdings Inc. 6.625% Senior Unsecured Notes Due 2022","AFI":"Armstrong Flooring Inc.","AFIF":"Anfield Universal Fixed Income","AFIN":"American Finance Trust Inc.","AFINP":"American Finance Trust Inc. 7.50% Series A Cumulative Redeemable Perpetual Preferred Stock","AFK":"VanEck Vectors-Africa Index","AFL":"AFLAC Incorporated","AFMD":"Affimed N.V.","AFT":"Apollo Senior Floating Rate Fund Inc.","AFTY":"CSOP FTSE China A50","AG":"First Majestic Silver Corp. (Canada)","AGBAU":"AGBA Acquisition Limited Unit","AGCO":"AGCO Corporation","AGD":"Aberdeen Global Dynamic Dividend Fund","AGE":"AgeX Therapeutics Inc.","AGEN":"Agenus Inc.","AGFS":"AgroFresh Solutions Inc.","AGFSW":"AgroFresh Solutions Inc. Warrants","AGG":"iShares Core U.S. Aggregate Bond","AGGE":"IQ Enhanced Core Bond U.S.","AGGP":"IQ Enhanced Core Plus Bond U.S.","AGGY":"WisdomTree Yield Enhanced U.S. Aggregate Bond Fund","AGI":"Alamos Gold Inc. Class A","AGIO":"Agios Pharmaceuticals Inc.","AGLE":"Aeglea BioTherapeutics Inc.","AGM":"Federal Agricultural Mortgage Corporation","AGM-A":"Federal Agricultural Mortgage Corporation 5.875% Non-CUmulative Preferred Stock Series A","AGM-C":"Federal Agricultural Mortgage Corporation Preferred Series C Fixed to Fltg","AGM-D":"Federal Agricultural Mortgage Corporation 5.700% Non-Cumulative Preferred Stock Series D","AGM.A":"Federal Agricultural Mortgage Corporation","AGMH":"AGM Group Holdings Inc.","AGN":"Allergan plc","AGNC":"AGNC Investment Corp.","AGNCB":"AGNC Investment Corp. Depositary Shares representing 1/1000th Series B Preferred Stock","AGNCM":"AGNC Investment Corp. Depositary Shares rep 6.875% Series D Fixed-to-Floating Cumulative Redeemable Preferred Stock","AGNCN":"AGNC Investment Corp. Depositary Shares Each Representing a 1/1000th Interest in a Share of 7.00% Series C Fixed-To-Floating Rate Cumulative Redeemable Preferre","AGND":"WisdomTree Barclays U.S. Aggregate Bond Negative D","AGO":"Assured Guaranty Ltd.","AGO-B":"Assured Guaranty Ltd.","AGO-E":"Assured Guaranty Ltd.","AGO-F":"Assured Guaranty Ltd.","AGQ":"ProShares Ultra Silver","AGR":"Avangrid Inc.","AGRO":"Adecoagro S.A.","AGRX":"Agile Therapeutics Inc.","AGS":"PlayAGS Inc.","AGT":"iShares MSCI Argentina and Global Exposure","AGTC":"Applied Genetic Technologies Corporation","AGX":"Argan Inc.","AGYS":"Agilysys Inc.","AGZ":"iShares Agency Bond","AGZD":"WisdomTree Barclays U.S. Aggregate Bond Zero Durat","AHC":"A.H. Belo Corporation (TX)","AHH":"Armada Hoffler Properties Inc.","AHH-A":"Armada Hoffler Properties Inc. 6.75% Series A Cumulative Redeemable Perpetual Preferred Stock","AHL-C":"Aspen Insurance Holdings Limited 5.95% Fixed-to-Floating Rate Perpetual Non-Cumulative Preference Shares","AHL-D":"Aspen Insurance Holdings Limited 5.625% Perpetual Non-Cumulative Preference Shares","AHPI":"Allied Healthcare Products Inc.","AHT":"Ashford Hospitality Trust Inc","AHT-D":"Ashford Hospitality Trust Inc 8.45% Series D Cumulative Preferred Stock","AHT-F":"Ashford Hospitality Trust Inc 7.375% Series F Cumulative Preferred Stock","AHT-G":"Ashford Hospitality Trust Inc 7.375% Series G Cumulative Preferred Stock","AHT-H":"Ashford Hospitality Trust Inc 7.50% Series H Cumulative Preferred Stock","AHT-I":"Ashford Hospitality Trust Inc 7.50% Series I Cumulative Preferred Stock","AI":"Arlington Asset Investment Corp Class A (new)","AI-B":"Arlington Asset Investment Corp 7.00% Series B Cumulative Perpetual Redeemable Preferred Stock","AI-C":"Arlington Asset Investment Corp 8.250% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","AIA":"iShares Asia 50 ETF","AIC":"","AIEQ":"AI Powered Equity","AIF":"Apollo Tactical Income Fund Inc.","AIG":"American International Group Inc.","AIG+":"American International Group Inc. Warrant expiring January 19 2021","AIG-A":"American International Group Inc. Depositary Shares Series A","AIHS":"Senmiao Technology Limited","AIIQ":"AI Powered International Equity","AIMC":"Altra Industrial Motion Corp.","AIMT":"Aimmune Therapeutics Inc.","AIN":"Albany International Corporation","AINC":"Ashford Inc. (Holding Company)","AINV":"Apollo Investment Corporation","AIQ":"Global X Future Analytics Tech ETF","AIR":"AAR Corp.","AIRG":"Airgain Inc.","AIRI":"Air Industries Group","AIRR":"First Trust RBA American Industrial Renaissance ET","AIRT":"Air T Inc.","AIRTP":"Air T Inc. Air T Funding Trust Preferred Securities","AIRTW":"Air T Inc. Air T Funding Warrants to Purchase Trust Preferred","AIT":"Applied Industrial Technologies Inc.","AITB":"Beyond Air Inc.","AIV":"Apartment Investment and Management Company","AIW":"Arlington Asset Investment Corp 6.625% Notes due 2023","AIY":"Apollo Investment Corporation 6.875% Senior Notes due 2043","AIZ":"Assurant Inc.","AIZP":"Assurant Inc. 6.50% Series D Mandatory Convertible Preferred Stock $1.00 par value","AJG":"Arthur J. Gallagher & Co.","AJRD":"Aerojet Rocketdyne Holdings Inc.","AJX":"Great Ajax Corp.","AJXA":"Great Ajax Corp. 7.25% Convertible Senior Notes due 2024","AKAM":"Akamai Technologies Inc.","AKBA":"Akebia Therapeutics Inc.","AKCA":"Akcea Therapeutics Inc.","AKER":"Akers Biosciences Inc.","AKG":"Asanko Gold Inc.","AKO.A":"Embotelladora Andina S.A.","AKO.B":"Embotelladora Andina S.A.","AKR":"Acadia Realty Trust","AKRO":"Akero Therapeutics Inc.","AKRX":"Akorn Inc.","AKS":"AK Steel Holding Corporation","AKTS":"Akoustis Technologies Inc.","AKTX":"Akari Therapeutics Plc","AL":"Air Lease Corporation Class A","AL-A":"Air Lease Corporation 6.150% Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series A","ALAC":"Alberton Acquisition Corporation","ALACR":"Alberton Acquisition Corporation Rights","ALACU":"Alberton Acquisition Corporation Unit","ALACW":"Alberton Acquisition Corporation Warrant","ALB":"Albemarle Corporation","ALBO":"Albireo Pharma Inc.","ALC":"Alcon Inc.","ALCO":"Alico Inc.","ALDR":"Alder BioPharmaceuticals Inc.","ALDX":"Aldeyra Therapeutics Inc.","ALE":"Allete Inc.","ALEC":"Alector Inc.","ALEX":"Alexander & Baldwin Inc. REIT Holding Company","ALFA":"AlphaClone Alternative Alpha","ALG":"Alamo Group Inc.","ALGN":"Align Technology Inc.","ALGR":"Allegro Merger Corp.","ALGRR":"Allegro Merger Corp. Right","ALGRU":"Allegro Merger Corp. Unit","ALGRW":"Allegro Merger Corp. Warrant","ALGT":"Allegiant Travel Company","ALIM":"Alimera Sciences Inc.","ALJJ":"ALJ Regional Holdings Inc.","ALK":"Alaska Air Group Inc.","ALKS":"Alkermes plc","ALL":"Allstate Corporation (The)","ALL-A":"Allstate Corporation (The) Dep Shs Repstg 1/1000th Perp Pfd Ser A","ALL-B":"Allstate Corporation (The) 5.100% Fixed-to-Floating Rate Subordinated Debentures due 2053","ALL-D":"The Allstate Corporation Leopards Each Representing A 1/1000th Interest In A Share Of Fixed Rate Noncumulative Perpetual Preferred Stock Series D","ALL-E":"Allstate Corporation Depositary Shares Series E","ALL-F":"Allstate Corporation (The) Leopards Dep Shares Representing 1/1000th Perp Pfd","ALL-G":"Allstate Corporation (The) Depositary Shares Series G","ALLE":"Allegion plc","ALLK":"Allakos Inc.","ALLO":"Allogene Therapeutics Inc.","ALLT":"Allot Ltd.","ALLY":"Ally Financial Inc.","ALLY-A":"GMAC Capital Trust I Fixed Rate Floating Rate Trust Preferred Securities Series 2","ALNA":"Allena Pharmaceuticals Inc.","ALNY":"Alnylam Pharmaceuticals Inc.","ALO":"Alio Gold Inc. (Canada)","ALOT":"AstroNova Inc.","ALP-Q":"Alabama Power Company 5.00% Class A Preferred Stock Cumulative Par Value $1 Per Share (Stated Capital $25 Per Share)","ALPN":"Alpine Immune Sciences Inc.","ALRM":"Alarm.com Holdings Inc.","ALRN":"Aileron Therapeutics Inc.","ALSK":"Alaska Communications Systems Group Inc.","ALSN":"Allison Transmission Holdings Inc.","ALT":"Altimmune Inc.","ALTM":"Altus Midstream Company","ALTR":"Altair Engineering Inc.","ALTS":"ProShares Morningstar Alternatives Solution","ALTY":"Global X SuperDividend Alternatives ETF","ALV":"Autoliv Inc.","ALX":"Alexander's Inc.","ALXN":"Alexion Pharmaceuticals Inc.","ALYA":"Alithya Group inc.","AM":"Antero Midstream Corporation","AMAG":"AMAG Pharmaceuticals Inc.","AMAL":"Amalgamated Bank","AMAT":"Applied Materials Inc.","AMBA":"Ambarella Inc.","AMBC":"Ambac Financial Group Inc.","AMBCW":"Ambac Financial Group Inc. Warrants","AMBO":"Ambow Education Holding Ltd. American Depository Shares each representing two Class A","AMC":"AMC Entertainment Holdings Inc. Class A","AMCA":"iShares Russell 1000 Pure U.S. Revenue ETF","AMCI":"AMCI Acquisition Corp.","AMCIU":"AMCI Acquisition Corp. Unit","AMCIW":"AMCI Acquisition Corp. Warrant","AMCR":"Amcor plc","AMCX":"AMC Networks Inc.","AMD":"Advanced Micro Devices Inc.","AME":"AMETEK Inc.","AMED":"Amedisys Inc","AMEH":"Apollo Medical Holdings Inc.","AMG":"Affiliated Managers Group Inc.","AMGN":"Amgen Inc.","AMH":"American Homes 4 Rent of Beneficial Interest","AMH-D":"American Homes 4 Rent 6.5% Series D Cumulative Perpetual Preferred Shares of Beneficial Interest","AMH-E":"American Homes 4 Rent 6.35% Series E Cumulative Redeemable Perpetual Preferred Shares of Beneficial Interest","AMH-F":"American Homes 4 Rent 5.875% Series F Cumulative Redeemable Perpetual Preferred Shares","AMH-G":"American Homes 4 Rent Series G cumulative redeemable perpetual preferred shares of beneficial interest","AMH-H":"American Homes 4 Rent Series H cumulative redeemable perpetual Preferred Shares of Beneficial Interest","AMID":"American Midstream Partners LP representing Limited Partner Interests","AMJ":"JPMorgan Chase Capital XVI JP Morgan Alerian MLP ETN","AMJL":"Credit Suisse X-Links Monthly Pay 2xLeveraged Alerian MLP Index Exchange Traded Notes due May 16 2036","AMKR":"Amkor Technology Inc.","AMLP":"Alerian MLP","AMN":"AMN Healthcare Services Inc","AMNB":"American National Bankshares Inc.","AMOM":"QRAFT AI-Enhanced U.S. Large Cap Momentum","AMOT":"Allied Motion Technologies Inc.","AMOV":"America Movil S.A.B. de C.V. Class An Depositary Shares","AMP":"Ameriprise Financial Inc.","AMPE":"Ampio Pharmaceuticals Inc.","AMPH":"Amphastar Pharmaceuticals Inc.","AMR":"Alta Mesa Resources Inc.","AMRB":"American River Bankshares","AMRC":"Ameresco Inc. Class A","AMRH":"Ameri Holdings Inc.","AMRHW":"Ameri Holdings Inc. Warrant","AMRK":"A-Mark Precious Metals Inc.","AMRN":"Amarin Corporation plc","AMRS":"Amyris Inc.","AMRWW":"Alta Mesa Resources Inc. Warrant","AMRX":"Amneal Pharmaceuticals Inc. Class A","AMS":"American Shared Hospital Services","AMSC":"American Superconductor Corporation","AMSF":"AMERISAFE Inc.","AMSWA":"American Software Inc. Class A Common Stock","AMT":"American Tower Corporation (REIT)","AMTB":"Amerant Bancorp Inc.","AMTBB":"Amerant Bancorp Inc. Class B Common Stock","AMTD":"TD Ameritrade Holding Corporation","AMTX":"Aemetis Inc","AMU":"ETRACS Alerian MLP Index ETN","AMUB":"ETRACS Alerian MLP Index ETN Series B due July 18 2042","AMWD":"American Woodmark Corporation","AMX":"America Movil S.A.B. de C.V.n Depository Receipt Series L","AMZA":"InfraCap MLP","AMZN":"Amazon.com Inc.","AN":"AutoNation Inc.","ANAB":"AnaptysBio Inc.","ANAT":"American National Insurance Company","ANCN":"Anchiano Therapeutics Ltd.","ANDA":"Andina Acquisition Corp. III","ANDAR":"Andina Acquisition Corp. III Right","ANDAU":"Andina Acquisition Corp. III Unit","ANDAW":"Andina Acquisition Corp. III Warrant","ANDE":"The Andersons Inc.","ANDX":"Andeavor Logistics LP representing Limited Partner Interests","ANET":"Arista Networks Inc.","ANF":"Abercrombie & Fitch Company","ANFI":"Amira Nature Foods Ltd","ANGI":"ANGI Homeservices Inc.","ANGL":"VanEck Vectors Fallen Angel High Yield Bond","ANGO":"AngioDynamics Inc.","ANH":"Anworth Mortgage Asset Corporation","ANH-A":"Anworth Mortgage Asset Corporation Series A Preferred Stock","ANH-B":"Anworth Mortgage Asset Corporation Preferred Stock Series B 6.25%","ANH-C":"Anworth Mortgage Asset Corporation 7.625% Series C Cumulative Redeemable Preferred Stock","ANIK":"Anika Therapeutics Inc.","ANIP":"ANI Pharmaceuticals Inc.","ANIX":"Anixa Biosciences Inc.","ANSS":"ANSYS Inc.","ANTE":"AirNet Technology Inc.","ANTM":"Anthem Inc.","ANY":"Sphere 3D Corp.","AOA":"iShares Core Aggressive Allocation","AOBC":"American Outdoor Brands Corporation","AOD":"Aberdeen Total Dynamic Dividend Fund","AOIL":"Aberdeen Standard Bloomberg WTI Crude Oil Strategy K-1 Free","AOK":"iShares Core Conservative Allocation","AOM":"iShares Core Moderate Allocation","AON":"Aon plc Class A (UK)","AOR":"iShares Core Growth Allocation","AOS":"A.O. Smith Corporation","AOSL":"Alpha and Omega Semiconductor Limited","AP":"Ampco-Pittsburgh Corporation","APA":"Apache Corporation","APAM":"Artisan Partners Asset Management Inc. Class A","APC":"Anadarko Petroleum Corporation","APD":"Air Products and Chemicals Inc.","APDN":"Applied DNA Sciences Inc","APDNW":"","APEI":"American Public Education Inc.","APEN":"Apollo Endosurgery Inc.","APEX":"Apex Global Brands Inc.","APH":"Amphenol Corporation","APHA":"Aphria Inc.","APLE":"Apple Hospitality REIT Inc.","APLS":"Apellis Pharmaceuticals Inc.","APLT":"Applied Therapeutics Inc.","APM":"Aptorum Group Limited","APO":"Apollo Global Management LLC Class A Representing Class A Limitied Liability Company Interests","APO-A":"Apollo Global Management LLC 6.375% Series A Preferred Shares","APO-B":"Apollo Global Management LLC 6.375% Series B Preferred Shares","APOG":"Apogee Enterprises Inc.","APOP":"Cellect Biotechnology Ltd.","APOPW":"Cellect Biotechnology Ltd. Warrants to Purchase ADR (1 WT and $7.50 to purchase 1 ADS)","APPF":"AppFolio Inc.","APPN":"Appian Corporation","APPS":"Digital Turbine Inc.","APRN":"Blue Apron Holdings Inc. Class A","APT":"Alpha Pro Tech Ltd.","APTO":"Aptose Biosciences Inc.","APTS":"Preferred Apartment Communities Inc.","APTV":"Aptiv PLC","APTX":"Aptinyx Inc.","APU":"AmeriGas Partners L.P.","APVO":"Aptevo Therapeutics Inc.","APWC":"Asia Pacific Wire & Cable Corporation Limited","APY":"Apergy Corporation","APYX":"Apyx Medical Corporation","AQ":"Aquantia Corp.","AQB":"AquaBounty Technologies Inc.","AQMS":"Aqua Metals Inc.","AQN":"Algonquin Power & Utilities Corp.","AQNA":"","AQNB":"Algonquin Power & Utilities Corp. 6.20% Fixed-to-Floating Subordinated Notes Series 2019-A due July 1 2079","AQST":"Aquestive Therapeutics Inc.","AQUA":"Evoqua Water Technologies Corp.","AQXP":"Aquinox Pharmaceuticals Inc.","AR":"Antero Resources Corporation","ARA":"American Renal Associates Holdings Inc","ARAV":"Aravive Inc.","ARAY":"Accuray Incorporated","ARC":"ARC Document Solutions Inc.","ARCB":"ArcBest Corporation","ARCC":"Ares Capital Corporation","ARCE":"Arco Platform Limited","ARCH":"Arch Coal Inc. Class A","ARCI":"Appliance Recycling Centers of America Inc.","ARCM":"Arrow Reserve Capital Management","ARCO":"Arcos Dorados Holdings Inc. Class A Shares","ARCT":"Arcturus Therapeutics Holdings Inc.","ARCW":"ARC Group Worldwide Inc.","ARD":"Ardagh Group S.A.","ARDC":"Ares Dynamic Credit Allocation Fund Inc.","ARDS":"Aridis Pharmaceuticals Inc.","ARDX":"Ardelyx Inc.","ARE":"Alexandria Real Estate Equities Inc.","ARE-D":"Alexandria Real Estate Equities Inc. 7.00% Series D Cumulative Convertible Preferred Stock","AREC":"American Resources Corporation","ARES":"Ares Management Corporation Class A","ARES-A":"Ares Management Corporation 7.00% Series A Preferred Stock","AREX":"Approach Resources Inc.","ARGD":"Argo Group International Holdings Ltd. 6.5% Senior Notes Due 2042","ARGO":"Argo Group International Holdings Ltd.","ARGT":"Global X MSCI Argentina","ARGX":"argenx SE","ARI":"Apollo Commercial Real Estate Finance Inc","ARKF":"ARK Fintech Innovation","ARKG":"ARK Genomic Revolution","ARKK":"ARK Innovation","ARKQ":"ARK Industrial Innovation","ARKR":"Ark Restaurants Corp.","ARKW":"ARK Web x.0","ARL":"American Realty Investors Inc.","ARLO":"Arlo Technologies Inc.","ARLP":"Alliance Resource Partners L.P.","ARMK":"Aramark","ARMP":"Armata Pharmaceuticals Inc.","ARNA":"Arena Pharmaceuticals Inc.","ARNC":"Arconic Inc.","ARNC-":"","AROC":"Archrock Inc.","AROW":"Arrow Financial Corporation","ARPO":"Aerpio Pharmaceuticals Inc.","ARQL":"ArQule Inc.","ARR":"ARMOUR Residential REIT Inc.","ARR-A*":"Armour Residential REIT INC Preferred Series A","ARR-B":"ARMOUR Residential REIT Inc. Preferred Series B","ARRY":"Array BioPharma Inc.","ARTL":"Artelo Biosciences Inc.","ARTLW":"Artelo Biosciences Inc. Warrant","ARTNA":"Artesian Resources Corporation Class A Non-Voting Common Stock","ARTW":"Art's-Way Manufacturing Co. Inc.","ARTX":"Arotech Corporation","ARVN":"Arvinas Inc.","ARW":"Arrow Electronics Inc.","ARWR":"Arrowhead Pharmaceuticals Inc.","ARYA":"ARYA Sciences Acquisition Corp.","ARYAU":"ARYA Sciences Acquisition Corp. Unit","ARYAW":"ARYA Sciences Acquisition Corp. Warrant","ASA":"ASA Gold and Precious Metals Limited","ASB":"Associated Banc-Corp","ASB-C":"Associated Banc-Corp Depositary shares Series C","ASB-D":"Associated Banc-Corp Depositary Shares Series D","ASB-E":"Associated Banc-Corp Depositary Shares Series E","ASC":"Ardmore Shipping Corporation","ASEA":"Global X FTSE Southeast Asia","ASET":"FlexShares Real Assets Allocation Index Fund","ASFI":"Asta Funding Inc.","ASG":"Liberty All-Star Growth Fund Inc.","ASGN":"ASGN Incorporated","ASH":"Ashland Global Holdings Inc.","ASHR":"Xtrackers Harvest CSI 300 China A-Shares","ASHS":"Xtrackers Harvest CSI 500 China A-Shares Small Cap","ASHX":"Xtrackers MSCI China A Inclusion Equity","ASIX":"AdvanSix Inc.","ASLN":"ASLAN Pharmaceuticals Limited","ASM":"Avino Silver & Gold Mines Ltd. (Canada)","ASMB":"Assembly Biosciences Inc.","ASML":"ASML Holding N.V.","ASNA":"Ascena Retail Group Inc.","ASND":"Ascendis Pharma A/S","ASPN":"Aspen Aerogels Inc.","ASPS":"Altisource Portfolio Solutions S.A.","ASPU":"Aspen Group Inc.","ASR":"Grupo Aeroportuario del Sureste S.A. de C.V.","ASRT":"Assertio Therapeutics Inc.","ASRV":"AmeriServ Financial Inc.","ASRVP":"AmeriServ Financial Inc. AmeriServ Financial Trust I","ASTC":"Astrotech Corporation","ASTE":"Astec Industries Inc.","ASUR":"Asure Software Inc","ASV":"ASV Holdings Inc.","ASX":"ASE Technology Holding Co. Ltd. American Depositary Shares (each representing Two)","ASYS":"Amtech Systems Inc.","AT":"Atlantic Power Corporation (Canada)","ATAI":"ATA Inc.","ATAX":"America First Multifamily Investors L.P.","ATEC":"Alphatec Holdings Inc.","ATEN":"A10 Networks Inc.","ATEX":"pdvWireless Inc.","ATGE":"Adtalem Global Education Inc.","ATH":"Athene Holding Ltd. Class A","ATH-A":"Athene Holding Ltd. Depositary Shares Series A","ATHE":"Alterity Therapeutics Limited","ATHM":"Autohome Inc. American Depositary Shares each representing one class A.","ATHX":"Athersys Inc.","ATI":"Allegheny Technologies Incorporated","ATIF":"ATIF Holdings Limited","ATIS":"Attis Industries Inc.","ATISW":"Attis Industries Inc. Warrants","ATKR":"Atkore International Group Inc.","ATLC":"Atlanticus Holdings Corporation","ATLO":"Ames National Corporation","ATMP":"Barclays ETN Plus Select MLP","ATNI":"ATN International Inc.","ATNM":"Actinium Pharmaceuticals Inc. (Delaware)","ATNX":"Athenex Inc.","ATO":"Atmos Energy Corporation","ATOM":"Atomera Incorporated","ATOS":"Atossa Genetics Inc.","ATR":"AptarGroup Inc.","ATRA":"Atara Biotherapeutics Inc.","ATRC":"AtriCure Inc.","ATRI":"Atrion Corporation","ATRO":"Astronics Corporation","ATRS":"Antares Pharma Inc.","ATSG":"Air Transport Services Group Inc","ATTO":"Atento S.A.","ATU":"Actuant Corporation","ATUS":"Altice USA Inc. Class A","ATV":"Acorn International Inc. ADS","ATVI":"Activision Blizzard Inc","ATXI":"Avenue Therapeutics Inc.","AU":"AngloGold Ashanti Limited","AUB":"Atlantic Union Bankshares Corporation","AUBN":"Auburn National Bancorporation Inc.","AUDC":"AudioCodes Ltd.","AUG":"Auryn Resources Inc.","AUMN":"Golden Minerals Company","AUO":"AU Optronics Corp American Depositary Shares","AUPH":"Aurinia Pharmaceuticals Inc","AUSF":"Global X Funds Adaptive U.S. Factor","AUTL":"Autolus Therapeutics plc","AUTO":"AutoWeb Inc.","AUY":"Yamana Gold Inc. (Canada)","AVA":"Avista Corporation","AVAL":"Grupo Aval Acciones y Valores S.A. ADR (Each representing 20 preferred shares)","AVAV":"AeroVironment Inc.","AVB":"AvalonBay Communities Inc.","AVCO":"Avalon GloboCare Corp.","AVD":"American Vanguard Corporation ($0.10 Par Value)","AVDL":"Avadel Pharmaceuticals plc","AVDR":"Avedro Inc","AVEO":"AVEO Pharmaceuticals Inc.","AVGO":"Broadcom Inc.","AVGR":"Avinger Inc.","AVH":"Avianca Holdings S.A. American Depositary Shares (Each representing 8 preferred Shares)","AVID":"Avid Technology Inc.","AVK":"Advent Convertible and Income Fund","AVLR":"Avalara Inc.","AVNS":"Avanos Medical Inc.","AVNW":"Aviat Networks Inc.","AVP":"Avon Products Inc.","AVRO":"AVROBIO Inc.","AVT":"Avnet Inc.","AVTR":"Avantor Inc.","AVTR-A":"Avantor Inc. Series A Mandatory Convertible Preferred Stock","AVX":"AVX Corporation","AVXL":"Anavex Life Sciences Corp.","AVY":"Avery Dennison Corporation","AVYA":"Avaya Holdings Corp.","AWF":"Alliancebernstein Global High Income Fund","AWI":"Armstrong World Industries Inc","AWK":"American Water Works Company Inc.","AWP":"Aberdeen Global Premier Properties Fund of Beneficial Interest","AWR":"American States Water Company","AWRE":"Aware Inc.","AWSM":"Cool Holdings Inc.","AWTM":"Aware Ultra-Short Duration Enhanced Income","AWX":"Avalon Holdings Corporation","AX":"Axos Financial Inc.","AXAS":"Abraxas Petroleum Corporation","AXDX":"Accelerate Diagnostics Inc.","AXE":"Anixter International Inc.","AXGN":"Axogen Inc.","AXGT":"Axovant Gene Therapies Ltd.","AXJL":"WisdomTree Asia Pacific ex-Japan Total Dividend Fund","AXJV":"iShares Edge MSCI A Min Vol Asia ex Japan","AXL":"American Axle & Manufacturing Holdings Inc.","AXLA":"Axcella Health Inc.","AXNX":"Axonics Modulation Technologies Inc.","AXO":"","AXP":"American Express Company","AXR":"AMREP Corporation","AXS":"Axis Capital Holdings Limited","AXS-D":"Axis Capital Holdings Limited Preferred Series D (Bermuda)","AXS-E":"Axis Capital Holdings Limited Depositary Shares Series E","AXSM":"Axsome Therapeutics Inc.","AXTA":"Axalta Coating Systems Ltd.","AXTI":"AXT Inc","AXU":"Alexco Resource Corp (Canada)","AY":"Atlantica Yield plc","AYI":"Acuity Brands Inc.","AYR":"Aircastle Limited","AYTU":"Aytu BioScience Inc.","AYX":"Alteryx Inc. Class A","AZN":"Astrazeneca PLC","AZO":"AutoZone Inc.","AZPN":"Aspen Technology Inc.","AZRE":"Azure Power Global Limited Equity Shares","AZRX":"AzurRx BioPharma Inc.","AZUL":"Azul S.A. American Depositary Shares (each representing three preferred shares)","AZZ":"AZZ Inc.","B":"Barnes Group Inc.","BA":"The Boeing Company","BAB":"Invesco Taxable Municipal Bond","BABA":"Alibaba Group Holding Limited","BABY":"Natus Medical Incorporated","BAC":"Bank of America Corporation","BAC-A":"Bank of America Corporation Depositary Shares each representing a 1/1000 th interest in a share of 6.000% Non-Cumulative","BAC-B":"Bank of America Corporation Depositary Shares Series G","BAC-C":"Bank of America Corporation Depositary Shares Series C","BAC-E":"Bank of America Corporation Depositary Sh repstg 1/1000th Perp Pfd Ser E","BAC-K":"Bank of America Corporation Depositary Shares Series H","BAC-L":"Bank of America Corporation Non Cumulative Perpetual Conv Pfd Ser L","BAC-M":"Bank of America Corporation Depositary Shares Series K","BAC-W*":"","BAC-Y":"Bank of America Corporation Depositary Shares Series Y","BAF":"BlackRock Municipal Income Investment Quality Trust","BAH":"Booz Allen Hamilton Holding Corporation","BAL":"iPathA Series B Bloomberg Cotton Subindex Total Return ETN","BAM":"Brookfield Asset Management Inc.","BANC":"Banc of California Inc.","BANC-D":"Banc of California Inc. Depositary Shares Series D","BANC-E":"Banc of California Inc. Depositary Shares Series E","BAND":"Bandwidth Inc.","BANF":"BancFirst Corporation","BANFP":"BancFirst Corporation 7.2% Cumulative Trust Preferred Securities","BANR":"Banner Corporation","BANX":"StoneCastle Financial Corp","BAP":"Credicorp Ltd.","BAPR":"Innovator S&P 500 Buffer ETF - April","BAR":"GraniteShares Gold Trust Shares of Beneficial Interest","BAS":"Basic Energy Services Inc.","BASI":"Bioanalytical Systems Inc.","BATRA":"Liberty Media Corporation Series A Liberty Braves Common Stock","BATRK":"Liberty Media Corporation Series C Liberty Braves Common Stock","BATT":"Amplify Advanced Battery Metals and Materials","BAX":"Baxter International Inc.","BB":"BlackBerry Limited","BBAR":"BBVA Banco Frances S.A.","BBAX":"JPMorgan BetaBuilders Developed Asia-ex Japan","BBBY":"Bed Bath & Beyond Inc.","BBC":"Virtus LifeSci Biotech Clinical Trials","BBCA":"JPMorgan BetaBuilders Canada","BBCP":"Concrete Pumping Holdings Inc.","BBD":"Banco Bradesco Sa American Depositary Shares","BBDC":"Barings BDC Inc.","BBDO":"Banco Bradesco Sa American Depositary Shares (each representing one)","BBEU":"JPMorgan BetaBuilders Europe","BBF":"BlackRock Municipal Income Investment Trust","BBGI":"Beasley Broadcast Group Inc.","BBH":"VanEck Vectors Biotech ETF","BBIO":"BridgeBio Pharma Inc.","BBJP":"JPMorgan BetaBuilders Japan","BBK":"Blackrock Municipal Bond Trust","BBL":"BHP Group PlcSponsored ADR","BBN":"BlackRock Taxable Municipal Bond Trust of Beneficial Interest","BBP":"Virtus LifeSci Biotech Products","BBRE":"JPMorgan BetaBuilders MSCI U.S. REIT","BBSA":"JPMorgan BetaBuilders 1-5 Year U.S. Aggregate Bond","BBSI":"Barrett Business Services Inc.","BBT":"BB&T Corporation","BBT-D":"BB&T Corporation Depositary Shares Series D","BBT-E":"BB&T Corporation Depositary Shares Series E","BBT-F":"BB&T Corporation Depositary Shares Series F","BBT-G":"BB&T Corporation Depositary Shares Series G","BBT-H":"BB&T Corporation Depositary shares Series H","BBU":"Brookfield Business Partners L.P. Limited Partnership Units","BBUS":"JPMorgan BetaBuilders U.S. Equity","BBVA":"Banco Bilbao Vizcaya Argentaria S.A.","BBW":"Build-A-Bear Workshop Inc.","BBX":"BBX Capital Corporation Class A","BBY":"Best Buy Co. Inc.","BC":"Brunswick Corporation","BC-A":"","BC-B":"","BC-C":"Brunswick Corporation 6.375% Notes due 2049","BCBP":"BCB Bancorp Inc. (NJ)","BCC":"Boise Cascade L.L.C.","BCD":"Aberdeen Standard Bloomberg All Commodity Longer Dated Strategy K-1 Free","BCE":"BCE Inc.","BCEI":"Bonanza Creek Energy Inc.","BCEL":"Atreca Inc.","BCH":"Banco De Chile ADS","BCI":"Aberdeen Standard Bloomberg All Commodity Strategy K-1 Free","BCLI":"Brainstorm Cell Therapeutics Inc.","BCM":"iPath Pure Beta Broad Commodity ETN","BCML":"BayCom Corp","BCNA":"Reality Shares Nasdaq NexGen Economy China ETF","BCO":"Brinks Company (The)","BCOM":"B Communications Ltd.","BCOR":"Blucora Inc.","BCOV":"Brightcove Inc.","BCOW":"1895 Bancorp of Wisconsin Inc.","BCPC":"Balchem Corporation","BCRH":"Blue Capital Reinsurance Holdings Ltd.","BCRX":"BioCryst Pharmaceuticals Inc.","BCS":"Barclays PLC","BCSF":"Bain Capital Specialty Finance Inc.","BCTF":"Bancorp 34 Inc.","BCV":"Bancroft Fund Ltd.","BCV-A":"Bancroft Fund Limited 5.375% Series A Cumulative Preferred Shares","BCX":"BlackRock Resources of Beneficial Interest","BCYC":"Bicycle Therapeutics plc","BDC":"Belden Inc","BDC-B":"Belden Inc Depositary Shares Series B","BDCL":"2xLeveraged Long Exchange Traded Access Securities (E-TRACS) Linked to the Wells Fargo Business Development Company Index due May 24 2041","BDCS":"UBS AG Exchange Traded Access Securities (E TRACS) Linked to the Wells Fargo Business Development Company Index due April 26 2041","BDCZ":"ETRACS Wells Fargo Business Development Company Index ETN Series B due April 26 2041","BDGE":"Bridge Bancorp Inc.","BDJ":"Blackrock Enhanced Equity Dividend Trust","BDL":"Flanigan's Enterprises Inc.","BDN":"Brandywine Realty Trust","BDR":"Blonder Tongue Laboratories Inc.","BDRY":"Breakwave Dry Bulk Shipping","BDSI":"BioDelivery Sciences International Inc.","BDX":"Becton Dickinson and Company","BDXA":"Becton Dickinson and Company Depositary Shares each Representing a 1/20th Interest in a Share of 6.125% Mandatory Convertible Preferred Stock Series A $1.00 par","BE":"Bloom Energy Corporation Class A","BEAT":"BioTelemetry Inc.","BECN":"Beacon Roofing Supply Inc.","BEDU":"Bright Scholar Education Holdings Limited American Depositary Shares each representing one Class A","BELFA":"Bel Fuse Inc. Class A Common Stock","BELFB":"Bel Fuse Inc. Class B Common Stock","BEMO":"Aptus Behavioral Momentum","BEN":"Franklin Resources Inc.","BEP":"Brookfield Renewable Partners L.P.","BERN":"Bernstein U.S. Research Fund","BERY":"Berry Global Group Inc.","BEST":"BEST Inc. American Depositary Shares each representing one Class A","BF.A":"Brown Forman Inc Class A","BF.B":"Brown Forman Inc Class B","BFAM":"Bright Horizons Family Solutions Inc.","BFC":"Bank First Corporation","BFIN":"BankFinancial Corporation","BFIT":"Global X Health & Wellness Thematic ETF","BFK":"BlackRock Municipal Income Trust","BFO":"Blackrock Florida Municipal 2020 Term Trust","BFOR":"Barron's 400","BFRA":"Biofrontera AG","BFS":"Saul Centers Inc.","BFS-C":"Saul Centers Inc. Depositary Shares Series C","BFS-D":"Saul Centers Inc. Depositary Shares Series D","BFST":"Business First Bancshares Inc.","BFY":"BlackRock New York Municipal Income Trust II","BFZ":"BlackRock California Municipal Income Trust","BG":"Bunge Limited","BGB":"Blackstone / GSO Strategic Credit Fund","BGCP":"BGC Partners Inc.","BGFV":"Big 5 Sporting Goods Corporation","BGG":"Briggs & Stratton Corporation","BGH":"Barings Global Short Duration High Yield Fund of Beneficial Interests","BGI":"Birks Group Inc.","BGIO":"BlackRock 2022 Global Income Opportunity Trust of Beneficial Interest","BGNE":"BeiGene Ltd.","BGR":"BlackRock Energy and Resources Trust","BGRN":"iShares Global Green Bond ETF","BGS":"B&G Foods Inc.","BGSF":"BG Staffing Inc","BGT":"BlackRock Floating Rate Income Trust","BGX":"Blackstone GSO Long Short Credit Income Fund","BGY":"Blackrock Enhanced International Dividend Trust","BH":"Biglari Holdings Inc. Class B","BH.A":"Biglari Holdings Inc. Class A","BHB":"Bar Harbor Bankshares Inc.","BHC":"Bausch Health Companies Inc.","BHE":"Benchmark Electronics Inc.","BHF":"Brighthouse Financial Inc.","BHFAL":"Brighthouse Financial Inc. 6.25% Junior Subordinated Debentures due 2058","BHFAP":"Brighthouse Financial Inc. Depositary Shares 6.6% Non-Cumulative Preferred Stock Series A","BHGE":"Baker Hughes a GE company Class A","BHK":"Blackrock Core Bond Trust","BHLB":"Berkshire Hills Bancorp Inc.","BHP":"BHP Group Limited American Depositary Shares (Each representing two)","BHR":"Braemar Hotels & Resorts Inc.","BHR-B":"Braemar Hotels & Resorts Inc. 5.50% Series B Cumulative Convertible Preferred Stock par value $0.01 per share","BHR-D":"Braemar Hotels & Resorts Inc. 8.25% Series D Cumulative Preferred Stock par value $0.01 per share","BHTG":"BioHiTech Global Inc.","BHV":"BlackRock Virginia Municipal Bond Trust","BHVN":"Biohaven Pharmaceutical Holding Company Ltd.","BIB":"ProShares Ultra Nasdaq Biotechnology","BIBL":"Inspire 100","BICK":"First Trust Global BICK Index Fund","BID":"Sotheby's","BIDU":"Baidu Inc.","BIF":"Boulder Growth & Income Fund Inc.","BIG":"Big Lots Inc.","BIIB":"Biogen Inc.","BIKR":"Rogers AI Global Macro","BIL":"SPDR Bloomberg Barclays 1-3 Month T-Bill","BILI":"Bilibili Inc.","BIMI":"NF Energy Saving Corporation","BIO":"Bio-Rad Laboratories Inc. Class A","BIO.B":"Bio-Rad Laboratories Inc. Class B","BIOC":"Biocept Inc.","BIOL":"Biolase Inc.","BIOS":"BioScrip Inc.","BIOX":"Bioceres Crop Solutions Corp.","BIOX+":"Bioceres Crop Solutions Corp. Warrant","BIP":"Brookfield Infrastructure Partners LP Limited Partnership Units","BIQI":"BIQI International Holdings Corporation","BIS":"ProShares UltraShort Nasdaq Biotechnology","BIT":"BlackRock Multi-Sector Income Trust of Beneficial Interest","BITA":"Bitauto Holdings Limited American Depositary Shares (each representing one)","BIV":"Vanguard Intermediate-Term Bond","BIZD":"VanEck Vectors BDC Income","BJ":"BJ's Wholesale Club Holdings Inc.","BJAN":"Innovator S&P 500 Buffer ETF - January","BJK":"VanEck Vectors Gaming","BJRI":"BJ's Restaurants Inc.","BJUL":"Innovator ETFs Trust S&P 500 Buffer ETF - July","BJUN":"Innovator S&P 500 Buffer ETF - June","BK":"Bank of New York Mellon Corporation (The)","BK-C":"Bank Of New York Mellon Corporation (The) Dep Shs Repstg 1/4000th Perp Pfd Ser C","BKCC":"BlackRock Capital Investment Corporation","BKCH":"AdvisorShares Sabretooth ETF","BKD":"Brookdale Senior Living Inc.","BKE":"Buckle Inc. (The)","BKEP":"Blueknight Energy Partners L.P. L.L.C.","BKEPP":"Blueknight Energy Partners L.P. L.L.C. Series A Preferred Units","BKF":"iShares MSCI BRIC Index Fund","BKH":"Black Hills Corporation","BKI":"Black Knight Inc.","BKJ":"Bancorp of New Jersey Inc","BKK":"Blackrock Municipal 2020 Term Trust","BKLN":"Invesco Senior Loan","BKN":"BlackRock Investment Quality Municipal Trust Inc. (The)","BKNG":"Booking Holdings Inc.","BKS":"Barnes & Noble Inc.","BKSC":"Bank of South Carolina Corp.","BKT":"BlackRock Income Trust Inc. (The)","BKTI":"BK Technologies Corporation","BKU":"BankUnited Inc.","BKYI":"BIO-key International Inc.","BL":"BlackLine Inc.","BLBD":"Blue Bird Corporation","BLCM":"Bellicum Pharmaceuticals Inc.","BLCN":"Reality Shares Nasdaq NextGen Economy ETF","BLD":"TopBuild Corp.","BLDP":"Ballard Power Systems Inc.","BLDR":"Builders FirstSource Inc.","BLE":"BlackRock Municipal Income Trust II","BLES":"Inspire Global Hope","BLFS":"BioLife Solutions Inc.","BLHY":"Virtus Newfleet Dynamic Credit","BLIN":"Bridgeline Digital Inc.","BLK":"BlackRock Inc.","BLKB":"Blackbaud Inc.","BLL":"Ball Corporation","BLMN":"Bloomin' Brands Inc.","BLNK":"Blink Charging Co.","BLNKW":"Blink Charging Co. Warrant","BLOK":"Amplify Transformational Data Sharing","BLPH":"Bellerophon Therapeutics Inc.","BLRX":"BioLineRx Ltd.","BLUE":"bluebird bio Inc.","BLV":"Vanguard Long-Term Bond","BLW":"Blackrock Limited Duration Income Trust","BLX":"Banco Latinoamericano de Comercio Exterior S.A.","BMA":"Banco Macro S.A. ADR (representing Ten Class B)","BMCH":"BMC Stock Holdings Inc.","BME":"Blackrock Health Sciences Trust","BMI":"Badger Meter Inc.","BML-G":"Bank of America Corporation Depositary Shares Series 1","BML-H":"Bank of America Corporation Depositary Shares Series 2","BML-J":"Bank of America Corporation Depositary Shares Series 4","BML-L":"Bank of America Corporation Depositary Shares Series 5","BMLP":"Dorsey Wright MLP Index ETNs due December 10 2036","BMO":"Bank Of Montreal","BMRA":"Biomerica Inc.","BMRC":"Bank of Marin Bancorp","BMRN":"BioMarin Pharmaceutical Inc.","BMTC":"Bryn Mawr Bank Corporation","BMY":"Bristol-Myers Squibb Company","BND":"Vanguard Total Bond Market ETF","BNDC":"FlexShares Core Select Bond Fund","BNDW":"Vanguard Total World Bond ETF","BNDX":"Vanguard Total International Bond ETF","BNED":"Barnes & Noble Education Inc","BNFT":"Benefitfocus Inc.","BNGO":"Bionano Genomics Inc.","BNGOW":"Bionano Genomics Inc. Warrant","BNKD":"MicroSectors U.S. Big Banks Index -3X Inverse Leveraged ETNs","BNKO":"MicroSectors U.S. Big Banks Index 2X Leveraged ETNs","BNKU":"MicroSectors U.S. Big Banks Index 3X Leveraged ETNs","BNKZ":"MicroSectors U.S. Big Banks Index -2X Inverse Leveraged ETNs","BNO":"United States Brent Oil Fund LP ETV","BNS":"Bank Nova Scotia Halifax Pfd 3","BNSO":"Bonso Electronics International Inc.","BNTC":"Benitec Biopharma Limited","BNTCW":"","BNY":"BlackRock New York Municipal Income Trust","BOCH":"Bank of Commerce Holdings (CA)","BOCT":"Innovator S&P 500 Buffer ETF - October","BOE":"Blackrock Enhanced Global Dividend Trust of Beneficial Interest","BOH":"Bank of Hawaii Corporation","BOIL":"ProShares Ultra Bloomberg Natural Gas","BOKF":"BOK Financial Corporation","BOKFL":"BOK Financial Corporation 5.375% Subordinated Notes due 2056","BOLD":"Audentes Therapeutics Inc.","BOMN":"Boston Omaha Corporation","BOND":"PIMCO Active Bond Exchange-Traded Fund Exchange-Traded Fund","BOOM":"DMC Global Inc.","BOON":"NYSE Pickens Oil Response","BOOT":"Boot Barn Holdings Inc.","BOSC":"B.O.S. Better Online Solutions","BOSS":"Global X Funds Founder-Run Companies","BOTJ":"Bank of the James Financial Group Inc.","BOTZ":"Global X Robotics & Artificial Intelligence ETF","BOUT":"Innovator IBD Breakout Opportunities","BOX":"Box Inc. Class A","BOXL":"Boxlight Corporation","BP":"BP p.l.c.","BPFH":"Boston Private Financial Holdings Inc.","BPL":"Buckeye Partners L.P.","BPMC":"Blueprint Medicines Corporation","BPMP":"BP Midstream Partners LP representing Limited Partner Interests","BPMX":"BioPharmX Corporation","BPOP":"Popular Inc.","BPOPM":"Popular Inc. Popular Capital Trust II","BPOPN":"Popular Inc. Popular Capital Trust I -6.70% Cumulative Monthly Income Trust Preferred Securities","BPR":"Brookfield Property REIT Inc.","BPRAP":"Brookfield Property REIT Inc. 6.375% Series A Preferred Stock","BPRN":"The Bank of Princeton","BPT":"BP Prudhoe Bay Royalty Trust","BPTH":"Bio-Path Holdings Inc.","BPY":"Brookfield Property Partners L.P.","BPYPP":"Brookfield Property Partners L.P. 6.50% Class A Cumulative Redeemable Perpetual Preferred Units","BQH":"Blackrock New York Municipal Bond Trust of Beneficial Interest","BR":"Broadridge Financial Solutions Inc.Common Stock","BRAC":"Black Ridge Acquisition Corp.","BRACR":"Black Ridge Acquisition Corp. Right","BRACU":"Black Ridge Acquisition Corp. Unit","BRACW":"Black Ridge Acquisition Corp. Warrant","BRC":"Brady Corporation","BREW":"Craft Brew Alliance Inc.","BRF":"VanEck Vectors Brazil Small-Cap","BRFS":"BRF S.A.","BRG":"Bluerock Residential Growth REIT Inc. Class A","BRG-A":"Bluerock Residential Growth REIT Inc. 8.250% Series A Cumulative Redeemable Preferred Stock ($0.01 par value per share)","BRG-C":"Bluerock Residential Growth REIT Inc. 7.625% Series C Cumulative Redeemable Preferred Stock","BRG-D":"Bluerock Residential Growth REIT Inc. 7.125% Series D Cumulative Preferred Stock ($0.01 par value per share)","BRGL":"Bernstein Global Research Fund","BRID":"Bridgford Foods Corporation","BRK.A":"Berkshire Hathaway Inc.","BRK.B":"Berkshire Hathaway Inc.","BRKL":"Brookline Bancorp Inc.","BRKR":"Bruker Corporation","BRKS":"Brooks Automation Inc.","BRN":"Barnwell Industries Inc.","BRO":"Brown & Brown Inc.","BROG":"Twelve Seas Investment Company","BROGR":"Twelve Seas Investment Company Rights","BROGU":"Twelve Seas Investment Company Units","BROGW":"Twelve Seas Investment Company Warrant","BRPA":"Big Rock Partners Acquisition Corp.","BRPAR":"Big Rock Partners Acquisition Corp. Right","BRPAU":"Big Rock Partners Acquisition Corp. Unit","BRPAW":"Big Rock Partners Acquisition Corp. Warrant","BRPM":"B. Riley Principal Merger Corp. Class A","BRPM+":"B. Riley Principal Merger Corp. Warrants each whole warrant exercisable for one share of Class A common stock each at an exercise price of $11.50 per share","BRPM=":"B. Riley Principal Merger Corp. Units each consisting of one share of Class A Common Stock and one-half of one redeemable Warrant","BRQS":"Borqs Technologies Inc.","BRSS":"Global Brass and Copper Holdings Inc.","BRT":"BRT Apartments Corp. (MD)","BRX":"Brixmor Property Group Inc.","BRY":"Berry Petroleum Corporation","BRZU":"Direxion Daily Brazil Bull 3X Shares","BSA":"BrightSphere Investment Group plc 5.125% Notes due 2031","BSAC":"Banco Santander - Chile ADS","BSAE":"Invesco BulletShares 2021 USD Emerging Markets Debt","BSBE":"Invesco BulletShares 2022 USD Emerging Markets Debt","BSBR":"Banco Santander Brasil SA American Depositary Shares each representing one unit","BSCE":"Invesco BulletShares 2023 USD Emerging Markets Debt","BSCJ":"Invesco BulletShares 2019 Corporate Bond","BSCK":"Invesco BulletShares 2020 Corporate Bond","BSCL":"Invesco BulletShares 2021 Corporate Bond","BSCM":"Invesco BulletShares 2022 Corporate Bond","BSCN":"Invesco BulletShares 2023 Corporate Bond","BSCO":"Invesco BulletShares 2024 Corporate Bond","BSCP":"Invesco BulletShares 2025 Corporate Bond","BSCQ":"Invesco BulletShares 2026 Corporate Bond","BSCR":"Invesco BulletShares 2027 Corporate Bond","BSCS":"Invesco BulletShares 2028 Corporate Bond","BSD":"BlackRock Strategic Municipal Trust Inc. (The)","BSDE":"Invesco BulletShares 2024 USD Emerging Markets Debt","BSE":"Blackrock New York Municipal Income Quality Trust of Beneficial Interest","BSET":"Bassett Furniture Industries Incorporated","BSGM":"BioSig Technologies Inc.","BSIG":"BrightSphere Investment Group plc","BSJJ":"Invesco BulletShares 2019 High Yield Corporate Bond","BSJK":"Invesco BulletShares 2020 High Yield Corporate Bond","BSJL":"Invesco BulletShares 2021 High Yield Corporate Bond","BSJM":"Invesco BulletShares 2022 High Yield Corporate Bond","BSJN":"Invesco BulletShares 2023 High Yield Corporate Bond","BSJO":"Invesco BulletShares 2024 High Yield Corporate Bond","BSJP":"Invesco BulletShares 2025 High Yield Corporate Bond","BSJQ":"Invesco BulletShares 2026 High Yield Corporate Bond","BSL":"Blackstone GSO Senior Floating Rate Term Fund of Beneficial Interest","BSM":"Black Stone Minerals L.P. representing limited partner interests","BSMX":"Banco Santander Mexico S.A. Institucion de Banca Multiple Grupo Financiero Santander Mexico","BSQR":"BSQUARE Corporation","BSRR":"Sierra Bancorp","BST":"BlackRock Science and Technology Trust of Beneficial Interest","BSTC":"BioSpecifics Technologies Corp","BSTZ":"BlackRock Science and Technology Trust II of Beneficial Interest","BSV":"Vanguard Short-Term Bond","BSVN":"Bank7 Corp.","BSX":"Boston Scientific Corporation","BT":"BT Group plc American Depositary Shares","BTA":"BlackRock Long-Term Municipal Advantage Trust of Beneficial Interest","BTAI":"BioXcel Therapeutics Inc.","BTAL":"AGFiQ U.S. Market Neutral Anti-Beta Fund","BTE":"Baytex Energy Corp","BTEC":"Principal Healthcare Innovators Index ETF","BTG":"B2Gold Corp (Canada)","BTI":"British American Tobacco Industries p.l.c. ADR","BTN":"Ballantyne Strong Inc.","BTO":"John Hancock Financial Opportunities Fund","BTT":"BlackRock Municipal 2030 Target Term Trust","BTU":"Peabody Energy Corporation","BTX":"BioTime Inc.","BTZ":"BlackRock Credit Allocation Income Trust","BUD":"Anheuser-Busch Inbev SA Sponsored ADR (Belgium)","BUI":"BlackRock Utility Infrastructure & Power Opportunities Trust","BUL":"Pacer US Cash Cows Growth","BURG":"Chanticleer Holdings Inc.","BURL":"Burlington Stores Inc.","BUSE":"First Busey Corporation","BUY":"USCF SummerHaven SHPEI Index Fund","BUYN":"USCF SummerHaven SHPEN Index Fund","BV":"BrightView Holdings Inc.","BVAL":"Brand Value","BVN":"Buenaventura Mining Company Inc.","BVSN":"BroadVision Inc.","BVXV":"BiondVax Pharmaceuticals Ltd.","BVXVW":"","BW":"Babcock & Wilcox Enterprises Inc.","BWA":"BorgWarner Inc.","BWAY":"Brainsway Ltd.","BWB":"Bridgewater Bancshares Inc.","BWEN":"Broadwind Energy Inc.","BWFG":"Bankwell Financial Group Inc.","BWG":"BrandywineGLOBAL Global Income Opportunities Fund Inc.","BWL.A":"Bowl America Inc. Class A","BWMC":"Boxwood Merger Corp.","BWMCU":"Boxwood Merger Corp. Unit","BWMCW":"Boxwood Merger Corp. Warrant","BWX":"SPDR Bloomberg Barclays Intl Treasury Bd","BWXT":"BWX Technologies Inc.","BWZ":"SPDR Bloomberg Barclays Short Term International Treasury Bond","BX":"The Blackstone Group Inc. Class A","BXC":"Bluelinx Holdings Inc.","BXG":"Bluegreen Vacations Corporation","BXMT":"Blackstone Mortgage Trust Inc.","BXMX":"Nuveen S&P 500 Buy-Write Income Fund of Beneficial Interest","BXP":"Boston Properties Inc.","BXP-B":"Boston Properties Inc. Depositary Shares each representing 1/100th of a share of the Issuer's 5.25% Sockeries B Cumulative Redeemable Preferred St","BXS":"BancorpSouth Bank","BY":"Byline Bancorp Inc.","BYD":"Boyd Gaming Corporation","BYFC":"Broadway Financial Corporation","BYLD":"iShares Yield Optimized Bond","BYM":"Blackrock Municipal Income Quality Trust of Beneficial Interest","BYND":"Beyond Meat Inc.","BYSI":"BeyondSpring Inc.","BZH":"Beazer Homes USA Inc.","BZM":"BlackRock Maryland Municipal Bond Trust of beneficial interest","BZQ":"ProShares UltraShort MSCI Brazil Capped","BZUN":"Baozun Inc.","C":"Citigroup Inc.","C-J":"Citigroup Inc. Dep Shs Repstg 1/1000 Pfd Ser J Fixed/Fltg","C-K":"Citigroup Inc. Dep Shs Repstg 1/1000th Pfd Ser K","C-N":"Citigroup Capital XIII 7.875% Fixed rate Floating Rate trust Preferred Securities (TruPS)","C-S":"Citigroup Inc. Depositary Shares Series S","CAAP":"Corporacion America Airports SA","CAAS":"China Automotive Systems Inc.","CABO":"Cable One Inc.","CAC":"Camden National Corporation","CACC":"Credit Acceptance Corporation","CACG":"ClearBridge All Cap Growth ETF","CACI":"CACI International Inc. Class A","CADC":"China Advanced Construction Materials Group Inc.","CADE":"Cadence Bancorporation Class A","CAE":"CAE Inc.","CAF":"Morgan Stanley China A Share Fund Inc.","CAG":"ConAgra Brands Inc.","CAH":"Cardinal Health Inc.","CAI":"CAI International Inc.","CAI-A":"CAI International Inc. 8.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Stock","CAI-B":"CAI International Inc. 8.50% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Stock","CAJ":"Canon Inc. American Depositary Shares","CAKE":"The Cheesecake Factory Incorporated","CAL":"Caleres Inc.","CALA":"Calithera Biosciences Inc.","CALF":"Pacer US Small Cap Cash Cows 100","CALM":"Cal-Maine Foods Inc.","CALX":"Calix Inc","CAMP":"CalAmp Corp.","CAMT":"Camtek Ltd.","CANE":"Teucrium Sugar Fund ETV","CANF":"Can-Fite Biopharma Ltd Sponsored ADR (Israel)","CANG":"Cango Inc. American Depositary Shares each representing two (2) Class A","CAPE":"Barclays ETN Schiller CAPE","CAPL":"CrossAmerica Partners LP representing limited partner interests","CAPR":"Capricor Therapeutics Inc.","CAR":"Avis Budget Group Inc.","CARA":"Cara Therapeutics Inc.","CARB":"Carbonite Inc.","CARE":"Carter Bank & Trust","CARG":"CarGurus Inc.","CARO":"Carolina Financial Corporation","CARS":"Cars.com Inc.","CART":"Carolina Trust BancShares Inc.","CARV":"Carver Bancorp Inc.","CARZ":"First Trust NASDAQ Global Auto Index Fund","CASA":"Casa Systems Inc.","CASH":"Meta Financial Group Inc.","CASI":"CASI Pharmaceuticals Inc.","CASS":"Cass Information Systems Inc","CASY":"Caseys General Stores Inc.","CAT":"Caterpillar Inc.","CATB":"Catabasis Pharmaceuticals Inc.","CATC":"Cambridge Bancorp","CATH":"Global X S&P 500 Catholic Values ETF","CATM":"Cardtronics plc","CATO":"Cato Corporation (The) Class A","CATS":"Catasys Inc.","CATY":"Cathay General Bancorp","CB":"Chubb Limited","CBAN":"Colony Bankcorp Inc.","CBAT":"CBAK Energy Technology Inc.","CBAY":"CymaBay Therapeutics Inc.","CBB":"Cincinnati Bell Inc.","CBB-B":"Cincinnati Bell Inc. Preferred Stock","CBD":"Companhia Brasileira de Distribuicao ADS","CBFV":"CB Financial Services Inc.","CBH":"AllianzGI Convertible & Income 2024 Target Term Fund of Beneficial Interest","CBIO":"Catalyst Biosciences Inc.","CBL":"CBL & Associates Properties Inc.","CBL-D":"CBL & Associates Properties Inc. Dep Shares Repstg 1/10th Preferred Series D","CBL-E":"CBL & Associates Properties Inc. Depositary Shs Repstg 1/10 6.625% Ser E Cum Redeemable (Pfd Stk)","CBLI":"Cleveland BioLabs Inc.","CBLK":"Carbon Black Inc.","CBM":"Cambrex Corporation","CBMB":"CBM Bancorp Inc.","CBMG":"Cellular Biomedicine Group Inc.","CBND":"SPDR Bloomberg Barclays Corporate Bond","CBNK":"Capital Bancorp Inc.","CBO":"","CBOE":"Cboe Global Markets Inc.","CBON":"VanEck Vectors ChinaAMC China Bond","CBPO":"China Biologic Products Holdings Inc.","CBPX":"Continental Building Products Inc.","CBRE":"CBRE Group Inc Class A","CBRL":"Cracker Barrel Old Country Store Inc.","CBS":"CBS Corporation Class B","CBS.A":"CBS Corporation Class A","CBSH":"Commerce Bancshares Inc.","CBSHP":"Commerce Bancshares Inc. Depositary Shares each representing a 1/1000th interest of 6.00% Series B Non-Cumulative Perpetual Preferred Stock","CBT":"Cabot Corporation","CBTX":"CBTX Inc.","CBU":"Community Bank System Inc.","CBX":"","CBZ":"CBIZ Inc.","CC":"Chemours Company (The)","CCA":"MFS California Municipal Fund of Beneficial Interest","CCB":"Coastal Financial Corporation","CCBG":"Capital City Bank Group","CCC":"Clarivate Analytics Plc","CCC+":"Clarivate Analytics Plc Warrants each to purchase one Ordinary Share","CCCL":"China Ceramics Co. Ltd.","CCD":"Calamos Dynamic Convertible & Income Fund","CCEP":"Coca-Cola European Partners plc","CCF":"Chase Corporation","CCH":"Collier Creek Holdings Class A","CCH+":"Collier Creek Holdings Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of $11.50 per share","CCH=":"Collier Creek Holdings Units each consisting of one Class A ordinary share $0.0001 par value and one-third of one redeemable warrant","CCI":"Crown Castle International Corp. (REIT)","CCI-A":"Crown Castle International Corporation 6.875% Mandatory Convertible Preferred Stock Series A","CCIH":"ChinaCache International Holdings Ltd.","CCJ":"Cameco Corporation","CCK":"Crown Holdings Inc.","CCL":"Carnival Corporation","CCLP":"CSI Compressco LP","CCM":"Concord Medical Services Holdings Limited ADS (Each represents three)","CCMP":"Cabot Microelectronics Corporation","CCNE":"CNB Financial Corporation","CCNI":"Command Center Inc.","CCO":"Clear Channel Outdoor Holdings Inc.","CCOI":"Cogent Communications Holdings Inc.","CCOR":"Cambria Core Equity","CCR":"CONSOL Coal Resources LP representing limited partner interests","CCRC":"China Customer Relations Centers Inc.","CCRN":"Cross Country Healthcare Inc.","CCS":"Century Communities Inc.","CCU":"Compania Cervecerias Unidas S.A.","CCX=":"Churchill Capital Corp II Units each consisting of one share of Class A common stock $0.0001 par value and one-third of one redeemable warrant","CCXI":"ChemoCentryx Inc.","CCZ":"Comcast Holdings ZONES","CDAY":"Ceridian HCM Holding Inc.","CDC":"Compass EMP US EQIncome 100 Enhanced Volatity Wtd","CDE":"Coeur Mining Inc.","CDEV":"Centennial Resource Development Inc.","CDK":"CDK Global Inc.","CDL":"Compass EMP US Large Cap High Dividend 100 Volatil","CDLX":"Cardlytics Inc.","CDMO":"Avid Bioservices Inc.","CDMOP":"Avid Bioservices Inc. 10.50% Series E Convertible Preferred Stock","CDNA":"CareDx Inc.","CDNS":"Cadence Design Systems Inc.","CDOR":"Condor Hospitality Trust Inc.","CDR":"Cedar Realty Trust Inc.","CDR-B":"Cedar Realty Trust Inc. 7.25% Series B Cumulative Redeemable Preferred Stock","CDR-C":"Cedar Realty Trust Inc. 6.50% Series C Cumulative Redeemable Preferred Stock","CDTX":"Cidara Therapeutics Inc.","CDW":"CDW Corporation","CDXC":"ChromaDex Corporation","CDXS":"Codexis Inc.","CDZI":"Cadiz Inc.","CE":"Celanese Corporation","CEA":"China Eastern Airlines Corporation Ltd.","CECE":"CECO Environmental Corp.","CECO":"Career Education Corporation","CEE":"The Central and Eastern Europe Fund Inc. (The)","CEF":"Sprott Physical Gold and Silver Trust Units","CEFL":"ETRACS Monthly Pay 2X Leveraged Closed-End Fund ETN","CEFS":"Exchange Listed Funds Trust","CEI":"Camber Energy Inc.","CEIX":"CONSOL Energy Inc.","CEL":"Cellcom Israel Ltd.","CELC":"Celcuity Inc.","CELG":"Celgene Corporation","CELGZ":"Celgene Corporation Contingent Value Right","CELH":"Celsius Holdings Inc.","CELP":"Cypress Energy Partners L.P. representing limited partner interests","CEM":"ClearBridge MLP and Midstream Fund Inc.","CEMB":"iShares J.P. Morgan EM Corporate Bond","CEMI":"Chembio Diagnostics Inc.","CEN":"Center Coast Brookfield MLP & Energy Infrastructure Fund","CENT":"Central Garden & Pet Company","CENTA":"Central Garden & Pet Company Class A Common Stock Nonvoting","CENX":"Century Aluminum Company","CEO":"CNOOC Limited","CEPU":"Central Puerto S.A. American Depositary Shares (each represents ten)","CEQP":"Crestwood Equity Partners LP","CEQP-":"","CERC":"Cerecor Inc.","CERN":"Cerner Corporation","CERS":"Cerus Corporation","CET":"Central Securities Corporation","CETV":"Central European Media Enterprises Ltd.","CETX":"Cemtrex Inc.","CETXP":"Cemtrex Inc. Series 1 Preferred Stock","CETXW":"Cemtrex Inc. Series 1 Warrant","CEV":"Eaton Vance California Municipal Income Trust Shares of Beneficial Interest","CEVA":"CEVA Inc.","CEW":"WisdomTree Emerging Currency Strategy Fund","CEY":"VictoryShares Emerging Market High Div Volatility","CEZ":"Victory CEMP Emerging Market Volatility Wtd Index","CF":"CF Industries Holdings Inc.","CFA":"Compass EMP U.S. 500 Volatility Weighted Index ETF","CFBI":"Community First Bancshares Inc.","CFBK":"Central Federal Corporation","CFFA":"CF Finance Acquisition Corp.","CFFAU":"CF Finance Acquisition Corp. Unit","CFFAW":"CF Finance Acquisition Corp. Warrant","CFFI":"C&F Financial Corporation","CFFN":"Capitol Federal Financial Inc.","CFG":"Citizens Financial Group Inc.","CFG-D":"Citizens Financial Group Inc. Depositary Shares Series D","CFMS":"Conformis Inc.","CFO":"VictoryShares US 500 Enhanced Volatility Wtd ETF","CFR":"Cullen/Frost Bankers Inc.","CFR-A":"Cullen/Frost Bankers Inc. Perpetual Preferred Series A","CFRX":"ContraFect Corporation","CFX":"Colfax Corporation","CFXA":"Colfax Corporation 5.75% Tangible Equity Units","CG":"The Carlyle Group L.P.","CGA":"China Green Agriculture Inc.","CGBD":"TCG BDC Inc.","CGC":"Canopy Growth Corporation","CGEN":"Compugen Ltd.","CGIX":"Cancer Genetics Inc.","CGNX":"Cognex Corporation","CGO":"Calamos Global Total Return Fund","CGW":"Invesco S&P Global Water Index","CHA":"China Telecom Corp Ltd ADS","CHAC":"Chardan Healthcare Acquisition Corp.","CHAC+":"","CHAC=":"Chardan Healthcare Acquisition Corp. Units each consisting of one share of common stock $0.0001 par value and one Warrant entitling the holder to purchase one-h","CHAD":"Direxion Daily CSI 300 China A Shares Bear 1X Shares","CHAP":"Chaparral Energy Inc. Class A","CHAU":"Direxion Daily CSI 300 China A Share Bull 2X Shares","CHCI":"Comstock Holding Companies Inc.","CHCO":"City Holding Company","CHCT":"Community Healthcare Trust Incorporated","CHD":"Church & Dwight Company Inc.","CHDN":"Churchill Downs Incorporated","CHE":"Chemed Corp","CHEF":"The Chefs' Warehouse Inc.","CHEK":"Check-Cap Ltd.","CHEKW":"","CHEKZ":"Check-Cap Ltd. Series C Warrant","CHEP":"AGFiQ U.S. Market Neutral Value Fund","CHFC":"Chemical Financial Corporation","CHFS":"CHF Solutions Inc.","CHGG":"Chegg Inc.","CHGX":"Change Finance U.S. Large Cap Fossil Fuel Free","CHH":"Choice Hotels International Inc.","CHI":"Calamos Convertible Opportunities and Income Fund","CHIC":"Global X Funds MSCI China Communication Services","CHIE":"Global X MSCI China Energy","CHIH":"Global X Funds MSCI China Health Care","CHII":"Global X MSCI China Industrials","CHIK":"Global X Funds MSCI China Information Technology","CHIL":"Global X Funds MSCI China Large-Cap 50","CHIM":"Global X MSCI China Materials","CHIQ":"Global X MSCI China Consumer Discretionary","CHIR":"Global X Funds MSCI China Real Estate","CHIS":"Global X Funds MSCI China Consumer Staples","CHIU":"Global X Funds MSCI China Utilities","CHIX":"Global X MSCI China Financials","CHK":"Chesapeake Energy Corporation","CHK-D":"Chesapeake Energy Corporation Convertible Preferred","CHKP":"Check Point Software Technologies Ltd.","CHKR":"Chesapeake Granite Wash Trust representing beneficial interests in the Trust","CHL":"China Mobile Limited","CHMA":"Chiasma Inc.","CHMG":"Chemung Financial Corp","CHMI":"Cherry Hill Mortgage Investment Corporation","CHMI-A":"Cherry Hill Mortgage Investment Corporation 8.20% Series A Cumulative Redeemable Preferred Stock","CHMI-B":"Cherry Hill Mortgage Investment Corporation 8.250% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","CHN":"China Fund Inc. (The)","CHNA":"Loncar China BioPharma ETF","CHNG":"Change Healthcare Inc.","CHNGU":"Change Healthcare Inc. Tangible Equity Units","CHNR":"China Natural Resources Inc.","CHRA":"Charah Solutions Inc.","CHRS":"Coherus BioSciences Inc.","CHRW":"C.H. Robinson Worldwide Inc.","CHS":"Chico's FAS Inc.","CHSCL":"CHS Inc Class B Cumulative Redeemable Preferred Stock Series 4","CHSCM":"CHS Inc Class B Reset Rate Cumulative Redeemable Preferred Stock Series 3","CHSCN":"CHS Inc Preferred Class B Series 2 Reset Rate","CHSCO":"CHS Inc Class B Cumulative Redeemable Preferred Stock","CHSCP":"CHS Inc 8%  Cumulative Redeemable Preferred Stock","CHSP":"Chesapeake Lodging Trust of Beneficial Interest","CHT":"Chunghwa Telecom Co. Ltd.","CHTR":"Charter Communications Inc.","CHU":"China Unicom (Hong Kong) Ltd","CHUY":"Chuy's Holdings Inc.","CHW":"Calamos Global Dynamic Income Fund","CHWY":"Chewy Inc. Class A","CHY":"Calamos Convertible and High Income Fund","CI":"Cigna Corporation","CIA":"Citizens Inc. Class A ($1.00 Par)","CIB":"BanColombia S.A.","CIBR":"First Trust NASDAQ CEA Cybersecurity ETF","CIC":"Capitol Investment Corp. IV Class A","CIC+":"","CIC=":"Capitol Investment Corp. IV Units each consisting of One Class A Ordinary Share and One-Third of One redeemable Warrant","CID":"Compass EMP International High Dividend 100 Volati","CIDM":"Cinedigm Corp","CIEN":"Ciena Corporation","CIF":"MFS Intermediate High Income Fund","CIFS":"China Internet Nationwide Financial Services Inc.","CIG":"Comp En De Mn Cemig ADS American Depositary Shares","CIG.C":"Comp En De Mn Cemig ADS American Depositary Receipts","CIGI":"Colliers International Group Inc.","CIH":"China Index Holdings Limited","CII":"Blackrock Capital and Income Fund Inc.","CIK":"Credit Suisse Asset Management Income Fund Inc.","CIL":"Compass EMP International 500 Volatility Weighted","CIM":"Chimera Investment Corporation","CIM-A":"Chimera Investment Corporation 8.00% Series A Cumulative Redeemable Preferred Stock","CIM-B":"Chimera Investment Corporation 8.00% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","CIM-C":"Chimera Investment Corporation 7.75% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","CIM-D":"Chimera Investment Corporation 8.00% Series D Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","CINF":"Cincinnati Financial Corporation","CINR":"Ciner Resources LP representing Limited Partner Interests","CIO":"City Office REIT Inc.","CIO-A":"City Office REIT Inc. 6.625% Series A Cumulative Redeemable Preferred Stock","CIR":"CIRCOR International Inc.","CISN":"Cision Ltd.","CIT":"CIT Group Inc (DEL)","CIVB":"Civista Bancshares Inc.","CIVBP":"Civista Bancshares Inc. Depositary Shares Each Representing a 1/40th Interest in a 6.50% Noncumulative Redeemable Convertible Perpetual Preferred Share Series B","CIX":"CompX International Inc.","CIZ":"Compass EMP International 500 Enhanced Volatility","CIZN":"Citizens Holding Company","CJ":"C&J Energy Services Inc.","CJJD":"China Jo-Jo Drugstores Inc.","CJNK":"SPDR ICE BofAML Broad High Yield Bond","CKH":"SEACOR Holdings Inc.","CKPT":"Checkpoint Therapeutics Inc.","CKX":"CKX Lands Inc.","CL":"Colgate-Palmolive Company","CLAR":"Clarus Corporation","CLB":"Core Laboratories N.V.","CLBK":"Columbia Financial Inc.","CLBS":"Caladrius Biosciences Inc.","CLCT":"Collectors Universe Inc.","CLDB":"Cortland Bancorp","CLDC":"China Lending Corporation","CLDR":"Cloudera Inc.","CLDT":"Chatham Lodging Trust (REIT) of Beneficial Interest","CLDX":"Celldex Therapeutics Inc.","CLF":"Cleveland-Cliffs Inc.","CLFD":"Clearfield Inc.","CLGN":"CollPlant Biotechnologies Ltd.","CLGX":"CoreLogic Inc.","CLH":"Clean Harbors Inc.","CLI":"Mack-Cali Realty Corporation","CLIR":"ClearSign Combustion Corporation","CLIX":"ProShares Long Online/Short Stores","CLLS":"Cellectis S.A.","CLM":"Cornerstone Strategic Value Fund Inc.","CLMT":"Calumet Specialty Products Partners L.P.","CLNC":"Colony Credit Real Estate Inc. Class A","CLNE":"Clean Energy Fuels Corp.","CLNY":"Colony Capital Inc.","CLNY-B":"Colony Capital Inc. 8.25% Series B cumulative redeemable perpetual preferred stock","CLNY-E":"Colony Capital Inc. 8.75% Series E cumulative redeemable perpetual preferred stock","CLNY-G":"Colony Capital Inc. 7.50% Series G cumulative redeemable perpetual preferred stock","CLNY-H":"Colony Capital Inc. 7.125% Series H cumulative redeemable perpetual preferred stock","CLNY-I":"Colony Capital Inc. 7.15% Series I Cumulative Redeemable Perpetual Preferred Stock","CLNY-J":"Colony Capital Inc. 7.125% Series J Cumulative Redeemable Perpetual Preferred Stock","CLOU":"Global X Cloud Computing ETF","CLPR":"Clipper Realty Inc.","CLPS":"CLPS Incorporation","CLR":"Continental Resources Inc.","CLRB":"Cellectar Biosciences Inc.","CLRBW":"Cellectar Biosciences Inc. Warrants","CLRBZ":"Cellectar Biosciences Inc. Series A Warrants","CLRG":"IQ Chaikin U.S. Large Cap ETF","CLRO":"ClearOne Inc.","CLS":"Celestica Inc.","CLSD":"Clearside Biomedical Inc.","CLSN":"Celsion Corporation","CLTL":"Invesco Treasury Collateral","CLUB":"Town Sports International Holdings Inc.","CLVS":"Clovis Oncology Inc.","CLW":"Clearwater Paper Corporation","CLWT":"Euro Tech Holdings Company Limited","CLX":"Clorox Company (The)","CLXT":"Calyxt Inc.","CM":"Canadian Imperial Bank of Commerce","CMA":"Comerica Incorporated","CMBM":"Cambium Networks Corporation","CMBS":"iShares CMBS Bond","CMC":"Commercial Metals Company","CMCL":"Caledonia Mining Corporation Plc","CMCM":"Cheetah Mobile Inc. American Depositary Shares each representing 10 Class","CMCO":"Columbus McKinnon Corporation","CMCSA":"Comcast Corporation Class A Common Stock","CMCT":"CIM Commercial Trust Corporation","CMCTP":"CIM Commercial Trust Corporation Series L Preferred Stock","CMD":"Cantel Medical Corp.","CMDY":"iShares Bloomberg Roll Select Commodity Strategy","CME":"CME Group Inc.","CMF":"iShares California Muni Bond","CMFN":"CM Finance Inc","CMFNL":"","CMG":"Chipotle Mexican Grill Inc.","CMI":"Cummins Inc.","CMLS":"Cumulus Media Inc.","CMO":"Capstead Mortgage Corporation","CMO-E":"Capstead Mortgage Corporation Pfd Ser E","CMP":"Compass Minerals Intl Inc","CMPR":"Cimpress N.V","CMRE":"Costamare Inc. $0.0001 par value","CMRE-B":"Costamare Inc. Perpetual Preferred Stock Series B (Marshall Islands)","CMRE-C":"Costamare Inc. Perpetual Preferred Series C (Marshall Islands)","CMRE-D":"Costamare Inc. 8.75% Series D Cumulative Redeemable Perpetual Preferred Stock","CMRE-E":"Costamare Inc. 8.875% Series E Cumulative Redeemable Perpetual Preferred Stock par value $0.0001","CMRX":"Chimerix Inc.","CMS":"CMS Energy Corporation","CMS-B":"CMS Energy Corporation Preferred Stock","CMSA":"CMS Energy Corporation 5.625% Junior Subordinated Notes due 2078","CMSC":"","CMSD":"CMS Energy Corporation 5.875% Junior Subordinated Notes due 2079","CMT":"Core Molding Technologies Inc","CMTL":"Comtech Telecommunications Corp.","CMU":"MFS Municipal Income Trust","CN":"Xtrackers MSCI All China Equity","CNA":"CNA Financial Corporation","CNAC":"Constellation Alpha Capital Corp.","CNACR":"Constellation Alpha Capital Corp. Right","CNACU":"Constellation Alpha Capital Corp. Unit","CNACW":"Constellation Alpha Capital Corp. Warrant","CNAT":"Conatus Pharmaceuticals Inc.","CNBKA":"Century Bancorp Inc. Class A Common Stock","CNC":"Centene Corporation","CNCE":"Concert Pharmaceuticals Inc.","CNCR":"Loncar Cancer Immunotherapy ETF","CNDT":"Conduent Incorporated","CNET":"ChinaNet Online Holdings Inc.","CNF":"CNFinance Holdings Limited American Depositary Shares each representing twenty (20)","CNFR":"Conifer Holdings Inc.","CNFRL":"","CNHI":"CNH Industrial N.V.","CNHX":"CSOP MSCI China A International Hedged","CNI":"Canadian National Railway Company","CNK":"Cinemark Holdings Inc Inc.","CNMD":"CONMED Corporation","CNNE":"Cannae Holdings Inc.","CNO":"CNO Financial Group Inc.","CNOB":"ConnectOne Bancorp Inc.","CNP":"CenterPoint Energy Inc (Holding Co)","CNP-B":"CenterPoint Energy Inc. Depositary Shares Series B","CNQ":"Canadian Natural Resources Limited","CNR":"Cornerstone Building Brands Inc.","CNRG":"SPDR S&P Kensho Clean Power","CNS":"Cohen & Steers Inc","CNSL":"Consolidated Communications Holdings Inc.","CNST":"Constellation Pharmaceuticals Inc.","CNTF":"China TechFaith Wireless Communication Technology Limited","CNTY":"Century Casinos Inc.","CNX":"CNX Resources Corporation","CNXM":"CNX Midstream Partners LP representing limited partner interests","CNXN":"PC Connection Inc.","CNXT":"VanEck Vectors ChinaAMC SME-ChNext","CNY":"Market Vectors Chinese Renminbi/USD ETN","CNYA":"iShares MSCI China A","CO":"Global Cord Blood Corporation","COCP":"Cocrystal Pharma Inc.","CODA":"Coda Octopus Group Inc.","CODI":"Compass Diversified Holdings Shares of Beneficial Interest","CODI-A":"Compass Diversified Holdings 7.250% Series A Preferred Shares representing beneficial interest in","CODI-B":"Compass Diversified Holdings 7.875% Series B Fixed-to-Floating Rate Cumulative Preferred Shares representing beneficial interests in","CODX":"Co-Diagnostics Inc.","COE":"China Online Education Group American depositary shares each representing 15 Class A","COF":"Capital One Financial Corporation","COF-C":"Capital One Financial Corp Depository Shares Representing 1/40th Int Perp Pfd Ser C%","COF-D":"Capital One Financial Corp Depository Shares Series D","COF-F":"Capital One Financial Corporation Depositary Shares Series F","COF-G":"Capital One Financial Corporation Depositary Shares Series G","COF-H":"Capital One Financial Corporation Depositary Shares Series H","COF-P":"Capital One Financial Corp Pfd Ser B","COG":"Cabot Oil & Gas Corporation","COHN":"Cohen & Company Inc.","COHR":"Coherent Inc.","COHU":"Cohu Inc.","COKE":"Coca-Cola Consolidated Inc.","COLB":"Columbia Banking System Inc.","COLD":"Americold Realty Trust","COLL":"Collegium Pharmaceutical Inc.","COLM":"Columbia Sportswear Company","COM":"Direxion Auspice Broad Commodity Strategy","COMB":"GraniteShares Bloomberg Commodity Broad Strategy No K-1","COMG":"GraniteShares S&P GSCI Commodity Broad Strategy No K-1","COMM":"CommScope Holding Company Inc.","COMT":"iShares Commodities Select Strategy ETF","CONE":"CyrusOne Inc","CONN":"Conn's Inc.","COO":"The Cooper Companies Inc.","COOP":"Mr. Cooper Group Inc.","COP":"ConocoPhillips","COPX":"Global X Copper Miners","COR":"CoreSite Realty Corporation","CORE":"Core-Mark Holding Company Inc.","CORN":"Teucrium Corn Fund ETV","CORP":"Pimco Investment Grade Corporate Bond Index Exchange-Traded Fund","CORR":"CorEnergy Infrastructure Trust Inc.","CORR-A":"CorEnergy Infrastructure Trust Inc. Depositary Shares Series A","CORT":"Corcept Therapeutics Incorporated","CORV":"Correvio Pharma Corp.","COST":"Costco Wholesale Corporation","COT":"Cott Corporation","COTY":"Coty Inc. Class A","COUP":"Coupa Software Incorporated","COW":"iPathA Series B Bloomberg Livestock Subindex Total Return ETN","COWN":"Cowen Inc.","COWNL":"","COWNZ":"Cowen Inc. 7.35% Senior Notes Due 2027","COWZ":"Pacer US Cash Cows 100","CP":"Canadian Pacific Railway Limited","CPA":"Copa Holdings S.A. Class A","CPAC":"Cementos Pacasmayo S.A.A. American Depositary Shares (Each representing five)","CPAH":"CounterPath Corporation","CPB":"Campbell Soup Company","CPE":"Callon Petroleum Company","CPE-A*":"Callon Petroleum Company Preferred Shares Series A 10%","CPER":"United States Copper Index Fund ETV","CPF":"Central Pacific Financial Corp New","CPG":"Crescent Point Energy Corporation (Canada)","CPHC":"Canterbury Park Holding Corporation","CPHI":"China Pharma Holdings Inc.","CPI":"IQ Real Return","CPIX":"Cumberland Pharmaceuticals Inc.","CPK":"Chesapeake Utilities Corporation","CPL":"CPFL Energia S.A. American Depositary Shares","CPLG":"CorePoint Lodging Inc.","CPLP":"Capital Product Partners L.P.","CPRI":"Capri Holdings Limited","CPRT":"Copart Inc.","CPRX":"Catalyst Pharmaceuticals Inc.","CPS":"Cooper-Standard Holdings Inc.","CPSH":"CPS Technologies Corp.","CPSI":"Computer Programs and Systems Inc.","CPSS":"Consumer Portfolio Services Inc.","CPST":"Capstone Turbine Corporation","CPT":"Camden Property Trust","CPTA":"Capitala Finance Corp.","CPTAG":"Capitala Finance Corp. 5.75% Convertible Notes Due 2022","CPTAL":"Capitala Finance Corp. 6% Notes Due 2022","CQP":"Cheniere Energy Partners LP","CQQQ":"Invesco China Technology","CR":"Crane Co.","CRAI":"CRA InternationalInc.","CRAK":"VanEck Vectors Oil Refiners","CRAY":"Cray Inc","CRBN":"iShares MSCI ACWI Low Carbon Target","CRBP":"Corbus Pharmaceuticals Holdings Inc.","CRC":"California Resources Corporation","CRCM":"Care.com Inc.","CRD.A":"Crawford & Company","CRD.B":"Crawford & Company","CREE":"Cree Inc.","CREG":"China Recycling Energy Corporation","CRESY":"Cresud S.A.C.I.F. y A. American Depositary Shares each representing ten shares of Common Stock","CREX":"Creative Realities Inc.","CREXW":"Creative Realities Inc. Warrant","CRF":"Cornerstone Total Return Fund Inc. (The)","CRH":"CRH PLC American Depositary Shares","CRHM":"CRH Medical Corporation of Beneficial Interest","CRI":"Carter's Inc.","CRIS":"Curis Inc.","CRK":"Comstock Resources Inc.","CRL":"Charles River Laboratories International Inc.","CRM":"Salesforce.com Inc","CRMD":"CorMedix Inc.","CRMT":"America's Car-Mart Inc.","CRNT":"Ceragon Networks Ltd.","CRNX":"Crinetics Pharmaceuticals Inc.","CROC":"ProShares UltraShort Australian Dollar","CRON":"Cronos Group Inc.","CROP":"IQ Global Agribusiness Small Cap","CROX":"Crocs Inc.","CRR":"Carbo Ceramics Inc.","CRS":"Carpenter Technology Corporation","CRSA":"Crescent Acquisition Corp","CRSAU":"Crescent Acquisition Corp Unit","CRSAW":"Crescent Acquisition Corp Warrant","CRSP":"CRISPR Therapeutics AG","CRT":"Cross Timbers Royalty Trust","CRTO":"Criteo S.A.","CRTX":"Cortexyme Inc.","CRUS":"Cirrus Logic Inc.","CRUSC":"Calvert Ultra-Short Duration Income NextShares","CRVL":"CorVel Corp.","CRVS":"Corvus Pharmaceuticals Inc.","CRWD":"CrowdStrike Holdings Inc.","CRWS":"Crown Crafts Inc.","CRY":"CryoLife Inc.","CRZO":"Carrizo Oil & Gas Inc.","CS":"Credit Suisse Group American Depositary Shares","CSA":"Compass EMP US Small Cap 500 Volatility Weighted I","CSB":"Compass EMP US Small Cap High Dividend 100 Volatil","CSBR":"Champions Oncology Inc.","CSCO":"Cisco Systems Inc.","CSD":"Invesco S&P Spin-Off","CSF":"Compass EMP U.S. Discovery 500 Enhanced Volatility","CSFL":"CenterState Bank Corporation","CSGP":"CoStar Group Inc.","CSGS":"CSG Systems International Inc.","CSII":"Cardiovascular Systems Inc.","CSIQ":"Canadian Solar Inc.","CSL":"Carlisle Companies Incorporated","CSLT":"Castlight Health Inc. Class B","CSM":"ProShares Large Cap Core Plus","CSML":"IQ Chaikin U.S. Small Cap ETF","CSOD":"Cornerstone OnDemand Inc.","CSPI":"CSP Inc.","CSQ":"Calamos Strategic Total Return Fund","CSS":"CSS Industries Inc.","CSSE":"Chicken Soup for the Soul Entertainment Inc.","CSSEP":"Chicken Soup for the Soul Entertainment Inc. 9.75% Series A Cumulative Redeemable Perpetual Preferred Stock","CSTE":"Caesarstone Ltd.","CSTM":"Constellium SE","CSTR":"CapStar Financial Holdings Inc.","CSU":"Capital Senior Living Corporation","CSV":"Carriage Services Inc.","CSWC":"Capital Southwest Corporation","CSWCL":"Capital Southwest Corporation 5.95% Notes due 2022","CSWI":"CSW Industrials Inc.","CSX":"CSX Corporation","CTA-A":"E.I. du Pont de Nemours and Company Preferred Stock","CTA-B":"E.I. du Pont de Nemours and Company Preferred Stock","CTAA":"","CTAC":"ChaSerg Technology Acquisition Corp.","CTACU":"ChaSerg Technology Acquisition Corp. Unit","CTACW":"ChaSerg Technology Acquisition Corp. Warrant","CTAS":"Cintas Corporation","CTB":"Cooper Tire & Rubber Company","CTBB":"Qwest Corporation 6.5% Notes due 2056","CTBI":"Community Trust Bancorp Inc.","CTDD":"Qwest Corporation 6.75% Notes due 2057","CTEK":"CynergisTek Inc.","CTG":"Computer Task Group Incorporated","CTHR":"Charles & Colvard Ltd.","CTIB":"CTI Industries Corporation","CTIC":"CTI BioPharma Corp.","CTK":"CooTek (Cayman) Inc. American Depositary Shares each representing 50 Class A","CTL":"CenturyLink Inc.","CTLT":"Catalent Inc.","CTMX":"CytomX Therapeutics Inc.","CTO":"Consolidated-Tomoka Land Co.","CTR":"ClearBridge MLP and Midstream Total Return Fund Inc.","CTRA":"Contura Energy Inc.","CTRC":"Centric Brands Inc.","CTRE":"CareTrust REIT Inc.","CTRL":"Control4 Corporation","CTRM":"Castor Maritime Inc.","CTRN":"Citi Trends Inc.","CTRP":"Ctrip.com International Ltd.","CTRV":"ContraVir Pharmaceuticals Inc.","CTS":"CTS Corporation","CTSH":"Cognizant Technology Solutions Corporation","CTSO":"CytoSorbents Corporation","CTST":"CannTrust Holdings Inc.","CTT":"CatchMark Timber Trust Inc. Class A","CTV":"","CTVA":"Corteva Inc.","CTWS":"Connecticut Water Service Inc.","CTXR":"Citius Pharmaceuticals Inc.","CTXRW":"Citius Pharmaceuticals Inc. Warrant","CTXS":"Citrix Systems Inc.","CTY":"Qwest Corporation 6.125% Notes due 2053","CTZ":"","CUB":"Cubic Corporation","CUBA":"The Herzfeld Caribbean Basin Fund Inc.","CUBE":"CubeSmart","CUBI":"Customers Bancorp Inc","CUBI-C":"Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series C","CUBI-D":"Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D","CUBI-E":"Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series E","CUBI-F":"Customers Bancorp Inc Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series F","CUE":"Cue Biopharma Inc.","CUI":"CUI Global Inc.","CUK":"Carnival Plc ADS ADS","CULP":"Culp Inc.","CUO":"Continental Materials Corporation","CUR":"Neuralstem Inc.","CURE":"Direxion Daily Healthcare Bull 3X Shares","CURO":"CURO Group Holdings Corp.","CUT":"Invesco MSCI Global Timber","CUTR":"Cutera Inc.","CUZ":"Cousins Properties Incorporated","CVA":"Covanta Holding Corporation","CVBF":"CVB Financial Corporation","CVCO":"Cavco Industries Inc.","CVCY":"Central Valley Community Bancorp","CVE":"Cenovus Energy Inc","CVEO":"Civeo Corporation (Canada)","CVET":"Covetrus Inc.","CVGI":"Commercial Vehicle Group Inc.","CVGW":"Calavo Growers Inc.","CVI":"CVR Energy Inc.","CVIA":"Covia Holdings Corporation","CVLT":"Commvault Systems Inc.","CVLY":"Codorus Valley Bancorp Inc","CVM":"Cel-Sci Corporation","CVNA":"Carvana Co. Class A","CVR":"Chicago Rivet & Machine Co.","CVRS":"Corindus Vascular Robotics Inc. (DE)","CVS":"CVS Health Corporation","CVTI":"Covenant Transportation Group Inc.","CVU":"CPI Aerostructures Inc.","CVV":"CVD Equipment Corporation","CVX":"Chevron Corporation","CVY":"Invesco Zacks Multi-Asset Income","CW":"Curtiss-Wright Corporation","CWAI":"CWA Income","CWB":"SPDR Bloomberg Barclays Convertible Securities","CWBC":"Community West Bancshares","CWBR":"CohBar Inc.","CWCO":"Consolidated Water Co. Ltd.","CWEB":"Direxion Daily CSI China Internet Index Bull 2X Shares","CWEN":"Clearway Energy Inc. Class C","CWEN.A":"Clearway Energy Inc. Class A","CWH":"Camping World Holdings Inc. Class A Commom Stock","CWI":"SPDR MSCI ACWI ex-US","CWK":"Cushman & Wakefield plc","CWS":"AdvisorShares Focused Equity","CWST":"Casella Waste Systems Inc.","CWT":"California Water Service Group","CX":"Cemex S.A.B. de C.V. Sponsored ADR","CXDC":"China XD Plastics Company Limited","CXE":"MFS High Income Municipal Trust","CXH":"MFS Investment Grade Municipal Trust","CXO":"Concho Resources Inc.","CXP":"Columbia Property Trust Inc.","CXSE":"WisdomTree China Dividend Ex-Financials Fund","CXW":"CoreCivic Inc.","CY":"Cypress Semiconductor Corporation","CYAD":"Celyad SA","CYAN":"Cyanotech Corporation","CYB":"WisdomTree Chinese Yuan Strategy Fund","CYBE":"CyberOptics Corporation","CYBR":"CyberArk Software Ltd.","CYCC":"Cyclacel Pharmaceuticals Inc.","CYCCP":"Cyclacel Pharmaceuticals Inc. 6% Convertible Preferred Stock","CYCN":"Cyclerion Therapeutics Inc.","CYD":"China Yuchai International Limited","CYH":"Community Health Systems Inc.","CYOU":"Changyou.com Limited","CYRN":"CYREN Ltd.","CYRX":"CryoPort Inc.","CYRXW":"","CYTK":"Cytokinetics Incorporated","CYTX":"Cytori Therapeutics Inc.","CYTXZ":"Cytori Therapeutics Inc. Series S Warrant","CZA":"Invesco Zacks Mid-Cap","CZNC":"Citizens & Northern Corp","CZR":"Caesars Entertainment Corporation","CZWI":"Citizens Community Bancorp Inc.","CZZ":"Cosan Limited Class A","D":"Dominion Energy Inc.","DAC":"Danaos Corporation","DAIO":"Data I/O Corporation","DAKT":"Daktronics Inc.","DAL":"Delta Air Lines Inc.","DALI":"First Trust DorseyWright DALI 1 ETF","DALT":"Anfield Capital Diversified Alternatives ETF","DAN":"Dana Incorporated","DAR":"Darling Ingredients Inc.","DARE":"Dare Bioscience Inc.","DATA":"Tableau Software Inc. Class A","DAUD":"ETNs linked to the VelocityShares Daily 4X Long USD vs. AUD Index","DAVA":"Endava plc American Depositary Shares (each representing one Class A)","DAVE":"Famous Dave's of America Inc.","DAX":"Global X DAX Germany ETF","DB":"Deutsche Bank AG","DBA":"Invesco DB Agriculture Fund","DBAW":"Xtrackers MSCI All World ex US Hedged Equity","DBB":"Invesco DB Base Metals Fund","DBC":"Invesco DB Commodity Index Tracking Fund","DBD":"Diebold Nixdorf Incorporated","DBE":"Invesco DB Energy Fund","DBEF":"Xtrackers MSCI EAFE Hedged Equity","DBEM":"Xtrackers MSCI Emerging Markets Hedged Equity","DBEU":"Xtrackers MSCI Europe Hedged Equity","DBEZ":"Xtrackers MSCI Eurozone Hedged Equity","DBGR":"Xtrackers MSCI Germany Hedged Equity","DBI":"Designer Brands Inc. Class A","DBJP":"Xtrackers MSCI Japan Hedged Equity","DBKO":"Xtrackers MSCI South Korea Hedged Equity","DBL":"DoubleLine Opportunistic Credit Fund of Beneficial Interest","DBLV":"AdvisorShares DoubleLine Value Equity","DBMF":"iM DBi Managed Futures Strategy ETF","DBO":"Invesco DB Oil Fund","DBP":"Invesco DB Precious Metals Fund","DBS":"Invesco DB Silver Fund","DBV":"Invesco DB G10 Currency Harvest Fund","DBVT":"DBV Technologies S.A.","DBX":"Dropbox Inc","DCAR":"DropCar Inc.","DCF":"BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund Inc.","DCHF":"ETNs linked to the VelocityShares Daily 4X Long USD vs. CHF Index","DCI":"Donaldson Company Inc.","DCIX":"Performance Shipping Inc.","DCO":"Ducommun Incorporated","DCOM":"Dime Community Bancshares Inc.","DCP":"DCP Midstream LP","DCP-B":"DCP Midstream LP 7.875% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","DCP-C":"DCP Midstream LP 7.95% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","DCPH":"Deciphera Pharmaceuticals Inc.","DCUD":"Dominion Energy Inc. 2016 Series A Corporate Units","DCUE":"Dominion Energy Inc. 2019 Series A Corporate Units","DD":"DuPont de Nemours Inc.","DDD":"3D Systems Corporation","DDF":"Delaware Investments Dividend & Income Fund Inc.","DDG":"ProShares Short Oil & Gas","DDIV":"First Trust RBA Quality Income ETF","DDLS":"WisdomTree Dynamic Currency Hedged International SmallCap Equity Fund","DDM":"ProShares Ultra Dow30","DDMX":"DD3 Acquisition Corp.","DDMXU":"DD3 Acquisition Corp. Units","DDMXW":"DD3 Acquisition Corp. Warrants","DDS":"Dillard's Inc.","DDT":"Dillard's Capital Trust I","DDWM":"WisdomTree Dynamic Currency Hedged International Equity Fund","DE":"Deere & Company","DEA":"Easterly Government Properties Inc.","DEAC":"Diamond Eagle Acquisition Corp.","DEACU":"Diamond Eagle Acquisition Corp. Unit","DEACW":"Diamond Eagle Acquisition Corp. Warrant","DECK":"Deckers Outdoor Corporation","DEEF":"Xtrackers FTSE Developed ex US Comprehensive Factor","DEF":"Invesco Defensive Equity","DEFA":"iShares Adaptive Currency Hedged MSCI EAFE","DEI":"Douglas Emmett Inc.","DELL":"Dell Technologies Inc. Class C","DEM":"WisdomTree Emerging Markets High Dividend Fund","DEMG":"Xtrackers FTSE Emerging Comprehensive Factor","DENN":"Denny's Corporation","DEO":"Diageo plc","DERM":"Dermira Inc.","DES":"WisdomTree U.S. SmallCap Dividend Fund","DESC":"Xtrackers Russell 2000 Comprehensive Factor","DESP":"Despegar.com Corp.","DEST":"Destination Maternity Corporation","DEUR":"ETNs linked to the VelocityShares Daily 4X Long USD vs. EUR Index","DEUS":"Xtrackers Russell 1000 Comprehensive Factor","DEW":"WisdomTree Global High Dividend Fund","DEWJ":"iShares Adaptive Currency Hedged MSCI Japan","DEX":"Delaware Enhanced Global Dividend of Beneficial Interest","DEZU":"iShares Adaptive Currency Hedged MSCI Eurozone","DF":"Dean Foods Company","DFBH":"DFB Healthcare Acquisitions Corp.","DFBHU":"DFB Healthcare Acquisitions Corp. Unit","DFBHW":"DFB Healthcare Acquisitions Corp. Warrant","DFE":"WisdomTree Europe SmallCap Dividend Fund","DFEN":"Direxion Daily Aerospace & Defense Bull 3X Shares","DFFN":"Diffusion Pharmaceuticals Inc.","DFIN":"Donnelley Financial Solutions Inc.","DFJ":"WisdomTree Japan SmallCap Fund","DFND":"Realty Shares DIVCON Dividend Defender","DFNL":"Davis Select Financial ETF","DFP":"Flaherty & Crumrine Dynamic Preferred and Income Fund Inc.","DFRG":"Del Frisco's Restaurant Group Inc.","DFS":"Discover Financial Services","DFVL":"iPath US Treasury 5 Year Bull ETN","DFVS":"iPath US Treasury 5 Year Bear ETN","DG":"Dollar General Corporation","DGAZ":"VelocityShares 3X Inverse Natural Gas ETN linked to the S&P GSCI Natural Gas INdex Excess Return","DGBP":"ETNs linked to the VelocityShares Daily 4X Long USD vs. GBP Index","DGICA":"Donegal Group Inc. Class A Common Stock","DGICB":"Donegal Group Inc. Class B Common Stock","DGII":"Digi International Inc.","DGL":"Invesco DB Gold Fund","DGLD":"VelocityShares 3x Inverse Gold ETN","DGLY":"Digital Ally Inc.","DGP":"DB Gold Double Long ETN due February 15 2038","DGRE":"WisdomTree Emerging Markets Dividend Growth Fund","DGRO":"iShares Core Dividend Growth","DGRS":"WisdomTree U.S. SmallCap Dividend Growth Fund","DGRW":"WisdomTree U.S. Dividend Growth Fund","DGS":"WisdomTree Emerging Market SmallCap Fund","DGSE":"DGSE Companies Inc.","DGT":"SPDR Global Dow ETF (based on The Global Dow)","DGX":"Quest Diagnostics Incorporated","DGZ":"DB Gold Short ETN due February 15 2038","DHDG":"WisdomTree Dynamic Currency Hedged International Quality Dividend Growth Fund","DHF":"BNY Mellon High Yield Strategies Fund","DHI":"D.R. Horton Inc.","DHIL":"Diamond Hill Investment Group Inc.","DHR":"Danaher Corporation","DHR-A":"Danaher Corporation 4.75% Mandatory Convertible Preferred Stock Series A","DHS":"WisdomTree U.S. High Dividend Fund","DHT":"DHT Holdings Inc.","DHX":"DHI Group Inc.","DHXM":"DHX Media Ltd.","DHY":"Credit Suisse High Yield Bond Fund","DIA":"SPDR Dow Jones Industrial Average","DIAL":"Columbia Diversified Fixed Income Allocation","DIAX":"Nuveen Dow 30SM Dynamic Overwrite Fund of Beneficial Interest","DIG":"ProShares Ultra Oil & Gas","DIM":"WisdomTree International MidCap Dividend Fund","DIN":"Dine Brands Global Inc.","DINT":"Davis Select International ETF","DIOD":"Diodes Incorporated","DIS":"The Walt Disney Company","DISCA":"Discovery Inc. Series A Common Stock","DISCB":"Discovery Inc. Series B Common Stock","DISCK":"Discovery Inc.","DISH":"DISH Network Corporation","DIT":"AMCON Distributing Company","DIV":"Global X Super Dividend","DIVA":"AGFiQ Hedged Dividend Income Fund","DIVB":"iShares U.S. Dividend and Buyback","DIVC":"Citigroup Inc. C-Tracks ETN Miller/Howard Strategic Dividend Reinvestors Due 9/16/2014","DIVO":"Amplify CWP Enhanced Dividend Income","DIVY":"Realty Shares DIVS","DJCI":"E-TRACS Linked to the Bloomberg Commodity Index Total Return due October 31 2039","DJCO":"Daily Journal Corp. (S.C.)","DJD":"Invesco Dow Jones Industrial Average Dividend","DJP":"iPath Bloomberg Commodity Index Total Return ETN","DJPY":"ETNs linked to the VelocityShares Daily 4X Long USD vs. JPY Index","DK":"Delek US Holdings Inc.","DKL":"Delek Logistics Partners L.P. representing Limited Partner Interests","DKS":"Dick's Sporting Goods Inc","DKT":"Deutsch Bk Contingent Cap Tr V Tr Pfd Secs","DL":"China Distance Education Holdings Limited American Depositary Shares","DLA":"Delta Apparel Inc.","DLB":"Dolby Laboratories","DLBR":"Citigroup Global Markets Holdings Inc VelocityShares Short LIBOR ETN","DLBS":"iPath US Treasury Long Bond Bear ETN","DLHC":"DLH Holdings Corp.","DLN":"WisdomTree U.S. LargeCap Dividend Fund","DLNG":"Dynagas LNG Partners LP","DLNG-A":"Dynagas LNG Partners LP 9.00% Series A Cumulative Redeemable Preferred Units","DLNG-B":"Dynagas LNG Partners LP 8.75% Series B Fixed to Floating Rate Cumulative Redeemable Perpetual Preferred Units liquidation preference $25.00 per Uni","DLPH":"Delphi Technologies PLC","DLPN":"Dolphin Entertainment Inc.","DLPNW":"Dolphin Entertainment Inc. Warrant","DLR":"Digital Realty Trust Inc.","DLR-C":"Digital Realty Trust Inc. 6.625% Series C Cumulative Redeemable Perpetual Preferred Stock","DLR-G":"Digital Realty Trust Inc. Preferred Series G","DLR-I":"Digital Realty Trust Inc. 6.350% Series I Cumulative Redeemable Preferred Stock par value $0.01 per share","DLR-J":"Digital Realty Trust Inc. 5.250% Series J Cumulative Redeemable Preferred Stock","DLR-K":"Digital Realty Trust Inc. 5.850% Series K Cumulative Redeemable Preferred Stock par value $0.01 per share","DLS":"WisdomTree International SmallCap Fund","DLTH":"Duluth Holdings Inc.","DLTR":"Dollar Tree Inc.","DLX":"Deluxe Corporation","DMAC":"DiaMedica Therapeutics Inc.","DMB":"BNY Mellon Municipal Bond Infrastructure Fund Inc.","DMDV":"AAM S&P Developed Markets High Dividend Value","DMF":"BNY Mellon Municipal Income Inc.","DMLP":"Dorchester Minerals L.P.","DMO":"Western Asset Mortgage Defined Opportunity Fund Inc","DMPI":"DelMar Pharmaceuticals Inc.","DMRC":"Digimarc Corporation","DMRE":"DeltaShares S&P EM 100 & Managed Risk","DMRI":"DeltaShares S&P International Managed Risk","DMRL":"DeltaShares S&P 500 Managed Risk","DMRM":"DeltaShares S&P 400 Managed Risk","DMRS":"DeltaShares S&P 600 Managed Risk","DNBF":"DNB Financial Corp","DNI":"Dividend and Income Fund","DNJR":"Golden Bull Limited","DNKN":"Dunkin' Brands Group Inc.","DNL":"WisdomTree Global ex-US Quality Dividend Growth Fund","DNLI":"Denali Therapeutics Inc.","DNN":"Denison Mines Corp (Canada)","DNOW":"NOW Inc.","DNP":"DNP Select Income Fund Inc.","DNR":"Denbury Resources Inc.","DO":"Diamond Offshore Drilling Inc.","DOC":"Physicians Realty Trust of Beneficial Interest","DOCU":"DocuSign Inc.","DOG":"ProShares Short Dow30","DOGS":"Arrow Dogs of the World","DOGZ":"Dogness (International) Corporation","DOL":"WisdomTree International LargeCap Dividend Fund","DOMO":"Domo Inc.","DON":"WisdomTree U.S. MidCap Dividend Fund","DOO":"WisdomTree International Dividend Top 100 Fund","DOOO":"BRP Inc.","DOOR":"Masonite International Corporation (Canada)","DORM":"Dorman Products Inc.","DOV":"Dover Corporation","DOVA":"Dova Pharmaceuticals Inc.","DOW":"Dow Inc.","DOX":"Amdocs Limited","DPG":"Duff & Phelps Global Utility Income Fund Inc.","DPHC":"DiamondPeak Holdings Corp.","DPHCU":"DiamondPeak Holdings Corp. Units","DPHCW":"DiamondPeak Holdings Corp. Warrant","DPK":"Direxion Developed Markets Bear 3x Shares","DPLO":"Diplomat Pharmacy Inc.","DPST":"Direxion Daily Regional Banks Bull 3X Shares","DPW":"DPW Holdings Inc.","DPZ":"Domino's Pizza Inc","DQ":"DAQO New Energy Corp. American Depositary Shares each representing five","DQML":"Reality Shares Fundstrat DQM Long","DRAD":"Digirad Corporation","DRD":"DRDGOLD Limited American Depositary Shares","DRE":"Duke Realty Corporation","DRH":"Diamondrock Hospitality Company","DRI":"Darden Restaurants Inc.","DRIO":"DarioHealth Corp.","DRIOW":"","DRIP":"Direxion Daily S&P Oil & Gas Exp. & Prod. Bear 3X Shares","DRIV":"Global X Autonomous & Electric Vehicles ETF","DRN":"Direxion Daily Real Estate Bull 3x Shares","DRNA":"Dicerna Pharmaceuticals Inc.","DRQ":"Dril-Quip Inc.","DRR":"Market Vectors Double Short Euro ETN","DRRX":"DURECT Corporation","DRSK":"Aptus Defined Risk","DRUA":"Dominion Energy Inc. 2016 Series A 5.25% Enhanced Junior Subordinated Notes due 2076","DRV":"Drexion Daily Real Estate Bear 3x Shares","DRW":"WisdomTree Global ex-US Real Estate Index","DRYS":"DryShips Inc.","DS":"Drive Shack Inc.","DS-B":"Drive Shack Inc. Preferred Series B","DS-C":"Drive Shack Inc. Preferred Series C","DS-D":"Drive Shack Inc. Pfd Ser D","DSE":"Duff & Phelps Select MLP and Midstream Energy Fund Inc.","DSGX":"The Descartes Systems Group Inc.","DSI":"iShares MSCI KLD 400 Social","DSKE":"Daseke Inc.","DSKEW":"","DSL":"DoubleLine Income Solutions Fund of Beneficial Interests","DSLV":"VelocityShares 3x Inverse Silver ETN","DSM":"BNY Mellon Strategic Municipal Bond Fund Inc.","DSPG":"DSP Group Inc.","DSS":"Document Security Systems Inc.","DSSI":"Diamond S Shipping Inc.","DSTL":"Distillate U.S. Fundamental Stability & Value","DSU":"Blackrock Debt Strategies Fund Inc.","DSWL":"Deswell Industries Inc.","DSX":"Diana Shipping inc.","DSX-B":"Diana Shipping Inc. Perpetual Preferred Shares Series B (Marshall Islands)","DTD":"WisdomTree U.S. Total Dividend Fund","DTE":"DTE Energy Company","DTEA":"DAVIDsTEA Inc.","DTEC":"ALPS ETF Trust Disruptive Technologies","DTF":"DTF Tax-Free Income Inc.","DTH":"WisdomTree International High Dividend Fund","DTIL":"Precision BioSciences Inc.","DTJ":"DTE Energy Company 2016 Series B 5.375% Junior Subordinated Debentures due 2076","DTLA-":"","DTN":"WisdomTree U.S. Dividend ex-Financials Fund","DTO":"DB Crude Oil Double Short ETN due June 1 2038","DTQ":"DTE Energy Company 2012 Series C 5.25% Junior Subordinate Debentures due December 1 2062","DTSS":"Datasea Inc.","DTUL":"iPath US Treasury 2 Yr Bull ETN","DTUS":"iPath US Treasury 2 Yr Bear ETN","DTV":"DTE Energy Company 2016 Corporate Units","DTW":"DTE Energy Company 2017 Series E 5.25% Junior Subordinated Debentures due 2077","DTY":"DTE Energy Company 2016 Series F 6.00% Junior Subordinated Debentures due 2076","DTYL":"iPath US Treasury 10 Yr Bull ETN","DTYS":"iPath US Treasury 10 Yr Bear ETN","DUC":"Duff & Phelps Utility & Corporate Bond Trust Inc.","DUG":"ProShares UltraShort Oil & Gas","DUK":"Duke Energy Corporation (Holding Company)","DUK-A":"Duke Energy Corporation Depositary Shares Series A","DUKB":"Duke Energy Corporation 5.625% Junior Subordinated Debentures due 2078","DUKH":"Duke Energy Corporation 5.125% Junior Subordinated Debentures due 2073","DURA":"VanEck Vectors Morningstar Durable Dividend","DUSA":"Davis Select U.S. Equity ETF","DUSL":"Direxion Daily Industrials Bull 3X Shares","DUST":"Direxion Daily Gold Miners Index Bear 3X Shares","DVA":"DaVita Inc.","DVAX":"Dynavax Technologies Corporation","DVCR":"Diversicare Healthcare Services Inc.","DVD":"Dover Motorsports Inc.","DVEM":"WisdomTree Emerging Markets Dividend Fund","DVHL":"ETRACS 2xLeveraged Diversified High Income ETN","DVLU":"First Trust Dorsey Wright Momentum & Value ETF","DVN":"Devon Energy Corporation","DVOL":"First Trust Dorsey Wright Momentum & Low Volatilit","DVP":"Deep Value","DVY":"iShares Select Dividend ETF","DVYA":"iShares Asia / Pacific Dividend 30 Index Fund Exchange Traded Fund","DVYE":"iShares Emerging Markets Dividend Index Fund Exchange Traded Fund","DVYL":"ETRACS Monthly Pay 2x Leveraged Dow Jones Select Dividend Index ETN","DWAQ":"Invesco DWA NASDAQ Momentum ETF","DWAS":"Invesco DWA SmallCap Momentum ETF","DWAT":"Arrow DWA Tactical ETF","DWCR":"Arrow DWA Country Rotation ETF","DWFI":"SPDR Dorsey Wright Fixed Income Allocation ETF","DWIN":"Invesco DWA Tactical Multi-Asset Income ETF","DWLD":"Davis Select Worldwide ETF","DWM":"WisdomTree International Equity Fund","DWMC":"AdvisorShares Dorsey Wright Micro-Cap ETF","DWMF":"WisdomTree International Multifactor Fund","DWPP":"First Trust Dorsey Wright People's Portfolio ETF","DWSH":"AdvisorShares Dorsey Wright Short ETF","DWSN":"Dawson Geophysical Company","DWT":"VelocityShares 3x Inverse Crude Oil ETNs linked to the S&P GSCI Crude Oil Index ER","DWTR":"PowerShares DWA Tactical Sector Rotation Portfolio","DWX":"SPDR S&P International Dividend","DX":"Dynex Capital Inc.","DX-A":"Dynex Capital Inc. Preferred Stock Series A","DX-B":"Dynex Capital Inc. Preferred Series B","DXB":"Deutsche Bk Contingent Cap TR II Tr Pfd Sec","DXC":"DXC Technology Company","DXCM":"DexCom Inc.","DXD":"ProShares UltraShort Dow30","DXF":"Dunxin Financial Holdings Limited American Depositary Shares","DXGE":"WisdomTree Germany Hedged Equity Fund","DXJ":"WisdomTree Japan Hedged Equity Fund","DXJS":"WisdomTree Japan Hedged SmallCap Equity Fund","DXLG":"Destination XL Group Inc.","DXPE":"DXP Enterprises Inc.","DXR":"Daxor Corporation","DXYN":"The Dixie Group Inc.","DY":"Dycom Industries Inc.","DYAI":"Dyadic International Inc.","DYB":"WisdomTree Dynamic Bearish U.S. Equity Fund","DYLS":"WisdomTree Dynamic Long/Short U.S. Equity Fund","DYNF":"BlackRock U.S. Equity Factor Rotation","DYNT":"Dynatronics Corporation","DYSL":"Dynasil Corporation of America","DZK":"Direxion Developed Markets Bull 3x Shares","DZSI":"DASAN Zhone Solutions Inc.","DZZ":"DB Gold Double Short ETN due February 15 2038","E":"ENI S.p.A.","EA":"Electronic Arts Inc.","EAB":"Entergy Arkansas LLC First Mortgage Bonds 4.90% Series Due December 1 2052","EAD":"Wells Fargo Income Opportunities Fund","EAE":"Entergy Arkansas LLC First Mortgage Bonds 4.75% Series due June 1 2063","EAF":"GrafTech International Ltd.","EAGG":"iShares ESG U.S. Aggregate Bond","EAI":"Entergy Arkansas LLC First Mortgage Bonds 4.875% Series Due September 1 2066","EARN":"Ellington Residential Mortgage REIT of Beneficial Interest","EARS":"Auris Medical Holding Ltd.","EASG":"Xtrackers MSCI EAFE ESG Leaders Equity","EASI":"Amplify ETF Trust","EAST":"Eastside Distilling Inc.","EAT":"Brinker International Inc.","EB":"Eventbrite Inc. Class A","EBAY":"eBay Inc.","EBAYL":"eBay Inc. 6.0% Notes Due 2056","EBF":"Ennis Inc.","EBIX":"Ebix Inc.","EBIZ":"Global X E-Commerce ETF","EBMT":"Eagle Bancorp Montana Inc.","EBND":"SPDR Bloomberg Barclays Emerging Markets Local Bond","EBR":"Centrais Electricas Brasileiras S A American Depositary Shares (Each representing one)","EBR.B":"Centrais Electricas Brasileiras S.A.- Eletrobr?!s American Depositary Shares (Each representing one Preferred Share)","EBS":"Emergent Biosolutions Inc.","EBSB":"Meridian Bancorp Inc.","EBTC":"Enterprise Bancorp Inc","EC":"Ecopetrol S.A. American Depositary Shares","ECA":"Encana Corporation","ECC":"Eagle Point Credit Company Inc.","ECCA":"Eagle Point Credit Company Inc. Series A Term Preferred Stock due 2022","ECCB":"Eagle Point Credit Company Inc. 7.75% Series B Term Preferred Stock due 2026","ECCX":"Eagle Point Credit Company Inc. 6.6875% Notes due 2028","ECCY":"Eagle Point Credit Company Inc. 6.75% Notes due 2027","ECF":"Ellsworth Growth and Income Fund Ltd.","ECF-A":"Ellsworth Growth and Income Fund Ltd. 5.25% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)","ECH":"iShares Inc. MSCI Chile","ECHO":"Echo Global Logistics Inc.","ECL":"Ecolab Inc.","ECNS":"iShares MSCI China Small-Cap","ECOL":"US Ecology Inc.","ECOM":"ChannelAdvisor Corporation","ECON":"Columbia Emerging Markets Consumer","ECOR":"electroCore Inc.","ECOW":"Pacer Emerging Markets Cash Cows 100 ETF","ECPG":"Encore Capital Group Inc","ECT":"ECA Marcellus Trust I of Beneficial Interest","ED":"Consolidated Edison Inc.","EDAP":"EDAP TMS S.A.","EDC":"Direxion Emerging Markets Bull 3X Shares","EDD":"Morgan Stanley Emerging Markets Domestic Debt Fund Inc.","EDEN":"iShares Inc MSCI Denmark","EDF":"Stone Harbor Emerging Markets Income Fund of Beneficial Interest","EDI":"Stone Harbor Emerging Markets Total Income Fund of Beneficial Interests","EDIT":"Editas Medicine Inc.","EDIV":"SPDR S&P Emerging Markets Dividend","EDN":"Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) Empresa Distribuidora Y Comercializadora Norte S.A. (Edenor) American Depositary Shares","EDNT":"Edison Nation Inc.","EDOG":"ALPS Emerging Sector Dividend Dogs","EDOW":"First Trust Dow 30 Equal Weight","EDRY":"EuroDry Ltd.","EDSA":"Edesa Biotech Inc.","EDTX":"EdtechX Holdings Acquisition Corp.","EDTXU":"EdtechX Holdings Acquisition Corp. Unit","EDTXW":"EdtechX Holdings Acquisition Corp. Warrant","EDU":"New Oriental Education & Technology Group Inc. Sponsored ADR representing 1 (Cayman Islands)","EDUC":"Educational Development Corporation","EDV":"Vanguard Extended Duration Treasury","EDZ":"Direxion Emerging Markets Bear 3X Shares","EE":"El Pasoectric Company","EEA":"The European Equity Fund Inc.","EEB":"Invesco BRIC","EEFT":"Euronet Worldwide Inc.","EEH":"Aktiebolaget Svensk Exportkredit (Swed Ex Cred Corp) Elements (SM) Linked to the SPECTRUM Large Cap U.S. Sector Momentum Index developed by BNP Paribas due Augu","EEI":"Ecology and Environment Inc.","EELV":"Invesco S&P Emerging Markets Low Volatility","EEM":"iShares MSCI Emerging Index Fund","EEMA":"iShares MSCI Emerging Markets Asia Index Fund","EEMD":"AAM S&P Emerging Markets High Dividend Value","EEMO":"Invesco S&P Emerging Markets Momentum","EEMS":"Ishares MSCI Emerging Markets Small Cap Index Fund","EEMV":"iShares Edge MSCI Min Vol Emerging Markets","EEMX":"SPDR MSCI Emerging Markets Fuel Reserves Free","EES":"WisdomTree U.S. SmallCap Fund","EET":"ProShares Ultra MSCI Emerging Markets","EEV":"ProShares UltraShort MSCI Emerging Markets","EEX":"Emerald Expositions Events Inc.","EFA":"iShares MSCI EAFE","EFAD":"ProShares Trust MSCI EAFE Dividend Growers","EFAS":"Global X MSCI SuperDividend EAFE ETF","EFAV":"iShares Edge MSCI Min Vol EAFE","EFAX":"SPDR MSCI EAFE Fossil Fuel Reserves Free","EFBI":"Eagle Financial Bancorp Inc.","EFC":"Ellington Financial Inc.","EFF":"Eaton vance Floating-Rate Income Plus Fund of Beneficial Interest","EFG":"iShares MSCI EAFE Growth","EFII":"Electronics for Imaging Inc.","EFL":"Eaton Vance Floating-Rate 2022 Target Term Trust of Beneficial Interest","EFNL":"iShares Inc MSCI Finland","EFO":"ProShares Ultra MSCI EAFE","EFOI":"Energy Focus Inc.","EFR":"Eaton Vance Senior Floating-Rate Fund of Beneficial Interest","EFSC":"Enterprise Financial Services Corporation","EFT":"Eaton Vance Floating Rate Income Trust of Beneficial Interest","EFU":"ProShares UltraShort MSCI EAFE","EFV":"iShares MSCI EAFE Value","EFX":"Equifax Inc.","EFZ":"ProShares Short MSCI EAFE","EGAN":"eGain Corporation","EGBN":"Eagle Bancorp Inc.","EGF":"Blackrock Enhanced Government Fund Inc.","EGHT":"8x8 Inc","EGI":"Entree Resources Ltd.","EGIF":"Eagle Growth and Income Opportunities Fund of Beneficial Interest","EGLE":"Eagle Bulk Shipping Inc.","EGO":"Eldorado Gold Corporation","EGOV":"NIC Inc.","EGP":"EastGroup Properties Inc.","EGPT":"VanEck Vectors Egypt Index","EGRX":"Eagle Pharmaceuticals Inc.","EGY":"VAALCO Energy Inc.","EHC":"Encompass Health Corporation","EHI":"Western Asset Global High Income Fund Inc","EHT":"Eaton Vance High Income 2021 Target Term Trust of Beneficial Interest","EHTH":"eHealth Inc.","EIDO":"iShares MSCI Indonesia","EIDX":"Eidos Therapeutics Inc.","EIG":"Employers Holdings Inc","EIGI":"Endurance International Group Holdings Inc.","EIGR":"Eiger BioPharmaceuticals Inc.","EIM":"Eaton Vance Municipal Bond Fund of Beneficial Interest $.01 par value","EIRL":"iShares Trust MSCI Ireland","EIS":"iShares Inc MSCI Israel","EIX":"Edison International","EJUL":"Innovator MSCI Emerging Markets Power Buffer ETF - July","EKAR":"Ideanomics NextGen Vehicles and Technology","EKSO":"Ekso Bionics Holdings Inc.","EL":"Estee Lauder Companies Inc. (The)","ELAN":"Elanco Animal Health Incorporated","ELC":"Entergy Louisiana Inc. Collateral Trust Mortgage Bonds 4.875 % Series due September 1 2066","ELD":"WisdomTree Emerging Markets Local Debt Fund","ELF":"e.l.f. Beauty Inc.","ELGX":"Endologix Inc.","ELJ":"Entergy Louisiana Inc. First Mortgage Bonds 5.25% Series due July 1 2052","ELLO":"Ellomay Capital Ltd (Israel)","ELMD":"Electromed Inc.","ELOX":"Eloxx Pharmaceuticals Inc.","ELP":"Companhia Paranaense de Energia (COPEL)","ELS":"Equity Lifestyle Properties Inc.","ELSE":"Electro-Sensors Inc.","ELTK":"Eltek Ltd.","ELU":"Entergy Louisiana Inc. First Mortgage Bonds 4.70% Series due June 1 2063","ELVT":"Elevate Credit Inc.","ELY":"Callaway Golf Company","EMAG":"VanEck Vectors Emerging Markets Aggregate Bond","EMAN":"eMagin Corporation","EMB":"iShares J.P. Morgan USD Emerging Markets Bond ETF","EMBH":"iShares Interest Rate Hedged Emerging Markets Bond","EMCB":"WisdomTree Emerging Markets Corporate Bond Fund","EMCF":"Emclaire Financial Corp","EMCG":"WisdomTree Emerging Markets Consumer Growth Fund","EMCI":"EMC Insurance Group Inc.","EMD":"Western Asset Emerging Markets Debt Fund Inc","EMDV":"ProShares MSCI Emerging Markets Dividend Growers","EME":"EMCOR Group Inc.","EMEM":"Virtus Glovista Emerging Markets","EMF":"Templeton Emerging Markets Fund","EMFM":"Global X MSCI Next Emerging & Frontier","EMGF":"iShares Edge MSCI Multifactor Emerging Markets","EMHY":"iShares Emerging Markets High Yield Bond","EMIF":"iShares S&P Emerging Markets Infrastructure Ix Fd","EMIH":"Xtrackers Emerging Markets Bond - Interest Rate Hedged","EMKR":"EMCORE Corporation","EML":"Eastern Company (The)","EMLC":"VanEck Vectors J.P. Morgan EM Local Currency Bond","EMLP":"First Trust North American Energy Infrastructure Fund","EMMF":"WisdomTree Emerging Markets Multifactor Fund","EMMS":"Emmis Communications Corporation","EMN":"Eastman Chemical Company","EMO":"ClearBridge Energy Midstream Opportunity Fund Inc.","EMP":"Entergy Mississippi LLC First Mortgage Bonds 4.90% Series Due October 1 2066","EMQQ":"Emerging Markets Internet and Ecommerce ETF (The)","EMR":"Emerson Electric Company","EMSG":"Xtrackers MSCI Emerging Markets ESG Leaders Equity","EMSH":"ProShares Short Term USD Emerging Markets Bond","EMTL":"SPDR DoubleLine Emerging Markets Fixed Income","EMTY":"ProShares Decline of the Retail Store","EMX":"EMX Royalty Corporation (Canada)","EMXC":"iShares MSCI Emerging Markets ex China ETF","ENB":"Enbridge Inc","ENBA":"Enbridge Inc 6.375% Fixed-to-Floating Rate Subordinated Notes Series 2018-B due 2078","ENBL":"Enable Midstream Partners LP representing limited partner interests","ENDP":"Endo International plc","ENFC":"Entegra Financial Corp.","ENFR":"Alerian Energy Infrastructure","ENG":"ENGlobal Corporation","ENIA":"Enel Americas S.A. American Depositary Shares","ENIA^":"Enel Americas S.A. Rights (expiring July 25 2019)","ENIC":"Enel Chile S.A. American Depositary Shares (Each representing 50 shares of)","ENJ":"Entergy New Orleans LLC First Mortgage Bonds 5.0% Series due December 1 2052","ENLC":"EnLink Midstream LLC representing Limited Partner Interests","ENLV":"Enlivex Therapeutics Ltd.","ENO":"Entergy New Orleans LLC First Mortgage Bonds 5.50% Series due April 1 2066","ENOB":"Enochian Biosciences Inc.","ENOR":"iShares Inc MSCI Norway","ENPH":"Enphase Energy Inc.","ENR":"Energizer Holdings Inc.","ENR-A":"Energizer Holdings Inc. 7.50% Series A Mandatory Convertible Preferred Stock","ENS":"EnerSys","ENSG":"The Ensign Group Inc.","ENSV":"Enservco Corporation","ENT":"Global Eagle Entertainment Inc.","ENTA":"Enanta Pharmaceuticals Inc.","ENTG":"Entegris Inc.","ENTR":"ERShares Entrepreneur 30","ENTX":"Entera Bio Ltd.","ENTXW":"Entera Bio Ltd. Warrant","ENV":"Envestnet Inc","ENVA":"Enova International Inc.","ENX":"Eaton Vance New York Municipal Bond Fund of Beneficial Interest $.01 par value","ENZ":"Enzo Biochem Inc. ($0.01 Par Value)","ENZL":"iShares MSCI New Zealand Capped ETF","EOD":"Wells Fargo Global Dividend Opportunity Fund","EOG":"EOG Resources Inc.","EOI":"Eaton Vance Enhance Equity Income Fundd Equity Income Fund Shares of Beneficial Interest","EOLS":"Evolus Inc.","EOS":"Eaton Vance Enhance Equity Income Fund II","EOT":"Eaton Vance Municipal Income Trust EATON VANCE NATIONAL MUNICIPAL OPPORTUNITIES TRUST","EP-C":"El Paso Corporation Preferred Stock","EPAM":"EPAM Systems Inc.","EPAY":"Bottomline Technologies Inc.","EPC":"Edgewell Personal Care Company","EPD":"Enterprise Products Partners L.P.","EPHE":"iShares MSCI Philippines","EPI":"WisdomTree India Earnings Fund","EPIX":"ESSA Pharma Inc.","EPM":"Evolution Petroleum Corporation Inc.","EPOL":"iShares Trust MSCI Poland","EPP":"iShares MSCI Pacific Ex-Japan Index Fund","EPR":"EPR Properties","EPR-C":"EPR Properties 5.75% Series C Cumulative Convertible Preferred Shares","EPR-E":"EPR Properties Series E Cumulative Conv Pfd Shs Ser E","EPR-G":"EPR Properties 5.750% Series G Cumulative Redeemable Preferred Shares","EPRF":"Innovator S&P Investment Grade Preferred","EPRT":"Essential Properties Realty Trust Inc.","EPS":"WisdomTree U.S. LargeCap Fund","EPSN":"Epsilon Energy Ltd.","EPU":"iShares Trust MSCI Peru","EPV":"ProShares UltraShort FTSE Europe","EPZM":"Epizyme Inc.","EQ":"Equillium Inc.","EQAL":"Invesco Russell 1000 Equal Weight","EQBK":"Equity Bancshares Inc.","EQC":"Equity Commonwealth of Beneficial Interest","EQC-D":"Equity Commonwealth 6.50% Pfd Conv Shs Ser D","EQH":"AXA Equitable Holdings Inc.","EQIX":"Equinix Inc.","EQL":"ALPS Equal Sector Weight","EQM":"EQM Midstream Partners, LP","EQNR":"Equinor ASA","EQR":"Equity Residential of Beneficial Interest","EQRR":"ProShares Equities for Rising Rates ETF","EQS":"Equus Total Return Inc.","EQT":"EQT Corporation","EQWL":"Invesco S&P 100 Equal Weight","ERA":"Era Group Inc.","ERC":"Wells Fargo Multi-Sector Income Fund no par value","ERF":"Enerplus Corporation","ERH":"Wells Fargo Utilities and High Income Fund","ERI":"Eldorado Resorts Inc.","ERIC":"Ericsson","ERIE":"Erie Indemnity Company","ERII":"Energy Recovery Inc.","ERJ":"Embraer S.A.","ERM":"EquityCompass Risk Manager","EROS":"Eros International PLC A","ERSX":"ERShares Non-US Small Cap","ERUS":"iShares MSCI Russia","ERX":"Direxion Energy Bull 3X Shares","ERY":"Direxion Daily Energy Bear 3X Shares","ERYP":"Erytech Pharma S.A.","ES":"Eversource Energy (D/B/A)","ESBA":"Empire State Realty OP L.P. Series ES Operating Partnership Units Representing Limited Partnership Interests","ESBK":"Elmira Savings Bank NY (The)","ESCA":"Escalade Incorporated","ESE":"ESCO Technologies Inc.","ESEA":"Euroseas Ltd.","ESG":"FlexShares Trust STOXX US ESG Impact Index Fund","ESGD":"iShares MSCI EAFE ESG Select ETF","ESGE":"iShares MSCI EM ESG Select ETF","ESGF":"Invesco Exchange-Traded Fund Trust II Global ESG Revenue","ESGG":"FlexShares STOXX Global ESG Impact Index Fund","ESGL":"Invesco Exchange-Traded Self-Indexed Fund Trust ESG Revenue","ESGN":"Columbia Sustainable International Equity Income","ESGR":"Enstar Group Limited","ESGRO":"Enstar Group Limited Depository Shares 7.00% Perpetual Non-Cumulative Preference Shares Series E","ESGRP":"Enstar Group Limited Depositary Shares Each Representing 1/1000th of an interest in Preference Shares","ESGS":"Columbia Sustainable U.S. Equity Income","ESGU":"iShares MSCI USA ESG Optimized ETF","ESGV":"Vanguard ESG U.S. Stock","ESGW":"Columbia Sustainable Global Equity Income","ESI":"Element Solutions Inc.","ESLT":"Elbit Systems Ltd.","ESML":"iShares ESG MSCI USA Small-Cap","ESNT":"Essent Group Ltd.","ESP":"Espey Mfg. & Electronics Corp.","ESPO":"VanEck Vectors Video Gaming and eSports","ESPR":"Esperion Therapeutics Inc.","ESQ":"Esquire Financial Holdings Inc.","ESRT":"Empire State Realty Trust Inc. Class A","ESS":"Essex Property Trust Inc.","ESSA":"ESSA Bancorp Inc.","ESTA":"Establishment Labs Holdings Inc.","ESTC":"Elastic N.V.","ESTE":"Earthstone Energy Inc. Class A","ESTR":"Estre Ambiental Inc.","ESTRW":"Estre Ambiental Inc. Warrants","ESV":"Ensco Rowan plc Class A","ESXB":"Community Bankers Trust Corporation.","ET":"Energy Transfer LP","ETB":"Eaton Vance Tax-Managed Buy-Write Income Fund of Beneficial Interest","ETFC":"E*TRADE Financial Corporation","ETG":"Eaton Vance Tax-Advantaged Global Dividend Income Fund of Beneficial Interest","ETH":"Ethan Allen Interiors Inc.","ETHO":"Etho Climate Leadership U.S.","ETJ":"Eaton Vance Risk-Managed Diversified Equity Income Fund of Beneficial Interest","ETM":"Entercom Communications Corp.","ETN":"Eaton Corporation PLC","ETO":"Eaton Vance Tax-Advantage Global Dividend Opp","ETON":"Eton Pharmaceuticals Inc.","ETP-C":"Energy Transfer Operating L.P. Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","ETP-D":"Energy Transfer Operating L.P. 7.625% Series D Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","ETP-E":"Energy Transfer Operating L.P. Series E Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","ETR":"Entergy Corporation","ETRN":"Equitrans Midstream Corporation","ETSY":"Etsy Inc.","ETTX":"Entasis Therapeutics Holdings Inc.","ETV":"Eaton Vance Corporation Tax-Managed Buy-Write Opportunities Fund of Beneficial Interest","ETW":"Eaton Vance Corporation Tax-Managed Global Buy-Write Opportunites Fund of Beneficial Interest","ETX":"Eaton Vance Municipal Income 2028 Term Trust of Beneficial Interest","ETY":"Eaton Vance Tax-Managed Diversified Equity Income Fund of Beneficial Interest","EUDG":"WisdomTree Europe Quality Dividend Growth Fund","EUDV":"ProShares MSCI Europe Dividend Growers","EUFL":"Direxion Daily European Financials Bull 2X Shares","EUFN":"iShares MSCI Europe Financial Sector Index Fund","EUFX":"ProShares Short Euro","EUM":"ProShares Short MSCI Emerging Markets","EUMF":"WISDOMTREE EUROPE MULTIFACTO","EUMV":"iShares Edge MSCI Min Vol Europe","EUO":"ProShares UltraShort Euro","EURL":"Direxion Daily FTSE Europe Bull 3x Shares","EURN":"Euronav NV","EURZ":"Xtrackers Eurozone Equity","EUSA":"iShares MSCI USA Equal Weighted","EUSC":"WisdomTree Europe Hedged SmallCap Equity Fund","EUXL":"Direxion Daily EURO STOXX 50? Bull 3X Shares","EV":"Eaton Vance Corporation","EVA":"Enviva Partners LP representing limited partner interests","EVBG":"Everbridge Inc.","EVBN":"Evans Bancorp Inc.","EVC":"Entravision Communications Corporation","EVER":"EverQuote Inc.","EVF":"Eaton Vance Senior Income Trust","EVFM":"Evofem Biosciences Inc.","EVFTC":"Eaton Vance Floating-Rate NextShares","EVG":"Eaton Vance Short Diversified Income Fund Duration Diversified Income Fund of Beneficial Interest","EVGBC":"Eaton Vance Global Income Builder NextShares","EVGN":"Evogene Ltd.","EVH":"Evolent Health Inc Class A","EVI":"EVI Industries Inc.","EVIX":"VelocityShares 1x Long VSTOXX Futures ETN","EVK":"Ever-Glory International Group Inc.","EVLMC":"Eaton Vance TABS 5-to-15 Year Laddered Municipal B","EVLO":"Evelo Biosciences Inc.","EVLV":"EVINE Live Inc.","EVM":"Eaton Vance California Municipal Bond Fund of Beneficial Interest $.01 par value","EVN":"Eaton Vance Municipal Income Trust","EVOK":"Evoke Pharma Inc.","EVOL":"Evolving Systems Inc.","EVOP":"EVO Payments Inc.","EVR":"Evercore Inc. Class A","EVRG":"Evergy Inc.","EVRI":"Everi Holdings Inc.","EVSI":"Envision Solar International Inc.","EVSIW":"Envision Solar International Inc. Warrant","EVSTC":"Eaton Vance Stock NextShares","EVT":"Eaton Vance Tax Advantaged Dividend Income Fund of Beneficial Interest","EVTC":"Evertec Inc.","EVV":"Eaton Vance Limited Duration Income Fund of Beneficial Interest","EVX":"VanEck Vectors Environmental Services","EVY":"Eaton Vance New York Municipal Income Trust Shares of Beneficial Interest","EW":"Edwards Lifesciences Corporation","EWA":"iShares MSCI Australia Index Fund","EWBC":"East West Bancorp Inc.","EWC":"iShares MSCI Canada Index Fund","EWCO":"Invesco S&P 500 Equal Weight Communication Services","EWD":"iShares Inc MSCI Sweden","EWEM":"Invesco MSCI Emerging Markets Equal Country Weight","EWG":"iShares MSCI Germany Index Fund","EWGS":"Ishares MSCI Germany Small Cap","EWH":"iShares MSCI Hong Kong Index Fund","EWI":"iShares Inc MSCI Italy","EWJ":"iShares MSCI Japan Index Fund","EWJE":"iShares MSCI Japan Equal Weighted ETF","EWJV":"The iShares MSCI Japan Value ETF","EWK":"iShares Inc MSCI Belgium","EWL":"iShares Inc MSCI Switzerland","EWM":"iShares MSCI Malaysia Index Fund","EWMC":"Invesco S&P MidCap 400 Equal Weight","EWN":"iShares MSCI Netherlands Index Fund","EWO":"iShares Inc MSCI Austria","EWP":"iShares Inc MSCI Spain","EWQ":"iShares MSCI France Index Fund","EWRE":"Invesco S&P 500 Equal Weight Real Estate","EWS":"iShares Inc MSCI Singapore","EWSC":"Invesco S&P SmallCap 600 Equal Weight","EWT":"iShares Inc MSCI Taiwan","EWU":"iShares MSCI United Kingdom","EWUS":"Ishares MSCI United Kingdom Small Cap","EWV":"ProShares UltraShort MSCI Japan","EWW":"iShares Inc MSCI Mexico","EWX":"SPDR S&P Emerging Markets Small Cap","EWY":"iShares Inc MSCI South Korea","EWZ":"iShares Inc MSCI Brazil","EWZS":"iShares MSCI Brazil Small-Cap ETF","EXAS":"Exact Sciences Corporation","EXC":"Exelon Corporation","EXD":"Eaton Vance Tax-Managed Buy-Write Strategy Fund of Beneficial Interest","EXEL":"Exelixis Inc.","EXFO":"EXFO Inc","EXG":"Eaton Vance Tax-Managed Global Diversified Equity Income Fund of Beneficial Interest","EXI":"iShares Global Industrials","EXIV":"VelocityShares 1x Daily Inverse VSTOXX Futures ETN","EXK":"Endeavour Silver Corporation (Canada)","EXLS":"ExlService Holdings Inc.","EXP":"Eagle Materials Inc","EXPD":"Expeditors International of Washington Inc.","EXPE":"Expedia Group Inc.","EXPI":"eXp World Holdings Inc.","EXPO":"Exponent Inc.","EXPR":"Express Inc.","EXR":"Extra Space Storage Inc","EXT":"WisdomTree U.S. Total Market Fund","EXTN":"Exterran Corporation","EXTR":"Extreme Networks Inc.","EYE":"National Vision Holdings Inc.","EYEG":"Eyegate Pharmaceuticals Inc.","EYEGW":"","EYEN":"Eyenovia Inc.","EYES":"Second Sight Medical Products Inc.","EYESW":"Second Sight Medical Products Inc. Warrants","EYLD":"Cambria ETF Trust Emerging Shareholder Yield","EYPT":"EyePoint Pharmaceuticals Inc.","EZA":"iShares MSCI South Africa Index Fund","EZJ":"ProShares Ultra MSCI Japan","EZM":"WisdomTree U.S. MidCap Fund","EZPW":"EZCORP Inc.","EZT":"Entergy Texas Inc First Mortgage Bonds 5.625% Series due June 1 2064","EZU":"iShares MSCI Eurozone","F":"Ford Motor Company","F-B":"","FAAR":"First Trust Alternative Absolute Return Strategy ETF","FAB":"First Trust Multi Cap Value AlphaDEX Fund","FAD":"First Trust Multi Cap Growth AlphaDEX Fund","FAF":"First American Corporation (New)","FALN":"iShares Fallen Angels USD Bond ETF","FAM":"First Trust/Aberdeen Global Opportunity Income Fund of Beneficial Interest","FAMI":"Farmmi INC.","FAN":"First Trust Global Wind Energy","FANG":"Diamondback Energy Inc.","FANH":"Fanhua Inc.","FARM":"Farmer Brothers Company","FARO":"FARO Technologies Inc.","FAS":"Direxion Financial Bull 3X Shares","FAST":"Fastenal Company","FAT":"FAT Brands Inc.","FATE":"Fate Therapeutics Inc.","FAUS":"First Trust Australia AlphaDex fund","FAX":"Aberdeen Asia-Pacific Income Fund Inc","FAZ":"Direxion Financial Bear 3X Shares","FB":"Facebook Inc.","FBC":"Flagstar Bancorp Inc.","FBGX":"UBS AG FI Enhanced Large Cap Growth ETN","FBHS":"Fortune Brands Home & Security Inc.","FBIO":"Fortress Biotech Inc.","FBIOP":"Fortress Biotech Inc. 9.375% Series A Cumulative Redeemable Perpetual Preferred Stock","FBIZ":"First Business Financial Services Inc.","FBK":"FB Financial Corporation","FBM":"Foundation Building Materials Inc.","FBMS":"The First Bancshares Inc.","FBNC":"First Bancorp","FBND":"Fidelity Total Bond","FBP":"First BanCorp.","FBSS":"Fauquier Bankshares Inc.","FBT":"First Trust Amex Biotech Index Fund","FBZ":"First Trust Brazil AlphaDEX Fund","FC":"Franklin Covey Company","FCA":"First Trust China AlphaDEX Fund","FCAL":"First Trust California Municipal High Income ETF","FCAN":"First Trust Canada AlphaDEX Fund","FCAP":"First Capital Inc.","FCAU":"Fiat Chrysler Automobiles N.V.","FCBC":"First Community Bankshares Inc.","FCBP":"First Choice Bancorp","FCCO":"First Community Corporation","FCCY":"1st Constitution Bancorp (NJ)","FCEF":"First Trust CEF Income Opportunity ETF","FCEL":"FuelCell Energy Inc.","FCF":"First Commonwealth Financial Corporation","FCFS":"FirstCash Inc.","FCG":"First Trust Natural Gas","FCN":"FTI Consulting Inc.","FCNCA":"First Citizens BancShares Inc. Class A Common Stock","FCO":"Aberdeen Global Income Fund Inc.","FCOM":"Fidelity MSCI Communication Services Index","FCOR":"Fidelity Corporate Bond","FCPT":"Four Corners Property Trust Inc.","FCSC":"Fibrocell Science Inc.","FCT":"First Trust Senior Floating Rate Income Fund II of Beneficial Interest","FCTR":"First Trust Lunt U.S. Factor Rotation","FCVT":"First Trust SSI Strategic Convertible Securities E","FCX":"Freeport-McMoRan Inc.","FDBC":"Fidelity D & D Bancorp Inc.","FDC":"First Data Corporation Class A","FDD":"First Trust Dow Jones STOXX Select Dividend 30 Index Fund","FDEF":"First Defiance Financial Corp.","FDEM":"Fidelity Targeted Emerging Markets Factor","FDEU":"First Trust Dynamic Europe Equity Income Fund of Beneficial Interest","FDEV":"Fidelity Targeted International Factor","FDHY":"Fidelity High Yield Factor","FDIS":"Fidelity MSCI Consumer Discretionary Index","FDIV":"First Trust Strategic Income ETF","FDL":"First Trust Morningstar","FDLO":"Fidelity Low Volatility Factor","FDM":"First Trust DJ Select MicroCap","FDMO":"Fidelity Momentum Factor","FDN":"First Trust DJ Internet Index Fund","FDNI":"First Trust Dow Jones International Internet ETF","FDP":"Fresh Del Monte Produce Inc.","FDRR":"Fidelity Dividend ETF for Rising Rates","FDS":"FactSet Research Systems Inc.","FDT":"First Trust Developed Markets Ex-US AlphaDEX Fund","FDTS":"First Trust Developed Markets ex-US Small Cap AlphaDEX Fund","FDUS":"Fidus Investment Corporation","FDUSL":"Fidus Investment Corporation 5.875% Notes due 2023","FDUSZ":"Fidus Investment Corporation 6% Notes due 2024","FDVV":"Fidelity High Dividend","FDX":"FedEx Corporation","FE":"FirstEnergy Corp.","FEDU":"Four Seasons Education (Cayman) Inc. American Depositary Shares each two ADSs representing one","FEI":"First Trust MLP and Energy Income Fund of Beneficial Interest","FEIM":"Frequency Electronics Inc.","FELE":"Franklin Electric Co. Inc.","FELP":"Foresight Energy LP representing Limited Partner Interests","FEM":"First Trust Emerging Markets AlphaDEX Fund","FEMB":"First Trust Emerging Markets Local Currency Bond E","FEMS":"First Trust Emerging Markets Small Cap AlphaDEX Fund","FEN":"First Trust Energy Income and Growth Fund","FENC":"Fennec Pharmaceuticals Inc.","FENG":"Phoenix New Media Limited American Depositary Shares each representing 8 Class A.","FENY":"Fidelity MSCI Energy Index","FEO":"First Trust/Aberdeen Emerging Opportunity Fund of Beneficial Interest","FEP":"First Trust Europe AlphaDEX Fund","FET":"Forum Energy Technologies Inc.","FEU":"SPDR DJ STOXX 50 Etf","FEUL":"Credit Suisse FI Enhanced Europe 50 ETNs","FEUZ":"First Trust Eurozone AlphaDEX ETF","FEX":"First Trust Large Cap Core AlphaDEX Fund","FEYE":"FireEye Inc.","FEZ":"SPDR DJ Euro STOXX 50 Etf","FF":"FutureFuel Corp.","FFA":"First Trust Enhanced Equity Income Fund","FFBC":"First Financial Bancorp.","FFBW":"FFBW Inc.","FFC":"Flaherty & Crumrine Preferred and Income Securities Fund Incorporated","FFEU":"Barclays ETN FI Enhanced Europe 50 Exchange Traded Notes Series C","FFG":"FBL Financial Group Inc.","FFHG":"Formula Folios Hedged Growth","FFHL":"Fuwei Films (Holdings) Co. Ltd.","FFIC":"Flushing Financial Corporation","FFIN":"First Financial Bankshares Inc.","FFIU":"Fieldstone UVA Unconstrained Medium-Term Fixed Income","FFIV":"F5 Networks Inc.","FFNW":"First Financial Northwest Inc.","FFR":"First Trust FTSE EPRA/NAREIT Global Real Estate Index Fund","FFSG":"FormulaFolios Smart Growth","FFTG":"FormulaFolios Tactical Growth","FFTI":"FormulaFolios Tactical Income","FFTY":"Innovator IBD 50","FFWM":"First Foundation Inc.","FG":"FGL Holdings","FG+":"","FGB":"First Trust Specialty Finance and Financial Opportunities Fund","FGBI":"First Guaranty Bancshares Inc.","FGD":"First Trust DJ Global Select Dividend","FGEN":"FibroGen Inc","FGM":"First Trust Germany AlphaDEX Fund","FGP":"Ferrellgas Partners L.P.","FHB":"First Hawaiian Inc.","FHK":"First Trust Hong Kong AlphaDEX Fund","FHL":"Futu Holdings Limited","FHLC":"Fidelity MSCI Health Care Index","FHN":"First Horizon National Corporation","FHN-A":"First Horizon National Corporation Depositary Shares","FI":"Frank's International N.V.","FIBK":"First Interstate BancSystem Inc.","FIBR":"iShares Edge U.S. Fixed Income Balanced Risk","FICO":"Fair Isaac Corproation","FID":"International Multi-Asset Diversified Income Index","FIDI":"Fidelity International High Dividend","FIDU":"Fidelity MSCI Industrials Index","FIEE":"UBS AG FI Enhanced Europe 50 ETN due February 12 2026","FIF":"First Trust Energy Infrastructure Fund of Beneficial Interest","FIHD":"UBS AG FI Enhanced Global High Yield ETN due March 3 2026","FII":"Federated Investors Inc.","FILL":"iShares MSCI Global Energy Producers Fund","FINS":"Angel Oak Financial Strategies Income Term Trust of Beneficial Interest","FINU":"ProShares UltraPro Financial Select Sector","FINX":"Global X FinTech ETF","FINZ":"ProShares UltraPro Short Financial Select Sector","FIS":"Fidelity National Information Services Inc.","FISI":"Financial Institutions Inc.","FISK":"Empire State Realty OP L.P. Series 250 Operating Partnership Units Representing Limited Partnership Interests","FISR":"SPDR SSGA Fixed Income Sector Rotation","FISV":"Fiserv Inc.","FIT":"Fitbit Inc. Class A","FITB":"Fifth Third Bancorp","FITBI":"Fifth Third Bancorp Depositary Share repstg 1/1000th Ownership Interest Perp Pfd Series I","FITE":"SPDR S&P Kensho Future Security","FIV":"First Trust Senior Floating Rate 2022 Target Term Fund of Beneficial Interest","FIVA":"Fidelity International Value Factor","FIVE":"Five Below Inc.","FIVG":"Defiance Next Gen Connectivity","FIVN":"Five9 Inc.","FIW":"First Trust Water","FIX":"Comfort Systems USA Inc.","FIXD":"First Trust TCW Opportunistic Fixed Income ETF","FIXX":"Homology Medicines Inc.","FIYY":"Barclays ETN FI Enhanced Global High Yield Exchange Traded Notes Series B","FIZZ":"National Beverage Corp.","FJP":"First Trust Japan AlphaDEX Fund","FKO":"First Trust South Korea AlphaDEX Fund","FKU":"First Trust United Kingdom AlphaDEX Fund","FL":"Foot Locker Inc.","FLAG":"Exchange Traded Concepts Trust FLAG-Forensic Accounting Long-Short","FLAT":"iPath US Treasury Flattener ETN","FLAU":"Franklin FTSE Australia","FLAX":"Franklin FTSE Asia ex Japan","FLBL":"Franklin Liberty Senior Loan","FLBR":"Franklin FTSE Brazil","FLC":"Flaherty & Crumrine Total Return Fund Inc","FLCA":"Franklin FTSE Canada","FLCH":"Franklin FTSE China","FLCO":"Franklin Liberty Investment Grade Corporate","FLDM":"Fluidigm Corporation","FLDR":"Fidelity Low Duration Bond Factor","FLEE":"Franklin FTSE Europe","FLEH":"Franklin FTSE Europe Hedged","FLEU":"Barclays ETN FI Enhanced Europe 50 ETN Series B","FLEX":"Flex Ltd.","FLFR":"Franklin FTSE France","FLGB":"Franklin FTSE United Kingdom","FLGE":"Credit Suisse FI Large Cap Growth Enhanced ETN","FLGR":"Franklin FTSE Germany","FLGT":"Fulgent Genetics Inc.","FLHK":"Franklin FTSE Hong Kong","FLHY":"Franklin Liberty High Yield Corporate","FLIA":"Franklin Liberty International Aggregate Bond","FLIC":"The First of Long Island Corporation","FLIN":"Franklin FTSE India","FLIO":"Franklin Liberty International Opportunities","FLIR":"FLIR Systems Inc.","FLIY":"Franklin FTSE Italy","FLJH":"Franklin FTSE Japan Hedged","FLJP":"Franklin FTSE Japan","FLKR":"Franklin FTSE South Korea","FLKS":"Flex Pharma Inc.","FLL":"Full House Resorts Inc.","FLLA":"Franklin FTSE Latin America","FLLV":"Franklin Liberty U.S. Low Volatility","FLM":"First Trust Global Engineering and Construction","FLMB":"Franklin Templeton ETF Trust Liberty Municipal Bond","FLMI":"Franklin Templeton ETF Trust Liberty Intermediate Municipal Opportunities","FLMN":"Falcon Minerals Corporation","FLMNW":"","FLMX":"Franklin FTSE Mexico","FLN":"First Trust Latin America AlphaDEX Fund","FLNG":"FLEX LNG Ltd.","FLNT":"Fluent Inc.","FLO":"Flowers Foods Inc.","FLOT":"iShares Floating Rate Bond","FLOW":"SPX FLOW Inc.","FLQD":"Franklin LibertyQ Global Dividend","FLQE":"Franklin LibertyQ Emerging Markets","FLQG":"Franklin LibertyQ Global Equity","FLQH":"Franklin LibertyQ International Equity Hedged","FLQL":"Franklin LibertyQ U.S. Equity","FLQM":"Franklin LibertyQ U.S. Mid Cap Equity","FLQS":"Franklin LibertyQ U.S. Small Cap Equity","FLR":"Fluor Corporation","FLRN":"SPDR Bloomberg Barclays Investment Grade Floating Rate","FLRT":"AdvisorShares Pacific Asset Enhanced Floating Rate","FLRU":"Franklin FTSE Russia","FLS":"Flowserve Corporation","FLSA":"Franklin FTSE Saudi Arabia","FLSW":"Franklin FTSE Switzerland","FLT":"FleetCor Technologies Inc.","FLTB":"Fidelity Limited Term Bond","FLTR":"VanEck Vectors Investment Grade Floating Rate","FLTW":"Franklin FTSE Taiwan","FLWS":"1-800 FLOWERS.COM Inc.","FLXN":"Flexion Therapeutics Inc.","FLXS":"Flexsteel Industries Inc.","FLY":"Fly Leasing Limited","FLZA":"Franklin FTSE South Africa","FM":"iShares MSCI Frontier 100 Fund","FMAO":"Farmers & Merchants Bancorp Inc.","FMAT":"Fidelity MSCI Materials Index","FMB":"First Trust Managed Municipal ETF","FMBH":"First Mid Bancshares Inc.","FMBI":"First Midwest Bancorp Inc.","FMC":"FMC Corporation","FMCI":"Forum Merger II Corporation","FMCIU":"Forum Merger II Corporation Unit","FMCIW":"Forum Merger II Corporation Warrant","FMF":"First Trust Managed Futures Strategy Fund","FMHI":"First Trust Municipal High Income ETF","FMK":"First Trust Mega Cap AlphaDEX Fund","FMN":"Federated Premier Municipal Income Fund","FMNB":"Farmers National Banc Corp.","FMO":"Fiduciary/Claymore Energy Infrastructure Fund of Beneficial Interest","FMS":"Fresenius Medical Care AG","FMX":"Fomento Economico Mexicano S.A.B. de C.V.","FMY":"First Trust Motgage Income Fund of Beneficial Interest","FN":"Fabrinet","FNB":"F.N.B. Corporation","FNB-E":"F.N.B. Corporation Depositary Shares Series E","FNCB":"FNCB Bancorp Inc.","FNCL":"Fidelity MSCI Financials Index","FND":"Floor & Decor Holdings Inc.","FNDA":"Schwab Fundamental U.S. Small Company Index","FNDB":"Schwab Fundamental U.S. Broad Market Index","FNDC":"Schwab Fundamental International Small Company Index","FNDE":"Schwab Fundamental Emerging Markets Large Company Index","FNDF":"Schwab Fundamental International Large Company Index","FNDX":"Schwab Fundamental U.S. Large Company Index","FNF":"FNF Group of Fidelity National Financial Inc.","FNG":"AdvisorShares New Tech and Media","FNGD":"MicroSectors FANG Index -3X Inverse Leveraged ETNs due January 8 2038","FNGO":"MicroSectors FANG Index 2X Leveraged ETNs due January 8 2038","FNGU":"MicroSectors FANG Index 3X Leveraged ETNs due January 8 2038","FNGZ":"MicroSectors FANG Index -2X Inverse Leveraged ETNs due January 8 2038","FNHC":"FedNat Holding Company","FNI":"First Trust Chindia","FNJN":"Finjan Holdings Inc.","FNK":"First Trust Mid Cap Value AlphaDEX Fund","FNKO":"Funko Inc.","FNLC":"First Bancorp Inc (ME)","FNSR":"Finisar Corporation","FNV":"Franco-Nevada Corporation","FNWB":"First Northwest Bancorp","FNX":"First Trust Mid Cap Core AlphaDEX Fund","FNY":"First Trust Mid Cap Growth AlphaDEX Fund","FOCS":"Focus Financial Partners Inc.","FOE":"Ferro Corporation","FOF":"Cohen & Steers Closed-End Opportunity Fund Inc.","FOLD":"Amicus Therapeutics Inc.","FOMX":"Foamix Pharmaceuticals Ltd.","FONR":"Fonar Corporation","FOR":"Forestar Group Inc","FORD":"Forward Industries Inc.","FORK":"Fuling Global Inc.","FORM":"FormFactor Inc.","FORR":"Forrester Research Inc.","FORTY":"Formula Systems (1985) Ltd. ADS represents 1 ordinary shares","FOSL":"Fossil Group Inc.","FOVL":"iShares Focused Value Factor","FOX":"Fox Corporation","FOXA":"Fox Corporation","FOXF":"Fox Factory Holding Corp.","FPA":"First Trust Asia Pacific Ex-Japan AlphaDEX Fund","FPAC":"Far Point Acquisition Corporation Class A","FPAC+":"Far Point Acquisition Corporation Warrants exercisable for one share of Class A Common Stock for $11.50 per share","FPAC=":"Far Point Acquisition Corporation Units each consisting of one share of Class A common stock $0.0001 par value and one-third of one redeemable warrant","FPAY":"FlexShopper Inc.","FPAYW":"FlexShopper Inc. Warrants","FPE":"First Trust Preferred Securities and Income ETF","FPEI":"First Trust Institutional Preferred Securities and Income","FPF":"First Trust Intermediate Duration Preferred & Income Fund of Beneficial Interest","FPH":"Five Point Holdings LLC Class A","FPI":"Farmland Partners Inc.","FPI-B":"Farmland Partners Inc. Series B Participating Preferred Stock","FPL":"First Trust New Opportunities MLP & Energy Fund of Beneficial Interest","FPRX":"Five Prime Therapeutics Inc.","FPX":"First Trust US Equity Opportunities","FPXE":"First Trust IPOX Europe Equity Opportunities ETF","FPXI":"First Trust International IPO ETF","FQAL":"Fidelity Quality Factor","FR":"First Industrial Realty Trust Inc.","FRA":"Blackrock Floating Rate Income Strategies Fund Inc","FRAC":"Keane Group Inc.","FRAF":"Franklin Financial Services Corporation","FRAK":"VanEck Vectors Unconventional Oil & Gas","FRAN":"Francesca's Holdings Corporation","FRBA":"First Bank","FRBK":"Republic First Bancorp Inc.","FRC":"FIRST REPUBLIC BANK","FRC-D":"First Republic Bank San Francisco California Depositary Shares Series D","FRC-F":"FIRST REPUBLIC BANK Depositary Shares Series F","FRC-G":"FIRST REPUBLIC BANK Depositary Shares Series G","FRC-H":"FIRST REPUBLIC BANK Depositary Shares Series H","FRC-I":"FIRST REPUBLIC BANK Depositary Shares Series I","FRD":"Friedman Industries Inc.","FRDM":"Freedom 100 Emerging Markets","FRED":"Fred's Inc.","FREL":"Fidelity MSCI Real Estate Index","FRGI":"Fiesta Restaurant Group Inc.","FRI":"First Trust S&P REIT Index Fund","FRLG":"Large Cap Growth Index-Linked Exchange Traded Notes due 2028","FRME":"First Merchants Corporation","FRN":"Invesco Frontier Markets","FRO":"Frontline Ltd.","FRPH":"FRP Holdings Inc.","FRPT":"Freshpet Inc.","FRSX":"Foresight Autonomous Holdings Ltd.","FRT":"Federal Realty Investment Trust","FRT-C":"Federal Realty Investment Trust Depositary Shares Series C","FRTA":"Forterra Inc.","FSB":"Franklin Financial Network Inc.","FSBC":"FSB Bancorp Inc.","FSBW":"FS Bancorp Inc.","FSCT":"ForeScout Technologies Inc.","FSD":"First Trust High Income Long Short Fund of Beneficial Interest","FSFG":"First Savings Financial Group Inc.","FSI":"Flexible Solutions International Inc. (CDA)","FSK":"FS KKR Capital Corp.","FSLR":"First Solar Inc.","FSLY":"Fastly Inc. Class A","FSM":"Fortuna Silver Mines Inc (Canada)","FSMB":"First Trust Short Duration Managed Municipal","FSMD":"Fidelity Small-Mid Factor","FSP":"Franklin Street Properties Corp.","FSS":"Federal Signal Corporation","FSTA":"Fidelity MSCI COnsumer Staples Index","FSTR":"L.B. Foster Company","FSV":"FirstService Corporation","FSZ":"First Trust Switzerland AlphaDEX Fund","FT":"Franklin Universal Trust","FTA":"First Trust Large Cap Value AlphaDEX Fund","FTAC":"FinTech Acquisition Corp. III","FTACU":"FinTech Acquisition Corp. III Unit","FTACW":"FinTech Acquisition Corp. III Warrant","FTAG":"First Trust Indxx Global Agriculture ETF","FTAI":"Fortress Transportation and Infrastructure Investors LLC","FTC":"First Trust Large Cap Growth AlphaDEX Fund","FTCH":"Farfetch Limited Class A","FTCS":"First Trust Capital Strength ETF","FTDR":"frontdoor inc.","FTEC":"Fidelity MSCI Information Technology Index","FTEK":"Fuel Tech Inc.","FTEO":"FRONTEO Inc.","FTF":"Franklin Limited Duration Income Trust of Beneficial Interest","FTFT":"Future FinTech Group Inc.","FTGC":"First Trust Global Tactical Commodity Strategy Fund","FTHI":"First Trust High Income ETF","FTI":"TechnipFMC plc","FTK":"Flotek Industries Inc.","FTLB":"First Trust Low Beta Income ETF","FTLS":"First Trust Long/Short Equity","FTNT":"Fortinet Inc.","FTNW":"FTE Networks Inc.","FTR":"Frontier Communications Corporation","FTRI":"First Trust Indxx Global Natural Resources Income","FTS":"Fortis Inc.","FTSD":"Franklin Liberty Short Duration U.S. Government","FTSI":"FTS International Inc.","FTSL":"First Trust Senior Loan Fund ETF","FTSM":"First Trust Enhanced Short Maturity ETF","FTSV":"Forty Seven Inc.","FTV":"Fortive Corporation","FTV-A":"Fortive Corporation 5.00% Mandatory Convertible Preferred Stock Series A","FTVA":"Aptus Fortified Value","FTXD":"First Trust Nasdaq Retail ETF","FTXG":"First Trust Nasdaq Food & Beverage ETF","FTXH":"First Trust Nasdaq Pharmaceuticals ETF","FTXL":"First Trust Nasdaq Semiconductor ETF","FTXN":"First Trust Nasdaq Oil & Gas ETF","FTXO":"First Trust Nasdaq Bank ETF","FTXR":"First Trust Nasdaq Transportation ETF","FUD":"E-TRACS USB Bloomberg Commodity Index Exchange Traded Notes UBS Bloomberg CMCI Food ETN","FUE":"AB Svensk Ekportkredit (Swedish Export Credit Corporation) ELEMENTS Linked to the MLCX Biofuels Index - Total Return Structured Product","FUL":"H. B. Fuller Company","FULT":"Fulton Financial Corporation","FUMB":"First Trust Ultra Short Duration Municipal","FUN":"Cedar Fair L.P.","FUNC":"First United Corporation","FUND":"Sprott Focus Trust Inc.","FUSB":"First US Bancshares Inc.","FUT":"ProShares Managed Futures Strategy","FUTY":"Fidelity MSCI Utilities Index","FUV":"Arcimoto Inc.","FV":"First Trust Dorsey Wright Focus 5 ETF","FVAL":"Fidelity Value Factor","FVC":"First Trust Dorsey Wright Dynamic Focus 5 ETF","FVCB":"FVCBankcorp Inc.","FVD":"First Trust VL Dividend","FVE":"Five Star Senior Living Inc.","FVL":"First Trust Value Line 100 Fund","FVRR":"Fiverr International Ltd. no par value","FWDB":"AdvisorShares FolioBeyond Smart Core Bond","FWONA":"Liberty Media Corporation Series A","FWONK":"Liberty Media Corporation Series C","FWP":"Forward Pharma A/S","FWRD":"Forward Air Corporation","FXA":"Invesco CurrencyShares Australian Dollar Trust","FXB":"Invesco CurrencyShares British Pound Sterling Trust","FXC":"Invesco CurrencyShares Canadian Dollar Trust","FXCH":"Invesco CurrencyShares Chinese Renminbi Trust","FXD":"First Trust Cons. Discret. AlphaDEX","FXE":"Invesco CurrencyShares Euro Currency Trust","FXF":"Invesco CurrencyShares Swiss Franc Trust","FXG":"First Trust Cons. Staples AlphaDEX","FXH":"First Trust Health Care AlphaDEX","FXI":"iShares China Large-Cap","FXL":"First Trust Technology AlphaDEX","FXN":"First Trust Energy AlphaDEX Fund","FXNC":"First National Corporation","FXO":"First Trust Financials AlphaDEX","FXP":"ProShares Ultrashort FTSE China 50","FXR":"First Trust Industrials AlphaDEX","FXS":"Invesco CurrencyShares Swedish Krona Trust","FXSG":"Invesco CurrencyShares Singapore Dollar Trust","FXU":"First Trust Utilities AlphaDEX Fund","FXY":"Invesco CurrencyShares Japanese Yen Trust","FXZ":"First Trust Materials AlphaDEX Fund","FYC":"First Trust Small Cap Growth AlphaDEX Fund","FYLD":"Cambria Foreign Shareholder Yield","FYT":"First Trust Small Cap Value AlphaDEX Fund","FYX":"First Trust Small Cap Core AlphaDEX Fund","G":"Genpact Limited","GAA":"Cambria Global Asset Allocation","GAB":"Gabelli Equity Trust Inc. (The)","GAB-D":"Gabelli Equity Trust Inc. (The) Preferred Stock Series D","GAB-G":"Gabelli Equity Trust Inc. (The) Series G Cumulative Preferred Stock","GAB-H":"Gabelli Equity Trust Inc. (The) Pfd Ser H","GAB-J":"Gabelli Equity Trust Inc. (The) 5.45% Series J Cumulative Preferred Stock","GABC":"German American Bancorp Inc.","GAIA":"Gaia Inc.","GAIN":"Gladstone Investment Corporation","GAINL":"Gladstone Investment Corporation 6.375% Series E Cumulative Term Preferred Stock due 2025","GAINM":"Gladstone Investment Corporation 6.25% Series D Cumulative Term Preferred Stock","GAL":"SPDR SSgA Global Allocation","GALT":"Galectin Therapeutics Inc.","GAM":"General American Investors Inc.","GAM-B":"General American Investors Company Inc. Cumulative Preferred Stock","GAMR":"ETFMG Video Game Tech","GARD":"Realty Shares DIVCON Dividend Guard","GARS":"Garrison Capital Inc.","GASL":"Direxion Daily Natural Gas Related Bull 3X Shares","GASS":"StealthGas Inc.","GASX":"Direxion Daily Natural Gas Related Bear 3X Shares","GATX":"GATX Corporation","GAZ":"Barclays Bank PLC iPath Series B Bloomberg Natural Gas Subindex Total Return ETN","GBAB":"Guggenheim Taxable Municipal Managed Duration Trust of Beneficial Interest","GBCI":"Glacier Bancorp Inc.","GBDC":"Golub Capital BDC Inc.","GBF":"iShares Government/Credit Bond","GBIL":"Goldman Sachs Access Treasury 0-1 Year","GBL":"Gamco Investors Inc.","GBLI":"Global Indemnity Limited","GBLIL":"Global Indemnity Limited 7.875% Subordinated Notes due 2047","GBLIZ":"","GBR":"New Concept Energy Inc","GBT":"Global Blood Therapeutics Inc.","GBUY":"Goldman Sachs Motif New Age Consumer","GBX":"Greenbrier Companies Inc. (The)","GCAP":"GAIN Capital Holdings Inc.","GCBC":"Greene County Bancorp Inc.","GCC":"WisdomTree Continuous Commodity Index Fund","GCE":"Clarymore CEF GS Connect ETN","GCI":"Gannett Co. Inc.","GCO":"Genesco Inc.","GCOW":"Pacer Global Cash Cows Dividend","GCP":"GCP Applied Technologies Inc.","GCV":"Gabelli Convertible and Income Securities Fund Inc. (The)","GCV-B":"Gabelli Convertible and Income Securities Fund Inc. (The) Series B 6.00% Cumulative Preferred Stock","GCVRZ":"Sanofi Contingent Value Right (Expiring 12/31/2020)","GD":"General Dynamics Corporation","GDAT":"Goldman Sachs Motif Data-Driven World","GDDY":"GoDaddy Inc. Class A","GDEN":"Golden Entertainment Inc.","GDG":"GadsdenA DynamicA GrowthA","GDI":"Gardner Denver Holdings Inc.","GDL":"GDL Fund The of Beneficial Interest","GDL-C":"The GDL Fund Series C Cumulative Puttable and Callable Preferred Shares","GDMA":"GadsdenA DynamicA Multi-AssetA","GDNA":"Goldman Sachs Motif Human Evolution","GDO":"Western Asset Global Corporate Defined Opportunity Fund Inc.","GDOT":"Green Dot Corporation Class A $0.001 par value","GDP":"Goodrich Petroleum Corporation","GDS":"GDS Holdings Limited","GDV":"Gabelli Dividend & Income Trust of Beneficial Interest","GDV-A":"Gabelli Dividend & Income Tr Preferred Series A","GDV-D":"Gabelli Dividend Pfd Series D","GDV-G":"Gabelli Dividend 5.25% Series G Cumulative Preferred Shares par value $0.001 per share","GDV-H":"The Gabelli Dividend & Income Trust 5.375% Series H Cumulative Preferred Shares","GDVD":"Principal Active Global Dividend Income","GDX":"VanEck Vectors Gold Miners","GDXJ":"VanEck Vectors Junior Gold Miners","GDXS":"ProShares UltraShort Gold Miners","GDXX":"ProShares Ultra Gold Miners","GE":"General Electric Company","GEC":"Great Elm Capital Group Inc.","GECC":"Great Elm Capital Corp.","GECCL":"Great Elm Capital Corp. 6.50% Notes due 2022","GECCM":"Great Elm Capital Corp. 6.75% Notes Due 2025","GECCN":"Great Elm Capital Corp. Notes","GEF":"Greif Inc. Class A","GEF.B":"Greif Inc. Corporation Class B","GEL":"Genesis Energy L.P.","GEM":"Goldman Sachs ActiveBeta Emerging Markets Equity","GEMP":"Gemphire Therapeutics Inc.","GEN":"Genesis Healthcare Inc.","GENC":"Gencor Industries Inc.","GENE":"Genetic Technologies Ltd","GENY":"Principal Millennials Index ETF","GEO":"Geo Group Inc (The) REIT","GEOS":"Geospace Technologies Corporation","GER":"Goldman Sachs MLP Energy Renaissance Fund","GERN":"Geron Corporation","GES":"Guess? Inc.","GEVO":"Gevo Inc.","GF":"New Germany Fund Inc. (The)","GFED":"Guaranty Federal Bancshares Inc.","GFF":"Griffon Corporation","GFI":"Gold Fields Limited American Depositary Shares","GFIN":"Goldman Sachs Motif Finance Reimagined","GFN":"General Finance Corporation","GFNCP":"General Finance Corporation Cumulative Redeemable Perpetual Preferred Series C","GFNSL":"General Finance Corporation Senior Notes due 2021","GFY":"Western Asset Variable Rate Strategic Fund Inc.","GGAL":"Grupo Financiero Galicia S.A.","GGB":"Gerdau S.A.","GGG":"Graco Inc.","GGM":"Guggenheim Credit Allocation Fund of Beneficial Interest","GGN":"GAMCO Global Gold Natural Resources & Income Trust","GGN-B":"GAMCO Global Gold Natural Reources & Income Trust 5.00% Series B Cumulative 25.00 Liquidation Preference","GGO":"The Gabelli Go Anywhere Trust of Beneficial Interest","GGO-A":"The Gabelli Go Anywhere Trust Series A Cumulative Puttable and Callable Preferred Shares","GGT":"Gabelli Multi-Media Trust Inc. (The)","GGT-B":"Gabelli Multi-Media Trust Inc. (The) Preferred Series B","GGT-E":"Gabelli Multi-Media Trust Inc. (The) 5.125% Series E Cumulative Preferred Stock","GGZ":"Gabelli Global Small and Mid Cap Value Trust (The) of Beneficial Interest","GGZ-A":"Gabelli Global Small and Mid Cap Value Trust (The) 5.450% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)","GH":"Guardant Health Inc.","GHC":"Graham Holdings Company","GHDX":"Genomic Health Inc.","GHG":"GreenTree Hospitality Group Ltd. American depositary shares each representing one Class A","GHII":"Invesco S&P High Income Infrastructure","GHL":"Greenhill & Co. Inc.","GHM":"Graham Corporation","GHSI":"Guardion Health Sciences Inc.","GHY":"PGIM Global High Yield Fund Inc.","GHYB":"Goldman Sachs Access High Yield Corporate Bond","GHYG":"iShares US & Intl High Yield Corp Bond","GIB":"CGI Inc.","GIFI":"Gulf Island Fabrication Inc.","GIG":"GigCapital Inc.","GIG+":"","GIG=":"GigCapital Inc. Unit","GIGB":"Goldman Sachs Access Investment Grade Corporate Bond","GIGE":"SoFi Gig Economy ETF","GIGM":"GigaMedia Limited","GIG^":"GRIT International Groups Inc.","GII":"SPDR S&P Global Infrastructure","GIII":"G-III Apparel Group LTD.","GIL":"Gildan Activewear Inc. Class A Sub. Vot.","GILD":"Gilead Sciences Inc.","GILT":"Gilat Satellite Networks Ltd.","GIM":"Templeton Global Income Fund Inc.","GIS":"General Mills Inc.","GIX":"GigCapital2 Inc.","GIX+":"GigCapital2 Inc. Warrants exercisable for one share of Common Stock at an exercise price of $11.50 per share","GIX=":"GigCapital2 Inc. Units each consisting of one share of Common Stock and one Warrant","GIX^":"GigCapital2 Inc. Rights each exchangeable into one-twentieth of a share of Common Stock","GJH":"Synthetic Fixed-Income Securities Inc 6.375% (STRATS) Cl A-1","GJO":"Synthetic Fixed-Income Securities Inc. on behalf of STRATS(SM) Trust for Wal-Mart Stores Inc. Securities Series 2004-5","GJP":"Synthetic Fixed-Income Securities Inc. on behalf of STRATS (SM) Trust for Dominion Resources Inc. Securities Series 2005-6 Floating Rate Structured Repackaged A","GJR":"Synthetic Fixed-Income Securities Inc. STRATS Trust for Procter&Gamble Securities Series 2006-1","GJS":"Goldman Sachs Group Securities STRATS Trust for Series 2006-2","GJT":"Synthetic Fixed-Income Securities Inc. Floating Rate Structured Repackaged Asset-Backed Trust Securities Certificates Series 2006-3","GJV":"Synthetic Fixed-Income Securities Inc 7.00% Fixed Rate Structured Repackaged Asset-Backed Trust Securities (STRATS)","GKOS":"Glaukos Corporation","GLAC":"SPDR Bloomberg Barclays Global Aggregate Bond CHF","GLACR":"Greenland Acquisition Corporation Right","GLACU":"Greenland Acquisition Corporation Unit","GLACW":"Greenland Acquisition Corporation Warrant","GLAD":"Gladstone Capital Corporation","GLADD":"","GLADN":"Gladstone Capital Corporation 6.00% Series 2024 Term Preferred Stock","GLBS":"Globus Maritime Limited","GLBY":"WisdomTree Yield Enhanced Global Aggregate Bond Fund","GLBZ":"Glen Burnie Bancorp","GLD":"SPDR Gold Trust","GLDD":"Great Lakes Dredge & Dock Corporation","GLDI":"Credit Suisse Gold Shares Covered Call Exchange Traded Notes","GLDM":"SPDR Gold MiniShares Trust","GLDW":"SPDR Long Dollar Gold Trust","GLG":"Bat Group Inc.","GLIBA":"GCI Liberty Inc. Class A Common Stock","GLIBP":"GCI Liberty Inc. Series A Cumulative Redeemable Preferred Stock","GLIF":"AGFiQ Global Infrastructure","GLL":"ProShares UltraShort Gold","GLMD":"Galmed Pharmaceuticals Ltd.","GLNG":"Golar LNG Limited","GLO":"Clough Global Opportunities Fund","GLOB":"Globant S.A.","GLOG":"GasLog Ltd.","GLOG-A":"GasLog LP. 8.75% Series A Cumulative Redeemable Perpetual Preference Shares","GLOP":"GasLog Partners LP representing limited partnership interests","GLOP-A":"GasLog Partners LP 8.625% Series A Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units","GLOP-B":"GasLog Partners LP 8.200% Series B Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units","GLOP-C":"GasLog Partners LP 8.500% Series C Cumulative Redeemable Perpetual Fixed to Floating Rate Preference Units","GLOW":"Glowpoint Inc.","GLP":"Global Partners LP representing Limited Partner Interests","GLP-A":"Global Partners LP 9.75% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests","GLPG":"Galapagos NV","GLPI":"Gaming and Leisure Properties Inc.","GLQ":"Clough Global Equity Fund of Beneficial Interest","GLRE":"Greenlight Reinsurance Ltd.","GLT":"Glatfelter","GLTR":"Aberdeen Standard Physical Precious Metals Basket Shares","GLU":"Gabelli Global Utility of Beneficial Ownership","GLU-A":"The Gabelli Global Utility and Income Trust Series A Cumulative Puttable and Callable Preferred Shares","GLU-B":"The Gabelli Global Utility and Income Trust Series B Cumulative Puttable and Callable Preferred Shares","GLUU":"Glu Mobile Inc.","GLV":"Clough Global Dividend and Income Fund of beneficial interest","GLW":"Corning Incorporated","GLYC":"GlycoMimetics Inc.","GM":"General Motors Company","GMAN":"Goldman Sachs Motif Manufacturing Revolution","GMDA":"Gamida Cell Ltd.","GME":"GameStop Corporation","GMED":"Globus Medical Inc. Class A","GMF":"SPDR S&P Emerging Asia Pacific","GMHI":"Gores Metropoulos Inc.","GMHIU":"Gores Metropoulos Inc. Unit","GMHIW":"Gores Metropoulos Inc. Warrant","GMLP":"Golar LNG Partners LP","GMLPP":"Golar LNG Partners LP 8.75% Series A Cumulative Redeemable Preferred Units","GMO":"General Moly Inc.","GMOM":"Cambria Global Momentum","GMRE":"Global Medical REIT Inc.","GMRE-A":"Global Medical REIT Inc. Series A Cumulative Redeemable Preferred Stock","GMS":"GMS Inc.","GMTA":"GATX Corporation 5.625% Senior Notes due 2066","GMZ":"Goldman Sachs MLP Income Opportunities Fund","GNAF":"MicroSectors FANG Index Inverse ETNs due January 8 2038","GNC":"GNC Holdings Inc. Class A","GNCA":"Genocea Biosciences Inc.","GNE":"Genie Energy Ltd. Class B Stock","GNE-A":"Genie Energy Ltd. Series 2012 - A Preferred Stock $0.01 par value","GNFT":"GENFIT S.A.","GNK":"Genco Shipping & Trading Limited New (Marshall Islands)","GNL":"Global Net Lease Inc.","GNL-A":"Global Net Lease Inc. 7.25% Series A Cumulative Redeemable Preferred Stock $0.01 par value per share","GNLN":"Greenlane Holdings Inc.","GNMA":"iShares Barclays GNMA Bond Fund","GNMK":"GenMark Diagnostics Inc.","GNMX":"Aevi Genomic Medicine Inc.","GNOM":"Global X Genomics & Biotechnology ETF","GNPX":"Genprex Inc.","GNR":"SPDR S&P Global Natural Resources","GNRC":"Generac Holdlings Inc.","GNT":"GAMCO Natural Resources Gold & Income Trust","GNT-A":"GAMCO Natural Resources Gold & Income Tust 5.20% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)","GNTX":"Gentex Corporation","GNTY":"Guaranty Bancshares Inc.","GNUS":"Genius Brands International Inc.","GNW":"Genworth Financial Inc","GO":"Grocery Outlet Holding Corp.","GOAT":"VanEck Vectors Morningstar Global Wide Moat","GOAU":"US Global GO Gold and Precious Metal Miners","GOEX":"Global X Gold Explorers","GOF":"Guggenheim Strategic Opportunities Fund of Beneficial Interest","GOGL":"Golden Ocean Group Limited","GOGO":"Gogo Inc.","GOL":"Gol Linhas Aereas Inteligentes S.A. Sponsored ADR representing 2 Pfd Shares","GOLD":"Barrick Gold Corporation (BC)","GOLF":"Acushnet Holdings Corp.","GOOD":"Gladstone Commercial Corporation","GOODM":"Gladstone Commercial Corporation Series D Cumulative Redeemable Preferred Stock","GOODO":"Gladstone Commercial Corporation 7.50% Series B Cumulative Redeemable Preferred Stock","GOODP":"Gladstone Commercial Corporation 7.75% Series A Cumulative Redeemable Preferred Stock","GOOG":"Alphabet Inc.","GOOGL":"Alphabet Inc.","GOOS":"Canada Goose Holdings Inc. Subordinate","GORO":"Gold Resource Corporation","GOSS":"Gossamer Bio Inc.","GOVT":"iShares U.S. Treasury Bond","GPAQ":"Gordon Pointe Acquisition Corp.","GPAQU":"Gordon Pointe Acquisition Corp. Unit","GPAQW":"Gordon Pointe Acquisition Corp. Warrant","GPC":"Genuine Parts Company","GPI":"Group 1 Automotive Inc.","GPJA":"Georgia Power Company Series 2017A 5.00% Junior Subordinated Notes due October 1 2077","GPK":"Graphic Packaging Holding Company","GPL":"Great Panther Mining Limited (Canada)","GPM":"Guggenheim Enhanced Equity Income Fund","GPMT":"Granite Point Mortgage Trust Inc.","GPN":"Global Payments Inc.","GPOR":"Gulfport Energy Corporation","GPP":"Green Plains Partners LP","GPRE":"Green Plains Inc.","GPRK":"Geopark Ltd","GPRO":"GoPro Inc.","GPS":"Gap Inc. (The)","GPX":"GP Strategies Corporation","GQRE":"FlexShares Global Quality Real Estate Index Fund","GRA":"W.R. Grace & Co.","GRAF":"Graf Industrial Corp.","GRAF+":"Graf Industrial Corp. Warrants (each warrant exercisable for one-half of one share of common stock each at an exercise price of $11.50 per share)","GRAF=":"Graf Industrial Corp. Units each consisting of One share of Common Stock and One redeemable Warrant","GRAM":"Grana y Montero S.A.A. American Depositary Shares each representing five","GRBK":"Green Brick Partners Inc.","GRC":"Gorman-Rupp Company (The)","GREK":"Global X MSCI Greece","GRES":"IQ ARB Global Resources","GRF":"Eagle Capital Growth Fund Inc.","GRFS":"Grifols S.A.","GRI":"Cohen & Steers Global Realty Majors","GRID":"First Trust NASDAQ Clean Edge Smart Grid Infrastru","GRIF":"Griffin Industrial Realty Inc.","GRIN":"Grindrod Shipping Holdings Ltd.","GRMN":"Garmin Ltd.","GRNB":"VanEck Vectors Green Bond","GRNQ":"Greenpro Capital Corp.","GROW":"U.S. Global Investors Inc.","GRP=":"Granite Real Estate Inc. Stapled Units each consisting of one unit of Trust and one common share of Granite REIT Inc.","GRPN":"Groupon Inc.","GRSH":"Gores Holdings III Inc.","GRSHU":"Gores Holdings III Inc. Units","GRSHW":"Gores Holdings III Inc. Warrants","GRTS":"Gritstone Oncology Inc.","GRU":"AB Svensk Ekportkredit (Swedish Export Credit Corporation) ELEMENTS Linked to the MLCX Grains Index - Total Return","GRUB":"GrubHub Inc.","GRVY":"GRAVITY Co. Ltd.","GRX":"The Gabelli Healthcare & Wellness Trust of Beneficial Interest","GRX-A":"Gabelli Healthcare PFD SER A","GRX-B":"Gabelli Healthcare Preferred Series B","GS":"Goldman Sachs Group Inc. (The)","GS-A":"Goldman Sachs Group Inc. (The) Depositary Shares Series A","GS-B*":"Goldman Sachs Group Inc. (The) Depositary Share repstg 1/1000th Preferred Series B","GS-C":"Goldman Sachs Group Inc. (The) Depositary Share repstg 1/1000th Preferred Series C","GS-D":"Goldman Sachs Group Inc. (The) Dep Shs repstg 1/1000 Pfd Ser D Fltg","GS-J":"Goldman Sachs Group Inc Depositary Shs Repstg 1/1000th Pfd Ser J Fixed to Fltg Rate","GS-K":"Goldman Sachs Group Inc. (The) Dep Shs Repstg 1/1000 Int Sh Fxd/Fltg Non Cum Pfd Stk Ser K","GS-N":"Goldman Sachs Group Inc. (The) Depositary Shares Series N","GSAH":"GS Acquisition Holdings Corp. Class A","GSAH+":"GS Acquisition Holdings Corp. Warrants each whole warrant exercisable for one share of Class A Common Stock at an exercise price of $11.50","GSAH=":"GS Acquisition Holdings Corp. Units each consisting of one share of Class A common stock and one-third of one redeemable warrant","GSAT":"Globalstar Inc.","GSB":"GlobalSCAPE Inc.","GSBC":"Great Southern Bancorp Inc.","GSBD":"Goldman Sachs BDC Inc.","GSC":"Goldman Sachs Connect S&P Enhanced Commodity Total Return Strategy Index","GSEU":"Goldman Sachs ActiveBeta Europe Equity","GSEW":"Goldman Sachs Equal Weight U.S. Large Cap Equity","GSG":"iShares GSCI Commodity-Indexed Trust Fund","GSH":"Guangshen Railway Company Limited","GSHD":"Goosehead Insurance Inc.","GSIE":"Goldman Sachs ActiveBeta International Equity","GSIT":"GSI Technology Inc.","GSJY":"Goldman Sachs ActiveBeta Japan Equity","GSK":"GlaxoSmithKline PLC","GSKY":"GreenSky Inc.","GSL":"Global Ship Lease Inc New Class A","GSL-B":"Global Ship Lease Inc. Depository Shares Series B","GSLC":"Goldman Sachs ActiveBeta U.S. Large Cap Equity","GSM":"Ferroglobe PLC","GSP":"Barclays Bank PLC iPath Exchange Traded Notes due June 12 2036 Linked to GSCI Total Return Index","GSS":"Golden Star Resources Ltd","GSSC":"GS ActiveBeta U.S. Small Cap Equity","GSST":"Goldman Sachs Access Ultra Short Bond","GSUM":"Gridsum Holding Inc.","GSV":"Gold Standard Ventures Corporation (Canada)","GSVC":"GSV Capital Corp","GSX":"GSX Techedu Inc. American Depositary Shares three of which representing two Class A","GSY":"Invesco Ultra Short Duration","GT":"The Goodyear Tire & Rubber Company","GTE":"Gran Tierra Energy Inc.","GTES":"Gates Industrial Corporation plc","GTHX":"G1 Therapeutics Inc.","GTIM":"Good Times Restaurants Inc.","GTIP":"Goldman Sachs Access Inflation Protected USD Bond","GTLS":"Chart Industries Inc.","GTN":"Gray Television Inc.","GTN.A":"Gray Television Inc. CLass A","GTO":"Invesco Total Return Bond","GTS":"Triple-S Management Corporation Class B","GTT":"GTT Communications Inc.","GTX":"Garrett Motion Inc.","GTY":"Getty Realty Corporation","GTYH":"GTY Technology Holdings Inc.","GUDB":"Sage ESG Intermediate Credit","GULF":"WisdomTree Middle East Dividend Fund","GUNR":"FlexShares Global Upstream Natural Resources Index Fund","GURE":"Gulf Resources Inc.","GURU":"Global X Guru Index","GUSH":"Direxion Daily S&P Oil & Gas Exp. & Prod. Bull 3X Shares","GUT":"Gabelli Utility Trust (The)","GUT-A":"Gabelli Utility Trust (The) 5.625% Series A Cumulative Preferred Shares","GUT-C":"Gabelli Utility Trust (The) 5.375% Series C Cumulative Preferred Shares","GV":"Goldfield Corporation (The)","GVA":"Granite Construction Incorporated","GVAL":"Cambria Global Value","GVI":"iShares Intermediate Government/Credit Bond","GVIP":"Goldman Sachs Hedge Industry VIP","GVP":"GSE Systems Inc.","GWB":"Great Western Bancorp Inc.","GWGH":"GWG Holdings Inc","GWPH":"GW Pharmaceuticals Plc","GWR":"Genesee & Wyoming Inc. Class A","GWRE":"Guidewire Software Inc.","GWRS":"Global Water Resources Inc.","GWW":"W.W. Grainger Inc.","GWX":"SPDR S&P International SmallCap","GXC":"SPDR S&P China","GXF":"Global X FTSE Nordic Region","GXG":"Global X MSCI Colombia","GXGXU":"GX Acquisiton Corp. Unit","GYB":"CABCO Series 2004-101 Trust Goldman Sachs Capital I Floating Rate Callable Certificates","GYC":"Corporate Asset Backed Corp CABCOoration CABCO Series 2004-102 Trust (SBC Communications Inc.) Collared Floating Rate Cllable Certificates","GYLD":"Arrow Dow Jones Global Yield ETF","GYRO":"Gyrodyne  LLC","H":"Hyatt Hotels Corporation Class A","HA":"Hawaiian Holdings Inc.","HABT":"The Habit Restaurants Inc.","HACK":"ETFMG Prime Cyber Security","HAE":"Haemonetics Corporation","HAFC":"Hanmi Financial Corporation","HAIL":"SPDR S&P Kensho Smart Mobility","HAIN":"The Hain Celestial Group Inc.","HAIR":"Restoration Robotics Inc.","HAL":"Halliburton Company","HALL":"Hallmark Financial Services Inc.","HALO":"Halozyme Therapeutics Inc.","HAO":"Invesco China Small Cap","HAP":"VanEck Vectors Natural Resources","HARP":"Harpoon Therapeutics Inc.","HAS":"Hasbro Inc.","HASI":"Hannon Armstrong Sustainable Infrastructure Capital Inc.","HAUD":"iShares Currency Hedged MSCI Australia","HAUZ":"Xtrackers International Real Estate","HAWX":"iShares Currency Hedged MSCI ACWI ex U.S.","HAYN":"Haynes International Inc.","HBAN":"Huntington Bancshares Incorporated","HBANN":"Huntington Bancshares Incorporated Depositary Shares each representing a 1/40th interest in a share of 5.875% Series C Non-Cumulative Perpetual Preferred Stock","HBANO":"Huntington Bancshares Incorporated Depositary Shares","HBB":"Hamilton Beach Brands Holding Company Class A","HBCP":"Home Bancorp Inc.","HBI":"Hanesbrands Inc.","HBIO":"Harvard Bioscience Inc.","HBM":"Hudbay Minerals Inc. (Canada)","HBMD":"Howard Bancorp Inc.","HBNC":"Horizon Bancorp Inc.","HBP":"Huttig Building Products Inc.","HCA":"HCA Healthcare Inc.","HCAC":"Hennessy Capital Acquisition Corp. IV","HCACU":"Hennessy Capital Acquisition Corp. IV Unit","HCACW":"Hennessy Capital Acquisition Corp. IV Warrant","HCAP":"Harvest Capital Credit Corporation","HCAPZ":"Harvest Capital Credit Corporation 6.125% Notes due 2022","HCC":"Warrior Met Coal Inc.","HCCH":"HL Acquisitions Corp.","HCCHR":"HL Acquisitions Corp. Right","HCCHU":"HL Acquisitions Corp. Unit","HCCHW":"HL Acquisitions Corp. Warrant","HCCI":"Heritage-Crystal Clean Inc.","HCFT":"Hunt Companies Finance Trust Inc.","HCHC":"HC2 Holdings Inc.","HCI":"HCI Group Inc.","HCKT":"The Hackett Group Inc.","HCM":"Hutchison China MediTech Limited","HCP":"HCP Inc.","HCR":"Hi-Crush Inc.","HCSG":"Healthcare Services Group Inc.","HCXY":"","HCXZ":"Hercules Capital Inc. 5.25% Notes due 2025","HD":"Home Depot Inc. (The)","HDAW":"Xtrackers MSCI All World ex US High Dividend Yield Equity","HDB":"HDFC Bank Limited","HDEF":"Xtrackers MSCI EAFE High Dividend Yield Equity","HDG":"ProShares Hedge Replication","HDGE":"Ranger Equity Bear Bear","HDLV":"ETRACS Montly Pay 2xLeveraged US High Dividend Low Volatility ETN due September 30 2044","HDMV":"First Trust Exchange-Traded Fund III Horizon Managed Volatility Developed International","HDS":"HD Supply Holdings Inc.","HDSN":"Hudson Technologies Inc.","HDV":"iShares Core High Dividend","HE":"Hawaiian Electric Industries Inc.","HEAR":"Turtle Beach Corporation","HEB":"Hemispherx BioPharma Inc.","HEBT":"Hebron Technology Co. Ltd.","HECO":"Strategy Shs EcoLogical","HEDJ":"WisdomTree Europe Hedged Equity Fund","HEEM":"iShares Currency Hedged MSCI Emerging Markets","HEES":"H&E Equipment Services Inc.","HEFA":"iShares Currency Hedged MSCI EAFE","HEI":"Heico Corporation","HEI.A":"Heico Corporation","HELE":"Helen of Troy Limited","HEP":"Holly Energy Partners L.P.","HEQ":"John Hancock Hedged Equity & Income Fund of Beneficial Interest","HERD":"Pacer Cash Cows Fund of Funds ETF","HES":"Hess Corporation","HESM":"Hess Midstream Partners LP Representing Limited Partner Interests","HEWC":"iShares Currency Hedged MSCI Canada","HEWG":"iShares Currency Hedged MSCI Germany ETF","HEWI":"iShares Currency Hedged MSCI Italy","HEWJ":"iShares Currency Hedged MSCI Japan","HEWL":"iShares Currency Hedged MSCI Switzerland","HEWP":"iShares Currency Hedged MSCI Spain","HEWU":"iShares Currency Hedged MSCI United Kingdom","HEWW":"iShares Currency Hedged MSCI Mexico","HEWY":"iShares Currency Hedged MSCI South Korea","HEXO":"HEXO Corp.","HEZU":"iShares Currency Hedged MSCI Eurozone","HFBC":"HopFed Bancorp Inc.","HFBL":"Home Federal Bancorp Inc. of Louisiana","HFC":"HollyFrontier Corporation","HFFG":"HF Foods Group Inc.","HFRO":"Highland Income Fund","HFWA":"Heritage Financial Corporation","HFXE":"IQ 50 Percent Hedged FTSE Europe","HFXI":"IQ 50 Percent Hedged FTSE International","HFXJ":"IQ 50 Percent Hedged FTSE Japan","HGH":"Hartford Financial Services Group Inc. (The) 7.875% Fixed to Floating Rate Junior Subordinated Debentures due 2042","HGLB":"Highland Global Allocation Fund","HGSH":"China HGS Real Estate Inc.","HGV":"Hilton Grand Vacations Inc.","HHC":"The Howard Hughes Corporation","HHHH":"Wealthbridge Acquisition Limited","HHHHR":"Wealthbridge Acquisition Limited Rights","HHHHU":"Wealthbridge Acquisition Limited Unit","HHHHW":"Wealthbridge Acquisition Limited Warrants","HHR":"HeadHunter Group PLC","HHS":"Harte-Hanks Inc.","HI":"Hillenbrand Inc","HIBB":"Hibbett Sports Inc.","HIE":"Miller/Howard High Income Equity Fund of Beneficial Interest","HIFS":"Hingham Institution for Savings","HIG":"Hartford Financial Services Group Inc. (The)","HIG-G":"Hartford Financial Services Group Inc. (The) Depositary Shares Series G","HIHO":"Highway Holdings Limited","HII":"Huntington Ingalls Industries Inc.","HIIQ":"Health Insurance Innovations Inc.","HIL":"Hill International Inc.","HIMX":"Himax Technologies Inc.","HIO":"Western Asset High Income Opportunity Fund Inc.","HIPS":"GraniteShares HIPS US High Income","HIVE":"Aerohive Networks Inc.","HIW":"Highwoods Properties Inc.","HIX":"Western Asset High Income Fund II Inc.","HJLI":"Hancock Jaffe Laboratories Inc.","HJLIW":"Hancock Jaffe Laboratories Inc. Warrants","HJPX":"iShares Currency Hedged JPX-Nikkei 400","HJV":"MS Structured Asset Corp. SATURNS J.C. Penney Company Inc. Debenture Backed Series 2007-1 7% Callable Class A Units","HK":"Halcon Resources Corporation","HK+":"Halcon Resources Corporation Warrant","HL":"Hecla Mining Company","HL-B":"Hecla Mining Company Preferred Stock","HLF":"Herbalife Nutrition Ltd.","HLG":"Hailiang Education Group Inc.","HLI":"Houlihan Lokey Inc. Class A","HLIO":"Helios Technologies Inc.","HLIT":"Harmonic Inc.","HLM-":"","HLNE":"Hamilton Lane Incorporated","HLT":"Hilton Worldwide Holdings Inc.","HLTH":"Nobilis Health Corp.","HLX":"Helix Energy Solutions Group Inc.","HMC":"Honda Motor Company Ltd.","HMG":"HMG/Courtland Properties Inc.","HMHC":"Houghton Mifflin Harcourt Company","HMI":"Huami Corporation American Depositary Shares each representing four Class A","HMLP":"Hoegh LNG Partners LP representing Limited Partner Interests","HMLP-A":"Hoegh LNG Partners LP 8.75% Series A Cumulative Redeemable Preferred Units","HMN":"Horace Mann Educators Corporation","HMNF":"HMN Financial Inc.","HMOP":"Hartford Municipal Opportunities","HMST":"HomeStreet Inc.","HMSY":"HMS Holdings Corp","HMTV":"Hemisphere Media Group Inc.","HMY":"Harmony Gold Mining Company Limited","HNDL":"Strategy Shares Nasdaq 7HANDL Index ETF","HNGR":"Hanger Inc.","HNI":"HNI Corporation","HNNA":"Hennessy Advisors Inc.","HNP":"Huaneng Power Intl","HNRG":"Hallador Energy Company","HNW":"Pioneer Diversified High Income Trust of Beneficial Interest","HOFT":"Hooker Furniture Corporation","HOG":"Harley-Davidson Inc.","HOLD":"AdvisorShares Sage Core Reserves","HOLI":"Hollysys Automation Technologies Ltd.","HOLX":"Hologic Inc.","HOMB":"Home BancShares Inc.","HOME":"At Home Group Inc.","HOML":"ETRACS Monthly Reset 2xLeveraged ISE Exclusively Homebuilders ETN due March 13 2045","HOMZ":"Hoya Capital Housing","HON":"Honeywell International Inc.","HONE":"HarborOne Bancorp Inc.","HONR":"InsightShares Patriotic Employers","HOOK":"HOOKIPA Pharma Inc.","HOPE":"Hope Bancorp Inc.","HOS":"Hornbeck Offshore Services","HOTH":"Hoth Therapeutics Inc.","HOV":"Hovnanian Enterprises Inc. Class A","HOVNP":"Hovnanian Enterprises Inc Depositary Share representing 1/1000th of 7.625% Series A Preferred Stock","HP":"Helmerich & Payne Inc.","HPE":"Hewlett Packard Enterprise Company","HPF":"John Hancock Pfd Income Fund II Pfd Income Fund II","HPI":"John Hancock Preferred Income Fund of Beneficial Interest","HPJ":"Highpower International Inc","HPP":"Hudson Pacific Properties Inc.","HPQ":"HP Inc.","HPR":"HighPoint Resources Corporation","HPS":"John Hancock Preferred Income Fund III Preferred Income Fund III","HPT":"Hospitality Properties Trust","HQH":"Tekla Healthcare Investors","HQL":"TeklaLife Sciences Investors","HQY":"HealthEquity Inc.","HR":"Healthcare Realty Trust Incorporated","HRB":"H&R Block Inc.","HRC":"Hill-Rom Holdings Inc","HRI":"Herc Holdings Inc.","HRL":"Hormel Foods Corporation","HROW":"Harrow Health Inc.","HRTG":"Heritage Insurance Holdings Inc.","HRTX":"Heron Therapeutics Inc.","HRZN":"Horizon Technology Finance Corporation","HSAC":"Health Sciences Acquisitions Corporation","HSACU":"Health Sciences Acquisitions Corporation Units","HSACW":"Health Sciences Acquisitions Corporation Warrants","HSBC":"HSBC Holdings plc.","HSBC-A":"HSBC Holdings plc. ADR SER A REP 1/40 PFD SER A","HSC":"Harsco Corporation","HSCZ":"iShares Currency Hedged MSCI EAFE Small-Cap","HSDT":"Helius Medical Technologies Inc.","HSGX":"Histogenics Corporation","HSIC":"Henry Schein Inc.","HSII":"Heidrick & Struggles International Inc.","HSKA":"Heska Corporation","HSON":"Hudson Global Inc.","HSPX":"Global X Funds S&P 500 Covered Call","HSRT":"Hartford Short Duration","HST":"Host Hotels & Resorts Inc.","HSTM":"HealthStream Inc.","HSY":"The Hershey Company","HT":"Hersha Hospitality Trust Class A of Beneficial Interest","HT-C":"Hersha Hospitality Trust 6.875% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest","HT-D":"Hersha Hospitality Trust 6.50% Series D Cumulative Redeemable Preferred Shares of Beneficial Interest $0.01 par value per share","HT-E":"Hersha Hospitality Trust 6.50% Series E Cumulative Redeemable Preferred Shares of Beneficial Interest","HTA":"Healthcare Trust of America Inc. Class A","HTAB":"Hartford Schroders Tax-Aware Bond","HTBI":"HomeTrust Bancshares Inc.","HTBK":"Heritage Commerce Corp","HTBX":"Heat Biologics Inc.","HTD":"John Hancock Tax Advantaged Dividend Income Fund of Beneficial Interest","HTEC":"Robo Global Healthcare Technology and Innovation","HTFA":"Horizon Technology Finance Corporation 6.25% Notes due 2022","HTGC":"Hercules Capital Inc.","HTGM":"HTG Molecular Diagnostics Inc.","HTH":"Hilltop Holdings Inc.","HTHT":"Huazhu Group Limited","HTLD":"Heartland Express Inc.","HTLF":"Heartland Financial USA Inc.","HTRB":"Hartford Total Return Bond","HTUS":"Hull Tactical US","HTY":"John Hancock Tax-Advantaged Global Shareholder Yield Fund of Beneficial Interest","HTZ":"Hertz Global Holdings Inc","HUBB":"Hubbell Inc","HUBG":"Hub Group Inc.","HUBS":"HubSpot Inc.","HUD":"Hudson Ltd. Class A","HUM":"Humana Inc.","HUN":"Huntsman Corporation","HURC":"Hurco Companies Inc.","HURN":"Huron Consulting Group Inc.","HUSA":"Houston American Energy Corporation","HUSE":"Strategy Shares US Market Rotation","HUSV":"First Trust Exchange-Traded Fund III Horizon Managed Volatility Domestic","HUYA":"HUYA Inc. American depositary shares each representing one Class A","HVBC":"HV Bancorp Inc.","HVT":"Haverty Furniture Companies Inc.","HVT.A":"Haverty Furniture Companies Inc.","HWBK":"Hawthorn Bancshares Inc.","HWC":"Hancock Whitney Corporation","HWCC":"Houston Wire & Cable Company","HWCPL":"","HWKN":"Hawkins Inc.","HX":"Hexindai Inc.","HXL":"Hexcel Corporation","HY":"Hyster-Yale Materials Handling Inc. Class A","HYACU":"Haymaker Acquisition Corp. II Unit","HYB":"New America High Income Fund Inc. (The)","HYD":"VanEck Vectors High Yield Municipal Index","HYDB":"iShares Edge High Yield Defensive Bond","HYDD":"Direxion Daily High Yield Bear 2X Shares","HYDW":"Xtrackers Low Beta High Yield Bond","HYEM":"VanEck Vectors Emerging Markets High Yield Bond","HYG":"iShares iBoxx $ High Yield Corporate Bond","HYGH":"iShares Interest Rate Hedged High Yield Bond","HYGS":"Hydrogenics Corporation","HYGV":"FlexShares High Yield Value-Scored Bond Index Fund","HYHG":"ProShares High Yield Interest Rate Hedged","HYI":"Western Asset High Yield Defined Opportunity Fund Inc.","HYIH":"Xtrackers High Yield Corporate Bond - Interest Rate Hedged","HYLB":"Xtrackers USD High Yield Corporate Bond","HYLD":"High Yield","HYLS":"First Trust High Yield Long/Short ETF","HYLV":"IndexIQ ETF Trust IQ S&P High Yield Low Volatility Bond","HYMB":"SPDR Nuveen S&P High Yield Municipal Bond","HYND":"WisdomTree BofA Merrill Lynch High Yield Bond Nega","HYRE":"HyreCar Inc.","HYS":"PIMCO 0-5 Year High Yield Corporat Bond Index Exchange-Traded Fund","HYT":"Blackrock Corporate High Yield Fund Inc.","HYUP":"Xtrackers High Beta High Yield Bond","HYXE":"iShares iBoxx $ High Yield ex Oil & Gas Corporate","HYXU":"iShares International High Yield Bond","HYZD":"WisdomTree BofA Merrill Lynch High Yield Bond Zero","HZN":"Horizon Global Corporation","HZNP":"Horizon Therapeutics Public Limited Company","HZO":"MarineMax Inc. (FL)","I":"Intelsat S.A.","IAA":"IAA Inc.","IAC":"IAC/InterActiveCorp","IAE":"Voya Asia Pacific High Dividend Equity Income Fund ING Asia Pacific High Dividend Equity Income Fund of Beneficial Interest","IAF":"Aberdeen Australia Equity Fund Inc","IAG":"Iamgold Corporation","IAGG":"iShares International Aggregate Bond Fund","IAI":"iShares U.S. Broker-Dealers & Securities Exchanges","IAK":"iShares U.S. Insurance","IART":"Integra LifeSciences Holdings Corporation","IAT":"iShares U.S. Regional Banks","IAU":"ishares Gold Trust","IAUF":"iShares Gold Strategy","IBA":"Industrias Bachoco S.A.B. de C.V.","IBB":"iShares Nasdaq Biotechnology Index Fund","IBCD":"iShares iBonds Mar 2020 Term Corporate ex-Financials Term","IBCE":"iShares iBonds Mar 2023 Term Corporate ex-Financials","IBCP":"Independent Bank Corporation","IBD":"Inspire Corporate Bond Impact","IBDC":"iShares iBonds Mar 2020 Term Corporate","IBDD":"iShares iBonds Mar 2023 Term Corporate","IBDK":"iShares iBonds Dec 2019 Term Corporate","IBDL":"iShares iBonds Dec 2020 Term Corporate","IBDM":"iShares iBonds Dec 2021 Term Corporate","IBDN":"iShares iBonds Dec 2022 Term Corporate","IBDO":"iShares iBonds Dec 2023 Term Corporate","IBDP":"iShares iBonds Dec 2024 Term Corporate","IBDQ":"iShares iBonds Dec 2025 Term Corporate","IBDR":"iShares iBonds Dec 2026 Term Corporate","IBDS":"iShares iBonds Dec 2027 Term Corporate","IBDT":"iShares iBonds Dec 2028 Term Corporate","IBHA":"iShares iBonds 2021 Term High Yield and Income","IBHB":"iShares iBonds 2022 Term High Yield and Income","IBHC":"iShares iBonds 2023 Term High Yield and Income","IBHD":"iShares iBonds 2024 Term High Yield and Income","IBHE":"iShares iBonds 2025 Term High Yield and Income","IBIO":"iBio Inc.","IBKC":"IBERIABANK Corporation","IBKCN":"IBERIABANK Corporation Depositary Shares each representing a 1/400th ownership interest in a share of our 6.100% Fixed-to-Floating Non-Cumulative Perpetual Pref","IBKCO":"IBERIABANK Corporation Depositary Shares Representing Series C Fixed to Floating","IBKCP":"IBERIABANK Corporation Depositary Shares Representing Series B Fixed to Floating","IBKR":"Interactive Brokers Group, Inc.","IBM":"International Business Machines Corporation","IBMH":"iShares iBonds Sep 2019 Term Muni Bond","IBMI":"iShares iBonds Sep 2020 Term Muni Bond","IBMJ":"iShares iBonds Dec 2021 Term Muni Bond","IBMK":"iShares iBonds Dec 2022 Term Muni Bond","IBML":"iShares iBonds Dec 2023 Term Muni Bond","IBMM":"iShares iBonds Dec 2024 Term Muni Bond","IBMN":"iShares iBonds Dec 2025 Term Muni Bond","IBMO":"iShares iBonds Dec 2026 Term Muni Bond","IBMP":"iShares iBonds Dec 2027 Term Muni Bond","IBMQ":"iShares iBonds Dec 2028 Term Muni Bond","IBN":"ICICI Bank Limited","IBND":"SPDR Bloomberg Barclays International Corporate Bond","IBOC":"International Bancshares Corporation","IBP":"Installed Building Products Inc.","IBTX":"Independent Bank Group Inc","IBUY":"Amplify Online Retail ETF","ICAD":"iCad Inc.","ICBK":"County Bancorp Inc.","ICCC":"ImmuCell Corporation","ICCH":"ICC Holdings Inc.","ICD":"Independence Contract Drilling Inc.","ICE":"Intercontinental Exchange Inc.","ICF":"iShares Cohen & Steers REIT","ICFI":"ICF International Inc.","ICHR":"Ichor Holdings","ICL":"Israel Chemicals Limited","ICLK":"iClick Interactive Asia Group Limited","ICLN":"iShares S&P Global Clean Energy Index Fund","ICLR":"ICON plc","ICOL":"iShares Inc MSCI Colombia","ICON":"Iconix Brand Group Inc.","ICOW":"Pacer Developed Markets International Cash Cows 100","ICPT":"Intercept Pharmaceuticals Inc.","ICSH":"iShares Ultra Short-Term Bond","ICUI":"ICU Medical Inc.","ICVT":"iShares Convertible Bond","IDA":"IDACORP Inc.","IDCC":"InterDigital Inc.","IDE":"Voya Infrastructure Industrials and Materials Fund of Beneficial Interest","IDEV":"iShares Core MSCI International Developed Markets","IDEX":"Ideanomics Inc.","IDHD":"Invesco S&P International Developed High Dividend Low Volatility","IDHQ":"Invesco S&P International Developed Quality","IDIV":"U.S. Equity Cumulative Dividends Fund Series 2027 Shares","IDLB":"PowerShares FTSE International Low Beta Equal Weig","IDLV":"Invesco S&P International Developed Low Volatility","IDMO":"Invesco S&P International Developed Momentum","IDN":"Intellicheck Inc.","IDNA":"iShares Genomics Immunology and Healthcare","IDOG":"ALPS International Sector Dividend Dogs","IDRA":"Idera Pharmaceuticals Inc.","IDRV":"iShares Self-Driving EV and Tech","IDSA":"Industrial Services of America Inc.","IDSY":"I.D. Systems Inc.","IDT":"IDT Corporation Class B","IDU":"iShares U.S. Utilities","IDV":"iShares International Select Dividend","IDX":"VanEck Vectors Indonesia Index","IDXG":"Interpace Diagnostics Group Inc.","IDXX":"IDEXX Laboratories Inc.","IDYA":"IDEAYA Biosciences Inc.","IEA":"Infrastructure and Energy Alternatives Inc.","IEAWW":"Infrastructure and Energy Alternatives Inc. Warrant","IEC":"IEC Electronics Corp.","IECS":"iShares Evolved U.S. Consumer Staples","IEDI":"iShares Evolved U.S. Discretionary Spending","IEF":"iShares 7-10 Year Treasury Bond ETF","IEFA":"iShares Core MSCI EAFE","IEFN":"iShares Evolved U.S. Financials","IEHS":"iShares Evolved U.S. Healthcare Staples","IEI":"iShares 3-7 Year Treasury Bond ETF","IEIH":"iShares Evolved U.S. Innovative Healthcare","IEMD":"Invesco Emerging Markets Debt Defensive","IEME":"iShares Evolved U.S. Media and Entertainment","IEMG":"iShares Core MSCI Emerging Markets","IEMV":"Invesco Emerging Markets Debt Value","IEO":"iShares U.S. Oil & Gas Exploration & Production","IEP":"Icahn Enterprises L.P.","IESC":"IES Holdings Inc.","IETC":"iShares Evolved U.S. Technology","IEUR":"iShares Core MSCI Europe","IEUS":"iShares Developed Small Cap ex-North America","IEV":"iShares Europe","IEX":"IDEX Corporation","IEZ":"iShares U.S. Oil Equipment & Services","IFEU":"iShares FTSE EPRA/NAREIT Europe Index Fund","IFF":"Internationa Flavors & Fragrances Inc.","IFFT":"International Flavors & Fragrances Inc. 6.00% Tangible Equity Units","IFGL":"iShares FTSE EPRA/NAREIT Global Real Estate ex-U.S. Index Fund","IFIX":"Xtrackers Barclays International Corporate Bond Hedged","IFLY":"ETFMG Drone Economy Strategy","IFMK":"iFresh Inc.","IFN":"India Fund Inc. (The)","IFRA":"iShares U.S. Infrastructure","IFRX":"InflaRx N.V.","IFV":"First Trust Dorsey Wright International Focus 5","IG":"Principal Investment Grade Corporate Active","IGA":"Voya Global Advantage and Premium Opportunity Fund of Beneficial Interest","IGBH":"iShares Interest Rate Hedged Long-Term Corporate Bond","IGC":"India Globalization Capital Inc.","IGD":"Voya Global Equity Dividend and Premium Opportunity Fund","IGE":"iShares North American Natural Resources","IGEB":"iShares Edge Investment Grade Enhanced Bond","IGF":"iShares Global Infrastructure ETF","IGHG":"ProShares Investment Grade-Interest Rate Hedged","IGI":"Western Asset Investment Grade Defined Opportunity Trust Inc.","IGIB":"iShares Intermediate Credit Bond ETF","IGIH":"Xtrackers Investment Grade Bond - Interest Rate Hedged","IGLB":"Shares Long-Term Corporate Bond","IGLD":"Internet Gold Golden Lines Ltd.","IGM":"iShares Expanded Tech Sector","IGN":"iShares North American Tech-Multimedia Networking","IGOV":"iShares S&P/Citigroup International Treasury Bond","IGR":"CBRE Clarion Global Real Estate Income Fund","IGRO":"iShares International Dividend Growth","IGSB":"iShares 1-3 Year Credit Bond ETF","IGT":"International Game Technology","IGV":"iShares Expanded Tech-Software Sector","IGVT":"Xtrackers Barclays International Treasury Bond Hedged","IHAK":"iShares Cybersecurity and Tech","IHC":"Independence Holding Company","IHD":"Voya Emerging Markets High Income Dividend Equity Fund","IHDG":"WisdomTree International Hedged Quality Dividend Growth Fund","IHE":"iShares U.S. Pharmaceutical","IHF":"iShares U.S. Health Care Providers","IHG":"Intercontinental Hotels Group American Depositary Shares (Each representing one)","IHI":"iShares U.S. Medical Devices","IHIT":"Invesco High Income 2023 Target Term Fund of Beneficial Interest","IHT":"InnSuites Hospitality Trust Shares of Beneficial Interest","IHTA":"Invesco High Income 2024 Target Term Fund of Beneficial Interest No par value per share","IHY":"VanEck Vectors International High Yield Bond","IHYD":"Invesco Corporate Income Defensive","IHYV":"Invesco Corporate Income Value","IID":"Voya International High Dividend Equity Income Fund of Beneficial Interest","IIF":"Morgan Stanley India Investment Fund Inc.","IIGD":"Invesco Investment Grade Defensive","IIGV":"Invesco Investment Grade Value","III":"Information Services Group Inc.","IIIN":"Insteel Industries Inc.","IIIV":"i3 Verticals Inc.","IIM":"Invesco Value Municipal Income Trust","IIN":"IntriCon Corporation","IIPR":"Innovative Industrial Properties Inc.","IIPR-A":"Innovative Industrial Properties Inc. 9.00% Series A Cumulative Redeemable Preferred Stock","IIVI":"II-VI Incorporated","IJH":"iShares Core S&P Mid-Cap","IJJ":"iShares S&P Mid-Cap 400 Value","IJK":"iShares S&P Mid-Cap 400 Growth","IJR":"iShares Core S&P Small-Cap","IJS":"iShares S&P SmallCap 600 Value","IJT":"iShares S&P Small-Cap 600 Growth ETF","IJUL":"Innovator MSCI EAFE Power Buffer ETF - July","IKNX":"Ikonics Corporation","ILF":"iShares Latin America 40","ILMN":"Illumina Inc.","ILPT":"Industrial Logistics Properties Trust","ILTB":"iShares Core 10 Year USD Bond","IMAC":"IMAC Holdings Inc.","IMACW":"IMAC Holdings Inc. Warrant","IMAX":"Imax Corporation","IMFC":"Invesco Multi-Factor Core Fixed Income","IMFD":"Invesco Multi-Factor Defensive Core Fixed Income","IMFI":"Invesco Multi-Factor Income","IMFP":"Invesco Multi-Factor Core Plus Fixed Income","IMGN":"ImmunoGen Inc.","IMH":"Impac Mortgage Holdings Inc.","IMI":"Intermolecular Inc.","IMKTA":"Ingles Markets Incorporated Class A Common Stock","IMLP":"iPath S&P MLP ETN","IMMP":"Immutep Limited","IMMR":"Immersion Corporation","IMMU":"Immunomedics Inc.","IMO":"Imperial Oil Limited","IMOM":"Alpha Architect International Quantitative Momentum","IMOS":"ChipMOS TECHNOLOGIES INC.","IMRN":"Immuron Limited","IMRNW":"Immuron Limited Warrants","IMTB":"iShares Core 5-10 Year USD Bond","IMTE":"Integrated Media Technology Limited","IMTM":"iShares Edge MSCI Intl Momentum Factor","IMUX":"Immunic Inc.","IMV":"IMV Inc.","IMXI":"International Money Express Inc.","INAG":"Innovation Global","INAP":"Internap Corporation","INAU":"Innovation United States","INB":"Cohen & Steers Global Income Builder Inc. of Beneficial Interest","INBK":"First Internet Bancorp","INBKL":"First Internet Bancorp 6.0% Fixed-to-Floating Rate Subordinated Notes due 2026","INBKZ":"First Internet Bancorp Fixed-to-Floating Rate Subordinated Notes Due 2029","INCO":"Columbia India Consumer","INCY":"Incyte Corporation","INDA":"Ishares MSCI India","INDB":"Independent Bank Corp.","INDL":"Direxion Daily MSCI India Bull 3x Shares","INDS":"Pacer Benchmark Industrial Real Estate SCTR","INDY":"iShares S&P India Nifty 50 Index Fund","INF":"Brookfield Global Listed Infrastructure Income Fund Closed End Fund","INFI":"Infinity Pharmaceuticals Inc.","INFN":"Infinera Corporation","INFO":"IHS Markit Ltd.","INFR":"Legg Mason Global Infrastructure ETF","INFU":"InfuSystems Holdings Inc.","INFY":"Infosys Limited American Depositary Shares","ING":"ING Group N.V.","INGN":"Inogen Inc","INGR":"Ingredion Incorporated","INKM":"SPDR SSgA Income Allocation","INMB":"INmune Bio Inc.","INN":"Summit Hotel Properties Inc.","INN-D":"Summit Hotel Properties Inc. 6.45% Series D Cumulative Redeemable Preferred Stock","INN-E":"Summit Hotel Properties Inc. 6.250% Series E Cumulative Redeemable Preferred Stock","INNT":"Innovate Biopharmaceuticals Inc.","INO":"Inovio Pharmaceuticals Inc.","INOD":"Innodata Inc.","INOV":"Inovalon Holdings Inc.","INPX":"Inpixon","INR":"Market Vectors Indian Rupee/USD ETN","INS":"Intelligent Systems Corporation","INSE":"Inspired Entertainment Inc.","INSG":"Inseego Corp.","INSI":"Insight Select Income Fund","INSM":"Insmed Inc.","INSP":"Inspire Medical Systems Inc.","INST":"Instructure Inc.","INSU":"Insurance Acquisition Corp.","INSUU":"Insurance Acquisition Corp. Unit","INSUW":"Insurance Acquisition Corp. Warrant","INSW":"International Seaways Inc.","INSW-A":"","INT":"World Fuel Services Corporation","INTC":"Intel Corporation","INTF":"iShares Edge MSCI Multifactor Intl","INTG":"The Intergroup Corporation","INTL":"INTL FCStone Inc.","INTT":"inTest Corporation","INTU":"Intuit Inc.","INUV":"Inuvo Inc.","INVA":"Innoviva Inc.","INVE":"Identiv Inc.","INVH":"Invitation Homes Inc.","INWK":"InnerWorkings Inc.","INXN":"InterXion Holding N.V. (0.01 nominal value)","IO":"Ion Geophysical Corporation","IONS":"Ionis Pharmaceuticals Inc.","IOO":"iShares Global 100","IOR":"Income Opportunity Realty Investors Inc.","IOSP":"Innospec Inc.","IOTS":"Adesto Technologies Corporation","IOVA":"Iovance Biotherapeutics Inc.","IP":"International Paper Company","IPAC":"iShares Core MSCI Pacific","IPAR":"Inter Parfums Inc.","IPAY":"ETFMG Prime Mobile Payments","IPB":"Merrill Lynch & Co. Inc. 6.0518% Index Plus Trust Certificates Series 2003-1","IPDN":"Professional Diversity Network Inc.","IPE":"SPDR Bloomberg Barclays TIPS","IPFF":"iShares International Preferred Stock","IPG":"Interpublic Group of Companies Inc. (The)","IPGP":"IPG Photonics Corporation","IPHI":"Inphi Corporation $0.001 par value","IPHS":"Innophos Holdings Inc.","IPI":"Intrepid Potash Inc","IPIC":"iPic Entertainment Inc.","IPKW":"PowerShares International BuyBack Achievers Portfo","IPLDP":"Interstate Power and Light Company Interstate Power & Light Company Perp Preferred 5.10% Series D","IPO":"Renaissance IPO","IPOA":"Social Capital Hedosophia Holdings Corp. Class A par value $0.0001","IPOA+":"","IPOA=":"Social Capital Hedosophia Holdings Corp. Units each consisting of one Class A Ordinary Share and one-third of one warrant","IPOS":"Renaissance Capital Greenwich Fund","IPWR":"Ideal Power Inc.","IQ":"iQIYI Inc.","IQDE":"FlexShares International Quality Dividend Defensive Index Fund","IQDF":"FlexShares International Quality Dividend Index Fund","IQDG":"WisdomTree International Quality Dividend Growth Fund","IQDY":"FlexShares International Quality Dividend Dynamic Index Fund","IQI":"Invesco Quality Municipal Income Trust","IQIN":"IQ 500 International","IQLT":"iShares Edge MSCI Intl Quality Factor","IQV":"IQVIA Holdings Inc.","IR":"Ingersoll-Rand plc (Ireland)","IRBO":"iShares Robotics and Artificial Intelligence","IRBT":"iRobot Corporation","IRCP":"IRSA Propiedades Comerciales S.A.","IRDM":"Iridium Communications Inc","IRET":"Investors Real Estate Trust Shares of Beneficial Interest","IRET-C":"Investors Real Estate Trust 6.625% Series C Cumulative Redeemable Preferred Shares (Liquidation Preference $25.00 Per Share)","IRIX":"IRIDEX Corporation","IRL":"New Ireland Fund Inc (The)","IRM":"Iron Mountain Incorporated (Delaware)Common Stock REIT","IRMD":"iRadimed Corporation","IROQ":"IF Bancorp Inc.","IRR":"Voya Natural Resources Equity Income Fund of Beneficial Interest","IRS":"IRSA Inversiones Y Representaciones S.A.","IRT":"Independence Realty Trust Inc.","IRTC":"iRhythm Technologies Inc.","IRWD":"Ironwood Pharmaceuticals Inc.","ISBC":"Investors Bancorp Inc.","ISCA":"International Speedway Corporation","ISCF":"iShares Edge MSCI Intl Size Factor","ISD":"PGIM High Yield Bond Fund Inc.","ISDR":"Issuer Direct Corporation","ISDS":"Invesco RAFI Strategic Developed ex-US Small Company ETF","ISDX":"Invesco RAFI Strategic Developed ex-US ETF","ISEE":"IVERIC bio Inc.","ISEM":"Invesco RAFI Strategic Emerging Markets ETF","ISG":"ING Group N.V. Perpetual Dent Secs 6.125%","ISHG":"iShares S&P/Citigroup 1-3 Yr Intl Treasury Bond","ISIG":"Insignia Systems Inc.","ISMD":"Inspire Small/Mid Cap Impact","ISNS":"Image Sensing Systems Inc.","ISR":"IsoRay Inc. (DE)","ISRA":"VanEck Vectors Israel","ISRG":"Intuitive Surgical Inc.","ISRL":"Isramco Inc.","ISSC":"Innovative Solutions and Support Inc.","ISTB":"iShares Core 1-5 Year USD Bond ETF","ISTR":"Investar Holding Corporation","ISZE":"iShares Edge MSCI Intl Size Factor","IT":"Gartner Inc.","ITA":"iShares U.S. Aerospace & Defense","ITB":"iShares U.S. Home Construction","ITCB":"Itau CorpBanca American Depositary Shares (each representing 1500 shares of no par value)","ITCI":"Intra-Cellular Therapies Inc.","ITE":"SPDR Bloomberg Barclays Intermediate Term Treasury","ITEQ":"BlueStar Israel Technology","ITGR":"Integer Holdings Corporation","ITI":"Iteris Inc.","ITIC":"Investors Title Company","ITM":"VanEck Vectors AMT-Free Intermediate Municipal Index","ITMR":"Itamar Medical Ltd.","ITOT":"iShares Core S&P Total U.S. Stock Market","ITP":"IT Tech Packaging Inc.","ITRI":"Itron Inc.","ITRM":"Iterum Therapeutics plc","ITRN":"Ituran Location and Control Ltd.","ITT":"ITT Inc.","ITUB":"Itau Unibanco Banco Holding SA American Depositary Shares (Each repstg 500 Preferred shares)","ITW":"Illinois Tool Works Inc.","IUS":"Invesco RAFI Strategic US ETF","IUSB":"iShares Core Total USD Bond Market ETF","IUSG":"iShares Core S&P U.S. Growth ETF","IUSS":"Invesco RAFI Strategic US Small Company ETF","IUSV":"iShares Core S&P U.S. Value ETF","IVAC":"Intevac Inc.","IVAL":"Alpha Architect International Quantitative Value","IVC":"Invacare Corporation","IVE":"iShares S&P 500 Value","IVENC":"Ivy Focused Energy NextShares Fund","IVFGC":"Ivy Focused Growth NextShares","IVFVC":"Ivy Focused Value NextShares","IVH":"Ivy High Income Opportunities Fund of Beneficial Interest","IVLU":"iShares Edge MSCI Intl Value Factor","IVOG":"Vanguard S&P Mid-Cap 400 Growth","IVOL":"Quadratic Interest Rate Volatility and Inflation Hedge","IVOO":"Vanguard S&P Mid-Cap 400","IVOV":"Vanguard S&P Mid-Cap 400 Value","IVR":"INVESCO MORTGAGE CAPITAL INC","IVR-A":"Invesco Mortgage Capital Inc. Pfd Ser A","IVR-B":"Invesco Mortgage Capital Inc. Preferred Series B Cum Fxd to Fltg","IVR-C":"INVESCO MORTGAGE CAPITAL INC 7.5% Fixed-to-Floating Series C Cumulative Redeemable Preferred Stock Liquation Preference $25.00 per Share","IVV":"iShares Core S&P 500","IVW":"iShares S&P 500 Growth","IVZ":"Invesco Ltd","IWB":"iShares Russell 1000","IWC":"iShares Microcap","IWD":"iShares Russell 1000 Value","IWF":"iShares Russell 1000 Growth","IWL":"iShares Russell Top 200","IWM":"iShares Russell 2000","IWN":"iShares Russell 2000 Value","IWO":"iShares Russell 2000 Growth","IWP":"iShares Russell Midcap Growth","IWR":"iShares Russell Mid-Cap","IWS":"iShares Russell Mid-cap Value","IWV":"iShares Russell 3000","IWX":"iShares Russell Top 200 Value","IWY":"iShares Russell Top 200 Growth","IX":"Orix Corp Ads","IXC":"iShares Global Energy","IXG":"iShares Global Financial","IXJ":"iShares Global Healthcare","IXN":"iShares Global Tech","IXP":"iShares Global Comm Services","IXSE":"WisdomTree India Ex-State-Owned Enterprises Fund","IXUS":"iShares Core MSCI Total International Stock ETF","IYC":"iShares U.S. Consumer Services","IYE":"iShares U.S. Energy","IYF":"iShares U.S. Financial","IYG":"iShares U.S. Financial Services","IYH":"iShares U.S. Healthcare","IYJ":"iShares U.S. Industrials","IYK":"iShares U.S. Consumer Goods","IYLD":"iShares Morningstar Multi-Asset Income","IYM":"iShares U.S. Basic Materials","IYR":"iShares U.S. Real Estate","IYT":"iShares Transportation Average","IYW":"iShares U.S. Technology","IYY":"iShares Dow Jones U.S.","IYZ":"iShares U.S. Telecommunications","IZEA":"IZEA Worldwide Inc.","IZRL":"ARK Israel Innovative Technology","JACK":"Jack In The Box Inc.","JAG":"Jagged Peak Energy Inc.","JAGG":"JPMorgan U.S. Aggregate Bond","JAGX":"Jaguar Health Inc.","JAKK":"JAKKS Pacific Inc.","JAMF":"WISDOMTREE JAPAN MULTIFACTOR","JASN":"Jason Industries Inc.","JAX":"J. Alexander's Holdings Inc.","JAZZ":"Jazz Pharmaceuticals plc","JBGS":"JBG SMITH Properties","JBHT":"J.B. Hunt Transport Services Inc.","JBK":"Lehman ABS 3.50 3.50% Adjustable Corp Backed Tr Certs GS Cap I","JBL":"Jabil Inc.","JBLU":"JetBlue Airways Corporation","JBN":"Select Asset Inc. on behalf of Corporate Backed Callable Trust Certificates J.C. Penney Debenture Backed Series 2007-1 Trust","JBR":"Select Asset Inc. Corporate Backed Callable Trust Certificates J.C. Penney Debenture-Backed Series 2006-1 Class A-1","JBSS":"John B. Sanfilippo & Son Inc.","JBT":"John Bean Technologies Corporation","JCAP":"Jernigan Capital Inc.","JCAP-B":"Jernigan Capital Inc. 7.00% Series B Cumulative Redeemable Perpetual Preferred Stock","JCE":"Nuveen Core Equity Alpha Fund of Beneficial Interest","JCI":"Johnson Controls International plc","JCO":"Nuveen Credit Opportunities 2022 Target Term Fund of Beneficial Interest","JCOM":"j2 Global Inc.","JCP":"J.C. Penney Company Inc.","JCPB":"JPMorgan Core Plus Bond","JCS":"Communications Systems Inc.","JCTCF":"Jewett-Cameron Trading Company","JD":"JD.com Inc.","JDD":"Nuveen Diversified Dividend and Income Fund Shares of Beneficial Interest","JDIV":"JPMorgan U.S. Dividend","JDST":"Direxion Daily Junior Gold Miners Index Bear 3X Shares","JE":"Just Energy Group Inc. (Canada)","JE-A":"Just Energy Group Inc. 8.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares","JEC":"Jacobs Engineering Group Inc.","JEF":"Jefferies Financial Group Inc.","JELD":"JELD-WEN Holding Inc.","JEMD":"Nuveen Emerging Markets Debt 2022 Target Term Fund of Beneficial Interest $0.01 par value per share","JEQ":"Aberdeen Japan Equity Fund Inc.","JETS":"U.S. Global Jets","JFIN":"Jiayin Group Inc.","JFK":"8i Enterprises Acquisition Corp","JFKKR":"8i Enterprises Acquisition Corp Right","JFKKU":"8i Enterprises Acquisition Corp Unit","JFKKW":"8i Enterprises Acquisition Corp Warrant","JFR":"Nuveen Floating Rate Income Fund","JG":"Aurora Mobile Limited","JGH":"Nuveen Global High Income Fund of Beneficial Interest","JHAA":"Nuveen High Income 2023 Target Term Fund of Beneficial Interest","JHB":"Nuveen High Income November 2021 Target Term Fund","JHCS":"John Hancock Multifactor Media and Communications","JHD":"Nuveen High Income December 2019 Target Term Fund of Beneficial Interest","JHEM":"John Hancock Multifactor Emerging Markets","JHG":"Janus Henderson Group plc","JHI":"John Hancock Investors Trust","JHMA":"John Hancock Multifactor Materials","JHMC":"John Hancock Multifactor Consumer Discretionary","JHMD":"John Hancock Exchange-Traded Fund Trust Multifactor Developed International","JHME":"John Hancock Multifactor Energy","JHMF":"John Hancock Multifactor Financials","JHMH":"John Hancock Multifactor Healthcare","JHMI":"John Hancock Multifactor Industrials","JHML":"John Hancock Multifactor Large Cap","JHMM":"John Hancock Multifactor Mid Cap","JHMS":"John Hancock Multifactor Consumer Staples","JHMT":"John Hancock Multifactor Technology","JHMU":"John Hancock Multifactor Utilities","JHS":"John Hancock Income Securities Trust","JHSC":"John Hancock Multifactor Small Cap","JHX":"James Hardie Industries plc American Depositary Shares (Ireland)","JHY":"Nuveen High Income 2020 Target Term Fund of Beneficial Interest","JIGB":"JPMorgan Corporate Bond Research Enhanced","JILL":"J. Jill Inc.","JJA":"iPathA Series B Bloomberg Agriculture Subindex Total Return ETN","JJC":"iPathA Series B Bloomberg Copper Subindex Total Return ETN","JJE":"iPathA Series B Bloomberg Energy Subindex Total Return ETN","JJG":"iPathA Series B Bloomberg Grains Subindex Total Return ETN","JJM":"iPathA Series B Bloomberg Industrial Metals Subindex Total Return ETN","JJN":"iPathA Series B Bloomberg Nickel Subindex Total Return ETN","JJP":"iPathA Series B Bloomberg Precious Metals Subindex Total Return ETN","JJS":"iPathA Series B Bloomberg Softs Subindex Total Return ETN","JJSF":"J & J Snack Foods Corp.","JJT":"iPathA Series B Bloomberg Tin Subindex Total Return ETN","JJU":"iPathA Series B Bloomberg Aluminum Subindex Total Return ETN","JKD":"iShares Morningstar Large-Cap","JKE":"iShares Morningstar Large-Cap Growth","JKF":"iShares Morningstar Large-Cap Value","JKG":"iShares Morningstar Mid-Cap","JKH":"iShares Morningstar Mid-Cap Growth","JKHY":"Jack Henry & Associates Inc.","JKI":"iShares Morningstar Mid-Cap Value ETF","JKJ":"iShares Morningstar Small-Cap","JKK":"iShares Morningstar Small-Cap Growth","JKL":"iShares Morningstar Small-Cap Value ETFnd","JKS":"JinkoSolar Holding Company Limited American Depositary Shares (each representing 4)","JLL":"Jones Lang LaSalle Incorporated","JLS":"Nuveen Mortgage Opportunity Term Fund","JMBS":"Janus Henderson Mortgage-Backed Securities","JMEI":"Jumei International Holding Limited American Depositary Shares each representing one Class A","JMF":"Nuveen Energy MLP Total Return Fund of Beneficial Interest","JMIA":"Jumia Technologies AG American Depositary Shares each representing two","JMIN":"JPMorgan U.S. Minimum Volatility","JMLP":"Nuveen All Cap Energy MLP Opportunities Fund of Beneficial Interest","JMM":"Nuveen Multi-Market Income Fund (MA)","JMOM":"JPMorgan U.S. Momentum Factor","JMP":"JMP Group LLC","JMPB":"JMP Group Inc 8.00% Senior Notes due 2023","JMPD":"JMP Group LLC 7.25% Senior Notes due 2027","JMST":"JPMorgan Ultra-Short Municipal Income","JMT":"Nuveen Mortgage Opportunity Term Fund 2 of Beneficial Interest","JMU":"JMU Limited","JMUB":"JPMorgan Municipal","JNCE":"Jounce Therapeutics Inc.","JNJ":"Johnson & Johnson","JNK":"SPDR Bloomberg Barclays High Yield Bond","JNPR":"Juniper Networks Inc.","JNUG":"Direxion Daily Junior Gold Miners Index Bull 3X Shares","JO":"iPathA Series B Bloomberg Coffee Subindex Total Return ETN","JOB":"GEE Group Inc.","JOBS":"51job Inc.","JOE":"St. Joe Company (The)","JOF":"Japan Smaller Capitalization Fund Inc","JOUT":"Johnson Outdoors Inc.","JP":"Jupai Holdings Limited American Depositary Shares each representing six","JPC":"Nuveen Preferred & Income Opportunities Fund","JPED":"JPMorgan Event Driven","JPEM":"JPMorgan Diversified Return Emerging Markets Equity","JPEU":"JPMorgan Diversified Return Europe Equity","JPGB":"JPMorgan Global Bond Opportunities","JPGE":"JPMorgan Diversified Return Global Equity","JPHF":"J P Morgan Chase & Co","JPHY":"JPMorgan Disciplined HY","JPI":"Nuveen Preferred and Income Term Fund of Beneficial Interest","JPIN":"JPMorgan Diversified Return International Equity","JPLS":"JPMorgan Long/Short","JPM":"JP Morgan Chase & Co.","JPM-A":"J P Morgan Chase & Co Depositary Shs Repstg 1/400 Pfd Ser P","JPM-C":"J P Morgan Chase & Co Depositary Shares Series E","JPM-D":"J P Morgan Chase & Co Depositary Shares Series D","JPM-E":"J P Morgan Chase & Co Depository Shares Representing 1/400th Int Perp Pfd Ser W","JPM-F":"J P Morgan Chase & Co Depositary Shares Series Y","JPM-G":"J P Morgan Chase & Co Depositary Shares Series A","JPM-H":"J P Morgan Chase & Co Depositary Shares Series B","JPMB":"JPMorgan USD Emerging Markets Sovereign Bond","JPME":"JPMorgan Diversified Return U.S. Mid Cap Equity","JPMF":"JPMorgan Managed Futures Strategy","JPMV":"iShares Edge MSCI Min Vol Japan","JPN":"Xtrackers Japan JPX-Nikkei 400 Equity","JPNL":"Direxion Daily Japan Bull 3X","JPS":"Nuveen Preferred & Income Securities Fund","JPSE":"JPMorgan Diversified Return U.S. Small Cap Equity","JPST":"JPMorgan Ultra-Short Income","JPT":"Nuveen Preferred and Income 2022 Term Fund of Beneficial Interest","JPUS":"JPMorgan Diversified Return U.S. Equity","JPXN":"iShares JPX-Nikkei 400","JQC":"Nuveen Credit Strategies Income Fund Shares of Beneficial Interest","JQUA":"JPMorgan U.S. Quality Factor","JRI":"Nuveen Real Asset Income and Growth Fund of Beneficial Interest","JRJC":"China Finance Online Co. Limited","JRO":"Nuveen Floating Rate Income Opportuntiy Fund Shares of Beneficial Interest","JRS":"Nuveen Real Estate Income Fund of Beneficial Interest","JRSH":"Jerash Holdings (US) Inc.","JRVR":"James River Group Holdings Ltd.","JSD":"Nuveen Short Duration Credit Opportunities Fund of Beneficial Interest","JSM":"Navient Corporation","JSMD":"Janus Henderson Small/Mid Cap Growth Alpha ETF","JSML":"Janus Henderson Small Cap Growth Alpha ETF","JT":"Jianpu Technology Inc. American depositary shares each two representing five Class A","JTA":"Nuveen Tax-Advantaged Total Return Strategy Fund of Beneficial Interest","JTD":"Nuveen Tax-Advantaged Dividend Growth Fund of Beneficial Interest","JUST":"Goldman Sachs JUST U.S. Large Cap Equity","JVA":"Coffee Holding Co. Inc.","JVAL":"JPMorgan U.S. Value Factor","JW.A":"John Wiley & Sons Inc.","JW.B":"John Wiley & Sons Inc.","JWN":"Nordstrom Inc.","JXI":"iShares Global Utilities","JYNT":"The Joint Corp.","K":"Kellogg Company","KAI":"Kadant Inc","KALA":"Kala Pharmaceuticals Inc.","KALL":"KraneShares MSCI All China Index","KALU":"Kaiser Aluminum Corporation","KALV":"KalVista Pharmaceuticals Inc.","KAMN":"Kaman Corporation","KAR":"KAR Auction Services Inc","KARS":"KraneShares Electric Vehicles and Future Mobility Index","KB":"KB Financial Group Inc","KBA":"KraneShares Bosera MSCI China A","KBAL":"Kimball International Inc.","KBE":"SPDR S&P Bank","KBH":"KB Home","KBLM":"KBL Merger Corp. IV","KBLMR":"KBL Merger Corp. IV Rights","KBLMU":"KBL Merger Corp. IV Unit","KBLMW":"KBL Merger Corp. IV Warrant","KBR":"KBR Inc.","KBSF":"KBS Fashion Group Limited","KBWB":"Invesco KBW Bank ETF","KBWD":"Invesco KBW High Dividend Yield Financial ETF","KBWP":"Invesco KBW Property & Casualty Insurance ETF","KBWR":"Invesco KBW Regional Banking ETF","KBWY":"Invesco KBW Premium Yield Equity REIT ETF","KCAPL":"Portman Ridge Finance Corporation 6.125% Notes due 2022","KCCB":"KraneShares CCBS China Corporate High Yield Bond USD Index","KCE":"SPDR S&P Capital Markets","KCNY":"KraneShares E Fund China Commercial Paper","KDMN":"Kadmon Holdings Inc.","KDP":"Keurig Dr Pepper Inc.","KE":"Kimball Electronics Inc.","KEG":"Key Energy Services Inc.","KELYA":"Kelly Services Inc. Class A Common Stock","KELYB":"Kelly Services Inc. Class B Common Stock","KEM":"KEMET Corporation","KEMQ":"KraneShares Emerging Markets Consumer Technology Index","KEMX":"KraneShares MSCI Emerging Markets ex China Index","KEN":"Kenon Holdings Ltd.","KEP":"Korea Electric Power Corporation","KEQU":"Kewaunee Scientific Corporation","KERN":"Akerna Corp.","KERNW":"Akerna Corp. Warrant","KEX":"Kirby Corporation","KEY":"KeyCorp","KEY-I":"KeyCorp Depositary Shares Series E","KEY-J":"KeyCorp Depositary Shares Series F","KEY-K":"KeyCorp Depositary Shares Series G","KEYS":"Keysight Technologies Inc.","KF":"Korea Fund Inc. (The)","KFFB":"Kentucky First Federal Bancorp","KFRC":"Kforce Inc.","KFS":"Kingsway Financial Services Inc. (DE)","KFY":"Korn Ferry","KFYP":"KraneShares CICC China Leaders 100 Index","KGC":"Kinross Gold Corporation","KGJI":"Kingold Jewelry Inc.","KGRN":"KraneShares MSCI China Environment Index","KHC":"The Kraft Heinz Company","KIDS":"OrthoPediatrics Corp.","KIE":"SPDR S&P Insurance","KIM":"Kimco Realty Corporation","KIM-I":"Kimco Realty Corporation DEPOSITARY SH REPSTG 1/1000TH PFD SER I","KIM-J":"Kimco Realty Corporation Depositary Sh Repstg 1/1000th Pfd CL J %","KIM-K":"Kimco Realty Corporation Depositary Shares Series K","KIM-L":"Kimco Realty Corporation Class L Depositary Shares each of which represents a one-one thousandth fractional interest in a share of 5.125% Class L Cumulative Red","KIM-M":"Kimco Realty Corporation Class M Depositary Shares each of which represents a one-one thousandth fractional interest in a share of 5.25% Class M Cumulative Rede","KIN":"Kindred Biosciences Inc.","KINS":"Kingstone Companies Inc","KIO":"KKR Income Opportunities Fund","KIQ":"Kelso Technologies Inc","KIRK":"Kirkland's Inc.","KKR":"KKR & Co. Inc. Class A","KKR-A":"KKR & Co. Inc. 6.75% Series A Preferred Stock","KKR-B":"KKR & Co. Inc. 6.50% Series B Preferred Stock","KL":"Kirkland Lake Gold Ltd.","KLAC":"KLA-Tencor Corporation","KLCD":"KFA Large Cap Quality Dividend Index","KLDO":"Kaleido Biosciences Inc.","KLDW":"Knowledge Leaders Developed World","KLIC":"Kulicke and Soffa Industries Inc.","KLXE":"KLX Energy Services Holdings Inc.","KMB":"Kimberly-Clark Corporation","KMDA":"Kamada Ltd.","KMED":"KraneShares Trust Emerging Markets Healthcare Index","KMF":"Kayne Anderson Midstream Energy Fund Inc","KMI":"Kinder Morgan Inc.","KMPH":"KemPharm Inc.","KMPR":"Kemper Corporation","KMT":"Kennametal Inc.","KMX":"CarMax Inc","KN":"Knowles Corporation","KNAB":"MicroSectors U.S. Big Banks Index Inverse ETNs","KNDI":"Kandi Technologies Group Inc.","KNG":"ETF Series Solutions Cboe Vest S&P 500 Dividend Aristocrats Target Income","KNL":"Knoll Inc.","KNOP":"KNOT Offshore Partners LP representing Limited Partner Interests","KNOW":"Direxion All Cap Insider Sentiment Shares","KNSA":"Kiniksa Pharmaceuticals Ltd.","KNSL":"Kinsale Capital Group Inc.","KNX":"Knight-Swift Transportation Holdings Inc.","KO":"Coca-Cola Company (The)","KOD":"Kodiak Sciences Inc","KODK":"Eastman Kodak Company Common New","KOF":"Coca Cola Femsa S.A.B. de C.V. American Depositary Shares each representing 10 Units (each Unit consists of 3 Series B Shares and 5 Series L Shares)","KOIN":"Innovation Shares NextGen Protocol","KOL":"VanEck Vectors Coal","KOLD":"ProShares UltraShort Bloomberg Natural Gas","KOMP":"SPDR S&P Kensho New Economies Composite","KOOL":"Cesca Therapeutics Inc.","KOP":"Koppers Holdings Inc.","KOPN":"Kopin Corporation","KORP":"American Century Diversified Corporate Bond","KORU":"Direxion Daily South Korea Bull 3X Shares","KOS":"Kosmos Energy Ltd. (DE)","KOSS":"Koss Corporation","KPTI":"Karyopharm Therapeutics Inc.","KR":"Kroger Company (The)","KRA":"Kraton Corporation","KRC":"Kilroy Realty Corporation","KRE":"SPDR S&P Regional Banking","KREF":"KKR Real Estate Finance Trust Inc.","KRG":"Kite Realty Group Trust","KRMA":"Global X Conscious Companies ETF","KRNT":"Kornit Digital Ltd.","KRNY":"Kearny Financial","KRO":"Kronos Worldwide Inc","KRP":"Kimbell Royalty Partners Representing Limited Partner Interests","KRTX":"Karuna Therapeutics Inc.","KRYS":"Krystal Biotech Inc.","KSA":"iShares Trust MSCI Saudi Arabia","KSCD":"KFA Small Cap Quality Dividend Index","KSM":"DWS Strategic Municipal Income Trust","KSS":"Kohl's Corporation","KSU":"Kansas City Southern","KSU-":"","KT":"KT Corporation","KTB":"Kontoor Brands Inc.","KTCC":"Key Tronic Corporation","KTF":"DWS Municipal Income Trust","KTH":"Structures Products Cp 8% CorTS Issued by Peco Energy Cap Tr II Preferred Stock","KTN":"Structured Products Corp 8.205% CorTS 8.205% Corporate Backed Trust Securities (CorTS)","KTOS":"Kratos Defense & Security Solutions Inc.","KTOV":"Kitov Pharma Ltd.","KTOVW":"","KTP":"Corts 7.625 Pfd","KURA":"Kura Oncology Inc.","KURE":"KraneShares MSCI All China Health Care Index","KVHI":"KVH Industries Inc.","KW":"Kennedy-Wilson Holdings Inc.","KWEB":"KraneShares Trust CSI China Internet","KWR":"Quaker Chemical Corporation","KXI":"iShares Global Consumer Staples","KXIN":"Kaixin Auto Holdings","KYN":"Kayne Anderson MLP/Midstream Investment Company","KYN-F":"Kayne Anderson MLP/Midstream Investment Company 3.50% Series F Mandatory Redeemable Preferred Shares $25.00 Liquidation Preference per share","KZIA":"Kazia Therapeutics Limited","KZR":"Kezar Life Sciences Inc.","L":"Loews Corporation","LABD":"Direxion Daily S&P Biotech Bear 3X Shares","LABU":"Direxion Daily S&P Biotech Bull 3X Shares","LAC":"Lithium Americas Corp.","LACK":"Direxion Daily Consumer Staples Bear 3X Shares","LACQ":"Leisure Acquisition Corp.","LACQU":"Leisure Acquisition Corp. Unit","LACQW":"Leisure Acquisition Corp. Warrant","LAD":"Lithia Motors Inc.","LADR":"Ladder Capital Corp Class A","LAIX":"LAIX Inc. American Depositary Shares each representing one Class A","LAKE":"Lakeland Industries Inc.","LAMR":"Lamar Advertising Company","LANC":"Lancaster Colony Corporation","LAND":"Gladstone Land Corporation","LANDP":"Gladstone Land Corporation 6.375% Series A Cumulative Term Preferred Stock","LARK":"Landmark Bancorp Inc.","LASR":"nLIGHT Inc.","LAUR":"Laureate Education Inc.","LAWS":"Lawson Products Inc.","LAZ":"Lazard LTD. LTD. Class A","LAZY":"Lazydays Holdings Inc.","LB":"L Brands Inc.","LBAI":"Lakeland Bancorp Inc.","LBC":"Luther Burbank Corporation","LBDC":"2xLeveraged Long ETRACS Wells Fargo Business Development Company Index Series B due May 24 2041","LBJ":"Direxion Daily Latin America 3x Bull Shares","LBRDA":"Liberty Broadband Corporation Class A Common Stock","LBRDK":"Liberty Broadband Corporation","LBRT":"Liberty Oilfield Services Inc. Class A","LBTYA":"Liberty Global plc Class A Ordinary Shares","LBTYB":"Liberty Global plc Class B Ordinary Shares","LBTYK":"Liberty Global plc","LBY":"Libbey Inc.","LC":"LendingClub Corporation","LCA":"Landcadia Holdings II Inc.","LCAHU":"Landcadia Holdings II Inc. Unit","LCAHW":"Landcadia Holdings II Inc. Warrant","LCI":"Lannett Co Inc","LCII":"LCI Industries","LCNB":"LCNB Corporation","LCUT":"Lifetime Brands Inc.","LD":"iPath Bloomberg Lead Subindex Total Return SM Index ETN","LDL":"Lydall Inc.","LDOS":"Leidos Holdings Inc.","LDP":"Cohen & Steers Limited Duration Preferred and Income Fund Inc.","LDRI":"PowerShares LadderRite 0-5 Year Corporate Bond Ptf","LDRS":"Innovator IBD ETF Leaders","LDSF":"First Trust Low Duration Strategic Focus ETF","LDUR":"PIMCO Enhanced Low Duration Active Exchange-Traded Fund","LE":"Lands' End Inc.","LEA":"Lear Corporation","LEAD":"Realty Shares DIVCON Leaders Dividend","LEAF":"Leaf Group Ltd.","LECO":"Lincoln Electric Holdings Inc.","LEDS":"SemiLEDS Corporation","LEE":"Lee Enterprises Incorporated","LEG":"Leggett & Platt Incorporated","LEGH":"Legacy Housing Corporation","LEGR":"First Trust Indxx Innovative Transaction & Process","LEJU":"Leju Holdings Limited American Depositary Shares each representing one","LEMB":"iShares J.P. Morgan EM Local Currency Bond","LEN":"Lennar Corporation Class A","LEN.B":"Lennar Corporation Class B","LEND":"Amplify CrowdBureau Peer-to-Peer Lending & Crowdfunding","LEO":"BNY Mellon Strategic Municipals Inc.","LEU":"Centrus Energy Corp. Class A","LEVI":"Levi Strauss & Co Class A","LEVL":"Level One Bancorp Inc.","LEXEA":"Liberty Expedia Holdings Inc. Series A Common Stock","LEXEB":"Liberty Expedia Holdings Inc. Series B Common Stock","LFAC":"LF Capital Acquistion Corp.","LFACU":"LF Capital Acquistion Corp. Unit","LFACW":"LF Capital Acquistion Corp. Warrant","LFC":"China Life Insurance Company Limited American Depositary Shares","LFEQ":"VanEck Vectors NDR CMG Long/Flat Allocation","LFUS":"Littelfuse Inc.","LFVN":"Lifevantage Corporation","LGC":"Legacy Acquisition Corp. Class A par value $0.0001 per share","LGC+":"","LGC=":"Legacy Acquisition Corp. Units each consisting of one share of Class A Common Stock and one Warrant to purchase one-half of one share of Class A Common Stock","LGF.A":"Lions Gate Entertainment Corporation Class A","LGF.B":"Lions Gate Entertainment Corporation Class B Non-Voting Shares","LGI":"Lazard Global Total Return and Income Fund","LGIH":"LGI Homes Inc.","LGL":"LGL Group Inc. (The)","LGLV":"SPDR SSGA US Large Cap Low Volatility Index","LGND":"Ligand Pharmaceuticals Incorporated","LGOV":"First Trust Long Duration Opportunities","LH":"Laboratory Corporation of America Holdings","LHC":"Leo Holdings Corp. Class A","LHC+":"","LHC=":"Leo Holdings Corp. Units each consisting of one Class A ordinary share and one-third of one redeemable warrant","LHCG":"LHC Group","LHX":"L3Harris Technologies Inc.","LIFE":"aTyr Pharma Inc.","LII":"Lennox International Inc.","LILA":"Liberty Latin America Ltd.","LILAK":"Liberty Latin America Ltd.","LIN":"Linde plc","LINC":"Lincoln Educational Services Corporation","LIND":"Lindblad Expeditions Holdings Inc.","LINDW":"Lindblad Expeditions Holdings Inc. Warrant","LINX":"Linx S.A. American Depositary Shares each representing one","LIQT":"LiqTech International Inc.","LIT":"Global X Lithium & Battery Tech","LITB":"LightInTheBox Holding Co. Ltd. American Depositary Shares each representing 2","LITE":"Lumentum Holdings Inc.","LIVE":"Live Ventures Incorporated","LIVN":"LivaNova PLC","LIVX":"LiveXLive Media Inc.","LJPC":"La Jolla Pharmaceutical Company","LK":"Luckin Coffee Inc.","LKCO":"Luokung Technology Corp","LKFN":"Lakeland Financial Corporation","LKOR":"FlexShares Credit-Scored US Long Corporate Bond In","LKQ":"LKQ Corporation","LKSD":"LSC Communications Inc.","LL":"Lumber Liquidators Holdings Inc","LLEX":"Lilis Energy Inc.","LLIT":"Lianluo Smart Limited","LLNW":"Limelight Networks Inc.","LLQD":"iShares 10 Year Investment Grade Corporate Bond","LLY":"Eli Lilly and Company","LM":"Legg Mason Inc.","LMAT":"LeMaitre Vascular Inc.","LMB":"Limbach Holdings Inc.","LMBS":"First Trust Low Duration Mortgage Opportunities ET","LMFA":"LM Funding America Inc.","LMFAW":"","LMHA":"Legg Mason Inc. 6.375% Junior Subordinated Notes due 2056","LMHB":"Legg Mason Inc. 5.45% Junior Subordinated Notes due 2056","LMLP":"ETRACS Monthly Pay 2xLeveraged Wells Fargo MLP Ex-Energy ETN","LMNR":"Limoneira Co","LMNX":"Luminex Corporation","LMRK":"Landmark Infrastructure Partners LP","LMRKN":"Landmark Infrastructure Partners LP Preferred Stock","LMRKO":"Landmark Infrastructure Partners LP Preferred Units","LMRKP":"Landmark Infrastructure Partners LP 8.00% Series A Cumulative Redeemable Perpetual Preferred Units","LMST":"Limestone Bancorp Inc.","LMT":"Lockheed Martin Corporation","LN":"LINE Corporation American Depositary Shares (each representing one share of)","LNC":"Lincoln National Corporation","LND":"Brasilagro Brazilian Agric Real Estate Co Sponsored ADR (Brazil)","LNDC":"Landec Corporation","LNG":"Cheniere Energy Inc.","LNGR":"Global X Longevity Thematic ETF","LNN":"Lindsay Corporation","LNT":"Alliant Energy Corporation","LNTH":"Lantheus Holdings Inc.","LOAC":"Longevity Acquisition Corporation","LOACR":"Longevity Acquisition Corporation Right","LOACU":"Longevity Acquisition Corporation Units","LOACW":"Longevity Acquisition Corporation Warrant","LOAN":"Manhattan Bridge Capital Inc","LOB":"Live Oak Bancshares Inc.","LOCO":"El Pollo Loco Holdings Inc.","LODE":"Comstock Mining Inc.","LOGC":"LogicBio Therapeutics Inc.","LOGI":"Logitech International S.A.","LOGM":"LogMeIn Inc.","LOMA":"Loma Negra Compania Industrial Argentina Sociedad Anonima ADS","LONE":"Lonestar Resources US Inc.","LOOP":"Loop Industries Inc.","LOPE":"Grand Canyon Education Inc.","LOR":"Lazard World Dividend & Income Fund Inc.","LORL":"Loral Space and Communications Inc.","LOUP":"Innovator Loup Frontier Tech E","LOV":"Spark Networks Inc. American Depositary Shares (each representing one-tenth of an)","LOVE":"The Lovesac Company","LOW":"Lowe's Companies Inc.","LOWC":"SPDR MSCI ACWI Low Carbon Target","LPCN":"Lipocine Inc.","LPG":"Dorian LPG Ltd.","LPI":"Laredo Petroleum Inc.","LPL":"LG Display Co Ltd AMERICAN DEPOSITORY SHARES","LPLA":"LPL Financial Holdings Inc.","LPSN":"LivePerson Inc.","LPT":"Liberty Property Trust","LPTH":"LightPath Technologies Inc.","LPTX":"Leap Therapeutics Inc.","LPX":"Louisiana-Pacific Corporation","LQD":"iShares iBoxx $ Investment Grade Corporate Bond","LQDA":"Liquidia Technologies Inc.","LQDH":"iShares Interest Rate Hedged Corporate Bond","LQDI":"iShares Inflation Hedged Corporate Bond","LQDT":"Liquidity Services Inc.","LRAD":"LRAD Corporation","LRCX":"Lam Research Corporation","LRET":"ETRACS Monthly Pay 2xLeveraged MSCI US REIT Index ETN due May 5 2045","LRGE":"ClearBridge Large Cap Growth ESG ETF","LRGF":"iShares Edge MSCI Multifactor USA","LRN":"K12 Inc","LSAF":"LeaderShares AlphaFactor US Core Equity","LSBK":"Lake Shore Bancorp Inc.","LSCC":"Lattice Semiconductor Corporation","LSI":"Life Storage Inc.","LSLT":"Salt Low truBeta US Market","LSST":"Natixis ETF Trust Loomis Sayles Short Duration Income","LSTR":"Landstar System Inc.","LSXMA":"Liberty Media Corporation Series A Liberty SiriusXM Common Stock","LSXMB":"Liberty Media Corporation Series B Liberty SiriusXM Common Stock","LSXMK":"Liberty Media Corporation Series C Liberty SiriusXM Common Stock","LTBR":"Lightbridge Corporation","LTC":"LTC Properties Inc.","LTHM":"Livent Corporation","LTL":"ProShares Ultra Telecommunications","LTM":"LATAM Airlines Group S.A.","LTPZ":"Pimco 15 Year U.S. TIPS Index Exchange-Traded Fund","LTRPA":"Liberty TripAdvisor Holdings Inc. Series A Common Stock","LTRPB":"Liberty TripAdvisor Holdings Inc. Series B Common Stock","LTRX":"Lantronix Inc.","LTS":"Ladenburg Thalmann Financial Services Inc","LTS-A":"Ladenburg Thalmann Financial Services Inc 8.00% Series A Cumulative Redeemable Preferred Stock Liquidation Preference $25.00 per share","LTSF":"","LTSH":"Ladenburg Thalmann Financial Services Inc 7.75% Senior Notes due 2029","LTSK":"","LTSL":"Ladenburg Thalmann Financial Services Inc 6.50% Senior Notes due 2027","LTXB":"LegacyTexas Financial Group Inc.","LUB":"Luby's Inc.","LULU":"lululemon athletica inc.","LUNA":"Luna Innovations Incorporated","LUV":"Southwest Airlines Company","LVHB":"Innovator Lunt Low Vol/High Beta Tactical","LVHD":"Legg Mason Low Volatility High Dividend ETF","LVHE":"Legg Mason Emerging Markets Low Volatility High Dividend","LVHI":"Legg Mason International Low Volatility High Dividend","LVIN":"Hartford Multifactor Low Volatility International Equity","LVL":"Invesco S&P Global Dividend Opportunities Index","LVS":"Las Vegas Sands Corp.","LVUS":"Hartford Multifactor Low Volatility US Equity","LW":"Lamb Weston Holdings Inc.","LWAY":"Lifeway Foods Inc.","LX":"LexinFintech Holdings Ltd.","LXFR":"Luxfer Holdings PLC","LXP":"Lexington Realty Trust","LXP-C":"Lexington Realty Trust Preferred Conv. Series C","LXRX":"Lexicon Pharmaceuticals Inc.","LXU":"LSB Industries Inc.","LYB":"LyondellBasell Industries NV Class A (Netherlands)","LYFT":"Lyft Inc.","LYG":"Lloyds Banking Group Plc American Depositary Shares","LYL":"Dragon Victory International Limited","LYTS":"LSI Industries Inc.","LYV":"Live Nation Entertainment Inc.","LZB":"La-Z-Boy Incorporated","M":"Macy's Inc","MA":"Mastercard Incorporated","MAA":"Mid-America Apartment Communities Inc.","MAA-I":"Mid-America Apartment Communities Inc. 8.50% Series I Cumulative Redeemable Preferred Stock","MAAX":"VanEck Vectors Municipal Allocation","MAC":"Macerich Company (The)","MACK":"Merrimack Pharmaceuticals Inc.","MAG":"MAG Silver Corporation","MAGA":"Point Bridge GOP Stock Tracker","MAGS":"Magal Security Systems Ltd.","MAIN":"Main Street Capital Corporation","MAMS":"MAM Software Group Inc.","MAN":"ManpowerGroup","MANH":"Manhattan Associates Inc.","MANT":"ManTech International Corporation","MANU":"Manchester United Ltd. Class A","MAR":"Marriott International","MARA":"Marathon Patent Group Inc.","MARK":"Remark Holdings Inc.","MARPS":"Marine Petroleum Trust Units of Beneficial Interest","MAS":"Masco Corporation","MASI":"Masimo Corporation","MAT":"Mattel Inc.","MATW":"Matthews International Corporation","MATX":"Matson Inc.","MAV":"Pioneer Municipal High Income Advantage Trust of Beneficial Interest","MAXR":"Maxar Technologies Inc.","MAYS":"J. W. Mays Inc.","MBB":"iShares MBS ETF","MBCN":"Middlefield Banc Corp.","MBG":"SPDR Bloomberg Barclays Mortgage Backed Bond","MBI":"MBIA Inc.","MBII":"Marrone Bio Innovations Inc.","MBIN":"Merchants Bancorp","MBINP":"Merchants Bancorp 7.00% Fixed-to-Floating Rate Series A Non-Cumulative Perpetual Preferred Stock","MBIO":"Mustang Bio Inc.","MBOT":"Microbot Medical Inc.","MBRX":"Moleculin Biotech Inc.","MBSD":"FlexShares Disciplined Duration MBS Index Fund","MBT":"Mobile TeleSystems PJSC","MBTF":"M B T Financial Corp","MBUU":"Malibu Boats Inc.","MBWM":"Mercantile Bank Corporation","MC":"Moelis & Company Class A","MCA":"Blackrock MuniYield California Quality Fund Inc.","MCB":"Metropolitan Bank Holding Corp.","MCBC":"Macatawa Bank Corporation","MCC":"Medley Capital Corporation","MCD":"McDonald's Corporation","MCEF":"First Trust Municipal CEF Income Opportunity ETF","MCEP":"Mid-Con Energy Partners LP","MCF":"Contango Oil & Gas Company (TX)","MCFT":"MasterCraft Boat Holdings Inc.","MCHI":"iShares MSCI China ETF","MCHP":"Microchip Technology Incorporated","MCHX":"Marchex Inc.","MCI":"Barings Corporate Investors","MCK":"McKesson Corporation","MCN":"Madison Covered Call & Equity Strategy Fund","MCO":"Moody's Corporation","MCR":"MFS Charter Income Trust","MCRB":"Seres Therapeutics Inc.","MCRI":"Monarch Casino & Resort Inc.","MCRN":"Milacron Holdings Corp.","MCRO":"IQ Hedge Macro Tracker","MCS":"Marcus Corporation (The)","MCV":"Medley Capital Corporation 6.125% Senior Notes due 2023","MCX":"Medley Capital Corporation 6.50% Notes due 2021","MCY":"Mercury General Corporation","MD":"Mednax Inc.","MDB":"MongoDB Inc.","MDC":"M.D.C. Holdings Inc.","MDCA":"MDC Partners Inc.","MDCO":"The Medicines Company","MDGL":"Madrigal Pharmaceuticals Inc.","MDGS":"Medigus Ltd.","MDGSW":"Medigus Ltd. Series C Warrant","MDIV":"Multi-Asset Diversified Income Index Fund","MDJH":"MDJM LTD","MDLQ":"Medley LLC 7.25% Notes due 2024","MDLX":"Medley LLC 6.875% Senior Notes due 2026","MDLY":"Medley Management Inc. Class A","MDLZ":"Mondelez International Inc.","MDP":"Meredith Corporation","MDR":"McDermott International Inc.","MDRR":"Medalist Diversified REIT Inc.","MDRX":"Allscripts Healthcare Solutions Inc.","MDSO":"Medidata Solutions Inc.","MDT":"Medtronic plc.","MDU":"MDU Resources Group Inc. (Holding Company)","MDWD":"MediWound Ltd.","MDY":"SPDR MidCap Trust Series I","MDYG":"SPDR S&P 400 Mid Cap Growth ETF (based on S&P MidCap 400 Growth Index--symbol: MUV)","MDYV":"SPDR S&P 400 Mid Cap Value ETF (based on S&P MidCap 400 Value Index--symbol: MGD","MEAR":"iShares Short Maturity Municipal Bond","MEC":"Mayville Engineering Company Inc.","MED":"MEDIFAST INC","MEDP":"Medpace Holdings Inc.","MEET":"The Meet Group Inc.","MEI":"Methode Electronics Inc.","MEIP":"MEI Pharma Inc.","MELI":"MercadoLibre Inc.","MEN":"Blackrock MuniEnhanced Fund Inc","MEOH":"Methanex Corporation","MER-K":"Bank of America Corporation Income Capital Obligation Notes initially due December 15 2066","MERC":"Mercer International Inc.","MESA":"Mesa Air Group Inc.","MESO":"Mesoblast Limited","MET":"MetLife Inc.","MET-A":"MetLife Inc. Preferred Series A Floating Rate","MET-E":"MetLife Inc. Depositary shares Series E","METC":"Ramaco Resources Inc.","MEXX":"Direxion Daily MSCI Mexico Bull 3X Shares","MFA":"MFA Financial Inc.","MFA-B":"MFA Financial Inc. Preferred Series B","MFAC":"Megalith Financial Acquisition Corp. Class A","MFAC+":"Megalith Financial Acquisition Corp. Warrants each warrant exercisable for one share of Class A Common Stock at an exercise price of $11.50","MFAC=":"Megalith Financial Acquisition Corp. Units each consisting of one share of Class A common stock $0.0001 par value and one redeemable warrant","MFC":"Manulife Financial Corporation","MFD":"Macquarie First Trust Global","MFDX":"PIMCO Equitiy Series RAFI Dynamic Multi-Factor International Equity","MFEM":"PIMCO Equitiy Series RAFI Dynamic Multi-Factor Emerging Markets Equity","MFG":"Mizuho Financial Group Inc. Sponosred ADR (Japan)","MFGP":"Micro Focus Intl PLC ADS each representing One Ord Sh","MFIN":"Medallion Financial Corp.","MFINL":"Medallion Financial Corp. 9.000% Notes due 2021","MFL":"Blackrock MuniHoldings Investment Quality Fund of Beneficial Interest","MFM":"MFS Municipal Income Trust","MFMS":"Motley Fool Small-Cap Growth","MFNC":"Mackinac Financial Corporation","MFO":"MFA Financial Inc. 8.00% Senior Notes due 2042","MFSF":"MutualFirst Financial Inc.","MFT":"Blackrock MuniYield Investment Quality Fund of Beneficial Interest","MFUS":"PIMCO Equitiy Series RAFI Dynamic Multi-Factor U.S. Equity","MFV":"MFS Special Value Trust","MG":"Mistras Group Inc","MGA":"Magna International Inc.","MGC":"Vanguard Mega Cap","MGEE":"MGE Energy Inc.","MGEN":"Miragen Therapeutics Inc.","MGF":"MFS Government Markets Income Trust","MGI":"Moneygram International Inc.","MGIC":"Magic Software Enterprises Ltd.","MGK":"Vanguard Mega Cap Growth","MGLN":"Magellan Health Inc.","MGM":"MGM Resorts International","MGNX":"MacroGenics Inc.","MGP":"MGM Growth Properties LLC Class A representing limited liability company interests","MGPI":"MGP Ingredients Inc.","MGR":"Affiliated Managers Group Inc. 5.875% Junior Subordinated Notes due 2059","MGRC":"McGrath RentCorp","MGTA":"Magenta Therapeutics Inc.","MGTX":"MeiraGTx Holdings plc","MGU":"Macquarie Global Infrastructure Total Return Fund Inc.","MGV":"Vanguard Mega Cap Value","MGY":"Magnolia Oil & Gas Corporation Class A","MGY+":"","MGYR":"Magyar Bancorp Inc.","MH-A":"Maiden Holdings Ltd. Pref Shs Ser A (Bermuda)","MH-C":"Maiden Holdings North America Ltd. 7.125% Non-Cumulative Preference Shares Series C","MH-D":"Maiden Holdings Ltd. 6.700% Non-Cumulative Preference Shares Series D","MHD":"Blackrock MuniHoldings Fund Inc.","MHE":"BlackRock Massachusetts Tax-Exempt Trust","MHF":"Western Asset Municipal High Income Fund Inc.","MHH":"Mastech Digital Inc","MHI":"Pioneer Municipal High Income Trust of Beneficial Interest","MHK":"Mohawk Industries Inc.","MHLA":"Maiden Holdings Ltd. 6.625% Notes due 2046","MHLD":"Maiden Holdings Ltd.","MHN":"Blackrock MuniHoldings New York Quality Fund Inc.","MHNC":"Maiden Holdings North America Ltd. 7.75% Notes due 2043","MHO":"M/I Homes Inc.","MIC":"Macquarie Infrastructure Corporation","MICR":"Micron Solutions Inc.","MICT":"MICT Inc.","MIDD":"The Middleby Corporation","MIDF":"iShares Edge MSCI Multifactor USA Mid-Cap","MIDU":"Direxion Mid Cap Bull 3X Shares","MIDZ":"Direxion Mid Cap Bear 3X Shares","MIE":"Cohen & Steers MLP Income and Energy Opportunity Fund Inc.","MIK":"The Michaels Companies Inc.","MILN":"Global X Millennials Thematic ETF","MIME":"Mimecast Limited","MIN":"MFS Intermediate Income Trust","MINC":"AdvisorShares Newfleet Multi-sector Income","MIND":"Mitcham Industries Inc.","MINDP":"Mitcham Industries Inc. Series A 9.00% Series A Cumulative Preferred Stock","MINI":"Mobile Mini Inc.","MINT":"PIMCO Enhanced Short Maturity Active Exchange-Traded Fund","MIST":"Milestone Pharmaceuticals Inc.","MITK":"Mitek Systems Inc.","MITO":"Stealth BioTherapeutics Corp.","MITT":"AG Mortgage Investment Trust Inc.","MITT-A":"AG Mortgage Investment Trust Inc. 8.25% Preferred Series A","MITT-B":"AG Mortgage Investment Trust Inc. Preferred Series B","MIXT":"MiX Telematics Limited American Depositary Shares each representing 25","MIY":"Blackrock MuniYield Michigan Quality Fund Inc.","MJ":"ETFMG Alternative Harvest","MJCO":"Majesco","MKC":"McCormick & Company Incorporated","MKC.V":"McCormick & Company Incorporated","MKGI":"Monaker Group Inc.","MKL":"Markel Corporation","MKSI":"MKS Instruments Inc.","MKTX":"MarketAxess Holdings Inc.","MLAB":"Mesa Laboratories Inc.","MLCO":"Melco Resorts & Entertainment Limited","MLHR":"Herman Miller Inc.","MLI":"Mueller Industries Inc.","MLM":"Martin Marietta Materials Inc.","MLN":"VanEck Vectors AMT-Free Long Municipal Index","MLND":"Millendo Therapeutics Inc.","MLNT":"Melinta Therapeutics Inc.","MLNX":"Mellanox Technologies Ltd.","MLP":"Maui Land & Pineapple Company Inc.","MLPA":"Global X MLP","MLPB":"ETRACS Alerian MLP Infrastructure Index ETN Series B due April 2 2040","MLPC":"C-Tracks ETNs based on Performance of the Miller/Howard MLP Fundamental Index","MLPE":"C-Tracks ETN on Miller/Howard Fundamental MLP Index Series B Due July 13 2026","MLPG":"UBS AG Exchange Traded Access Securities (E-TRACS) Linked to the Alerian Natural Gas MLP Index due July 9 2040","MLPI":"UBS AG ETN","MLPO":"Credit Suisse Group Exchange Traded Notes due December 4 2034 Linked to the S&P MLP Index","MLPQ":"UBS AG ETRACS 2xMonthly Leveraged Alerian MLP Infrastructure Index ETN Series B due February 12 2046","MLPX":"Global X MLP & Energy Infrastructure","MLPY":"Morgan Stanley Cushing MLP High Income Index ETN","MLPZ":"UBS AG ETRACS ETRACS 2xMonthly Leveraged S&P MLP Index ETN Series B due February 12 2046","MLQD":"iShares 5-10 Year Investment Grade Corporate Bond","MLR":"Miller Industries Inc.","MLSS":"Milestone Scientific Inc.","MLTI":"Credit Suisse X-Links Multi-Asset High Income Exchange Traded Notes (ETNs) due September 28 2035","MLVF":"Malvern Bancorp Inc.","MMAC":"MMA Capital Holdings Inc.","MMC":"Marsh & McLennan Companies Inc.","MMD":"MainStay MacKay DefinedTerm Municipal Opportunities Fund","MMDM":"Modern Media Acquisition Corp.","MMDMR":"Modern Media Acquisition Corp. Right","MMDMU":"Modern Media Acquisition Corp. Unit","MMDMW":"Modern Media Acquisition Corp. Warrant","MMI":"Marcus & Millichap Inc.","MMIN":"IQ MacKay Municipal Insured","MMIT":"IQ MacKay Municipal Intermediate","MMLP":"Martin Midstream Partners L.P.","MMM":"3M Company","MMP":"Magellan Midstream Partners L.P. Limited Partnership","MMS":"Maximus Inc.","MMSI":"Merit Medical Systems Inc.","MMT":"MFS Multimarket Income Trust","MMTM":"SPDR S&P 1500 Momentum Tilt","MMU":"Western Asset Managed Municipals Fund Inc.","MMX":"Maverix Metals Inc.","MMYT":"MakeMyTrip Limited","MN":"Manning & Napier Inc. Class A","MNA":"IQ Merger Arbitrage","MNCL":"Monocle Acquisition Corporation","MNCLU":"Monocle Acquisition Corporation Units","MNCLW":"Monocle Acquisition Corporation Warrants","MNDO":"MIND C.T.I. Ltd.","MNE":"Blackrock Muni New York Intermediate Duration Fund Inc","MNI":"McClatchy Company (The)","MNK":"Mallinckrodt plc","MNKD":"MannKind Corporation","MNLO":"Menlo Therapeutics Inc.","MNOV":"MediciNova Inc.","MNP":"Western Asset Municipal Partners Fund Inc.","MNR":"Monmouth Real Estate Investment Corporation Class A","MNR-C":"Monmouth Real Estate Investment Corporation 6.125% Series C Cumulative Redeemable Preferred Stock","MNRL":"Brigham Minerals Inc. Class A","MNRO":"Monro Inc.","MNSB":"MainStreet Bancshares Inc.","MNST":"Monster Beverage Corporation","MNTA":"Momenta Pharmaceuticals Inc.","MNTX":"Manitex International Inc.","MO":"Altria Group Inc.","MOAT":"VanEck Vectors Morningstar Wide Moat","MOBL":"MobileIron Inc.","MOD":"Modine Manufacturing Company","MODN":"Model N Inc.","MOFG":"MidWestOne Financial Group Inc.","MOG.A":"Moog Inc. Class A","MOG.B":"Moog Inc. Class B","MOGO":"Mogo Inc.","MOGU":"MOGU Inc. American Depositary Shares (each representing 25 Class A)","MOH":"Molina Healthcare Inc","MOM":"AGFiQ U.S. Market Neutral Momentum Fund","MOMO":"Momo Inc.","MOO":"VanEck Vectors Agribusiness","MOR":"MorphoSys AG","MORF":"Morphic Holding Inc.","MORL":"ETRACS Monthly Pay 2XLeveraged Mortgage REIT ETN","MORN":"Morningstar Inc.","MORT":"VanEck Vectors Mortgage REIT Income","MOS":"Mosaic Company (The)","MOSC":"Mosaic Acquisition Corp. Class A","MOSC+":"","MOSC=":"Mosaic Acquisition Corp. Units each consisting of one Class A Common Stock and one-third of one Warrant","MOSY":"MoSys Inc.","MOTI":"VanEck Vectors Morningstar International Moat","MOTS":"Motus GI Holdings Inc.","MOV":"Movado Group Inc.","MOXC":"Moxian Inc.","MPA":"Blackrock MuniYield Pennsylvania Quality Fund","MPAA":"Motorcar Parts of America Inc.","MPB":"Mid Penn Bancorp","MPC":"Marathon Petroleum Corporation","MPLX":"MPLX LP Representing Limited Partner Interests","MPO":"Midstates Petroleum Company Inc.","MPV":"Barings Participation Investors","MPVD":"Mountain Province Diamonds Inc.","MPW":"Medical Properties Trust Inc.","MPWR":"Monolithic Power Systems Inc.","MPX":"Marine Products Corporation","MQT":"Blackrock MuniYield Quality Fund II Inc.","MQY":"Blackrock MuniYield Quality Fund Inc.","MR":"Montage Resources Corporation","MRAM":"Everspin Technologies Inc.","MRBK":"Meridian Corporation","MRC":"MRC Global Inc.","MRCC":"Monroe Capital Corporation","MRCCL":"","MRCY":"Mercury Systems Inc","MREO":"Mereo BioPharma Group plc","MRGR":"ProShares Merger","MRIC":"MRI Interventions Inc.","MRIN":"Marin Software Incorporated","MRK":"Merck & Company Inc. (new)","MRKR":"Marker Therapeutics Inc.","MRLN":"Marlin Business Services Corp.","MRNA":"Moderna Inc.","MRNS":"Marinus Pharmaceuticals Inc.","MRO":"Marathon Oil Corporation","MRRL":"ETRACS Monthly Pay 2xLeveraged Mortgage REIT ETN Series B due October 16 2042","MRSN":"Mersana Therapeutics Inc.","MRTN":"Marten Transport Ltd.","MRTX":"Mirati Therapeutics Inc.","MRUS":"Merus N.V.","MRVL":"Marvell Technology Group Ltd.","MS":"Morgan Stanley","MS-A":"Morgan Stanley Dep Shs repstg 1/1000 Pfd Ser A","MS-E":"Morgan Stanley DEPOSITARY SHARES SERIES E","MS-F":"Morgan Stanley Dep Shs Rpstg 1/1000th Int Prd Ser F Fxd to Flag","MS-G":"Morgan Stanley Depositary Shares Series G","MS-I":"Morgan Stanley Depository Shares Series 1","MS-K":"Morgan Stanley Depositary Shares Series K","MSA":"MSA Safety Incorporated","MSB":"Mesabi Trust","MSBF":"MSB Financial Corp.","MSBI":"Midland States Bancorp Inc.","MSC":"Studio City International Holdings Limited American depositary shares each representing four Class A","MSCI":"MSCI Inc","MSD":"Morgan Stanley Emerging Markets Debt Fund Inc.","MSEX":"Middlesex Water Company","MSFT":"Microsoft Corporation","MSG":"The Madison Square Garden Company Class A (New)","MSGN":"MSG Networks Inc.","MSI":"Motorola Solutions Inc.","MSL":"MidSouth Bancorp","MSM":"MSC Industrial Direct Company Inc.","MSN":"Emerson Radio Corporation","MSON":"MISONIX Inc.","MSTR":"MicroStrategy Incorporated","MSUS":"LHA Market State U.S. Tactical","MSVB":"Mid-Southern Bancorp Inc.","MT":"Arcelor Mittal NY Registry Shares NEW","MTB":"M&T Bank Corporation","MTB-":"","MTB-C":"M&T Bank Corporation Fixed Rate Cumulative Perpetual Preferred Stock Series C","MTBC":"MTBC Inc.","MTBCP":"MTBC Inc. 11% Series A Cumulative Redeemable Perpetual Preferred Stock","MTC":"MMTec Inc.","MTCH":"Match Group Inc.","MTD":"Mettler-Toledo International Inc.","MTDR":"Matador Resources Company","MTEM":"Molecular Templates Inc.","MTEX":"Mannatech Incorporated","MTFB":"Motif Bio plc","MTFBW":"Motif Bio plc Warrant","MTG":"MGIC Investment Corporation","MTH":"Meritage Homes Corporation","MTL":"Mechel PAO American Depositary Shares (Each rep. 1)","MTL-":"MECHEL-PREF SPON ADR","MTLS":"Materialise NV","MTN":"Vail Resorts Inc.","MTNB":"Matinas Biopharma Holdings Inc.","MTOR":"Meritor Inc.","MTP":"Midatech Pharma PLC","MTR":"Mesa Royalty Trust","MTRN":"Materion Corporation","MTRX":"Matrix Service Company","MTSC":"MTS Systems Corporation","MTSI":"MACOM Technology Solutions Holdings Inc.","MTSL":"MER Telemanagement Solutions Ltd.","MTT":"Western Asset Municipal Defined Opportunity Trust Inc","MTUM":"iShares Edge MSCI USA Momentum Factor","MTW":"Manitowoc Company Inc. (The)","MTX":"Minerals Technologies Inc.","MTZ":"MasTec Inc.","MU":"Micron Technology Inc.","MUA":"Blackrock MuniAssets Fund Inc","MUB":"iShares National Muni Bond","MUC":"Blackrock MuniHoldings California Quality Fund Inc.","MUDS":"Mudrick Capital Acquisition Corporation","MUDSU":"Mudrick Capital Acquisition Corporation Unit","MUDSW":"Mudrick Capital Acquisition Corporation Warrant","MUE":"Blackrock MuniHoldings Quality Fund II Inc.","MUFG":"Mitsubishi UFJ Financial Group Inc.","MUH":"Blackrock MuniHoldings Fund II Inc.","MUI":"Blackrock Muni Intermediate Duration Fund Inc","MUJ":"Blackrock MuniHoldings New Jersey Quality Fund Inc.","MUNI":"PIMCO Intermediate Municipal Bond Active Exchange-Traded Fund","MUR":"Murphy Oil Corporation","MUS":"Blackrock MuniHoldings Quality Fund Inc","MUSA":"Murphy USA Inc.","MUST":"Columbia Multi-Sector Municipal Income","MUTE":"Direxion Daily Communication Services Index Bear 3X Shares","MUX":"McEwen Mining Inc.","MVBF":"MVB Financial Corp.","MVC":"MVC Capital Inc.","MVCD":"MVC Capital Inc. 6.25% Senior Notes due 2022","MVF":"Blackrock MuniVest Fund Inc.","MVIN":"Natixis ETF Trust","MVIS":"MicroVision Inc.","MVO":"MV Oil Trust","MVT":"Blackrock MuniVest Fund II Inc.","MVV":"ProShares Ultra MidCap400","MWA":"MUELLER WATER PRODUCTS","MWK":"Mohawk Group Holdings Inc.","MX":"MagnaChip Semiconductor Corporation","MXC":"Mexco Energy Corporation","MXDE":"Nationwide Maximum Diversification Emerging Markets Core Equity","MXDU":"Nationwide Maximum Diversification U.S. Core Equity","MXE":"Mexico Equity and Income Fund Inc. (The)","MXF":"Mexico Fund Inc. (The)","MXI":"iShares Global Materials","MXIM":"Maxim Integrated Products Inc.","MXL":"MaxLinear Inc.","MYC":"Blackrock MuniYield California Fund Inc.","MYD":"Blackrock MuniYield Fund Inc.","MYE":"Myers Industries Inc.","MYF":"Blackrock MuniYield Investment Fund","MYFW":"First Western Financial Inc.","MYGN":"Myriad Genetics Inc.","MYI":"Blackrock MuniYield Quality Fund III Inc","MYJ":"Blackrock MuniYield New Jersey Fund Inc","MYL":"Mylan N.V.","MYN":"Blackrock MuniYield New York Quality Fund Inc.Common Stock","MYND":"MYnd Analytics Inc.","MYNDW":"MYnd Analytics Inc. Warrant","MYO":"Myomo Inc.","MYOK":"MyoKardia Inc.","MYOS":"MYOS RENS Technology Inc.","MYOV":"Myovant Sciences Ltd.","MYRG":"MYR Group Inc.","MYSZ":"My Size Inc.","MYT":"Urban Tea Inc.","MYY":"ProShares Short MidCap400","MZA":"Blackrock MuniYield Arizona Fund Inc.","MZZ":"ProShares UltraShort MidCap400","NAC":"Nuveen California Quality Municipal Income Fund","NACP":"Impact Shares Trust I NAACP Minority Empowerment","NAD":"Nuveen Quality Municipal Income Fund","NAII":"Natural Alternatives International Inc.","NAIL":"Direxion Daily Homebuilders & Supplies Bull 3X Shares","NAK":"Northern Dynasty Minerals Ltd.","NAKD":"Naked Brand Group Limited","NAN":"Nuveen New York Quality Municipal Income Fund","NANO":"Nanometrics Incorporated","NANR":"SPDR S&P North American Natural Resources","NAOV":"NanoVibronix Inc.","NAT":"Nordic American Tankers Limited","NATH":"Nathan's Famous Inc.","NATI":"National Instruments Corporation","NATR":"Nature's Sunshine Products Inc.","NAV":"Navistar International Corporation","NAV-D":"Navistar International Corporation Preferred Stock","NAVB":"Navidea Biopharmaceuticals Inc.","NAVI":"Navient Corporation","NAZ":"Nuveen Arizona Quality Municipal Income Fund","NBB":"Nuveen Taxable Municipal Income Fund of Beneficial Interest","NBEV":"New Age Beverages Corporation","NBH":"Neuberger Berman Municipal Fund Inc.","NBHC":"National Bank Holdings Corporation","NBIX":"Neurocrine Biosciences Inc.","NBL":"Noble Energy Inc.","NBLX":"Noble Midstream Partners LP Representing Limited Partner Interests","NBN":"Northeast Bank","NBO":"Neuberger Berman New York Municipal Fund Inc.","NBR":"Nabors Industries Ltd.","NBR-A":"Nabors Industries Ltd. 6.00% Mandatory Convertible Preferred Shares Series A","NBRV":"Nabriva Therapeutics plc","NBTB":"NBT Bancorp Inc.","NBW":"Neuberger Berman California Municipal Fund Inc","NBY":"NovaBay Pharmaceuticals Inc.","NC":"NACCO Industries Inc.","NCA":"Nuveen California Municipal Value Fund Inc.","NCB":"Nuveen California Municipal Value Fund 2 of Beneficial Interest","NCBS":"Nicolet Bankshares Inc.","NCI":"Navigant Consulting Inc.","NCLH":"Norwegian Cruise Line Holdings Ltd.","NCMI":"National CineMedia Inc.","NCNA":"NuCana plc","NCR":"NCR Corporation","NCSM":"NCS Multistage Holdings Inc.","NCTY":"The9 Limited","NCV":"AllianzGI Convertible & Income Fund","NCV-A":"AllianzGI Convertible & Income Fund 5.625% Series A Cumulative Preferred Shares (Liquidation Preference $25.00 per share)","NCZ":"AllianzGI Convertible & Income Fund II of Beneficial Interest","NCZ-A":"","NDAQ":"Nasdaq Inc.","NDLS":"Noodles & Company","NDP":"Tortoise Energy Independence Fund Inc.","NDRA":"ENDRA Life Sciences Inc.","NDRAW":"ENDRA Life Sciences Inc. Warrants","NDSN":"Nordson Corporation","NE":"Noble Corporation (UK)","NEA":"Nuveen AMT-Free Quality Municipal Income Fund of Beneficial Interest Par Value $.01","NEAR":"iShares Short Maturity Bond","NEBU":"Nebula Acquisition Corporation","NEBUU":"Nebula Acquisition Corporation Unit","NEBUW":"Nebula Acquisition Corporation Warrant","NEE":"NextEra Energy Inc.","NEE-I":"NextEra Energy Inc. Series I Junior Subordinated Debentures due November 15 2072","NEE-J":"NextEra Energy Inc. Series J Junior Subordinated Debentures due January 15 2073","NEE-K":"NextEra Energy Inc. Series K Junior Subordinated Debentures due June 1 2076","NEE-N":"NextEra Energy Inc. Series N Junior Subordinated Debentures due March 1 2079","NEE-R":"NextEra Energy Inc. Corporate Units expiring 09/01/2019","NEED":"Direxion Daily Consumer Staples Bull 3X Shares","NEM":"Newmont Goldcorp Corporation","NEN":"New England Realty Associates Limited Partnership Class A Depositary Receipts Evidencing Units of Limited Partnership","NEO":"NeoGenomics Inc.","NEOG":"Neogen Corporation","NEON":"Neonode Inc.","NEOS":"Neos Therapeutics Inc.","NEP":"NextEra Energy Partners LP representing limited partner interests","NEPT":"Neptune Wellness Solutions Inc.","NERD":"Roundhill BITKRAFT Esports & Digital Entertainment","NERV":"Minerva Neurosciences Inc","NES":"Nuverra Environmental Solutions Inc.","NESR":"National Energy Services Reunited Corp.","NESRW":"National Energy Services Reunited Corp. Warrant","NETE":"Net Element Inc.","NETL":"NETLease Corporate Real Estate","NEU":"NewMarket Corp","NEV":"Nuveen Enhanced Municipal Value Fund of Beneficial Interest","NEW":"Puxin Limited American Depositary Shares each representing two","NEWA":"Newater Technology Inc.","NEWM":"New Media Investment Group Inc.","NEWR":"New Relic Inc.","NEWT":"Newtek Business Services Corp.","NEWTI":"Newtek Business Services Corp. 6.25% Notes Due 2023","NEWTZ":"","NEXA":"Nexa Resources S.A.","NEXT":"NextDecade Corporation","NFBK":"Northfield Bancorp Inc.","NFC":"New Frontier Corporation Class A","NFC+":"New Frontier Corporation Warrants each whole warrant exercisable for one Class A ordinary share at an exercise price of $11.50 per share","NFC=":"New Frontier Corporation Units each consisting of one Class A Ordinary Share and one half of one Warrant","NFE":"New Fortress Energy LLC","NFG":"National Fuel Gas Company","NFJ":"AllianzGI NFJ Dividend Interest & Premium Strategy Fund","NFLT":"Virtus Newfleet Multi-Sector Bond","NFLX":"Netflix Inc.","NFO":"Invesco Insider Sentiment","NFRA":"FlexShares STOXX Global Broad Infrastructure Index Fund","NFTY":"First Trust India Nifty 50 Equal Weight ETF","NG":"Novagold Resources Inc.","NGD":"New Gold Inc.","NGE":"Global X MSCI Nigeria","NGG":"National Grid Transco PLC PLC (NEW) American Depositary Shares","NGHC":"National General Holdings Corp","NGHCN":"National General Holdings Corp Depositary Shares each representing 1/40th of a share of 7.50% Non-Cumulative Preferred Stock Series C","NGHCO":"National General Holdings Corp Depositary Shares","NGHCP":"National General Holdings Corp 7.50% Non-Cumulative Preferred Stock Series A","NGHCZ":"","NGL":"NGL ENERGY PARTNERS LP representing Limited Partner Interests","NGL-B":"NGL ENERGY PARTNERS LP 9.00% Class B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partnership interests","NGL-C":"NGL ENERGY PARTNERS LP 9.625% Class C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests","NGLS-A":"Targa Resources Partners LP 9.00% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing preferred equity interests","NGM":"NGM Biopharmaceuticals Inc.","NGS":"Natural Gas Services Group Inc.","NGVC":"Natural Grocers by Vitamin Cottage Inc.","NGVT":"Ingevity Corporation","NH":"NantHealth Inc.","NHA":"Nuveen Municipal 2021 Target Term Fund Fund","NHC":"National HealthCare Corporation","NHF":"NexPoint Strategic Opportunities Fund","NHI":"National Health Investors Inc.","NHLD":"National Holdings Corporation","NHLDW":"National Holdings Corporation Warrants","NHS":"Neuberger Berman High Yield Strategies Fund","NHTC":"Natural Health Trends Corp.","NI":"NiSource Inc","NI-B":"NiSource Inc Depositary Shares Series B","NIB":"iPath Bloomberg Cocoa Subindex Total Return SM IndexETN","NICE":"NICE Ltd","NICK":"Nicholas Financial Inc.","NID":"Nuveen Intermediate Duration Municipal Term Fund of Beneficial Interest","NIE":"AllianzGI Equity & Convertible Income Fund","NIHD":"NII Holdings Inc.","NIM":"Nuveen Select Maturities Municipal Fund","NINE":"Nine Energy Service Inc.","NIO":"NIO Inc. American depositary shares each representing one Class A","NIQ":"Nuveenn Intermediate Duration Quality Municipal Term Fund of Beneficial Interest","NIU":"Niu Technologies","NJR":"NewJersey Resources Corporation","NJV":"Nuveen New Jersey Municipal Value Fund of Beneficial Interest","NK":"NantKwest Inc.","NKE":"Nike Inc.","NKG":"Nuveen Georgia Quality Municipal Income Fund","NKSH":"National Bankshares Inc.","NKTR":"Nektar Therapeutics","NKX":"Nuveen California AMT-Free Quality Municipal Income Fund","NL":"NL Industries Inc.","NLNK":"NewLink Genetics Corporation","NLR":"VanEck Vectors Uranium & Nuclear Energy","NLS":"Nautilus Inc.","NLSN":"Nielsen N.V.","NLY":"Annaly Capital Management Inc","NLY-C*":"Annaly Capital Management Inc 7.625% Series C Cumulative Redeemable Preferred Stock","NLY-D":"Annaly Capital Management Inc Preferred Series D","NLY-F":"Annaly Capital Management Inc 6.95% Series F","NLY-G":"Annaly Capital Management Inc 6.50% Series G Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","NLY-I":"Annaly Capital Management Inc 6.750% Series I Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","NM":"Navios Maritime Holdings Inc.","NM-G":"Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perpetual Preferred Series G (Marshall Islands)","NM-H":"Navios Maritime Holdings Inc. Sponsored ADR Representing 1/100th Perp. Preferred Series H%","NMCI":"Navios Maritime Containers L.P.","NMFC":"New Mountain Finance Corporation","NMFX":"","NMI":"Nuveen Municipal Income Fund Inc.","NMIH":"NMI Holdings Inc","NMK-B":"Niagara Mohawk Holdings Inc. Preferred Stock","NMK-C":"Niagara Mohawk Holdings Inc. Preferred Stock","NML":"Neuberger Berman MLP and Energy Income Fund Inc.","NMM":"Navios Maritime Partners LP Representing Limited Partner Interests","NMR":"Nomura Holdings Inc ADR American Depositary Shares","NMRD":"Nemaura Medical Inc.","NMRK":"Newmark Group Inc.","NMS":"Nuveen Minnesota Quality Municipal Income Fund","NMT":"Nuveen Massachusetts Quality Municipal Income Fund","NMY":"Nuveen Maryland Quality Municipal Income Fund","NMZ":"Nuveen Municipal High Income Opportunity Fund $0.01 par value per share","NNA":"Navios Maritime Acquisition Corporation","NNBR":"NN Inc.","NNC":"Nuveen North Carolina Quality Municipal Income Fund","NNDM":"Nano Dimension Ltd.","NNI":"Nelnet Inc.","NNN":"National Retail Properties","NNN-E":"National Retail Properties Depositary Shares Series E","NNN-F":"National Retail Properties Depositary Shares Series F","NNVC":"NanoViricides Inc.","NNY":"Nuveen New York Municipal Value Fund Inc.","NOA":"North American Construction Group Ltd. (no par)","NOAH":"Noah Holdings Limited","NOBL":"ProShares S&P 500 Dividend Aristocrats","NOC":"Northrop Grumman Corporation","NODK":"NI Holdings Inc.","NOG":"Northern Oil and Gas Inc.","NOK":"Nokia Corporation Sponsored American Depositary Shares","NOM":"Nuveen Missouri Quality Municipal Income Fund","NOMD":"Nomad Foods Limited","NORW":"Global X MSCI Norway","NOV":"National Oilwell Varco Inc.","NOVN":"Novan Inc.","NOVT":"Novanta Inc.","NOW":"ServiceNow Inc.","NP":"Neenah Inc.","NPK":"National Presto Industries Inc.","NPN":"Nuveen Pennsylvania Municipal Value Fund of Beneficial Interest","NPO":"EnPro Industries Inc","NPTN":"NeoPhotonics Corporation","NPV":"Nuveen Virginia Quality Municipal Income Fund","NQP":"Nuveen Pennsylvania Quality Municipal Income Fund","NR":"Newpark Resources Inc.","NRC":"National Research Corporation","NRCG":"NRC Group Holdings Corp.","NRCG+":"","NRE":"NorthStar Realty Europe Corp.","NRG":"NRG Energy Inc.","NRGD":"MicroSectors U.S. Big Oil Index -3X Inverse Leveraged ETN","NRGO":"MicroSectors U.S. Big Oil Index 2X Leveraged ETN","NRGU":"MicroSectors U.S. Big Oil Index 3X Leveraged ETN","NRGX":"PIMCO Energy and Tactical Credit Opportunities Fund of Beneficial Interest","NRGZ":"MicroSectors U.S. Big Oil Index -2X Inverse Leveraged ETN","NRIM":"Northrim BanCorp Inc","NRK":"Nuveen New York AMT-Free Quality Municipal Income Fund","NRO":"Neuberger Berman Real Estate Securities Income Fund Inc.","NRP":"Natural Resource Partners LP Limited Partnership","NRT":"North European Oil Royality Trust","NRUC":"National Rural Utilities Cooperative Finance Corporation 5.500% Subordinated Notes due 2064 (Subordinated Deferrable Interest Notes)","NRZ":"New Residential Investment Corp.","NRZ-A":"New Residential Investment Corp. 7.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","NS":"Nustar Energy L.P.","NS-A":"Nustar Energy L.P. 8.50% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","NS-B":"Nustar Energy L.P. 7.625% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests","NS-C":"Nustar Energy L.P. 9.00% Series C Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","NSA":"National Storage Affiliates Trust of Beneficial Interest","NSA-A":"National Storage Affiliates Trust 6.000% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest (Liquidation Preference $25.00 per share)","NSC":"Norfolk Southern Corporation","NSEC":"National Security Group Inc.","NSIT":"Insight Enterprises Inc.","NSL":"Nuveen Senior Income Fund","NSP":"Insperity Inc.","NSPR":"InspireMD Inc.","NSPR+":"InspireMD Inc. Warrants","NSPR+B":"InspireMD Inc. Series B Warrants (Expiring March 14 2022)","NSS":"NuStar Logistics L.P. 7.625% Fixed-to-Floating Rate Subordinated Notes due 2043","NSSC":"NAPCO Security Technologies Inc.","NSTG":"NanoString Technologies Inc.","NSYS":"Nortech Systems Incorporated","NTAP":"NetApp Inc.","NTB":"Bank of N.T. Butterfield & Son Limited (The) Voting","NTC":"Nuveen Connecticut Quality Municipal Income Fund","NTCT":"NetScout Systems Inc.","NTEC":"Intec Pharma Ltd.","NTES":"NetEase Inc.","NTEST":"","NTEST.A":"","NTEST.B":"","NTEST.C":"","NTG":"Tortoise Midstream Energy Fund Inc.","NTGN":"Neon Therapeutics Inc.","NTGR":"NETGEAR Inc.","NTIC":"Northern Technologies International Corporation","NTIP":"Network-1 Technologies Inc.","NTLA":"Intellia Therapeutics Inc.","NTN":"NTN Buzztime Inc.","NTNX":"Nutanix Inc.","NTP":"Nam Tai Property Inc.","NTR":"Nutrien Ltd.","NTRA":"Natera Inc.","NTRP":"Neurotrope Inc.","NTRS":"Northern Trust Corporation","NTRSP":"Northern Trust Corporation Depository Shares","NTSX":"WisdomTree 90/60 U.S. Balanced Fund","NTWK":"NETSOL Technologies Inc.","NTX":"Nuveen Texas Quality Municipal Income Fund","NTZ":"Natuzzi S.p.A.","NUAG":"Nuveen Enhanced Yield U.S. Aggregate Bond","NUAN":"Nuance Communications Inc.","NUBD":"Nuveen ESG U.S. Aggregate Bond","NUDM":"Nuveen ESG International Developed Markets Equity","NUE":"Nucor Corporation","NUEM":"Nuveen ESG Emerging Markets Equity","NUGT":"Direxion Daily Gold Miners Index Bull 3X Shares","NULC":"Nuveen ESG Large-Cap","NULG":"Nuveen ESG Large-Cap Growth","NULV":"Nuveen ESG Large-Cap Value","NUM":"Nuveen Michigan Quality Municipal Income Fund","NUMG":"Nuveen ESG Mid-Cap Growth","NUMV":"Nuveen ESG Mid-Cap Value","NUO":"Nuveen Ohio Quality Municipal Income Fund","NURE":"Nuveen Short-Term REIT","NURO":"NeuroMetrix Inc.","NUROW":"","NUS":"Nu Skin Enterprises Inc.","NUSA":"Nuveen Enhanced Yield 1-5 Year U.S. Aggregate Bond","NUSC":"Nuveen ESG Small-Cap","NUV":"Nuveen Municipal Value Fund Inc.","NUVA":"NuVasive Inc.","NUW":"Nuveen AMT-Free Municipal Value Fund","NVAX":"Novavax Inc.","NVCN":"Neovasc Inc.","NVCR":"NovoCure Limited","NVDA":"NVIDIA Corporation","NVEC":"NVE Corporation","NVEE":"NV5 Global Inc.","NVFY":"Nova Lifestyle Inc","NVG":"Nuveen AMT-Free Municipal Credit Income Fund","NVGS":"Navigator Holdings Ltd. (Marshall Islands)","NVIV":"InVivo Therapeutics Holdings Corp.","NVLN":"Novelion Therapeutics Inc.","NVMI":"Nova Measuring Instruments Ltd.","NVO":"Novo Nordisk A/S","NVR":"NVR Inc.","NVRO":"Nevro Corp.","NVS":"Novartis AG","NVT":"nVent Electric plc","NVTA":"Invitae Corporation","NVTR":"Nuvectra Corporation","NVUS":"Novus Therapeutics Inc.","NWBI":"Northwest Bancshares Inc.","NWE":"NorthWestern Corporation","NWFL":"Norwood Financial Corp.","NWHM":"The New Home Company Inc.","NWL":"Newell Brands Inc.","NWLI":"National Western Life Group Inc.","NWN":"Northwest Natural Holding Company","NWPX":"Northwest Pipe Company","NWS":"News Corporation","NWSA":"News Corporation","NX":"Quanex Building Products Corporation","NXC":"Nuveen California Select Tax-Free Income Portfolio","NXE":"Nexgen Energy Ltd.","NXGN":"NextGen Healthcare Inc.","NXJ":"Nuveen New Jersey Qualified Municipal Fund","NXN":"Nuveen New York Select Tax-Free Income Portfolio","NXP":"Nuveen Select Tax Free Income Portfolio","NXPI":"NXP Semiconductors N.V.","NXQ":"Nuveen Select Tax Free Income Portfolio II","NXR":"Nuveen Select Tax Free Income Portfolio III","NXRT":"NexPoint Residential Trust Inc.","NXST":"Nexstar Media Group Inc.","NXTC":"NextCure Inc.","NXTD":"NXT-ID Inc.","NXTDW":"","NXTG":"First Trust Index NextG ETF","NYCB":"New York Community Bancorp Inc.","NYCB-A":"New York Community Bancorp Inc. Depositary shares Series A","NYCB-U":"New York Community Bancorp Inc. Capital Tr V (BONUSES)","NYF":"iShares New York Muni Bond","NYMT":"New York Mortgage Trust Inc.","NYMTN":"New York Mortgage Trust Inc. 8.00% Series D Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","NYMTO":"New York Mortgage Trust Inc. 7.875% Series C Cumulative Redeemable Preferred Stock","NYMTP":"New York Mortgage Trust Inc. 7.75% Series B Cumulative Redeemable Preferred Stock","NYMX":"Nymox Pharmaceutical Corporation","NYNY":"Empire Resorts Inc.","NYT":"New York Times Company (The)","NYV":"Nuveen New York Municipal Value Fund 2 of Beneficial Interest","NZF":"Nuveen Municipal Credit Income Fund","NONE":"","O":"Realty Income Corporation","OAK":"Oaktree Capital Group LLC Class A Units Representing Limited Liability Company Interests","OAK-A":"Oaktree Capital Group LLC 6.625% Series A Preferred units","OAK-B":"Oaktree Capital Group LLC 6.550% Series B Preferred Units","OAS":"Oasis Petroleum Inc.","OASM":"Oasmia Pharmaceutical AB","OBAS":"Optibase Ltd.","OBCI":"Ocean Bio-Chem Inc.","OBE":"Obsidian Energy Ltd.","OBLN":"Obalon Therapeutics Inc.","OBNK":"Origin Bancorp Inc.","OBOR":"KraneShares MSCI One Belt One Road Index","OBSV":"ObsEva SA","OC":"Owens Corning Inc New","OCC":"Optical Cable Corporation","OCCI":"OFS Credit Company Inc.","OCCIP":"OFS Credit Company Inc. 6.875% Series A Term Preferred Stock","OCFC":"OceanFirst Financial Corp.","OCIO":"ETF Series Solutions Trust","OCN":"Ocwen Financial Corporation","OCSI":"Oaktree Strategic Income Corporation","OCSL":"Oaktree Specialty Lending Corporation","OCSLL":"Oaktree Specialty Lending Corporation 6.125% senior notes due 2028","OCUL":"Ocular Therapeutix Inc.","OCX":"OncoCyte Corporation","ODC":"Oil-Dri Corporation Of America","ODFL":"Old Dominion Freight Line Inc.","ODP":"Office Depot Inc.","ODT":"Odonate Therapeutics Inc.","OEC":"Orion Engineered Carbons S.A","OEF":"iShares S&P 100","OESX":"Orion Energy Systems Inc.","OEUR":"O'Shares FTSE Europe Quality Dividend","OFC":"Corporate Office Properties Trust","OFED":"Oconee Federal Financial Corp.","OFG":"OFG Bancorp","OFG-A":"OFG Bancorp Preferred Stock","OFG-B":"OFG Bancorp 7.0% Non Cumulative Monthly Income Preferred Stock Series B","OFG-D":"OFG Bancorp 7.125% Non-Cumulative Perpetual Preferred Stock. Series D","OFIX":"Orthofix Medical Inc.","OFLX":"Omega Flex Inc.","OFS":"OFS Capital Corporation","OFSSL":"OFS Capital Corporation 6.375% Notes due 2025","OFSSZ":"","OGCP":"Empire State Realty OP L.P. Series 60 Operating Partnership Units Representing Limited Partnership Interests","OGE":"OGE Energy Corp","OGEN":"Oragenics Inc.","OGI":"Organigram Holdings Inc.","OGIG":"O'Shares Global Internet Giants","OGS":"ONE Gas Inc.","OHAI":"OHA Investment Corporation","OHI":"Omega Healthcare Investors Inc.","OHRP":"Ohr Pharmaceutical Inc.","OI":"Owens-Illinois Inc.","OIA":"Invesco Municipal Income Opportunities Trust","OIBR.C":"Oi S.A. American Depositary Shares (Each representing 1)","OIH":"VanEck Vectors Oil Services","OII":"Oceaneering International Inc.","OIIM":"O2Micro International Limited","OIL":"iPath Series B S&P GSCI Crude Oil","OILD":"ProShares UltraPro 3x Short Crude Oil","OILK":"ProShares K-1 Free Crude Oil Strategy","OILU":"ProShares UltraPro 3x Crude Oil","OILX":"ETRACS S&P GSCI Crude Oil Total Return Index ETN due February 22 2046","OIS":"Oil States International Inc.","OKDCC":"Eaton Vance Oaktree Diversified Credit NextShares","OKE":"ONEOK Inc.","OKTA":"Okta Inc.","OLBK":"Old Line Bancshares Inc.","OLD":"The Long-Term Care ETF","OLED":"Universal Display Corporation","OLEM":"iPath Pure Beta Crude Oil ETN","OLLI":"Ollie's Bargain Outlet Holdings Inc.","OLN":"Olin Corporation","OLP":"One Liberty Properties Inc.","OMAB":"Grupo Aeroportuario del Centro Norte S.A.B. de C.V.","OMC":"Omnicom Group Inc.","OMCL":"Omnicell Inc.","OMER":"Omeros Corporation","OMEX":"Odyssey Marine Exploration Inc.","OMF":"OneMain Holdings Inc.","OMFL":"Invesco Exchange-Traded Self-Indexed Fund Trust Russell 1000 Dynamic Multifactor","OMFS":"Invesco Exchange-Traded Self-Indexed Fund Trust Russell 2000 Dynamic Multifactor","OMI":"Owens & Minor Inc.","OMN":"OMNOVA Solutions Inc.","OMOM":"Invesco Exchange-Traded Fund Trust II Russell 1000 Momentum Factor","OMP":"Oasis Midstream Partners LP Representing Limited Partner Interests","ON":"ON Semiconductor Corporation","ONB":"Old National Bancorp","ONCE":"Spark Therapeutics Inc.","ONCS":"OncoSec Medical Incorporated","ONCT":"Oncternal Therapeutics Inc.","ONCY":"Oncolytics Biotech Inc.","ONDK":"On Deck Capital Inc.","ONE":"OneSmart International Education Group Limited ADS","ONEO":"SPDR Russell 1000 Momentum Focus","ONEQ":"Fidelity Nasdaq Composite Index Tracking Stock","ONEV":"SPDR Russell 1000 Low Volatility Focus","ONEY":"SPDR Russell 1000 Yield Focus","ONLN":"ProShares Online Retail","ONTX":"Onconova Therapeutics Inc.","ONTXW":"Onconova Therapeutics Inc. Warrants","ONVO":"Organovo Holdings Inc.","OOMA":"Ooma Inc.","OPB":"Opus Bank","OPBK":"OP Bancorp","OPER":"ETF Series Solutions ClearShares Ultra-Short Maturity","OPES":"Opes Acquisition Corp.","OPESU":"Opes Acquisition Corp. Unit","OPESW":"Opes Acquisition Corp. Warrant","OPGN":"OpGen Inc.","OPGNW":"","OPHC":"OptimumBank Holdings Inc.","OPI":"Office Properties Income Trust","OPINI":"Office Properties Income Trust 5.875% Senior Notes due 2046","OPK":"Opko Health Inc.","OPNT":"Opiant Pharmaceuticals Inc.","OPOF":"Old Point Financial Corporation","OPP":"RiverNorth/DoubleLine Strategic Opportunity Fund Inc.","OPRA":"Opera Limited","OPRX":"OptimizeRx Corporation","OPTN":"OptiNose Inc.","OPTT":"Ocean Power Technologies Inc.","OPY":"Oppenheimer Holdings Inc. Class A (DE)","OQAL":"Invesco Exchange-Traded Fund Trust II Russell 1000 Quality Factor","OR":"Osisko Gold Royalties Ltd","ORA":"Ormat Technologies Inc.","ORAN":"Orange","ORBC":"ORBCOMM Inc.","ORC":"Orchid Island Capital Inc.","ORCL":"Oracle Corporation","ORG":"The Organics ETF","ORGO":"Organogenesis Holdings Inc.","ORGS":"Orgenesis Inc.","ORI":"Old Republic International Corporation","ORIT":"Oritani Financial Corp.","ORLY":"O'Reilly Automotive Inc.","ORMP":"Oramed Pharmaceuticals Inc.","ORN":"Orion Group Holdings Inc. Common","ORRF":"Orrstown Financial Services Inc","ORTX":"Orchard Therapeutics plc","OSB":"Norbord Inc.","OSBC":"Old Second Bancorp Inc.","OSBCP":"Old Second Bancorp Inc. 7.80% Cumulative Trust Preferred Securities","OSCV":"Opus Small Cap Value Plus","OSG":"Overseas Shipholding Group Inc. Class A","OSIS":"OSI Systems Inc.","OSIZ":"Invesco Exchange-Traded Fund Trust II Russell 1000 Size Factor","OSK":"Oshkosh Corporation (Holding Company)Common Stock","OSLE":"Oaktree Specialty Lending Corporation 5.875% Senior Notes due 2024","OSMT":"Osmotica Pharmaceuticals plc","OSN":"Ossen Innovation Co. Ltd.","OSPN":"OneSpan Inc.","OSS":"One Stop Systems Inc.","OSTK":"Overstock.com Inc.","OSUR":"OraSure Technologies Inc.","OSW":"OneSpaWorld Holdings Limited","OTEL":"Otelco Inc.","OTEX":"Open Text Corporation","OTIC":"Otonomy Inc.","OTIV":"On Track Innovations Ltd","OTLK":"Outlook Therapeutics Inc.","OTLKW":"Outlook Therapeutics Inc. Series A Warrant","OTTR":"Otter Tail Corporation","OTTW":"Ottawa Bancorp Inc.","OUNZ":"VanEck Merk Gold Trust","OUSA":"O'Shares FTSE U.S. Quality Dividend","OUSM":"O'Shares FTSE Russell Small Cap Quality Dividend","OUT":"OUTFRONT Media Inc.","OVBC":"Ohio Valley Banc Corp.","OVID":"Ovid Therapeutics Inc.","OVLU":"Invesco Exchange-Traded Fund Trust II Russell 1000 Value Factor","OVLY":"Oak Valley Bancorp (CA)","OVOL":"Invesco Exchange-Traded Fund Trust II Russell 1000 Low Volatility Factor","OXBR":"Oxbridge Re Holdings Limited","OXBRW":"Oxbridge Re Holdings Limited Warrant","OXFD":"Oxford Immunotec Global PLC","OXLC":"Oxford Lane Capital Corp.","OXLCM":"Oxford Lane Capital Corp. 6.75% Series 2024 Term Preferred Stock","OXLCO":"Oxford Lane Capital Corp. Term Preferred Shares 7.50% Series 2023","OXM":"Oxford Industries Inc.","OXSQ":"Oxford Square Capital Corp.","OXSQL":"Oxford Square Capital Corp. 6.50% Notes due 2024","OXSQZ":"Oxford Square Capital Corp. 6.25% Notes due 2026","OXY":"Occidental Petroleum Corporation","OYLD":"Invesco Exchange-Traded Fund Trust II Russell 1000 Yield Factor","OZK":"Bank OZK","OZM":"Och-Ziff Capital Management Group LLC Class A","PAA":"Plains All American Pipeline L.P.","PAAC":"Proficient Alpha Acquisition Corp.","PAACR":"Proficient Alpha Acquisition Corp. Rights","PAACU":"Proficient Alpha Acquisition Corp. Unit","PAACW":"Proficient Alpha Acquisition Corp. Warrant","PAAS":"Pan American Silver Corp.","PAC":"Grupo Aeroportuario Del Pacifico S.A. B. de C.V. de C.V. (each representing 10 Series B shares)","PACA":"Xtrackers MSCI Latin America Pacific Alliance","PACB":"Pacific Biosciences of California Inc.","PACD":"Pacific Drilling S.A.","PACK":"Ranpak Holdings Corp Class A","PACK+":"","PACQ":"Pure Acquisition Corp.","PACQU":"Pure Acquisition Corp. Unit","PACQW":"Pure Acquisition Corp. Warrant","PACW":"PacWest Bancorp","PAG":"Penske Automotive Group Inc.","PAGP":"Plains Group Holdings L.P. Class A Shares representing limited partner interests","PAGS":"PagSeguro Digital Ltd. Class A","PAHC":"Phibro Animal Health Corporation","PAI":"Western Asset Investment Grade Income Fund Inc.","PAK":"Global X MSCI Pakistan","PALL":"Aberdeen Standard Physical Palladium Shares","PAM":"Pampa Energia S.A.","PANL":"Pangaea Logistics Solutions Ltd.","PANW":"Palo Alto Networks Inc.","PAPR":"Innovator S&P 500 Power Buffer ETF - April","PAR":"PAR Technology Corporation","PARR":"Par Pacific Holdings Inc.","PASS":"Direxion Daily Consumer Discretionary Bear 3X Shares","PATI":"Patriot Transportation Holding Inc.","PATK":"Patrick Industries Inc.","PAVE":"Global X Funds U.S. Infrastructure Development","PAVM":"PAVmed Inc.","PAVMW":"PAVmed Inc. Warrant","PAVMZ":"PAVmed Inc. Series Z Warrant","PAWZ":"ProShares Pet Care","PAYC":"Paycom Software Inc.","PAYS":"Paysign Inc.","PAYX":"Paychex Inc.","PB":"Prosperity Bancshares Inc.","PBA":"Pembina Pipeline Corp. (Canada)","PBB":"Prospect Capital Corporation 6.25% Notes due 2024","PBBI":"PB Bancorp Inc.","PBC":"","PBCT":"People's United Financial Inc.","PBCTP":"People's United Financial Inc. Perpetual Preferred Series A Fixed-to-floating Rate","PBD":"Invesco Global Clean Energy","PBDM":"Invesco PureBeta FTSE Developed ex-North America","PBE":"Invesco Dynamic Biotech & Genome","PBEE":"Invesco PureBeta FTSE Emerging Markets","PBF":"PBF Energy Inc. Class A","PBFX":"PBF Logistics LP representing limited partner interests","PBH":"Prestige Consumer Healthcare Inc.","PBHC":"Pathfinder Bancorp Inc.","PBI":"Pitney Bowes Inc.","PBI-B":"Pitney Bowes Inc 6.70% Notes Due 2043","PBIP":"Prudential Bancorp Inc.","PBJ":"Invesco Dynamic Food & Beverage","PBND":"Invesco PureBeta US Aggregate Bond","PBP":"Invesco S&P 500 BuyWrite","PBPB":"Potbelly Corporation","PBR":"Petroleo Brasileiro S.A.- Petrobras","PBR.A":"Petroleo Brasileiro S.A.- Petrobras American Depositary Shares","PBS":"Invesco Dynamic Media","PBSM":"Invesco PureBeta MSCI USA Small Cap","PBT":"Permian Basin Royalty Trust","PBTP":"Invesco PureBeta 0-5 Yr US TIPS","PBTS":"Powerbridge Technologies Co. Ltd.","PBUS":"Invesco PureBeta MSCI USA","PBW":"Invesco WilderHill Clean Energy","PBY":"Prospect Capital Corporation 6.25% Notes due 2028","PBYI":"Puma Biotechnology Inc","PCAR":"PACCAR Inc.","PCB":"PCB Bancorp","PCEF":"Invesco CEF Income Composite","PCF":"High Income Securities Fund","PCG":"Pacific Gas & Electric Co.","PCG-A":"Pacific Gas & Electric Co. 6% Preferred Stock","PCG-B":"Pacific Gas & Electric Co. 5 1/2% Preferred Stock","PCG-C":"Pacific Gas & Electric Co. 5% 1st Preferred Stock","PCG-D":"Pacific Gas & Electric Co. 5% 1st Red. Preferred Stock","PCG-E":"Pacific Gas & Electric Co. 5% 1st A Preferred Stock","PCG-G":"Pacific Gas & Electric Co. 4.80% 1st Preferred Stock","PCG-H":"Pacific Gas & Electric Co. 4.50% 1st Preferred Stock","PCG-I":"Pacific Gas & Electric Co. 4.36% 1st Preferred Stock","PCH":"PotlatchDeltic Corporation","PCI":"PIMCO Dynamic Credit and Mortgage Income Fund of Beneficial Interest","PCK":"Pimco California Municipal Income Fund II of Beneficial Interest","PCM":"PCM Fund Inc.","PCMI":"PCM Inc.","PCN":"Pimco Corporate & Income Strategy Fund","PCOM":"Points International Ltd.","PCQ":"PIMCO California Municipal Income Fund","PCRX":"Pacira BioSciences Inc.","PCSB":"PCSB Financial Corporation","PCTI":"PC-Tel Inc.","PCTY":"Paylocity Holding Corporation","PCY":"Invesco Emerging Markets Sovereign Debt","PCYG":"Park City Group Inc.","PCYO":"Pure Cycle Corporation","PD":"PagerDuty Inc.","PDBC":"PowerShares DB Optimum Yield Diversified Commoditi","PDCE":"PDC Energy Inc.","PDCO":"Patterson Companies Inc.","PDD":"Pinduoduo Inc.","PDEX":"Pro-Dex Inc.","PDFS":"PDF Solutions Inc.","PDI":"PIMCO Dynamic Income Fund","PDLB":"PDL Community Bancorp","PDLI":"PDL BioPharma Inc.","PDM":"Piedmont Office Realty Trust Inc. Class A","PDN":"Invesco FTSE RAFI Developed Markets ex-U.S. Small-Mid","PDP":"Invesco DWA Momentum ETF","PDS":"Precision Drilling Corporation","PDSB":"PDS Biotechnology Corporation","PDT":"John Hancock Premium Dividend Fund","PE":"Parsley Energy Inc. Class A","PEB":"Pebblebrook Hotel Trust of Beneficial Interest","PEB-C":"Pebblebrook Hotel Trust 6.50% Series C Cumulative Redeemable Preferred Shares of Beneficial Interest","PEB-D":"Pebblebrook Hotel Trust 6.375% Series D Cumulative Redeemable Preferred Shares of Beneficial Interest","PEB-E":"Pebblebrook Hotel Trust 6.375% Series E Cumulative Redeemable Preferred Shares of Beneficial Interest","PEB-F":"Pebblebrook Hotel Trust 6.3% Series F Cumulative Redeemable Preferred Shares of Beneficial Interest","PEBK":"Peoples Bancorp of North Carolina Inc.","PEBO":"Peoples Bancorp Inc.","PECK":"The Peck Company Inc.","PECKW":"","PED":"Pedevco Corp.","PEG":"Public Service Enterprise Group Incorporated","PEGA":"Pegasystems Inc.","PEGI":"Pattern Energy Group Inc.","PEI":"Pennsylvania Real Estate Investment Trust","PEI-B":"Pennsylvania Real Estate Investment Trust Cumulative Redeemable Perpetual Preferred Shares Series B","PEI-C":"Pennsylvania Real Estate Investment Trust 7.20% Series C Cumulative Redeemable Perpetual Preferred Shares","PEI-D":"Pennsylvania Real Estate Investment Trust 6.875% Series D Cumulative Redeemable Perpetual Preferred Shares","PEIX":"Pacific Ethanol Inc.","PEJ":"Invesco Dynamic Leisure and Entertainment","PEK":"VanEck Vectors ChinaAMC CSI 3000","PEN":"Penumbra Inc.","PENN":"Penn National Gaming Inc.","PEO":"Adams Natural Resources Fund Inc.","PEP":"PepsiCo Inc.","PER":"SandRidge Permian Trust of Benficial Interest","PERI":"Perion Network Ltd","PES":"Pioneer Energy Services Corp. Common Stk","PESI":"Perma-Fix Environmental Services Inc.","PETQ":"PetIQ Inc.","PETS":"PetMed Express Inc.","PETX":"Aratana Therapeutics Inc.","PETZ":"TDH Holdings Inc.","PEX":"ProShares Global Listed Private Equity","PEXL":"Pacer US Export Leaders","PEY":"Invesco High Yield Equity Dividend Achievers ETF","PEZ":"Invesco DWA Consumer Cyclicals Momentum ETF","PFBC":"Preferred Bank","PFBI":"Premier Financial Bancorp Inc.","PFD":"Flaherty & Crumrine Preferred and Income Fund Incorporated","PFE":"Pfizer Inc.","PFF":"iShares U.S. Preferred Stock","PFFA":"Virtus InfraCap U.S. Preferred Stock","PFFD":"Global X U.S. Preferred","PFFL":"ETRACS 2xMonthly Pay Leveraged Preferred Stock Index ETN due September 25 2048","PFFR":"ETFIS Series Trust I","PFG":"Principal Financial Group Inc","PFGC":"Performance Food Group Company","PFH":"Cabco Tr Jcp 7.625","PFI":"Invesco DWA Financial Momentum ETF","PFIE":"Profire Energy Inc.","PFIG":"Invesco Fundamental Investment Grade Corporate Bond","PFIN":"P & F Industries Inc.","PFIS":"Peoples Financial Services Corp.","PFL":"PIMCO Income Strategy Fund Shares of Beneficial Interest","PFLT":"PennantPark Floating Rate Capital Ltd.","PFM":"Invesco Dividend Achievers ETF","PFMT":"Performant Financial Corporation","PFN":"PIMCO Income Strategy Fund II","PFNX":"Pfenex Inc.","PFO":"Flaherty & Crumrine Preferred and Income Opportunity Fund Incorporated","PFPT":"Proofpoint Inc.","PFS":"Provident Financial Services Inc","PFSI":"PennyMac Financial Services Inc.","PFSW":"PFSweb Inc.","PFXF":"VanEck Vectors Preferred Securities ex Financials","PG":"Procter & Gamble Company (The)","PGAL":"Global X MSCI Portugal","PGC":"Peapack-Gladstone Financial Corporation","PGF":"Invesco Financial Preferred","PGHY":"Invesco Global Short Term High Yield Bond","PGJ":"Invesco Golden Dragon China ETF","PGM":"iPathA Series B Bloomberg Platinum Subindex Total Return ETN","PGNX":"Progenics Pharmaceuticals Inc.","PGP":"Pimco Global Stocksplus & Income Fund StocksPlus & Income Fund of Beneficial Interest","PGR":"Progressive Corporation (The)","PGRE":"Paramount Group Inc.","PGTI":"PGT Innovations Inc.","PGX":"Invesco Preferred","PGZ":"Principal Real Estate Income Fund of Beneficial Interest","PH":"Parker-Hannifin Corporation","PHAS":"PhaseBio Pharmaceuticals Inc.","PHB":"Invesco Fundamental High Yield Corporate Bond","PHCF":"Puhui Wealth Investment Management Co. Ltd.","PHD":"Pioneer Floating Rate Trust Shares of Beneficial Interest","PHDG":"Invesco S&P 500 Downside Hedged","PHG":"Koninklijke Philips N.V. NY Registry Shares","PHI":"PLDT Inc. Sponsored ADR","PHIO":"Phio Pharmaceuticals Corp.","PHIOW":"Phio Pharmaceuticals Corp. Warrants","PHK":"Pimco High Income Fund","PHM":"PulteGroup Inc.","PHO":"Invesco Water Resources ETF","PHT":"Pioneer High Income Trust of Beneficial Interest","PHUN":"Phunware Inc.","PHUNW":"Phunware Inc. Warrants","PHX":"Panhandle Oil and Gas Inc","PHYL":"PGIM Active High Yield Bond","PHYS":"Sprott Physical Gold Trust ETV","PI":"Impinj Inc.","PIC=":"","PICB":"Invesco International Corporate Bond","PICK":"iShares MSCI Global Select Metals & Mining Producers Fund","PICO":"PICO Holdings Inc.","PID":"Invesco International Dividend Achievers ETF","PIE":"Invesco DWA Emerging Markets Momentum ETF","PIH":"1347 Property Insurance Holdings Inc.","PIHPP":"1347 Property Insurance Holdings Inc. 8.00% Cumulative Series A Preferred Stock","PII":"Polaris Industries Inc.","PILL":"Direxion Daily Pharmaceutical & Medical Bull 3X Shares","PIM":"Putnam Master Intermediate Income Trust","PIN":"Invesco India","PINC":"Premier Inc.","PINS":"Pinterest Inc. Class A","PIO":"Invesco Global Water ETF","PIR":"Pier 1 Imports Inc.","PIRS":"Pieris Pharmaceuticals Inc.","PIXY":"ShiftPixy Inc.","PIY":"Preferred Plus Trust (Ser CZN) Ser CZN-1 Tr Ctf 8.375% Maturity 10/01/2046","PIZ":"Invesco DWA Developed Markets Momentum ETF","PJAN":"Innovator S&P 500 Power Buffer ETF - January","PJC":"Piper Jaffray Companies","PJH":"Prudential Financial Inc. 5.75% Junior Subordinated Notes due 2052","PJP":"Invesco Dynamic Pharmaceuticals","PJT":"PJT Partners Inc. Class A","PJUL":"Innovator S&P 500 Power Buffer ETF - July","PJUN":"Innovator S&P 500 Power Buffer ETF - June","PK":"Park Hotels & Resorts Inc.","PKB":"Invesco Dynamic Building & Construction","PKBK":"Parke Bancorp Inc.","PKD":"Parker Drilling Company","PKE":"Park Electrochemical Corporation","PKG":"Packaging Corporation of America","PKI":"PerkinElmer Inc.","PKO":"Pimco Income Opportunity Fund of Beneficial Interest","PKOH":"Park-Ohio Holdings Corp.","PKW":"Invesco BuyBack Achievers ETF","PKX":"POSCO","PLAB":"Photronics Inc.","PLAG":"Planet Green Holdings Corp.","PLAN":"Anaplan Inc.","PLAT":"WisdomTree Modern Tech Platforms Fund","PLAY":"Dave & Buster's Entertainment Inc.","PLBC":"Plumas Bancorp","PLCE":"Children's Place Inc. (The)","PLCY":"EventShares U.S. Policy Alpha","PLD":"Prologis Inc.","PLG":"Platinum Group Metals Ltd. (Canada)","PLL":"Piedmont Lithium Limited","PLM":"Polymet Mining Corporation (Canada)","PLMR":"Palomar Holdings Inc.","PLNT":"Planet Fitness Inc.","PLOW":"Douglas Dynamics Inc.","PLPC":"Preformed Line Products Company","PLSE":"Pulse Biosciences Inc","PLT":"Plantronics Inc.","PLTM":"GraniteShares Platinum Shares","PLUG":"Plug Power Inc.","PLUS":"ePlus inc.","PLW":"Invesco 1-30 Laddered Treasury ETF","PLX":"Protalix BioTherapeutics Inc. (DE)","PLXP":"PLx Pharma Inc.","PLXS":"Plexus Corp.","PLYA":"Playa Hotels & Resorts N.V.","PLYM":"Plymouth Industrial REIT Inc.","PLYM-A":"Plymouth Industrial REIT Inc. 7.50% Series A Cumulative Redeemable Preferred Stock","PM":"Philip Morris International Inc","PMBC":"Pacific Mercantile Bancorp","PMD":"Psychemedics Corporation","PME":"Pingtan Marine Enterprise Ltd.","PMF":"PIMCO Municipal Income Fund","PML":"Pimco Municipal Income Fund II of Beneficial Interest","PMM":"Putnam Managed Municipal Income Trust","PMO":"Putnam Municipal Opportunities Trust","PMOM":"Principal Sustainable Momentum Index ETF","PMR":"Invesco Dynamic Retail","PMT":"PennyMac Mortgage Investment Trust of Beneficial Interest","PMT-A":"PennyMac Mortgage Investment Trust 8.125% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Shares of Beneficial Interest","PMT-B":"PennyMac Mortgage Investment Trust 8.00% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Shares of Beneficial Interest","PMTS":"CPI Card Group Inc.","PMX":"PIMCO Municipal Income Fund III of Beneficial Interest","PNBK":"Patriot National Bancorp Inc.","PNC":"PNC Financial Services Group Inc. (The)","PNC-P":"PNC Financial Services Group Inc. (The) Depositary Shares Series P","PNC-Q":"PNC Financial Services Group Inc. (The) Depositary Shares Series Q","PNF":"PIMCO New York Municipal Income Fund","PNFP":"Pinnacle Financial Partners Inc.","PNI":"Pimco New York Municipal Income Fund II of Beneficial Interest","PNM":"PNM Resources Inc. (Holding Co.)","PNNT":"PennantPark Investment Corporation","PNQI":"Invesco Nasdaq Internet ETF","PNR":"Pentair plc.","PNRG":"PrimeEnergy Resources Corporation","PNRL":"Paringa Resources Limited","PNTR":"Pointer Telocation Ltd.","PNW":"Pinnacle West Capital Corporation","POAI":"Predictive Oncology Inc.","POCT":"Innovator S&P 500 Power Buffer ETF - October","PODD":"Insulet Corporation","POL":"PolyOne Corporation","POLA":"Polar Power Inc.","POOL":"Pool Corporation","POPE":"Pope Resources","POR":"Portland General Electric Co","POST":"Post Holdings Inc.","POWI":"Power Integrations Inc.","POWL":"Powell Industries Inc.","PPA":"Invesco Aerospace & Defense","PPBI":"Pacific Premier Bancorp Inc","PPC":"Pilgrim's Pride Corporation","PPDF":"PPDAI Group Inc. American Depositary Shares each representing five Class A","PPDM":"PortfolioPlus Developed Markets","PPEM":"PortfolioPlus Emerging Markets","PPG":"PPG Industries Inc.","PPH":"VanEck Vectors Pharmaceutical ETF","PPHI":"Positive Physicians Holdings Inc.","PPIH":"Perma-Pipe International Holdings Inc.","PPL":"PPL Corporation","PPLC":"PortfolioPlus S&P 500","PPLN":"Cushing 30 MLP Index ETNs due June 15 2037","PPLT":"Aberdeen Standard Physical Platinum Shares","PPMC":"PortfolioPlus S&P Mid Cap","PPR":"Voya Prime Rate Trust Shares of Beneficial Interest","PPSC":"PortfolioPlus S&P Small Cap","PPSI":"Pioneer Power Solutions Inc.","PPT":"Putnam Premier Income Trust","PPTY":"PPTY U.S. Diversified Real Estate","PPX":"PPL Capital Funding Inc. 2013 Series B Junior Subordinated Notes due 2073","PQG":"PQ Group Holdings Inc.","PQIN":"PGIM QMA Strategic Alpha International Equity","PQLC":"PGIM QMA Strategic Alpha Large-Cap Core","PQSG":"PGIM QMA Strategic Alpha Small-Cap Growth","PQSV":"PGIM ETF Trust ETF QMA Strategic Alpha Small-Cap Value","PRA":"ProAssurance Corporation","PRAA":"PRA Group Inc.","PRAH":"PRA Health Sciences Inc.","PRCP":"Perceptron Inc.","PRE-F":"PartnerRe Ltd. Redeemable Preferred Shares Series F (Bermuda)","PRE-G":"PartnerRe Ltd. 6.50% Series G Cumulative Redeemable Preferred Shares $1.00 par value","PRE-H":"PartnerRe Ltd. 7.25% Series H Cumulative Redeemable Preferred Shares $1.00 par value","PRE-I":"PartnerRe Ltd. 5.875% Series I Non-Cumulative Redeemable Preferred Shares $1.00 par value","PREF":"Principal Spectrum Preferred Securities Active","PRF":"Invesco FTSE RAFI US 1000","PRFT":"Perficient Inc.","PRFZ":"Invesco FTSE RAFI US 1500 Small-Mid ETF","PRGO":"Perrigo Company plc","PRGS":"Progress Software Corporation","PRGX":"PRGX Global Inc.","PRH":"Prudential Financial Inc. 5.70% Junior Subordinated Notes due 2053","PRI":"Primerica Inc.","PRID":"InsightShares LGBT Employment Equality","PRIF-A":"Priority Income Fund Inc. 6.375% Series A Term Preferred Stock due 2025","PRIF-B":"Priority Income Fund Inc. 6.25% Series B Term Preferred Stock due 2023 par value $0.01 per share","PRIF-C":"Priority Income Fund Inc. 6.625% Series C Term Preferred Stock due 2024 par value $0.01 per share","PRIF-D":"Priority Income Fund Inc. 7.00% Series D Term Preferred Stock due 2029","PRIM":"Primoris Services Corporation","PRK":"Park National Corporation","PRLB":"Proto Labs Inc.","PRME":"First Trust Heitman Global Prime Real Estate","PRMW":"Primo Water Corporation","PRN":"Invesco DWA Industrials Momentum ETF","PRNB":"Principia Biopharma Inc.","PRNT":"3D Printing (The)","PRO":"PROS Holdings Inc.","PROV":"Provident Financial Holdings Inc.","PRPH":"ProPhase Labs Inc.","PRPL":"Purple Innovation Inc.","PRPO":"Precipio Inc.","PRQR":"ProQR Therapeutics N.V.","PRS":"Prudential Financial Inc. 5.625% Junior Subordinated Notes due 2058","PRSC":"The Providence Service Corporation","PRSP":"Perspecta Inc.","PRT":"PermRock Royalty Trust Trust Units","PRTA":"Prothena Corporation plc","PRTH":"Priority Technology Holdings Inc.","PRTK":"Paratek Pharmaceuticals Inc.","PRTO":"Proteon Therapeutics Inc.","PRTS":"U.S. Auto Parts Network Inc.","PRTY":"Party City Holdco Inc.","PRU":"Prudential Financial Inc.","PRVB":"Provention Bio Inc.","PRVL":"Prevail Therapeutics Inc.","PS":"Pluralsight Inc.","PSA":"Public Storage","PSA-A":"Public Storage Depositary Shares Series A","PSA-B":"Public Storage Depositary Shares each representing 1/1000 of a 5.40% Cumulative Preferred Share of Beneficial Interest","PSA-C":"Public Storage Depositary Shares Series C","PSA-D":"Public Storage Depositary Shares Series D","PSA-E":"Public Storage Depositary Shares Series E","PSA-F":"Public Storage Depositary Shares Series F","PSA-G":"Public Storage Depositary Shares Series G","PSA-H":"Public Storage Depositary Shares Series H","PSA-U":"Public Storage Depositary Shares Series U","PSA-V":"Public Storage Dep Shs Repstg 1/1000th Pfd Sh Ben Int Ser V","PSA-W":"Public Storage Depositary Shares Series W","PSA-X":"Public Storage Depositary Shares Series X","PSB":"PS Business Parks Inc.","PSB-U":"PS Business Parks Inc. Dep Shs Repstg 1/1000 Pfd Ser U","PSB-V":"PS Business Parks Inc. Depositary Shares Series V","PSB-W":"PS Business Parks Inc. Depositary Shares Series W","PSB-X":"PS Business Parks Inc. Depositary Shares Series X","PSB-Y":"PS Business Parks Inc. 5.20% Cumulative Preferred Stock Series Y","PSC":"Principal U.S. Small-Cap Multi-Factor Index ETF","PSCC":"Invesco S&P SmallCap Consumer Staples ETF","PSCD":"Invesco S&P SmallCap Consumer Discretionary ETF","PSCE":"Invesco S&P SmallCap Energy ETF","PSCF":"Invesco S&P SmallCap Financials ETF","PSCH":"Invesco S&P SmallCap Health Care ETF","PSCI":"Invesco S&P SmallCap Industrials ETF","PSCM":"Invesco S&P SmallCap Materials ETF","PSCT":"Invesco S&P SmallCap Information Technology ETF","PSCU":"Invesco S&P SmallCap Utilities & Communication Services ETF","PSDO":"Presidio Inc.","PSEC":"Prospect Capital Corporation","PSET":"Principal Price Setters Index ETF","PSF":"Cohen & Steers Select Preferred and Income Fund Inc.","PSI":"Invesco Dynamic Semiconductors","PSJ":"Invesco Dynamic Software","PSK":"SPDR Wells Fargo Preferred Stock","PSL":"Invesco DWA Consumer Staples Momentum ETF","PSLV":"Sprott Physical Silver Trust ETV","PSMB":"Invesco Balanced Multi-Asset Allocation","PSMC":"Invesco Conservative Multi-Asset Allocation","PSMG":"Invesco Growth Multi-Asset Allocation","PSMM":"Invesco Moderately Conservative Multi-Asset Allocation","PSMT":"PriceSmart Inc.","PSN":"Parsons Corporation","PSNL":"Personalis Inc.","PSO":"Pearson Plc","PSP":"Invesco Global Listed Private Equity","PSQ":"ProShares Short QQQ","PSR":"Invesco Active U.S. Real Estate Fund","PST":"ProShares UltraShort Lehman 7-10 Year Treasury","PSTG":"Pure Storage Inc. Class A","PSTI":"Pluristem Therapeutics Inc.","PSTL":"Postal Realty Trust Inc. Class A","PSV":"Hermitage Offshore Services Ltd. (Bermuda)","PSX":"Phillips 66","PSXP":"Phillips 66 Partners LP representing limited partner interest in the Partnership","PT":"Pintec Technology Holdings Limited","PTC":"PTC Inc.","PTCT":"PTC Therapeutics Inc.","PTE":"PolarityTE Inc.","PTEN":"Patterson-UTI Energy Inc.","PTEU":"Pacer TrendpilotTM European Index","PTF":"Invesco DWA Technology Momentum ETF","PTGX":"Protagonist Therapeutics Inc.","PTH":"Invesco DWA Healthcare Momentum ETF","PTI":"Proteostasis Therapeutics Inc.","PTIN":"Pacer Trendpilot International","PTLA":"Portola Pharmaceuticals Inc.","PTLC":"Pacer Fund Trust Trendpilot US Large Cap","PTMC":"Pacer Trendpilot US Mid Cap","PTMN":"Portman Ridge Finance Corporation","PTN":"Palatin Technologies Inc.","PTNQ":"Pacer Trendpilot 100","PTNR":"Partner Communications Company Ltd.","PTR":"PetroChina Company Limited","PTSI":"P.A.M. Transportation Services Inc.","PTVCA":"Protective Insurance Corporation Class A (voting) Common Stock","PTVCB":"Protective Insurance Corporation Class B (nonvoting) Common Stock","PTY":"Pimco Corporate & Income Opportunity Fund","PUB":"People's Utah Bancorp","PUI":"Invesco DWA Utilities Momentum ETF","PUK":"Prudential Public Limited Company","PUK-":"","PUK-A":"Prudential Public Limited Company 6.50% Perpetual Subordinated Capital Securities Exchangeable at the Issuer's Option Into Non-Cumulative Dollar Denominated Pre","PULM":"Pulmatrix Inc.","PULS":"PGIM Ultra Short Bond","PUMP":"ProPetro Holding Corp.","PUTW":"WisdomTree CBOE S&P 500 PutWrite Strategy Fund","PUYI":"Puyi Inc.","PVAC":"Penn Virginia Corporation","PVAL":"Principal Contrarian Value Index ETF","PVBC":"Provident Bancorp Inc.","PVG":"Pretium Resources Inc. (Canada)","PVH":"PVH Corp.","PVI":"Invesco VRDO Tax Free Weekly","PVL":"Permianville Royalty Trust Trust Units","PVT":"Pivotal Acquisition Corp. Class A","PVT+":"Pivotal Acquisition Corp. Redeemable Warrants exercisable for shares of Class A Common Stock at an exercise price of $11.50 per share","PVT=":"Pivotal Acquisition Corp. Units each consisting of one share of Class A Common Stock and one redeemable Warrant","PVTL":"Pivotal Software Inc. Class A","PW":"Power REIT (MD)","PW-A":"Power REIT 7.75% Series A Cumulative Perpetual Preferred Stock","PWB":"Invesco Dynamic Large Cap Growth","PWC":"Invesco Dynamic Market","PWOD":"Penns Woods Bancorp Inc.","PWR":"Quanta Services Inc.","PWS":"Pacer WealthShield","PWV":"Invesco Dynamic Large Cap Value","PWZ":"Invesco California AMT-Free Municipal Bond Portfolio","PXD":"Pioneer Natural Resources Company","PXE":"Invesco Dynamic Energy Exploration &Production","PXF":"Invesco FTSE RAFI Developed Markets ex-U.S.","PXH":"Invesco FTSE RAFI Emerging Markets","PXI":"Invesco DWA Energy Momentum ETF","PXJ":"Invesco Dynamic Oil & Gas Services","PXLW":"Pixelworks Inc.","PXQ":"Invesco Dynamic Networking","PXS":"Pyxis Tankers Inc.","PY":"Principal Shareholder Yield Index ETF","PYN":"PIMCO New York Municipal Income Fund III of Beneficial Interest","PYPE":"ETRACS NYSE Pickens Core Midstream Index ETN due August 20 2048","PYPL":"PayPal Holdings Inc.","PYS":"Merrill Lynch Depositor Inc PPlus Tr Ser RRD-1 Tr Ctf Cl A","PYT":"PPlus Tr GSC-2 Tr Ctf Fltg Rate","PYX":"Pyxus International Inc.","PYZ":"Invesco DWA Basic Materials Momentum ETF","PZA":"Invesco National AMT-Free Municipal Bond ETFo","PZC":"PIMCO California Municipal Income Fund III of Beneficial Interest","PZD":"Invesco Cleantech","PZG":"Paramount Gold Nevada Corp.","PZN":"Pzena Investment Management Inc Class A","PZT":"Invesco New York AMT-Free Municipal Bond","PZZA":"Papa John's International Inc.","QABA":"First Trust NASDAQ ABA Community Bank Index Fund","QADA":"QAD Inc.","QADB":"QAD Inc.","QAI":"IQ Hedge MultiIQ Hedge Multi-Strategy Tracker","QARP":"Xtrackers Russell 1000 US Quality at a Reasonable Price ETF","QAT":"iShares MSCI Qatar Capped ETF","QBAK":"Qualstar Corporation","QCLN":"First Trust NASDAQ Clean Edge Green Energy Idx Fd","QCOM":"QUALCOMM Incorporated","QCRH":"QCR Holdings Inc.","QD":"Qudian Inc. American Depositary Shares each representing one Class A","QDEF":"FlexShares Quality Dividend Defensive Index Fund","QDEL":"Quidel Corporation","QDF":"FlexShares Quality Dividend Index Fund","QDIV":"Global X S&P 500 Quality Dividend","QDYN":"FlexShares Quality Dynamic Index Fund","QED":"IQ Hedge Event-Driven Tracker","QEFA":"SPDR MSCI EAFE StrategicFactors","QEMM":"SPDR MSCI Emerging Markets StrategicFactors","QEP":"QEP Resources Inc.","QES":"Quintana Energy Services Inc.","QFIN":"360 Finance Inc.","QGEN":"Qiagen N.V.","QGRO":"American Century STOXX U.S. Quality Growth","QGTA":"IQ Leaders GTAA Tracker","QHC":"Quorum Health Corporation","QID":"ProShares UltraShort QQQ","QINT":"American Century Quality Diversified International","QIWI":"QIWI plc","QLC":"FlexShares US Quality Large Cap Index Fund","QLD":"ProShares Ultra QQQ","QLS":"IQ Hedge Long Short Tracker","QLTA":"iShares Aaa A Rated Corporate Bond","QLYS":"Qualys Inc.","QMN":"IQ Hedge Market Neutral Tracker","QMOM":"Alpha Architect U.S. Quantitative Momentum","QNST":"QuinStreet Inc.","QQEW":"First Trust NASDAQ-100 Equal Weighted Index Fund","QQQ":"Invesco QQQ Trust Series 1","QQQE":"Direxion NASDAQ-100 Equal Weighted Index Shares","QQQX":"Nuveen NASDAQ 100 Dynamic Overwrite Fund","QQXT":"First Trust NASDAQ-100 Ex-Tech Sector Index Fd","QRFT":"QRAFT AI-Enhanced U.S. Large Cap","QRHC":"Quest Resource Holding Corporation","QRTEA":"Qurate Retail Inc. Series A Common Stock","QRTEB":"Qurate Retail Inc. Series B Common Stock","QRVO":"Qorvo Inc.","QSR":"Restaurant Brands International Inc.","QSY":"WisdomTree U.S. Quality Shareholder Yield Fund","QTEC":"First Trust NASDAQ-100 Technology Sector Index Fd","QTNT":"Quotient Limited","QTRH":"Quarterhill Inc.","QTRX":"Quanterix Corporation","QTS":"QTS Realty Trust Inc. Class A","QTS-A":"QTS Realty Trust Inc. 7.125% Series A Cumulative Redeemable Perpetual Preferred Stock","QTS-B":"QTS Realty Trust Inc. 6.50% Series B Cumulative Convertible Perpetual Preferred Stock","QTT":"Qutoutiao Inc.","QTUM":"Defiance Quantum","QTWO":"Q2 Holdings Inc.","QUAD":"Quad Graphics Inc Class A","QUAL":"iShares Edge MSCI USA Quality Factor","QUIK":"QuickLogic Corporation","QUMU":"Qumu Corporation","QUOT":"Quotient Technology Inc.","QURE":"uniQure N.V.","QUS":"SPDR MSCI USA StrategicFactors","QVAL":"Alpha Architect U.S. Quantitative Value","QVCD":"","QVM":"Arrow QVM Equity Factor","QWLD":"SPDR MSCI World StrategicFactors","QYLD":"Recon Capital NASDAQ-100 Covered Call ETF","R":"Ryder System Inc.","RA":"Brookfield Real Assets Income Fund Inc.","RAAX":"VanEck Vectors Real Asset Allocation","RACE":"Ferrari N.V.","RAD":"Rite Aid Corporation","RADA":"RADA Electronic Industries Ltd.","RAIL":"Freightcar America Inc.","RALS":"ProShares RAFI Long Short","RAMP":"LiveRamp Holdings Inc.","RAND":"Rand Capital Corporation","RARE":"Ultragenyx Pharmaceutical Inc.","RARX":"Ra Pharmaceuticals Inc.","RAVE":"Rave Restaurant Group Inc.","RAVI":"FlexShares Ready Access Variable Income Fund","RAVN":"Raven Industries Inc.","RBA":"Ritchie Bros. Auctioneers Incorporated","RBB":"RBB Bancorp","RBBN":"Ribbon Communications Inc.","RBC":"Regal Beloit Corporation","RBCAA":"Republic Bancorp Inc. Class A Common Stock","RBCN":"Rubicon Technology Inc.","RBIN":"Nationwide Risk-Based International Equity","RBKB":"Rhinebeck Bancorp Inc.","RBNC":"Reliant Bancorp Inc.","RBS":"Royal Bank of Scotland Group Plc New (The) ADS","RBUS":"Nationwide Risk-Based U.S. Equity","RBZ":"Reebonz Holding Limited","RC":"Ready Capital Corproation","RCA":"","RCD":"Invesco S&P 500 Equal Weight Consumer Discretionary","RCG":"RENN Fund Inc","RCI":"Rogers Communication Inc.","RCII":"Rent-A-Center Inc.","RCKT":"Rocket Pharmaceuticals Inc.","RCKY":"Rocky Brands Inc.","RCL":"Royal Caribbean Cruises Ltd.","RCM":"R1 RCM Inc.","RCMT":"RCM Technologies Inc.","RCON":"Recon Technology Ltd.","RCP":"","RCS":"PIMCO Strategic Income Fund Inc.","RCUS":"Arcus Biosciences Inc.","RDCM":"Radcom Ltd.","RDFN":"Redfin Corporation","RDHL":"Redhill Biopharma Ltd.","RDI":"Reading International Inc","RDIB":"Reading International Inc","RDIV":"Invesco Exchange-Traded Fund Trust II S&P Ultra Dividend Revenue","RDN":"Radian Group Inc.","RDNT":"RadNet Inc.","RDS.A":"Royal Dutch Shell PLC American Depositary Shares (Each representing two Class A)","RDS.B":"Royal Dutch Shell PLC American Depositary Shares (Each representing two Class B)","RDUS":"Radius Health Inc.","RDVT":"Red Violet Inc.","RDVY":"First Trust NASDAQ Rising Dividend Achievers ETF","RDWR":"Radware Ltd.","RDY":"Dr. Reddy's Laboratories Ltd","RE":"Everest Re Group Ltd.","REAL":"The RealReal Inc.","RECN":"Resources Connection Inc.","REDU":"RISE Education Cayman Ltd","REDV":"Invesco Exchange-Traded Fund Trust II Emerging Markets Ultra Dividend Revenue","REED":"Reeds Inc.","REEM":"Invesco Exchange-Traded Fund Trust II Emerging Markets Revenue","REET":"iShares Trust Global REIT","REFA":"Invesco Exchange-Traded Fund Trust II International Revenue","REFR":"Research Frontiers Incorporated","REG":"Regency Centers Corporation","REGI":"Renewable Energy Group Inc.","REGL":"ProShares S&P MidCap 400 Dividend Aristocrats","REGN":"Regeneron Pharmaceuticals Inc.","REI":"Ring Energy Inc.","REK":"ProShares Short Real Estate","REKR":"Rekor Systems Inc.","RELL":"Richardson Electronics Ltd.","RELV":"Reliv' International Inc.","RELX":"RELX PLC PLC American Depositary Shares (Each representing One)","REM":"iShares Trust Mortgage Real Estate","REML":"Credit Suisse AG X-Links Monthly Pay 2xLeveraged Mortgage REIT Exchange Traded Notes (ETNs) due July 11 2036","REMX":"VanEck Vectors Rare Earth Strategic Metals","RENN":"Renren Inc. American Depositary Shares each representing fifteen Class A","REPH":"Recro Pharma Inc.","REPL":"Replimune Group Inc.","RES":"RPC Inc.","RESI":"Front Yard Residential Corporation","RESN":"Resonant Inc.","RETA":"Reata Pharmaceuticals Inc.","RETL":"Direxion Daily Retail Bull 3X Shares","RETO":"ReTo Eco-Solutions Inc.","REV":"Revlon Inc.","REVG":"REV Group Inc.","REW":"ProShares UltraShort Technology","REX":"REX American Resources Corporation","REXN":"Rexahn Pharmaceuticals Inc.","REXR":"Rexford Industrial Realty Inc.","REXR-A":"Rexford Industrial Realty Inc. 5.875% Series A Cumulative Redeemable Preferred Stock","REXR-B":"Rexford Industrial Realty Inc. 5.875% Series B Cumulative Redeemable Preferred Stock","REZ":"iShares Trust Residential Real Estate","REZI":"Resideo Technologies Inc.","RF":"Regions Financial Corporation","RF-A":"Regions Financial Corporation Depositary Shares Series A","RF-B":"Regions Financial Corporation Depositary Shares Series B","RF-C":"Regions Financial Corporation Depositary Shares Series C","RFAP":"First Trust RiverFront Dynamic Asia Pacific ETF","RFCI":"RiverFront Dynamic Core Income","RFDA":"RiverFront Dynamic US Dividend Advantage","RFDI":"First Trust RiverFront Dynamic Developed International ETF","RFEM":"First Trust RiverFront Dynamic Emerging Markets ETF","RFEU":"First Trust RiverFront Dynamic Europe ETF","RFFC":"RiverFront Dynamic US Flex-Cap","RFG":"Invesco S&P Midcap 400 Pure Growth","RFI":"Cohen & Steers Total Return Realty Fund Inc.","RFIL":"RF Industries Ltd.","RFL":"Rafael Holdings Inc. Class B","RFP":"Resolute Forest Products Inc.","RFUN":"RiverFront Dynamic Unconstrained Income","RFV":"Invesco S&P Midcap 400 Pure Value","RGA":"Reinsurance Group of America Incorporated","RGCO":"RGC Resources Inc.","RGEN":"Repligen Corporation","RGI":"Invesco S&P 500 Equal Weight Industrials Portfolio","RGLB":"Invesco Exchange-Traded Fund Trust II Global Revenue","RGLD":"Royal Gold Inc.","RGLS":"Regulus Therapeutics Inc.","RGNX":"REGENXBIO Inc.","RGR":"Sturm Ruger & Company Inc.","RGS":"Regis Corporation","RGT":"Royce Global Value Trust Inc.","RH":"RH","RHE":"Regional Health Properties Inc.","RHE-A":"Regional Health Properties Inc. 10.875% Series A Cumulative Redeemable Preferred Stock","RHI":"Robert Half International Inc.","RHP":"Ryman Hospitality Properties Inc. (REIT)","RHS":"Invesco S&P 500 Equal Weight Consumer Staples","RIBT":"RiceBran Technologies","RICK":"RCI Hospitality Holdings Inc.","RIDV":"Invesco Exchange-Traded Fund Trust II International Ultra Dividend Revenue","RIF":"RMR Real Estate Income Fund (MD)","RIG":"Transocean Ltd (Switzerland)","RIGL":"Rigel Pharmaceuticals Inc.","RIGS":"RiverFront Strategic Income Fund","RILY":"B. Riley Financial Inc.","RILYG":"B. Riley Financial Inc. 7.25% Senior Notes due 2027","RILYH":"","RILYI":"","RILYL":"B. Riley Financial Inc. 7.50% Senior Notes","RILYO":"B. Riley Financial Inc. 6.75% Senior Notes due 2024","RILYZ":"B. Riley Financial Inc. 7.50% Senior Notes Due 2027","RINF":"ProShares Inflation Expectations","RING":"iShares MSCI Global Gold Miners ETF","RIO":"Rio Tinto Plc","RIOT":"Riot Blockchain Inc","RISE":"Sit Rising Rate","RIV":"RiverNorth Opportunities Fund Inc.","RIVE":"Riverview Financial Corporation","RJA":"AB Svensk Ekportkredit (Swedish Export Credit Corporation) ELEMENTS Linked to the Rogers International Commodity Index - Agriculture Total Return Structured Pro","RJF":"Raymond James Financial Inc.","RJI":"AB Svensk Ekportkredit (Swedish Export Credit Corporation) ELEMENTS Linked to the Rogers International Commodity Index - Total Return Structured Product","RJN":"AB Svensk Ekportkredit (Swedish Export Credit Corporation) ELEMENTS Linked to the Rogers International Commodity Index - Energy Total Return Structured Product","RJZ":"AB Svensk Ekportkredit (Swedish Export Credit Corporation) ELEMENTS Linked to the Rogers International Commodity Index - Metals Total Return Structured Product","RKDA":"Arcadia Biosciences Inc.","RL":"Ralph Lauren Corporation","RLGT":"Radiant Logistics Inc.","RLGY":"Realogy Holdings Corp.","RLH":"Red Lions Hotels Corporation","RLI":"RLI Corp. (DE)","RLJ":"RLJ Lodging Trust of Beneficial Interest $0.01 par value","RLJ-A":"RLJ Lodging Trust $1.95 Series A Cumulative Convertible Preferred Shares","RLM":"Realm Therapeutics plc","RLY":"SPDR SSgA Multi Asset Real Return","RM":"Regional Management Corp.","RMAX":"RE/MAX Holdings Inc. Class A","RMBI":"Richmond Mutual Bancorporation Inc.","RMBL":"RumbleOn Inc.","RMBS":"Rambus Inc.","RMCF":"Rocky Mountain Chocolate Factory Inc.","RMD":"ResMed Inc.","RMED":"Ra Medical Systems Inc.","RMG":"RMG Acquisition Corp. Class A","RMG+":"","RMG=":"RMG Acquisition Corp. Unit","RMI":"RiverNorth Opportunistic Municipal Income Fund Inc.","RMNI":"Rimini Street Inc.","RMPL-":"","RMR":"The RMR Group Inc.","RMT":"Royce Micro-Cap Trust Inc.","RMTI":"Rockwell Medical Inc.","RNDB":"Randolph Bancorp Inc.","RNDM":"First Trust Developed International Equity Select ETF","RNDV":"First Trust US Equity Dividend Select ETF","RNEM":"First Trust Emerging Markets Equity Select ETF","RNET":"RigNet Inc.","RNG":"Ringcentral Inc. Class A","RNGR":"Ranger Energy Services Inc. Class A","RNLC":"First Trust Large Cap US Equity Select ETF","RNMC":"First Trust Mid Cap US Equity Select ETF","RNP":"Cohen & Steers REIT and Preferred and Income Fund Inc.","RNR":"RenaissanceRe Holdings Ltd.","RNR-C":"RenaissanceRe Holdings Ltd. 6.08% Series C Preference Shares","RNR-E":"RenaissanceRe Holdings Ltd. 5.375% Series E Preference Shares","RNR-F":"RenaissanceRe Holdings Ltd. Depositary Shares Series F","RNSC":"First Trust Small Cap US Equity Select ETF","RNST":"Renasant Corporation","RNWK":"RealNetworks Inc.","ROAD":"Construction Partners Inc.","ROAM":"Hartford Multifactor Emerging Markets","ROAN":"Roan Resources Inc. Class A","ROBO":"Exchange Traded Concepts Trust ROBO Global Robotics and Automation Index","ROBT":"First Trust Nasdaq Artificial Intelligence and Rob","ROCK":"Gibraltar Industries Inc.","RODI":"Barclays Return on Disability ETN","RODM":"Hartford Multifactor Developed Markets (ex-US)","ROG":"Rogers Corporation","ROGS":"Hartford Multifactor Global Small Cap","ROIC":"Retail Opportunity Investments Corp.","ROK":"Rockwell Automation Inc.","ROKT":"SPDR S&P Kensho Final Frontiers","ROKU":"Roku Inc.","ROL":"Rollins Inc.","ROLL":"RBC Bearings Incorporated","ROM":"ProShares Ultra Technology","ROOF":"IQ US Real Estate Small Cap","ROP":"Roper Technologies Inc.","RORE":"Hartford Multifactor REIT","ROSE":"Rosehill Resources Inc.","ROSEU":"Rosehill Resources Inc. Unit","ROSEW":"","ROST":"Ross Stores Inc.","ROUS":"Hartford Multifactor U.S. Equity","ROX":"Castle Brands Inc.","ROYT":"Pacific Coast Oil Trust Units of Beneficial Interest","RP":"RealPage Inc.","RPAI":"Retail Properties of America Inc. Class A","RPAY":"THUNDER BRIDGE ACQ-CLASS A","RPAYW":"","RPD":"Rapid7 Inc.","RPG":"Invesco S&P 500 Pure Growth","RPLA":"Replay Acquisition Corp.","RPLA+":"Replay Acquisition Corp. Warrants each whole warrant exercisable for one Ordinary Share at an exercise price of $11.50","RPLA=":"Replay Acquisition Corp. Units each consisting of one Ordinary Share and one-half of one Warrant","RPM":"RPM International Inc.","RPT":"RPT Realty","RPT-D":"RPT Realty 7.25%","RPUT":"WisdomTree CBOE Russell 2000 PutWrite Strategy Fund","RPV":"Invesco S&P 500 Pure Value","RQI":"Cohen & Steers Quality Income Realty Fund Inc","RRBI":"Red River Bancshares Inc.","RRC":"Range Resources Corporation","RRD":"R.R. Donnelley & Sons Company","RRGB":"Red Robin Gourmet Burgers Inc.","RRR":"Red Rock Resorts Inc.","RRTS":"Roadrunner Transportation Systems Inc.","RS":"Reliance Steel & Aluminum Co. (DE)","RSF":"RiverNorth Marketplace Lending Corporation","RSG":"Republic Services Inc.","RSP":"Invesco S&P 500 Equal Weight","RST":"Rosetta Stone Inc.","RSX":"VanEck Vectors Russia","RSXJ":"VanEck Vectors Russia Small-Cap","RTEC":"Rudolph Technologies Inc.","RTH":"VanEck Vectors Retail","RTIX":"RTI Surgical Holdings Inc.","RTL":"Pacer Benchmark Retail Real Estate SCTR","RTLR":"Rattler Midstream LP","RTM":"Invesco S&P 500 Equal Weight Materials","RTN":"Raytheon Company","RTRX":"Retrophin Inc.","RTTR":"Ritter Pharmaceuticals Inc.","RTW":"RTW Retailwinds Inc.","RUBI":"The Rubicon Project Inc.","RUBY":"Rubius Therapeutics Inc.","RUHN":"Ruhnn Holding Limited","RUN":"Sunrun Inc.","RUSHA":"Rush Enterprises Inc. Class A Common Stock","RUSHB":"Rush Enterprises Inc. Class B Common Stock","RUSL":"Direxion Daily Russia Bull 3x Shares","RUSS":"Direxion Daily Russia Bear 3x Shares","RUTH":"Ruth's Hospitality Group Inc.","RVEN":"Reven Housing REIT Inc.","RVI":"Retail Value Inc.","RVLT":"Revolution Lighting Technologies Inc.","RVLV":"Revolve Group Inc. Class A","RVNC":"Revance Therapeutics Inc.","RVNU":"Xtrackers Municipal Infrastructure Revenue Bond","RVP":"Retractable Technologies Inc.","RVRS":"Reverse Cap Weighted US Large Cap","RVSB":"Riverview Bancorp Inc","RVT":"Royce Value Trust Inc.","RWCD":"Direxion MSCI Cyclicals Over Defensives","RWDC":"Direxion MSCI Defensives Over Cyclicals","RWDE":"Direxion MSCI Developed Over Emerging Markets","RWED":"Direxion MSCI Emerging Over Developed Markets","RWGE":"Regalwood Global Energy Ltd. Class A","RWGE+":"","RWGE=":"Regalwood Global Energy Ltd. Units","RWGV":"Direxion Russell 1000 Growth Over Value","RWIU":"Direxion FTSE Russell International Over US","RWJ":"Invesco Exchange-Traded Fund Trust II S&P SmallCap 600 Revenue","RWK":"Invesco Exchange-Traded Fund Trust II S&P MidCap 400 Revenue","RWL":"Invesco Exchange-Traded Fund Trust II S&P 500 Revenue","RWLK":"ReWalk Robotics Ltd.","RWLS":"Direxion Russell Large Over Small Cap","RWM":"ProShares Short Russell2000","RWO":"SPDR DJ Wilshire Global Real Estate","RWR":"SPDR DJ Wilshire REIT","RWSL":"Direxion Russell Small Over Large Cap","RWT":"Redwood Trust Inc.","RWUI":"Direxion FTSE Russell US Over International","RWVG":"Direxion Russell 1000 Value Over Growth","RWW":"Invesco Exchange-Traded Fund Trust II S&P Financials Revenue","RWX":"SPDR DJ Wilshire Intl Real Estate","RXD":"ProShares UltraShort Health Care","RXI":"iShares Global Consumer Discretionary","RXL":"ProShares Ultra Health Care","RXN":"Rexnord Corporation","RXN-A":"Rexnord Corporation Depositary Shares Series A","RY":"Royal Bank Of Canada","RY-T":"Royal Bank Of Canada 6.750% Fixed Rate/Floating Rate Noncumulative First Preferred Shares Series C-2","RYAAY":"Ryanair Holdings plc American Depositary Shares each representing five Ordinary Shares","RYAM":"Rayonier Advanced Materials Inc.","RYAM-A":"Rayonier Advanced Materials Inc. 8.00% Series A Mandatory Convertible Preferred Stock","RYB":"RYB Education Inc. American depositary shares each representing one Class A","RYE":"Invesco S&P 500 Equal Weight Energy","RYF":"Invesco S&P 500 Equal Weight Financial","RYH":"Invesco S&P 500 Equal Weight Health Care","RYI":"Ryerson Holding Corporation","RYJ":"Invesco Raymond James SB-1 Equity","RYLD":"Global X Russell 2000 Covered Call","RYN":"Rayonier Inc. REIT","RYT":"Invesco S&P 500 Equal Weight Technology","RYTM":"Rhythm Pharmaceuticals Inc.","RYU":"Invesco S&P 500 Equal Weight Utilities","RYZZ":"RYZZ Managed Futures Strategy Plus","RZA":"Reinsurance Group of America Incorporated 6.20% Fixed-to-Floating Rate Subordinated Debentures due 2042","RZB":"Reinsurance Group of America Incorporated 5.75% Fixed-To-Floating Rate Subordinated Debentures due 2056","RZG":"Invesco S&P Smallcap 600 Pure Growth","RZV":"Invesco S&P Smallcap 600 Pure Value","S":"Sprint Corporation","SA":"Seabridge Gold Inc. (Canada)","SAA":"ProShares Ultra SmallCap600","SAB":"","SABR":"Sabre Corporation","SACH":"Sachem Capital Corp.","SAEX":"SAExploration Holdings Inc.","SAF":"","SAFE":"Safehold Inc.","SAFM":"Sanderson Farms Inc.","SAFT":"Safety Insurance Group Inc.","SAGE":"Sage Therapeutics Inc.","SAGG":"Direxion Daily Total Bond Market Bear 1X Shares","SAH":"Sonic Automotive Inc.","SAIA":"Saia Inc.","SAIC":"SCIENCE APPLICATIONS INTERNATIONAL CORPORATION","SAIL":"SailPoint Technologies Holdings Inc.","SAL":"Salisbury Bancorp Inc.","SALM":"Salem Media Group Inc.","SALT":"Scorpio Bulkers Inc.","SAM":"Boston Beer Company Inc. (The)","SAMA":"Schultze Special Purpose Acquisition Corp.","SAMAU":"Schultze Special Purpose Acquisition Corp. Unit","SAMAW":"Schultze Special Purpose Acquisition Corp. Warrant","SAMG":"Silvercrest Asset Management Group Inc.","SAN":"Banco Santander S.A. Sponsored ADR (Spain)","SAN-B":"Banco Santander S.A. Floating Rate Non-cumulative Series 6 Guaranteed Preferred Securities","SAND":"Sandstorm Gold Ltd. (Canada)","SANM":"Sanmina Corporation","SANW":"S&W Seed Company","SAP":"SAP SE ADS","SAR":"Saratoga Investment Corp New","SASR":"Sandy Spring Bancorp Inc.","SATS":"EchoStar Corporation","SAUC":"Diversified Restaurant Holdings Inc.","SAVA":"Cassava Sciences Inc.","SAVE":"Spirit Airlines Inc.","SB":"Safe Bulkers Inc ($0.001 par value)","SB-C":"Safe Bulkers Inc Cumulative Redeemable Perpetual Preferred Series C (Marshall Islands)","SB-D":"Safe Bulkers Inc Perpetual Preferred Series D (Marshall Islands)","SBAC":"SBA Communications Corporation","SBB":"ProShares Short SmallCap600","SBBP":"Strongbridge Biopharma plc","SBBX":"SB One Bancorp","SBCF":"Seacoast Banking Corporation of Florida","SBFG":"SB Financial Group Inc.","SBFGP":"SB Financial Group Inc. Depositary Shares each representing a 1/100th interest in a 6.50% Noncumulative convertible perpetual preferred share Series A","SBGI":"Sinclair Broadcast Group Inc.","SBGL":"D/B/A Sibanye-Stillwater Limited American Depositary Shares (Each representing four)","SBH":"Sally Beauty Holdings Inc. (Name to be changed from Holdings Inc.)","SBI":"Western Asset Intermediate Muni Fund Inc","SBIO":"ALPS Medical Breakthroughs","SBLK":"Star Bulk Carriers Corp.","SBLKZ":"Star Bulk Carriers Corp. 8.30% Senior Notes due 2022","SBM":"Short Basic Materials","SBNA":"Scorpio Tankers Inc. 6.75% Senior Notes due 2020","SBNY":"Signature Bank","SBOW":"SilverBow Resorces Inc.","SBPH":"Spring Bank Pharmaceuticals Inc.","SBR":"Sabine Royalty Trust","SBRA":"Sabra Health Care REIT Inc.","SBS":"Companhia de saneamento Basico Do Estado De Sao Paulo - Sabesp American Depositary Shares (Each repstg 250)","SBSI":"Southside Bancshares Inc.","SBT":"Sterling Bancorp Inc.","SBUX":"Starbucks Corporation","SC":"Santander Consumer USA Holdings Inc.","SCA":"Stellus Capital Investment Corporation 5.75% Notes due 2022","SCAP":"AdvisorShares Cornerstone Small Cap","SCC":"ProShares UltraShort Consumer Services","SCCB":"Sachem Capital Corp. 7.125% Notes due 2024","SCCO":"Southern Copper Corporation","SCD":"LMP Capital and Income Fund Inc.","SCE-B":"Southern California Edison Company 4.08% Preferred Stock","SCE-C":"Southern California Edison Company 4.24% Preferred Stock","SCE-D":"Southern California Edison Company 4.32% Preferred Stock","SCE-E":"Southern California Edison Company 4.78% Preferred Stock","SCE-G":"SCE Trust II Trust Preferred Securities","SCE-H":"SCE Trust III Fixed/Floating Rate Trust Preference Securities","SCE-J":"Southern California Edison Company 5.375% Fixed-to-Floating Rate Trust Preference Securities","SCE-K":"Southern California Edison Company 5.45% Fixed-to-Floating Rate Trust Preference Securities","SCE-L":"SCE TRUST VI","SCHA":"Schwab U.S. Small-Cap","SCHB":"Schwab U.S. Broad Market","SCHC":"Schwab International Small-Cap Equity","SCHD":"Schwab US Dividend Equity","SCHE":"Schwab Emerging Markets Equity","SCHF":"Schwab International Equity","SCHG":"Schwab U.S. Large-Cap Growth","SCHH":"Schwab U.S. REIT","SCHK":"Schwab 1000 Index","SCHL":"Scholastic Corporation","SCHM":"Schwab U.S. Mid Cap","SCHN":"Schnitzer Steel Industries Inc.","SCHO":"Schwab Short-Term U.S. Treasury","SCHP":"Schwab U.S. TIPs","SCHR":"Schwab Intermediate-Term U.S. Treasury","SCHV":"Schwab U.S. Large-Cap Value","SCHW":"Charles Schwab Corporation (The)","SCHW-C":"The Charles Schwab Corporation Depositary Shares Series C","SCHW-D":"The Charles Schwab Corporation Depositary Shares Series D","SCHX":"Schwab U.S. Large-Cap","SCHZ":"Schwab US Aggregate Bond","SCI":"Service Corporation International","SCID":"Global X Scientific Beta Europe","SCIF":"VanEck Vectors India Small-Cap Index","SCIJ":"Global X Scientific Beta Japan","SCIU":"Global X Scientific Beta US","SCIX":"Global X Scientific Beta Asia ex-Japan","SCJ":"iShares MSCI Japan Sm Cap","SCKT":"Socket Mobile Inc.","SCL":"Stepan Company","SCM":"Stellus Capital Investment Corporation","SCO":"ProShares UltraShort Bloomberg Crude Oil","SCOM":"ProShares UltraPro Short Communication Services Select Sector","SCON":"Superconductor Technologies Inc.","SCOR":"comScore Inc.","SCPE=":"","SCPH":"scPharmaceuticals Inc.","SCPL":"SciPlay Corporation","SCS":"Steelcase Inc.","SCSC":"ScanSource Inc.","SCVL":"Shoe Carnival Inc.","SCWX":"SecureWorks Corp.","SCX":"L.S. Starrett Company (The)","SCYX":"SCYNEXIS Inc.","SCZ":"iShares MSCI EAFE Small-Cap ETF","SD":"SandRidge Energy Inc.","SDAG":"IQ Short Duration Enhanced Core Bond U.S.","SDCI":"USCF SummerHaven Dynamic Commodity Strategy No K-1 Fund","SDD":"ProShares UltraShort SmallCap600","SDEM":"Global X MSCI SuperDividend Emerging Markets","SDG":"iShares MSCI Global Impact ETF","SDGA":"Impact Shares Sustainable Development Goals Global Equity","SDI":"Standard Diversified Inc. Class A","SDIV":"Global X SuperDividend","SDLP":"Seadrill Partners LLC Representing Limited Liability Company Interests","SDOG":"ALPS Sector Dividend Dogs","SDOW":"UltraPro Short Dow30","SDP":"ProShares UltraShort Utilities","SDPI":"Superior Drilling Products Inc.","SDR":"SandRidge Mississippian Trust II representing Beneficial Interests","SDRL":"Seadrill Limited","SDS":"ProShares UltraShort S&P500","SDT":"SandRidge Mississippian Trust I of Beneficial Interest","SDVY":"First Trust SMID Cap Rising Dividend Achievers ETF","SDY":"SPDR S&P Dividend","SDYL":"ETRACS Monthly Pay 2xLeveraged S&P Dividend ETN","SE":"Sea Limited American Depositary Shares each representing one Class A","SEA":"Invesco Shipping","SEAC":"SeaChange International Inc.","SEAS":"SeaWorld Entertainment Inc.","SEB":"Seaboard Corporation","SECO":"Secoo Holding Limited","SECT":"Northern Lights Fund Trust IV Main Sector Rotation","SEDG":"SolarEdge Technologies Inc.","SEE":"Sealed Air Corporation","SEED":"Origin Agritech Limited","SEEL":"Seelos Therapeutics Inc.","SEF":"ProShares Short Financials","SEIC":"SEI Investments Company","SEIX":"Virtus Seix Senior Loan","SELB":"Selecta Biosciences Inc.","SELF":"Global Self Storage Inc.","SEM":"Select Medical Holdings Corporation","SEMG":"Semgroup Corporation Class A","SENEA":"Seneca Foods Corp. Class A Common Stock","SENEB":"Seneca Foods Corp. Class B Common Stock","SENS":"Senseonics Holdings Inc.","SERV":"ServiceMaster Global Holdings Inc.","SES":"Synthesis Energy Systems Inc.","SESN":"Sesen Bio Inc.","SF":"Stifel Financial Corporation","SF-A":"Stifel Financial Corporation Depositary Shares Series A","SF-B":"Stifel Financial Corporation Depositary Shares Series B","SFB":"Stifel Financial Corporation 5.20% Senior Notes due 2047","SFBC":"Sound Financial Bancorp Inc.","SFBS":"ServisFirst Bancshares Inc.","SFE":"Safeguard Scientifics Inc.","SFET":"Safe-T Group Ltd.","SFHY":"WisdomTree Fundamental U.S. Short-Term High Yield Corporate Bond Fund","SFIG":"WisdomTree Fundamental U.S. Short-Term Corporate Bond Fund","SFIX":"Stitch Fix Inc.","SFL":"Ship Finance International Limited","SFLY":"Shutterfly Inc.","SFM":"Sprouts Farmers Market Inc.","SFNC":"Simmons First National Corporation","SFST":"Southern First Bancshares Inc.","SFUN":"Fang Holdings Limited American Depositary Shares (Each representing Four Class A HK$1.00 par value)","SFY":"SoFi Select 500","SFYF":"SoFi 50","SFYX":"SoFi Next 500","SG":"Sirius International Insurance Group Ltd.","SGA":"Saga Communications Inc.","SGB":"Southwest Georgia Financial Corporation","SGBX":"SG Blocks Inc.","SGC":"Superior Group of Companies Inc.","SGDJ":"ALPS ETF Trust Sprott Junior Gold Miners","SGDM":"Sprott Gold Miners","SGEN":"Seattle Genetics Inc.","SGG":"iPathA Series B Bloomberg Sugar Subindex Total Return ETN","SGH":"SMART Global Holdings Inc.","SGLB":"Sigma Labs Inc.","SGLBW":"Sigma Labs Inc. Warrant","SGMA":"SigmaTron International Inc.","SGMO":"Sangamo Therapeutics Inc.","SGMS":"Scientific Games Corp","SGOC":"SGOCO Group Ltd","SGOL":"Aberdeen Standard Physical Gold Shares","SGRP":"SPAR Group Inc.","SGRY":"Surgery Partners Inc.","SGU":"Star Group L.P.","SH":"ProShares Short S&P500","SHAG":"WisdomTree Yield Enhanced U.S. Short-Term Aggregate Bond Fund","SHAK":"Shake Shack Inc. Class A","SHBI":"Shore Bancshares Inc","SHE":"SPDR Series Trust SSGA Gender Diversity Index","SHEN":"Shenandoah Telecommunications Co","SHG":"Shinhan Financial Group Co Ltd American Depositary Shares","SHI":"SINOPEC Shangai Petrochemical Company Ltd.","SHIP":"Seanergy Maritime Holdings Corp","SHIPW":"Seanergy Maritime Holdings Corp Class A Warrants","SHIPZ":"Seanergy Maritime Holdings Corp Class B Warrant","SHLL":"Tortoise Acquisition Corp. Class A","SHLL+":"Tortoise Acquisition Corp. Warrants each whole warrant exercisable for one share of Class A common stock at an exercise price of $11.50 per share","SHLL=":"Tortoise Acquisition Corp. Units each consisting of one share of Class A Common Stock and one-half of one Warrant","SHLO":"Shiloh Industries Inc.","SHLX":"Shell Midstream Partners L.P. representing Limited Partner Interests","SHM":"SPDR Nuveen Bloomberg Barclays Short Term Municipal Bond","SHO":"Sunstone Hotel Investors Inc.","SHO-E":"Sunstone Hotel Investors Inc. 6.950% Series E Cumulative Redeemable Preferred Stock","SHO-F":"Sunstone Hotel Investors Inc. 6.450% Series F Cumulative Redeemable Preferred Stock","SHOO":"Steven Madden Ltd.","SHOP":"Shopify Inc. Class A Subordinate","SHOS":"Sears Hometown and Outlet Stores Inc.","SHSP":"SharpSpring Inc.","SHV":"iShares Short Treasury Bond ETF","SHW":"Sherwin-Williams Company (The)","SHY":"iShares 1-3 Year Treasury Bond ETF","SHYD":"VanEck Vectors Short High-Yield Municipal Index","SHYG":"iShares 0-5 Year High Yield Corporate Bond","SHYL":"Xtrackers Short Duration High Yield Bond","SIBN":"SI-BONE Inc.","SIC":"Select Interior Concepts Inc.","SID":"Companhia Siderurgica Nacional S.A.","SIEB":"Siebert Financial Corp.","SIEN":"Sientra Inc.","SIF":"SIFCO Industries Inc.","SIFY":"Sify Technologies Limited","SIG":"Signet Jewelers Limited","SIGA":"SIGA Technologies Inc.","SIGI":"Selective Insurance Group Inc.","SIJ":"ProShares UltraShort Industrials","SIL":"Global X Silver Miners","SILC":"Silicom Ltd","SILJ":"ETFMG Prime Junior Silver","SILK":"Silk Road Medical Inc.","SILV":"SilverCrest Metals Inc.","SIM":"Grupo Simec S.A.B. de C.V. American Depositary Shares","SIMO":"Silicon Motion Technology Corporation","SIMS":"SPDR S&P Kensho Intelligent Structures","SINA":"Sina Corporation","SINO":"Sino-Global Shipping America Ltd.","SINT":"SiNtx Technologies Inc.","SIRI":"Sirius XM Holdings Inc.","SITC":"SITE Centers Corp.","SITC-A":"SITE Centers Corp. 6.375% Class A Preferred Shares","SITC-J":"SITE Centers Corp. Dep Shs Repstg 1/20th Pfd Cl J","SITC-K":"SITE Centers Corp. DEPOSITARY SH REPSTG 1/20TH PDF CL K % (United States)","SITE":"SiteOne Landscape Supply Inc.","SITO":"SITO Mobile Ltd.","SIVB":"SVB Financial Group","SIVR":"Aberdeen Standard Physical Silver Shares","SIX":"Six Flags Entertainment Corporation","SIZ":"AGFiQ U.S. Market Neutral Size Fund","SIZE":"iShares Edge MSCI USA Size Factor","SJB":"ProShares Short High Yield","SJI":"South Jersey Industries Inc.","SJIU":"South Jersey Industries Inc. Corporate Units","SJM":"J.M. Smucker Company (The)","SJNK":"SPDR Bloomberg Barclays Short Term High Yield Bond","SJR":"Shaw Communications Inc.","SJT":"San Juan Basin Royalty Trust","SJW":"SJW Group (DE)","SKF":"ProShares UltraShort Financials","SKIS":"Peak Resorts Inc.","SKM":"SK Telecom Co. Ltd.","SKOR":"FlexShares Credit-Scored US Corporate Bond Index","SKT":"Tanger Factory Outlet Centers Inc.","SKX":"Skechers U.S.A. Inc.","SKY":"Skyline Champion Corporation","SKYS":"Sky Solar Holdings Ltd.","SKYW":"SkyWest Inc.","SKYY":"First Trust ISE Cloud Computing Index Fund","SLAB":"Silicon Laboratories Inc.","SLB":"Schlumberger N.V.","SLCA":"U.S. Silica Holdings Inc.","SLCT":"Select Bancorp Inc.","SLDB":"Solid Biosciences Inc.","SLF":"Sun Life Financial Inc.","SLG":"SL Green Realty Corp","SLG-I":"SL Green Realty Corporation Preferred Series I","SLGG":"Super League Gaming Inc.","SLGL":"Sol-Gel Technologies Ltd.","SLGN":"Silgan Holdings Inc.","SLIM":"The Obesity ETF","SLM":"SLM Corporation","SLMBP":"SLM Corporation Floating Rate Non-Cumulative Preferred Stock Series B","SLNO":"Soleno Therapeutics Inc.","SLNOW":"","SLP":"Simulations Plus Inc.","SLQD":"iShares 0-5 Year Investment Grade Corporate Bond E","SLRC":"Solar Capital Ltd.","SLS":"SELLAS Life Sciences Group Inc.","SLT":"Salt High truBeta US Market","SLTB*":"","SLV":"iShares Silver Trust","SLVO":"Credit Suisse Silver Shares Covered Call Exchange Traded Notes","SLVP":"iShares MSCI Global Silver Miners Fund","SLX":"VanEck Vectors Steel","SLY":"SPDR S&P 600 Small Cap ETF (based on S&P SmallCap 600 Index -- symbol SML)","SLYG":"SPDR S&P 600 Small Cap Growth ETF (based on S&P SmallCap 600 Growth Index --symbol CGK)","SLYV":"SPDR S&P 600 Small Cap Value ETF (based on S&P SmallCap Value Index--symbol--CVK","SM":"SM Energy Company","SMAR":"Smartsheet Inc. Class A","SMB":"VanEck Vectors AMT-Free Short Municipal Index","SMBC":"Southern Missouri Bancorp Inc.","SMBK":"SmartFinancial Inc.","SMCP":"AlphaMark Actively Managed Small Cap ETF","SMDD":"UltraPro Short MidCap400","SMDV":"ProShares Russell 2000 Dividend Growers","SMED":"Sharps Compliance Corp.","SMEZ":"SPDR EURO STOXX Small Cap","SMFG":"Sumitomo Mitsui Financial Group Inc Unsponsored American Depositary Shares (Japan)","SMG":"Scotts Miracle-Gro Company (The)","SMH":"VanEck Vectors Semiconductor","SMHB":"ETRACS Monthly Pay 2x Leveraged Small Cap High Dividend ETN Series B","SMHD":"ETRACS Monthly Pay 2xLeveraged US Small Cap High Dividend ETN due February 6 2045","SMHI":"SEACOR Marine Holdings Inc.","SMIN":"Ishares MSCI India Small Cap","SMIT":"Schmitt Industries Inc.","SMLF":"iShares Edge MSCI Multifactor USA Small-Cap","SMLL":"Direxion Daily Small Cap Bull 2X Shares","SMLP":"Summit Midstream Partners LP Representing Limited Partner Interests","SMLV":"SPDR SSGA US Small Cap Low Volatility Index","SMM":"Salient Midstream of Beneficial Interest","SMMCU":"South Mountain Merger Corp. Unit","SMMD":"iShares Trust Russell 2500","SMMF":"Summit Financial Group Inc.","SMMT":"Summit Therapeutics plc","SMMU":"Short Term Municipal Bond Active Exchange-Traded Fund","SMMV":"iShares Trust","SMN":"ProShares UltraShort Basic Materials","SMOG":"VanEck Vectors Low Carbon Energy","SMP":"Standard Motor Products Inc.","SMPL":"The Simply Good Foods Company","SMRT":"Stein Mart Inc.","SMSI":"Smith Micro Software Inc.","SMTA":"Spirit MTA REIT of Beneficial Interest","SMTC":"Semtech Corporation","SMTS":"Sierra Metals Inc.","SMTX":"SMTC Corporation","SNA":"Snap-On Incorporated","SNAP":"Snap Inc. Class A","SNBR":"Sleep Number Corporation","SNCR":"Synchronoss Technologies Inc.","SND":"Smart Sand Inc.","SNDE":"Sundance Energy Australia Limited","SNDR":"Schneider National Inc.","SNDX":"Syndax Pharmaceuticals Inc.","SNE":"Sony Corporation","SNES":"SenesTech Inc.","SNFCA":"Security National Financial Corporation Class A Common Stock","SNGX":"Soligenix Inc.","SNGXW":"Soligenix Inc. Warrant","SNH":"Senior Housing Properties Trust","SNHNI":"Senior Housing Properties Trust 5.625% Senior Notes due 2042","SNHNL":"Senior Housing Properties Trust 6.25% Senior Notes Due 2046","SNLN":"Highland/iBoxx Senior Loan ETF","SNMP":"Sanchez Midstream Partners LP","SNN":"Smith & Nephew SNATS Inc.","SNNA":"Sienna Biopharmaceuticals Inc.","SNOA":"Sonoma Pharmaceuticals Inc.","SNOAW":"","SNP":"China Petroleum & Chemical Corporation","SNPE":"Xtrackers S&P 500 ESG","SNPS":"Synopsys Inc.","SNR":"New Senior Investment Group Inc.","SNSR":"Global X Internet of Things ETF","SNSS":"Sunesis Pharmaceuticals Inc.","SNV":"Synovus Financial Corp.","SNV-D":"Synovus Financial Corp. Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D Liquation Preference $25.00 per Share","SNV-E":"Synovus Financial Corp. 5.875% Fixed-Rate Reset Non-Cumulative Perpetual Preferred Stock Series E","SNX":"Synnex Corporation","SNY":"Sanofi","SO":"Southern Company (The)","SOCL":"Global X Social Media ETF","SOGO":"Sogou Inc. American Depositary Shares each representing one Class A","SOHO":"Sotherly Hotels Inc.","SOHOB":"Sotherly Hotels Inc. 8.0% Series B Cumulative Redeemable Perpetual Preferred Stock","SOHON":"Sotherly Hotels Inc. 8.25% Series D Cumulative Redeemable Perpetual Preferred Stock","SOHOO":"Sotherly Hotels Inc. 7.875% Series C Cumulative Redeemable Perpetual Preferred Stock","SOHU":"Sohu.com Limited","SOI":"Solaris Oilfield Infrastructure Inc. Class A","SOIL":"Global X Fertilizers/Potash","SOJA":"","SOJB":"Southern Company (The) Series 2016A 5.25% Junior Subordinated Notes due October 1 2076","SOJC":"Southern Company (The) Series 2017B 5.25% Junior Subordinated Notes due December 1 2077","SOL":"Renesola Ltd. ADR","SOLO":"Electrameccanica Vehicles Corp. Ltd.","SOLOW":"Electrameccanica Vehicles Corp. Ltd. Warrants","SOLY":"Soliton Inc.","SON":"Sonoco Products Company","SONA":"Southern National Bancorp of Virginia Inc.","SONM":"Sonim Technologies Inc.","SONO":"Sonos Inc.","SOR":"Source Capital Inc.","SORL":"SORL Auto Parts Inc.","SOVB":"Cambria Sovereign Bond","SOXL":"Direxion Daily Semiconductor Bull 3x Shares","SOXS":"Direxion Daily Semiconductor Bear 3x Shares","SOXX":"iShares PHLX SOX Semiconductor Sector Index Fund","SOYB":"Teucrium Soybean Fund ETV","SP":"SP Plus Corporation","SPAB":"SPDR Portfolio Aggregate Bond","SPAQ":"Spartan Energy Acquisition Corp Class A","SPAQ+":"Spartan Energy Acquisition Corp Warrants each whole warrant exercisable for one Class A common stock at an exercise price of $11.50 per share","SPAQ=":"Spartan Energy Acquisition Corp Units (each consisting of one Class A Common Stock and one-third of one Warrant)","SPAR":"Spartan Motors Inc.","SPB":"Spectrum Brands Holdings Inc.","SPCB":"SuperCom Ltd.","SPDN":"Direxion Daily S&P 500 Bear 1X Shares","SPDV":"AAM S&P 500 High Dividend Value","SPDW":"SPDR Portfolio Developed World ex-US","SPE":"Special Opportunities Fund Inc","SPE-B":"Special Opportunities Fund Inc. 3.50% Convertible Preferred Stock Series B","SPEM":"SPDR Index Shares Fund Portfolio Emerging Markets","SPEX":"Spherix Incorporated","SPFF":"Global X SuperIncome Preferred","SPFI":"South Plains Financial Inc.","SPG":"Simon Property Group Inc.","SPG-J":"Simon Property Group Inc. Group 8 3/8% Series J Cumulative Redeemable Preferred Stock","SPGI":"S&P Global Inc.","SPGP":"Invesco S&P 500 GARP","SPH":"Suburban Propane Partners L.P.","SPHB":"Invesco S&P 500 High Beta","SPHD":"Invesco S&P 500 High Dividend Low Volatility","SPHQ":"Invesco S&P 500 Quality","SPHS":"Sophiris Bio Inc.","SPI":"SPI Energy Co. Ltd.","SPIB":"SPDR Portfolio Intermediate Term Corporate Bond","SPKE":"Spark Energy Inc.","SPKEP":"Spark Energy Inc. 8.75% Series A Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Stock","SPLB":"SPDR Portfolio Long Term Corporate Bond","SPLG":"SPDR Series Trust Portfolio Large Cap","SPLK":"Splunk Inc.","SPLP":"Steel Partners Holdings LP LTD PARTNERSHIP UNIT","SPLP-A":"Steel Partners Holdings LP 6.0% Series A Preferred Units no par value","SPLV":"Invesco S&P 500 Low Volatility","SPMD":"SPDR Portfolio Mid Cap","SPMO":"Invesco S&P 500 Momentum","SPMV":"Invesco S&P 500 Minimum Variance","SPN":"Superior Energy Services Inc.","SPNE":"SeaSpine Holdings Corporation","SPNS":"Sapiens International Corporation N.V.","SPOK":"Spok Holdings Inc.","SPOT":"Spotify Technology S.A.","SPPI":"Spectrum Pharmaceuticals Inc.","SPPP":"Sprott Physical Platinum and Palladium Trust","SPR":"Spirit Aerosystems Holdings Inc.","SPRO":"Spero Therapeutics Inc.","SPRT":"Support.com Inc.","SPSB":"SPDR Portfolio Short Term Corporate Bond","SPSC":"SPS Commerce Inc.","SPSM":"SPDR Portfolio Small Cap","SPTL":"SPDR Portfolio Long Term Treasury","SPTM":"SPDR Portfolio Total Stock Market","SPTN":"SpartanNash Company","SPTS":"SPDR Portfolio Short Term Treasury","SPUU":"Direxion Daily S&P 500 Bull 2X Shares","SPVM":"Invesco S&P 500 Value with Momentum","SPVU":"Invesco S&P 500 Enhanced Value","SPWH":"Sportsman's Warehouse Holdings Inc.","SPWR":"SunPower Corporation","SPXB":"ProShares S&P 500 Bond","SPXC":"SPX Corporation","SPXE":"ProShares S&P 500 Ex-Energy","SPXL":"Direxion Daily S&P 500 Bull 3X Shares","SPXN":"ProShares S&P 500 Ex-Financials","SPXS":"Direxion Daily S&P 500 Bear 3X","SPXT":"ProShares S&P 500 Ex-Technology","SPXU":"ProShares UltraPro Short S&P500","SPXV":"ProShares S&P 500 Ex-Health Care","SPXX":"Nuveen S&P 500 Dynamic Overwrite Fund","SPY":"SPDR S&P 500","SPYB":"SPDR S&P 500 Buyback","SPYD":"SPDR Series Trust Portfolio S&P 500 High Dividend","SPYG":"SPDR Series Trust Portfolio S&P 500 Growth","SPYV":"SPDR Series Trust Portfolio S&P 500 Value","SPYX":"SPDR S&P 500 Fossil Fuel Reserves Free","SQ":"Square Inc. Class A","SQBG":"Sequential Brands Group Inc.","SQLV":"Legg Mason Small-Cap Quality Value ETF","SQM":"Sociedad Quimica y Minera S.A.","SQNS":"Sequans Communications S.A. American Depositary Shares each representing one","SQQQ":"ProShares UltraPro Short QQQ","SR":"Spire Inc.","SR-A":"Spire Inc. Depositary Shares Series A","SRAX":"Social Reality Inc.","SRC":"Spirit Realty Capital Inc.","SRC-A":"Spirit Realty Capital Inc. 6.000% Series A Cumulative Redeemable Preferred Stock","SRCE":"1st Source Corporation","SRCI":"SRC Energy Inc.","SRCL":"Stericycle Inc.","SRDX":"Surmodics Inc.","SRE":"Sempra Energy","SRE-A":"Sempra Energy 6% Mandatory Convertible Preferred Stock Series A","SRE-B":"Sempra Energy 6.75% Mandatory Convertible Preferred Stock Series B","SREA":"Sempra Energy 5.750% Junior Subordinated Notes due 2079","SRET":"Global X SuperDividend REIT ETF","SREV":"ServiceSource International Inc.","SRF":"Cushing Energy Income Fund of Beneficial Interest","SRG":"Seritage Growth Properties Class A","SRG-A":"Seritage Growth Properties 7.00% Series A Cumulative Redeemable Preferred Shares of Beneficial Interest","SRI":"Stoneridge Inc.","SRL":"Scully Royalty Ltd.","SRLN":"SPDR Blackstone GSO Senior Loan","SRLP":"Sprague Resources LP representing Limited Partner Interests","SRNE":"Sorrento Therapeutics Inc.","SRPT":"Sarepta Therapeutics Inc.","SRRA":"Sierra Oncology Inc.","SRRK":"Scholar Rock Holding Corporation","SRS":"ProShares UltraShort Real Estate","SRT":"StarTek Inc.","SRTS":"Sensus Healthcare Inc.","SRTSW":"Sensus Healthcare Inc. Warrant","SRTY":"ProShares UltraPro Short Russell2000","SRV":"Cushing MLP & Infrastructure Total Return Fund","SRVR":"Pacer Benchmark Data & Infrastructure Real Estate SCTR","SSB":"South State Corporation","SSBI":"Summit State Bank","SSD":"Simpson Manufacturing Company Inc.","SSFN":"Stewardship Financial Corp","SSG":"ProShares UltraShort Semiconductors","SSI":"Stage Stores Inc.","SSKN":"Strata Skin Sciences Inc.","SSL":"Sasol Ltd. American Depositary Shares","SSNC":"SS&C Technologies Holdings Inc.","SSNT":"SilverSun Technologies Inc.","SSO":"ProShares Ultra S&P500","SSP":"E.W. Scripps Company (The)","SSPY":"Syntax Stratified LargeCap","SSRM":"SSR Mining Inc.","SSTI":"ShotSpotter Inc.","SSTK":"Shutterstock Inc.","SSW":"Seaspan Corporation","SSW-D":"Seaspan Corporation Cumulative Redeemable Perpetual Preferred Series D (Marshall Islands)","SSW-E":"Seaspan Corporation Cumulative Redeemable Perpetual Preferred Series E (Marshall Islands)","SSW-G":"Seaspan Corporation 8.20% Cumulative Redeemable Perpetual Preferred Shares - Series G","SSW-H":"Seaspan Corporation 7.875% Cumulative Redeemable Perpetual Preferred Shares - Series H","SSW-I":"Seaspan Corporation Series I Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares","SSWA":"Seaspan Corporation 7.125% Notes due 2027","SSY":"SunLink Health Systems Inc.","SSYS":"Stratasys Ltd.","ST":"Sensata Technologies Holding plc","STAA":"STAAR Surgical Company","STAF":"Staffing 360 Solutions Inc.","STAG":"Stag Industrial Inc.","STAG-C":"Stag Industrial Inc. 6.875% Series C Cumulative Redeemable Preferred Stock","STAR":"iStar Inc.","STAR-D":"iStar Inc. Series D Cumulative Redeemable Preferred Stock","STAR-G":"iStar Inc. Series G Cumulative Redeemable Preferred Stock","STAR-I":"iStar Inc. Series I Cumulative Redeemable Preferred Stock","STAY":"Extended Stay America Inc.","STBA":"S&T Bancorp Inc.","STC":"Stewart Information Services Corporation","STCN":"Steel Connect Inc.","STE":"STERIS plc (Ireland)","STFC":"State Auto Financial Corporation","STG":"Sunlands Technology Group American Depositary Shares representing Class A","STI":"SunTrust Banks Inc.","STI-A":"SunTrust Banks Inc. Dep Shs repstg 1/4000 Perpetual Pfd Stk Ser A","STIM":"Neuronetics Inc.","STIP":"iShares 0-5 Year TIPS Bond","STK":"Columbia Seligman Premium Technology Growth Fund Inc","STKL":"SunOpta Inc.","STKS":"The ONE Group Hospitality Inc.","STL":"Sterling Bancorp","STL-A":"Sterling Bancorp Depositary Shares Series A","STLD":"Steel Dynamics Inc.","STM":"STMicroelectronics N.V.","STML":"Stemline Therapeutics Inc.","STMP":"Stamps.com Inc.","STN":"Stantec Inc","STND":"Standard AVB Financial Corp.","STNE":"StoneCo Ltd.","STNG":"Scorpio Tankers Inc.","STNL":"Sentinel Energy Services Inc.","STNLU":"Sentinel Energy Services Inc. Unit","STNLW":"Sentinel Energy Services Inc. Warrant","STOK":"Stoke Therapeutics Inc.","STON":"StoneMor Partners L.P. Rep Limited Partnership Interests","STOR":"STORE Capital Corporation","STOT":"SPDR DoubleLine Short Duration Total Return Tactical","STPP":"iPath US Treasury Steepener ETN","STPZ":"PIMCO 1-5 Year U.S. TIPS Index Exchange-Traded Fund","STRA":"Strategic Education Inc.","STRL":"Sterling Construction Company Inc","STRM":"Streamline Health Solutions Inc.","STRO":"Sutro Biopharma Inc.","STRS":"Stratus Properties Inc.","STRT":"STRATTEC SECURITY CORPORATION","STT":"State Street Corporation","STT-C":"State Street Corporation Dep Shs Representing 1/4000 Ownership Int In Sh Non Cum (Perpertual Pfd Stk Ser C)","STT-D":"State Street Corporation Depositary Shares Series D","STT-E":"State Street Corporation Depository Shares Series E","STT-G":"State Street Corporation Depositary shares each representing a 1/4000th ownership interest in a share of Fixed-to-Floating Rate Non-Cumulative","STWD":"STARWOOD PROPERTY TRUST INC. Starwood Property Trust Inc.","STX":"Seagate Technology PLC","STXB":"Spirit of Texas Bancshares Inc.","STZ":"Constellation Brands Inc.","STZ.B":"Constellation Brands Inc.","SU":"Suncor Energy Inc.","SUB":"iShares Short-Term National Muni Bond","SUI":"Sun Communities Inc.","SUM":"Summit Materials Inc. Class A","SUMR":"Summer Infant Inc.","SUN":"Sunoco LP representing limited partner interests","SUNS":"Solar Senior Capital Ltd.","SUNW":"Sunworks Inc.","SUP":"Superior Industries International Inc. (DE)","SUPN":"Supernus Pharmaceuticals Inc.","SUPV":"Grupo Supervielle S.A. American Depositary Shares each Representing five Class B shares","SURF":"Surface Oncology Inc.","SUSA":"iShares MSCI USA ESG Select","SUSB":"iShares ESG 1-5 Year USD Corporate Bond ETF","SUSC":"iShares ESG USD Corporate Bond ETF","SUSL":"iShares ESG MSCI USA Leaders ETF","SUZ":"Suzano S.A. American Depositary Shares (each representing two)","SVA":"Sinovac Biotech Ltd.","SVBI":"Severn Bancorp Inc","SVM":"Silvercorp Metals Inc.","SVMK":"SVMK Inc.","SVRA":"Savara Inc.","SVT":"Servotronics Inc.","SVVC":"Firsthand Technology Value Fund Inc.","SVXY":"ProShares Short VIX Short Term Futures","SWAN":"Amplify ETF Trust BlackSwan Growth & Treasury Core","SWAV":"ShockWave Medical Inc.","SWCH":"Switch Inc. Class A","SWI":"SolarWinds Corporation","SWIR":"Sierra Wireless Inc.","SWJ":"Stanley Black & Decker Inc. 5.75% Junior Subordinated Debenture due 2052","SWK":"Stanley Black & Decker Inc.","SWKS":"Skyworks Solutions Inc.","SWM":"Schweitzer-Mauduit International Inc.","SWN":"Southwestern Energy Company","SWP":"Stanley Black & Decker Inc. Corporate Units","SWX":"Southwest Gas Holdings Inc.","SWZ":"Swiss Helvetia Fund Inc. (The)","SXC":"SunCoke Energy Inc.","SXI":"Standex International Corporation","SXT":"Sensient Technologies Corporation","SXTC":"China SXT Pharmaceuticals Inc.","SY":"So-Young International Inc.","SYBT":"SPDR Barclays US Treasury Bond UCITS ETF","SYBX":"Synlogic Inc.","SYE":"SPDR MFS Systematic Core Equity","SYF":"Synchrony Financial","SYG":"SPDR MFS Systematic Growth Equity","SYK":"Stryker Corporation","SYKE":"Sykes Enterprises Incorporated","SYLD":"Cambria Shareholder Yield","SYMC":"Symantec Corporation","SYN":"Synthetic Biologics Inc.","SYNA":"Synaptics Incorporated","SYNC":"Synacor Inc.","SYNH":"Syneos Health Inc.","SYNL":"Synalloy Corporation","SYPR":"Sypris Solutions Inc.","SYRS":"Syros Pharmaceuticals Inc.","SYV":"SPDR MFS Systematic Value Equity","SYX":"Systemax Inc.","SYY":"Sysco Corporation","SZC":"Cushing Renaissance Fund (The) of Beneficial Interest","SZC^":"Cushing Renaissance Fund (The) Rights (expiring July 18 2019)","SZK":"ProShares UltraShort Consumer Goods","SZNE":"Pacer CFRA-Stovall Equal Weight Seasonal Rotation","T":"AT&T Inc.","TA":"TravelCenters of America LLC","TAC":"TransAlta Corporation","TACO":"Del Taco Restaurants Inc.","TACOW":"Del Taco Restaurants Inc. Warrants","TACT":"TransAct Technologies Incorporated","TAGS":"Teucrium Agricultural Fund ETV","TAIL":"Cambria Tail Risk","TAIT":"Taitron Components Incorporated","TAK":"Takeda Pharmaceutical Company Limited American Depositary Shares (each representing 1/2 of a share of)","TAL":"TAL Education Group American Depositary Shares","TALO":"Talos Energy Inc.","TALO+":"Talos Energy Inc. Warrants","TAN":"Invesco Solar","TANH":"Tantech Holdings Ltd.","TANNI":"TravelCenters of America LLC 8.25% Senior Notes due 2028","TANNL":"","TANNZ":"","TAO":"Invesco China Real Estate","TAOP":"Taoping Inc.","TAP":"Molson Coors Brewing Company Class B","TAP.A":"Molson Coors Brewing Company Class A","TAPR":"Barclays PLC Inverse US Treasury Composite ETN","TARO":"Taro Pharmaceutical Industries Ltd.","TAST":"Carrols Restaurant Group Inc.","TAT":"TransAtlantic Petroleum Ltd (Bermuda)","TATT":"TAT Technologies Ltd.","TAWK":"Direxion Daily Communication Services Index Bull 3X Shares","TAXF":"American Century Diversified Municipal Bond","TAYD":"Taylor Devices Inc.","TBB":"AT&T Inc. 5.350% Global Notes due 2066","TBBK":"The Bancorp Inc.","TBC":"","TBF":"ProShares Short 20+ Year Treasury","TBI":"TrueBlue Inc.","TBIO":"Translate Bio Inc.","TBK":"Triumph Bancorp Inc.","TBLT":"ToughBuilt Industries Inc.","TBLTU":"ToughBuilt Industries Inc. Unit","TBLTW":"ToughBuilt Industries Inc. Warrant","TBLU":"Tortoise Global Water ESG Fund","TBND":"Tactical Income","TBNK":"Territorial Bancorp Inc.","TBPH":"Theravance Biopharma Inc.","TBT":"ProShares UltraShort Lehman 20 Year Treasury","TBX":"ProShares Short 7 10 Year Treasury","TC":"TuanChe Limited","TCBI":"Texas Capital Bancshares Inc.","TCBIL":"Texas Capital Bancshares Inc. 6.50% Subordinated Notes due 2042","TCBIP":"Texas Capital Bancshares Inc. Non Cumulative Preferred Perpetual Stock Series A","TCBK":"TriCo Bancshares","TCCO":"Technical Communications Corporation","TCDA":"Tricida Inc.","TCF":"TCF Financial Corporation","TCF-D":"TCF Financial Corporation Depositary Shares Series C","TCFC":"The Community Financial Corporation","TCGP":"The Carlyle Group L.P.","TCI":"Transcontinental Realty Investors Inc.","TCLD":"Tortoise Cloud Infrastructure Fund","TCMD":"Tactile Systems Technology Inc.","TCO":"Taubman Centers Inc.","TCO-J":"Taubman Centers Inc. Preferred Shares Series J","TCO-K":"Taubman Centers Inc. Preferred Series K","TCON":"TRACON Pharmaceuticals Inc.","TCP":"TC PipeLines LP representing Limited Partner Interests","TCPC":"BlackRock TCP Capital Corp.","TCRD":"THL Credit Inc.","TCRR":"TCR2 Therapeutics Inc.","TCRW":"","TCRZ":"THL Credit Inc. 6.75% Notes due 2022","TCS":"Container Store (The)","TCTL":"Premise Capital Frontier Advantage Diversified Tactical","TCX":"Tucows Inc.","TD":"Toronto Dominion Bank (The)","TDA":"Telephone and Data Systems Inc. 5.875% Senior Notes due 2061","TDAC":"Trident Acquisitions Corp.","TDACU":"Trident Acquisitions Corp. Units","TDACW":"","TDC":"Teradata Corporation","TDE":"Telephone and Data Systems Inc. 6.875% Senior Notes due 2059","TDF":"Templeton Dragon Fund Inc.","TDG":"Transdigm Group Incorporated Inc.","TDI":"Telephone and Data Systems Inc. Sr Nt","TDIV":"First Trust NASDAQ Technology Dividend Index Fund","TDJ":"Telephone and Data Systems Inc. 7% Senior Notes due 2060","TDOC":"Teladoc Health Inc.","TDS":"Telephone and Data Systems Inc.","TDTF":"FlexShares iBoxx 5 Year Target Duration TIPS Index Fund","TDTT":"FlexShares iBoxx 3 Year Target Duration TIPS Index Fund","TDW":"Tidewater Inc.","TDW+":"Tidewater Inc. Warrant","TDW+A":"","TDW+B":"","TDY":"Teledyne Technologies Incorporated","TEAF":"Tortoise Essential Assets Income Term Fund of Beneficial Interest","TEAM":"Atlassian Corporation Plc","TECD":"Tech Data Corporation","TECH":"Bio-Techne Corp","TECK":"Teck Resources Ltd","TECL":"Direxion Technology Bull 3X Shares","TECS":"Direxion Technology Bear 3X Shares","TECTP":"Tectonic Financial Inc. 9.00% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Preferred Stock","TEDU":"Tarena International Inc.","TEF":"Telefonica SA","TEI":"Templeton Emerging Markets Income Fund Inc.","TEL":"TE Connectivity Ltd. New Switzerland Registered Shares","TELL":"Tellurian Inc.","TEN":"Tenneco Inc. Class A Voting","TENB":"Tenable Holdings Inc.","TENX":"Tenax Therapeutics Inc.","TEO":"Telecom Argentina SA","TER":"Teradyne Inc.","TERM":"EquityCompass Tactical Risk Manager","TERP":"TerraForm Power Inc.","TESS":"TESSCO Technologies Incorporated","TEUM":"Pareteum Corporation","TEVA":"Teva Pharmaceutical Industries Limited American Depositary Shares","TEX":"Terex Corporation","TFI":"SPDR Nuveen Bloomberg Barclays Municipal Bond","TFIV":"Global X TargetIncome 5","TFLO":"iShares Treasury Floating Rate Bond","TFLT":"Global X TargetIncome Plus 2","TFSL":"TFS Financial Corporation","TFX":"Teleflex Incorporated","TG":"Tredegar Corporation","TGA":"TransGlobe Energy Corporation","TGB":"Taseko Mines Ltd.","TGC":"Tengasco Inc.","TGE":"Tallgrass Energy LP Class A Shares","TGEN":"Tecogen Inc.","TGH":"Textainer Group Holdings Limited","TGI":"Triumph Group Inc.","TGLS":"Tecnoglass Inc.","TGNA":"TEGNA Inc","TGP":"Teekay LNG Partners L.P.","TGP-A":"Teekay LNG Partners L.P. 9.00% Series A Cumulative Redeemable Perpetual Preferred Units representing limited partner interests","TGP-B":"Teekay LNG Partners L.P. 8.50% Series B Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units representing limited partner interests","TGS":"Transportadora de Gas del Sur SA TGS","TGT":"Target Corporation","TGTX":"TG Therapeutics Inc.","TH":"Target Hospitality Corp.","THC":"Tenet Healthcare Corporation","THCAU":"","THCB":"Tuscan Holdings Corp.","THCBU":"Tuscan Holdings Corp. Unit","THCBW":"Tuscan Holdings Corp. Warrant","THCX":"Spinnaker ETF Series The Cannabis","THD":"iShares Inc MSCI Thailand","THFF":"First Financial Corporation Indiana","THG":"Hanover Insurance Group Inc","THGA":"The Hanover Insurance Group Inc. 6.35% Subordinated Debentures due 2053","THM":"International Tower Hill Mines Ltd. (Canada)","THO":"Thor Industries Inc.","THOR":"Synthorx Inc.","THQ":"Tekla Healthcare Opportunies Fund Shares of Beneficial Interest","THR":"Thermon Group Holdings Inc.","THRM":"Gentherm Inc","THS":"Treehouse Foods Inc.","THW":"Tekla World Healthcare Fund Shares of Beneficial Interest","THWWW":"Target Hospitality Corp. Warrant expiring 3/15/2024","TIBR":"Tiberius Acquisition Corporation","TIBRU":"Tiberius Acquisition Corporation Units","TIBRW":"Tiberius Acquisition Corporation Warrant","TIF":"Tiffany & Co.","TIGO":"Millicom International Cellular S.A.","TIGR":"UP Fintech Holding Limited","TILE":"Interface Inc.","TILT":"FlexShares Mornigstar US Market Factors Tilt Index Fund","TIP":"iShares TIPS Bond","TIPT":"Tiptree Inc.","TIPX":"SPDR Bloomberg Barclays 1-10 Year TIPS","TIPZ":"PIMCO Broad U.S. TIPS Index Exchange-Traded Fund","TISI":"Team Inc.","TITN":"Titan Machinery Inc.","TIVO":"TiVo Corporation","TJX":"TJX Companies Inc. (The)","TK":"Teekay Corporation","TKAT":"Takung Art Co. Ltd.","TKC":"Turkcell Iletisim Hizmetleri AS","TKKS":"TKK Symphony Acquisition Corporation","TKKSR":"TKK Symphony Acquisition Corporation Right","TKKSU":"TKK Symphony Acquisition Corporation Unit","TKKSW":"TKK Symphony Acquisition Corporation Warrant","TKR":"Timken Company (The)","TLC":"Taiwan Liposome Company Ltd.","TLDH":"FlexShares Currency Hedged Morningstar DM ex-US Factor Tilt Index Fund","TLEH":"FlexShares Currency Hedged Morningstar EM Factor Tilt Index Fund","TLF":"Tandy Leather Factory Inc.","TLGT":"Teligent Inc.","TLH":"iShares 10-20 Year Treasury Bond","TLI":"Western Asset Corporate Loan Fund Inc","TLK":"PT Telekomunikasi Indonesia Tbk","TLND":"Talend S.A.","TLRA":"Telaria Inc.","TLRD":"Tailored Brands Inc.","TLRY":"Tilray Inc.","TLSA":"Tiziana Life Sciences plc","TLT":"iShares 20+ Year Treasury Bond ETF","TLTD":"FlexShares Morningstar Developed Markets ex-US Factor Tilt Index Fund","TLTE":"FlexShares Morningstar Emerging Markets Factor Tilt Index Fund","TLYS":"Tilly's Inc.","TM":"Toyota Motor Corporation","TMCX":"Trinity Merger Corp.","TMCXU":"Trinity Merger Corp. Unit","TMCXW":"Trinity Merger Corp. Warrant","TMDI":"Titan Medical Inc.","TMDX":"TransMedics Group Inc.","TME":"Tencent Music Entertainment Group American Depositary Shares each representing two Class A","TMF":"Direxion Daily 20-Yr Treasury Bull 3x Shrs","TMFC":"Motley Fool 100 Index ETF","TMHC":"Taylor Morrison Home Corporation","TMK":"Torchmark Corporation","TMK-C":"","TMO":"Thermo Fisher Scientific Inc","TMP":"Tompkins Financial Corporation","TMQ":"Trilogy Metals Inc.","TMSR":"TMSR Holding Company Limited","TMST":"TimkenSteel Corporation","TMUS":"T-Mobile US Inc.","TMV":"Direxion Daily 20-Year Treasury Bear 3X","TNA":"Direxion Small Cap Bull 3X Shares","TNAV":"Telenav Inc.","TNC":"Tennant Company","TNDM":"Tandem Diabetes Care Inc.","TNET":"TriNet Group Inc.","TNK":"Teekay Tankers Ltd.","TNP":"Tsakos Energy Navigation Ltd","TNP-B*":"Tsakos Energy Navigation Ltd Red Perp Pfd Ser B% (Bermuda)","TNP-C":"Tsakos Energy Navigation Ltd 8.875% Series C Preferred Cumulative Redeemable Perpetual Preferred Shares","TNP-D":"Tsakos Energy Navigation Ltd 8.75% Series D Cumulative Redeemable Perpetual Preferred Shares","TNP-E":"Tsakos Energy Navigation Ltd Series E Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares par value $1.00","TNP-F":"Tsakos Energy Navigation Ltd Series F Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Shares par value $1.00","TNXP":"Tonix Pharmaceuticals Holding Corp.","TOCA":"Tocagen Inc.","TOK":"iShares MSCI Kokusai","TOL":"Toll Brothers Inc.","TOLZ":"ProShares DJ Brookfield Global Infrastructure","TOO":"Teekay Offshore Partners L.P. representing Limited Partner Interests","TOO-A":"Teekay Offshore Partners L.P. 7.25% Series A Redeemable Preferred Units","TOO-B":"Teekay Offshore Partners L.P. 8.50% Series B Cumulative Redeemable Preferred Units representing limited partner interests","TOO-E":"Teekay Offshore Partners L.P. 8.875% Series E Fixed-to-Floating Rate Cumulative Redeemable Perpetual Preferred Units","TOPS":"TOP Ships Inc.","TORC":"resTORbio Inc.","TOT":"Total S.A.","TOTA":"Tottenham Acquisition I Limited","TOTAR":"Tottenham Acquisition I Limited Right","TOTAU":"Tottenham Acquisition I Limited Unit","TOTAW":"Tottenham Acquisition I Limited Warrant","TOTL":"SPDR DoubleLine Total Return Tactical","TOUR":"Tuniu Corporation","TOWN":"Towne Bank","TOWR":"Tower International Inc.","TPAY":"Tortoise Digital Payments Infrastructure Fund","TPB":"Turning Point Brands Inc.","TPC":"Tutor Perini Corporation","TPCO":"Tribune Publishing Company","TPGH":"TPG Pace Holdings Corp. Class A","TPGH+":"","TPGH=":"TPG Pace Holdings Corp. Units each consisting of one Class A ordinary share $.0001 par value and one-third of one warrant","TPH":"TRI Pointe Group Inc.","TPHD":"Timothy Plan High Dividend Stock","TPHS":"Trinity Place Holdings Inc.","TPIC":"TPI Composites Inc.","TPL":"Texas Pacific Land Trust","TPLC":"Timothy Plan US Large Cap Core","TPOR":"Direxion Daily Transportation Bull 3X Shares","TPR":"Tapestry Inc.","TPRE":"Third Point Reinsurance Ltd.","TPTX":"Turning Point Therapeutics Inc.","TPVG":"TriplePoint Venture Growth BDC Corp.","TPVY":"TriplePoint Venture Growth BDC Corp. 5.75% Notes due 2022","TPX":"Tempur Sealy International Inc.","TPYP":"Tortoise North American Pipeline","TPZ":"Tortoise Power and Energy Infrastructure Fund Inc","TQQQ":"ProShares UltraPro QQQ","TR":"Tootsie Roll Industries Inc.","TRC":"Tejon Ranch Co","TRCB":"Two River Bancorp","TRCH":"Torchlight Energy Resources Inc.","TRCO":"Tribune Media Company Class A","TREC":"Trecora Resources","TREE":"LendingTree Inc.","TREX":"Trex Company Inc.","TRGP":"Targa Resources Inc.","TRHC":"Tabula Rasa HealthCare Inc.","TRI":"Thomson Reuters Corp","TRIB":"Trinity Biotech plc","TRIL":"Trillium Therapeutics Inc.","TRIP":"TripAdvisor Inc.","TRK":"Speedway Motorsports Inc.","TRMB":"Trimble Inc.","TRMD":"TORM plc","TRMK":"Trustmark Corporation","TRMT":"Tremont Mortgage Trust","TRN":"Trinity Industries Inc.","TRND":"Pacer Trendpilot Fund of Funds","TRNE":"Trine Acquisition Corp. Class A","TRNE+":"","TRNE=":"Trine Acquisition Corp. Units","TRNO":"Terreno Realty Corporation","TRNS":"Transcat Inc.","TRNX":"Taronis Technologies Inc.","TROV":"TrovaGene Inc.","TROW":"T. Rowe Price Group Inc.","TROX":"Tronox Holdings plc (UK)","TRP":"TC Energy Corporation","TRPX":"Therapix Biosciences Ltd.","TRQ":"Turquoise Hill Resources Ltd.","TRS":"TriMas Corporation","TRST":"TrustCo Bank Corp NY","TRT":"Trio-Tech International","TRTN":"Triton International Limited","TRTN-A":"Triton International Limited 8.50% Series A Cumulative Redeemable Perpetual Preference Shares","TRTN-B":"Triton International Limited 8.00% Series B Cumulative Redeemable Perpetual Preference Shares","TRTX":"TPG RE Finance Trust Inc.","TRTY":"Cambria Trinity","TRU":"TransUnion","TRUE":"TrueCar Inc.","TRUP":"Trupanion Inc.","TRV":"The Travelers Companies Inc.","TRVG":"trivago N.V.","TRVI":"Trevi Therapeutics Inc.","TRVN":"Trevena Inc.","TRWH":"Twin River Worldwide Holdings Inc.","TRX":"Tanzanian Gold Corporation","TRXC":"TransEnterix Inc.","TS":"Tenaris S.A. American Depositary Shares","TSBK":"Timberland Bancorp Inc.","TSC":"TriState Capital Holdings Inc.","TSCAP":"TriState Capital Holdings Inc. Dep Shs Rep 1/40th Int 6.75% Srs A Non-Cum Pfd","TSCBP":"TriState Capital Holdings Inc. Depositary Share representing a 1/40th Interest in a Share of 6.375% Fixed-to-Floating Rate Series B Non-Cumulative Perpetual Pre","TSCO":"Tractor Supply Company","TSE":"Trinseo S.A.","TSEM":"Tower Semiconductor Ltd.","TSG":"The Stars Group Inc.","TSI":"TCW Strategic Income Fund Inc.","TSLA":"Tesla Inc.","TSLF":"THL Credit Senior Loan Fund of Beneficial Interest","TSLX":"TPG Specialty Lending Inc.","TSM":"Taiwan Semiconductor Manufacturing Company Ltd.","TSN":"Tyson Foods Inc.","TSQ":"Townsquare Media Inc. Class A","TSRI":"TSR Inc.","TSS":"Total System Services Inc.","TST":"TheStreet Inc.","TSU":"TIM Participacoes S.A. American Depositary Shares (Each representing 5)","TTAC":"TrimTabs All Cap U.S. Free-Cash-Flow","TTAI":"TRIMTABS ETF TRUST","TTC":"Toro Company (The)","TTD":"The Trade Desk Inc.","TTEC":"TTEC Holdings Inc.","TTEK":"Tetra Tech Inc.","TTGT":"TechTarget Inc.","TTI":"Tetra Technologies Inc.","TTM":"Tata Motors Ltd Limited","TTMI":"TTM Technologies Inc.","TTNP":"Titan Pharmaceuticals Inc.","TTOO":"T2 Biosystems Inc.","TTP":"Tortoise Pipeline & Energy Fund Inc.","TTPH":"Tetraphase Pharmaceuticals Inc.","TTS":"Tile Shop Hldgs Inc.","TTT":"ProShares UltraPro Short 20 Year Treasury","TTTN":"UP Fintech China-U.S. Internet Titans ETF","TTWO":"Take-Two Interactive Software Inc.","TU":"Telus Corporation","TUES":"Tuesday Morning Corp.","TUFN":"Tufin Software Technologies Ltd.","TUP":"Tupperware Brands Corporation","TUR":"iShares MSCI Turkey ETF","TURN":"180 Degree Capital Corp.","TUSA":"First Trust Total US Market AlphaDEX ETF","TUSK":"Mammoth Energy Services Inc.","TUZ":"PIMCO 1-3 Year US Treasury Index Exchage-Traded Fund","TV":"Grupo Televisa S.A.","TVC":"Tennessee Valley Authority","TVE":"Tennessee Valley Authority","TVIX":"VelocityShares Daily 2x VIX Short Term ETN","TVTY":"Tivity Health Inc.","TW":"Tradeweb Markets Inc.","TWAR":"Innovation Trade War","TWI":"Titan International Inc. (DE)","TWIN":"Twin Disc Incorporated","TWLO":"Twilio Inc. Class A","TWM":"ProShares UltraShort Russell2000","TWMC":"Trans World Entertainment Corp.","TWN":"Taiwan Fund Inc. (The)","TWNK":"Hostess Brands Inc.","TWNKW":"","TWO":"Two Harbors Investment Corp","TWO-A":"Two Harbors Investments Corp 8.125% Series A Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock ($25.00 liquidation preference per share)","TWO-B":"Two Harbors Investments Corp 7.625% Series B Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","TWO-C":"Two Harbors Investments Corp 7.25% Series C Fixed-to-Floating Rate Cumulative Redeemable Preferred Stock","TWO-D":"Two Harbors Investments Corp 7.75% Series D Cumulative Redeemable Preferred Stock","TWO-E":"Two Harbors Investments Corp 7.50% Series E Cumulative Redeemable Preferred Stock","TWOU":"2U Inc.","TWST":"Twist Bioscience Corporation","TWTR":"Twitter Inc.","TX":"Ternium S.A. American Depositary Shares (each representing ten shares USD1.00 par value)","TXMD":"TherapeuticsMD Inc.","TXN":"Texas Instruments Incorporated","TXRH":"Texas Roadhouse Inc.","TXT":"Textron Inc.","TY":"Tri Continental Corporation","TY-":"","TYBS":"Direxion Daily 20 Year Treasury Bear 1X Shares","TYD":"Direxion Daily 10-Yr Treasury Bull 3x Shrs","TYG":"Tortoise Energy Infrastructure Corporation","TYHT":"Shineco Inc.","TYL":"Tyler Technologies Inc.","TYME":"Tyme Technologies Inc.","TYNS":"Direxion Daily 7 10 Year Treasury Bear 1X Shares","TYO":"Direxion Daily 10-Yr Treasury Bear 3x Shrs","TYPE":"Monotype Imaging Holdings Inc.","TZA":"Direxion Small Cap Bear 3X Shares","TZAC":"Tenzing Acquisition Corp.","TZACU":"Tenzing Acquisition Corp. Units","TZACW":"Tenzing Acquisition Corp. Warrants","TZOO":"Travelzoo","UA":"Under Armour Inc. Class C","UAA":"Under Armour Inc. Class A","UAE":"iShares MSCI UAE Capped ETF","UAG":"E-TRACS USB Bloomberg Commodity Index Exchange Traded Notes UBS Bloomberg CMCI Agriculture ETN","UAL":"United Airlines Holdings Inc.","UAMY":"United States Antimony Corporation","UAN":"CVR Partners LP representing Limited Partner Interests","UAPR":"Innovator S&P 500 Ultra Buffer ETF - April","UAUD":"ETNs linked to the VelocityShares Daily 4X Long AUD vs. USD Index","UAVS":"AgEagle Aerial Systems Inc.","UBA":"Urstadt Biddle Properties Inc.","UBCP":"United Bancorp Inc.","UBER":"Uber Technologies Inc.","UBFO":"United Security Bancshares","UBG":"E-TRACS USB Bloomberg Commodity Index Exchange Traded Notes UBS Bloomberg CMCI Gold ETN","UBIO":"Proshares UltraPro Nasdaq Biotechnology","UBNK":"United Financial Bancorp Inc.","UBNT":"Ubiquiti Networks Inc.","UBOH":"United Bancshares Inc.","UBOT":"Direxion Daily Robotics Artificial Intelligence & Automation Index Bull 3X Shares","UBP":"Urstadt Biddle Properties Inc.","UBP-G":"Urstadt Biddle Properties Inc. Preferred Stock Series G 6.75%","UBP-H":"Urstadt Biddle Properties Inc. 6.250% Series H Cumulative Redeemable Preferred Stock","UBR":"ProShares Ultra MSCI Brazil Capped","UBS":"UBS Group AG Registered","UBSI":"United Bankshares Inc.","UBT":"ProShares Ultra 20+ Year Treasury","UBX":"Unity Biotechnology Inc.","UCBI":"United Community Banks Inc.","UCC":"ProShares Ultra Consumer Services","UCFC":"United Community Financial Corp.","UCHF":"ETNs linked to the VelocityShares Daily 4X Long CHF vs. USD Index","UCI":"E-TRACS USB Bloomberg Commodity Index Exchange Traded Notes UBS Bloomberg CMCI ETN","UCIB":"ETRACS UBS Bloomberg Constant Maturity Commodity Index (CMCI) Total Return ETN Series B due April 5 2038","UCO":"ProShares Ultra Bloomberg Crude Oil","UCOM":"ProShares UltraPro Communication Services Select Sector","UCON":"First Trust TCW Unconstrained Plus Bond","UCTT":"Ultra Clean Holdings Inc.","UDN":"Invesco DB USD Index Bearish","UDOW":"ProShares UltraPro Dow30","UDR":"UDR Inc.","UE":"Urban Edge Properties of Beneficial Interest","UEC":"Uranium Energy Corp.","UEIC":"Universal Electronics Inc.","UEPS":"Net 1 UEPS Technologies Inc.","UEUR":"ETNs linked to the VelocityShares Daily 4X Long EUR vs. USD Index","UEVM":"VictoryShares USAA MSCI Emerging Markets Value Momentum","UFAB":"Unique Fabricating Inc.","UFCS":"United Fire Group Inc","UFI":"Unifi Inc.","UFO":"Procure Space ETF","UFPI":"Universal Forest Products Inc.","UFPT":"UFP Technologies Inc.","UFS":"Domtar Corporation (NEW)","UG":"United-Guardian Inc.","UGA":"United States Gasoline Fund LP","UGAZ":"VelocityShares 3X Long Natural Gas ETN linked to the S&P GSCI Natural Gas Index Excess Return","UGBP":"ETNs linked to the VelocityShares Daily 4X Long GBP vs. USD Index","UGE":"ProShares Ultra Consumer Goods","UGI":"UGI Corporation","UGL":"ProShares Ultra Gold","UGLD":"VelocityShares 3x Long Gold ETN","UGP":"Ultrapar Participacoes S.A. (New) American Depositary Shares (Each representing one)","UHAL":"Amerco","UHS":"Universal Health Services Inc.","UHT":"Universal Health Realty Income Trust","UIHC":"United Insurance Holdings Corp.","UIS":"Unisys Corporation","UITB":"VictoryShares USAA Core Intermediate-Term Bond","UIVM":"VictoryShares USAA MSCI International Value Momentum","UJAN":"Innovator S&P 500 Ultra Buffer ETF - January","UJB":"ProShares Ultra High Yield","UJPY":"ETNs linked to the VelocityShares Daily 4X Long JPY vs. USD Index","UJUL":"Innovator S&P 500 Ultra Buffer ETF - July","UJUN":"Innovator S&P 500 Ultra Buffer ETF - June","UL":"Unilever PLC","ULBI":"Ultralife Corporation","ULBR":"Citigroup Global Markets Holdings Inc VelocityShares Long LIBOR ETN","ULE":"ProShares Ultra Euro","ULH":"Universal Logistics Holdings Inc.","ULST":"SPDR SSgA Ultra Short Term Bond","ULTA":"Ulta Beauty Inc.","ULVM":"VictoryShares USAA MSCI USA Value Momentum","UMBF":"UMB Financial Corporation","UMC":"United Microelectronics Corporation (NEW)","UMDD":"UltraPro MidCap400","UMH":"UMH Properties Inc.","UMH-B":"UMH Properties Inc. 8.0% Series B Cumulative Redeemable Preferred Stock","UMH-C":"UMH Properties Inc. 6.75% Series C Cumulative Redeemable Preferred Stock Liquidation Preference $25 per share","UMH-D":"UMH Properties Inc. 6.375% Series D Cumulative Redeemable Preferred Stock Liquidation Preference $25 per share","UMPQ":"Umpqua Holdings Corporation","UMRX":"Unum Therapeutics Inc.","UN":"Unilever NV","UNAM":"Unico American Corporation","UNB":"Union Bankshares Inc.","UNF":"Unifirst Corporation","UNFI":"United Natural Foods Inc.","UNG":"United States Natural Gas Fund LP","UNH":"UnitedHealth Group Incorporated (DE)","UNIT":"Uniti Group Inc.","UNL":"United States 12 Month Natural Gas Fund","UNM":"Unum Group","UNMA":"Unum Group 6.250% Junior Subordinated Notes due 2058","UNP":"Union Pacific Corporation","UNT":"Unit Corporation","UNTY":"Unity Bancorp Inc.","UNVR":"Univar Inc.","UOCT":"Innovator S&P 500 Ultra Buffer ETF - October","UONE":"Urban One Inc.","UONEK":"Urban One Inc.","UPL":"Ultra Petroleum Corp.","UPLD":"Upland Software Inc.","UPRO":"ProShares UltraPro S&P 500","UPS":"United Parcel Service Inc.","UPV":"ProShares Ultra FTSE Europe","UPW":"ProShares Ultra Utilities","UPWK":"Upwork Inc.","UQM":"UQM Technologies Inc","URA":"Global X Uranium","URBN":"Urban Outfitters Inc.","URE":"ProShares Ultra Real Estate","URG":"Ur-Energy Inc (Canada)","URGN":"UroGen Pharma Ltd.","URI":"United Rentals Inc.","UROV":"Urovant Sciences Ltd.","URR":"Market Vectors Double Long Euro ETN","URTH":"Ishares MSCI World Index Fund","URTY":"ProShares UltraPro Russell2000","USA":"Liberty All-Star Equity Fund","USAC":"USA Compression Partners LP Representing Limited Partner Interests","USAI":"American Energy Independence","USAK":"USA Truck Inc.","USAP":"Universal Stainless & Alloy Products Inc.","USAS":"Americas Silver Corporation no par value","USAT":"USA Technologies Inc.","USATP":"USA Technologies Inc. Preferred Stock","USAU":"U.S. Gold Corp.","USB":"U.S. Bancorp","USB-A":"U.S. Bancorp Depositary Shares Series A","USB-H":"U.S. Bancorp Depositary Shares repstg 1/1000th Pfd Ser B","USB-M":"U.S. Bancorp Depositary Shares Series F","USB-O":"US Bancorp Del Dep Shs Repstg 1/1000th Perp Pfd Ser H","USB-P":"U.S. Bancorp Depositary Shares Series K","USCI":"United States Commodity Index Fund ETV","USCR":"U S Concrete Inc.","USD":"ProShares Ultra Semiconductors","USDP":"USD Partners LP representing limited partner interest","USDU":"WisdomTree Bloomberg U.S. Dollar Bullish Fund","USDY":"Pacific Global US Equity Income","USEG":"U.S. Energy Corp.","USEQ":"Invesco Russell 1000 Enhanced Equal Weight","USFD":"US Foods Holding Corp.","USFR":"WisdomTree Floating Rate Treasury Fund","USHG":"AGFiQ Dynamic Hedged U.S. Equity","USHY":"iShares Broad USD High Yield Corporate Bond","USI":"Principal Ultra-Short Active Income","USIG":"iShares U.S. Credit Bond ETF","USIO":"Usio Inc.","USL":"United States 12 Month Oil","USLB":"Invesco Russell 1000 Low Beta Equal Weight ETF","USLM":"United States Lime & Minerals Inc.","USLV":"VelocityShares 3x Long Silver ETN","USM":"United States Cellular Corporation","USMC":"Principal U.S. Mega-Cap Multi-Factor Index ETF","USMF":"WisdomTree U.S. Multifactor Fund","USMV":"iShares Edge MSCI Min Vol USA","USNA":"USANA Health Sciences Inc.","USO":"United States Oil Fund","USOD":"United States 3x Short Oil Fund","USOI":"Credit Suisse X-Links Crude Oil Shares Covered Call ETN","USOU":"United States 3x Oil Fund","USPH":"U.S. Physical Therapy Inc.","USRT":"iShares Core U.S. REIT","USSG":"Xtrackers MSCI USA ESG Leaders Equity","UST":"ProShares Ultra 7-10 Year Treasury","USTB":"VictoryShares USAA Core Short-Term Bond","USV":"E-TRACS USB Bloomberg Commodity Index Exchange Traded Notes UBS Bloomberg CMCI Silver ETN","USVM":"VictoryShares USAA MSCI USA Small Cap Value Momentum","USWS":"U.S. Well Services Inc.","USWSW":"","USX":"U.S. Xpress Enterprises Inc. Class A","UTES":"Virtus Reaves Utilities","UTF":"Cohen & Steers Infrastructure Fund Inc","UTG":"Reaves Utility Income Fund of Beneficial Interest","UTHR":"United Therapeutics Corporation","UTI":"Universal Technical Institute Inc","UTL":"UNITIL Corporation","UTMD":"Utah Medical Products Inc.","UTRN":"Vesper US Large Cap Short-Term Reversal Strategy","UTSI":"UTStarcom Holdings Corp","UTSL":"Direxion Daily Utilities Bull 3X Shares","UTX":"United Technologies Corporation","UUP":"Invesco DB USD Index Bullish Fund","UUU":"Universal Security Instruments Inc.","UUUU":"Energy Fuels Inc (Canada)","UUUU+":"","UVE":"UNIVERSAL INSURANCE HOLDINGS INC","UVSP":"Univest Financial Corporation","UVV":"Universal Corporation","UVXY":"ProShares Trust Ultra VIX Short Term Futures","UWM":"ProShares Ultra Russell2000","UWT":"VelocityShares 3x Long Crude Oil ETNs linked to the S&P GSCI Crude Oil Index ER","UXI":"ProShares Ultra Industrials","UXIN":"Uxin Limited","UYG":"ProShares Ultra Financials","UYM":"ProShares Ultra Basic Materials","UZA":"United States Cellular Corporation 6.95% Senior Notes due 2060","UZB":"","UZC":"United States Cellular Corporation 7.25% Senior Notes due 2064","V":"Visa Inc.","VAC":"Marriott Vacations Worldwide Corporation","VALE":"VALE S.A. American Depositary Shares Each Representing one","VALQ":"American Century STOXX U.S. Quality Value","VALU":"Value Line Inc.","VALX":"Validea Market Legends ETF","VAM":"The Vivaldi Opportunities Fund","VAMO":"Cambria ETF Trust Value and Momentum","VAPO":"Vapotherm Inc.","VAR":"Varian Medical Systems Inc.","VAW":"Vanguard Materials","VB":"Vanguard Small-Cap","VBF":"Invesco Bond Fund","VBFC":"Village Bank and Trust Financial Corp.","VBIV":"VBI Vaccines Inc.","VBK":"Vanguard Small-Cap Growth","VBLT":"Vascular Biogenics Ltd.","VBND":"ETF Series Solutions Trust Vident Core U.S. Bond Strategy Fund","VBR":"Vanguard Small-Cap Value","VBTX":"Veritex Holdings Inc.","VC":"Visteon Corporation","VCEL":"Vericel Corporation","VCF":"Delaware Investments Colorado Municipal Income Fund Inc","VCIF":"Vertical Capital Income Fund of Beneficial Interest","VCIT":"Vanguard Intermediate-Term Corporate Bond ETF","VCLT":"Vanguard Long-Term Corporate Bond ETF","VCNX":"Vaccinex Inc.","VCR":"Vanguard Consumer Discretion","VCRA":"Vocera Communications Inc.","VCSH":"Vanguard Short-Term Corporate Bond ETF","VCTR":"Victory Capital Holdings Inc.","VCV":"Invesco California Value Municipal Income Trust","VCYT":"Veracyte Inc.","VDC":"Vanguard Consumer Staples","VDE":"Vanguard Energy","VEA":"Vanguard FTSE Developed Markets","VEC":"Vectrus Inc.","VECO":"Veeco Instruments Inc.","VEDL":"Vedanta Limited American Depositary Shares (Each representing four equity shares)","VEEV":"Veeva Systems Inc. Class A","VEGA":"AdvisorShares STAR Global Buy-Write","VEGI":"iShares MSCI Agriculture Producers Fund","VEON":"VEON Ltd.","VER":"VEREIT Inc.","VER-F":"VEREIT Inc. 6.70% Series F Cumulative Redeemable Preferred Stock","VERB":"Verb Technology Company Inc.","VERBW":"Verb Technology Company Inc. Warrant","VERI":"Veritone Inc.","VERU":"Veru Inc.","VET":"Vermilion Energy Inc. Common (Canada)","VETS":"Pacer Military Times Best Employers ETF","VEU":"Vanguard FTSE All World Ex US","VFC":"V.F. Corporation","VFF":"Village Farms International Inc.","VFH":"Vanguard Financials","VFL":"Delaware Investments National Municipal Income Fund","VFLQ":"Vanguard U.S. Liquidity Factor","VFMF":"Vanguard U.S. Multifactor","VFMO":"Vanguard U.S. Momentum Factor","VFMV":"Vanguard U.S. Minimum Volatility","VFQY":"Vanguard U.S. Quality Factor","VFVA":"Vanguard U.S. Value Factor","VG":"Vonage Holdings Corp.","VGFO":"Virtus WMC Global Factor Opportunities","VGI":"Virtus Global Multi-Sector Income Fund of Beneficial Interest","VGIT":"Vanguard Intermediate-Term Government Bond ETF","VGK":"Vanguard FTSEEuropean","VGLT":"Vanguard Long-Term Government Bond ETF","VGM":"Invesco Trust for Investment Grade Municipals (DE)","VGR":"Vector Group Ltd.","VGSH":"Vanguard Short-Term Government Bond ETF","VGT":"Vanguard Information Tech","VGZ":"Vista Gold Corp","VHC":"VirnetX Holding Corp","VHI":"Valhi Inc.","VHT":"Vanguard Health Care","VIA":"Viacom Inc.","VIAB":"Viacom Inc.","VIAV":"Viavi Solutions Inc.","VICI":"VICI Properties Inc.","VICL":"Vical Incorporated","VICR":"Vicor Corporation","VIDG":"Defiance Next Gen Video Gaming","VIDI":"ETF Series Solutions Trust Vident International Equity Fund","VIG":"Vanguard Div Appreciation","VIGI":"Vanguard International Dividend Appreciation ETF","VIIX":"VelocityShares VIX Short Term ETN","VIOG":"Vanguard S&P Small-Cap 600 Growth","VIOO":"Vanguard S&P Small-Cap 600","VIOT":"Viomi Technology Co. Ltd","VIOV":"Vanguard S&P Small-Cap 600 Value","VIPS":"Vipshop Holdings Limited American Depositary Shares each representing two","VIRC":"Virco Manufacturing Corporation","VIRT":"Virtu Financial Inc.","VIS":"Vanguard Industrials","VISI":"Volt Information Sciences Inc.","VISL":"Vislink Technologies Inc.","VIV":"Telefonica Brasil S.A. ADS","VIVE":"Viveve Medical Inc.","VIVO":"Meridian Bioscience Inc.","VIXM":"ProShares Trust VIX Mid-Term Futures","VIXY":"ProShares Trust VIX Short-Term Futures","VJET":"voxeljet AG American Depositary Shares each representing one-fifth of an/","VKI":"Invesco Advantage Municipal Income Trust II of Beneficial Interest (DE)","VKQ":"Invesco Municipal Trust","VKTX":"Viking Therapeutics Inc.","VKTXW":"","VLGEA":"Village Super Market Inc. Class A Common Stock","VLO":"Valero Energy Corporation","VLRS":"Controladora Vuela Compania de Aviacion S.A.B. de C.V. American Depositary Shares each representing ten (10) Ordinary Participation Certificates","VLRX":"Valeritas Holdings Inc.","VLT":"Invesco High Income Trust II","VLU":"SPDR S&P 1500 Value Tilt","VLUE":"iShares Edge MSCI USA Value Factor","VLY":"Valley National Bancorp","VLYPO":"Valley National Bancorp 5.5% Fixed to Floating Rate Series B Non-Cumulative Perpetual Preferred Stock","VLYPP":"Valley National Bancorp 6.25% Fixed-to-Floating Rate Series A Non-Cumulative Perpetual Preferred Stock","VMBS":"Vanguard Mortgage-Backed Securities ETF","VMC":"Vulcan Materials Company (Holding Company)","VMI":"Valmont Industries Inc.","VMM":"Delaware Investments Minnesota Municipal Income Fund II Inc.","VMO":"Invesco Municipal Opportunity Trust","VMOT":"Alpha Architect Value Momentum Trend","VMW":"Vmware Inc. Class A","VNCE":"Vince Holding Corp.","VNDA":"Vanda Pharmaceuticals Inc.","VNE":"Veoneer Inc.","VNET":"21Vianet Group Inc.","VNLA":"Janus Henderson Short Duration Income","VNM":"VanEck Vectors Vietnam","VNO":"Vornado Realty Trust","VNO-K":"Vornado Realty Trust Pfd S K","VNO-L":"Vornado Realty Trust Pfd Ser L %","VNO-M":"Vornado Realty Trust 5.25% Series M Cumulative Redeemable Preferred Shares of Beneficial Interest liquidation preference $25.00 per share no par value per share","VNOM":"Viper Energy Partners LP","VNQ":"Vanguard Real Estate","VNQI":"Vanguard Global ex-U.S. Real Estate ETF","VNRX":"VolitionRX Limited","VNTR":"Venator Materials PLC","VO":"Vanguard Mid-Cap","VOC":"VOC Energy Trust Units of Beneficial Interest","VOD":"Vodafone Group Plc","VOE":"Vanguard Mid-Cap Value","VONE":"Vanguard Russell 1000 Index Fund","VONG":"Vanguard Russell 1000 Growth Index Fund","VONV":"Vanguard Russell 1000 Value Index Fund","VOO":"Vanguard S&P 500","VOOG":"Vanguard S&P 500 Growth","VOOV":"Vanguard S&P 500 Value","VOT":"Vanguard Mid-Cap Growth","VOX":"Vanguard Communication Services","VOXX":"VOXX International Corporation","VOYA":"Voya Financial Inc.","VOYA-B":"Voya Financial Inc. Depositary Shares Series B","VPC":"Virtus Private Credit Strategy","VPG":"Vishay Precision Group Inc.","VPL":"Vanguard FTSE Pacific","VPU":"Vanguard Utilities","VPV":"Invesco Pennsylvania Value Municipal Income Trust (DE)","VQT":"Barclays ETN S&P VEQTOR ETN","VRA":"Vera Bradley Inc.","VRAI":"Virtus Real Asset Income","VRAY":"ViewRay Inc.","VRCA":"Verrica Pharmaceuticals Inc.","VREX":"Varex Imaging Corporation","VRIG":"PowerShares Variable Rate Investment Grade Portfol","VRML":"Vermillion Inc.","VRNA":"Verona Pharma plc","VRNS":"Varonis Systems Inc.","VRNT":"Verint Systems Inc.","VRP":"Invesco Variable Rate Preferred","VRRM":"Verra Mobility Corporation","VRS":"Verso Corporation","VRSK":"Verisk Analytics Inc.","VRSN":"VeriSign Inc.","VRTS":"Virtus Investment Partners Inc.","VRTSP":"Virtus Investment Partners Inc. 7.25% Series D Mandatory Convertible Preferred Stock","VRTU":"Virtusa Corporation","VRTV":"Veritiv Corporation","VRTX":"Vertex Pharmaceuticals Incorporated","VSAT":"ViaSat Inc.","VSDA":"VictoryShares Dividend Accelerator ETF","VSEC":"VSE Corporation","VSGX":"Vanguard ESG International Stock","VSH":"Vishay Intertechnology Inc.","VSI":"Vitamin Shoppe Inc","VSL":"Volshares Large Cap","VSLR":"Vivint Solar Inc.","VSM":"Versum Materials Inc.","VSMV":"VictoryShares US Multi-Factor Minimum Volatility E","VSS":"Vanguard FTSE All-Wld ex-US SmCp Idx","VST":"Vistra Energy Corp.","VST+A":"","VSTM":"Verastem Inc.","VSTO":"Vista Outdoor Inc.","VT":"Vanguard Total World Stock Index","VTA":"Invesco Credit Opportunities Fund of Beneficial Interest","VTC":"Vanguard Total Corporate ETF","VTEB":"Vanguard Tax-Exempt Bond","VTGN":"VistaGen Therapeutics Inc.","VTHR":"Vanguard Russell 3000 Index Fund","VTI":"Vanguard Total Stock Market","VTIP":"Vanguard Short-Term Inflation-Protected Securities","VTIQ":"VectoIQ Acquisition Corp.","VTIQU":"VectoIQ Acquisition Corp. Unit","VTIQW":"VectoIQ Acquisition Corp. Warrant","VTN":"Invesco Trust for Investment Grade New York Municipals","VTNR":"Vertex Energy Inc","VTR":"Ventas Inc.","VTSI":"VirTra Inc.","VTV":"Vanguard Value","VTVT":"vTv Therapeutics Inc.","VTWG":"Vanguard Russell 2000 Growth Index Fund","VTWO":"Vanguard Russell 2000 Index Fund","VTWV":"Vanguard Russell 2000 Value Index Fund","VUG":"Vanguard Growth","VUSE":"ETF Series Solutions Trust Vident Core US Equity","VUZI":"Vuzix Corporation","VV":"Vanguard Large-Cap","VVI":"Viad Corp","VVPR":"VivoPower International PLC","VVR":"Invesco Senior Income Trust (DE)","VVUS":"VIVUS Inc.","VVV":"Valvoline Inc.","VWO":"Vanguard FTSE Emerging Markets","VWOB":"Vanguard Emerging Markets Government Bond ETF","VXF":"Vanguard Extended Market","VXRT":"Vaxart Inc.","VXUS":"Vanguard Total International Stock","VXX":"iPath Series B S&P 500 VIX Short-Term Futures ETN","VXZ":"iPath Series B S&P 500 VIX Mid-Term Futures ETN","VYGR":"Voyager Therapeutics Inc.","VYM":"Vanguard High Dividend Yield","VYMI":"Vanguard International High Dividend Yield ETF","VZ":"Verizon Communications Inc.","W":"Wayfair Inc. Class A","WAAS":"AquaVenture Holdings Limited","WAB":"Westinghouse Air Brake Technologies Corporation","WABC":"Westamerica Bancorporation","WAFD":"Washington Federal Inc.","WAFU":"Wah Fu Education Group Limited","WAGE":"WageWorks Inc.","WAIR":"Wesco Aircraft Holdings Inc.","WAL":"Western Alliance Bancorporation (DE)","WALA":"Western Alliance Bancorporation 6.25% Subordinated Debentures due 2056","WANT":"Direxion Daily Consumer Discretionary Bull 3X Shares","WASH":"Washington Trust Bancorp Inc.","WAT":"Waters Corporation","WATT":"Energous Corporation","WB":"Weibo Corporation","WBA":"Walgreens Boots Alliance Inc.","WBAI":"500.com Limited American Depositary Shares each representing 10 Class A shares","WBAL":"WisdomTree Balanced Income Fund","WBC":"Wabco Holdings Inc.","WBIA":"WBI BullBear Rising Income 2000","WBIB":"WBI BullBear Value 2000","WBIC":"WBI BullBear Yield 2000","WBID":"WBI BullBear Quality 2000","WBIE":"WBI BullBear Rising Income 1000","WBIF":"WBI BullBear Value 1000","WBIG":"WBI BullBear Yield 1000","WBII":"WBI BullBear Global Income","WBIL":"WBI BullBear Quality 1000","WBIT":"Absolute Shares Trust WBI BullBear Trend Switch US 3000 Total Return","WBIY":"WBI Power Factor High Dividend","WBK":"Westpac Banking Corporation","WBND":"Western Asset Total Return ETF","WBS":"Webster Financial Corporation","WBS-F":"Webster Financial Corporation Depositary Shares Series F","WBT":"Welbilt Inc.","WCC":"WESCO International Inc.","WCFB":"WCF Bancorp Inc.","WCG":"Wellcare Health Plans Inc.","WCHN":"WisdomTree ICBCCS S&P China 500 Fund","WCN":"Waste Connections Inc.","WD":"Walker & Dunlop Inc","WDAY":"Workday Inc.","WDC":"Western Digital Corporation","WDFC":"WD-40 Company","WDIV":"SPDR S&P Global Dividend","WDR":"Waddell & Reed Financial Inc.","WDRW":"Direxion Daily Regional Banks Bear 3X Shares","WEA":"Western Asset Bond Fund Share of Beneficial Interest","WEAT":"Teucrium Wheat Fund ETV","WEBK":"Wellesley Bancorp Inc.","WEC":"WEC Energy Group Inc.","WEI":"Weidai Ltd. American depositary shares each representing one (1) Class A","WELL":"Welltower Inc.","WEN":"Wendy's Company (The)","WERN":"Werner Enterprises Inc.","WES":"Western Midstream Partners LP Representing Limited Partner Interests","WETF":"WisdomTree Investments Inc.","WEX":"WEX Inc.","WEYS":"Weyco Group Inc.","WF":"Woori Financial Group Inc. American Depositary Shares (each representing three (3) shares of)","WFC":"Wells Fargo & Company","WFC-L":"Wells Fargo & Company 7.50% Non-Cumulative Perpetual Convertible Class A Preferred Stock Series L","WFC-N":"Wells Fargo & Company Dep Shs Repstg 1/1000th Perp Pfd Cl A Ser N","WFC-O":"Wells Fargo & Company Depositary Shares Series O","WFC-P":"Wells Fargo & Company Dep Shs Repstg 1/1000th Int Non Cum Perp Cl A Pfd (Ser P)","WFC-Q":"Wells Fargo & Company Depositary Shares Series Q","WFC-R":"Wells Fargo & Company Dep Shs Repstg 1/1000th Int Perp Pfd Cl A (Ser R Fixed To Flltg)","WFC-T":"Wells Fargo & Company New Depository Share Representing 1/1000th Perp. Preferred Class A Series T","WFC-V":"Wells Fargo & Company Depositary Shares Series V","WFC-W":"Wells Fargo & Company Depositary Shares Series W","WFC-X":"Wells Fargo & Company Depositary Shares Series X","WFC-Y":"Wells Fargo & Company Depositary Shares Series Y","WFE-A":"Wells Fargo & Company Cumulative Perpetual Preferred Stock Series A Liquidation Preference $25 per share","WFHY":"WisdomTree Fundamental U.S. High Yield Corporate Bond Fund","WFIG":"WisdomTree Fundamental U.S. Corporate Bond Fund","WGO":"Winnebago Industries Inc.","WH":"Wyndham Hotels & Resorts Inc.","WHD":"Cactus Inc. Class A","WHF":"WhiteHorse Finance Inc.","WHFBZ":"","WHG":"Westwood Holdings Group Inc","WHLM":"Wilhelmina International Inc.","WHLR":"Wheeler Real Estate Investment Trust Inc.","WHLRD":"Wheeler Real Estate Investment Trust Inc. Series D Cumulative Preferred Stock","WHLRP":"Wheeler Real Estate Investment Trust Inc. Series B Preferred Stock","WHR":"Whirlpool Corporation","WIA":"Western Asset Inflation-Linked Income Fund","WIFI":"Boingo Wireless Inc.","WIL":"Barclays PLC Women in Leadership ETN","WILC":"G. Willi-Food International  Ltd.","WINA":"Winmark Corporation","WINC":"Western Asset Short Duration Income ETF","WING":"Wingstop Inc.","WINS":"Wins Finance Holdings Inc.","WIP":"SPDR FTSE International Government Inflation-Protected Bond","WIRE":"Encore Wire Corporation","WISA":"Summit Wireless Technologies Inc.","WIT":"Wipro Limited","WIW":"Western Asset Inflation-Linked Opportunities & Income Fund","WIX":"Wix.com Ltd.","WK":"Workiva Inc. Class A","WKHS":"Workhorse Group Inc.","WLDN":"Willdan Group Inc.","WLDR":"Affinity World Leaders Equity","WLFC":"Willis Lease Finance Corporation","WLH":"Lyon William Homes (Class A)","WLK":"Westlake Chemical Corporation","WLKP":"Westlake Chemical Partners LP representing limited partner interests","WLL":"Whiting Petroleum Corporation","WLTW":"Willis Towers Watson Public Limited Company","WM":"Waste Management Inc.","WMB":"Williams Companies Inc. (The)","WMC":"Western Asset Mortgage Capital Corporation","WMGI":"Wright Medical Group N.V.","WMK":"Weis Markets Inc.","WMS":"Advanced Drainage Systems Inc.","WMT":"Walmart Inc.","WNC":"Wabash National Corporation","WNEB":"Western New England Bancorp Inc.","WNS":"WNS (Holdings) Limited Sponsored ADR (Jersey)","WOMN":"Impact Shares Trust I ETF YWCA Womenas Empowerment","WOOD":"iShares S&P Global Timber & Forestry Index Fund","WOR":"Worthington Industries Inc.","WORK":"Slack Technologies Inc. Class A","WORX":"SCWorx Corp.","WOW":"WideOpenWest Inc.","WP":"Worldpay Inc. Class A","WPC":"W.P. Carey Inc. REIT","WPG":"Washington Prime Group Inc.","WPG-H":"Washington Prime Group Inc. 7.5% Series H Cumulative Redeemable Preferred SBI","WPG-I":"Washington Prime Group Inc. 6.875% Series I Cumulative Redeemable Preferred SBI","WPM":"Wheaton Precious Metals Corp (Canada)","WPP":"WPP plc American Depositary Shares","WPRT":"Westport Fuel Systems Inc","WPS":"iShares International Developed Property","WPX":"WPX Energy Inc.","WRB":"W.R. Berkley Corporation","WRB-B":"W.R. Berkley Corporation 5.625% Subordinated Debentures due 2053","WRB-C":"","WRB-D":"W.R. Berkley Corporation 5.75% Subordinated Debentures due 2056","WRB-E":"W.R. Berkley Corporation 5.70% Subordinated Debentures due 2058","WRE":"Washington Real Estate Investment Trust","WRI":"Weingarten Realty Investors","WRK":"Westrock Company","WRLD":"World Acceptance Corporation","WRLS":"Pensare Acquisition Corp.","WRLSR":"Pensare Acquisition Corp. Right","WRLSU":"Pensare Acquisition Corp. Unit","WRLSW":"Pensare Acquisition Corp. Warrant","WRN":"Western Copper and Gold Corporation","WRTC":"Wrap Technologies Inc.","WSBC":"WesBanco Inc.","WSBF":"Waterstone Financial Inc.","WSC":"WillScot Corporation","WSFS":"WSFS Financial Corporation","WSM":"Williams-Sonoma Inc. (DE)","WSO":"Watsco Inc.","WSO.B":"Watsco Inc. Class B","WSR":"Whitestone REIT","WST":"West Pharmaceutical Services Inc.","WSTG":"Wayside Technology Group Inc.","WSTL":"Westell Technologies Inc.","WTBA":"West Bancorporation","WTER":"The Alkaline Water Company Inc.","WTFC":"Wintrust Financial Corporation","WTFCM":"Wintrust Financial Corporation Fixed-to-Floating Rate Non-Cumulative Perpetual Preferred Stock Series D","WTI":"W&T Offshore Inc.","WTID":"UBS ETRACS - ProShares Daily 3x Inverse Crude ETN","WTIU":"UBS ETRACS - ProShares Daily 3x Long Crude ETN","WTM":"White Mountains Insurance Group Ltd.","WTMF":"WisdomTree Managed Futures Strategy Fund","WTR":"Aqua America Inc.","WTRE":"Watford Holdings Ltd.","WTREP":"Watford Holdings Ltd. 8.25% Cumulative Redeemable Preference Shares","WTRH":"Waitr Holdings Inc.","WTRU":"Aqua America Inc. 6.00% Tangible Equity Units","WTS":"Watts Water Technologies Inc. Class A","WTT":"Wireless Telecom Group Inc.","WTTR":"Select Energy Services Inc. Class A","WU":"Western Union Company (The)","WUBA":"58.com Inc. American Depositary Shares each representing 2 Class A","WVE":"Wave Life Sciences Ltd.","WVFC":"WVS Financial Corp.","WVVI":"Willamette Valley Vineyards Inc.","WVVIP":"Willamette Valley Vineyards Inc. Series A Redeemable Preferred Stock","WW":"Weight Watchers International Inc","WWD":"Woodward Inc.","WWE":"World Wrestling Entertainment Inc. Class A","WWR":"Westwater Resources Inc.","WWW":"Wolverine World Wide Inc.","WY":"Weyerhaeuser Company","WYDE":"ProShares CDS Short North American HY Credit","WYND":"Wyndham Destinations Inc. Common Stock","WYNN":"Wynn Resorts Limited","WYY":"WidePoint Corporation","X":"United States Steel Corporation","XAN":"Exantas Capital Corp.","XAN-C":"Exantas Capital Corp.","XAR":"SPDR S&P Aerospace & Defense","XBI":"SPDR Series Trust S&P Biotech","XBIO":"Xenetic Biosciences Inc.","XBIT":"XBiotech Inc.","XBUY":"Amplify International Online Retail","XCEM":"Columbia EM Core ex-China","XCOM":"ProShares Ultra Communication Services Select Sector","XDIV":"U.S. Equity Ex-Dividend Fund Series 2027 Shares","XEC":"Cimarex Energy Co","XEL":"Xcel Energy Inc.","XELA":"Exela Technologies Inc.","XELB":"Xcel Brands Inc","XENE":"Xenon Pharmaceuticals Inc.","XENT":"Intersect ENT Inc.","XERS":"Xeris Pharmaceuticals Inc.","XES":"SPDR Series Trust S&P Oil & Gas Equipment & Services","XFLT":"XAI Octagon Floating Rate & Alternative Income Term Trust of Beneficial Interest","XFOR":"X4 Pharmaceuticals Inc.","XHB":"SPDR Series Trust Homebuilders","XHE":"SPDR S&P Health Care Equipment","XHR":"Xenia Hotels & Resorts Inc.","XHS":"SPDR S&P Health Care Services","XIN":"Xinyuan Real Estate Co Ltd American Depositary Shares","XITK":"SPDR FactSet Innovative Technology","XLB":"Materials Select Sector SPDR","XLC":"The Communication Services Select Sector SPDR Fund","XLE":"SPDR Select Sector Fund - Energy Select Sector","XLEY":"Cushing Energy & MLP","XLF":"SPDR Select Sector Fund - Financial","XLG":"Invesco S&P 500 Top 50","XLI":"SPDR Select Sector Fund - Industrial","XLK":"SPDR Select Sector Fund - Technology","XLNX":"Xilinx Inc.","XLP":"SPDR Select Sector Fund - Consumer Staples","XLRE":"Real Estate Select Sector SPDR Fund (The)","XLRN":"Acceleron Pharma Inc.","XLSR":"SPDR SSGA U.S. Sector Rotation","XLSY":"Cushing Energy Supply Chain & MLP","XLTY":"Cushing Transportation & MLP","XLU":"SPDR Select Sector Fund - Utilities","XLUY":"Cushing Utility & MLP","XLV":"SPDR Select Sector Fund - Health Care","XLY":"SPDR Select Sector Fund - Consumer Discretionary","XME":"SPDR S&P Metals & Mining","XMHQ":"Invesco S&P MidCap Quality","XMLV":"Invesco S&P MidCap Low Volatility","XMMO":"Invesco S&P MidCap Momentum","XMPT":"VanEck Vectors CEF Municipal Income","XMVM":"Invesco S&P MidCap Value with Momentum","XMX":"WisdomTree Global ex-Mexico Equity Fund","XNCR":"Xencor Inc.","XNET":"Xunlei Limited","XNTK":"SPDR NYSE Technology","XOG":"Extraction Oil & Gas Inc.","XOM":"Exxon Mobil Corporation","XOMA":"XOMA Corporation","XON":"Intrexon Corporation","XONE":"The ExOne Company","XOP":"SPDR S&P Oil & Gas Explor & Product","XPER":"Xperi Corporation","XPH":"SPDR S&P Pharmaceuticals","XPL":"Solitario Zinc Corp.","XPO":"XPO Logistics Inc.","XPP":"ProShares Ultra FTSE China 50","XRAY":"DENTSPLY SIRONA Inc.","XRF":"China Rapid Finance Limited American Depositary Shares each representing one Class A","XRLV":"Invesco S&P 500 ex-Rate Sensitive Low Volatility","XRT":"SPDR S&P Retail","XRX":"Xerox Corporation","XSD":"SPDR S&P Semiconductor","XSHD":"Invesco S&P SmallCap High Dividend Low Volatility","XSHQ":"Invesco S&P SmallCap Quality","XSLV":"Invesco S&P SmallCap Low Volatility","XSMO":"Invesco S&P SmallCap Momentum","XSOE":"WisdomTree Emerging Markets Ex-State Owned Enterprises Fund","XSPA":"XpresSpa Group Inc.","XSVM":"Invesco S&P SmallCap Value with Momentum","XSW":"SPDR S&P Software & Services","XT":"iShares Exponential Technologies ETF","XTH":"SPDR S&P Technology Hardware","XTL":"SPDR S&P Telecom","XTLB":"XTL Biopharmaceuticals Ltd.","XTN":"SPDR S&P Transportation","XTNT":"Xtant Medical Holdings Inc.","XVZ":"iPath S&P 500 Dynamic VIX ETN","XWEB":"SPDR S&P Internet","XXII":"22nd Century Group Inc.","XYF":"X Financial American Depositary Shares each representing two Class A","XYL":"Xylem Inc. New","XYN":"Xynomic Pharmaceuticals Holdings Inc.","XYNPW":"Xynomic Pharmaceuticals Holdings Inc. Warrant","Y":"Alleghany Corporation","YANG":"Direxion Daily FTSE China Bear 3x Shares","YCBD":"cbdMD Inc.","YCL":"ProShares Ultra Yen","YCOM":"ProShares UltraShort Communication Services Select Sector","YCS":"ProShares UltraShort Yen New","YELP":"Yelp Inc.","YETI":"YETI Holdings Inc.","YEXT":"Yext Inc.","YGRN":"MicroSectors U.S. Big Oil Index Inverse ETN","YGTY":"SSLJ.com Limited","YGYI":"Youngevity International Inc.","YI":"111 Inc.","YIN":"Yintech Investment Holdings Limited","YINN":"Direxion Daily FTSE China Bull 3x Shares","YJ":"Yunji Inc.","YLCO":"Global X YieldCo & Renewable Energy Income ETF","YLD":"Principal Active Income","YLDE":"ClearBridge Dividend Strategy ESG ETF","YMAB":"Y-mAbs Therapeutics Inc.","YMLI":"VanEck Vectors High Income Infrastructure MLP","YMLP":"VanEck Vectors High Income MLP","YNDX":"Yandex N.V.","YOGA":"YogaWorks Inc.","YOLO":"AdvisorShares Pure Cannabis","YORW":"The York Water Company","YPF":"YPF Sociedad Anonima","YRCW":"YRC Worldwide Inc.","YRD":"Yirendai Ltd. American Depositary Shares each representing two","YRIV":"Yangtze River Port and Logistics Limited","YTEN":"Yield10 Bioscience Inc.","YTRA":"Yatra Online Inc.","YUM":"Yum! Brands Inc.","YUMA":"Yuma Energy Inc.","YUMC":"Yum China Holdings Inc.","YVR":"Liquid Media Group Ltd.","YXI":"ProShares Short FTSE China 50","YY":"YY Inc.","YYY":"YieldShares High Income","Z":"Zillow Group Inc.","ZAGG":"ZAGG Inc","ZAYO":"Zayo Group Holdings Inc.","ZAZZT":"","ZB-A":"Zions Bancorporation N.A. Depositary Shares Series A","ZB-G":"Zions Bancorporation N.A. Dep Shs Repstg 1/40th Perp Pfd Ser G","ZB-H":"Zions Bancorporation N.A. Dep Shs Repstg 1/40th Int Sh Ser H Perp Pfd Stk","ZBH":"Zimmer Biomet Holdings Inc.","ZBIO":"ProShares UltraPro Short NASDAQ Biotechnology","ZBK":"Zions Bancorporation N.A. 6.95% Fixed-to-Floating Rate Subordinated Notes due September 15 2028","ZBRA":"Zebra Technologies Corporation","ZBZX":"","ZBZZT":"","ZCAN":"SPDR Solactive Canada","ZCZZT":"","ZDEU":"SPDR Solactive Germany","ZDGE":"Zedge Inc. Class B","ZEAL":"Zealand Pharma A/S","ZEN":"Zendesk Inc.","ZEUS":"Olympic Steel Inc.","ZEXIT":"ZEXIT Test Incorporated","ZF":"Virtus Total Return Fund Inc.","ZFGN":"Zafgen Inc.","ZG":"Zillow Group Inc.","ZGBR":"SPDR Solactive United Kingdom","ZGNX":"Zogenix Inc.","ZHOK":"SPDR Solactive Hong Kong","ZIEXT":"ZIEXT Test Incorporated","ZIG":"The Acquirers Fund","ZION":"Zions Bancorporation N.A.","ZIONW":"Zions Bancorporation N.A. Warrants 05/21/2020","ZIOP":"ZIOPHARM Oncology Inc","ZIV":"VelocityShares Daily Inverse VIX Medium Term ETN","ZIXI":"Zix Corporation","ZJPN":"SPDR Solactive Japan","ZJZZT":"","ZKIN":"ZK International Group Co. Ltd","ZLAB":"Zai Lab Limited","ZM":"Zoom Video Communications Inc.","ZMLP":"Direxion Zacks MLP High Income Index Shares","ZN":"Zion Oil","ZNGA":"Zynga Inc.","ZNH":"China Southern Airlines Company Limited","ZNWAA":"","ZOM":"Zomedica Pharmaceuticals Corp.","ZROZ":"PIMCO 25 Year Zero Coupon U.S. Treasury Index Exchange-Traded Fund","ZS":"Zscaler Inc.","ZSAN":"Zosano Pharma Corporation","ZSL":"ProShares UltraShort Silver","ZTEST":"","ZTO":"ZTO Express (Cayman) Inc. American Depositary Shares each representing one Class A.","ZTR":"Virtus Global Dividend & Income Fund Inc.","ZTS":"Zoetis Inc. Class A","ZUMZ":"Zumiez Inc.","ZUO":"Zuora Inc. Class A","ZVO":"Zovio Inc.","ZVV":"","ZVVV":"","ZVZZT":"NASDAQ TEST STOCK","ZWZZT":"NASDAQ TEST STOCK","ZXIET":"ZXIET Test Incorporated","ZXZZT":"NASDAQ TEST STOCK","ZYME":"Zymeworks Inc.","ZYNE":"Zynerba Pharmaceuticals Inc.","ZYXI":"Zynex Inc.","BTCUSDT":"Bitcoin USD","EOSUSDT":"EOS USD","ETHUSDT":"Ethereum USD","BNBUSDT":"Binance Coin USD","ONTUSDT":"Ontology USD","BCCUSDT":"Bitcoin Cash USD","ADAUSDT":"Cardano USD","XRPUSDT":"Ripple USD","TUSDUSDT":"TrueUSD","TRXUSDT":"TRON USD","LTCUSDT":"Litecoin USD","ETCUSDT":"Ethereum Classic USD","IOTAUSDT":"MIOTA USD","ICXUSDT":"ICON USD","NEOUSDT":"NEO USD","VENUSDT":"VeChain USD","XLMUSDT":"Stellar Lumens USD","QTUMUSDT":"Qtum USD"};

/***/ }),

/***/ "./app/components/utils.js":
/*!*********************************!*\
  !*** ./app/components/utils.js ***!
  \*********************************/
/*! exports provided: logoUrl, blurb, isDesktop, isCell, isTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoUrl", function() { return logoUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blurb", function() { return blurb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDesktop", function() { return isDesktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCell", function() { return isCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTab", function() { return isTab; });
var logoUrl = "../assets/graphql_logo.png";
var blurb = 'Graff Exchange, a real-time stock portfolio application built with a full stack: React, Redux, Sass, Socket.io, Node.js, GraphQL, Redis, PostgreSQL, and AWS.';
function isDesktop() {
  return window.outerWidth > 1100;
}
function isCell() {
  return window.outerWidth < 601;
}
function isTab() {
  return !isCell && !isDesktop;
}

/***/ }),

/***/ "./store/Portfolio/action_constants_for_Portfolio.js":
/*!***********************************************************!*\
  !*** ./store/Portfolio/action_constants_for_Portfolio.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	HYDRATEPORTFOLIO : 'HYDRATEPORTFOLIO',
	MAKETRADE : 'MAKETRADE',
	GETONEPRICE : 'GETONEPRICE',
	GETOPENINGPRICE : 'GETOPENINGPRICE',
	HANDLESOCKETMESSAGE : 'HANDLESOCKETMESSAGE',
	HANDLENEWS : 'HANDLENEWS',
	HANDLEFINANCIALS : 'HANDLEFINANCIALS',
	HANDLEHISTORICALPRICE : 'HANDLEHISTORICALPRICE',
	HANDLESYMBOLSELECT : 'HANDLESYMBOLSELECT',
});

/***/ }),

/***/ "./store/Portfolio/actions_for_Portfolio.js":
/*!**************************************************!*\
  !*** ./store/Portfolio/actions_for_Portfolio.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_constants_for_Portfolio */ "./store/Portfolio/action_constants_for_Portfolio.js");


const hydratePortfolio = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].HYDRATEPORTFOLIO,
      		payload
      	}
      }

const makeTrade = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].MAKETRADE,
      		payload
      	}
      }

const getOnePrice = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].GETONEPRICE,
      		payload
      	}
      }

const getOpeningPrice = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].GETOPENINGPRICE,
      		payload
      	}
      }

const handleSocketMessage = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLESOCKETMESSAGE,
      		payload
      	}
      }

const handleNews = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLENEWS,
      		payload
      	}
      }

const handleFinancials = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLEFINANCIALS,
      		payload
      	}
      }

const handleHistoricalPrice = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLEHISTORICALPRICE,
      		payload
      	}
      }

const handleSymbolSelect = (payload) => {
      	return {
      		type: _action_constants_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].HANDLESYMBOLSELECT,
      		payload
      	}
      }

/* harmony default export */ __webpack_exports__["default"] = ({
	hydratePortfolio,
	makeTrade,
	getOnePrice,
	getOpeningPrice,
	handleSocketMessage,
	handleNews,
	handleFinancials,
	handleHistoricalPrice,
	handleSymbolSelect,
});

/***/ }),

/***/ "./store/Portfolio/thunks_for_Portfolio.js":
/*!*************************************************!*\
  !*** ./store/Portfolio/thunks_for_Portfolio.js ***!
  \*************************************************/
/*! exports provided: hydratePortfolioThunk, hydrateSinglePortfolioPage, makeTradeThunk, hydrateNewsThunk, hydrateQuarterlyFinancialsThunk, hydrateTimeSeriesDataThunk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydratePortfolioThunk", function() { return hydratePortfolioThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateSinglePortfolioPage", function() { return hydrateSinglePortfolioPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTradeThunk", function() { return makeTradeThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateNewsThunk", function() { return hydrateNewsThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateQuarterlyFinancialsThunk", function() { return hydrateQuarterlyFinancialsThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateTimeSeriesDataThunk", function() { return hydrateTimeSeriesDataThunk; });
/* harmony import */ var _actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions_for_Portfolio */ "./store/Portfolio/actions_for_Portfolio.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/main */ "./app/main.js");




let hydratePortfolioThunk = ( token ) => async dispatch => {
 
  const query = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`query hydrate_portfolio_query($token: String){
                      hydrate_portfolio(token: $token){
                        holdings {
                          user_data{
                            symbol
                          }
                          ohlc_data{
                            companyName
                            latestPrice 
                            change
                            changePercent
                            open 
                          }
                        }
                      }
                    }`
 
  let response

  const variables = { token }

    try {

      let { data : { hydrate_portfolio } } = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].query({ query, variables })
      
      response = hydrate_portfolio
    }
    catch(error){

      // invalid token error 
      if(error.networkError){
        
        // the object return from Apollo
        // is very nested
        response = error.networkError.result.errors[0].message
      }
      else{

        response = error 
      }
    }

  dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].hydratePortfolio( response ))
};

// called by web version after log in 

const hydrateSinglePortfolioPage = ( selectedPortfolioItem ) => async dispatch => {

  const symbol  = selectedPortfolioItem

  const query = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`query individual_stock_data_call($symbol:String){
  
    all_individual_stock_data(symbol: $symbol ){
      
      news{
        title
        date
        text
        image_url 
        news_url 
      }
      quarterly_financials {
        data
      }
      time_series {
        date
        open
        high
        low
        close
      }
    }
  }`

  let variables = { symbol }

  let news
  let quarterly_financials 
  let historical 

  try {

    let { data : {all_individual_stock_data} } = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].query({ query, variables })
      
    news = all_individual_stock_data.news
    quarterly_financials = JSON.parse(all_individual_stock_data.quarterly_financials.data)
    historical = all_individual_stock_data.time_series
  }
  catch(error){

    console.log(error)
  }

  dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].handleNews({ symbol, news }))

  dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].handleFinancials({ symbol, quarterly_financials }))

  dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].handleHistoricalPrice({ symbol, historical }))

}

const makeTradeThunk = (symbol, quantity, type, price, isNewSymbol) => async dispatch => {
  
    // refactor this 
    const graphQL_string =  !isNewSymbol ? `mutation make_trade_mutation_call($input: make_transaction_input) {

      make_trade_mutation(input: $input) {
        
        transaction_result {
          
          symbol
          balance 
          new_holding
          
          transaction {

            symbol 
            quantity
            price 
            type
            date_conducted
          }
        }
      }
    }` : `mutation make_trade_mutation_call($input: make_transaction_input) {

      make_trade_mutation(input: $input) {

        transaction_result {
          symbol
          balance 
          new_holding 

          transaction {
            symbol 
            quantity
            price 
            type
            date_conducted
          }
        }

        ohlc_data{
          companyName
          latestPrice
          change
          changePercent
          open
        }

      }
    
    }`
    
    const mutation = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`${graphQL_string}`

    quantity = Number(quantity)

    let variables = { input : { symbol, quantity, type, price } }

    let response

    try {

      let { data : { make_trade_mutation } } = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].mutate({ mutation, variables })
      
      response = make_trade_mutation
    }
    catch(error){

      console.log(error)
    }

    let { transaction_result } = response 

    if(response.ohlc_data){

      let { ohlc_data } = response

      dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].makeTrade({ transaction_result, ohlc_data })) 
    }
    else{
      
      dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].makeTrade({ transaction_result })) 
    }  
};

const hydrateNewsThunk = ( symbol ) => async dispatch =>{

  const query = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`query hydrate_news_query($symbol: String){
  
    hydrate_news(symbol: $symbol){
      title
      date
      text
      image_url
      news_url
    }
  }`

  const variables = { symbol }

  let response

  try {

    let { data : {hydrate_news}} = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].query({ query, variables })
    
    response = hydrate_news
  }
  catch(error){

    console.log(error)
  }

  dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].handleNews({news: response, symbol}))
} 

let hydrateQuarterlyFinancialsThunk = ( symbol ) => async dispatch =>{

  const query = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`query hydrate_quarterly_financials_query($symbol: String){
  
    hydrate_quarterly_financials(symbol: $symbol){
      data
    }
  }`

  const variables = { symbol }

  let response

  try {

    let { data : { hydrate_quarterly_financials }} = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].query({ query, variables })
    
    response = hydrate_quarterly_financials

    
  }
  catch(error){
    
    console.log(error)
  }
  
  dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].handleFinancials({quarterly_financials: JSON.parse(response.data), symbol}))
} 

const hydrateTimeSeriesDataThunk = ( symbol ) => async dispatch =>{

  const query = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`query hydrate_time_series_data_query($symbol: String){
  
    hydrate_time_series_data(symbol: $symbol){
      date
      open
      high
      low
      close
    }
  }`

  const variables = { symbol }

  let response

  try {

    let { data : { hydrate_time_series_data }} = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].query({ query, variables })
    
    response = hydrate_time_series_data
  }
  catch(error){

    console.log(error)
  }

  dispatch(_actions_for_Portfolio__WEBPACK_IMPORTED_MODULE_0__["default"].handleHistoricalPrice({historical: response, symbol}))
} 

/* harmony default export */ __webpack_exports__["default"] = ({
	hydratePortfolioThunk,
	makeTradeThunk,
});


/***/ }),

/***/ "./store/User/actions_for_User.js":
/*!****************************************!*\
  !*** ./store/User/actions_for_User.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_constants_for_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_constants_for_User */ "./store/User/action_constants_for_User.js");


const login = (payload) => {
      	return {
      		type: _action_constants_for_User__WEBPACK_IMPORTED_MODULE_0__["default"].LOGIN,
      		payload
      	}
      }

const LogOut = (payload) => {
      	return {
      		type: _action_constants_for_User__WEBPACK_IMPORTED_MODULE_0__["default"].LOGOUT,
      		payload
      	}
      }

/* harmony default export */ __webpack_exports__["default"] = ({
	login,
	LogOut,
});

/***/ }),

/***/ "./store/User/thunks_for_User.js":
/*!***************************************!*\
  !*** ./store/User/thunks_for_User.js ***!
  \***************************************/
/*! exports provided: loginThunk, registerThunk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginThunk", function() { return loginThunk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerThunk", function() { return registerThunk; });
/* harmony import */ var _app_components_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/components/utils */ "./app/components/utils.js");
/* harmony import */ var _actions_for_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions_for_User */ "./store/User/actions_for_User.js");
/* harmony import */ var _app_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/main */ "./app/main.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);





const loginThunk = (email, password) => async dispatch => {

  const OHLC_data = `ohlc_data {
                      latestPrice
                      companyName
                      change
                      changePercent
                      open
                    }`

  const full_query = `login(email: $email, password: $password){
    email
    first_name
    last_name 
    token
    balance
    holdings {
      user_data {
        symbol
        current_holding
      }
      ${ Object(_app_components_utils__WEBPACK_IMPORTED_MODULE_0__["isCell"])() ? OHLC_data : ``}
    }
    transaction_history{
      id
      type
      symbol
      quantity
      price
      date_conducted
    }
  }
  `  

  const query = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`query login_call($email: String, $password: String) {
    ${full_query}
  }`

  let variables = { email, password }

  let response

  try {

    let { data : { login } } = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].query({ query, variables })
    
    response = login

    localStorage.setItem("token", response.token)
  }
  catch(error){

    response = error 

    console.log(error)
  }
  
  dispatch(_actions_for_User__WEBPACK_IMPORTED_MODULE_1__["default"].login(response))
};

const registerThunk = ( first_name, last_name, email, password ) => async dispatch => {
  
  const mutation = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`mutation sign_up_call($input: sign_up_input) {

    sign_up(input: $input){
      email
      first_name
      last_name 
      token
      balance
      holdings {
        user_data {
          symbol
          current_holding
        }
        ohlc_data {
          latestPrice
          companyName
          change
          changePercent
          open
        }
      }
      transaction_history{
        id
        type
        symbol
        quantity
        price
        date_conducted
      }
    }
  }`

  let variables = { input : { first_name, last_name, email, password } }

  let response

  try {

    let { data : { sign_up } } = await _app_main__WEBPACK_IMPORTED_MODULE_2__["client"].mutate({ mutation, variables })
    
    response = sign_up
  }
  catch(error){

    console.log(error)
  }

  localStorage.setItem("token", response.token)
  
  dispatch(_actions_for_User__WEBPACK_IMPORTED_MODULE_1__["default"].login(response))
};

/* harmony default export */ __webpack_exports__["default"] = ({
	loginThunk,
	registerThunk,
});

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=2.3a69ada2c0f7ebae977e.js.map