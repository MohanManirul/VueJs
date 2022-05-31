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
            console.log("form submitted !");
        },
        handleCardClick(e){
            console.log("Card Clicked...");
        },
        handleViewClick(e){
            console.log("Button Clicked...");
        }
    },
  
});

app.mount("#app");