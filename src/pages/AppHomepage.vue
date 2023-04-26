<script>
import Recensioni from "../components/Recensioni.vue";
import Jumbotron from "../components/Jumbotron.vue";
export default {
    components: { Jumbotron, Recensioni },
    name: "AppHome",
    data() {
        return {

            //* CAROSELLO
            activeIndex: 0,
            slideInterval: null,

            restaurants: [
                {
                    image: "/img/ristorante-hamburger1.jpg",
                    description: "I grandi classici che scaldano il cuore, perfetti in ogni momento."
                },
                {
                    image: "/img/ristorante-dolci.jpg",
                    description: "I dessert  stimolano la nostra golosità, scoprili insieme a noi!"
                },
                {
                    image: "/img/ristorante-foodfotos1.jpg",
                    description: "Carni di: BLACK ANGUS, WAGYU e SUINO 100% Italiano "
                },
                {
                    image: "/img/ristorante-giapponesi.jpg",
                    description: "I nostri migliori ristoranti, selezionati per te!"
                },
                {
                    image: "/img/ristorante-dolce.jpg",
                    description: "Voglia di dolce? Vieni a vedere le nostre novità"
                },
                {
                    image: "/img/ristorante-finger.jpg",
                    description: "Le migliori trattorie vicino casa tua"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Voglia di una pizza? Scopri tantissimi gusti qui su Deliveboo!"
                },

            ],

            //* 1° SEZIONE

            /* 2 Colonne */
            description1: 'Burger King, BBQ Brothers, KFC e molto altro.. scopri di più!',
            description2: 'Dolci piaceri per rendere la giornata ancora più gustosa.',

            /* 3 Colonne */
            selections: [
                {
                    image: "/img/ristorante-foodfotos1.jpg",
                    description: "I grandi classici che scaldano il cuore, perfetti in ogni momento."
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "I più famosi, i più buoni, i preferiti. Quelli che trovi solo su Deliveboo."
                },
                {
                    image: "/img/premium/nima-sushi.webp",
                    description: "Serve una scusa per stare insieme? Ordina dai ristoranti che trasformeranno la tua serata in un vera festa."
                },

            ],

            //* 2° SEZIONE

            premiums: [
                {
                    image: "/img/premium/McDonald.webp",
                    description: "McDonald's"
                },
                {
                    image: "/img/premium/nima-sushi.webp",
                    description: "Nima Sushi"
                },
                {
                    image: "/img/premium/Pokeria-by-Nima.webp",
                    description: "Pokèria by NIMA"
                },
                {
                    image: "/img/premium/daruma_kosher.webp",
                    description: "Daruma Kosher"
                },
                {
                    image: "/img/premium/temakinho.webp",
                    description: "Temakinho"
                },
                {
                    image: "/img/premium/pizza-barberè.webp",
                    description: "Berberè Pizzeria"
                },
                {
                    image: "/img/premium/Old-Wild-West-1.jpg",
                    description: "Old Wild West"
                },
                {
                    image: "/img/premium/roadhouse_experience.jpg",
                    description: "Roadhouse"
                },
                {
                    image: "/img/premium/Kfc-2.webp",
                    description: "KFC"
                },
                {
                    image: "/img/premium/la-piadineria.jpg",
                    description: "La piadineria"
                },
                {
                    image: "/img/premium/burger-king.jpg",
                    description: "Burger King"
                },
                {
                    image: "/img/premium/grom.jpg",
                    description: "Grom"
                },

            ],

            //* 3° Sezione

            badge0: 'Halal',
            badge1: 'Colazione',
            badge2: 'Vegetariano',
            badge3: 'Messicano',
            badge4: 'Dessert',
            badge5: 'Indiano',
            badge6: 'Greco',
            badge7: 'Giapponese',
            badge8: 'Cinese',
            badge9: 'Libanese',
            badge10: 'Americano',
            badge11: 'Italiano',
            badge12: 'Thailandese',
            badge13: 'Sushi',
            badge14: 'Pizza',


            /* titoli delle sezioni */
            title0: 'Scopri i nostri ristoranti',
            title0a: 'Scegli tra centinaia di opzioni per il tuo prossimo pasto',
            title1: 'La selezione di Deliveboo',
            title2: 'I tuoi piatti preferiti, consegnati da noi.',
            title3: 'Cerchi qualcos\'altro?',


        };
    },
    mounted() {
        this.startAutoPlay();
    },

    methods: {

        //* Precedente Slide 
        previousSlide() {
            this.activeIndex =
                (this.activeIndex === 0) ? this.restaurants.length - 1 : this.activeIndex - 1;
        },

        //* Prossima Slide 
        nextSlide() {
            this.activeIndex =
                (this.activeIndex === this.restaurants.length - 1) ? 0 : this.activeIndex + 1;
        },

        //*  Avvia l'Auto Play
        startAutoPlay() {
            this.slideInterval = setInterval(() => {
                this.nextSlide();
            }, 3000);
        },

        //* Ferma l'Auto Play
        stopAutoPlay() {
            clearInterval(this.slideInterval);
        }

    }

}
</script>
          
<template>
    <Jumbotron></Jumbotron>

    <!-- * Main top -->

    <!-- Scopri i ristoranti -->
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h1 class="fw-bold">{{ title0 }}</h1>
                <p class="lead fs-3">{{ title0a }}</p>
            </div>
        </div>
    </div>

    <!-- * Inizio Carosello -->
    <div class="container">
        <div class="carousel" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
            <a href="#" class="text-decoration-none">
                <div class="slide shadow" v-for="(restaurant, index) in restaurants" :key="index"
                    :class="{ active: index === activeIndex }">
                    <img :src="restaurant.image" alt="Restaurant image" class="rounded">
                    <p class="description shadow">{{ restaurant.description }}</p>
                </div>
            </a>
            <div class="controls">
                <button @click="previousSlide" class="prev-btn">&#10094;</button>
                <button @click="nextSlide" class="next-btn">&#10095;</button>
            </div>
        </div>
    </div>
    <!-- * fine carosello -->

    <!-- * 1° sezione - La selezione -->

    <!-- 2 colonne -->
    <div class="container-xl">

        <div class="row">
            <div class="col-12 text-center mb-2 my-5">
                <h1 class="fw-bold">{{ title1 }}</h1>
            </div>
        </div>
        <a href="#" class="text-decoration-none">
            <div class="row my-4 text-center">
                <div class="col-sm-6 col-md-6 col-lg-8 g-4">
                    <div class="card shadow">
                        <img src="/img/cibo-nei-fast-food.jpg" style="height: 18em;object-fit: cover;"
                            class="card-img-top p-2" alt="Image-Restaurant">
                        <div class="card-body" style="height: 5em;">
                            <p class="card-text">{{ description1 }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6 col-lg-4 g-4">
                    <div class="card shadow">
                        <img src="/img/dolci2.jpg" class="card-img-top p-2" style="height: 18em;object-fit: cover"
                            alt="Image-Restaurant">
                        <div class="card-body" style="height: 5em;">
                            <p class="card-text">{{ description2 }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>

        <!-- 3 colonne - 1° Sezione -->
        <a href="#" class="text-decoration-none">
            <div class="row row-cols-1 row-cols-md-3 row-cols-sm-1 g-4">
                <div class="col" v-for="(selection, index) in selections" :key="index">
                    <div class="card shadow" style="height: 24em;">
                        <img :src="selection.image" class="card-img-top p-2 rounded" alt="Image-Restaurant"
                            style="height: 17em;object-fit: cover">
                        <div class="card-body py-4 text-center">
                            <p class="card-text">{{ selection.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>


    <!-- * 2° Sezione - I preferiti -->

    <div class="colore-bg bg-warning bg-gradient" style="margin-top: 7em;">
        <div class="container-xl text-center">
            <h2 class="my-5 fs-1 pt-4 fw-bold">{{ title2 }}</h2>
            <!-- 3 colonne -->
            <a href="#" class="text-decoration-none">
                <div class="row text-center d-flex align-content-center text-white">
                    <div id="gap" class=" d-flex flex-wrap justify-content-center mb-5em ">
                        <div id="cont-img" class="m-2 mb-4 card my-2 col-sm-5 col-md-3 col-xl-3 shadow"
                            style="width: 25rem; height:20em ;object-fit: cover" v-for="(premium, index) in premiums"
                            :key="index">
                            <img id="img-dim" :src="premium.image"
                                class="card-img-top p-1 w-auto h-75 rounded border-light-subtle border-bottom"
                                alt="Image-premium">
                            <div class="card-body">
                                <p class="card-text text-black fw-bolder ">{{ premium.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>

    <!-- * 3° Sezione - Cerchi qualcos'altro? -->

    <div class="container-xl text-center">
        <h2 class="fs-1 pt-5 fw-bold">{{ title3 }}</h2>

        <div class="row my-4 shadow">
            <div class="gap-2 p-3 col-12 d-flex flex-wrap justify-content-left m-auto w-100 fs-2 shadow">

                <!-- #0 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge0 }}</span>
                </a>
                <!-- #1 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge1 }}</span>
                </a>
                <!-- #2 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge2 }}</span>
                </a>
                <!-- #3 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge3 }}</span>
                </a>
                <!-- #4 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge4 }}</span>
                </a>
                <!-- #5 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge5 }}</span>
                </a>
                <!-- #6 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge6 }}</span>
                </a>
                <!-- #7 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge7 }}</span>
                </a>
                <!-- #8 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge8 }}</span>
                </a>
                <!-- #9 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge9 }}</span>
                </a>
                <!-- #10 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge10 }}</span>
                </a>
                <!-- #11 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge11 }}</span>
                </a>
                <!-- #12 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge12 }}</span>
                </a>
                <!-- #13 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge13 }}</span>
                </a>
                <!-- #14 -->
                <a class="dist-badge" href="#">
                    <span class="badge opacity-75 text-bg-secondary">{{ badge14 }}</span>
                </a>
            </div>
        </div>
    </div>

    <Recensioni></Recensioni>
</template>


<!-- ! STYLE -->

<style scoped lang="scss">
//* Carousel

.carousel {
    position: relative;
    margin: 0 auto;
    max-width: 100%;
    height: 22rem;
    overflow: hidden;


    .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .slide.active {
        opacity: 1;
    }

    .slide img {
        width: 100%;
        height: 21rem;
        object-fit: cover;
    }

    .description {
        position: absolute;
        top: 62%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0rem;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        font-size: 1.5rem;
        width: 60%;
        max-width: 65%;
        z-index: 1;
    }

    .controls {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }

    .prev-btn,
    .next-btn {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        font-size: 2rem;
        /* padding: 0.5rem 1rem; */
        border: none;
        cursor: pointer;
    }

    .prev-btn:hover,
    .next-btn:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
}

//* Fine Carosello 

//? 1° SEZIONE

//* 3 Colonne
.mb-5em {
    margin-bottom: 5em; //! utilizzato per gli spazi bottom section
}

/* 3° Sezione - Badge */

.dist-badge {
    margin: 1vmin;
}
</style>