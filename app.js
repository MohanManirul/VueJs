var app = Vue.createApp({
    data() { 
        return {
          mobile : "",
          name : {
              firstname : "",
              lastname : ""
          }
        };
    },
   watch : {
       mobile(newValue , oldValue){
           console.log(newValue);
           if(isNaN(newValue)){
               alert("Enter a valid Number");
               this.mobile = oldValue ;
           }
           if(newValue.length == 11){
            alert("An OTP has been sent");
           }
       }
    
    }
  
});

app.mount("#app");