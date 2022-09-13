const game = new PIXI.Application(
        {
            width:1200,
            height:700,
            backgroundColor:0x366FF,
        });

document.getElementById('game').append(game.view);
loadAssests([
        {name:'front', url:'./Assests/card image.jpg'}
    ],start);


const pBar =document.getElementById('bar');
const pText = document.getElementById('progress');


function preload(e)
{
    pBar.style.width = e.progress * 2 + "%";
    pText.innerText = e.progress + "%";
    console.log(e.progress);
    if(e.progress ===100)
    {
        console.log("bar hide");
        setTimeout(() => {
            document.getElementById('loader').style.display='none';
        },500);

    }

}
function loadAssests(list, onLoadComplete)
{
    game.loader.onProgress.add(preload);
    game.loader.add(list)
    .load(onLoadComplete);

}

function start (loader,resource)
{
    console.log('params',arguments);
    for(let i=0;i<5;i++)
    {
        for(let j=0;j<12;j++)
        {
            const card = new PIXI.Texture(resource['front'].texture,
            new PIXI.Rectangle((14+(151*j)),(12+(224*i)),142,205));
            const front =PIXI.Sprite.from(card);
            front.x=(j%14)*50;
            front.y=Math.floor(i/14)*500;
            game.stage.addChild(front);
            front.scale.set(.2);
        }
    }
}