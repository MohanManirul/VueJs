var app1 = Vue.createApp({
    data() { 
        return {
           name: "manirul"
        };
    },
    template : `
        <h2>Enter your name</h2>
        <p>{{ name }}</p>
    `
  
});


app1.mount("#app1");

var app2 = Vue.createApp({
    data(){
        return {
            messege : "Hello World"
        }
    },
    template  : " <h3>{{ messege }}</h3>"
});

app2.mount("#app2");