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





 





const ornek=document.querySelector('.button-active');
const v=document.querySelector('.v');
const cıkıs=document.querySelector('.cıkıs');
const ornewnek=document.querySelector('.ornek');
const acılırContent=document.querySelector('.acılır-content');
/*const contener=document.querySelector('.contentener'); */
const body=document.querySelector('body');

const x=document.querySelector('.x');







cıkıs.addEventListener('click',e=>{
   
    
    
    acılırContent.classList.add('acılırda-icerikleri-delete');

   cıkıs.classList.add('acılırda-icerikleri-delete');

      ornewnek.style.display='none';


 ornewnek.classList.remove('Animation-acılır');


    body.style.overflow='visible';

  



})



contener.addEventListener('click',e=>{
    
    
    if(e.target.classList.contains('li-content')){


              
    ornewnek.classList.add('Animation-acılır');

         ornewnek.style.display='block';
        body.style.overflow='hidden';
 

   acılırContent.classList.remove('acılırda-icerikleri-delete');
   cıkıs.classList.remove('acılırda-icerikleri-delete');

        console.log(e.target);

        let tatlıad=document.querySelector('.tatlıad');

       
        
  
          
          

    }
 


});