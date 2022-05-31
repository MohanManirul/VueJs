var app = Vue.createApp({
    data() { 
        return {
           skills : [
               {name: "HTML" , experience : 1},
               {name: "css" , experience : 2},
               {name: "js" , experience : 3},
               {name: "php" , experience : 4},
               {name: "laravel" , experience : 5}
           ],
           newSkill : {name  : "" , experience:0}
        };
    },
    methods: {
        addSkill(){
            this.skills.push(this.newSkill);
            this.newSkill = {}
        },
        removeSkill(i){
            this.skills.splice(i , 1);
        }
    },
  
});

app.mount("#app");