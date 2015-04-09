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


    it('renders the tabs', function () {
        new Asserter(tabPane)
            .assertTabs(['A', 'B', 'C'])
        ;
    });


    it('indicate active tab', function () {
        new Asserter(tabPane)
            .assertActiveTab('B')
        ;
    });


    it('render active tab contents', function () {
        new Asserter(tabPane)
            .assertTabContents('whatevs')
        ;
    });


    it('click to activate tab', function () {
        new Asserter(tabPane)
            .assertActiveTab('B')
            .activateTab('C')
            .assertActiveTab('C')
        ;
    });


    class Asserter {

        constructor(tabPane) {
            this.component = TestUtils.findRenderedDOMComponentWithClass(tabPane, 'TabPane');
        }

        assertTabs(expectedTabs) {
            const tabs = TestUtils.scryRenderedDOMComponentsWithClass(this.component, 'Tab');
            const values = tabs.map((tab) => {
                return tab.getDOMNode().innerHTML;
            });
            expect(values).to.eql(expectedTabs);
            return this;
        }

        assertTabContents(expectedTabContents) {
            const tabContents = TestUtils.findRenderedDOMComponentWithClass(this.component, 'TabContent');
            expect(tabContents.getDOMNode().innerHTML).to.eql(expectedTabContents);
            return this;
        }

        assertActiveTab(expected) {
            const active = TestUtils.findRenderedDOMComponentWithClass(this.component, 'active');
            expect(active.getDOMNode().innerHTML).to.equal(expected);
            return this;
        }

        activateTab(tabName) {
            const tabs = TestUtils.scryRenderedDOMComponentsWithClass(this.component, 'Tab');
            tabs.forEach((tab) => {
                if (tab.getDOMNode().innerHTML === tabName) {
                    TestUtils.Simulate.click(tab);
                }
            });
            return this;
        }
    }

});