import React from 'react';
import * as THREE from 'three';
import styles from './index.less';

export default class ThreeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.threeEle = null;
        this.tScene = null; // 场景
        this.tCamera = null; // 透视相机
        this.tRenderer = null; // 渲染
        this.tGeometry = null; // 几何体
        this.tMaterial = null; // 点
        this.tCube = null; //
        this.tLight = null; //
    }
    componentDidMount() {
        this.renderThree();
    }
    renderThree=() => {
        this.initRenderer();

        this.initScene();
        this.initCamera();
        this.initLight();
        this.initObject();

        this.mapRender();
    };
    initRenderer=() => {
        this.tRenderer = new THREE.WebGLRenderer();
        this.tRenderer.setSize(600, 600);
        this.threeEle.appendChild(this.tRenderer.domElement);
        this.tRenderer.setClearColor(0xFFFFFF, 1.0);
    };
    mapRender=() => {
        this.tRenderer.clear();
        this.tRenderer.render(this.tScene, this.tCamera);
    };
    initScene=() => {
        this.tScene = new THREE.Scene();
    };
    initCamera=() => {
        this.tCamera = new THREE.PerspectiveCamera(45, 600 / 600, 1, 1000);
        // this.tCamera.position.set(0, 0, 100);
        this.tCamera.position.x = 0;
        this.tCamera.position.y = 1000;
        this.tCamera.position.z = 0;
        this.tCamera.up.x = 0;
        this.tCamera.up.y = 0;
        this.tCamera.up.z = 1;
        this.tCamera.lookAt({
            x: 0,
            y: 0,
            z: 0
        });
    };
    initLight=() => {
        this.tLight = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
        this.tLight.position.set(100, 100, 200);
        this.tScene.add(this.tLight);
    };
    initObject=() => {
        this.tGeometry = new THREE.Geometry();
        this.tGeometry.vertices.push(new THREE.Vector3(-500, 0, 0));
        this.tGeometry.vertices.push(new THREE.Vector3(500, 0, 0));
        let line1;
        let line2;
        for (let i = 0; i <= 20; i++) {

            line1 = new THREE.Line(this.tGeometry, new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.5 }));
            line1.position.z = (i * 50) - 500;
            this.tScene.add(line1);

            line2 = new THREE.Line(this.tGeometry, new THREE.LineBasicMaterial({ color: 0x000000, opacity: 0.2 }));
            line2.position.x = (i * 50) - 500;
            line2.rotation.y = 90 * Math.PI / 180;
            this.tScene.add(line2);
        }
    };
    render() {
        return (
            <div ref={(el) => { this.threeEle = el }} className={styles.con} />
        );
    }
}