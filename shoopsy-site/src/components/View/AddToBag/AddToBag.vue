<template>
<div class="products">
    <!-- <Menitems v-for="product in products" :key="product.id" :product="product" class="products__item"> -->
    <Menitems>
        <div id="products" style="">
            <div class="row d-flex " >

                <div class="col-md-3 ">
                    <div class="product-grid ">
                        <div class="product-image" style="width: 342px;height:312p;">
                            <a href="#" class="image">
                                <img :src="products.imges">
                            </a>
                            <span class="product-discount-label">-23%</span>
                            <ul class="product-links">
                                <li><a href="#"><i class="fa fa-search"></i></a></li>
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-random"></i></a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="containers">
                        <div class="card-left">

                        </div>
                        <div class="card-right">
                            <h2>{{ products.title }}</h2>

                            <h4>{{ products.price }} <span> $50.00</span></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit,
                                omnis quis, esse
                                tenetur eligendi est quibusdam enim in temporibus sint architecto facere
                                numquam
                                voluptas. Enim porro dolorum odio labore!</p>

                            <div class="form">
                                <div class="form-group">
                                    <label>Color</label>
                                    <select>
                                        <option>Black</option>
                                        <option>White</option>
                                        <option>Green</option>
                                        <option>Yellow</option>
                                        <option>Brown</option>
                                        <option>Blue</option>
                                        <option>SkyBlue</option>
                                        <option>Pink</option>
                                        <option>Orange</option>

                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>Qty</label>

                                    <div class="input-group">
                                        <button class="minus">-</button>
                                        <input type="text" value="1" id="qty">
                                        <button class="plus">+</button>
                                    </div>
                                </div>

                                <button class="btn-cart" v-on:click="OrderNow">Place Order</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </Menitems>
</div>
</template>

<script>
import Menitems from '@/components/View/cartmenitems/Menitems.vue'
export default {
    name: "Add-bag",
    
     props: {
        products:{
            type:Array,
        defualt:()=>[]        }
     },
    components: {
        Menitems
    }
}
</script>

<style scoped>
.containers {
    width: 895px;
    height: 450px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    gap: 10px;

}

.product-grid {
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

img {
    width: 100%;
    display: block;
}

.card-left {
    width: 360px;
    overflow: hidden;
}

.main-image {
    display: flex;
    transition: all 0.5s ease;
}

.img-select {
    display: flex;
    margin-top: 2px;
}

.img {
    border: 2px solid white;
}

.active {
    border-color: black;

}

.card-right {
    padding: 10px;
}

.card-right h2 {
    font-weight: 400;

}

.card-right h4 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
}

.card-right h4 span {
    text-decoration: line-through;
    color: rgba(0, 0, 0, 0.2);
    font-size: 15px;
    padding-left: 15px;
}

.card-right p {
    margin: 15px 0;
    color: rgba(0, 0, 0, 0.5);
    padding: 10px 0;
}

.form {
    display: flex;
    justify-content: space-between;
    width: 400px;
    margin-bottom: 20px;
}

.form-group label,
.form-group select {
    display: block;
}

.form-group select {
    width: 150px;
    height: 30px;
    color: #0b0a0a;
    font-size: small;
    border: 1px solid #0b0a0a;
    border-radius: 3px;
}

.input-group {
    display: flex;
    width: 220px;
    height: 30px;
}

.input-group input {
    width: 50px;
    border: 1px solid #ccc;
    outline: none;
    padding-left: 20px;
    font-size: 18px;
}

.input-group button {
    width: 30px;
    outline: none;
    border: none;
    background-color: #111;
    color: white;
}

.btn-cart {
    margin-left: -117px;
    margin-top: 148px;
    width: 150px;
    height: 40px;
    border: none;
    outline: none;
    color: white;
    background-color: #FF8401;
    font-size: 16px;
}
</style>
