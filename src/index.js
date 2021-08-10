// import {THREE} from '.'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
export class modelShow {
  constructor(obj) {
    this.obj = obj
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 2000)
    this.scene = new THREE.Scene()
    this.renderer = undefined
    this.controls = undefined
    this.loader = new GLTFLoader()
    this.dracoLoader = new DRACOLoader()
    this.light = new THREE.AmbientLight(0xffffff, 1)

  }

  show() {
    // alert('123')
    console.log(this)
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: 'highp' });
    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    document.body.style.margin = '0'
    document.body.appendChild(this.renderer.domElement);
    this.renderer.outputEncoding = THREE.sRGBEncoding;


    this.scene.add(this.light);
    this.camera.position.set(-13.90842899058706, 85.44167226622834, 36.23202350149778);
    this.animate()
    
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    // this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

window.modelShow = modelShow
