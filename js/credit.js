// AIHues Credit System — 积分体系
// 初始100积分 | 玩游戏赚积分 | 工具消耗积分

const CREDIT={
 init(){
   if(localStorage.getItem('aihues_credit')===null){
     localStorage.setItem('aihues_credit','100');
   }
 },
 get(){return parseInt(localStorage.getItem('aihues_credit')||'0',10);},
 set(v){localStorage.setItem('aihues_credit',String(v));this.render();},
 add(n){const v=this.get()+n;this.set(v);return v;},
 spend(n){const v=this.get();if(v<n)return false;this.set(v-n);return true;},
 render(){
   document.querySelectorAll('.credit-display').forEach(el=>{
     el.textContent='🪙 '+this.get();
   });
 },
 reset(){this.set(100);}
};

// 游戏奖励规则
const GAME_REWARDS={
 fortune:{min:5,max:20,name:'日历幸运签'},
 slots:{jackpot:50,match:10,name:'幸运老虎机'},
 hoops:{perPoint:1,bonus:10,name:'投篮挑战'}
};

// 积分动画
function creditAnimation(el,delta){
 if(!el)return;
 const sign=delta>0?'+':'';
 el.style.transition='all 0.3s';
 el.style.transform='scale(1.3)';
 el.style.color=delta>0?'var(--green)':'#dc2626';
 setTimeout(()=>{
   el.textContent='🪙 '+CREDIT.get();
   el.style.transform='scale(1)';
   el.style.color='';
 },300);
}

// 初始化
CREDIT.init();
CREDIT.render();
