<template>
<!-- <header>
    <div class="sitewideBanner" data-nav="slide" data-theme-bar="slide" style="background-color: #000000; height:90px;margin-top: -60px;">
        <strong class="Sales " style="color:aliceblue;">Sale! $15 Tees + up to 30% Off Everything</strong><br>
        <b style="color: cadetblue;font-size::large;"> Sale prices as marked. $15 price applies to select styles.Ends 4/27 at 5 PM CT.</b>
    </div>
</header> -->
<header class="header">
    <div class="container">
        <div class="wrapper">
            <div class="header-item-left">
                <h1><a href="#" class="brand"><img src="@/assets/WhatsApp.jpeg" alt="" style="  height:60px; width:60px;
  margin-top: -47px;"></a></h1>
            </div>
            <div class="header-item-center">
                <div class="overlay"></div>
                <nav class="menu">
                    <div class="menu-mobile-header">
                        <button type="button" class="menu-mobile-arrow"><i class="ion ion-ios-arrow-back"></i></button>
                        <div class="menu-mobile-title"></div>
                        <button type="button" class="menu-mobile-close"><i class="ion ion-ios-close"></i></button>
                    </div>
                    <ul class="menu-section" style="  margin-right: -296px;">
                        <li>
                            <router-link to="/">
                                <a href="#" class="home" style="margin-right: -46px;color: black;">Home</a>
                            </router-link>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#" style="  margin-left: -119px;" class="responsiv">What's New <i class="ion ion-ios-arrow-down"></i></a>
                            <div class="menu-subs menu-mega menu-column-4">
                                <div class="list-item text-center">
                                    <a href="#">
                                        <img src="@/assets/saree/saree2.jpg" class="responsive" alt="New Product">
                                        <h4 class="title">Product 1</h4>
                                    </a>
                                </div>
                                <div class="list-item text-center">
                                    <a href="#">
                                        <img src="@/assets/garba.jpg" class="responsive" alt="New Product">
                                        <h4 class="title">Product 2</h4>
                                    </a>
                                </div>
                                <div class="list-item text-center">
                                    <a href="#">
                                        <img src="@/assets/imgs/dree.jpg" class="responsive" alt="New Product">
                                        <h4 class="title">Product 3</h4>
                                    </a>
                                </div>
                                <div class="list-item text-center">
                                    <a href="#">
                                        <img src="@/assets/saree1.jpg" class="responsive" alt="New Product">
                                        <h4 class="title">Product 4</h4>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#" style="  margin-left: 4px;" class="responsiv">Men <i class="ion ion-ios-arrow-down"></i></a>
                            <div class="menu-subs menu-mega menu-column-4">
                                <div class="list-item">

                                    <h4 class="title">Topwear</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 't-shirts', params: { slug: 't-shirt' }}">
                                                <a href="#">T-Shirts</a>
                                            </router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Casual', params: { slug: 'Casual' }}">
                                                <a href="#">Casual </a>
                                            </router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Formal', params: { slug: 'Formal' }}">

                                                <a href="#">Formal </a>
                                            </router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Sweatshirts', params: { slug: 'Sweatshirts' }}">

                                                <a href="#">Sweatshirts</a>
                                            </router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Sweaters', params: { slug: 'Sweaters' }}">

                                                <a href="#">Sweaters</a>
                                            </router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Jackets', params: { slug: 'Jackets' }}">

                                                <a href="#">Jackets</a>
                                            </router-link>

                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Blazers', params: { slug: 'Blazers' }}">

                                                <a href="#">Blazers </a>
                                            </router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Suits', params: { slug: 'Suits' }}">

                                                <a href="#">Suits</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Rain', params: { slug: 'Rain' }}">

                                                <a href="#">Rain </a></router-link>
                                        </li><br>

                                    </ul>

                                    <h4 class="title" style="border-top: 1px dotted black;">Indian & Festive Wear </h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Kurtas & Kurta Sets', params: { slug: 'Kurtas & Kurta Sets' }}">
                                                <a href="#">Kurtas & Kurta Sets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Sherwanis', params: { slug: 'Sherwanis' }}">
                                                <a href="#">Sherwanis</a>
                                            </router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Nehru Jackets', params: { slug: 'Nehru Jackets' }}">
                                                <a href="#">Nehru Jackets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Dhotis', params: { slug: 'Dhotis' }}">
                                                <a href="#">Dhotis</a></router-link>
                                        </li><br>
                                    </ul>
                                </div>
                                <div class="list-item" style="  background-color: rgb(0 0 0 / 4%);">
                                    <h4 class="title">Bottomwear</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Jeans', params: { slug: 'Jeans' }}">
                                                <a href="#">Jeans</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Casual Trousers', params: { slug: 'Casual Trousers' }}">
                                                <a href="#">Casual Trousers</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Formal Trousers', params: { slug: 'Formal Trousers' }}">
                                                <a href="#">Formal Trousers</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Shorts', params: { slug: 'Shorts' }}">
                                                <a href="#">Shorts</a></router-link>
                                        </li><br>

                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">
                                    <h4 class="title">Gadgets</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Smart Wearables', params: { slug: 'Smart Wearables' }}">
                                                <a href="#">Smart Wearables</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Fitness Gadgets', params: { slug: 'Fitness Gadgets' }}">
                                                <a href="#">Fitness Gadgets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Headphones', params: { slug: 'Headphones' }}">
                                                <a href="#">Headphones</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Speakers', params: { slug: 'Speakers' }}">
                                                <a href="#">Speakers</a></router-link>
                                        </li><br>
                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">

                                    <h4 class="title">Footwear</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Casual Shoes', params: { slug: 'Casual Shoes' }}">

                                                <a href="#">Casual Shoes</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Sports Shoes', params: { slug: 'Sports Shoes' }}">

                                                <a href="#">Sports Shoes</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Formal Shoes', params: { slug: 'Formal Shoes' }}">

                                                <a href="#">Formal Shoes</a></router-link>
                                        </li><br>

                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Sandals & Floaters', params: { slug: 'Sandals & Floaters' }}">

                                                <a href="#">Sandals & Floaters</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Flip Flops', params: { slug: 'Flip Flops' }}">

                                                <a href="#">Flip Flops</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Socks', params: { slug: 'Socks' }}">

                                                <a href="#">Socks</a></router-link>
                                        </li><br>

                                    </ul>
                                </div>
                                <div class="list-item">
                                    <h4 class="title">Fashion Accessories</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Wallets', params: { slug: 'Wallets' }}">

                                                <a href="#">Wallets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Belts', params: { slug: 'Belts' }}">

                                                <a href="#">Belts</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Perfumes', params: { slug: 'Perfumes' }}">

                                                <a href="#">Perfumes</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Trimmers', params: { slug: 'Trimmers' }}">

                                                <a href="#">Trimmers</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Deodorants', params: { slug: 'Deodorants' }}">

                                                <a href="#">Deodorants</a></router-link>
                                        </li><br>
                                        <li style="float: left; font-s">
                                            <router-link :to="{ name: 'Ties', params: { slug: 'Ties' }}">

                                                <a href="#">Ties</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Accessory Gift Sets', params: { slug: 'Accessory Gift Sets' }}">

                                                <a href="#">Accessory Gift Sets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Caps & Hats', params: { slug: 'Caps & Hats' }}">

                                                <a href="#">Caps & Hats</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Rings & Wristwea', params: { slug: 'Rings & Wristwea' }}">

                                                <a href="#" style="color: black;">Rings & Wristwear</a></router-link>
                                        </li><br>
                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">

                                    <h4 class="title">Plus Size</h4><br>
                                    <h4 class="title">Watch</h4><br>

                                </div>
                                <div class="list-item">
                                    <img src="@/assets/jacket.jpg" class="responsive" alt="Shop Product">
                                </div>
                            </div>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#" style="  margin-left: 19px;" class="responsiv">Women <i class="ion ion-ios-arrow-down"></i></a>
                            <div class="menu-subs menu-mega menu-column-4">
                                <div class="list-item">
                                    <h4 class="title">Indian & Fusion Wear</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Kurtas & Suits', params: { slug: 'Kurtas & Suits' }}">

                                                <a href="#">Kurtas & Suits</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Kurtis, Tunics & Tops', params: { slug: 'Kurtis, Tunics & Tops' }}">

                                                <a href="#">Kurtis, Tunics & Tops </a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Sarees', params: { slug: 'Sarees' }}">

                                                <a href="#">Sarees </a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Ethnic Wear', params: { slug: 'Ethnic Wear' }}">

                                                <a href="#">Ethnic Wear</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Skirts & Palazzos', params: { slug: 'Skirts & Palazzos' }}">

                                                <a href="#">Skirts & Palazzos</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Dress Materials', params: { slug: 'Dress Materials' }}">

                                                <a href="#">Dress Materials</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Lehenga Cholis', params: { slug: 'Lehenga Cholis' }}">

                                                <a href="#">Lehenga Cholis </a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Dupattas & Shawls', params: { slug:'Dupattas & Shawls' }}">

                                                <a href="#">Dupattas & Shawls</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Jacket', params: { slug: 'Jacket' }}">

                                                <a href="#">Jackets </a></router-link>
                                        </li><br>

                                    </ul>

                                    <h4 class="title" style="border-top: 1px dotted black;">Footwear </h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Flats', params: { slug: 'Flats' }}">

                                                <a href="#">Flats</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'CasualShoes', params: { slug: 'CasualShoes' }}">

                                                <a href="#">Casual Shoes</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Heels', params: { slug: 'Heels' }}">

                                                <a href="#">Heels</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Boots', params: { slug: 'Boots' }}">

                                                <a href="#">Boots</a></router-link>
                                        </li><br>
                                    </ul>
                                </div>
                                <div class="list-item" style="  background-color: rgb(0 0 0 / 4%);">
                                    <h4 class="title">Jewellery</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Fashion Jewellery', params: { slug: 'Fashion Jewellery' }}">

                                                <a href="#">Fashion Jewellery</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Fine Jewellery', params: { slug: 'Fine Jewellery' }}">

                                                <a href="#">Fine Jewellery</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Earrings', params: { slug: 'Earrings' }}">

                                                <a href="#">Earrings</a></router-link>
                                        </li><br>

                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">
                                    <h4 class="title">Gadgets</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Smart Wearables', params: { slug: 'Smart Wearables' }}">
                                                <a href="#">Smart Wearables</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Fitness Gadgets', params: { slug: 'Fitness Gadgets' }}">
                                                <a href="#">Fitness Gadgets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Headphones', params: { slug: 'Headphones' }}">
                                                <a href="#">Headphones</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Speakers', params: { slug: 'Speakers' }}">
                                                <a href="#">Speakers</a></router-link>
                                        </li><br>
                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">

                                    <h4 class="title" style="margin-left: -2px;">Lingerie & Sleepwear</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bra', params: { slug: 'Bra' }}">

                                                <a href="#">Bra</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Briefs', params: { slug: 'Briefs' }}">

                                                <a href="#">Briefs</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Shapewear', params: { slug: 'Shapewear' }}">

                                                <a href="#">Shapewear</a></router-link>
                                        </li><br>

                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Swimwear', params: { slug: 'Swimwear' }}">

                                                <a href="#">Swimwear</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Camisoles & Thermals', params: { slug: 'Camisoles & Thermals' }}">

                                                <a href="#">Camisoles & Thermals</a></router-link>
                                        </li><br>

                                    </ul>
                                </div>
                                <div class="list-item">
                                    <h4 class="title">Beauty & Personal Care</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Makeup', params: { slug: 'Makeup' }}">

                                                <a href="#">Makeup</a></router-link>
                                        </li><br>
                                        <!-- <li style="float: left;"><a href="#">Skincare</a></li><br> -->
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Premium Beauty', params: { slug: 'Premium Beauty' }}">

                                                <a href="#">Premium Beauty</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Lipsticks', params: { slug: 'Lipsticks' }}">

                                                <a href="#">Lipsticks</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Fragrances', params: { slug: 'Fragrances' }}">

                                                <a href="#">Fragrances</a></router-link>
                                        </li><br>
                                        <li style="float: left; font-s">
                                            <router-link :to="{ name: 'Ties', params: { slug: 'Ties' }}">

                                                <a href="#">Ties</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Accessory Gift Sets', params: { slug: 'Accessory Gift Sets' }}">

                                                <a href="#">Accessory Gift Sets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Caps & Hats', params: { slug: 'Caps & Hats' }}">

                                                <a href="#">Caps & Hats</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Rings & Wristwear', params: { slug: 'Rings & Wristwear' }}">

                                                <a href="#">Rings & Wristwear</a></router-link>
                                        </li><br>
                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">

                                    <h4 class="title">Plus Size</h4><br>
                                    <h4 class="title">Watch</h4><br>

                                </div>
                                <div class="list-item">
                                    <img src="@/assets/bluesaree.jpg" class="responsive" alt="Shop Product">
                                </div>
                            </div>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#" style="  margin-left: 19px;" class="responsiv">Home & Living <i class="ion ion-ios-arrow-down"></i></a>
                            <div class="menu-subs menu-mega menu-column-4">
                                <div class="list-item">
                                    <h4 class="title" style="margin-left: -8px;">Bed Linen & Furnishing</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bed Runners', params: { slug: 'Bed Runners' }}">

                                                <a href="#">Bed Runners</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Mattress Protectors', params: { slug: 'Mattress Protectors' }}">

                                                <a href="#">Mattress Protectors </a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bedsheets', params: { slug: 'Bedsheets' }}">

                                                <a href="#">Bedsheets </a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bedding Sets', params: { slug: 'Bedding Sets' }}">

                                                <a href="#">Bedding Sets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bed Covers', params: { slug: 'Bed Covers' }}">

                                                <a href="#">Bed Covers</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Diwan Sets', params: { slug: 'Diwan Sets' }}">

                                                <a href="#">Diwan Sets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Chair Pads & Covers', params: { slug: 'Chair Pads & Covers' }}">

                                                <a href="#">Chair Pads & Covers</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Sofa Covers', params: { slug: 'Sofa Covers' }}">

                                                <a href="#">Sofa Covers</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Blankets', params: { slug: 'Blankets' }}">

                                                <a href="#">Blankets </a></router-link>
                                        </li><br>

                                    </ul>

                                    <h4 class="title" style="border-top: 1px dotted black;">Flooring </h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Floor Runners', params: { slug: 'Floor Runners' }}">

                                                <a href="#">Floor Runners</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Carpets', params: { slug: 'Carpets' }}">

                                                <a href="#">Carpets</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Floor Mats & Dhurries', params: { slug: 'Floor Mats & Dhurries' }}">

                                                <a href="#">Floor Mats & Dhurries</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Door Mats', params: { slug: 'Door Mats' }}">

                                                <a href="#">Door Mats</a></router-link>
                                        </li><br>
                                    </ul>
                                </div>
                                <div class="list-item" style="  background-color: rgb(0 0 0 / 4%);">
                                    <h4 class="title">Bath</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bath Towels', params: { slug: 'Bath Towels' }}">

                                                <a href="#">Bath Towels</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Hand & Face Towels', params: { slug: 'Hand & Face Towels' }}">

                                                <a href="#">Hand & Face Towels</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Beach Towels', params: { slug: 'Beach Towels' }}">

                                                <a href="#">Beach Towels</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Towels Set', params: { slug: 'Towels Set' }}">

                                                <a href="#">Towels Set</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bath Rugs', params: { slug: 'Bath Rugs' }}">

                                                <a href="#">Bath Rugs</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Bath Robes', params: { slug: 'Bath Robes' }}">

                                                <a href="#">Bath Robes</a></router-link>
                                        </li><br>

                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">
                                    <h4 class="title">Lamps & Lighting</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Floor Lamps', params: { slug: 'Floor Lamps' }}">

                                                <a href="#">Floor Lamps</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Ceiling Lamps', params: { slug: 'Ceiling Lamps' }}">

                                                <a href="#">Ceiling Lamps</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Table Lamps', params: { slug: 'Table Lamps' }}">

                                                <a href="#">Table Lamps</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Wall Lamps', params: { slug: 'Wall Lamps' }}">

                                                <a href="#">Wall Lamps</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Outdoor Lamps', params: { slug: 'Outdoor Lamps' }}">

                                                <a href="#">Outdoor Lamps</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'String Lights', params: { slug: 'String Lights' }}">

                                                <a href="#">String Lights</a></router-link>
                                        </li><br>

                                    </ul>
                                    <!-- <hr style="border-top: 1px dotted black;border-right-width: 10px;"> -->

                                    <!-- <h4 class="title" style="margin-left: -2px;">Lingerie & Sleepwear</h4><br>
                                    <ul>
                                        <li style="float: left;"><a href="#">Bra</a></li><br>
                                        <li style="float: left;"><a href="#">Briefs</a></li><br>
                                        <li style="float: left;"><a href="#">Shapewear</a></li><br>

                                        <li style="float: left;"><a href="#">Swimwear</a></li><br>
                                        <li style="float: left;"><a href="#">Camisoles & Thermals</a></li><br>

                                    </ul> -->
                                </div>
                                <div class="list-item">
                                    <h4 class="title">Home Décor</h4><br>
                                    <ul>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Plants & Planters', params: { slug: 'Plants & Planters' } }">

                                                <a href="#">Plants & Planters</a></router-link>
                                        </li><br>
                                        <!-- <li style="float: left;"><a href="#">Skincare</a></li><br> -->
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Clocks', params: { slug: 'Clocks' } }">

                                                <a href="#">Clocks</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Aromas & Candles', params: { slug: 'Aromas & Candles' } }">

                                                <a href="#">Aromas & Candles</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Mirrors', params: { slug: 'Mirrors' } }">

                                                <a href="#">Mirrors</a></router-link>
                                        </li><br>
                                        <li style="float: left; font-s">
                                            <router-link :to="{ name: 'Wall Décor', params: { slug: 'Wall Décor' } }">

                                                <a href="#">Wall Décor</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Festive Decor', params: { slug: 'Festive Decor' } }">

                                                <a href="#">Festive Decor</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Pooja Essentials', params: { slug: 'Pooja Essentials' } }">

                                                <a href="#">Pooja Essentials</a></router-link>
                                        </li><br>
                                        <li style="float: left;">
                                            <router-link :to="{ name: 'Wall Shelves', params: { slug: 'Wall Shelves' } }">

                                                <a href="#">Wall Shelves</a></router-link>
                                        </li><br>
                                    </ul>
                                    <hr style="border-top: 1px dotted black;border-right-width: 10px;">

                                    <h4 class="title">Cushions & Cushion Covers</h4><br>
                                    <h4 class="title">Curtains</h4><br>

                                </div>

                                <div class="list-item">
                                    <img src="@/assets/Home.jpg" class="responsive" alt="Shop Product">
                                </div>
                            </div>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#" style="  margin-left: 19px;" class="responsiv">Accounts <i class="ion ion-ios-arrow-down"></i></a>
                            <div class="menu-subs menu-column-1">
                                <ul>
                                    <li><a href="#">Login and Register</a></li>
                                    <li><a href="#">Help and Question</a></li>
                                    <li><a href="#">Privacy and Policy</a></li>
                                    <li><a href="#">Term of Cookies</a></li>
                                </ul>
                            </div>
                        </li>
                        <li><a href="# " style="  margin-left: 19px;" class="responsiv">Contact</a></li>

                        <li>
                            <a href="" style="  margin-left: 279px;">
                                <div class="wrap">
                                    <div class="search">
                                        <input type="text" class="searchTerm" placeholder="What are you looking for?">
                                        <button type="submit" class="searchButton">
                                            <i class="fa fa-search" style="width: 58px;"></i>
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-item-right">
                <a href="#" class="menu-icon"><i class="fa-solid fa-cart-shopping" style="color: #4d8efe;"></i></a>
                <button type="button" class="menu-mobile-trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>
<div class="row">
    <Womenproductitem class="display" v-for="product in currentProducts" :key="product.id" :product="product" />
</div>
</template>

<script>
import Womenproductitem from '@/components/View/cartwomenitems/womenitems.vue'

export default {
    name: "Nav-bar",
    component: {
        Womenproductitem

    },
    data() {
        return {
            products: [{
                    "id": 1,
                    "title": "1 Stop Fashion",
                    "categories": "kurtas",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                },
                {
                    "id": 2,
                    "categories": "kurtas",
                    "title": "7Threads",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$40.00"
                }, {
                    "id": 3,
                    "categories": "kurtas",
                    "title": "Khushal K",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                },
                {
                    "id": 4,
                    "categories": "kurtas",
                    "title": "KALINI",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                }, {
                    "id": 5,
                    "categories": "kurtas",
                    "title": "HERE&NOW",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                }, {
                    "id": 6,
                    "categories": "kurtas",
                    "title": "KALINI",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                }, {
                    "id": 7,
                    "categories": "kurtas",
                    "title": "HERE&NOW",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                },
                {
                    "id": 8,
                    "categories": "kurtas",
                    "title": "KALINI",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                },
                {
                    "id": 9,
                    "categories": "kurtas",
                    "title": "Label Shaurya Sanadhya",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                },
                {
                    "id": 10,
                    "categories": "kurtas",
                    "title": "Varanga",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                },
                {
                    "id": 11,
                    "categories": "kurtas",
                    "title": "KALINI",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                },
                {
                    "id": 12,
                    "categories": "kurtas",
                    "title": "Anouk",
                    "imges": "https://loremflickr.com/cache/resized/65535_52605465562_92161cdb95_320_240_nofilter.jpg",
                    "Price": "$45.00"
                }
            ],

            currentProducts: []

        }
    },
    methods: {
        fatchdata(category) {
            this.currentProducts = category != '' ? this.products.filter(product => product.category === category) : this.products;
        }
    },
    mounted() {
        const menu = document.querySelector('.menu');
        const menuSection = menu.querySelector('.menu-section');
        const menuArrow = menu.querySelector('.menu-mobile-arrow');
        const menuClosed = menu.querySelector('.menu-mobile-close');
        const menuTrigger = document.querySelector('.menu-mobile-trigger');
        const menuOverlay = document.querySelector('.overlay');
        let subMenu;
        menuSection.addEventListener('click', (e) => {
            if (!menu.classList.contains('active')) {
                return;
            }
            if (e.target.closest('.menu-item-has-children')) {
                const hasChildren = e.target.closest('.menu-item-has-children');
                showSubMenu(hasChildren);
            }
        });
        menuArrow.addEventListener('click', () => {
            hideSubMenu();
        });
        menuTrigger.addEventListener('click', () => {
            toggleMenu();
        });
        menuClosed.addEventListener('click', () => {
            toggleMenu();
        });
        menuOverlay.addEventListener('click', () => {
            toggleMenu();
        });

        function toggleMenu() {
            menu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        }

        function showSubMenu(hasChildren) {
            subMenu = hasChildren.querySelector('.menu-subs');
            subMenu.classList.add('active');
            subMenu.style.animation = 'slideLeft 0.5s ease forwards';
            const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
            menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
            menu.querySelector('.menu-mobile-header').classList.add('active');
        }

        function hideSubMenu() {
            subMenu.style.animation = 'slideRight 0.5s ease forwards';
            setTimeout(() => {
                subMenu.classList.remove('active');
            }, 300);
            menu.querySelector('.menu-mobile-title').innerHTML = '';
            menu.querySelector('.menu-mobile-header').classList.remove('active');
        }
        window.onresize = function () {
            if (this.innerWidth > 991) {
                if (menu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        };
    }
}
</script>

<style scoped>
@-webkit-keyframes slideLeft {
    0% {
        opacity: 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }
}

@keyframes slideLeft {
    0% {
        opacity: 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }
}

@-webkit-keyframes slideRight {
    0% {
        opacity: 1;
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }

    100% {
        opacity: 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }
}

@keyframes slideRight {
    0% {
        opacity: 1;
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
    }

    100% {
        opacity: 0;
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }
}

h4 {
    float: left;
}

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
    list-style: none;
    list-style-type: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

body {
    font-family: 'Inter', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    overflow-x: hidden;
    color: #121212;
    background: #ffffff;
}

a,
button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    text-decoration: none;
}

@media only screen and (max-width: 768px) {

    a,
    button {
        cursor: default !important;
        border: none;
        outline: none;
    }
}

img,
video {
    display: block;
    max-width: 100%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
}

.container {
    max-width: 152rem;
    width: 100%;
    height: auto;
    padding: 0 2rem;
    margin: 0 auto;
}

@media only screen and (max-width: 992px) {
    .container {
        padding: 0 1rem;
        margin: 0 auto;
    }
}

.brand {
    font-family: inherit;
    font-size: 1.75rem;
    font-weight: 700;
    line-height: inherit;
    color: #e91e63;
    border: none;
    outline: none;
    margin-left: -230px;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
}

.header {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 1rem 0;
    margin: 0 auto;
    z-index: 999;
    border: none;
    outline: none;
    background: #fafafa;
    -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.header .wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.header-item-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 17%;
    flex: 0 0 17%;
}

.header-item-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66%;
    flex: 0 0 66%;
}

.header-item-right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 17%;
    flex: 0 0 17%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.header-item-right .menu-icon {
font-size: 2.35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-left: 75px;
  border: none;
  outline: none;
  color: #121212;
  transition: all 0.3s ease;
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

body{
  background: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
}

.search {
  width:  600%;
  position: relative;
  display: flex;
  margin-left: -188px;
}

.searchTerm {
  /* width: 586%;   */
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 37px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;
}

.searchTerm:focus{
  color: #00B4CC;
}

.searchButton {
  width: 60px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
}

/*Resize the wrap to see the search bar change!*/
.wrap{
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header .menu>ul>li {
    display: inline-block;
    line-height: 3.125rem;
    margin-left: 1.5rem;
}

.header .menu>ul>li>a {
    position: relative;
    font-family: inherit;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.25;
    border: none;
    outline: none;
    color: #121212;
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    -webkit-transition: color 0.3s ease-in-out;
    -o-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
}

.header .menu>ul>li .menu-subs {
    position: absolute;
    width: 100%;
    height: auto;
    margin-top: 1.75rem;
    padding: 1rem 2rem;
    border: none;
    outline: none;
    z-index: 500;
    opacity: 0;
    visibility: hidden;
    border-radius: 0.25rem;
    border-top: 3px solid #e91e63;
    background: #fafafa;
    -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    -webkit-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
}

.header .menu>ul>li .menu-subs>ul>li {
    line-height: 1;
}

.header .menu>ul>li .menu-subs>ul>li>a {
    display: inline-block;
    font-family: inherit;
    font-size: 17px;
    font-weight: 500;
    line-height: 1.25;
    padding: 0.75rem 0;
    border: none;
    outline: none;
    color: #121212;
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.header .menu>ul>li .menu-column-1 {
    min-width: 16rem;
    max-width: 20rem;
}

.header .menu>ul>li .menu-subs.menu-mega {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
}

.header .menu>ul>li .menu-subs.menu-mega>.list-item>ul>li {
    display: block;
    line-height: 1;
}

.header .menu>ul>li .menu-subs.menu-mega>.list-item>ul>li>a {
    display: inline-block;
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.25;
    padding: 0.5rem 0;
    border: none;
    outline: none;
    color: #121212;
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    -webkit-transition: color 0.3s ease-in-out;
    -o-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
}

.header .menu>ul>li .menu-subs.menu-column-4 {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-width: 68rem;
    width: 100%;
    padding: 1.25rem 1rem;
}

.menu-section .home {
    margin-left: -329px;

}

.header .menu>ul>li .menu-subs.menu-column-4>.list-item {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 1rem;
}

.header .menu>ul>li .menu-subs.menu-column-4>.list-item .title {
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    padding: 0.75rem 0;
    border: none;
    outline: none;
    color: #e91e63;
    text-transform: uppercase;
    text-rendering: optimizeLegibility;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.header .menu>ul>li .menu-subs.menu-column-4>.list-item.text-center .title {}

.header .menu>ul>li .menu-subs.menu-column-4>.list-item img.responsive {
    max-width: 100%;
    width: 100%;
    height: auto;
    margin-top: 0.75rem;
    -o-object-fit: cover;
    object-fit: cover;
    vertical-align: middle;
}

.header .menu>ul>li .menu-subs.menu-mega>.list-item>ul>li>a:hover,
.header .menu>ul>li .menu-subs>ul>li>a:hover {
    color: #ff1060;
    text-decoration: none;
}

.header-item-right a:hover,
.header .menu>ul>li:hover>a {
    color: #e91e63;
}

@media only screen and (min-width: 993px) {
    .header .menu>ul>li.menu-item-has-children:hover .menu-subs {
        margin-top: 0.5rem;
        opacity: 1;
        visibility: visible;
    }
}

.menu-mobile-header,
.menu-mobile-trigger {
    display: none;
}

@media only screen and (max-width: 992px) {
    .header-item-center {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3;
    }

    .header-item-left,
    .header-item-right {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }

    .wrapper {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .header .menu-mobile-trigger {
        position: relative;
        display: block;
        cursor: pointer;
        width: 1.75rem;
        height: 1rem;
        border: none;
        outline: none;
        margin-left: 1.25rem;
        background: none;
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.35s ease-in-out;
        -o-transition: 0.35s ease-in-out;
        transition: 0.35s ease-in-out;
    }

    .header .menu-mobile-trigger span {
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        left: 0;
        border: none;
        outline: none;
        opacity: 1;
        border-radius: 0.25rem;
        background: #121212;
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.25s ease-in-out;
        -o-transition: 0.25s ease-in-out;
        transition: 0.25s ease-in-out;
    }

    .header .menu-mobile-trigger span:nth-child(1) {
        top: 0;
    }

    .header .menu-mobile-trigger span:nth-child(2),
    .header .menu-mobile-trigger span:nth-child(3) {
        top: 0.5rem;
    }

    .header .menu-mobile-trigger span:nth-child(4) {
        top: 1rem;
    }

    .header-item-right {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .header .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 20rem;
        height: 100%;
        z-index: 1099;
        overflow: hidden;
        background: #fafafa;
        -webkit-transform: translate(-100%);
        -ms-transform: translate(-100%);
        transform: translate(-100%);
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    .header .menu.active {
        -webkit-transform: translate(0%);
        -ms-transform: translate(0%);
        transform: translate(0%);
    }

    .header .menu>ul>li {
        display: block;
        line-height: 1;
        margin: 0;
    }

    .header .menu>ul>li>a>.responsiv {
        margin-left: -130px;
    }

    .header .menu>ul>li>a {
        display: block;

        line-height: 3.125rem;
        height: 3.125rem;
        padding: 0 3.125rem 0 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    .header .menu>ul>li>a i.ion {
        position: absolute;
        font-size: 1.25rem;
        line-height: 3.125rem;
        top: 0;
        right: 0;
        width: 3.125rem;
        height: 3.125rem;
        text-align: center;
        -webkit-transform: rotate(-90deg);
        -ms-transform: rotate(-90deg);
        transform: rotate(-90deg);
    }

    .header .menu .menu-mobile-header {
        position: relative;
        position: -webkit-sticky;
        position: sticky;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        top: 0;
        height: 3.125rem;
        z-index: 501;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        background: #fafafa;
    }

    .header .menu .menu-mobile-header .menu-mobile-arrow {
        display: none;
        font-size: 1.25rem;
        line-height: 3.125rem;
        width: 3.125rem;
        height: 3.125rem;
        cursor: pointer;
        border-right: 1px solid rgba(0, 0, 0, 0.1);
        color: #121212;
        text-align: center;
    }

    .header .menu .menu-mobile-header.active .menu-mobile-arrow {
        display: block;
    }

    .header .menu .menu-mobile-header .menu-mobile-title {
        font-family: inherit;
        font-size: 18px;
        font-weight: 500;
        line-height: inherit;
        color: #121212;
        text-transform: capitalize;
        text-rendering: optimizeLegibility;
    }

    .header .menu .menu-mobile-header .menu-mobile-close {
        font-size: 2.25rem;
        line-height: 3.125rem;
        cursor: pointer;
        width: 3.125rem;
        height: 3.125rem;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        color: #121212;
        text-align: center;
    }

    .header .menu .menu-section {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .header .menu>ul>li .menu-subs {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        max-width: none;
        min-width: auto;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 1rem;
        padding-top: 4rem;
        opacity: 1;
        overflow-y: auto;
        visibility: visible;
        -webkit-transform: translateX(0%);
        -ms-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .header .menu>ul>li .menu-subs.menu-mega {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        max-width: none;
        min-width: auto;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 1rem;
        padding-top: 4rem;
        opacity: 1;
        overflow-y: auto;
        visibility: visible;
        -webkit-transform: translateX(0%);
        -ms-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-box-shadow: none;
        box-shadow: none;
    }

    .header .menu>ul>li .menu-subs.active {
        display: block;
    }

    .header .menu>ul>li .menu-subs.menu-column-4>.list-item {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        padding: 0rem;
    }

    .header .menu>ul>li .menu-subs.menu-column-4>.list-item img.responsive {
        margin-top: 0;
    }

    .header .menu>ul>li .menu-subs.menu-column-4>.list-item.text-center .title {
        margin-bottom: 1.25rem;
    }

    .header .menu>ul>li .menu-subs.menu-column-4>.list-item.text-center:last-child .title {
        margin-bottom: 0rem;
    }

    .header .menu>ul>li .menu-subs>ul>li>a {
        display: block;
    }

    .header .menu>ul>li .menu-subs.menu-mega>.list-item>ul {
        margin-bottom: 1rem;
    }

    .header .menu>ul>li .menu-subs.menu-mega>.list-item>ul>li>a {
        display: block;
    }

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1098;
        opacity: 0;
        visibility: hidden;
        background: rgba(0, 0, 0, 0.55);
        -webkit-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
    }

    .overlay.active {
        opacity: 1;
        visibility: visible;
    }
}

.main {
    display: block;
    width: 100%;
    min-height: 100vh;
    background-image: url("https://source.unsplash.com/pkhBlvTLyog/1920x1280");
    background-size: cover;
    background-position: center right;
    background-repeat: no-repeat;
}
</style>
