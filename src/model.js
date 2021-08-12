
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from "three";

export class model {
  constructor(Option) {
    this.Option = Option
    this.loader = undefined;
    this.dracoLoader = new DRACOLoader();
    this.mtlLoader = new MTLLoader();
  }

  //加载模型
  load(src) {
    var modelType = src.split('.')[src.split('.').length - 1].toLowerCase()
    this.setModelLoad(modelType)

    return new Promise((res, rej) => {
      this.loader.load(src, (obj) => {
        res(obj)
      }, (xhr) => {
        this.Option.loadProgress((xhr.loaded / xhr.total * 100))
      }, (err) => {
        console.error('modelShow：Load Model Error')
      });
    })

  }

  //设置加载器类型
  setModelLoad(modelType) {
    switch (modelType) {
      case 'glb':
        this.loader = new GLTFLoader()
        this.dracoLoader.setDecoderPath("three/examples/js/libs/draco/gltf/"),
          this.loader.setDRACOLoader(this.dracoLoader);
        break;
      case 'obj':
        this.loader = new OBJLoader()
        break;
      case 'gltf':
        this.loader = new GLTFLoader()
        this.dracoLoader.setDecoderPath("three/examples/js/libs/draco/gltf/"),
          this.loader.setDRACOLoader(this.dracoLoader);
        break;
      case 'fbx':
        this.loader = new FBXLoader()

        break;
      case 'mtl':

        break;
    }
  }

  //设置模型居中
  setModelCenter(obj, controls) {
    obj.updateMatrixWorld();
    const BOX = new THREE.Box3().setFromObject(obj);
    controls.target.copy(BOX.getCenter(new THREE.Vector3()))
  }

  //设置模型缩放
  setModelScale(obj) {
    obj.updateMatrixWorld();
    const BOX = new THREE.Box3().setFromObject(obj);
    const MAX = BOX.expandByObject(obj).max
    console.log(MAX)
    console.log(MAX)
    // obj.scale.set(0.2,0.2,0.2)

  }
}
