"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react/addons"));

var Tab = React.createClass({
    displayName: "Tab",

    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
        //active: React.PropTypes.boolean
    },

    onClick: function onClick() {
        console.info("Tab.onClick");
        this.props.selectTab(this);
    },

    render: function render() {
        console.info("Tab.render");
        var classes = ["Tab"];
        if (this.props.active) {
            classes.push("active");
        }
        var styles = {
            cursor: "pointer"
        };
        return React.createElement(
            "div",
            { className: classes.join(" "), onClick: this.onClick },
            this.props.name
        );
    }
});

module.exports = Tab;