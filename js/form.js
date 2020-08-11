class Form{
    constructor(){
        this.name= createElement('h2',"Name:");
        this.name_input= createInput("Name");

        this.submit= createButton("Submit");

        this.greeting= createElement('h1');

        this.reset= createButton("Reset");
    }

    hide(){
        this.name.hide();
        this.name_input.hide();
        this.submit.hide();
    }

    display(){
        var title= createElement('h1','Welcome to Hurdle Race');
        title.position(200,200);

        this.name.position(190,400);
        this.name_input.position(410,470);

        this.submit.position(775,475);

        this.reset.position(1300,300)

        this.submit.mousePressed(()=>{
            form.hide();
            playerCount+=1;
            player.index=playerCount;
            player.name= this.name_input.value();
            player.update(player.index);
            player.updateDetails();

            this.greeting.html(player.name);
            this.greeting.position(450,430);
        })

        this.reset.mousePressed(()=>{
            database.ref("/").update({
                playerCount:0,
                gameState:0
            })

            var playerRef= database.ref("players");
            playerRef.remove();
        })
    }

}