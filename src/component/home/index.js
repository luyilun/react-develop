import React from 'react';
import { Link } from 'react-router-dom';
import B from 'src/common/img/1558503607409.jpg';
import styles from './index.less';
export default class Home extends React.Component{
	render(){
		return (
			<div className={styles.con} >
				<img src={B} alt={'background'} />
				<Link to={'/'} >home</Link>
				<Link to={'/list'} >list</Link>
			</div>
		);
	}
};