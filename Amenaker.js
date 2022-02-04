let LivingCreature = require('./LivingCreature')
module.exports = class Amenaker extends LivingCreature{
    constructor ( x, y){
        super(x, y)
        this.energy = 40;
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
    chooseCell(char , char1) {
        this.getNewCoordinates();
        return super.chooseCell(char , char1);
    }
    mul() {
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact && this.energy > 20) {
            let x = exact[0];
            let y = exact[1];

            let ker = new Amenaker(x, y);
            matrix[y][x] = 4;
            amenakerArr.push(ker);

            this.energy = 40;
        } else {
            console.error('there is no way to multiply');
        }
    }
    tuk(){
        let found = super.chooseCell(20)
        let exact = found[Math.floor(Math.random() * found.length)]
        if (exact){
            this.energy +=50;
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 50){
                this.mul()
            }
        }else {
            this.eat()
        }
    }
    eat(){
        let found = super.chooseCell(1,2)
        let exact = found[Math.floor(Math.random() * found.length)]
        if (exact){
            this.energy +=2.5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                    grassEaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 50){
                this.mul()
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

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

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
        for (let i = 0; i < amenakerArr.length; i++) {
            if( amenakerArr[i].x == this.x && amenakerArr[i].y == this.y ){
                amenakerArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}