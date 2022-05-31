var app = Vue.createApp({
    data() { 
        return {
            num : "",
            result : ""
        };
    },
    methods: {
        
        double(){
            this.result = this.num * 2 ;
           
        },
        squire(){
            this.result = this.num * this.num ;
        },
        reset(){
            this.num = "" ;
            this.result = "" ;
        }

    },
  
});

app.mount("#app");