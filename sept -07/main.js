
    const game = new PIXI.Application(
        {
            width:800,
            height:600,
            backgroundColor:0x366FF,
            canvas:document.getElementById('game')
        }
    );
    document.getElementById('game').append(game.view);
    loadAssests([
        {name:'back', url:},
        {name:}
    ])
const pBar =document.getElementById('bar');
const pText = document.getElementById('progress');
function preload(e)
{
    pBar.style.width = e.progress * 4 + "%";
    pText.innerText = e.progress + "%";
    if(e.progress ===100)
    {
        document.getElementById('barContainer')

    }
    console.log(e.progress);

}
function loadAssests(list, onLoadComplete)
{
    game.loader.onProgress.add(preload);
    game.loader.add(list)
    .load(onLoadComplete);

}