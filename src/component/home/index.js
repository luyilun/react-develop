import React from 'react';
import { Link } from 'react-router-dom';
import B from 'src/common/img/1558503607409.jpg';
import Charts from '../charts/index';
import styles from './index.less';
export default class Home extends React.Component{
	render(){
		const data = [
			{x: '1', y: [2, 4]},
			{x: '2', y: [6, 8]},
			{x: '3', y: [4, 10]},
		];
		return (
			<div className={styles.con} >
				<img width={100} height={100} src={B} alt={'background'} />
				<div style={{width: 450, height: 450}} >
					<Charts xKey="x" yKey="y" data={data} />
				</div>
				<Link to={'/'} >home</Link>
				<Link to={'/list'} >list</Link>
			</div>
		);
	}
};