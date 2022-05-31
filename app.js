var app = Vue.createApp({
    data() { 
        return {
            name : ""
        };
    },
    methods: {
        handleMethod(e){
            this.name = e.target.value;
        }
    },
  
});

app.mount("#app");