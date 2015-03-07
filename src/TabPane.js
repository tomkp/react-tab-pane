import React from 'react/addons';



let Tab = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
        //active: React.PropTypes.boolean
    },

    onClick() {
        console.info('Tab.onClick');
        this.props.selectTab(this);
    },

    render() {
        console.info('Tab.render');
        let classes = ['Tab'];
        if (this.props.active) {
            classes.push('active');
        }
        return (
            <div className={classes.join(' ')} onClick={this.onClick}>
                {this.props.name}
            </div>
        )
    }
});





let TabPane = React.createClass({

    propTypes: {
        orientation: React.PropTypes.string.isRequired
    },

    getDefaultProps() {
        return {
            orientation: 'vertical'
        }
    },

    getInitialState() {
        console.info('TabPane.getInitialState');
        let selected = this.props.children[0];
        this.props.children.forEach((child) => {
            child.props.parent = this;
            if (child.props.selected) {
                selected = child;
            }
        });
        return {
            selectedTab: selected
        }
    },


    selectTab(tab) {
        console.info('TabPane.selectTab', tab.props.name);
        this.setState({
            selectedTab: tab
        });
    },


    render() {
        console.info('TabPane.render');
        let classes = ['TabPane', this.props.orientation].join(' ');
        let paneClasses = ['TabPaneDisplay', this.props.className].join(' ');
        let selectedid = this.state.selectedTab.props.id;
        let elements = this.props.children.map((child) => {
            let active = child.props.id === selectedid;
            return React.addons.cloneWithProps(child, {
                active: active,
                selectTab: this.selectTab,
                id: child.props.id,
                key: child.props.id
            });
        });

        return (
            <div className={classes} ref="TabPane">
                <div className="tabs">
                    {elements}
                </div>
                <div className={paneClasses}>
                    {this.state.selectedTab.props.children}
                </div>
            </div>
        )
    }
});



module.exports = {
    TabPane: TabPane,
    Tab: Tab
};