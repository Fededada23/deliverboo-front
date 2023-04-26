<script>
    export default {
        name: 'AppLoader',

    }
</script>

<template>
    <div class="card loader flex-row justify-content-center align-items-center border-0">
        <div class="lds-ring me-3"><div></div><div></div><div></div><div></div></div>
        <h5 class="m-0 me-2">Sto caricando</h5>
        <div class="dots"><div></div><div></div><div></div></div>
    </div>
</template>

<style scoped lang="scss">

    .loader {
        height: 100vh;
    }
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid lightblue;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: lightblue transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .dots {
        width: 40px;
        height: 16px;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;

        div {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background-color: black;
            animation: 0.4s 0s alternate infinite up-down;
        }

        div:first-child {
            animation-delay: 0.20s;
        }

        div:nth-child(2) {
            animation-delay: 0.40s;
        }

        div:last-child {
            animation-delay: 0.60s;
        }


        @keyframes up-down {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-5px);
            }
        }
    }
</style>