import {Application, Sprite,Text} from 'pixi.js';
import {gsap} from 'gsap';
export class Game extends Application{
    private spin:boolean;
    private sliceAngle = 360/16;
    constructor(opts:any) {
        super(opts);
        this.preload([
            {name:'wheel', url:'assets/wheel.png'},
            {name:'arrow',url:'assets/arrow.png'}
        ], this.onLoad.bind(this));
    }
    pro(random:any):any{
        let arr=[500,100,80,200,800,100,320,400,60,350,700,50,120,160,900,550];
        const t=new Text("Congratulations You have won "+arr[random]+ " rupees");
        console.log(arr[random]);
        setTimeout(() => {
            t.x=this.screen.height/2;
            t.y=this.screen.width/2-110

            this.stage.addChild((t)); 
        }, 5000);
        // this.stage.addChild(t);
    }
    preload(list:any[], cb:()=>{}):void {
        this.loader.add(list);
        this.loader.load(cb);
    }
    onLoad():void {
        const wheel = new Sprite(this.loader.resources['wheel'].texture);
        const arrow=new Sprite(this.loader.resources['arrow'].texture);
        wheel.anchor.set(0.5);
        arrow.anchor.set(0.5);
        wheel.x = this.screen.width/2;
        wheel.y = this.screen.height/2;
        arrow.x = this.screen.width/2;
        arrow.y = this.screen.height/2-110;
        arrow.width=50;
        arrow.height=65;
        this.stage.addChild(wheel);
        this.stage.addChild(arrow);

        wheel.interactive = true;
        wheel.buttonMode = true;
        console.log(this.stage);
        wheel.on('pointerup', ()=>{
            let random = Math.floor(Math.random()*16);
            let stopAngle = random * this.sliceAngle;
            gsap.fromTo(wheel,{angle:0},{angle:3600+stopAngle, duration:5, ease:'expo.out'});
            this.pro(random);
        });
    }
}