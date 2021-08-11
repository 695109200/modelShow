import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export class controls{
    constructor() {
        this.controls = undefined
    }
    initControls(camera,renderer) {
        console.log(renderer)
        // this.controls = new OrbitControls(camera,renderer.domElement);
        // this.controls.update();
        return this.controls
    }
}
