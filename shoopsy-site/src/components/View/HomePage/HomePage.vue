<template>
<div>
    <saleSlider></saleSlider>
</div>
<div>
    <productslist></productslist>
</div>
<div>
    <Dealofproduct></Dealofproduct>
</div>
<div>
    <productsitem></productsitem>
</div>
<div>
    <Productgrid></Productgrid>
</div>
<div>
    <productcarsoul></productcarsoul>
</div>
<div>
    <allProduct></allProduct>
</div>
<div>
    <sliderintwo></sliderintwo>
</div>
<div>
    <Leatestproduct></Leatestproduct>
</div>
<div>
    <UnissibleProduct></UnissibleProduct>
</div>
<div>
<InfulanserProduct></InfulanserProduct></div>
</template>

<script>
import saleSlider from '@/components/View/sliders/SaleSlider.vue'
import productslist from '@/components/View/Products/Productslist'
import Dealofproduct from '@/components/View/Products/DealofDayProducts.vue'
import productsitem from '@/components/View/CategoriesProduct/Productsitem.vue'
import productcarsoul from '@/components/View/sliders/productcarsoul.vue'
import Productgrid from '@/components/View/CategoriesProduct/Productgrid'
import allProduct from '@/components/View/Products/AllProduct.vue'
import sliderintwo from "@/components/View/sliders/sliderintwo.vue"
import Leatestproduct from '@/components/View/sliders/LeatestProduct.vue'
import UnissibleProduct from '@/components/View/sliders/UnissibleProduct'
import InfulanserProduct from '@/components/View/sliders/InfulanserProduct'
export default {
    name: "Home-page",
    components: {
        productslist,
        saleSlider,
        Dealofproduct,
        productsitem,
        productcarsoul,
        Productgrid,
        allProduct,
        sliderintwo,
        Leatestproduct,
        UnissibleProduct,
        InfulanserProduct
    },

}
</script>

<style>
.swiper-container {
    width: 100%;
    height: 100%;
}

.slide {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    font-size: 18px;
    /* background: #cfcfcf; */
    background: #eee;
    overflow: hidden;
}

.slide-image {
    position: absolute;
    top: -200px;
    left: -200px;
    width: calc(100% + 400px);
    height: calc(100% + 400px);
    background-position: 50% 50%;
    background-size: cover;
}

.slide-title {
    font-size: 4rem;
    line-height: 1;
    max-width: 50%;
    white-space: normal;
    word-break: break-word;
    color: #fff;
    z-index: 100;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: normal;
}

@media (min-width: 45em) {
    .slide-title {
        font-size: 7vw;
        max-width: none;
    }
}

.slide-title span {
    white-space: pre;
    display: inline-block;
    opacity: 0;
}

.slideshow {
    position: relative;
}

.slideshow-pagination {
    position: absolute;
    bottom: 5rem;
    left: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transition: 0.3s opacity;
    z-index: 10;
}

.slideshow-pagination-item {
    display: flex;
    align-items: center;
}

.slideshow-pagination-item .pagination-number {
    opacity: 0.5;
}

.slideshow-pagination-item:hover,
.slideshow-pagination-item:focus {
    cursor: pointer;
}

.slideshow-pagination-item:last-of-type .pagination-separator {
    width: 0;
}

.slideshow-pagination-item.active .pagination-number {
    opacity: 1;
}

.slideshow-pagination-item.active .pagination-separator {
    width: 10vw;
}

.slideshow-navigation-button {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 5rem;
    z-index: 1000;
    transition: all 0.3s ease;
    color: #fff;
}

.slideshow-navigation-button:hover,
.slideshow-navigation-button:focus {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.5);
}

.slideshow-navigation-button.prev {
    left: 0;
}

.slideshow-navigation-button.next {
    right: 0;
}

.pagination-number {
    font-size: 1.8rem;
    color: #fff;
    font-family: 'Oswald', sans-serif;
    padding: 0 0.5rem;
}

.pagination-separator {
    display: none;
    position: relative;
    width: 40px;
    height: 2px;
    background: rgba(20, 18, 18, 0.25);
    transition: all 0.3s ease;
}

@media (min-width: 45em) {
    .pagination-separator {
        display: block;
    }
}

.pagination-separator-loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #eee;
    ;
    transform-origin: 0 0;
}
</style>
