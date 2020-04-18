var ul=document.querySelector('#wrap ul');
var lis=document.querySelectorAll('#wrap ul li');
var closeBtns=document.querySelectorAll('#wrap .close');
var last=null;  //上一次点击的对象

setTimeout(function(){
    ul.className='';
},200);

lis.forEach(function(li,index){
    li.onclick=function(){
        //alert(1);
        ul.id='activeWrap';

        last && (last.className='');
        this.className='active';

        last=this;
    };

    closeBtns[index].onclick=function(ev){
        lis[index].className='';
        ul.id='';

        ev.cancelBubble=true;
    }
});