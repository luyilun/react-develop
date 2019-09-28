import React from 'react';
import { Link } from 'react-router-dom';
import B from 'src/common/img/1558503607409.jpg';
import TestData from 'src/common/js/barGraph.demo';
import Charts from 'src/component/charts/index';
import styles from './index.less';

export default class Home extends React.Component {
    render() {
        return (
            <div className={styles.con}>
                <img width={100} height={100} src={B} alt="background" />
                <div style={{ width: 450, height: 450 }}>
                    <Charts
                        data={TestData['stackedPercentMore'].data}
                        config={TestData['stackedPercentMore'].config}
                    />
                </div>
                <Link to="/">home</Link>
                <Link to="/list">list</Link>
            </div>
        );
    }
}
