"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WETtables = function (_React$Component) {
	_inherits(WETtables, _React$Component);

	function WETtables() {
		_classCallCheck(this, WETtables);

		return _possibleConstructorReturn(this, (WETtables.__proto__ || Object.getPrototypeOf(WETtables)).apply(this, arguments));
	}

	_createClass(WETtables, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.$el = $(this.el);

			// Initialize the Tables plugin
			this.$el.trigger("wb-init.wb-tables");
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {

			// Cleanup code....
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"table",
					{ className: "wb-tables table", ref: function ref(el) {
							return _this2.el = el;
						} },
					this.props.children
				)
			);
		}
	}]);

	return WETtables;
}(React.Component);

function DataTables() {
	return React.createElement(
		"section",
		null,
		React.createElement(
			"h2",
			null,
			"React examples"
		),
		React.createElement(
			WETtables,
			null,
			React.createElement(
				"thead",
				null,
				React.createElement(
					"tr",
					null,
					React.createElement(
						"th",
						null,
						"Rendering engine"
					),
					React.createElement(
						"th",
						null,
						"Browser"
					),
					React.createElement(
						"th",
						null,
						"Platform(s)"
					),
					React.createElement(
						"th",
						null,
						"Engine version"
					),
					React.createElement(
						"th",
						null,
						"CSS grade"
					)
				)
			),
			React.createElement(
				"tbody",
				null,
				React.createElement(
					"tr",
					{ "class": "gradeX" },
					React.createElement(
						"td",
						null,
						"Trident"
					),
					React.createElement(
						"td",
						null,
						"Internet Explorer 4.0"
					),
					React.createElement(
						"td",
						null,
						"Win 95+"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"4"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"X"
					)
				),
				React.createElement(
					"tr",
					{ "class": "gradeC" },
					React.createElement(
						"td",
						null,
						"Trident"
					),
					React.createElement(
						"td",
						null,
						"Internet Explorer 5.0"
					),
					React.createElement(
						"td",
						null,
						"Win 95+"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"5"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"C"
					)
				),
				React.createElement(
					"tr",
					{ "class": "gradeA" },
					React.createElement(
						"td",
						null,
						"Trident"
					),
					React.createElement(
						"td",
						null,
						"Internet Explorer 5.5"
					),
					React.createElement(
						"td",
						null,
						"Win 95+"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"5.5"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"A"
					)
				),
				React.createElement(
					"tr",
					{ "class": "gradeA" },
					React.createElement(
						"td",
						null,
						"Trident"
					),
					React.createElement(
						"td",
						null,
						"Internet Explorer 6"
					),
					React.createElement(
						"td",
						null,
						"Win 98+"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"6"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"A"
					)
				),
				React.createElement(
					"tr",
					{ "class": "gradeA" },
					React.createElement(
						"td",
						null,
						"Trident"
					),
					React.createElement(
						"td",
						null,
						"Internet Explorer 7"
					),
					React.createElement(
						"td",
						null,
						"Win XP SP2+"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"7"
					),
					React.createElement(
						"td",
						{ "class": "center" },
						"A"
					)
				)
			)
		)
	);
}

ReactDOM.render(React.createElement(DataTables, null), document.getElementById('reactDOM1'));