var app = Vue.createApp({
    data() {
        return {
            msg : "first app created"
        }
    },

    methods: {
        handleInput(e){
            console.log(e);
        }
    }

    
});

app.mount("#app");