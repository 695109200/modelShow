import { camera } from './camera.js';
import { controls } from './controls.js';
import { light } from './light.js';
import { renderer } from './renderer.js';
import { scene } from './scene.js';
import { modelLoad } from './modelLoad.js';
import { hdr } from './hdr.js';


export class modelShow {
  constructor(Option) {
    this.Option = Option
    this.renderer = new renderer(Option).initRender();
    this.camera = new camera(Option).initCamera();
    this.scene = new scene().initScene()
    this.light = new light().initLight();
    this.controls = new controls().initControls(this.camera,this.renderer);
    this.show()
  }
  show() {
    new modelLoad(this.Option).load(this.Option.src).then((obj)=>{
      this.scene.add(obj.scene)
      console.log(this.controls)
    })
    new hdr().loads('./test.hdr',this.renderer).then((envMap)=>{
      this.scene.environment = envMap;
      this.scene.background = envMap;
    })
    this.animate()
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

}
window.modelShow = modelShow;
