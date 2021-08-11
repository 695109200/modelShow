import * as THREE from "three";

export class scene{
    constructor(Option) {
        this.Option = Option
        this.scene = undefined
    }
    initScene() {
        this.scene = new THREE.Scene();
        return this.scene
    }
}
