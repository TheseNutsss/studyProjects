<script>

</script>

<template>
<div class="container">
    <template v-if="$store.state.cart.cart.length">
        <my-cart></my-cart>
        <div class="order-button">
            <my-button @click="$router.push('/checkout')">Оформление заказа</my-button>
        </div>
    </template>
    <template v-else>
         <h2>Ваша корзина пуста :(</h2>
    </template>
</div>
</template>

<style>
.order-button {
    text-align: right;
    margin-bottom: 10px;
}
</style>
