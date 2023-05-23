

import { createWebHistory, createRouter, } from "vue-router"
import Home from '@/components/View/HomePage/HomePage'
import Selectproduct from '@/components/View/Products/Selectproduct'
import ProductItem from '@/components/View/CategoriesProduct/ProductItem'
// import cartwomenitems from "@/components/View/cartwomenitems/womenitems.vue"
import mentshirt from '@/components/View/cartmenitems/mentshirt'
import Menitems from '@/components/View/cartmenitems/Menitems'
import Womenproductitem from "@/components/View/cartwomenitems/Womenproductitem.vue"
import womenitems from '@/components/View/cartwomenitems/womenitems'
import MenitemsCart from "@/components/View/Cart/MenitemsCart.vue"
// import Checkboxfilter from "@/components/View/ProductFilter/CheckboxFilter.vue"
const routes = [
    {
        path: '/',
        name: 'Home-page',
        component: Home
    }, {
        path: '/cart-page',
        name: 'cart-page',
        component: Selectproduct
    },
    {
        path: '/ProductItem-page',
        name: 'ProductItem-page',
        component: ProductItem
    },
    // { path: '/womencart/:slug', name: 'Kurtas & Suits', component: Womenproductitem },
{

    path:'/cart/:slug',
    name:'Men',
    component:MenitemsCart
},
    {
        path: '/womencart',
        name: 'Womenproductitem-page',
        component: Womenproductitem,
        children: [
            // UserHome will be rendered inside User's <router-view>
            // when /user/:id is matched
            { path: '/womencart/:slug', name: 'Kurtas & Suits', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Kurtis, Tunics & Tops', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Sarees', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Ethnic Wear', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Skirts & Palazzos', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Dress Materials', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Lehenga Cholis', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Dupattas & Shawls', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Jacket', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Kurtas & Kurta Sets', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Sherwanis', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Boots', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Heels', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Flats', component: Womenproductitem },
            // { path: '/womencart/:slug', name: 'Casual Shoes', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Shorts', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Earrings', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Fine Jewellery', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Fashion Jewellery', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Camisoles & Thermals', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Swimwear', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Shapewear', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Briefs', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Bra', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Sandals & Floaters', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'CasualShoes', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Sports Shoes', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Rings & Wristwear', component: Womenproductitem },
            {
                path: '/womencart/:slug', name: 'Caps & Hats', component: Womenproductitem
            },
            { path: '/womencart/:slug', name: 'Accessory Gift Setss', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Ties', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Lipsticks', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Fragrances', component: Womenproductitem },
            { path: '/womencart/:slug', name: 'Makeup', component: Womenproductitem },






            { path: '/homeliving/:slug', name: 'Blankets', component: womenitems },
            { path: '/homeliving/:slug', name: 'Sofa Covers', component: womenitems },
            { path: '/homeliving/:slug', name: 'Chair Pads & Covers', component: womenitems },
            { path: '/homeliving/:slug', name: 'Diwan Sets', component: womenitems },
            { path: '/homeliving/:slug', name: 'Bed Covers', component: womenitems },
            { path: '/homeliving/:slug', name: 'Bedding Sets', component: womenitems },
            { path: '/homeliving/:slug', name: 'Bedsheets', component: womenitems },
            { path: '/homeliving/:slug', name: 'Mattress Protectors', component: womenitems },
            { path: '/homeliving/:slug', name: 'Bed Runners', component: womenitems },
            { path: '/homeliving/:slug', name: 'Premium Beauty', component: womenitems },
            { path: '/homeliving/:slug', name: 'Door Mats', component: womenitems },
            { path: '/homeliving/:slug', name: 'Floor Mats & Dhurries', component: womenitems },
            { path: '/homeliving/:slug', name: 'Carpets', component: womenitems },
            { path: '/homeliving/:slug', name: 'Bath Robes', component: womenitems },
            { path: '/homeliving/:slug', name: 'Bath Rugs', component: womenitems },
            { path: '/homeliving/:slug', name: 'Beach Towels', component: womenitems },
            { path: '/homeliving/:slug', name: 'Towels Set', component: womenitems },
            { path: '/homeliving/:slug', name: 'Hand & Face Towels', component: womenitems },
            { path: '/homeliving/:slug', name: 'Bath Towels', component: womenitems },
            {path: '/homeliving/:slug', name: 'Floor Runners', component: womenitems},
            { path: '/homeliving/:slug', name: 'String Lights', component: womenitems},
            { path: '/homeliving/:slug', name: 'Outdoor Lamps', component: womenitems},
            { path: '/homeliving/:slug', name: 'Wall Lamps', component: womenitems},
            { path: '/homeliving/:slug', name: 'Table Lamps', component: womenitems},
            { path: '/homeliving/:slug', name: 'Floor Lamps', component: womenitems},
            { path: '/homeliving/:slug', name: 'Ceiling Lamps', component: womenitems},
            { path: '/homeliving/:slug', name: 'Wall Shelves', component: womenitems},
            { path: '/homeliving/:slug', name: 'Pooja Essentials', component: womenitems},
            { path: '/homeliving/:slug', name: 'Festive Decor', component: womenitems},
            { path: '/homeliving/:slug', name: 'Wall Décor', component: womenitems},
            { path: '/homeliving/:slug', name: 'Mirrors', component: womenitems},
            { path: '/homeliving/:slug', name: 'Clocks', component: womenitems},
            { path: '/homeliving/:slug', name: 'Plants & Planters', component: womenitems},
            { path: '/homeliving/:slug', name: 'Aromas & Candles', component: womenitems},





            // ...other sub routes
        ],
    },
 
    {
        path: '/Men',
        name: 'Menitems-page',
        component: Menitems,
        children: [
            // UserHome will be rendered inside User's <router-view>
            // when /user/:id is matched
            { path: '/Men/:slug', name: 't-shirts', component: Menitems },
            { path: '/Men/:slug', name: 'Casual', component: mentshirt },
            { path: '/Men/:slug', name: 'Formal', component: mentshirt },
            { path: '/Men/:slug', name: 'Sweatshirts', component: mentshirt },
            { path: '/Men/:slug', name: 'Sweaters', component: mentshirt },
            { path: '/Men/:slug', name: 'Jackets', component: mentshirt },
            { path: '/Men/:slug', name: 'Blazers', component: mentshirt },
            { path: '/Men/:slug', name: 'Suits', component: mentshirt },
            { path: '/Men/:slug', name: 'Rain', component: mentshirt },
            { path: '/Men/:slug', name: 'Kurtas & Kurta Sets', component: mentshirt },
            { path: '/Men/:slug', name: 'Sherwanis', component: mentshirt },
            { path: '/Men/:slug', name: 'Dhotis', component: mentshirt },
            { path: '/Men/:slug', name: 'Jeans', component: mentshirt },
            { path: '/Men/:slug', name: 'Casual Trousers', component: mentshirt },
            { path: '/Men/:slug', name: 'Formal Trousers', component: mentshirt },
            { path: '/Men/:slug', name: 'Shorts', component: mentshirt },
            { path: '/Men/:slug', name: 'Nehru Jackets', component: mentshirt },
            { path: '/Men/:slug', name: 'Fitness Gadgets', component: mentshirt },
            { path: '/Men/:slug', name: 'Smart Wearables', component: mentshirt },
            { path: '/Men/:slug', name: 'Headphones', component: mentshirt },
            { path: '/Men/:slug', name: 'Speakers', component: mentshirt },
            { path: '/Men/:slug', name: 'Socks', component: mentshirt },
            { path: '/Men/:slug', name: 'Flip Flops', component: mentshirt },
            { path: '/Men/:slug', name: 'Formal Shoes', component: mentshirt },
            { path: '/Men/:slug', name: 'Sandals & Floaters', component: mentshirt },
            { path: '/Men/:slug', name: 'Casual Shoes', component: mentshirt },
            { path: '/Men/:slug', name: 'Sports Shoes', component: mentshirt },
            { path: '/Men/:slug', name: 'Ties', component: mentshirt },
            { path: '/Men/:slug', name: 'Rings & Wristwea', component: mentshirt },
            { path: '/Men/:slug', name: 'Caps & Hats', component: mentshirt },
            { path: '/Men/:slug', name: 'Accessory Gift Sets', component: mentshirt },
            { path: '/Men/:slug', name: 'Deodorants', component: mentshirt },
            { path: '/Men/:slug', name: 'Trimmers', component: mentshirt },
            { path: '/Men/:slug', name: 'Perfumes', component: mentshirt },
            { path: '/Men/:slug', name: 'Belts', component: mentshirt },
            { path: '/Men/:slug', name: 'Wallets', component: mentshirt },





            // ...other sub routes
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;