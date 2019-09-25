import React from 'react';
import classNames from 'classnames';
import BarGraph from '../barGraph/index';
import styles from './index.less';

export default class Charts extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			height: 200
		};
		this.chartCon = null; //图表的父容器节点
	}
	componentDidMount(){
        this.init(); //组件 dom 节点加载后初始化
	}
	/**
	 * 初始化一些所需参数，例如：height 等
	 * @return {*}
	 */
	init=()=>{
        let obj = {};
        obj.height = this.chartCon.clientHeight;
        this.setState(obj);
	};
	render(){
		const {
		    className,
            data,
            config
		} = this.props,
        { height } = this.state;
		return (
			<div ref={(el)=>{this.chartCon = el}} className={classNames(styles.con, className)} >
				<BarGraph
                    height={height}
                    data={data}
                    {...config}
                />
			</div>
		);
	}
}