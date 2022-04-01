var models = [
    {
       
        image : './image/trilce.jpg',
     
    },
    {
       
        image : './image/trilce.jpg',
       
    },
    {
        
        image : './image/sutlu1.jpg',
        
    },
    {
        image : './image/gulac.jpg',
     
    },
  
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
        color:'#f0f8ff'
    },
    {
        color:'#000000'
    }
      
]

var set={
    duration : '150',
   
};

setInterval(function(){


var col=colors.length;
var i=0;
 i= Math.floor(Math.random()*col)





document.querySelector('.tlf').style.color=colors[i].color ;


},set.duration)






 










