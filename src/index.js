// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
// import { getModelCenter } from "../lib/util";
// import { cameraUtil }  from "./camera";


export class index {
  constructor(Option) {
    this.Option = Option;
    this.light = undefined;
    this.camera = undefined;
    this.renderer = undefined;
    this.controls = undefined;
    // // this.loader = new GLTFLoader();
    // // this.scene = new THREE.Scene();
    // // this.dracoLoader = new DRACOLoader();
    // this.width = this.Option.dom ? document.querySelector(this.Option.dom).clientWidth : window.innerWidth;
    // this.height = this.Option.dom ? document.querySelector(this.Option.dom).clientHeight : window.innerHeight;
  }


  // show() {
    // this.initRender();
    // this.initCamera()
    // // cameraUtil.initCamera(this.camera);
    // console.log(this.camera)
    // this.initControls();
    // this.initLight();
    // this.initHDR();
    // this.loadModel();
    // this.animate();
    // // cameraUtil.setPosition()
  // }

//   //设置渲染器
//   initRender() {
//     this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, precision: "highp", });
//     this.renderer.shadowMap.enabled = true;
//     this.renderer.setSize(this.width, this.height);
//     this.renderer.setPixelRatio(window.devicePixelRatio);
//     this.renderer.outputEncoding = THREE.sRGBEncoding;
//     this.Option.dom ? document.querySelector(this.Option.dom).appendChild(this.renderer.domElement) : document.body.appendChild(this.renderer.domElement);
//   }

//   //初始化HDR
//   initHDR() {
//     const pmremGenerator = new THREE.PMREMGenerator(this.renderer); // 使用hdr作为背景色
//     pmremGenerator.compileEquirectangularShader();

//     new RGBELoader().load('./test.hdr', (texture) => {
//       const envMap = pmremGenerator.fromEquirectangular(texture).texture;
//       pmremGenerator.dispose();
//       this.scene.environment = envMap;
//       this.scene.background = envMap;
//     });
//   }

//   //加载模型
//   loadModel() {
//     this.dracoLoader.setDecoderPath("three/examples/js/libs/draco/gltf/"),
//       this.loader.setDRACOLoader(this.dracoLoader);
//     this.loader.load(this.Option.src, (obj) => {
//       this.scene.add(obj.scene);
//     });
//   }

//   //初始化控制器


//   //初始化灯光
//   initLight() {
//     this.light = new THREE.AmbientLight(0xffffff, 1);
//     this.scene.add(this.light);
//   }

//   initCamera() {
//     this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 1, 2000);
//     this.camera.position.set(-96.18409385000196, 109.51883971544846, 534.568718641901);
// }

//   //重复渲染
//   animate() {
//     requestAnimationFrame(this.animate.bind(this));
//     this.controls.update();
//     this.renderer.render(this.scene, this.camera);
//   }
}

