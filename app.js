

// var app = Vue.createApp({
//     data() {
//         return {
//             count:0
//         };
//     },
    
//     // method declaratio 
//     // methods: {
//     //     increase() {
//     //         //this.count = this.count + 1;
//     //         this.count++;
//     //     },

//     //     decrease() {
//     //        // this.count = this.count - 1;
//     //         this.count--;
//     //     },
//     // },
    
//     // methods argument 
//     methods: {
//             increase(amount) {
//                 this.count = this.count + amount;
//                 //this.count++;
//             },
    
//             decrease(amount) {
//                this.count = this.count - amount;
//                 //this.count--;
//             },
//             test(e){
//                 console.log(e);
//             }
//         },

// });

// app.mount("#app");

var app = Vue.createApp({
    data() {
        return {
            
        };
    },

    methods: {
         handleKeyup(e){
            console.log(e);
         }
    },
});

app.mount("#app");