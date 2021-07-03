class Game{
    constructor(){

    }
    getState(){
     var gameStateRef=database.ref('database')
     gameStateRef.on("value",function(data){
         gameState=data.val()
     })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
            //Player.getplayerinfo()
            player=new player();
            player.getCount()
            form=new Form()
            form.display();
        }
    }
}