class Player{
    constructor(){
        this.name= null;
        this.distance=0;
        this.index=0;
    }

    getCount(){
        var playerCountRef= database.ref("playerCount");
        playerCountRef.on('value',(data)=>{
            playerCount= data.val();
        })
    }

    update(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    updateDetails(){
        var playerIndex= "players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
}