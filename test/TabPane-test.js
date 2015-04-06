import expect from 'expect.js';
import React from 'react/addons';
const { TestUtils } = React.addons;
import TabPane from '../src/TabPane';
import Tab from '../src/Tab';

describe('TabPane', function () {

    const tabPane = TestUtils.renderIntoDocument(
        <TabPane orientation="horizontal" className="my-tabs">
            <Tab id="A" name="A">some stuff</Tab>
            <Tab id="B" name="B" active="true">whatevs</Tab>
            <Tab id="C" name="C">innit</Tab>
        </TabPane>
    );


    it('renders the TabPane', function () {
        new Asserter(tabPane)
            .assertTabs(['A', 'B', 'C'])
            .assertActiveTab('B')
        ;
    });


    class Asserter {

        constructor(tabPane) {
            this.component = TestUtils.findRenderedDOMComponentWithClass(tabPane, 'TabPane');
        }

        assertTabs(expectedTabs) {
            let suggestions = TestUtils.scryRenderedDOMComponentsWithClass(this.component, 'Tab');
            const values = suggestions.map((suggestion) => {
                return suggestion.getDOMNode().innerHTML;
            });
            expect(values).to.eql(expectedTabs);
            return this;
        }

        assertTabContentss(expectedTabContents) {
            let suggestions = TestUtils.scryRenderedDOMComponentsWithClass(this.component, 'Tab');
            const values = suggestions.map((suggestion) => {
                return suggestion.getDOMNode().innerHTML;
            });
            expect(values).to.eql(expectedTabContents);
            return this;
        }

        assertActiveTab(expected) {
            let active = TestUtils.findRenderedDOMComponentWithClass(this.component, 'active');
            expect(active.getDOMNode().innerHTML).to.equal(expected);
            return this;
        }
    }

});