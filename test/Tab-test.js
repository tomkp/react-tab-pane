import expect from 'expect.js';
import React from 'react/addons';
let { TestUtils } = React.addons;
import Tab from '../src/Tab';


describe('Tab', function () {

    const tab = TestUtils.renderIntoDocument(
        <Tab />
    );

    it('renders the Tab', function () {
        const component = TestUtils.findRenderedDOMComponentWithClass(tab, 'Tab');
    });

});