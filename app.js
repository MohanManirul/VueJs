var app = Vue.createApp({
    data() { 
        return {
            num : "",
            result : ""
        };
    },
    methods: {
        // received input value as num 
        handleInput(e){
            this.num = e.target.value;
        },

        double(){
            this.result = this.num * 2 ;
        },
        squire(){
            this.result = this.num * this.num ;
        },
        reset(){
            this.result = this.num * 0 ;
        }

    },
  
});

app.mount("#app");