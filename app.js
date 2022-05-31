var app1 = Vue.createApp({
    data() { 
        return {
<<<<<<< HEAD
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
=======
            msg : "Counter App" ,
            count : 0
        };
    },
    methods: {
        increase() {            
           
        },
        decrease() {
            this.count-- ;
        }
    },
  
>>>>>>> origin/mohan
});

app2.mount("#app2");