

import * as THREE from "three";

export class camera{
    constructor(){
        this.camera = undefined
    }
    //初始化镜头
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(55, this.width / this.height, 1, 2000);
        this.camera.position.set(-96.18409385000196, 109.51883971544846, 534.568718641901);
        return this.camera
    }
}
