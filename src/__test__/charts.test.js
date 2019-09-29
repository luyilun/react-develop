/* eslint import/no-unresolved:0 */
/* eslint import/no-extraneous-dependencies:0 */
import { shallow } from 'enzyme';
import React from 'react';
import Charts from 'src/component/charts/index';
import BarGraph from 'src/component/barGraph/index';

/* eslint no-undef:0 */

describe('Page Home', () => {
    it('renders without BarGraph"', () => {
        const home = shallow(<Charts />, { disableLifecycleMethods: true });
        expect(home.containsMatchingElement(<BarGraph />)).toBeTruthy();
    });

    it('renders without BarGraph length"', () => {
        const home = shallow(<Charts />, { disableLifecycleMethods: true });
        expect(home.find(BarGraph)).toHaveLength(1);
    });
});