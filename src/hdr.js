import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export class hdr {
  constructor() {
  }
  load(src,renderer) {
      return new Promise((res,rej)=>{
        const pmremGenerator = new THREE.PMREMGenerator(renderer); // 使用hdr作为背景色
        pmremGenerator.compileEquirectangularShader();
    
        new RGBELoader().load(src, (texture) => {
          const envMap = pmremGenerator.fromEquirectangular(texture).texture;
          pmremGenerator.dispose();
          res(envMap)
        
        });
      })
 

  }
}
