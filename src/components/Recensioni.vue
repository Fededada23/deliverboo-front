<script>
export default {
    data() {
        return {
            activeItem: 0,
            reviews: [
                {
                    name: 'Franco Trentalance',
                    img: '/img/wayne-barnett-founder-ceo.jpg',
                    descrizione: 'Ordino con Deliveroo da diversi anni, almeno 6 volte al mese e mi sono sempre trovata benissimo. I rider suonano al citofono (come è giusto che sia) oppure chiamano quando si trovano sotto casa. Consegne sempre puntuali e curate!',
                    stars: '★★★★★',
                    opacity: 0
                },
                {
                    name: 'Myke Chapman',
                    img: '/img/Leonardo_DiCaprio_June_2014.jpg',
                    descrizione: 'Ordino svariate volte da Deliveroo e mi sono sempre trovato bene! Ovviamente in giorni festivi o al sabato è normale che gli ordini tardino anche di 10-15 minuti, c\'è da aspettarselo. Rider molto gentili, app perfetta e servizio impeccabile. Lo promuovo a pieni voti!',
                    stars: '★★★★☆',
                },
                {
                    name: 'Martina Smeraldi',
                    img: '/img/angela-caroll-chief-editor.jpg',
                    descrizione: 'Non capisco tutte le recensioni negative. Quasi mai avuto problemi, e quando ci sono stati, sono stati risolti velocemente dal negozio. Magari dovreste rivalutare da dove ordinare, e consultare prima le recensioni!',
                    stars: '★★★★☆',
                },
                {
                    name: 'Rocco Hunt',
                    img: '/img/American-actor-Robert-De-Niro-2019.webp',
                    descrizione: 'Tutto come programmato. Tracciamento dettagliato dell\'ordine e consegna veloce come da indicazioni. Rider gentile e disponibile nonostante le incomprensioni relative al numero civico. Ottimo servizio!',
                    stars: '★★★★★',
                },
                {
                    name: 'Filomena Mastromartino',
                    img: '/img/angela-lopez-social-media-manager.jpg',
                    descrizione: 'Ho provato altre compagnie di consegna...ritorno sempre a Deliveroo: puntuale, preciso e funzionale!!',
                    stars: '★★★★★',
                }
            ]
        }
    },
    methods: {
        slider() {
            setInterval(() => {
                this.setSlider(this.activeItem == 4 ? 0 : this.activeItem + 1);
            }, 4000);
            let array = this.reviews.length;
            setInterval(function () {
                this.activeItem = (this.activeItem + 1) % array;
                // $(".card-reviews").ready(function () {
                //     $(".img-review").fadeOut(500, () => {
                //         $(".img-review").fadeIn(500);
                //     });
                //     $(".nome-review").fadeOut(500, () => {
                //         $(".nome-review").fadeIn(500);
                //     });
                //     $(".stars").fadeOut(500, () => {
                //         $(".stars").fadeIn(500);
                //     });
                //     $(".descrizione").fadeOut(500, () => {
                //         $(".descrizione").fadeIn(500);
                //     })
                // })

            }, 4000);

        },
        setSlider(index) {
            this.activeItem = index
        }
    },
    beforeMount() {
        this.slider()
    },
}
</script>

<template lang="">
    <div class="conteiner-reviews">
        <div class="row-review">
            <h1>Noi ci mettiamo tutto il nostro impegno! Ecco le recensioni dei nostri clienti!</h1>
            <div class="col-12 card-reviews" data-random="0" data-speed="4000" data-interval="151">
                <div class="img-review" >
                    <img :src="reviews[this.activeItem].img" alt="">
                </div>
                <p class="nome-review">{{reviews[this.activeItem].name}}</p>
                <span class="stars">{{reviews[this.activeItem].stars}}</span>
                <p class="descrizione">❝  {{reviews[this.activeItem].descrizione}}  ❞</p>
                <div class="circles-container">
                    <div class="circle" @click="setSlider(0)" :class="activeItem == 0 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(1)" :class="activeItem == 1 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(2)" :class="activeItem == 2 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(3)" :class="activeItem == 3 ? 'active' : ''"></div>
                    <div class="circle" @click="setSlider(4)" :class="activeItem == 4 ? 'active' : ''"></div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.conteiner-reviews {
    width: 100%;
    background-color: #d0eb99;
    display: flex;
    justify-content: center;
    align-items: center;

    .row-review {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        padding-top: 50px;

        h1 {
            font-size: 30px;
            color: rgba(0, 0, 0, 0.7);
            font-style: italic;
        }

        .card-reviews {
            width: 40%;
            margin: 0 auto;
            border-radius: 10px;
            text-align: center;
            opacity: 1;
            transition: opacity 1s infinite;

            .load {
                opacity: 1;
            }

            .nome-review {
                color: #440063;
                font-style: italic;
                font-size: 25px;
            }

            .descrizione {
                color: rgba(0, 0, 0, 0.7);
                font-size: 15px;

                margin: 20px 0;
            }

            .img-review {
                width: 150px;
                height: 150px;
                margin: 20px auto;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }

            .stars {
                font-size: 25px;
            }

            .circles-container {
                display: flex;
                justify-content: center;
                margin-bottom: 30px;

                .circle {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: rgb(0, 204, 188);
                    margin: 10px;
                    cursor: pointer;
                }


                .circle.active,
                .circle:hover {
                    background-color: #440063;
                }
            }
        }
    }
}
</style>