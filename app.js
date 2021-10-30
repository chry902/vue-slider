/**Descrizione:
Rifare l'esercizio dello slider come fatto assieme in classe.
Bonus:
Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente. */

const app = new Vue({
    el: "#app",
    data:
    {
        slides: [
            {
                item: './img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                item: './img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                item: './img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                item: './img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                item: './img/05.jpg',
                title: 'Paradise',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },


        ],
        counter: 0,
    },


    /**  methods: {
    
            slideUp: function () {
                this.counter--;
                if (this.counter < 0) {
                    this.counter = this.slides.length - 1;
                }
            },
    
    
            slideDown: function () {
                this.counter++;
                if (this.counter == this.slides.length - 1) {
                    this.counter = 0;
                }
            },
    
    
    
    
        }*/


})


