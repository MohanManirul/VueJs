var app1 = Vue.createApp({
    data() { 
        return {
          name: ""
        };
    },
    template :`
        <p>from app1</p>
        <p>hello</p>
        <h3>your Name is {{ name }}</h3>
    `

 
});

app1.mount("#app1");

var app2 = Vue.createApp({
    data() { 
        return {
          
        };
    },
    template:"<p>from app2</p>"
 
});

app2.mount("#app2");