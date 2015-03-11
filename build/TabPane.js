"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react/addons"));

var Tab = _interopRequire(require("./Tab"));

var prefix = _interopRequire(require("./Prefix"));

var TabPane = React.createClass({
    displayName: "TabPane",

    propTypes: {
        orientation: React.PropTypes.string.isRequired
    },

    getDefaultProps: function getDefaultProps() {
        return {
            orientation: "vertical"
        };
    },

    getInitialState: function getInitialState() {
        var _this = this;

        console.info("TabPane.getInitialState");
        var selected = this.props.children[0];
        this.props.children.forEach(function (child) {
            child.props.parent = _this;
            if (child.props.selected) {
                selected = child;
            }
        });
        return {
            selectedTab: selected
        };
    },

    selectTab: function selectTab(tab) {
        console.info("TabPane.selectTab", tab.props.name);
        this.setState({
            selectedTab: tab
        });
    },

    render: function render() {
        var _this = this;

        console.info("TabPane.render");

        var classes = ["TabPane", this.props.orientation].join(" ");
        var styles = undefined;
        if (this.props.orientation === "vertical") {
            styles = {
                display: "flex",
                flex: 1,
                flexDirection: "row",
                height: "100%",
                position: "absolute",
                left: 0,
                right: 0
            };
        } else {
            styles = {
                display: "flex",
                flex: 1,
                position: "relative",
                flexDirection: "column",
                height: "100%",
                minHeight: "100%"
            };
        }

        var tabsClasses = "Tabs";
        var tabsStyles = undefined;
        if (this.props.orientation === "vertical") {
            tabsStyles = {
                //flex: 1,
                height: "100%"
            };
        } else {
            tabsStyles = {
                flex: 1,
                width: "100%",
                whiteSpace: "nowrap"
            };
        }

        var paneClasses = ["TabPaneDisplay", this.props.className].join(" ");
        var paneStyles = {
            flex: 1
        };

        var selectedId = this.state.selectedTab.props.id;
        var elements = this.props.children.map(function (child) {
            var active = child.props.id === selectedId;
            return React.addons.cloneWithProps(child, {
                active: active,
                selectTab: _this.selectTab,
                id: child.props.id,
                key: child.props.id
            });
        });

        return React.createElement(
            "div",
            { className: classes, style: prefix(styles), ref: "TabPane" },
            React.createElement(
                "div",
                { className: "Tabs", style: prefix(tabsStyles) },
                elements
            ),
            React.createElement(
                "div",
                { className: paneClasses, style: prefix(paneStyles) },
                this.state.selectedTab.props.children
            )
        );
    }
});

module.exports = TabPane;