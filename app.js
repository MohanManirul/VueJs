var app1 = Vue.createApp({
    data() { 
        return {
            name: ""
        };
    },
    template : `
    
    <h2>Enter Your Name</h2>
    <input type="text" v-model="name" placeholder="Enter First Name"> <hr>
    <p>Your Full Name is : {{ name }}</p>
    `
});

app1.mount("#html_app1");


var app2 = Vue.createApp({
    data() { 
        return {
            messege: "Hello World..."
        };
    },
    template : "<p>Your Full Name is : {{ messege }}</p>"
});

app2.mount("#html_app2");