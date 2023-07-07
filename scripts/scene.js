let materials,objects;
function initScene(){
    materials = {
        floor:new SingleColorMaterial("#FFFF00",0)
    }
    objects = [new Entity([1,1,1],[0,0,0],[0,0,0],new Cube(1,materials.floor),function(me){me.rotate(1,0,0)})]
    for(var i=0; i<objects.length; i++){
        scene.addObject(objects[i].renderobject)
    }
    scene.addLight(new DirectionalLight([0,0],1,"#FFFFFF"))
}

function drawScene(loop){
    for(var i=0; i<objects.length; i++){
        objects[i].frame()
    }
    scene.render()
    if(loop){
        requestAnimationFrame(()=>{drawScene(loop)})
    }
}