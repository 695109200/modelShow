import * as THREE from "three";

function setModelCenter(obj,controls){
    obj.updateMatrixWorld();
    const BOX = new THREE.Box3().setFromObject(obj);
    controls.target.copy(BOX.getCenter(new THREE.Vector3()))
}
function setModelScale(obj){
    obj.updateMatrixWorld();
    const BOX = new THREE.Box3().setFromObject(obj);
    const MAX = BOX.expandByObject(obj).max
    console.log(MAX) 
    console.log(MAX)
    // obj.scale.set(0.2,0.2,0.2)

}

export {
    setModelCenter,
    setModelScale
  }