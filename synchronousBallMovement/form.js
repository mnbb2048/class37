class Form{
    constructor(){
 this.input=createInput('NAME')
 this.button=createButton('play')
 this.greeting=createElement('h2')
    }
    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }
    display(){
        var title=createElement('h2')
        title.html("car racing game")
        title.position(200,50)
        
        this.input.position(200,200)
       
        this.button.position(200,260)
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
             player.name=this.input.value()
            playerCount=playerCount+1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello"+player.name)
            this.greeting.position(200,200)
        })
    }
}