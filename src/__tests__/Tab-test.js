jest.dontMock('../Tab');

var React = require('react/addons');
var TU = React.addons.TestUtils;
var Tab = require('../Tab');


describe('Tab', function () {

    var tab = TU.renderIntoDocument(
        <Tab />
    );

    it('renders the Tab', function () {
        console.info('renders the Tab');
        var component = TU.findRenderedDOMComponentWithClass(tab, 'Tab');
    });

});