import React from 'react';
import { Link } from 'react-router-dom';
import B from 'src/common/img/1558503607409.jpg';
import HomeComponent from 'src/component/home/index';
export default class Home extends React.Component{
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
			<HomeComponent />
		);
	}
};