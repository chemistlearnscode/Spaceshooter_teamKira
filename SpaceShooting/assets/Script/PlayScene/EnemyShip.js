// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import enemyList from './Config';

cc.Class({
    extends: cc.Component,

    properties: {
        enemy1: cc.Prefab,
        enemy2: cc.Prefab,
        enemy3: cc.Prefab,
        enemy4: cc.Prefab,
        enemy5: cc.Prefab,
        enemy6: cc.Prefab,
        enemy7: cc.Prefab,
        enemy8: cc.Prefab,
        enemy9: cc.Prefab,
        enemy10: cc.Prefab,
        enemy11: cc.Prefab,
        enemy12: cc.Prefab,
        // listEnemy:cc.Node,
    },

    createEnemy() {
        var enemy;
        // this.newArr = [];
        // const {enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12} = enemy;
        this.keyObj = Object.keys(enemyList)
        this.keyObj.forEach(item => {
            switch (item) {
                case 'Enemy1':
                    enemy = cc.instantiate(this.enemy1);
                    break;
                case 'Enemy2':
                    enemy = cc.instantiate(this.enemy2);
                    break;
                case 'Enemy3':
                    enemy = cc.instantiate(this.enemy3);
                    break;
                case 'Enemy4':
                    enemy = cc.instantiate(this.enemy4);
                    break;
                case 'Enemy5':
                    enemy = cc.instantiate(this.enemy5);
                    break;
                case 'Enemy6':
                    enemy = cc.instantiate(this.enemy6);
                    break;
                case 'Enemy7':
                    enemy = cc.instantiate(this.enemy7);
                    break;
                case 'Enemy8':
                    enemy = cc.instantiate(this.enemy8);
                    break;
                case 'Enemy9':
                    enemy = cc.instantiate(this.enemy9);
                    break;
                case 'Enemy10':
                    enemy = cc.instantiate(this.enemy10);
                    break;
                case 'Enemy11':
                    enemy = cc.instantiate(this.enemy11);
                    break;
                case 'Enemy12':
                    enemy = cc.instantiate(this.enemy12);
                    break;
                default:
                    break;
            }


        })
        // this.keyObj=Object.keys(EnemyList)
        // this.valuesObj=Object.values(EnemyList)
        // this.keyObj.forEach(item=>{
        //     let node = cc.instantiate(this.Prefab[item._name]);
        //     this.listEnemy.addChild(node);
        // })
    },

    // createOrbit(){
    //     let list=Object.keys(EnemyList)
    //     list.forEach(item=>{
    //         switch(item){
    //             case 'Enemy1':
    //                 cc.tween(this.listEnemy.c)
    //         }
    //     })
    // },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.createEnemy();
        cc.log(this.keyObj)
        // cc.log(this.valuesObj)
        // cc.log(this.listEnemy)
    },

    start() {

    },

    init() {
        this.Prefab = {};
        this.Prefabs.forEach(item => {
            this.Prefab[item._name] = item;
        });
    },

    // update (dt) {},
});
