(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDayCalendar"] = factory(require("react"));
	else
		root["ReactDayCalendar"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _times = __webpack_require__(2);

	var _times2 = _interopRequireDefault(_times);

	var _container = __webpack_require__(3);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	__webpack_require__(6);

	var CalendarComponent = _react2.default.createClass({
	    displayName: 'CalendarComponent',

	    propTypes: {
	        events: _react2.default.PropTypes.array.isRequired,
	        start: _react2.default.PropTypes.number.isRequired,
	        end: _react2.default.PropTypes.number.isRequired
	    },

	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'calendar' },
	            _react2.default.createElement(_times2.default, { start: this.props.start, end: this.props.end }),
	            _react2.default.createElement(_container2.default, { start: this.props.start, end: this.props.end, events: new CalendarConsolidate(this.props.events).events })
	        );
	    }
	});

	var CalendarConsolidate = function () {
	    function CalendarConsolidate(paramEvents) {
	        _classCallCheck(this, CalendarConsolidate);

	        this.listEvents = paramEvents;
	    }

	    _createClass(CalendarConsolidate, [{
	        key: '_overlap',
	        value: function _overlap(paramItemA, paramItemB) {
	            return !(paramItemA.end < paramItemB.start || paramItemA.start > paramItemB.end);
	        }
	    }, {
	        key: 'events',
	        get: function get() {
	            var _this = this;

	            return this.listEvents.reduce(function (acc, item, index) {
	                var _keys = Object.keys(acc);
	                if (_keys.length === 0) {
	                    acc['range' + index] = new Array(item);
	                } else {
	                    (function () {
	                        var _added = false;
	                        _keys.forEach(function (_key) {
	                            if (!_added) {
	                                (function () {
	                                    var _arr = acc[_key];
	                                    _arr.forEach(function (_item) {
	                                        if (!_added && _this._overlap(item, _item)) {
	                                            _added = true;
	                                            _arr.push(item);
	                                        }
	                                    });
	                                })();
	                            }
	                        });

	                        if (!_added) {
	                            acc['range' + index] = [item];
	                        }
	                    })();
	                }

	                return acc;
	            }, {});
	        }
	    }]);

	    return CalendarConsolidate;
	}();

	;

	exports.default = CalendarComponent;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Times components, this is just the component to handle the times column,
	its a simple and could be smarter to extend it like select the range 
	from 9am to 12pm but that it's not on this scope
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CalendarTimesComponent = _react2.default.createClass({
	    displayName: 'CalendarTimesComponent',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'calendar-times' },
	            this._times()
	        );
	    },
	    _times: function _times() {
	        var _times = [];

	        for (var i = this.props.start; i <= this.props.end; i++) {
	            var _target = i <= 12 ? 'AM' : 'PM';
	            var _hour = i;

	            if (_hour > 12) {
	                _hour = _hour - 12;
	            }

	            _times.push(_react2.default.createElement(
	                'div',
	                { className: 'times-hours', key: 'time_key_' + i },
	                _hour + ':00',
	                ' ',
	                _react2.default.createElement(
	                    'span',
	                    null,
	                    _target
	                )
	            ));
	            _times.push(_react2.default.createElement(
	                'div',
	                { className: 'times-half', key: 'time_half_key_' + i },
	                _hour + ':30'
	            ));
	        }
	        //removing the last :30
	        _times.pop();

	        return _times;
	    }
	});

	exports.default = CalendarTimesComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Row and Events container, this component could be smarter and render more 
	row depends on which range the user select (out of this scope)
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _events = __webpack_require__(4);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CalendarContainerComponent = _react2.default.createClass({
	    displayName: 'CalendarContainerComponent',
	    render: function render() {
	        return _react2.default.createElement(
	            'div',
	            { className: 'calendar-container' },
	            this._rows(),
	            _react2.default.createElement(_events2.default, { events: this.props.events, onSelectEvent: this.props.onSelectEvent })
	        );
	    },
	    _rows: function _rows() {
	        var _rows = [];

	        for (var i = 0; i < this.props.end - this.props.start; i++) {
	            _rows.push(_react2.default.createElement('div', { className: 'container-hours', key: 'key_row_' + i }));
	        }

	        return _rows;
	    }
	});

	exports.default = CalendarContainerComponent;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Events manager.
	This component will be listening every change in the structure of events
	and will execute the render with the new events.
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _event2 = __webpack_require__(5);

	var _event3 = _interopRequireDefault(_event2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CalendarEventsComponent = _react2.default.createClass({
	    displayName: 'CalendarEventsComponent',
	    render: function render() {
	        var _this = this;

	        var _eventsComponents = [];

	        for (var key in this.props.events) {
	            if (this.props.events.hasOwnProperty(key)) {
	                (function () {
	                    var _position = 0;
	                    var _events = _this.props.events[key];
	                    _eventsComponents = _eventsComponents.concat(_events.map(function (_event) {
	                        var _key = 'event_key_' + Math.random();
	                        var _component = _react2.default.createElement(_event3.default, { event: _event, key: _key, overlap: _events.length, position: _position, title: _event.title, location: _event.location, onSelectEvent: _this.props.onSelectEvent });
	                        _position++;
	                        return _component;
	                    }));
	                })();
	            }
	        }

	        return _react2.default.createElement(
	            'div',
	            { className: 'calendar-container-events' },
	            _eventsComponents
	        );
	    }
	});

	exports.default = CalendarEventsComponent;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Event component.
	The component will define where he need to appear in the screen,
	every event is independent to the others
	*/

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CalendarContainerComponent = _react2.default.createClass({
	    displayName: 'CalendarContainerComponent',
	    getDefaultProps: function getDefaultProps() {
	        return {
	            title: 'Sample item',
	            location: 'Sample location'
	        };
	    },
	    render: function render() {
	        var _style = {
	            width: 'calc(' + 100 / this.props.overlap + '% - 4px)',
	            left: 100 / this.props.overlap * this.props.position + '%',
	            top: this.props.event.start,
	            height: this.props.event.end - this.props.event.start
	        };

	        return _react2.default.createElement(
	            'div',
	            { className: 'calendar-event', style: _style, onClick: this.handleSelectEvent },
	            _react2.default.createElement(
	                'h1',
	                null,
	                this.props.title
	            ),
	            _react2.default.createElement(
	                'span',
	                null,
	                this.props.location
	            )
	        );
	    },
	    handleSelectEvent: function handleSelectEvent(e) {
	        e.preventDefault();
	        if (this.props.onSelectEvent) {
	            this.props.onSelectEvent(this.props.event);
	        }
	    }
	});

	exports.default = CalendarContainerComponent;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, "section#calendar {\n  font-family: Helvetica, Arial;\n  font-size: 12px;\n  color: #000; }\n  section#calendar .calendar {\n    margin: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    section#calendar .calendar .calendar-times {\n      -webkit-box-flex: 0;\n          -ms-flex-positive: 0;\n              flex-grow: 0;\n      margin-top: -4px;\n      width: 80px;\n      vertical-align: top;\n      text-align: right;\n      margin-right: 10px;\n      font-family: 'PT Sans Narrow', Arial; }\n      section#calendar .calendar .calendar-times .times-hours {\n        font-weight: bold;\n        font-size: 14px;\n        color: #494a4d;\n        line-height: 12px; }\n        section#calendar .calendar .calendar-times .times-hours span {\n          margin-left: 5px;\n          color: #c0c0c0;\n          font-size: 10px; }\n      section#calendar .calendar .calendar-times .times-half {\n        color: #c0c0c0;\n        font-size: 10px;\n        line-height: 8px;\n        margin: 19.5px 0px; }\n    section#calendar .calendar .calendar-container {\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1;\n      width: 100%;\n      height: 720px;\n      border: 2px solid #efefef;\n      border-radius: 1px;\n      position: relative; }\n      section#calendar .calendar .calendar-container .container-hours {\n        box-sizing: border-box;\n        height: 60px;\n        border-top: 2px solid #efefef;\n        width: 100%; }\n        section#calendar .calendar .calendar-container .container-hours:first-child {\n          border-top: 0px; }\n      section#calendar .calendar .calendar-container .calendar-container-events {\n        box-sizing: border-box;\n        position: absolute;\n        overflow: hidden;\n        height: 100%;\n        left: 10px;\n        right: 6px;\n        top: 0px; }\n        section#calendar .calendar .calendar-container .calendar-container-events .calendar-event {\n          box-sizing: border-box;\n          cursor: pointer;\n          padding: 9px 17px;\n          position: absolute;\n          width: 100%;\n          background-color: #f4f4f4;\n          border-radius: 3px;\n          border-left: 8px solid #FF7171;\n          overflow: hidden; }\n          section#calendar .calendar .calendar-container .calendar-container-events .calendar-event h1 {\n            margin: 0px;\n            color: #FF7171;\n            font-size: 15px;\n            font-family: 'PT Sans Narrow', Arial;\n            font-weight: 400; }\n          section#calendar .calendar .calendar-container .calendar-container-events .calendar-event span {\n            font-size: 12px;\n            color: #c6c6c6;\n            font-family: 'PT Sans Narrow', Arial;\n            font-weight: 400; }\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;