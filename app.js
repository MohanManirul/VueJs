var app = Vue.createApp({
    data() { 
        return {
          mobile : "",
          name:{
              firstName: "",
              lastName: "",
          }

        };
    },
    watch : {
        mobile(newValue , oldValue){
            console.log(newValue);
            if(isNaN(newValue)){
                alert('Enter valid mobile number');
                this.mobile = oldValue;
            }
            if(newValue.length == 11){
                alert('An OTP hasbeen sent');
            }
        },

        'name.firstName': function(newValue ){
            console.log(newValue); 
        },
        name:{
            deep : true ,
            handler : function(newValue , oldValue){
                console.log(newValue , oldValue);
            }
        }
    }

});

app.mount("#app");