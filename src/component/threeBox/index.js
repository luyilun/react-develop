import React from 'react';
import * as THREE from 'three';
import styles from './index.less';

export default class ThreeBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.threeEle = null;
    }
    componentDidMount() {
        this.renderThree();
    }
    renderThree=() => {
        let scene = new THREE.Scene();

        let camera = new THREE.PerspectiveCamera(75, 600 / 600, 0.1, 1000);

        let renderer = new THREE.WebGLRenderer();

        renderer.setSize(600, 600);

        this.threeEle.appendChild(renderer.domElement);
        let geometry = new THREE.CubeGeometry(1, 1, 1);
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(geometry, material); scene.add(cube);
        camera.position.z = 5;
        function render() {
            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;
            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        render();
    };
    render() {
        return (
            <div ref={(el) => { this.threeEle = el }} className={styles.con} />
        );
    }
}