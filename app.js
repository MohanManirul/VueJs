var app = Vue.createApp({
    data() { 
        return {};
    },
});

app.component('contact-details' , {
    data(){
        return{
           name : "Mamunur Rashid" 
        }
        
    },
    template: `
        <h2>Contact Details</h2>
        <p><strong>Name:</strong>Mamunur Rashid</p>
        <p><strong>Web:</strong>www.mamunbd.com</p>
    `
});

app.mount("#app");