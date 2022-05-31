var app = Vue.createApp({
    data() { 
        return {
          skills : [
              {name: "HTMl" , experience : 1},
              {name: "CSS" , experience : 2},
              {name: "JavaScript" , experience : 3},
              {name: "PHP" , experience : 4},
              {name: "MySqli" , experience : 1},
              {name: "Ajax" , experience : 2},
              {name: "jQuery" , experience : 3},
              {name: "laravel" , experience : 4},
          ]
        };
    },
    methods: {
       
    },
  
});

app.mount("#app");