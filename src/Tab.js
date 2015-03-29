import React from 'react/addons';
import VendorPrefix from 'react-vendor-prefix';


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
        let style;
        if (this.props.orientation === 'vertical') {
            style = {
                cursor: 'pointer',
                display: 'block'
            };
        } else {
            style = {
                cursor: 'pointer',
                display: 'inline-block'
            };
        }

        let prefixed = VendorPrefix.prefix({styles: style});

        return (
            <div className={classes.join(' ')} style={prefixed.styles} onClick={this.onClick}>
                {this.props.name}
            </div>
        )
    }
});


export default Tab;