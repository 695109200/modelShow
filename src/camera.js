

import * as THREE from "three";

export class camera{
    constructor(Option){
        this.camera = undefined
        this.width = Option.dom
        ? document.querySelector(Option.dom).clientWidth
        : window.innerWidth;
      this.height = Option.dom
        ? document.querySelector(Option.dom).clientHeight
        : window.innerHeight;
    }
    //初始化镜头
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 1, 2000);
        this.camera.position.set(-96.18409385000196, 109.51883971544846, 534.568718641901);
        return this.camera
    }
}
