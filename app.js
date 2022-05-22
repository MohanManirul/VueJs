var app = Vue.createApp({
    data() {
        return {
            show:false,
            skills:[
                {name : "html" , experience:5},
                {name : "css" , experience:2},
                {name : "javascript" , experience:9},
                {name : "php" , experience:5},
                {name : "sql" , experience:6},
                {name : "laravel" , experience:3},
                {name : "vue" , experience:2}
            ]
        };
    },
    
    methods: {
       toggle(){
           this.show = ! this.show ; 
       }
    },

});

app.mount("#app");