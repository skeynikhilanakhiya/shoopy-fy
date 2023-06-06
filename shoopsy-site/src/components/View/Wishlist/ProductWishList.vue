<template>

<h2>WishList Product</h2>
     
                    <a class="menu-icon" v-on:click="navigateTo" style="margin-right:10px;float:left;"><i
                            class="fa fa-arrow-left" style="color: #4d8efe;font-size: larger;"></i></a>
                    <div id="products" style="z-index:0;">
                        <div class="row d-flex ">
                            <div class="col-md-3  " v-for="item in like" :key="item.id">
                                <div class="product-grid ">
                                    <div class="product-image">
                                        <a href="#" class="image">
                                            <img :src="item.imges">
                                        </a>
                                        <span class="product-discount-label">-23%</span>
                                        <ul class="product-links">
                                            <li><a href="#"><i class="fa fa-search"></i></a></li>
                                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                            <li><a href="#"><i class="fa fa-random"></i></a></li>
                                        </ul>
                                        <!-- <router-link to="/cart"> -->
                                        <button type="button" class="add-to-cart" >
                                           Add To Bag
                                            <!-- </router-link> -->
                                        </button>
                                    </div>
                                    <div class="product-content">
                                        <h3 class="title"><a href="#">{{ item.title }}</a></h3>
                                        <div class="price">{{ item.price }}<span>$53.55 </span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
              
</template>
<script>
export default {
    name:"Product-Wishlist",
    
    methods:{
        navigateTo(){
            this.$router.push({name:"Subitems-page"})
        }
    }
    
}
</script>