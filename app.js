var app1 = Vue.createApp({
    data() { 
        return {
           name: "asasa"
        };
    },
  
});


app1.mount("#app1");

var app2 = Vue.createApp({
    data(){
        return {
            messege : "Hello World"
        }
    }
});

app2.mount("#app2");