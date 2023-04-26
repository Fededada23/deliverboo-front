<script>
    export default {
        name: 'AppFailed404',
    }
</script>

<template>
    <main>
        <section class="failed">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="mycard text-center">
                            <h2>Pagina non trovata</h2>
                            <p>Mi spiace ma non è stato possibile trovare la pagina.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    .failed {
        height: calc(100vh - 140px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>