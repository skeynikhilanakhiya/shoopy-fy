<template>
<div class="container" style="  width: 1365px;">
    <router-link to="/" style="  float: left;margin-bottom: 29px;
  color: black;">Home</router-link>
    <div class="bg-white rounded d-flex align-items-center justify-content-between" id="header"> <button class="btn btn-hide text-uppercase" type="button" data-toggle="collapse" data-target="#filterbar" aria-expanded="false" aria-controls="filterbar" id="filter-btn"> <span class="fas fa-angle-left" id="filter-angle"></span> <span id="btn-txt">Hide filters</span> </button>
        <nav class="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto" style="box-shadow: none;">
            <div class=" navbar" id="mynav">
                <ul class="navbar-nav d-lg-flex align-items-lg-center">
                    <li class="nav-item active">  </li>
                    <li class="nav-item d-inline-flex align-items-center justify-content-between mb-lg-0 mb-3">
                        <div class="d-inline-flex align-items-center mx-lg-2" id="select2">
                          
                        </div>
                       <h2>Total Product  <span>{{ products.length }}</span></h2>
                    </li>
                    <li class="nav-item d-lg-none d-inline-flex"> </li>
                </ul>
            </div>
        </nav>
        <div class="ml-auto mt-3 mr-2" style="margin-right:20px;">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <div class="header-item-right">
                        <!-- <router-link to="/cart"> -->
    
   
                                 <i class="fa-sharp fa-solid fa-heart"  id="icon"></i>
      
                            <a class="menu-icon"  v-on:click="navigateTo('cart')"><i class="fa-solid fa-cart-shopping" style="color: #4d8efe;font-size: x-large;"></i></a>
   <span>{{ cart.length
   }}</span> 
                        <!-- </router-link> -->
                    </div>
                </ul>
            </nav>
        </div>
    </div>
    <div id="content" class="my-5">
        <div id="filterbar" class="collapse">
            <div class="box border-bottom">

                <div> <label class="tick">Men <input type="checkbox" v-model="filterproduct" value="men" checked="checked"> <span class="check"></span>
                    </label> </div>
                <div> <label class="tick">Women <input type="checkbox" v-model="filterproduct" value="women"> <span class="check"></span> </label> </div>

            </div>
            <div class="box border-bottom">
                <div class="box-label text-uppercase d-flex align-items-center">Categories </div>
                <div class=" mt-2 mr-1" v-for="option in options" :key="option.id">
                    <div class="my-1"> <label class="tick"> {{ option.label }} <input type="checkbox" checked="checked" v-model="filterproduct" value="T-shirt"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Boxers <input type="checkbox" v-model="filterproduct" value="Boxers"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Pent <input type="checkbox" v-model="filterproduct" value="Pent"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Jackets <input type="checkbox" v-model="filterproduct" value="Jackets"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">CasualShirt <input type="checkbox" v-model="filterproduct" value="CasualShirt"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Baggy <input type="checkbox" v-model="filterproduct" value="Baggy" checked> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Kurta<input type="checkbox" v-model="filterproduct" value="Kurta"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Coat <input type="checkbox" v-model="filterproduct" value="Coat" checked> <span class="check"></span> </label> </div>

                    <div class="my-1" style="cursor: pointer;">
                        <span style="color: red;" class="open-btn">View More</span>
                    </div>
                    <!--Modal & Modal Background-->
                    <div id="modal-container">
                        <div id="modal">
                            <div style="background-color: rgba(0, 0, 0, 0.04);
  height: 417px;">
                                <ul class="FilterDirectory-list">
                                    <li>#</li>
                                    <li style="border-top: 1px solid rgb(176, 154, 154);"><label class="tick" style="margin-top: 10px;">Saree <input type="checkbox" v-model="filterproduct" value="Saree" checked> <span class="check"></span><span class="FilterDirectory-count"></span> </label><label class="tick">Duppata <input type="checkbox" v-model="filterproduct" value="Duppata" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Formal <input type="checkbox" v-model="filterproduct" value="Formal" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Ties <input type="checkbox" v-model="filterproduct" value="Ties" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Shorts <input type="checkbox" v-model="filterproduct" value="Shorts" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Track <input type="checkbox" v-model="filterproduct" value="Track" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Dhotis <input type="checkbox" v-model="filterproduct" value="Dhotis" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Sherwanis <input type="checkbox" v-model="filterproduct" value="Sherwanis" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Kurtas & Kurta Sets <input type="checkbox" v-model="filterproduct" value="Kurtas & Kurta Sets" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Blazers <input type="checkbox" v-model="filterproduct" value="Blazers" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Sweaters <input type="checkbox" v-model="filterproduct" value="Sweaters" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Perfumes <input type="checkbox" v-model="filterproduct" value="Perfumes" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Belts <input type="checkbox" v-model="filterproduct" value="Belts" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Kurtas & Suits <input type="checkbox" v-model="filterproduct" value="Kurtas & Suits" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Rings & Wristwear <input type="checkbox" v-model="filterproduct" value="Rings & Wristwear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Caps & Hats <input type="checkbox" v-model="filterproduct" value="Caps & Hats" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <div class="common-checkboxIndicator"></div>
                                    </li>

                                </ul>
                            </div>
                            <div style="background-color: rgba(255, 255, 255, 0.04);
  height: 417px;">
                                <ul class="FilterDirectory-list">
                                    <li>A</li>
                                    <li style="border-top: 1px solid rgb(255, 255, 255);"><label class="tick" style="margin-top: 10px;">Fashion Jewellery <input type="checkbox" v-model="filterproduct" value="Fashion Jewellery" checked> <span class="check"></span><span class="FilterDirectory-count"></span> </label><label class="tick">Boots <input type="checkbox" v-model="filterproduct" value="Boots" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Heels <input type="checkbox" v-model="filterproduct" value="Heels" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Flats <input type="checkbox" v-model="filterproduct" value="Flats" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Lehenga Cholis <input type="checkbox" v-model="filterproduct" value="Lehenga Cholis " checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Dress Materials <input type="checkbox" v-model="filterproduct" value="Dress Materials" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Skirts & Palazzos <input type="checkbox" v-model="filterproduct" value="Skirts & Palazzos" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Ethnic Wear <input type="checkbox" v-model="filterproduct" value="Ethnic Wear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Kurtis, Tunics & Tops <input type="checkbox" v-model="filterproduct" value="Kurtis, Tunics & Tops " checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Blazers <input type="checkbox" v-model="filterproduct" value="Blazers" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Camisoles & Thermals <input type="checkbox" v-model="filterproduct" value="Camisoles & Thermals" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Swimwear <input type="checkbox" v-model="filterproduct" value="Swimwear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Shapewear <input type="checkbox" v-model="filterproduct" value="Shapewear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Briefs <input type="checkbox" v-model="filterproduct" value="Briefs" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Bra <input type="checkbox" v-model="filterproduct" value="Bra" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Earrings <input type="checkbox" v-model="filterproduct" value="Earrings" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <div class="common-checkboxIndicator"></div>
                                    </li>

                                </ul>
                            </div>
                            <div id="close-btn">&times;</div>

                        </div>
                    </div>
                </div>

            </div>
            <div class="box border-bottom">
                <div class="box-label text-uppercase d-flex align-items-center">Price </div>
                <div id="inner-box2" class=" mt-2 mr-1">
                    <div class="my-1"> <label class="tick">Under $10 <input type="checkbox" value="under10" v-model="filterproduct"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">$10 - $50 <input type="checkbox" value="10to50" v-model="filterproduct"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">$50 - $100 <input type="checkbox" checked value="50to100" v-model="filterproduct"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Over $100 <input type="checkbox" value="over100" v-model="filterproduct"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Over $1000 <input type="checkbox" value="over1000" v-model="filterproduct"> <span class="check"></span>
                        </label> </div>
                </div>
            </div>
            <div class="box border-bottom">
                <div class="vertical-filters-filters"><span class="vertical-filters-header">Color</span>
                    <div class="filter-search-filterSearchBox"><input type="text" class="filter-search-inputBox filter-search-hidden" placeholder="Search for Color"><span class="myntraweb-sprite filter-search-iconSearch sprites-search"></span></div>
                    <ul>
                        <li class="colour-listItem"><label class="common-customCheckbox" data-count="738"><span data-colorhex="black" class="colour-label colour-colorDisplay" style="background-color: rgb(54, 69, 79);"></span>Black
                                <input type="checkbox" v-model="filterproduct" value="Black">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"> <label class="common-customCheckbox" data-count="525"><span data-colorhex="blue" class="colour-label colour-colorDisplay" style="background-color: rgb(0, 116, 217);"></span>Blue
                                <input type="checkbox" v-model="filterproduct" value="Blue">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"> <label class="common-customCheckbox" data-count="476"><span data-colorhex="pink" class="colour-label colour-colorDisplay" style="background-color: rgb(241, 169, 196);"></span>Pink
                                <input type="checkbox" v-model="filterproduct" value="Pink">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"> <label class="common-customCheckbox" data-count="473"><span data-colorhex="green" class="colour-label colour-colorDisplay" style="background-color: rgb(94, 177, 96);"></span>Green
                                <input type="checkbox" v-model="filterproduct" value="Green">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem">

                            <label class="common-customCheckbox" data-count="373"><span data-colorhex="white" class="colour-label colour-colorDisplay" style="background-color: rgb(255, 255, 255);"></span>White
                                <input type="checkbox" v-model="filterproduct" value="White">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem">

                            <label class="common-customCheckbox" data-count="292"><span data-colorhex="navy blue" class="colour-label colour-colorDisplay" style="background-color: rgb(60, 68, 119);"></span>Navy Blue
                                <input type="checkbox" v-model="filterproduct" value="Navy Blue">
                                <div class="co  mmon-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"><label class="common-customCheckbox" data-count="270"><span data-colorhex="red" class="colour-label colour-colorDisplay" style="background-color: rgb(211, 75, 86);"></span>Red
                                <span class="colour-num">
                                </span>
                                <input type="checkbox" v-model="filterproduct" value="Red">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                    </ul>

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
        <div v-if="page === 'product'">
            
    
        <div id="products" style="z-index:0;">
            <div class="row d-flex " >
                <div class="col-md-3  " v-for="item in filteredData" :key="item.id">
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
                         <button type="button"    class="add-to-cart" v-on:click="Addtocart(item)">
                               Add to Cart
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
        </div></div>
        <div v-if="page === 'cart'">
         <a class="menu-icon" v-on:click="navigateTo('product')" style="margin-right:10px;float:left;"><i class="fa fa-arrow-left" style="color: #4d8efe;"></i></a>
         <div id="products" style="z-index:0;">
                <div class="row d-flex " >
                    <div class="col-md-3  " v-for="item in cart" :key="item.id">
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
                             <button type="button"    class="add-to-cart" v-on:click="RemoveItemFromCart(item)"> 
                                   Remove to Cart
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
            </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Mens-items",
    data() {
        return {
            page:"product",
            options: [{
                    id: 1,
                    label: 'T-shirt'
                },

                // Add more options as needed
            ],
            // selectedOptions: [],
            filterproduct: [],

            Checked: [],

            cart:[],
            products: [{
                    "id": 1,
                    "title": "T-shirt",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg",
                    "price": "$5.00",
                    "ideal_type": "men",

                    "category": "T-shirt",
                    "prices": "under10",
                },
                {
                    "id": 2,
                    "title": "Shirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 3,

                    "title": "Jackets",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20618728/2022/11/4/a1272f43-b234-4773-8aad-1181f48954a51667546666113Jackets1.jpg",
                "prices": "50to100",

                    "price": "$85.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                },
                {
                    "id": 4,
                    "title": "Pent",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1729344/2020/3/2/84a03c78-f8e5-4c20-942c-8ea6e4a9ed641583150812330-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg",
                    "ideal_type": "men",
                    "price": "$145.00",
                    "category": "Pent",
                    "prices": "over100",


                }, {
                    "id": 5,
                    "title": "Coat",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20276790/2022/10/6/42d711c0-5f38-4c6a-a123-ac6bf862dfd31665038713926MenBlackTwoPieceSuit1.jpg",
                    "ideal_type": "men",
                    "price": "$245.00",
                    "category": "Coat",
                    "prices": "over100",


                }, {
                    "id": 6,
                    "title": "Kurta",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20038544/2022/9/17/eae29efd-88d6-4ac5-982f-8db5afd7d40d1663406125913JompersMenBlackFlaredSleevesPathaniKurta1.jpg",
                    "ideal_type": "men",
                    "price": "$485.00",
                    "category": "Kurta",
                    "prices": "over100",


                }, {
                    "id": 7,
                    "title": "Baggy",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20179254/2022/9/27/6488dabd-5c2b-40d1-898e-6414f87b968e1664260019035RelaxedFitHoodie1.jpg",
                    "ideal_type": "men",
                    "price": "$225.00",
                    "category": "Baggy",
                    "prices": "over100",


                },
                {
                    "id": 8,
                    "title": "CasualShirt",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
                    "categories": "CasualShirt",
                    "ideal_type": "men",
                    "price": "$65.00",
                    "category": "CasualShirt",
                    "prices": "50to100",


                },
                {
                    "id": 9,

                    "title": "Saree",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21209326/2023/1/11/ef0dbde1-af80-4465-8b7b-6025cdb867c41673437032164-kasee-Embellished-Beads-and-Stones-Saree-8081673437031391-1.jpg",
                    "price": "$45.00",
                    "category": "Saree",
                    "ideal_type": "women"

                },
                {
                    "id": 10,
                    "title": "H&M",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17877308/2022/4/13/f0a1a350-96ed-4be8-a873-f61993de9fc01649856174872SochWomenBeigeDupatta1.jpg",
                    "ideal_type": "women",
                    "price": "$45.00",
                    "category": "Duppata"
                },
                {
                    "id": 11,
                    "title": "HELLCAT",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15225020/2023/1/31/569859cf-9c74-4e26-9e6b-b585d49469471675163985502-LOUIS-STITCH-Men-Blue--White-Printed-Broad-Tie-4171675163985-1.jpg",
                    "ideal_type": "men",

                    "category": "Ties",
                    "price": "$45.00",
                },
                {
                    "id": 12,
                    "title": "SethuKrishna",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15620402/2021/9/25/67dc58c1-8509-4d40-81cd-f4318ed81fba1632582459118MenReadymadeDhotiPant1.jpg",
                    "ideal_type": "men",

                    "category": "Dhotis",
                    "price": "$1145.00",
                }, {
                    "id": 13,
                    "title": "HELLCAT",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19453822/2022/8/10/10810342-b2fa-46a2-813a-16544283bc141660107353797VastramayMensPurpleAndRoseGoldSilkBlendSherwaniSet1.jpg",
                    "category": "Sherwanis",
                    "ideal_type": "men",

                    "price": "$1145.00",
                },
                {
                    "id": 14,
                    "title": "HELLCAT",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19023968/2022/12/16/519cd711-54a9-496b-929e-0e59ac898e931671177660408-Blackberrys-Men-Shirts-2311671177659814-1.jpg",
                    "category": "Formal",
                    "ideal_type": "men",

                    "price": "$1145.00",
                }, {
                    "id": 15,
                    "title": "Puma",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12352000/2020/10/12/50f15c6e-0ca7-45b2-81eb-7cfd03fe7bdd1602494543302-Puma-Men-Track-Pants-1341602494540721-1.jpg",
                    "category": "Track",
                    "ideal_type": "men",

                    "price": "$1145.00",
                }, {
                    "id": 16,
                    "title": "HELLCAT",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20037372/2022/9/26/35fc44b2-0ffe-45a8-8d8b-f2197f8ed7911664183869798-DressBerry-Women-Bra-4381664183869340-1.jpg",
                    "category": "Bra",
                    "ideal_type": "women",
                    "prices": "over1000",

                    "price": "$1145.00",
                },
                 {
                "id": 17,
                "title": "HRX",
                "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18204202/2022/7/13/c7a4cb93-ba66-4a39-b101-be72e0dc995c1657696089387-HRX-by-Hrithik-Roshan-Black-Fashion-Mens-Track-pants-4171657-1.jpg",
                "prices": "10to50",

                "price": "$40.00",
                "category": "Track",
                "ideal_type": "men"

            },
             {
                "id": 18,
                "title": "ADIDAS",
                "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10528440/2019/12/16/e25f2412-530f-4132-b7e3-88c9f4ae93811576485689365-ADIDAS-Men-Track-Pants-6691576485687809-1.jpg",
                "prices": "10to50",

                "price": "$40.00",
                "category": "Track",
                "ideal_type": "men"

            }, {
                "id": 19,
                "title": "Rapid",
                "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22540400/2023/3/28/68c0f0df-4063-4cba-996c-4167f544fc941680000057045TechnosportActiveMenRapidDryRunningTrackPant1.jpg",
                "prices": "10to50",

                "price": "$40.00",
                "category": "Track",
                "ideal_type": "men"

            }, {
                    "id": 20,
                    "title": "Fashion",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18204212/2022/7/13/bf471b2e-949e-4be1-8cdc-f32f2a509f8f1657696117804-HRX-by-Hrithik-Roshan-Charcoal-Fashion-Mens-Track-pants-2916-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Track",
                    "ideal_type": "men"

                }, {
                    "id": 21,
                    "title": "Puma",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18096040/2022/5/12/31f46739-c97c-4b37-9b6c-1a277f6657111652350741355-Puma-Men-Track-Pants-2411652350740676-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Track",
                    "ideal_type": "men"

                }, {
                    "id": 22,
                    "title": "HIGHLANDER",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9838377/2019/7/12/78179e92-0f78-4fca-8eb5-b0ca44a060b01562927656990-HIGHLANDER-Men-Black-Solid-Slim-Fit-Track-Pants-270156292765-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Track",
                    "ideal_type": "men"

                }, {
                    "id": 23,
                    "title": "Lack",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20900886/2022/11/24/c21e9e2b-c282-433c-b1e1-445a665d74f31669285148415BlamblackWhiteRegularFitJoggers1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Track",
                    "ideal_type": "men"

                }, {
                    "id": 24,
                    "title": "Regular",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19444600/2022/8/30/0da2ab8e-5d8e-44bd-82d6-340b777988aa1661855827682-HRX-by-Hrithik-Roshan-Mens-Graphic-Black-Regular-Fit-Track-p-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Track",
                    "ideal_type": "men"

                }, {
                "id": 25,
                "title": "CasualTrack",
                "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22945670/2023/4/28/978175e6-c8d3-40b8-9c72-793ec3c6c4131682684806458FubarSolidMenCasualTrackPants1.jpg",
                "prices": "10to50",

                "price": "$40.00",
                "category": "Track",
                "ideal_type": "men"

            }, {
                    "id": 26,
                    "title": "ADIDAS",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20470126/2023/3/24/6a5d271b-427e-4522-b2d7-9c5819d2498a1679641092076-ADIDAS-Originals-Men-Shorts-8621679641091379-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 27,
                    "title": "Roadstar",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13817974/2021/5/6/76bf058b-2e7d-427e-9a96-37efece1b3f81620300446410-Roadster-Men-Shorts-9671620300445375-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 28,
                    "title": "MeLange",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18185104/2023/3/28/07227f15-663e-47a9-85a1-b7508038890d1679985916840-HRX-by-Hrithik-Roshan-Men-Grey-Melange-Solid-Shorts-92167998-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 29,
                    "title": "Denim",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17920434/2023/4/1/73b835e8-93b4-49f4-ade5-41f5d934f9b41680335046553-US-Polo-Assn-Denim-Co-Men-Mid-Rise-Slim-Fit-Denim-Shorts-976-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 30,
                    "title": "Regular",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22283784/2023/3/10/0f2fd36d-41a0-4ef4-bae3-fdd620a040361678461546505RegularFitSweatshorts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 31,
                    "title": "Sports",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19636176/2022/11/4/12ef7187-7a74-414b-8a82-c97cd5b5c2d21667557738790-Jockey-Men-Olive-Green-Solid-Cotton-Sports-Shorts-3816675577-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 32,
                    "title": "Shorts",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/9/954d1590-5c01-41f4-830c-c04bc8b624511612886316375-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 33,
                    "title": "DiamondShort",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21467468/2023/2/14/e442d8ee-75d8-4942-9189-5069c01caa391676377631693-Jordan-Dri-FIT-Sport-Mens-Diamond-Shorts-2321676377631008-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id":34,
                    "title": "Terrain",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17245532/2022/5/11/068261d1-3e82-4ebd-b2b7-2ecf8a77e4171652253021904-Indian-Terrain-Men-Shorts-9541652253021238-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 35,
                    "title": "Kook",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21565630/2023/4/11/d64d49bb-ee90-4085-97a7-5f13241b62071681187356700-Kook-N-Keech-Men-Shorts-3121681187356105-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 36,
                    "title": "WeatShort",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21609184/2023/1/19/71da4ae4-6797-4e88-b96b-5261d99e8de616741015561712-packRegularFitsweatshorts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 37,
                    "title": "Addidas",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20470096/2023/2/14/17498419-082f-4513-8fce-aa13f27fd3ea1676374640869-ADIDAS-Men-Shorts-7821676374640282-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shorts",
                    "ideal_type": "men"

                }, {
                    "id": 38,
                    "title": "Shirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21334596/2023/4/17/929f95d4-3f34-4d79-98bd-9425e270da8e1681723781898-Van-Heusen-Men-Shirts-6021681723781278-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 39,
                    "title": "Shirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22643980/2023/5/5/524ad837-3091-4139-a551-37765c9df1ee1683277464005-Park-Avenue-Pure-Cotton-Slim-Fit-Windowpane-Checked-Formal-S-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 40,
                    "title": "Louis",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21074236/2022/12/19/2986c427-93b2-4b95-bdde-407293b253ae1671447707252-Louis-Philippe-Men-Shirts-6201671447706571-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 41,
                    "title": "Levis",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21804946/2023/2/2/46c60b31-96b5-4ec0-aa7d-9feceeea282c1675323352782JackJonesMenWhiteSlimFitCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 42,
                    "title": "Raymond",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19872806/2022/9/9/095af28a-9dcb-49ba-bc42-99a1e0578ce21662706732880BlackberrysMenNavyBlueSlimFitGridTattersallChecksCheckedCasu1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 43,
                    "title": "Mangoman",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21537534/2023/1/18/6776b378-1f1d-49c1-99fa-3b1798f968661674019419714ShirtsMANGOMANMenShirtsMANGOMANMenShirtsMANGOMANMenShirtsMAN1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 44,
                    "title": "Louis",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19092114/2022/7/25/d2e70f89-9eb6-428a-b24c-13f729f331851658753603262-Louis-Philippe-Men-Shirts-9071658753602733-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 45,
                    "title": "DlyShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22315780/2023/3/13/e22c251c-535f-46ab-abad-1ff63f0817791678697466774VanHeusenMenWhiteOpaqueFormalShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 46,
                    "title": "Fuber",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22913930/2023/4/27/1f9713e3-4661-4ee1-bdc3-560cbffe59451682565184638FubarSolidMenFormalShirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 47,
                    "title": "Louis",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22672600/2023/4/20/d9b2e543-85e6-402c-8eca-9ed769ecc4071681982077114-Louis-Philippe-Men-Shirts-8521681982076471-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 48,
                    "title": "Skinny",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21646090/2023/1/20/cd125865-0083-4701-bff9-4bfde52158331674229270148Shirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Formal",
                    "ideal_type": "men"

                }, {
                    "id": 49,
                    "title": "GreyTie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21233176/2022/12/17/c215f305-fd22-4e54-bc6e-5d10215c99941671287233558KAEZRIMenGreySkinnyTie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 50,
                    "title": "Black",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/12/cfac4ec1-9a65-4905-add3-fff9837bc4ef1591912375975-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 51,
                    "title": "Necktie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22466530/2023/3/22/24c98f42-4cb3-47c8-aa0c-8884a29bf3781679478437280MensBlackSilkFormalNecktieGiftSet1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 56,
                    "title": "BroadTie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16797692/2022/9/28/0f36390b-c4d2-457e-b179-fdc7d8733ecd1664349449301-KOVOVE-Men-Grey-Printed-Broad-Neck-Tie-8141664349449182-12.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 57,
                    "title": "MaroonTie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18261738/2022/5/13/7b0f86b4-3a4e-442d-8191-9c4eb59822881652435378430AllenSollyMenMaroonTies1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 58,
                    "title": "RedTie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20426214/2022/10/17/ca266de3-096e-4f30-84bd-f74627f48c881665993708592LOUISSTITCHMenRedWovenDesignSkinnyTie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 59,
                    "title": "packsatinties",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21032146/2022/12/2/91d2c0c2-7a6d-4e89-b4cf-1bbdd06d4cca16699631749602-packsatinties1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 60,
                    "title": "DesignTie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20512166/2022/10/26/2d4f5ae1-18d1-4ab0-ac69-7dd14f48005d1666781023306PeterEnglandMenNavyBlueRedWovenDesignSkinnyTie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 61,
                    "title": "SkinnyTie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20426180/2022/10/17/ab61d578-eddc-422d-b9b2-4a7c8d496c951665993655219LOUISSTITCHMenBlueWhiteWovenDesignSkinnyTie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 62,
                    "title": "NavyBlueTies",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18261790/2022/5/13/f5416dd2-c7f5-4839-9ec1-8d4a09d660bc1652434716065AllenSollyMenNavyBlueTies1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 63,
                    "title": "SkinnyTie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20426200/2022/10/17/26199375-1d03-45fe-b22a-faa27563183f1665990833421LOUISSTITCHMenBlackWhitePrintedSkinnyTie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Ties",
                    "ideal_type": "men"

                }, {
                    "id": 64,
                    "title": "Dly",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/8/12/2b102387-a0b8-4987-945c-cfc2160935f31597187609402-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 65,
                    "title": "Embroider",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19338498/2022/8/1/60bf6332-344e-42bb-810b-f4f6d73d72cd1659357315663SatraniWomenWhiteNetEmbroideredDupatta1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 66,
                    "title": "ThreadWo",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20195798/2022/9/28/aeefabf3-b813-4639-b15b-09f66735ed341664353735023DupattaBazaarWhiteEthnicMotifsEmbroideredDupattawithThreadWo1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 67,
                    "title": "Akheri",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20788458/2023/1/2/c077bffb-411f-4144-81ff-e93c4e83ca101672650379989-akheri-Women-Dupatta-1791672650379605-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 68,
                    "title": "SochBegie",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17877308/2022/4/13/f0a1a350-96ed-4be8-a873-f61993de9fc01649856174872SochWomenBeigeDupatta1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 69,
                    "title": "Sangrai",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17449506/2022/4/1/99e8d60b-e02d-450b-b9b0-30f440f676a71648789562028-Sangria-Women-Dupatta-1641648789561828-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 70,
                    "title": "WovenDesign",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14057762/2021/4/8/8a8c6607-3211-4f4c-8b1d-cee60b0486191617899026321THEWEAVETRAVELLERWomenBlackWovenDesign1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 71,
                    "title": "BlockPrintDupatta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21656518/2023/1/21/30c708e1-72a6-4346-89d9-2d947bffc0871674304637775DupattaBazaarNavyBlueMaroonPrintedBlockPrintDupatta1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 72,
                    "title": "Taavi",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7538231/2018/11/28/a166c55a-8322-485d-bcbb-150cbab4e0241543408606969-Taavi-Women-Dupatta-6711543408606279-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 73,
                    "title": "Zari",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22663734/2023/4/17/2215f845-9299-404f-90eb-dea42ff84e081681712653363-LOOKNBOOK-ART-Woven-Design-Dupatta-with-Zari-159168171265290-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 74,
                    "title": "Saahiba",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21943204/2023/2/17/3e265fb1-adec-4420-ba8c-63d24cbd0ca51676613785346-Rani-Saahiba-Women-Dupatta-8221676613784851-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Duppata",
                    "ideal_type": "women"

                }, {
                    "id": 75,
                    "title": "BreastedSlim",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18848560/2022/6/24/1af0a1bc-0d05-4758-9bf0-a51df8cae2fd1656048335619LouisPhilippeMenCream-ColouredSelf-DesignSingle-BreastedSlim1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 76,
                    "title": "FormalSuit",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21280154/2022/12/22/b720fcf3-af75-4924-81b6-cff1cfdac9081671714577725VanHeusenMenSingleBreastedSlimFit3-PeiceFormalSuit1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 77,
                    "title": "BlackSuit",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2018/12/5/9fb238af-3fb1-4765-abe8-b17074915e6e1543956375649-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 78,
                    "title": "RaymondSuit",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20460752/2023/2/10/b0e68af2-4818-4f8b-8a66-219d2396ebaf1676006846504-Raymond-Men-Suits-6251676006845857-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 79,
                    "title": "FormalThreePieceSuit",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22736378/2023/4/11/7f47a56d-bc98-46f1-9b50-b523472151ca1681218353300MenBlueSolidSlimFitFormalThreePieceSuit1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 80,
                    "title": "Raymond",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20460782/2023/2/10/9498c23d-e742-41aa-96ae-110f8e403b341676019032110-Raymond-Men-Suits-7731676019031287-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 81,
                    "title": "Tuxedo",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10777826/2020/1/3/7f512e00-ab27-4f43-a6d5-155eda281a3f1578040453219-MANQ-Men-Black-Solid-Slim-Fit-Tuxedo-Suit-7081578040451665-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 82,
                    "title": "Raymond",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20460778/2023/1/11/2e5ed520-6b09-4554-82ef-2a7b84c63e9a1673432400840-Raymond-Men-Suits-9931673432400069-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 83,
                    "title": "Raymond",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20460758/2023/2/3/b1334018-081d-4f08-95e6-48f031109a4a1675405477901-Raymond-Men-Suits-8611675405477080-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 84,
                    "title": "HangupMensFormal",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19887460/2022/9/10/7dc4f97e-a47d-4f7f-bae5-33e27c3f4dbf1662812192110HangupMensFormalSuitGrey1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 85,
                    "title": "ThreePieceSuit",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17492578/2022/3/11/a212b2f7-f4ce-4f11-8e0b-404df25a7be81646999919603MenBlueThreePieceSuit1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Coat",
                    "ideal_type": "men"

                }, {
                    "id": 86,
                    "title": "KurtaWithPyjama",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15583062/2021/9/23/c7c2f089-2375-4cc1-8e01-18a354952c7a1632403714192KISAHMenCream-ColouredLayeredKurtawithPyjamas1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 87,
                    "title": "BlueKurta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16235016/2022/3/3/39597299-dfd8-4fb9-89fd-3d05648d6e661646327211048-Anouk-Men-Blue-Checked-Kurta-7711646327210474-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 88,
                    "title": "Koti & Kurta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16374216/2021/12/4/6863d9e5-622e-4934-80fa-9e139adc45581638626695520KISAHMenCream-ColouredYokeDesignLayeredKurtawithChuridar1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 89,
                    "title": "StraightKurta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11312628/2020/1/17/551da653-fc10-4645-8957-e2110ba469561579252634270-See-Designs-Men-Blue--White-Printed-Straight-Kurta-715157925-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 90,
                    "title": "LayerdKurtiwitch",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19948430/2022/9/14/d583bde0-d988-4f2e-af14-a5f500b8af411663130572494VASTRAMAYMenCream-ColouredFloralEmbroideredLayeredKurtiwithC1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 91,
                    "title": "ThreadWorkKurta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22988082/2023/5/2/19f7bda6-cb29-4ed2-a0c7-a392c83bbda91683031625309FUBARMenWhiteGeometricPrintedThreadWorkKurta1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 92,
                    "title": "AnoukKurta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18590284/2022/9/8/536302ef-e28d-45de-b466-73be9242eec41662629603355-Anouk-Men-Kurta-Sets-851662629602737-6.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 93,
                    "title": "DesignKurta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19834508/2022/9/8/2145ea88-70ea-4ce6-9195-ab98de88776a1662634859727SeeDesignsMenWhiteThreadWorkKurta1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 94,
                    "title": "AngeraKhaKurta",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19755020/2022/9/2/9b266459-f7f8-4c2f-8213-e948f65a8ab91662109623988VASTRAMAYPLUSMenCream-ColouredFloralEmbroideredAngrakhaKurta1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 96,
                    "title": "Kurta & Churidar",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15324556/2021/8/31/2aa52551-bf9d-4baf-aae7-6f0f85f4b1761630424472047VASTRAMAYPLUSMenFuchsiaRegularKurtawithChuridar1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 97,
                    "title": "Kurta & Pyjama",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19494072/2022/8/24/fbd5a6dd-2f67-48fc-9341-72f91acca09b1661330892106-Kurta-Pyjama-Set-2971661330890568-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Kurta",
                    "ideal_type": "men"

                }, {
                    "id": 98,
                    "title": "FitHoodei",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15808986/2021/10/14/46351e8e-913a-49f3-9f87-ceecb60ee7411634149960622RelaxedFitSweatshirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 99,
                    "title": "Hoodei",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21470394/2023/1/9/d8cfbe54-9ca9-4da0-8af0-52ee103323551673257601676RelaxedFitHoodie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 100,
                    "title": "Laxed",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15746190/2021/10/6/f14ff730-3c65-490d-a56a-9b16f23a285b1633525654463RelaxedFitSweatshirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 101,
                    "title": "SweatShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18975846/2022/8/23/dbb9f922-7879-47f6-8afe-2b33b78b71201661236343301-Sweaatshirt-5041661236342803-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 102,
                    "title": "Laxed",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20959642/2022/11/28/b24e59fc-1e44-4cb5-b42d-95708d61ea441669657066288RelaxedFitSweatshirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 103,
                    "title": "Printed",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19484572/2022/8/12/b2a32a92-8db8-463a-8c4d-c51146a41e0d1660304178666RegularFitPrintedhoodie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 104,
                    "title": "ThroughHoode",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21460718/2023/1/7/b7594bea-e777-47c3-88ce-3a7c5b1a63521673116158456RelaxedFitZip-throughhoodie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 105,
                    "title": "SweatShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21072486/2022/12/5/3f3c0972-e743-43f1-804d-7d8728da02e51670233267467RelaxedFitSweatshirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 106,
                    "title": "FitHoode",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20179266/2022/9/27/38fa4ef2-8f87-4efd-9a27-f2f1b40aebd11664260028849RelaxedFitHoodie1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 107,
                    "title": "Pullover",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21489748/2023/2/14/39048239-dd11-49a7-a444-fcc68a3057281676377983367-Jordan-Flight-Fleece-Mens-Washed-Pullover-Hoodie-11516763779-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 108,
                    "title": "Hoode",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13079082/2022/12/7/5b9eaa4c-80ba-4587-b4a7-999ae03f101e1670387183017LOCOMOTIVEMenYellowPrintedHoodedSweatshirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Baggy",
                    "ideal_type": "men"

                }, {
                    "id": 109,
                    "title": "AssortedJockey",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/652386/2018/2/20/11519111165850-Jockey-RELAX-Relax-Men-Assorted-Checked-Boxers-1222-1141519111165667-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 110,
                    "title": "Multicoloured",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9966839/2022/9/25/2c82426d-53bc-4e1d-9782-1f1013b910501664090347784-URBAN-SCOTTISH-Men-Pack-of-2-Multicoloured-Printed--Pure-Cot-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 111,
                    "title": "Roadstar",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20096542/2023/1/12/14b85118-c363-470b-b9fc-58d992e21a4d1673513379231-Roadster-Men-Boxers-181673513378654-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 112,
                    "title": "Levis",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12027372/2022/9/15/c681feb5-590c-46b6-b9fb-2c30aa39d3291663221487305LevisMenBlueSolidPureCottonBoxers0281.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 113,
                    "title": "Roadstar",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13719038/2021/5/10/a4566e0f-7147-4ee8-8294-03caa24fdcdf1620653752902-Roadster-Men-Boxers-3541620653751696-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 114,
                    "title": "PrintedBoxers",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/9107817/2019/5/8/c50f4eed-d503-4c4c-9efb-5b9ba4fa7b311557310175812--Jockey-Men-Pack-of-2-Printed-Boxer-Shorts-8222-0205-9181557-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 115,
                    "title": "CottonBoxerRE",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12446096/2022/6/9/6c2b693e-e1a5-4354-8094-130fa7263cd11654748029834URBANSCOTTISHMenPackof2PrintedPureCottonBoxersRE-USBX18051.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 116,
                    "title": "DCG1",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19796080/2022/9/7/e6009ce4-c824-4120-a46d-8780e019a5b61662552746354DAMENSCHMenGreyPrintedPureCottonBoxerDAM-PRIN-SBX-DCG1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 117,
                    "title": "BoxersLY",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23088964/2023/5/9/b6181efa-8865-4009-bba9-616a959d5f121683610001362Boxers1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 118,
                    "title": "CottonBoxers",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13719870/2021/6/2/df06dfd3-e626-4ad5-9e34-d1bef491cf1d1622631844378MastHarbourMenPackOf3PureCottonBoxers1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 119,
                    "title": "Boxers",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/6/9/66d4c541-7942-4426-8709-b6229240822f1560039614175-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 120,
                    "title": "Jockey",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1338158/2018/2/5/11517825218469-Jockey-Men-Boxers-7771517825218339-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Boxers",
                    "ideal_type": "men"

                }, {
                    "id": 121,
                    "title": "OpaqueCasualShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22913888/2023/4/27/e27bafeb-eca1-4d3a-b41f-44301e1891a91682565216782FUBARMenMulticolouredSlimFitTartanChecksOpaqueCheckedCasualS1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 122,
                    "title": "Jack&Jones",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22167294/2023/2/28/b2d739bc-1fad-4ed6-b106-7c0f48cb046a1677593980119JackJonesMenBlueSlimFitTartanChecksCheckedCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 123,
                    "title": "PatterndShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21646080/2023/1/20/c4541d21-dfe7-4939-b97c-b6408c1124f21674229282447Shirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 124,
                    "title": "SlimeCasualShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21817178/2023/2/2/4a12fb00-591a-4942-b36b-c4863a2968dd1675345842802Shirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 125,
                    "title": "CustomCasualShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17174456/2022/9/27/d5ae745a-f9f0-4567-a6e0-24243a3411d41664272861625RARERABBITMenWhiteSolidCustomCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 126,
                    "title": "Fit",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2127876/2017/11/23/11511431472633-Roadster-Men-Black-Regular-Fit-Solid-Casual-Shirt-8801511431472500-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 127,
                    "title": "Dly",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21396850/2023/1/3/efcaad1e-d8da-4150-99f1-5083ba646d311672742875855Shirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 128,
                    "title": "Slim",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22733280/2023/4/11/de39910b-f819-494c-aff7-3f0fe1590d8f1681230462653MenBlueSlimFitCasualShirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 129,
                    "title": "Patterned",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21893500/2023/2/9/72f9a0f6-7d2e-48ff-8f36-7cc017ffa4301675938706674RelaxedFitPatternedresortshirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 130,
                    "title": "Tarten",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22026092/2023/2/17/e634e584-ad13-44e2-a213-5ff0fa87b06d1676644054659JackJonesMenPurpleTartanChecksCheckedCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 131,
                    "title": "Shirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20110312/2022/9/21/cd72ef9e-fc8f-40a2-b133-9a48877d8d1b1663753644886Shirts5.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "CasualShirt",
                    "ideal_type": "men"

                }, {
                    "id": 132,
                    "title": "Jackets",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14320494/2021/10/22/0673f017-488f-42d6-9d97-9138a23647c71634905660374-Sztori-Men-Jackets-1161634905659389-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 133,
                    "title": "Feleece",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18983120/2022/10/27/66b28b13-0753-4b3c-8469-7519ffbd62de1666850978159-BMW-M-Motorsport-ESS-FLEECE-JKT-7961666850977453-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 134,
                    "title": "BlackLeather",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10721006/2022/11/22/582e8501-4644-47c3-9def-da632fd5688d1669106702258-HIGHLANDER-Men-Black-Solid-Leather-Jacket-7061669106702041-1.jpg",
                "prices": "10to50",
"color":"Black",
                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 135,
                    "title": "Grey Jacket",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10187279/2019/12/27/7c7a80ae-12c0-45e0-a12b-b5d7f815b77e1577445873549-WROGN-Men-Grey-Solid-Biker-Jacket-5401577445871409-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 136,
                    "title": "Knit",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18981580/2022/7/19/e49de8dd-f358-435c-bd48-963c835318541658207706529-Iconic-T7-Double-Knit-Mens-Track-Jacket-2601658207705569-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 137,
                    "title": "Garage",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19519524/2022/11/15/86e093cc-7982-4130-ae1e-e81c729924fc1668494144650-The-Indian-Garage-Co-Men-Jackets-8411668494143737-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 138,
                    "title": "Bomber",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4453297/2019/12/2/77b5d9e0-8d65-4a36-94e7-290ed271db6b1575267599079-HRX-by-Hrithik-Roshan-Men-Olive-Green-Solid-Active-Bomber-Ja-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 139,
                    "title": "Varsity",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21231724/2023/1/5/30653f09-2c15-41d0-a2b1-77a939cc36671672911170923-The-Souled-Store-Men-Colourblocked-Harry-Potter-Varsity-Jack-6.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 140,
                    "title": "SolidTailored",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6411433/2021/1/18/629a9ea8-b135-49c1-a3ac-0f095394a1911610972069534-Roadster-Men-Grey-Solid-Tailored-Jacket-4391610972068097-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 141,
                    "title": "Biker Jacket",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7272158/2018/9/20/79b13344-21b2-4c17-8486-1c908aa00d891537437272231-The-Indian-Garage-Co-Men-Black-Solid-Lightweight-Biker-Jacke-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 142,
                    "title": "Wrogen",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12421884/2020/9/15/2f6b3d0f-546e-4ccb-a2fa-c996e0f9959a1600169129548-WROGN-Men-Jackets-2681600169126887-5.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Jackets",
                    "ideal_type": "men"

                }, {
                    "id": 143,
                    "title": "LightFade",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/18973876/2022/12/9/22de9e0f-c291-4357-8eff-65fc7f92ad1f1670583236311LevisMenBlue511SlimFitLightFadeStretchableJeans1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 144,
                    "title": "Wrogen",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21182956/2023/2/3/97096415-7ea3-4da0-8428-3b319ab0f7c01675419623855-WROGN-Men-Jeans-3571675419623279-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 145,
                    "title": "Louis",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19068646/2022/7/29/d7dc955e-38ed-4bce-9ed3-8477fd98073e1659091331041-Louis-Philippe-Jeans-Men-Jeans-7601659091330409-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 146,
                    "title": "FadeStrects",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19954584/2023/4/1/dd9c0253-15aa-4bf4-8c30-09885c9649df1680334912663-Pepe-Jeans-Men-Vapour-Tapered-Fit-Low-Rise-Light-Fade-Stretc-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 147,
                    "title": "Levis",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18074902/2022/8/22/757fd420-1d58-4d3c-aeda-6ad96a9d976c1661170303730-Levis-Men-Jeans-7231661170303096-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 148,
                    "title": "Jeans",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10046857/2019/11/16/cb9e5f17-2692-438a-b528-6885137e1ca11573904153016-Roadster-Men-Jeans-5001573904149665-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 149,
                    "title": "Stretchable",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19667378/2023/3/30/6b8e6683-0a89-427a-9cbd-6d5dd388e79d1680177118004-SPYKAR-Men-Super-Skinny-Fit-Low-Rise-Stretchable-Jeans-21516-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 150,
                    "title": "BlueMichen",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22566032/2023/3/29/c3eeeb93-5d75-4544-b727-b5c5e41ede981680087692868FlyingMachineMenLightBlueMichaelSlimTaperedFitRinsedJeans1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 151,
                    "title": "Wrogen",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11359266/2020/3/12/b108efae-fdc0-4669-b974-aeb68b548d711584006063954-WROGN-Men-Jeans-4141584006060107-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 152,
                    "title": "Roadstar",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14805882/2021/10/25/03f578fc-d743-4e1d-aaf5-678b8a1373a61635159121564-Roadster-Men-Jeans-9271635159120739-2.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 153,
                    "title": "Dly",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21391318/2023/1/3/129ff369-d343-4561-9c0d-a56693ca78ba1672709405322JackJonesMenBlueSlimFitLow-RiseMildlyDistressedJeans1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Pent",
                    "ideal_type": "men"

                }, {
                    "id": 154,
                    "title": "CasualShirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16122108/2021/11/17/260b7370-18a9-4344-aa73-63fa0c263e111637151041403JackJonesMenWhiteSlimFitOpaqueCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 155,
                    "title": "White",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/4/9/cf5b0a84-0a2f-43cf-899f-6c7163af0bcf1617966955694-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 156,
                    "title": "Sleeved",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22929540/2023/4/28/88d4830d-5917-4c25-9653-29c366068a521682643006391RelaxedFitShort-sleevedOxfordshirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 157,
                    "title": "lorel",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 158,
                    "title": "Nautica",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21141386/2023/3/30/8fae2d3b-daad-48e6-8c44-f1cdabdb6f411680167010884-Nautica-Men-Shirts-7351680167010309-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 159,
                    "title": "Slim",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12182246/2022/11/24/d2141c21-15c9-4e14-a6b4-b99f73c8b5571669290027614TheIndianGarageCoMenWhiteBlackSlimFitCheckedCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 160,
                    "title": "Roadstar",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11903988/2020/6/18/be64f47b-04df-4e22-813d-5980ef04fc341592471769073-Roadster-Men-Shirts-881592471767015-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 161,
                    "title": "Printed",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2022/11/21/57eb174b-cbf1-4d1e-906c-dd87fcfb059d1669021381999-HIGHLANDER-Men-Green--White-Slim-Fit-Printed-Casual-Shirt-27-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 162,
                    "title": "FUBAR",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22988248/2023/5/3/3acfa0cc-fc75-48ff-8c3e-b0ee000d25cd1683058615508FUBARMenBlueSlimFitOpaqueCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 163,
                    "title": "Saree",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/6/4/9f53684f-a9f9-4084-9d36-c351d0d70bec1622827071120-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 164,
                    "title": "Lorel",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17638756/2022/12/7/70522219-2eea-4a3e-9eb1-80c3bb6094361670412318092SilkLandGreenRedFloralZariPureSilkIkatSaree1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 165,
                    "title": "Embroid",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19475686/2022/8/12/26907bb5-bdc1-42a9-8622-bbc213a4bd011660318319826KoskiiGreenYellowOmbreEmbroideredSaree1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 169,
                    "title": "UardSaree",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21932486/2023/2/11/efc62a95-d638-48c6-8125-1dc1390b63441676082604812SatraniWomenCoralPinkSilkBlendJacquardSaree1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 169,
                    "title": "SareeMatch",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15012182/2021/8/3/f20bda7e-0133-45b9-b37d-b8435f0af75b1628013022262MiteraPinkSilkBlendEthnicWovenDesignFestiveSareewithMatching1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 169,
                    "title": "Black",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19232524/2022/8/10/0f5be6fe-d171-4024-98a8-efd0f38b41061660110694254-VASTRANAND-Black-Embellished-Sequinned-Saree-160166011069364-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 169,
                    "title": "SequinsSaree",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19920594/2022/9/11/262ee594-b801-4825-acde-22c0f2fc251f1662891784484SequinsSareewithBlouse1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 169,
                    "title": "sualshirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22410712/2023/3/18/e4bd9e55-21f3-4a50-8723-cfbf84de103c1679106855450RARERABBITMenMaroonSlimFitOpaqueCasualShirt1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 169,
                    "title": "Shirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Shirt",
                    "ideal_type": "men"

                }, {
                    "id": 166,
                    "title": "MugaSaree",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19191622/2023/5/24/084d1bbd-fb28-4d9f-916b-b3f7a219f71a1684931109192-Mitera-Pink--White-Woven-Design-Linen-Blend-Muga-Saree-41684-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 167,
                    "title": "Kanjeevaram",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21574738/2023/1/30/999e2884-2b79-498f-8174-065db8da35271675069047177-Silk-Land-Ethnic-Motifs-Zari-Pure-Silk-Kanjeevaram-Saree-202-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 168,
                    "title": "FABPIXEL",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22119456/2023/3/7/6e199fe1-5e6c-4bb3-b379-d2055c9989091678184880575-FABPIXEL-Sequined-Pure-Georgette-Saree-1311678184880068-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "Saree",
                    "ideal_type": "women"

                }, {
                    "id": 169,
                    "title": "Jeans",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22489208/2023/5/18/772e8309-af65-4cd9-841d-697ec1a8afb81684407356960JeansBeingHumanMenJeansBeingHumanMenTshirtsBeingHumanMenJean1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 170,
                    "title": "WROGEN",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22999034/2023/5/8/340ba336-657c-472f-a9b1-03adeef83b0b1683544216065-WROGN-Men-Tshirts-2821683544215702-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 171,
                    "title": "DILLIGER",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22168296/2023/3/15/17960837-f973-42ac-8022-c087754482d71678862075013-DILLINGER-Men-Tshirts-4031678862074579-2.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 172,
                    "title": "Manics",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20728274/2022/11/12/34e6949a-831d-49da-9d4e-e1c5a1de63361668248741032ManiacMensPrintedRoundNeckHalfSleeveGreenandBlackCottonBoxyF6.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 173,
                    "title": "Rela",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/22671454/2023/5/3/b2147a1e-1401-45d0-ba98-496e2285a59f1683097962684-MANGO-MAN-Sustainable-Cotton-Relaxed-Fit-T-shirt-29916830979-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 174,
                    "title": "Dilliger",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18771140/2022/7/28/6a4c6e60-3e59-4aab-b148-de7c20f9e1341659000030413-DILLINGER-Men-Tshirts-2181659000029921-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 175,
                    "title": "Jack&Jones",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20298612/2022/10/6/bc96a6d9-c8d5-43cb-9c52-8b627a5da64f1665059275561Tshirts1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 176,
                    "title": "Neck",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11545192/2022/3/25/626b0419-cbb0-4200-8490-67e20a0021c51648208612203-Roadster-Men-Green--White-Printed-Round-Neck-Pure-Cotton-T-s-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 177,
                    "title": "Cotton",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19525576/2022/8/26/f8a1a635-9f80-4072-b413-c51e9480bb961661502396863-HereNow-Mens-Teal-Printed-Round-Neck-Pure-Cotton-T-Shirts-69-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                    "id": 178,
                    "title": "Roadster",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2475811/2018/4/20/11524206887991-Roadster-Men-Tshirts-9291524206887825-1.jpg",
                "prices": "10to50",

                    "price": "$40.00",
                    "category": "T-shirt",
                    "ideal_type": "men"

                }, {
                "id": 179,
                "title": "Yellow",
                "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22671364/2023/5/3/9a617390-4805-4b23-b676-0bd6fc120b291683110336636-MANGO-MAN-Solid-Pure-Cotton-T-shirt-481683110336391-1.jpg",
                "prices": "10to50",

                "price": "$30.00",
                "category": "T-shirt",
                "ideal_type": "men"

            },
            ],

        }
    },
    computed: {
        filteredData() {

            console.log(this.filterproduct);
            // Apply filter based on selected options
            if (this.filterproduct.length == 0 ) {
                return this.products; 
            } 
            
            else {
                return [...this.products.filter((item) =>{
                    const matchideal = this.filterproduct.includes(item.ideal_type);
                    
                    const matchCategory = this.filterproduct.includes(item.category);
                    const matchPrice = this.filterproduct.includes(item.prices);
                    const matchColor = this.filterproduct.includes(item.color);


                    return (matchideal && matchCategory) || matchPrice || matchColor;
                })
                ] 
            }
        },

    },
    methods: {
       

        Addtocart(item) {
            this.cart.push(item)
            console.log(this.cart);
        },
        navigateTo(page){
            this.page =page ;
        },
        RemoveItemFromCart(item){
            this.cart.splice(this.cart.indexOf(item),1)
        }
    },
    mounted() {

        const openButton = document.querySelector('.open-btn')
        const closeButton = document.querySelector('#close-btn')
        const modalContainer = document.querySelector('#modal-container')

        openButton.addEventListener('click', function () {

            modalContainer.style.display = 'block';

        })

        closeButton.addEventListener('click', () => {

            modalContainer.style.display = 'none';

        })

        window.addEventListener('click', (e) => {

            if (e.target === modalContainer) {

                modalContainer.style.display = 'none';

            }
            //console.log(e.target)
        })
    }

}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */

#icon{
    color: #7e7e7e;font-size: x-large;margin-left: -178px;  margin-right: 24px;cursor:pointer;
}
#open-btn {

    position: absolute;
    top: 80%;
    left: 10%;
    width: 250px;
    height: 50px;
    font-size: 1.2rem;
    padding: 10px;
    background: transparent;
    color: white;
    border: 2px solid white;
    transition: .5s;
}

.open-btn:hover {

    background-color: white;
    color: black;

}

#modal {
    background-color: #fdfcfc;
    width: 462px;
    height: 420px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 59%;
    left: 15%;
    z-index: 1;
    transform: translate(-50%, -50%);
    padding: 15px;
    animation-name: animateModal-29005135;
    animation-duration: .4s;

}

#close-btn {
    font-size: 2rem;
    margin-top: -383px;
    margin-left: -27px;
}

#close-btn:hover {
    cursor: pointer;
    color: red;
}

#modal-container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.2);

}

/* Modal Animation */

@keyframes animateModal {

    from {
        top: -300px;
        opacity: 0;
    }

    to {
        top: 50%;
        opacity: 1;
    }
}

.product-grid {
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.vertical-filters-filters {
    padding-top: 20px;
    padding-bottom: 15px;
    padding-left: 25px;
    border-bottom: 1px solid #e9e9ed;
    position: relative;
    border-right: 1px solid #edebef
}

.vertical-filters-filters .vertical-filters-label {
    display: block;
    width: 95%;
    white-space: nowrap;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 17px;
    color: #282c3f
}

.vertical-filters-filters:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0
}

.vertical-filters-header {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 0 18px;
    clear: both;
    color: #282c3f;
    display: block
}

.categories-container {
    position: relative
}

.categories-list {
    margin-bottom: 0
}

.categories-scrollableList {
    max-height: 205px;
    padding-bottom: 15px;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-box-shadow: inset 0 -9px 4px -8px rgba(0, 0, 0, .1);
    box-shadow: inset 0 -9px 4px -8px rgba(0, 0, 0, .1);
    -webkit-transition: max-height .5s;
    transition: max-height .5s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.categories-expanded {
    max-height: 307.5px
}

.categories-list label {
    cursor: pointer
}

.categories-num {
    color: #94969f;
    font-size: 11px;
    margin-left: 4px
}

.categories-categorySearch {
    margin-bottom: 10px;
    outline: none;
    font-size: 14px;
    width: 100%;
    height: 30px;
    padding-left: 10px;
    border: 1px solid #ccc
}

.categories-categorySearch:focus {
    border: 1px solid #526cd0
}

.categories-more {
    cursor: pointer;
    margin-top: 10px;
    font-size: 15px;
    color: #ff3f6c;
    margin-left: 27px
}

.FilterDirectory-panel {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 1px 8px rgba(0, 0, 0, .1);
    box-shadow: 0 1px 8px rgba(0, 0, 0, .1);
    background: #fff;
    border: 1px solid #eaeaec;
    width: 980px;
    padding: 15px 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    display: none
}

.FilterDirectory-expanded {
    display: block
}

.FilterDirectory-titleBar {
    color: #adaeaf;
    padding: 0 18px 12px;
    border-bottom: 1px solid #eaeaec
}

.FilterDirectory-list {
    padding: 20px 18px 10px 0 !important;
    margin-right: 18px !important;
    margin-left: 10px !important;
    height: 465px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden
}

.FilterDirectory-list li {
    margin: 0 10px 8px 0;
    font-size: 14px;
    padding-left: 10px
}

.FilterDirectory-list li label {
    display: block;
    width: 100%;
    min-height: 17px;
    color: #282c3f
}

.FilterDirectory-listTitle {
    margin-bottom: 10px;
    font-weight: 700;
    text-transform: uppercase;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #282c3f
}

.FilterDirectory-close {
    float: right;
    cursor: pointer;
    opacity: .7;
    margin-top: 10px
}

.FilterDirectory-count {
    color: #94969f;
    font-size: 11px;
    margin-left: 4px
}

.FilterDirectory-indices {
    padding: 0;
    margin: 0;
    display: inline-block;
    text-transform: uppercase
}

.FilterDirectory-indices li {
    width: 20px;
    height: 20px;
    display: inline-block;
    position: relative;
    text-align: center;
    cursor: pointer;
    color: #adaeaf;
    font-weight: 700;
    font-size: 13px
}

.FilterDirectory-disabled {
    opacity: .2;
    cursor: default
}

.filter-search-filterSearchBox {
    position: absolute;
    top: 12px;
    right: 14px;
    width: 30px;
    height: 30px;
    background-color: #f5f5f6;
    border-radius: 50%
}

.filter-search-filterSearchBox .filter-search-inputBox {
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 14px;
    height: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    padding: 2px 33px 2px 14px
}

.filter-search-filterSearchBox .filter-search-hidden {
    display: none
}

.filter-search-expanded {
    width: 221px;
    border-radius: 15px
}

.filter-search-iconSearch {
    right: 4px;
    top: 4px;
    -webkit-transform: scale(.7);
    transform: scale(.7)
}

.filter-search-closeSearch,
.filter-search-iconSearch {
    display: inline-block;
    position: absolute;
    cursor: pointer
}

.filter-search-closeSearch {
    right: 8px;
    top: 8px
}

.colour-listItem {
    display: block;
    position: relative;
    margin: 0 10px 0 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
}

.colour-multiColorLabel {
    background-position: -2494px -60px
}

.colour-label {
    position: relative;
    height: 100%;
    line-height: 16px;
    vertical-align: top
}

.colour-label,
.colour-more {
    cursor: pointer;
    display: block
}

.colour-more {
    color: #526cd0;
    margin-left: 27px;
    margin-top: 10px
}

.colour-more span {
    display: block;
    font-size: 15px;
    color: #ff3f6c
}

.colour-colorDisplay {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 8px;
    margin-left: 27px
}

.colour-colorDisplay[data-colorhex="off white"],
.colour-colorDisplay[data-colorhex=white] {
    border: 1px solid #d6d6d6
}

.colour-num {
    color: #94969f;
    font-size: 11px;
    margin-left: 4px
}

.price-list li {
    margin-bottom: 4px
}

.price-list label {
    cursor: pointer
}

.price-input {
    margin-right: 12px
}

.price-num {
    color: #94969f;
    font-size: 11px;
    margin-left: 4px
}

.discount-input {
    margin-right: 12px
}

.discount-list li {
    margin-bottom: 4px
}

.discount-list label {
    cursor: pointer
}

.header-container {
    position: relative;
    border-right: none !important;
    padding-top: 0
}

.header-clearAllBtn {
    position: absolute;
    top: 2px;
    right: 10px;
    font-weight: 700;
    color: #ff3f6c;
    font-size: 13px;
    cursor: pointer
}

.header-title {
    font-weight: 700
}

.title-container {
    margin: 10px 0 5px 25px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    max-width: 1000px;
    overflow: hidden
}

.title-container>span,
h1 {
    display: inline-block;
    font-size: 16px;
    margin: 0
}

h1.title-title {
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #282c3f;
    max-width: 400px;
    text-transform: capitalize
}

span.title-count {
    color: #878b94;
    white-space: pre-wrap
}

span.title-corrections {
    margin-left: 12px;
    color: #696e79;
    font-size: 15px;
    height: 18px;
    max-width: 700px
}

span.title-corrections p {
    margin: 0;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

span.title-corrections b {
    font-weight: 700
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
    width: 169px
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
    margin: 0;
    margin-top: 2px;
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
</style>
