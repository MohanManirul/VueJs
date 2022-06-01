var app = Vue.createApp({
    data() { 
        return {
          name: "hassan"
        };
    } 
});

app.component('contact-details',{
    data(){
        return {
            name : "Mamunur Rashid"
        }
    },
    template:  `
      <h1>Contact Details</h1>
      <p><strong>Name: </strong>Md.Manirul Islam</p>  
      <p><strong>District: </strong>Rajshahi</p>  
      <p><strong>Thana: </strong>Puthia</p>  
    `
});

app.mount("#app");