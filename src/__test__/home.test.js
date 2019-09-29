/* eslint import/no-unresolved:0 */
/* eslint import/no-extraneous-dependencies:0 */
import { shallow } from 'enzyme';
import React from 'react';
import Home from 'src/container/home';
import HomeComponent from 'src/component/home/index';
import Charts from 'src/component/charts/index';
import { Link } from 'react-router-dom';

/* eslint no-undef:0 */

describe('Page Home', () => {
    it('renders without crashing"', () => {
        const home = shallow(<Home />);
        expect(home.equals(<HomeComponent />)).toBeTruthy();
    });

    it('is component length', () => {
        const homeComponent = shallow(<HomeComponent />);
        expect(homeComponent.find(Link)).toHaveLength(2);
    });

    it('is includes component', () => {
        const homeComponent = shallow(<HomeComponent />);
        expect(homeComponent.find(Charts)).toHaveLength(1);
    });

    it('is includes component', () => {
        const homeComponent = shallow(<HomeComponent />);
        expect(homeComponent.contains(<Link to="/">home</Link>)).toBeTruthy();
    });
});