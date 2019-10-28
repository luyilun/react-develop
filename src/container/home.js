import React from 'react';
import HomeComponent from 'src/component/home/index';

export default class Home extends React.Component {
    componentDidMount() {
        /* const guid = 'A7252BBDFC0F6423C85D3ED4DD40B24AA';
        fetch(`/api/summary/${guid}/info`).then((res)=>{
            res.json().then((res)=>{
                console.log(res);
            })
        }) */
        this.doIt();
        const arr = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];
        const num = arr.reduce((start, res) => {
            // console.log(res, start);
            return res;
        });
        console.log(num);
    }
    /**
     * 使用 async 案例
     * @return {*}
     */
    doIt= async () => {
        const a = await this.get1(0);
        const b = await this.get2(a);
        const c = await this.get3(b);
        console.log(a, b, c);
    };
    /**
    * Promise
    * @return {*}
    */
    course = (a) => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(a + 1), 200);
        });
    };
    get1 = (a) => {
        return this.course(a);
    };
    get2 = (a) => {
        return this.course(a);
    };
    get3 = (a) => {
        return this.course(a);
    };
    render() {
        return (
            <HomeComponent />
        );
    }
}