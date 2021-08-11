import { camera } from './camera.js';
import { controls } from './controls.js';
import { light } from './light.js';
import { renderer } from './renderer.js';
import { scene } from './scene.js';

// const _camera = new

export class modelShow {
  constructor(Option) {
    this.Option = Option
    this.camera = new camera().initCamera();
    this.renderer = new renderer(Option).initRender()
    this.scene = new scene().initScene()
    this.controls = new controls(Option).initControls()
    
    this.light = new light().initLight();
    this.controls = new controls().initControls(this.camera,this.renderer);
    
  }
  show() {
    console.log(this)
  
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

}
window.modelShow = modelShow;
