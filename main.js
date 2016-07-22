var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var bg = document.getElementById("bg");
c.width = window.innerWidth;
c.height =window.innerHeight*.9;

function animate(){
    ctx.drawImage(bg,0,0,c.width,c.height);
    if(player.dead){
        //alert("what are you doing????");
        //window.location.href ="http://www.beesbeesbees.com/";
        return;
    }

    enemy.update();
    enemy.render();
    player.update();
    player.render();
    
    window.requestAnimationFrame(animate);
}
animate();





