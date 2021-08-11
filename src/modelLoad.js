import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
export class modelLoad {
  constructor() {
    this.loader = new GLTFLoader();
    this.dracoLoader = new DRACOLoader();
  }
  //加载模型
  load(src) {
    return new Promise((res,rej)=>{
        this.dracoLoader.setDecoderPath("three/examples/js/libs/draco/gltf/"),
        this.loader.setDRACOLoader(this.dracoLoader);
          this.loader.load(src, (obj) => {
        // this.scene.add(obj.scene);
        res(obj)
      });
    })

  }
}
