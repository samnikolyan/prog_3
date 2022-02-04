let LivingCreature = require('./LivingCreature')
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 15;
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
    mul() {
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]


        if (exact && this.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);

            this.energy = 15;
        } else {
            console.error('there is no way to multiply');
        }
    }
    tuk() {
        let found = super.chooseCell(20);
        let exact = found[Math.floor(Math.random() * found.length)]


        if (exact) {
            this.energy += 30;
            let x = exact[0];
            let y = exact[1];
            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y

            if (this.energy > 30) {
                this.mul()
            }
        } else {
            this.eat()
        }
    }
    eat() {
        let found = super.chooseCell(1);
        let exact = found[Math.floor(Math.random() * found.length)]


        if (exact) {
            this.energy += 2.5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y

            if (this.energy > 30) {
                this.mul()
            }
        } else {
            this.move()
        }
    }
    move() {
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]


        if (exact) {
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        } else {
            this.energy--
            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
}