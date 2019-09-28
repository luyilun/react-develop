/* eslint import/no-extraneous-dependencies:0 */
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

configure({ adapter: new Adapter() });