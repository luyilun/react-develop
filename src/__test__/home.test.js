/* eslint import/no-extraneous-dependencies:0 */
import { shallow } from 'enzyme';
import React from 'react';
import Home from '../component/fail/index';

/* eslint no-undef:0 */

describe('Page404', () => {
    it('renders without crashing"', () => {
        shallow(<Home />);
    });
});