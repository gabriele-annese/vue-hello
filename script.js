// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data di Vue.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

// creiamo istanza
const app = new Vue({
    el: '#app',
    data:{
        title: "Hello World",
        img : 'https://www.dexerto.com/wp-content/uploads/2021/06/03/hasbulla-insta.jpg',
        text: 'Hasbulla Magomedov is an 18-year-old blogger from Makhachkala, Russia. He was nicknamed Mini Khabib, inspired by former UFC lightweight champion Khabib Nurmagomedov. The TikTok star earned his nickname after posting several hilarious videos of him pretending to fight children Although Hasbulla Magomedov is an adult, he has the characteristics of a child. Based on his height, face and voice, Hasbulla Magomedov could be mistaken for a five-year-old.According to Hasbulla Magomedov, he began publishing his TikTok videos just for fun. Soon after, he realized he had fans when people on the streets recognized him.While UFC fans have enjoyed Mini Khabib s comedic posts, it appears he s not interested in sticking around as a blogger for too long. In an interview with Russian media, Magomedov revealed that he intends to become a theologian one day.',
        display: 'd-none'
    }
        
})