<script>
export default {
    data() {
        return {};
    },
};
</script>
<template>
    <div class="container-fluid bg-personale">
        <section>
            <div class="container">
                <div class="container">
                    <div class="row">
                    <div class="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
                        <h1 class="text-purple">I piatti che ami, a domicilio!</h1>
                    </div>
                    <div class="col-sm-12 col-md-6 ">
                            <img src="img/deliveboo.png" alt="deliveboo" class="img-fluid img-deliveboo">
                        </div>
                        <!-- <div class="row container-button">
                                    <div class="btn col-6">
                                
                                    </div>
                                </div> -->
                    </div>

                </div>
            </div>
        </section>
    </div>
    <div>

    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee&display=swap");

.text-purple {
    font-size: 47px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #440063;
}

.my-rotate {
    transform: rotate(180deg);
}

.bg-personale {
    background: hsla(175, 100%, 40%, 1);

    background: linear-gradient(135deg, hsla(175, 100%, 40%, 1) 46%, hsla(80, 67%, 76%, 1) 46%);

    background: -moz-linear-gradient(135deg, hsla(175, 100%, 40%, 1) 46%, hsla(80, 67%, 76%, 1) 46%);

    background: -webkit-linear-gradient(-84deg, hsla(175, 100%, 40%, 1) 46%, hsla(80, 67%, 76%, 1) 46%);



}
</style>