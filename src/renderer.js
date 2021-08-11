import * as THREE from "three";

export class renderer {
  constructor(Option) {
    this.Option = Option;
    this.renderer = undefined;
    this.width = this.Option.dom
      ? document.querySelector(this.Option.dom).clientWidth
      : window.innerWidth;
    this.height = this.Option.dom
      ? document.querySelector(this.Option.dom).clientHeight
      : window.innerHeight;
  }
  initRender() {
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      precision: "highp",
    });
    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.Option.dom
      ? document
          .querySelector(this.Option.dom)
          .appendChild(this.renderer.domElement)
      : document.body.appendChild(this.renderer.domElement);
    return this.renderer;
  }
}
