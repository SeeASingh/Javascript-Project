class player {
    constructor (game,caption){
        this.game =game;
        this.caption=caption;

    }

}

class cricket extends player{
    constructor(game,caption,country){
        super(game,caption)
        this.country= country
    }

}

const cric = new cricket('cricket','Mahendra Singh Dhoni','India')
console.log(cric)