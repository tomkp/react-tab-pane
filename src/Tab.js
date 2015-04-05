import React from 'react/addons';
import VendorPrefix from 'react-vendor-prefix';


let Tab = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired
        //active: React.PropTypes.boolean
    },

    onClick() {
        this.props.selectTab(this);
    },

    render() {
        let classes = ['Tab'];
        if (this.props.active) {
            classes.push('active');
        }
        let tabStyle;
        if (this.props.orientation === 'vertical') {
            tabStyle = {
                cursor: 'pointer',
                display: 'block'
            };
        } else {
            tabStyle = {
                cursor: 'pointer',
                display: 'inline-block'
            };
        }

        let styles = VendorPrefix.prefix({tabStyle: tabStyle});

        return (
            <div className={classes.join(' ')} style={styles.tabStyle} onClick={this.onClick}>
                {this.props.name}
            </div>
        )
    }
});


export default Tab;