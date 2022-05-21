var app = Vue.createApp({
    data() {
        return {
            activeClass: "red"
        };
    },
    methods: {
        setClass(ClassName){
            this.activeClass = ClassName;
        }
    },

    

});

app.mount("#app");