let LivingCreature = require('./LivingCreature')
module.exports = class Water extends LivingCreature{
    constructor(x, y){
        super(x, y)
        this.energy = 500
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

            matrix[y][x] = 8
            
            let xot = new Grass(this.x,this.y)
            matrix[this.y][this.x] = 1
            grassArr.push(xot)

            this.x = x;
            this.y = y;

            this.energy-=10

            if(this.energy < 0){
                this.die()
            }
        }
        else {
            this.energy-=10
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < waterArr.length; i++) {
            if( waterArr[i].x == this.x && waterArr[i].y == this.y ){
                waterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}