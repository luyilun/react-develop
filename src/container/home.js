import React from 'react';
import B from 'src/common/img/1558503607409.jpg';
export default class Home extends React.Component{
	componentDidMount(){
		/*const guid = 'A7252BBDFC0F6423C85D3ED4DD40B24AA';
		fetch(`/api/summary/${guid}/info`).then((res)=>{
			res.json().then((res)=>{
				console.log(res);
			})
		})*/
	}
	render(){
		return (
			<div>
				<img src={B} alt={'background'} />
			</div>
		);
	}
};