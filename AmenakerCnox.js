let LivingCreature = require('./LivingCreature')
module.exports = class AmenakerCnox extends LivingCreature{
    constructor(x, y){
        super(x, y)
        this.energy = 200
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(char);
    }
    move(){
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 32
            
            let amenaker = new Amenaker(this.x,this.y)
            matrix[this.y][this.x] = 4
            amenakerArr.push( amenaker )

            this.x = x;
            this.y = y;

            this.energy-=5

            if(this.energy < 0){
                this.die()
            }
        }
        else {
            this.energy-=5
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < amenakercnoxArr.length; i++) {
            if( amenakercnoxArr[i].x == this.x && amenakercnoxArr[i].y == this.y ){
                amenakercnoxArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}