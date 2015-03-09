jest.dontMock('../TabPane');
jest.dontMock('../Tab');

var React = require('react/addons');
var TU = React.addons.TestUtils;
var TabPane = require('../TabPane');
var Tab = require('../Tab');


describe('TabPane', function () {

    var tabPane = TU.renderIntoDocument(
        <TabPane orientation="horizontal" className="my-tabs">
            <Tab id="A" name="A">some stuff</Tab>
            <Tab id="B" name="B" active="true">whatevs</Tab>
            <Tab id="C" name="C">innit</Tab>
        </TabPane>
    );

    it('renders the TabPane', function () {
        console.info('renders the TabPane');
        var component = TU.findRenderedDOMComponentWithClass(tabPane, 'TabPane');
    });

});