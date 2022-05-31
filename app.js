var app = Vue.createApp({
    data() { 
        return {
            name : ""
        };
    },
    methods: {
        handleKeyup(e){
            this.name = e.target.value;
        },
        handleFormSubmit(ev) {
            ev.preventDefault();
            
            console.log(ev.target.value);
        }
    },
  
});

app.mount("#app");