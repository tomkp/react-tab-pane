import React from 'react/addons';
import Tab from './Tab';
import VendorPrefix from 'react-vendor-prefix';

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
        let active = this.props.children[0];
        this.props.children.forEach((child) => {
            child.props.parent = this;
            if (child.props.active) {
                active = child;
            } else  if (child.props.active) {
                active = child;
            }
        });
        return {
            activeTab: active
        }
    },


    selectTab(tab) {
        this.setState({
            activeTab: tab
        });
    },


    render() {
        let classes = ['TabPane', this.props.orientation].join(' ');
        let containerStyles;
        if (this.props.orientation === 'vertical') {
            containerStyles = {
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                height: '100%',
                position: 'absolute',
                left: 0,
                right: 0
            };
        } else {
            containerStyles = {
                display: 'flex',
                flex: 1,
                position: 'relative',
                flexDirection: 'column',
                height: '100%',
                minHeight: '100%'
            };
        }

        let tabsStyles;
        let orientation = this.props.orientation;
        if (orientation === 'vertical') {
            tabsStyles = {
                height: '100%'
            };
        } else {
            tabsStyles = {
                flex: 1,
                width: '100%',
                whiteSpace: 'nowrap'
            };
        }

        let paneClasses = ['TabContent', this.props.className].join(' ');
        let paneStyles = {
            flex: 1
        };

        let activeId = this.state.activeTab.props.id;
        let elements = this.props.children.map((child) => {
            let active = child.props.id === activeId;
            return React.addons.cloneWithProps(child, {
                active: active,
                selectTab: this.selectTab,
                orientation: orientation,
                id: child.props.id,
                key: child.props.id
            });
        });

        let styles = VendorPrefix.prefix({
            container: containerStyles,
            tab: tabsStyles,
            pane: paneStyles
        });

        return (
            <div className={classes} style={styles.container} ref="TabPane">
                <div className="Tabs" style={styles.tab}>
                    {elements}
                </div>
                <div className={paneClasses} style={styles.pane}>
                    {this.state.activeTab.props.children}
                </div>
            </div>
        )
    }
});



export default TabPane;