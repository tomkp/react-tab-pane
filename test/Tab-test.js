import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
var Tab = require('../src/Tab');


describe('Tab', function () {

    var tab = TestUtils.renderIntoDocument(
        <Tab />
    );

    it('renders the Tab', function () {
        var component = TestUtils.findRenderedDOMComponentWithClass(tab, 'Tab');
    });

});