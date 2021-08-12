
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
export class modelLoad {
  constructor(Option) {
    this.Option = Option
    this.loader = undefined;
    this.dracoLoader = new DRACOLoader();
  }
  //加载模型
  load(src) {
    this.checkModel(src)
    console.log(this.Option)
    return new Promise((res, rej) => {
      this.loader.load(src, (obj) => {
        this.Option.loadEnd()
        res(obj)
      }, (xhr) => {
        this.Option.loadProgress((xhr.loaded / xhr.total * 100))
      }, (err) => {
        console.error('modelShow：Load Model Error')
      });
    })

  }

  checkModel(src) {
    switch (src.split('.')[src.split('.').length - 1]) {
      case 'glb':
        this.loader = new GLTFLoader()
        break;
      case 'gltf':

        break;
      case 'fbx':

        break;
      case 'mtl':

        break;
    }
    this.dracoLoader.setDecoderPath("three/examples/js/libs/draco/gltf/"),
      this.loader.setDRACOLoader(this.dracoLoader);

  }
}
