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


module.exports = Tab;