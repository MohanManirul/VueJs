var app = Vue.createApp({
    data() {
        return {
            skills : ["HTML", "CSS", "JS"],
            newSkill : ""
        };
    },
    
    methods: {
        addSkill(){
            this.skills.push(this.newSkill);
           
        },
        removeItem(i){
            this.skills.splice(i , 1);
        }
    },

});

app.mount("#app");