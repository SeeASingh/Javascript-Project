class player {
    constructor(game){
        this.game = game;
    }
    properties(){
        console.log(`${this.game} players can run`)
    }
}

class football extends player {
    req(){
        console.log('they need a ball')
    }
}
class cricket extends player{
    team (){
        console.log('they are 11 players in each team')
    }
}


const foot = new football('football')
const cric = new cricket('cricket')
foot.properties()
foot.req()
cric.properties()
cric.team()