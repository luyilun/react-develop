import React from 'react';
import { Link } from 'react-router-dom';
import ThreeBox from 'src/component/threeBox/index';

export default class List extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <ThreeBox />
                <Link to="/" >home</Link>
                <Link to="/list" >list</Link>
            </div>
        );
    }
}