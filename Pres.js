let LivingCreature = require('./LivingCreature')
module.exports =class Pres extends LivingCreature{
    constructor(x, y){
        super(x, y)
        this.energy = 40
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
    xotarajacum(){
        matrix[this.y][this.x] = 20
        this.x = x;
        this.y = y
    }
    eat(){
        let found = super.chooseCell(1);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            this.energy +=5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }
            if(this.energy < 60){
                matrix[y][x] = 64
                matrix[this.y][this.x] = 0
                this.x = x;
                this.y = y
            }
            else if(this.energy >= 60){
                matrix[y][x] = 64
                matrix[this.y][this.x] = 20
                this.x = x;
                this.y = y
                this.energy-=40
            }
        }else {
            this.move()
        }
    }
    move(){
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 64
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;
        }
        if(grassArr.length==0){
            this.die()
        }
    }
    die(){
        for (let i = 0; i < presArr.length; i++) {
            if(presArr[i].x == this.x && presArr[i].y == this.y ){
                presArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}