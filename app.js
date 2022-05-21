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
           
        }
    },

});

app.mount("#app");