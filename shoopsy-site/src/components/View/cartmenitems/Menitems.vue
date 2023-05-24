<template>
<div class="container" style="  width: 1365px;">
    <router-link to="/" style="  float: left;margin-bottom: 29px;
  color: black;">Home</router-link>
    <div class="bg-white rounded d-flex align-items-center justify-content-between" id="header"> <button class="btn btn-hide text-uppercase" type="button" data-toggle="collapse" data-target="#filterbar" aria-expanded="false" aria-controls="filterbar" id="filter-btn"> <span class="fas fa-angle-left" id="filter-angle"></span> <span id="btn-txt">Hide filters</span> </button>
        <nav class="navbar navbar-expand-lg navbar-light pl-lg-0 pl-auto" style="box-shadow: none;">
            <div class=" navbar" id="mynav">
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
              
               
                <div> <label class="tick">Men <input type="checkbox" v-model="newproducts" value="men" checked="checked"> <span class="check"></span>
                    </label> </div>
                <div> <label class="tick">Women <input type="checkbox" v-model="newproducts" value="women"> <span class="check"></span> </label> </div>

            </div>
            <div class="box border-bottom">
                <div class="box-label text-uppercase d-flex align-items-center">Categories </div>
                <div class=" mt-2 mr-1" v-for="option in options" :key="option.id">
                    <div class="my-1"> <label class="tick"> {{ option.label }} <input type="checkbox" checked="checked" v-model="newproducts" value="T-shirt"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Shirt <input type="checkbox" v-model="newproducts" value="Shirt"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Pent <input type="checkbox" v-model="newproducts" value="Pent"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Jackets <input type="checkbox" v-model="newproducts" value="Jackets"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">CasualShirt <input type="checkbox" v-model="newproducts" value="CasualShirt"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Baggy <input type="checkbox" v-model="newproducts" value="Baggy" checked> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Kurta<input type="checkbox" v-model="newproducts" value="Kurta"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Coat <input type="checkbox" v-model="newproducts" value="Coat" checked> <span class="check"></span> </label> </div>

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
                                    <li style="border-top: 1px solid rgb(176, 154, 154);"><label class="tick" style="margin-top: 10px;">Saree <input type="checkbox" v-model="newproducts" value="Saree" checked> <span class="check"></span><span class="FilterDirectory-count"></span> </label><label class="tick">Duppata <input type="checkbox" v-model="newproducts" value="Duppata" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Formal <input type="checkbox" v-model="newproducts" value="Formal" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Ties <input type="checkbox" v-model="newproducts" value="Ties" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Shorts <input type="checkbox" v-model="newproducts" value="Shorts" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Jeans <input type="checkbox" v-model="newproducts" value="Jeans" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Dhotis <input type="checkbox" v-model="newproducts" value="Dhotis" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Sherwanis <input type="checkbox" v-model="newproducts" value="Sherwanis" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Kurtas & Kurta Sets <input type="checkbox" v-model="newproducts" value="Kurtas & Kurta Sets" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Blazers <input type="checkbox" v-model="newproducts" value="Blazers" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Sweaters <input type="checkbox" v-model="newproducts" value="Sweaters" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Perfumes <input type="checkbox" v-model="newproducts" value="Perfumes" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Belts <input type="checkbox" v-model="newproducts" value="Belts" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Kurtas & Suits <input type="checkbox" v-model="newproducts" value="Kurtas & Suits" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Rings & Wristwear <input type="checkbox" v-model="newproducts" value="Rings & Wristwear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <label class="tick">Caps & Hats <input type="checkbox" v-model="newproducts" value="Caps & Hats" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                        </label>
                                        <div class="common-checkboxIndicator"></div>
                                    </li>

                                </ul>
                            </div>
    <div style="background-color: rgba(255, 255, 255, 0.04);
  height: 417px;">
                                    <ul class="FilterDirectory-list">
                                        <li>A</li>
                                        <li style="border-top: 1px solid rgb(255, 255, 255);"><label class="tick" style="margin-top: 10px;">Fashion Jewellery <input type="checkbox" v-model="newproducts" value="Fashion Jewellery" checked> <span class="check"></span><span class="FilterDirectory-count"></span> </label><label class="tick">Boots <input type="checkbox" v-model="newproducts" value="Boots" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Heels <input type="checkbox" v-model="newproducts" value="Heels" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Flats <input type="checkbox" v-model="newproducts" value="Flats" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Lehenga Cholis  <input type="checkbox" v-model="newproducts" value="Lehenga Cholis " checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Dress Materials <input type="checkbox" v-model="newproducts" value="Dress Materials" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Skirts & Palazzos <input type="checkbox" v-model="newproducts" value="Skirts & Palazzos" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Ethnic Wear <input type="checkbox" v-model="newproducts" value="Ethnic Wear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Kurtis, Tunics & Tops  <input type="checkbox" v-model="newproducts" value="Kurtis, Tunics & Tops " checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Blazers <input type="checkbox" v-model="newproducts" value="Blazers" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Camisoles & Thermals <input type="checkbox" v-model="newproducts" value="Camisoles & Thermals" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Swimwear <input type="checkbox" v-model="newproducts" value="Swimwear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Shapewear <input type="checkbox" v-model="newproducts" value="Shapewear" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Briefs <input type="checkbox" v-model="newproducts" value="Briefs" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Bra <input type="checkbox" v-model="newproducts" value="Bra" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
                                            </label>
                                            <label class="tick">Earrings <input type="checkbox" v-model="newproducts" value="Earrings" checked> <span class="check"></span><span class="FilterDirectory-count"></span>
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
                    <div class="my-1"> <label class="tick">Under $10 <input type="checkbox" value="under10" v-model="newproducts"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">$10 - $50 <input type="checkbox" value="10to50" v-model="newproducts"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">$50 - $100 <input type="checkbox" checked value="50to100" v-model="newproducts"> <span class="check"></span> </label> </div>
                    <div class="my-1"> <label class="tick">Over $100 <input type="checkbox" value="over100" v-model="newproducts"> <span class="check"></span>
                        </label> </div>
                    <div class="my-1"> <label class="tick">Over $1000 <input type="checkbox" value="over1000" v-model="newproducts"> <span class="check"></span>
                        </label> </div>
                </div>
            </div>
            <div class="box border-bottom">
                <div class="vertical-filters-filters"><span class="vertical-filters-header">Color</span>
                    <div class="filter-search-filterSearchBox"><input type="text" class="filter-search-inputBox filter-search-hidden" placeholder="Search for Color"><span class="myntraweb-sprite filter-search-iconSearch sprites-search"></span></div>
                    <ul>
                        <li class="colour-listItem"><label class="common-customCheckbox" data-count="738"><span data-colorhex="black" class="colour-label colour-colorDisplay" style="background-color: rgb(54, 69, 79);"></span>Black
                                <input type="checkbox" v-model="newproducts" value="Black">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"> <label class="common-customCheckbox" data-count="525"><span data-colorhex="blue" class="colour-label colour-colorDisplay" style="background-color: rgb(0, 116, 217);"></span>Blue
                                <input type="checkbox" v-model="newproducts" value="Blue">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"> <label class="common-customCheckbox" data-count="476"><span data-colorhex="pink" class="colour-label colour-colorDisplay" style="background-color: rgb(241, 169, 196);"></span>Pink
                                <input type="checkbox" v-model="newproducts" value="Pink">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"> <label class="common-customCheckbox" data-count="473"><span data-colorhex="green" class="colour-label colour-colorDisplay" style="background-color: rgb(94, 177, 96);"></span>Green
                                <input type="checkbox" v-model="newproducts" value="Green">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem">

                            <label class="common-customCheckbox" data-count="373"><span data-colorhex="white" class="colour-label colour-colorDisplay" style="background-color: rgb(255, 255, 255);"></span>White
                                <input type="checkbox" v-model="newproducts" value="White">
                                <div class="common-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem">

                            <label class="common-customCheckbox" data-count="292"><span data-colorhex="navy blue" class="colour-label colour-colorDisplay" style="background-color: rgb(60, 68, 119);"></span>Navy Blue
                                <input type="checkbox" v-model="newproducts" value="Navy Blue">
                                <div class="co  mmon-checkboxIndicator"></div>
                            </label></li>
                        <li class="colour-listItem"><label class="common-customCheckbox" data-count="270"><span data-colorhex="red" class="colour-label colour-colorDisplay" style="background-color: rgb(211, 75, 86);"></span>Red
                                <span class="colour-num">
                                </span>
                                <input type="checkbox" v-model="newproducts" value="Red">
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
        <div id="products" style="z-index: 0;">
            <div class="row d-flex ">
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
                            <router-link :to="{ name: 'Men', params: { slug: 'Items' } }">
                                <a href="" class="add-to-cart">Add to Cart</a>
                            </router-link>
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
</template>

<script>

export default {
    name: "Mens-items",
    data() {
        return {
            options: [{
                    id: 1,
                    label: 'T-shirt'
                },

                // Add more options as needed
            ],
            // selectedOptions: [],
            newproducts: [],
            addcategories:[],
            products: [{
                    "id": 1,
                    "title": "T-shirt",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg",
                    "price": "$45.00",
                    "ideal_type":"men",

                    "category": "T-shirt",
                    "prices": "under10"
                },
                {
                    "id": 2,
                    "title": "Shirt",
                    "imges": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
     
                    "price": "$40.00",
                    "category": "Shirt",
                      "ideal_type": "men"

                }, {
                    "id": 3,

                    "title": "Jackets",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20618728/2022/11/4/a1272f43-b234-4773-8aad-1181f48954a51667546666113Jackets1.jpg",
     
                    "price": "$45.00",
                    "category": "Jackets",
                      "ideal_type": "men"

                },
                {
                    "id": 4,
                    "title": "Pent",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1729344/2020/3/2/84a03c78-f8e5-4c20-942c-8ea6e4a9ed641583150812330-WROGN-Men-Black-Slim-Fit-Mid-Rise-Clean-Look-Stretchable-Jea-1.jpg",
       "ideal_type": "men",
                    "price": "$45.00",
                    "category": "Pent"

                }, {
                    "id": 5,
                    "title": "Coat",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20276790/2022/10/6/42d711c0-5f38-4c6a-a123-ac6bf862dfd31665038713926MenBlackTwoPieceSuit1.jpg",
       "ideal_type": "men",
                    "price": "$45.00",
                    "category": "Coat"

                }, {
                    "id": 6,
                    "title": "Kurta",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20038544/2022/9/17/eae29efd-88d6-4ac5-982f-8db5afd7d40d1663406125913JompersMenBlackFlaredSleevesPathaniKurta1.jpg",
       "ideal_type": "men",
                    "price": "$45.00",
                    "category": "Kurta"

                }, {
                    "id": 7,
                    "title": "Baggy",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20179254/2022/9/27/6488dabd-5c2b-40d1-898e-6414f87b968e1664260019035RelaxedFitHoodie1.jpg",
       "ideal_type": "men",
                    "price": "$45.00",
                    "category": "Baggy"

                },
                {
                    "id": 8,
                    "title": "CasualShirt",
                    "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2022/6/3/ea10ab6c-883e-437a-8780-ed87484393f81654235830793-Roadster-Men-Black--Grey-Checked-Casual-Sustainable-Shirt-42-1.jpg",
                    "categories": "CasualShirt",
       "ideal_type": "men",
                    "price": "$45.00",
                    "category": "CasualShirt"

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
                      "ideal_type": "women"
                    ,
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
            },{
                "id": 15,
                "title": "HELLCAT",
                "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/8706059/2022/8/25/600ba77d-27a6-4d99-8f31-b349edb6aec81661422693616-HIGHLANDER-Men-Blue-Tapered-Fit-Mid-Rise-Clean-Look-Stretcha-1.jpg",
                "category": "Jeans",
                "ideal_type": "men",

                "price": "$1145.00",
            },{
                "id": 16,
                "title": "HELLCAT",
                "imges": "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20037372/2022/9/26/35fc44b2-0ffe-45a8-8d8b-f2197f8ed7911664183869798-DressBerry-Women-Bra-4381664183869340-1.jpg",
                "category": "Bra",
                "ideal_type": "men",

                "price": "$1145.00",
            }
            ],

        }
    },
    computed: {
        filteredData() {
 
            console.log(this.newproducts);
            // Apply filter based on selected options
            if (this.newproducts.length == 0) {
                return this.products;
            } else {
                return this.products.filter((item) => this.newproducts.includes(item.category || item.ideal_type));
            }
          
            
        },

    },
    methods: {

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
