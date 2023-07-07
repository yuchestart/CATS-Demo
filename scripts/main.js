let renderer,canvas,scene;
function main(){
    canvas = document.getElementById("dacanvas");
    renderer = new Renderer(canvas);
    scene = new Scene(renderer);
    scene.bgcolor = CATS.Color("#ffffff")
    initScene()
    scene.moveCamera([0,2,3])
    scene.rotateCamera([0,0,0])
    scene.render()
}
window.onload = main;