let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature {
    constructor(x,y){
        super(x,y)
        this.multiplay = 0;

    }
    mul(){
        this.multiplay++;
        let found = super.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]
        if( exact && this.multiplay > 1.90){
            let x = exact[0]
            let y = exact[1]
            var grass = new Grass(x,y)
            matrix[y][x] =1
            grassArr.push(grass)
            this.multiplay = 0
        }   
    }
}