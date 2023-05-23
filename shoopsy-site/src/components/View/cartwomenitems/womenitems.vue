<template>
<div class="container" style="  width: 1365px;">
    <router-link to="/" style="  float: left;">Home</router-link>
    <div class="bg-white rounded d-flex align-items-center justify-content-between" id="header"> <button class="btn btn-hide text-uppercase" type="button" data-toggle="collapse" data-target="#filterbar" aria-expanded="false" aria-controls="filterbar" id="filter-btn" @click="changeBtnTxt"> <span class="fas fa-angle-left" id="filter-angle"></span> <span id="btn-txt">Hide filters</span> </button>
        <nav class="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto" style="box-shadow: none;"> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mynav" aria-controls="mynav" aria-expanded="false" aria-label="Toggle navigation" @click="chnageIcon" id="icon"> <span class="navbar-toggler-icon"></span> </button>
            <div class="collapse navbar-collapse" id="mynav">
                <ul class="navbar-nav d-lg-flex align-items-lg-center">
                    <li class="nav-item active"> <select name="sort" id="sort">
                            <option value="" hidden selected>Sort by</option>
                            <option value="price">Price</option>
                            <option value="popularity">Popularity</option>
                            <option value="rating">Rating</option>
                        </select> </li>
                    <li class="nav-item d-inline-flex align-items-center justify-content-between mb-lg-0 mb-3">
                        <div class="d-inline-flex align-items-center mx-lg-2" id="select2">
                            <div class="pl-2">Products:</div> <select name="pro" id="pro">
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
                        </div>
                        <div class="font-weight-bold mx-2 result">18 from 200</div>
                    </li>
                    <li class="nav-item d-lg-none d-inline-flex"> </li>
                </ul>
            </div>
        </nav>
        <div class="ml-auto mt-3 mr-2">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"> <a class="page-link" href="#" aria-label="Previous"> <span aria-hidden="true" class="font-weight-bold">&lt;</span> <span class="sr-only">Previous</span> </a> </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">..</a></li>
                    <li class="page-item"><a class="page-link" href="#">24</a></li>
                    <li class="page-item"> <a class="page-link" href="#" aria-label="Next"> <span aria-hidden="true" class="font-weight-bold">&gt;</span> <span class="sr-only">Next</span> </a> </li>
                </ul>
            </nav>
        </div>
    </div>
    <div id="content" class="my-5">
        <div id="filterbar" class="collapse">
            <div class="box border-bottom">
                <div class="form-group text-center">
                    <div class="btn-group" data-toggle="buttons"> <label class="btn btn-success form-check-label" v-on:click="fatchdata('skincare')">
                            <input class="form-check-input" type="radio"> Reset </label> <label class="btn btn-success form-check-label active" v-on:click="fatchdata('')"> <input class="form-check-input" type="radio" checked> Apply </label> </div>
                </div>
                <div> <label class="tick">New <input type="checkbox" checked="checked"> <span class="check"></span>
                    </label> </div>
                <div> <label class="tick">Sale <input type="checkbox"> <span class="check"></span> </label> </div>
            </div>
            <div class="box border-bottom">
                <div class="box-label text-uppercase d-flex align-items-center">Outerwear <button class="btn ml-auto" type="button" data-toggle="collapse" data-target="#inner-box" aria-expanded="false" aria-controls="inner-box" id="out" @click="outerFilter"> <span class="fas fa-plus" style="  margin-left: 212px;"></span> </button> </div>
                <div id="inner-box" class="collapse mt-2 mr-1">
                    <div class="my-1" > <label class="tick"   v-on:click="fatchdata('laptops')"> Laptops <input type="checkbox" checked="checked"  class="checkbox" value="Laptop" id="laptop"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick" v-on:click="fatchdata('fragrances')" >Fragrances <input type="checkbox"  class="checkbox" value="fragrance" id="frangrance"> <span class="check" ></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick" v-on:click="fatchdata('skincare')" >Skincare <input type="checkbox" class="checkbox" value="skincare" id="skincare">  <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Coat <input type="checkbox"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Raincoat <input type="checkbox"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Handbag <input type="checkbox" checked> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Warm vest <input type="checkbox"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Wallets <input type="checkbox" checked> <span class="check"></span> </label> </div>
                </div>
            </div>
            <div class="box border-bottom">
                <div class="box-label text-uppercase d-flex align-items-center">season <button class="btn ml-auto" type="button" data-toggle="collapse" data-target="#inner-box2" aria-expanded="false" aria-controls="inner-box2"><span class="fas fa-plus" style="  margin-left: 236px;"></span></button> </div>
                <div id="inner-box2" class="collapse mt-2 mr-1">
                    <div class="my-1"> <label class="tick">Spring <input type="checkbox" checked="checked"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Summer <input type="checkbox"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Autumn <input type="checkbox" checked> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Winter <input type="checkbox"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Rainy <input type="checkbox"> <span class="check"></span>
                        </label> </div>
                </div>
            </div>
            <div class="box border-bottom">
                <div class="box-label text-uppercase d-flex align-items-center">price <button class="btn ml-auto" type="button" data-toggle="collapse" data-target="#price" aria-expanded="false" aria-controls="price"><span class="fas fa-plus" style="  margin-left: 248px;"></span></button>
                </div>
                <div class="collapse" id="price">
                    <div class="middle">
                        <div class="multi-range-slider"> <input type="range" id="input-left" min="0" max="100" value="10"> <input type="range" id="input-right" min="0" max="100" value="50">
                            <div class="slider">
                                <div class="track"></div>
                                <div class="range"></div>
                                <div class="thumb left"></div>
                                <div class="thumb right"></div>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-2">
                        <div> <span id="amount-left" class="font-weight-bold"></span> </div>
                        <div> <span id="amount-right" class="font-weight-bold"></span> </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-label text-uppercase d-flex align-items-center">size <button class="btn ml-auto" type="button" data-toggle="collapse" data-target="#size" aria-expanded="false" aria-controls="size"><span class="fas fa-plus" style="  margin-left: 256px;"></span></button>
                </div>
                <div id="size" class="collapse">
                    <div class="btn-group d-flex align-items-center flex-wrap" data-toggle="buttons"> <label class="btn btn-success form-check-label"> <input class="form-check-input" type="checkbox">
                            80 </label> <label class="btn btn-success form-check-label"> <input class="form-check-input" type="checkbox" checked> 92 </label> <label class="btn btn-success form-check-label">
                            <input class="form-check-input" type="checkbox" checked> 102 </label> <label class="btn btn-success form-check-label"> <input class="form-check-input" type="checkbox" checked> 104 </label> <label class="btn btn-success form-check-label"> <input class="form-check-input" type="checkbox" checked> 106 </label> <label class="btn btn-success form-check-label"> <input class="form-check-input" type="checkbox" checked> 108 </label> </div>
                </div>
            </div>
        </div>
        <div id="products">
            <div class="row ">
                <womenproductitem class="display" v-for="product in currentProducts" :key="product.id" :product="product" />
<div class="categorys"><p id="valuelist"></p></div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import womenproductitem from '@/components/View/cartwomenitems/Womenproductitem'

export default {
    name: "cart-items",
    components: {
        womenproductitem
    },
    data() {
        return {
            category: [],
            products: [{
                    "id": 1,
                    "title": "iPhone 9",
                    "description": "An apple mobile which is nothing like apple",
                    "price": 549,
                    "discountPercentage": 12.96,
                    "rating": 4.69,
                    "stock": 94,
                    "brand": "Apple",
                    "category": "smartphones",
                    "thumbnail": "https://i.dummyjson.com/data/products/1/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/1/1.jpg",
                        "https://i.dummyjson.com/data/products/1/2.jpg",
                        "https://i.dummyjson.com/data/products/1/3.jpg",
                        "https://i.dummyjson.com/data/products/1/4.jpg",
                        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                    ]
                },
                {
                    "id": 2,
                    "title": "iPhone X",
                    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                    "price": 899,
                    "discountPercentage": 17.94,
                    "rating": 4.44,
                    "stock": 34,
                    "brand": "Apple",
                    "category": "smartphones",
                    "thumbnail": "https://i.dummyjson.com/data/products/2/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/2/1.jpg",
                        "https://i.dummyjson.com/data/products/2/2.jpg",
                        "https://i.dummyjson.com/data/products/2/3.jpg",
                        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                    ]
                },
                {
                    "id": 3,
                    "title": "Samsung Universe 9",
                    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                    "price": 1249,
                    "discountPercentage": 15.46,
                    "rating": 4.09,
                    "stock": 36,
                    "brand": "Samsung",
                    "category": "smartphones",
                    "thumbnail": "https://i.dummyjson.com/data/products/3/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/3/1.jpg"
                    ]
                },
                {
                    "id": 4,
                    "title": "OPPOF19",
                    "description": "OPPO F19 is officially announced on April 2021.",
                    "price": 280,
                    "discountPercentage": 17.91,
                    "rating": 4.3,
                    "stock": 123,
                    "brand": "OPPO",
                    "category": "smartphones",
                    "thumbnail": "https://i.dummyjson.com/data/products/4/2.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/4/1.jpg",
                        "https://i.dummyjson.com/data/products/4/2.jpg",
                        "https://i.dummyjson.com/data/products/4/3.jpg",
                        "https://i.dummyjson.com/data/products/4/4.jpg",
                        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                    ]
                },
                {
                    "id": 5,
                    "title": "Huawei P30",
                    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                    "price": 499,
                    "discountPercentage": 10.58,
                    "rating": 4.09,
                    "stock": 32,
                    "brand": "Huawei",
                    "category": "smartphones",
                    "thumbnail": "https://i.dummyjson.com/data/products/5/2.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/5/1.jpg",
                        "https://i.dummyjson.com/data/products/5/2.jpg",
                        "https://i.dummyjson.com/data/products/5/3.jpg"
                    ]
                },
                {
                    "id": 6,
                    "title": "MacBook Pro",
                    "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
                    "price": 1749,
                    "discountPercentage": 11.02,
                    "rating": 4.57,
                    "stock": 83,
                    "brand": "Apple",
                    "category": "laptops",
                    "thumbnail": "https://i.dummyjson.com/data/products/6/1.png",
                    "images": [
                        "https://i.dummyjson.com/data/products/6/1.png",
                        "https://i.dummyjson.com/data/products/6/2.jpg",
                        "https://i.dummyjson.com/data/products/6/3.png",
                        "https://i.dummyjson.com/data/products/6/4.jpg"
                    ]
                },
                {
                    "id": 7,
                    "title": "Samsung Galaxy Book",
                    "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
                    "price": 1499,
                    "discountPercentage": 4.15,
                    "rating": 4.25,
                    "stock": 50,
                    "brand": "Samsung",
                    "category": "laptops",
                    "thumbnail": "https://i.dummyjson.com/data/products/7/2.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/7/1.jpg",
                        "https://i.dummyjson.com/data/products/7/2.jpg",
                        "https://i.dummyjson.com/data/products/7/3.jpg",
                        "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
                    ]
                },
                {
                    "id": 8,
                    "title": "Microsoft Surface Laptop 4",
                    "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
                    "price": 1499,
                    "discountPercentage": 10.23,
                    "rating": 4.43,
                    "stock": 68,
                    "brand": "Microsoft Surface",
                    "category": "laptops",
                    "thumbnail": "https://i.dummyjson.com/data/products/8/4.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/8/1.jpg",
                        "https://i.dummyjson.com/data/products/8/2.jpg",
                        "https://i.dummyjson.com/data/products/8/3.jpg",
                        "https://i.dummyjson.com/data/products/8/4.jpg",
                        "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
                    ]
                },
                {
                    "id": 9,
                    "title": "Infinix INBOOK",
                    "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
                    "price": 1099,
                    "discountPercentage": 11.83,
                    "rating": 4.54,
                    "stock": 96,
                    "brand": "Infinix",
                    "category": "laptops",
                    "thumbnail": "https://i.dummyjson.com/data/products/9/3.png",
                    "images": [
                        "https://i.dummyjson.com/data/products/9/1.jpg",
                        "https://i.dummyjson.com/data/products/9/2.png",
                        "https://i.dummyjson.com/data/products/9/3.png",
                        "https://i.dummyjson.com/data/products/9/4.jpg",
                        "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
                    ]
                },
                {
                    "id": 10,
                    "title": "HP Pavilion 15-DK1056WM",
                    "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
                    "price": 1099,
                    "discountPercentage": 6.18,
                    "rating": 4.43,
                    "stock": 89,
                    "brand": "HP Pavilion",
                    "category": "laptops",
                    "thumbnail": "https://i.dummyjson.com/data/products/10/2.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/10/1.jpg",
                        "https://i.dummyjson.com/data/products/10/2.jpg",
                        "https://i.dummyjson.com/data/products/10/3.jpg",
                        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
                    ]
                },
                {
                    "id": 11,
                    "title": "perfume Oil",
                    "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
                    "price": 13,
                    "discountPercentage": 8.4,
                    "rating": 4.26,
                    "stock": 65,
                    "brand": "Impression of Acqua Di Gio",
                    "category": "fragrances",
                    "thumbnail": "https://i.dummyjson.com/data/products/11/2.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/11/1.jpg",
                        "https://i.dummyjson.com/data/products/11/2.jpg",
                        "https://i.dummyjson.com/data/products/11/3.jpg",
                        "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
                    ]
                },
                {
                    "id": 12,
                    "title": "Brown Perfume",
                    "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
                    "price": 40,
                    "discountPercentage": 15.66,
                    "rating": 4,
                    "stock": 52,
                    "brand": "Royal_Mirage",
                    "category": "fragrances",
                    "thumbnail": "https://i.dummyjson.com/data/products/12/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/12/1.jpg",
                        "https://i.dummyjson.com/data/products/12/2.jpg",
                        "https://i.dummyjson.com/data/products/12/3.png",
                        "https://i.dummyjson.com/data/products/12/4.jpg",
                        "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
                    ]
                },
                {
                    "id": 13,
                    "title": "Fog Scent Xpressio Perfume",
                    "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
                    "price": 13,
                    "discountPercentage": 8.14,
                    "rating": 4.59,
                    "stock": 61,
                    "brand": "Fog Scent Xpressio",
                    "category": "fragrances",
                    "thumbnail": "https://i.dummyjson.com/data/products/13/2.png",
                    "images": [
                        "https://i.dummyjson.com/data/products/13/1.jpg",
                        "https://i.dummyjson.com/data/products/13/2.png",
                        "https://i.dummyjson.com/data/products/13/3.jpg",
                        "https://i.dummyjson.com/data/products/13/4.jpg",
                        "https://i.dummyjson.com/data/products/13/thumbnail.webp"
                    ]
                },
                {
                    "id": 14,
                    "title": "Non-Alcoholic Concentrated Perfume Oil",
                    "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
                    "price": 120,
                    "discountPercentage": 15.6,
                    "rating": 4.21,
                    "stock": 114,
                    "brand": "Al Munakh",
                    "category": "fragrances",
                    "thumbnail": "https://i.dummyjson.com/data/products/14/2.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/14/1.jpg",
                        "https://i.dummyjson.com/data/products/14/2.jpg",
                        "https://i.dummyjson.com/data/products/14/3.jpg",
                        "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
                    ]
                },
                {
                    "id": 15,
                    "title": "Eau De Perfume Spray",
                    "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
                    "price": 30,
                    "discountPercentage": 10.99,
                    "rating": 4.7,
                    "stock": 105,
                    "brand": "Lord - Al-Rehab",
                    "category": "fragrances",
                    "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/15/1.jpg",
                        "https://i.dummyjson.com/data/products/15/2.jpg",
                        "https://i.dummyjson.com/data/products/15/3.jpg",
                        "https://i.dummyjson.com/data/products/15/4.jpg",
                        "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
                    ]
                },
                {
                    "id": 16,
                    "title": "Hyaluronic Acid Serum",
                    "description": "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
                    "price": 19,
                    "discountPercentage": 13.31,
                    "rating": 4.83,
                    "stock": 110,
                    "brand": "L'Oreal Paris",
                    "category": "skincare",
                    "thumbnail": "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/16/1.png",
                        "https://i.dummyjson.com/data/products/16/2.webp",
                        "https://i.dummyjson.com/data/products/16/3.jpg",
                        "https://i.dummyjson.com/data/products/16/4.jpg",
                        "https://i.dummyjson.com/data/products/16/thumbnail.jpg"
                    ]
                },
                {
                    "id": 17,
                    "title": "Tree Oil 30ml",
                    "description": "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
                    "price": 12,
                    "discountPercentage": 4.09,
                    "rating": 4.52,
                    "stock": 78,
                    "brand": "Hemani Tea",
                    "category": "skincare",
                    "thumbnail": "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/17/1.jpg",
                        "https://i.dummyjson.com/data/products/17/2.jpg",
                        "https://i.dummyjson.com/data/products/17/3.jpg",
                        "https://i.dummyjson.com/data/products/17/thumbnail.jpg"
                    ]
                },
                {
                    "id": 18,
                    "title": "Oil Free Moisturizer 100ml",
                    "description": "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
                    "price": 40,
                    "discountPercentage": 13.1,
                    "rating": 4.56,
                    "stock": 88,
                    "brand": "Dermive",
                    "category": "skincare",
                    "thumbnail": "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/18/1.jpg",
                        "https://i.dummyjson.com/data/products/18/2.jpg",
                        "https://i.dummyjson.com/data/products/18/3.jpg",
                        "https://i.dummyjson.com/data/products/18/4.jpg",
                        "https://i.dummyjson.com/data/products/18/thumbnail.jpg"
                    ]
                },
                {
                    "id": 19,
                    "title": "Skin Beauty Serum.",
                    "description": "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
                    "price": 46,
                    "discountPercentage": 10.68,
                    "rating": 4.42,
                    "stock": 54,
                    "brand": "ROREC White Rice",
                    "category": "skincare",
                    "thumbnail": "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/19/1.jpg",
                        "https://i.dummyjson.com/data/products/19/2.jpg",
                        "https://i.dummyjson.com/data/products/19/3.png",
                        "https://i.dummyjson.com/data/products/19/thumbnail.jpg"
                    ]
                },
                {
                    "id": 20,
                    "title": "Freckle Treatment Cream- 15gm",
                    "description": "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
                    "price": 70,
                    "discountPercentage": 16.99,
                    "rating": 4.06,
                    "stock": 140,
                    "brand": "Fair & Clear",
                    "category": "skincare",
                    "thumbnail": "https://i.dummyjson.com/data/products/20/3.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/20/1.jpg",
                        "https://i.dummyjson.com/data/products/20/2.jpg",
                        "https://i.dummyjson.com/data/products/20/3.jpg",
                        "https://i.dummyjson.com/data/products/20/4.jpg",
                        "https://i.dummyjson.com/data/products/20/thumbnail.jpg"
                    ]
                },
                {
                    "id": 21,
                    "title": "- Daal Masoor 500 grams",
                    "description": "Fine quality Branded Product Keep in a cool and dry place",
                    "price": 20,
                    "discountPercentage": 4.81,
                    "rating": 4.44,
                    "stock": 133,
                    "brand": "Saaf & Khaas",
                    "category": "groceries",
                    "thumbnail": "https://i.dummyjson.com/data/products/21/thumbnail.png",
                    "images": [
                        "https://i.dummyjson.com/data/products/21/1.png",
                        "https://i.dummyjson.com/data/products/21/2.jpg",
                        "https://i.dummyjson.com/data/products/21/3.jpg"
                    ]
                },
                {
                    "id": 22,
                    "title": "Elbow Macaroni - 400 gm",
                    "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
                    "price": 14,
                    "discountPercentage": 15.58,
                    "rating": 4.57,
                    "stock": 146,
                    "brand": "Bake Parlor Big",
                    "category": "groceries",
                    "thumbnail": "https://i.dummyjson.com/data/products/22/3.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/22/1.jpg",
                        "https://i.dummyjson.com/data/products/22/2.jpg",
                        "https://i.dummyjson.com/data/products/22/3.jpg"
                    ]
                },
                {
                    "id": 23,
                    "title": "Orange Essence Food Flavou",
                    "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
                    "price": 14,
                    "discountPercentage": 8.04,
                    "rating": 4.85,
                    "stock": 26,
                    "brand": "Baking Food Items",
                    "category": "groceries",
                    "thumbnail": "https://i.dummyjson.com/data/products/23/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/23/1.jpg",
                        "https://i.dummyjson.com/data/products/23/2.jpg",
                        "https://i.dummyjson.com/data/products/23/3.jpg",
                        "https://i.dummyjson.com/data/products/23/4.jpg",
                        "https://i.dummyjson.com/data/products/23/thumbnail.jpg"
                    ]
                },
                {
                    "id": 24,
                    "title": "cereals muesli fruit nuts",
                    "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
                    "price": 46,
                    "discountPercentage": 16.8,
                    "rating": 4.94,
                    "stock": 113,
                    "brand": "fauji",
                    "category": "groceries",
                    "thumbnail": "https://i.dummyjson.com/data/products/24/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/24/1.jpg",
                        "https://i.dummyjson.com/data/products/24/2.jpg",
                        "https://i.dummyjson.com/data/products/24/3.jpg",
                        "https://i.dummyjson.com/data/products/24/4.jpg",
                        "https://i.dummyjson.com/data/products/24/thumbnail.jpg"
                    ]
                },
                {
                    "id": 25,
                    "title": "Gulab Powder 50 Gram",
                    "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
                    "price": 70,
                    "discountPercentage": 13.58,
                    "rating": 4.87,
                    "stock": 47,
                    "brand": "Dry Rose",
                    "category": "groceries",
                    "thumbnail": "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/25/1.png",
                        "https://i.dummyjson.com/data/products/25/2.jpg",
                        "https://i.dummyjson.com/data/products/25/3.png",
                        "https://i.dummyjson.com/data/products/25/4.jpg",
                        "https://i.dummyjson.com/data/products/25/thumbnail.jpg"
                    ]
                },
                {
                    "id": 26,
                    "title": "Plant Hanger For Home",
                    "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
                    "price": 41,
                    "discountPercentage": 17.86,
                    "rating": 4.08,
                    "stock": 131,
                    "brand": "Boho Decor",
                    "category": "home-decoration",
                    "thumbnail": "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/26/1.jpg",
                        "https://i.dummyjson.com/data/products/26/2.jpg",
                        "https://i.dummyjson.com/data/products/26/3.jpg",
                        "https://i.dummyjson.com/data/products/26/4.jpg",
                        "https://i.dummyjson.com/data/products/26/5.jpg",
                        "https://i.dummyjson.com/data/products/26/thumbnail.jpg"
                    ]
                },
                {
                    "id": 27,
                    "title": "Flying Wooden Bird",
                    "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
                    "price": 51,
                    "discountPercentage": 15.58,
                    "rating": 4.41,
                    "stock": 17,
                    "brand": "Flying Wooden",
                    "category": "home-decoration",
                    "thumbnail": "https://i.dummyjson.com/data/products/27/2.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/27/1.jpg",
                        "https://i.dummyjson.com/data/products/27/2.jpg",
                        "https://i.dummyjson.com/data/products/27/3.jpg",
                        "https://i.dummyjson.com/data/products/27/4.jpg",
                        "https://i.dummyjson.com/data/products/27/thumbnail.webp"
                    ]
                },
                {
                    "id": 28,
                    "title": "3D Embellishment Art Lamp",
                    "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
                    "price": 20,
                    "discountPercentage": 16.49,
                    "rating": 4.82,
                    "stock": 54,
                    "brand": "LED Lights",
                    "category": "home-decoration",
                    "thumbnail": "https://i.dummyjson.com/data/products/28/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/28/1.jpg",
                        "https://i.dummyjson.com/data/products/28/2.jpg",
                        "https://i.dummyjson.com/data/products/28/3.png",
                        "https://i.dummyjson.com/data/products/28/4.jpg",
                        "https://i.dummyjson.com/data/products/28/thumbnail.jpg"
                    ]
                },
                {
                    "id": 29,
                    "title": "Handcraft Chinese style",
                    "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
                    "price": 60,
                    "discountPercentage": 15.34,
                    "rating": 4.44,
                    "stock": 7,
                    "brand": "luxury palace",
                    "category": "home-decoration",
                    "thumbnail": "https://i.dummyjson.com/data/products/29/1.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/29/1.jpg",
                        "https://i.dummyjson.com/data/products/29/2.jpg",
                        "https://i.dummyjson.com/data/products/29/3.webp",
                        "https://i.dummyjson.com/data/products/29/4.webp",
                        "https://i.dummyjson.com/data/products/29/thumbnail.webp"
                    ]
                },
                {
                    "id": 30,
                    "title": "Key Holder",
                    "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
                    "price": 30,
                    "discountPercentage": 2.92,
                    "rating": 4.92,
                    "stock": 54,
                    "brand": "Golden",
                    "category": "home-decoration",
                    "thumbnail": "https://i.dummyjson.com/data/products/30/3.jpg",
                    "images": [
                        "https://i.dummyjson.com/data/products/30/1.jpg",
                        "https://i.dummyjson.com/data/products/30/2.jpg",
                        "https://i.dummyjson.com/data/products/30/3.jpg",
                        "https://i.dummyjson.com/data/products/30/thumbnail.jpg"
                    ]
                }
            ],

            currentProducts: [],

        }
    },
    methods: {
        

        fatchdata(category) {
            this.currentProducts = category != '' ? this.products.filter(product => product.category === category) : this.products;
        },
    },
    mounted() {
     var valuelist= document.getElementById('valuelist');
     var listArray=[]
  var checkboxs= document.querySelectorAll('.checkbox')
  console.log(checkboxs);
  for(var checkbox of checkboxs){
checkbox.addEventListener('click', function(){
    if(this.checked == true){
        listArray.push(this.value
                    )
                    valuelist.innerHTML= listArray.join('/')
                }
        else{

            listArray=listArray.filter(e => e !== this.value);
            valuelist.innerHTML = listArray.join('/')
        }
    
})
  }
    }
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */
.display {
    display: block;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -32px;
}

.product-grid {
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.product-grid .product-image {
    overflow: hidden;
    position: relative;
    z-index: 1;
}

.product-grid .product-image a.image {
    display: block;
}

.product-grid .product-image img {
    width: 100%;
    height: 312px;
}

.product-grid .product-discount-label {
    color: #fff;
    background: #A5BA8D;
    font-size: 13px;
    font-weight: 600;
    line-height: 25px;
    padding: 0 20px;
    position: absolute;
    top: 10px;
    left: 0;
}

.product-grid .product-links {
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    top: 10px;
    right: -50px;
    transition: all .5s ease 0s;
}

.product-grid:hover .product-links {
    right: 10px;
}

.product-grid .product-links li a {
    color: #333;
    background: transparent;
    font-size: 17px;
    line-height: 38px;
    width: 38px;
    height: 38px;
    border: 1px solid #333;
    border-bottom: none;
    display: block;
    transition: all 0.3s;
}

.product-grid .product-links li:last-child a {
    border-bottom: 1px solid #333;
}

.product-grid .product-links li a:hover {
    color: #fff;
    background: #333;
}

.product-grid .add-to-cart {
    background: #A5BA8D;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
    width: 100%;
    padding: 10px 26px;
    position: absolute;
    left: 0;
    bottom: -60px;
    transition: all 0.3s ease 0s;
}

.product-grid:hover .add-to-cart {
    bottom: 0;
}

.product-grid .add-to-cart:hover {
    text-shadow: 4px 4px rgba(0, 0, 0, 0.2);
}

.product-grid .product-content {
    background: #fff;
    padding: 15px;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.1) inset;
}

.product-grid .title {
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    margin: 0 0 7px;
}

.product-grid .title a {
    color: #777;
    transition: all 0.3s ease 0s;
}

.product-grid .title a:hover {
    color: #a5ba8d;
}

.product-grid .price {
    color: #0d0d0d;
    font-size: 14px;
    font-weight: 600;
}

.product-grid .price span {
    color: #888;
    font-size: 13px;
    font-weight: 400;
    text-decoration: line-through;
}

@media screen and (max-width: 990px) {
    .product-grid {
        margin-bottom: 30px;
    }
}

body {
    background-color: #f4f4f4
}

.container {
    margin: 40px auto
}

#header {
    width: 100%;
    height: 60px;
    box-shadow: 5px 5px 15px #e8e8e8
}

.col-lg-4,
.col-md-6 {
    padding-right: 0
}

button.btn.btn-hide {
    height: inherit;
    background-color: #ff935d;
    color: #fff;
    font-size: 14px;
    padding-left: 40px;
    padding-right: 40px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px
}

.btn:focus {
    box-shadow: none
}

.box-label .btn {
    background-color: #fff;
    padding: 0;
    font-size: 1rem
}

.btn-red {
    background-color: #e00000ce
}

.btn-orange {
    background-color: #ffa500
}

.btn-pink {
    background-color: #e0009dce
}

.btn-green {
    background-color: #00811c
}

.btn-blue {
    background-color: #026bc2
}

.btn-brown {
    background-color: #994a00
}

.navbar {
    display: inline-flex;
    margin-top: 10px;
}

.pagination .page-item .page-link {
    color: #333;
    border: none;
    width: 40px;
    text-align: center
}

.pagination .page-item.active .page-link {
    background-color: #fff;
    border: 1px solid #333
}

select {
    outline: none;
    padding: 6px 12px;
    margin: 0px 4px;
    color: #999;
    font-size: 1rem;
    width: 140px
}

#select2 {
    border: 1px solid #777;
    color: #999
}

#pro {
    border: none;
    color: #333;
    font-weight: 700;
    padding-left: 0px;
    width: initial
}

#filterbar {
    width: 30%;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px;
    float: left
}

#filterbar input[type="radio"] {
    visibility: hidden
}

#filterbar input[type='radio']:checked {
    background-color: #16c79a;
    border: none
}

#filterbar .btn.btn-success {
    background-color: #ddd;
    color: #333;
    border: none;
    width: 115px
}

#filterbar .btn.btn-success:hover {
    background-color: #aff1e1;
    color: #444
}

#filterbar .btn-success:not(:disabled):not(.disabled).active,
#filterbar .btn-success:not(:disabled):not(.disabled):active {
    background-color: #16c79a;
    color: #fff
}

label {
    cursor: pointer
}

.tick {
    display: block;
    position: relative;
    padding-left: 23px;
    cursor: pointer;
    font-size: 13px;
    margin: 0
}

.tick input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0
}

.check {
    position: absolute;
    top: 1px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px
}

.tick:hover input~.check {
    background-color: #f3f3f3
}

.tick input:checked~.check {
    background-color: #ffffff
}

.check:after {
    content: "";
    position: absolute;
    display: none
}

.tick input:checked~.check:after {
    display: block;
    transform: rotate(45deg) scale(1)
}

.tick .check:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid rgb(0, 0, 0);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg) scale(2)
}

.box {
    padding: 10px
}

.box-label {
    color: #11698e;
    font-size: 1rem;
    font-weight: 800
}

#inner-box,
#inner-box2 {
    height: 150px;
    overflow-y: scroll
}

#inner-box2 {
    height: 132px
}

#inner-box::-webkit-scrollbar,
#inner-box2::-webkit-scrollbar {
    width: 6px
}

#inner-box::-webkit-scrollbar-track,
#inner-box2::-webkit-scrollbar-track {
    background-color: #ddd;
    border-radius: 2px
}

#inner-box::-webkit-scrollbar-thumb,
#inner-box2::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 2px
}

#price {
    height: 45px
}

#size input[type="checkbox"] {
    visibility: hidden
}

#size input[type='checkbox']:checked {
    background-color: #16c79a;
    border: none
}

#size .btn.btn-success {
    background-color: #ddd;
    color: #333;
    border: none;
    width: 40px;
    font-size: 1rem;
    border-radius: 0
}

#size .btn.btn-success:hover {
    background-color: #aff1e1;
    color: #444
}

#size .btn-success:not(:disabled):not(.disabled).active,
#size .btn-success:not(:disabled):not(.disabled):active {
    background-color: #16c79a;
    color: #fff
}

#size label {
    margin: 10px;
    margin-left: 0px
}

.card {
    padding: 10px;
    cursor: pointer;
    transition: .3s all ease-in-out;
    height: 350px
}

.card:hover {
    box-shadow: 2px 2px 15px #fd9a6ce5;
    transform: scale(1.02)
}

.card .product-name {
    font-weight: 600
}

.card-body {
    padding-bottom: 0
}

.card .text-muted {
    font-size: 0.82rem
}

.card-img img {
    padding-top: 10px;
    width: inherit;
    height: 180px;
    object-fit: contain;
    display: block
}

.card-body .btn-group .btn {
    padding: 0;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 50%;
    position: relative
}

.card-body .btn-group>.btn-group:not(:last-child)>.btn,
.card-body .btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
    border-radius: 50%;
    transition: ease-in all .4s
}

.card-body input[type="radio"] {
    visibility: hidden
}

.card-body .btn:not(:disabled):not(.disabled).active::after,
.card-body .btn:not(:disabled):not(.disabled):active::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 4px;
    left: 4.2px;
    background-color: #fff;
    position: absolute;
    transition: ease-in all .4s
}

.card-body .btn.btn-light:not(:disabled):not(.disabled).active::after,
.card-body .btn.btn-light:not(:disabled):not(.disabled):active::after {
    background-color: #000
}

#avail-size input[type="checkbox"] {
    visibility: hidden
}

#avail-size input[type='checkbox']:checked {
    background-color: #16c79a;
    border: none
}

#avail-size .btn.btn-success {
    background-color: #ddd;
    color: #333;
    border: none;
    width: 20px;
    font-size: 0.7rem;
    border-radius: 0;
    padding: 0
}

#avail-size .btn.btn-success:hover {
    background-color: #aff1e1;
    color: #444
}

#avail-size .btn-success:not(:disabled):not(.disabled).active,
#avail-size .btn-success:not(:disabled):not(.disabled):active {
    background-color: #16c79a;
    color: #fff
}

#avail-size label {
    margin: 10px;
    margin-left: 0px
}

#shirt {
    height: 170px
}

.middle {
    position: relative;
    width: 100%;
    margin-top: 25px
}

.slider {
    position: relative;
    z-index: 1;
    height: 5px;
    margin: 0 15px
}

.slider>.track {
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #ddd
}

.slider>.range {
    position: absolute;
    z-index: 2;
    left: 25%;
    right: 25%;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #36a31b
}

.slider>.thumb {
    position: absolute;
    top: 2px;
    z-index: 3;
    width: 20px;
    height: 20px;
    background-color: #36a31b;
    border-radius: 50%;
    box-shadow: 0 0 0 0 rgba(63, 204, 75, 0.705);
    transition: box-shadow .3s ease-in-out
}

.slider>.thumb::after {
    position: absolute;
    width: 8px;
    height: 8px;
    left: 28%;
    top: 30%;
    border-radius: 50%;
    content: '';
    background-color: #fff
}

.slider>.thumb.left {
    left: 25%;
    transform: translate(-15px, -10px)
}

.slider>.thumb.right {
    right: 25%;
    transform: translate(15px, -10px)
}

.slider>.thumb.hover {
    box-shadow: 0 0 0 10px rgba(125, 230, 134, 0.507)
}

.slider>.thumb.active {
    box-shadow: 0 0 0 10px rgba(63, 204, 75, 0.623)
}

input[type=range] {
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    opacity: 0
}

input[type=range]::-webkit-slider-thumb {
    pointer-events: all;
    width: 30px;
    height: 30px;
    border-radius: 0;
    border: 0 none;
    background-color: red;
    -webkit-appearance: none
}

.del {
    text-decoration: line-through;
    color: red
}

@media(min-width:1199.6px) {
    #filterbar {
        width: 25%
    }
}

@media(max-width:1199.5px) {
    #filterbar {
        width: 28%
    }

    .card {
        height: 350px
    }

    .price {
        font-size: 0.9rem
    }

    .product-name {
        font-size: 0.8rem
    }
}

@media(max-width: 991.5px) {
    .navbar-nav {
        min-width: 290px;
        position: absolute;
        left: -168px;
        bottom: -146px;
        padding: 20px 10px;
        display: block;
        background-image: none;
        z-index: 2;
        background-color: #1d1c1cb2
    }

    #filterbar {
        width: 36%
    }

    #sort {
        background-color: inherit;
        color: #fff;
        margin: 0;
        margin-bottom: 20px;
        width: 100%
    }

    #sort option,
    #pro option {
        color: #000
    }

    #pro,
    #select2,
    .result {
        background-color: inherit;
        color: #fff
    }

    .card {
        height: 345px
    }

    .price {
        font-size: 0.85rem
    }
}

@media(max-width: 767.5px) {
    #filterbar {
        width: 50%
    }
}

@media(max-width: 525.5px) {
    #filterbar {
        float: none;
        width: 100%;
        margin-bottom: 20px;
        border-radius: 5px
    }

    #content.my-5 {
        margin-top: 20px !important;
        margin-bottom: 20px !important
    }

    .col-lg-4,
    .col-md-6 {
        padding-left: 0
    }
}

@media(max-width: 500.5px) {
    .pagination {
        display: none
    }
}
</style>
