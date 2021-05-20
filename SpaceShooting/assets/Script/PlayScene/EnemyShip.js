// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import enemyList from "./Config";

// const 

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
    enemy: cc.Node,
    objEnemy: cc.Object,
    listEnemy: cc.Node,
    _wave1:{
      default:[],
      serializable:false,
    },
    _position:{
      default:new cc.Vec2(),
      serializable: false,
    }
    // listEnemy:cc.Node,
  },

  // getData(){
  //   cc.loader.loadRes('MapEnemy.json',this.getMap.bind(this))
  // },

  // getMap(){

  // },

  createEnemy(type,pos) {
    // var enemy;
    // var objEnemy;
    // this.newArr = [];
    // const {enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12} = enemy;
    // this.keyObj = Object.keys(enemyList)
    switch (type) {
      case 1:
        this.enemy = cc.instantiate(this.enemy1);
        this.enemy.parent = this.node;
        this.enemy.setPosition(0,0)
        this.objEnemy = Object.values(enemyList)[0];
        // cc.log(this.enemy);
        // cc.log(this.enemy.position)
        cc.tween(this.enemy)
          .by(1, { position: pos }, { easing: "sineOutIn" })
          .start();
        // cc.log(typeof enemy);
        // cc.log(objEnemy.damage);
        // cc.log(this.enemy.position);
        break;
      case 2:
        this.enemy = cc.instantiate(this.enemy2);
        this.enemy.parent = this.node;
        this.objEnemy = Object.values(enemyList)[1];
        // cc.log(objEnemy.damage);
        break;
      case 3:
        enemy = cc.instantiate(this.enemy3);
        objEnemy = Object.values(enemyList)[2];
        break;
      case 4:
        enemy = cc.instantiate(this.enemy4);
        objEnemy = Object.values(enemyList)[3];
        break;
      case 5:
        enemy = cc.instantiate(this.enemy5);
        objEnemy = Object.values(enemyList)[4];
        break;
      case 6:
        enemy = cc.instantiate(this.enemy6);
        objEnemy = Object.values(enemyList)[5];
        break;
      case 7:
        enemy = cc.instantiate(this.enemy7);
        objEnemy = Object.values(enemyList)[6];
        break;
      case 8:
        enemy = cc.instantiate(this.enemy8);
        objEnemy = Object.values(enemyList)[7];
        break;
      case 9:
        enemy = cc.instantiate(this.enemy9);
        objEnemy = Object.values(enemyList)[8];
        break;
      case 10:
        enemy = cc.instantiate(this.enemy10);
        objEnemy = Object.values(enemyList)[9];
        break;
      case 11:
        enemy = cc.instantiate(this.enemy11);
        objEnemy = Object.values(enemyList)[10];
        break;
      case 12:
        enemy = cc.instantiate(this.enemy12);
        objEnemy = Object.values(enemyList)[11];
        break;
      default:
        break;
    }
    //   Object.keys(enemyList)[0];
    //   cc.log(enemy);
    // this.keyObj=Object.keys(EnemyList)
    // this.valuesObj=Object.values(EnemyList)
    // this.keyObj.forEach(item=>{
    //     let node = cc.instantiate(this.Prefab[item._name]);
    //     this.listEnemy.addChild(node);
    // })
  },

  makeWave1() {
    this.valuesObj = Object.values(enemyList);
    // this.createEnemy(this.valuesObj[0].type);
    let index = 0;
    cc.log(this._wave1[index])
    for (let i=0;i<8;i++){
      for (let j=0; j< 4; j++){
        if(this._wave1[index]===1){
          this._position = cc.v2((1440/8) * j- 420, (-(720/8)*i)+250);
          this.createEnemy(this.valuesObj[0].type,this._position);
          cc.log('1',this.enemy.position);
        } else if (this._wave1[index]===2){
          this.enemy.position = cc.v2((1440/8) * j- 420, (-(720/8)*i)+250);
          this.createEnemy(this.valuesObj[1].type,this._position);
          cc.log('2',this.enemy.position)
        }
        index++;
      }
    }
    
    // this.listEnemy.addChild(this.enemy);
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
    // this.createEnemy(Object.values(enemyList)[0].type);

    // this.makeWave1();
    // cc.log(this.valuesObj);
    // cc.log(this.keyObj);
    // cc.log(this.valuesObj)
    // cc.log(this.listEnemy)
  },

    getMap(err, obj){
      if(err){
        cc.log(err)
        return;
      }
      let data = obj.json
      this._wave1 = obj.json.wave1.map;
      this.makeWave1()
      cc.log(this._wave1);

    },
  start() {
    cc.loader.loadRes('MapEnemy.json',this.getMap.bind(this))
  },

  //   init() {
  //     this.Prefab = {};
  //     this.Prefabs.forEach((item) => {
  //       this.Prefab[item._name] = item;
  //     });
  //   },

  // update (dt) {},
});
