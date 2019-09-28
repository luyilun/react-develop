/* eslint import/no-unresolved:0 */
import { shallow } from 'enzyme';
import React from 'react';
import Home from 'src/container/home';

/* eslint no-undef:0 */

describe('Page Home', () => {
    it('renders without crashing"', () => {
        shallow(<Home />);
    });
});