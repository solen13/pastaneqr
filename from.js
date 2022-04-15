    
let btn =document.querySelector('.btn');


        btn.addEventListener('click',e=>{

           console.log('basıldı kral');
           
            
            var email=document.querySelector('.email');
            var name=document.querySelector('.ad');
            var konu=document.querySelector('.konu');
            var messagee=document.querySelector('.mesaj');

            


       if(name.value ==='') {
         document.querySelector('.active-1').style.opacity='1';
          name.classList.add('error');
        console.log('name bos');
    }else {
         document.querySelector('.active-1').style.opacity='0';
          name.classList.remove('error');
    }



   if(messagee.value === '') {
      document.querySelector('.active-4').style.opacity='1';
      
  messagee.classList.add('error');
    }else {
        document.querySelector('.active-4').style.opacity='0';
         messagee.classList.remove('error');
    }

       if(konu.value === '') {
  document.querySelector('.active-3').style.opacity='1';

  konu.classList.add('error');
    }else {
      document.querySelector('.active-3').style.opacity='0';
       konu.classList.remove('error');
    }

    if(email.value === '') {
         document.querySelector('.active-2').style.opacity='1';
           email.classList.add('error');
           document.querySelector('.lable-mesaj').style.opacity='0';
    }  

    else {
       document.querySelector('.active-2').style.opacity='0';
        email.classList.remove('error');
    }
 
  

    



  



 


 var bodyy='isim:  '+ name.value+ ' Email:  ' + email.value+'  konu:  '+konu.value+'  mesaj:  '+messagee.value;
   
if(email.value!=''&& name.value!='' && konu.value!='' &&messagee.value!='' ){
   

console.log('call');
     console.log(bodyy);
  Email.send({
  Host : "smtp.gmail.com",

 Username : "solenpastanesi60@gmail.com",
  Password : "wrokarlfnetwrrfd",

   To : 'solenpastanesi60@gmail.com',

    From : email.value,

    Subject : konu.value,

    Body : bodyy
  }).then(
            message => alert(message)
            
      );

    


}

else{
   console.log('basıldı');
}



    
        })

        function fromrest(){
         email.value='' && konu.value==''&& email.value=='' &&messagee.value=='';

        }