import * as THREE from "three";

export class light{
    constructor(Option) {
        this.Option = Option
        this.light = undefined
    }
    initLight() {
        this.light = new THREE.AmbientLight(0xffffff, 1);
        //     this.scene.add(this.light);
        return this.light
    }
}
