import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
var TabPane = require('../src/TabPane');
var Tab = require('../src/Tab');

describe('TabPane', function () {

    var tabPane = TestUtils.renderIntoDocument(
        <TabPane orientation="horizontal" className="my-tabs">
            <Tab id="A" name="A">some stuff</Tab>
            <Tab id="B" name="B" active="true">whatevs</Tab>
            <Tab id="C" name="C">innit</Tab>
        </TabPane>
    );

    it('renders the TabPane', function () {
        var component = TestUtils.findRenderedDOMComponentWithClass(tabPane, 'TabPane');
    });

});