
function initScene(){
    const materials = {
        floor:new SingleColorMaterial("#FFFF00",0)
    }
    const objects = [new Cube(1,materials.floor)]
    for(var i=0; i<objects.length; i++){
        scene.addObject(objects[i])
    }
    scene.addLight(new DirectionalLight([0,0],1,"#FFFFFF"))
}