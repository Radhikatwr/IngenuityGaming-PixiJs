import { Application } from 'pixi.js';
import { Game } from './Game';
import './css/main.css';
window.onload = ()=>{
    const gameDiv:HTMLDivElement = <HTMLDivElement>document.getElementById('game');
    const app:Application = new Game({
        width:innerWidth,
        height:innerHeight,
        backgroundColor: 0x888844,
        sharedLoader: true,
        sharedTicker: true
    });
    gameDiv.appendChild(app.view);
}

