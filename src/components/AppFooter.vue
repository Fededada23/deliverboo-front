<script>
export default {
    name: 'AppFooter',

    data() {
        return {
            socials: [
                { name: 'Facebook', icon: 'fa-brands fa-facebook', class: 'facebook' },
                { name: 'Instagram', icon: 'fa-brands fa-instagram', class: 'instagram' },
                { name: 'Twitter', icon: 'fa-brands fa-twitter', class: 'twitter' },
                { name: 'LinkedIn', icon: 'fa-brands fa-linkedin', class: 'linkedin' }
            ]
        };
    },
    methods: {
        /* animazione social icon */
        hoverSocial(index) {
            const socialLink = document.querySelectorAll('.social-link')[index];
            socialLink.classList.add('hover');
        },
        unhoverSocial(index) {
            const socialLink = document.querySelectorAll('.social-link')[index];
            socialLink.classList.remove('hover');
        }
    }
};
</script>

<template>
    <footer class="bd-footer  mt-5 bg-body-tertiary">
        <section class="footer-section py-4 py-md-5">
            <div class="container-fluid py-md-3 px-5 px-md-3 text-body-secondary shadow">
                <div class="row d-flex">
                    <nav
                        class="d-flex flex-column flex-md-row navbar-expand-md flex-md-nowrap p-3 shadow my-5 bg-navbar shadow">

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4 class="text-uppercase mb-4 front-weight-bold">Scopri Deliveboo</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Investitori</a></li>
                                <li class="mb-1"><a href="#">Chi siamo</a></li>
                                <li class="mb-1"><a href="#">Ristoranti</a></li>
                                <li class="mb-1"><a href="#">Altro</a></li>
                                <li class="mb-1"><a href="#">Programmazione</a></li>
                                <li class="mb-1"><a href="#">Design</a></li>
                                <li class="mb-1"><a href="#">Lavora con noi</a></li>
                                <li class="mb-1"><a href="#">Diventa nostro partner</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4 class="text-uppercase mb-4 front-weight-bold">Note legali</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Termini & Condizioni</a></li>
                                <li class="mb-1"><a href="#">Informativa sulla privaci</a></li>
                                <li class="mb-1"><a href="#">Cookies</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4 class="text-uppercase mb-4 front-weight-bold">Aiuto</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Contatti</a></li>
                                <li class="mb-1"><a href="#">FAQ</a></li>
                                <li class="mb-1"><a href="#">Tipi di cucina</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4 class="text-uppercase mb-4 front-weight-bold">Porta Deliveboo con te</h4>
                            <div class="social-links">
                                <ul class="list-unstyled">
                                    <li class="mb-1"><a
                                            href="https://itunes.apple.com/us/app/Deliveboo-della-tua-app/idid-numero-del-tuo-bundle">
                                            <img alt="Disponibile su App Store"
                                                src="https://linkmaker.itunes.apple.com/assets/shared/badges/it-it/appstore-lrg.svg"
                                                height="50" />
                                        </a>
                                    </li>
                                    <li class="mb-1"><a
                                            href="https://play.google.com/store/apps/details?id=nome-del-tuo-pacchetto">
                                            <img alt="Disponibile su Google Play"
                                                src="https://play.google.com/intl/en_us/badges/static/images/badges/it_badge_web_generic.png"
                                                height="65" />
                                        </a>
                                    </li>
                                </ul>
                                <hr>
                                <ul class="d-flex justify-content-between align-items-center mrlt-social">
                                    <li v-for="(social, index) in socials" :key="index" class="mb-1 fs-3">
                                        <a href="#" class="social-link" :class="social.class"
                                            @mouseover="hoverSocial(index)" @mouseout="unhoverSocial(index)">
                                            <i :class="social.icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div class="container-fluid">
                        <div class="row d-flex justify-content-center align-items-center copyrigt">
                            <div class="col-md-3 col-sm-6 col-12 footer-links">
                                <ul class="d-flex justify-content-between align-items-center m-cr">
                                    <li class="mb-1 fs-6"><a class="text-white shadow" href="#"><i class="fa-regular fa-copyright"> 2023</i> Deliveboo</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
</template>


<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section {
    background-color: rgba(0, 204, 188, 255);
    display: flex;
    align-items: center;
}

.bg-navbar {
    background-color: #2e3333;
    color: #c8c8fa;
}

.footer-links {


    ul li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #827f7f;
    }
}

.mrlt-social {
    margin-right: 0.5em;
    margin-left: -2em;
    margin-top: 2em;
}

.copyrigt {
    margin-top: -1em;
}

/* multimedial social */

.social-link {
    display: inline-block;
    position: relative;
    color: #000;
    /* Colore normale dei social */
    transition: all 0.3s ease-out;
}

.social-link:hover {
    color: #fff;
    /* Colore quando passa il mouse sopra */
}

.social-link:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    /* Colore di sfondo normale */
    transform-origin: center center;
    transition: all 0.3s ease-out;
    opacity: 0;
}

.social-link:hover:before {
    transform: rotateY(180deg);
    opacity: 1;
}

.social-link.facebook:before {
    background-color: #3b5998;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-left: -31%;
    margin-top: -1px;
    /* Colore di sfondo Facebook */
}

.social-link.instagram:before {
    background-color: #dd2a7b;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-left: -35%;
    margin-top: -1px;
    /* Colore di sfondo Instagram */
}

.social-link.twitter:before {
    background-color: #1da1f2;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-left: -28%;
    margin-top: -1px;
    /* Colore di sfondo Twitter */
}

.social-link.linkedin:before {
    background-color: #0077b5;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    margin-left: -40%;
    margin-top: -1px;
    /* Colore di sfondo LinkedIn */
}

.fa-facebook,
.fa-instagram,
.fa-twitter,
.fa-linkedin {
    transition: all 0.3s ease-out;
}

.social-link:hover .fa-facebook,
.social-link:hover .fa-instagram,
.social-link:hover .fa-twitter,
.social-link:hover .fa-linkedin {
    transform: rotateY(180deg);
}
</style>