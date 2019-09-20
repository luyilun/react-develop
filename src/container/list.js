import React from 'react';
import { Link } from 'react-router-dom';
export default class List extends React.Component{
	componentDidMount(){
		/*const guid = 'A7252BBDFC0F6423C85D3ED4DD40B24AA';
		fetch(`/api/summary/${guid}/info`).then((res)=>{
			res.json().then((res)=>{
				console.log(res);
			})
		})*/
		console.log(this.props);
	}
	render(){
		return (
			<div>
				小伙子
				<Link to={'/'} >home</Link>
				<Link to={'/list'} >list</Link>
			</div>
		);
	}
};