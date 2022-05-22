var app = Vue.createApp({
    data() { 
        return {
            review : "",
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
    computed : {
        totalCount1(){
            console.log("count from computed property");
            return this.skills.length;
        },

        experiencedSkills() {
            let es = this.skills.filter((item) => {
                    return item.experience >= 10 ;
                }) ;
            return es ;
        }
    },
    methods: {
       removeSkill(i){
        this.skills.splice(i,1);
       },

       totalCount(){
           console.log("count from method");
        return this.skills.length;
       }
    },

});

app.mount("#app");