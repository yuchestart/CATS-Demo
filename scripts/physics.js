class Entity{
    /**
     * 
     * @param {Array<Number>} scale 
     * @param {Array<Number>} position 
     * @param {Mesh} renderobject 
     */
    constructor(scale,position,rotation,renderobject,frame=()=>{}){
        this.renderobject = renderobject;
        this.scale = scale;
        this.position = position;
        this.rotation = rotation;
        this.frame = ()=>{frame(this)};
    }
    move(x,y,z){
        this.position[0] += x;
        this.position[1] += y;
        this.position[2] += z;
        this.renderobject.translate([x,y,z]);
    }
    rotate(x,y,z){
        this.rotation[0] += x;
        this.rotation[1] += y;
        this.rotation[2] += z;
    }
    size(x,y,z){
        this.scale[0] += x;
        this.scale[1] += y;
        this.scale[2] += z;
    }
    
}