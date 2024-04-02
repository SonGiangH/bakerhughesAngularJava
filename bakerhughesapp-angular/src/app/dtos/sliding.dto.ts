export class SlidingDTO {   
    toolFace :string = '';
    st :number = 0;
    ed :number = 0;    

    constructor(data: any) {    
        this.toolFace = data.toolFace;
        this.st = data.st;
        this.ed = data.ed;       
    }
}