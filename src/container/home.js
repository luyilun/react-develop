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
		this.doIt();
	}
	doIt= async ()=>{
		const a = await this.get1(0);
		const b = await this.get2(a);
		const c = await this.get3(b);
		console.log(a, b, c);
	}
	course = (a) => {
		return new Promise((resolve)=>{
			setTimeout(()=>resolve(a + 1), 200);
		});
	}
	get1 = async (a) => {
		return this.course(a);
	}
	get2 = async (a) => {
		return this.course(a);
	}
	get3 = async (a) => {
		return this.course(a);
	}
	render(){
		return (
			<HomeComponent />
		);
	}
};