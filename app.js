var models = [
    {
       
        image : './image/mekan/dısmekan-1.jpeg',
     
    },
    {
       
        image : './image/baklava/cevizlibaklava.jpg',
       
    },
    {
        
        image : './image/mekan/image7.jpg',
        
    },
    {
        image : './image/sıcaktatlı/lokmaTatlısı.jpg',
     
    },

     {
        image : '  ./image/baklava/kadayıf.jpg',
     
    }

  
  
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '2000',
    random : false
};

init(settings);



function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}



function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }



    document.querySelector('.silder-image').setAttribute('src',models[index].image);
    
  
}




var colors=[
    {
        color:' #f0bd20'
    },
    {
        color:'#6b60d1'
    },
     {
        color:'#148486 '
    },
     {
        color:'#69b5ae '
    }
    ,
     {
        color:'#906d08'
    }
    ,
     {
        color:' #3c3c3c '
    }
    ,
     {
        color:'#714464 '
    }

      
]

var set={
    duration : '550',
   
};

setInterval(function(){


var col=colors.length;
var i=0;
 i= Math.floor(Math.random()*col)





document.querySelector('.tlf').style.color=colors[i].color ;


},set.duration)





window.onload=function(){

    document.querySelector('.loding').style.display='none';
}






const cıkıs=document.querySelector('.cıkıs');
const body=document.querySelector('body');
const ornekacılır=document.querySelector('.ornek');

   document.querySelectorAll('.ul-contener .li-content img').forEach(imaage=>{
                imaage.onclick=()=>{
                     document.querySelector('.ornek').style.display='block';
                     document.querySelector('.ornek img').src=imaage.getAttribute('src');      
                        
             body.style.overflow='hidden';

                }

            })
            cıkıs.addEventListener('click',e=>{
                ornekacılır.style.display='none'
                  body.style.overflow='visible';
            })

  





