<template>

<!-- <div class="Box">
    <div class="Check">
        <div class="strong">
            <h5><b>Check A New Product Delivered</b></h5>
            <button class="btn" type="button">Enter PIN Code</button>

        </div>
        <div class="AvailabelOffers">
            <h5> <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/discount--v1.png" alt="discount--v1" /> <b>Available Offers</b></h5>

            <div>
            <ul>
                <li class="msg"><span>10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs 3,500.TCA</span></li>
            </ul>
               
            </div>

        </div>
        <div class="item">
        <div class=""></div>
        </div>

    </div>
</div> -->



    <div class="container">
        <div class="card-left">
          
          <div class="img-select">
            <div class="img active">
              <a href="#" data-id="1"><img src="images/1.jpg"></a>
            </div>
            <div class="img">
              <a href="#" data-id="2"><img src="images/2.jpg"></a>
            </div>
            <div class="img">
              <a href="#" data-id="3"><img src="images/3.jpg"></a>
            </div>
            <div class="img">
              <a href="#" data-id="4"><img src="images/4.jpg"></a>
            </div> 
          </div>
        </div>
        <div class="card-right">
            <h2>Canon EOS 1500D</h2>
            <div class="star">
             <div class="star-group">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
             </div>
             <span>3 Reviews</span>
            </div>
            <h4>$39.00   <span> $50.00</span></h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum suscipit, omnis quis, esse tenetur eligendi est quibusdam enim in temporibus sint architecto facere numquam voluptas. Enim porro dolorum odio labore!</p>

            <div class="form">
              <div class="form-group">
                <label>Color</label>
                <select>
                    <option>Black</option>
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
            </div>

            <button class="btn-cart">Add Cart</button>

        </div>
      </div>
</template>

<script>
// import $ from "jquery"
export default {
    name: "product-card",

    mounted(){
        const imgs = document.querySelectorAll('.img a');
        let imgId = 1;

        const imgDiv = document.querySelectorAll('.img');

        imgs.forEach((img) => {
            img.addEventListener('click', (e) => {
                e.preventDefault();
                imgId = img.dataset.id;

                imgDiv.forEach((img) => {
                    img.classList.remove('active');
                });

                img.parentElement.classList.add('active');

                moveImage();
            });
        });




        function moveImage() {
            const imgWidth = document.querySelector('.main-image img:first-child').clientWidth;
            let width = (imgId - 1) * imgWidth;
            document.querySelector('.main-image').style.transform = `translateX(${-width}px)`;

        }

        const minusBtn = document.querySelector('.minus');
        const plusBtn = document.querySelector('.plus');
        const qtyTxt = document.querySelector('#qty');

        minusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyTxt.value);
            if (qty > 0) {
                qty--;
                qtyTxt.value = qty;
            }
        });

        plusBtn.addEventListener('click', () => {
            let qty = parseInt(qtyTxt.value);
            if (qty >= 0 && qty < 5) {
                qty++;
                qtyTxt.value = qty;
            }
        });
    }
}
</script>

<style scoped>
/* .Bag {
    margin: 0;
}

.strong {
    border: 2px dotted black;
    border-width: thin;
    width: 498px;
    padding: 7px;
    text-align: left;
    align-items: center;
    margin-left: 443px;
}

.btn {
    float: right;
    margin-top: -34px;
    color: red;
    border: 1px solid red;
}

.btn:hover {
    background-color: rgb(217, 232, 232);
}

.AvailabelOffers {
    border: 2px solid black;
    border-width: thin;
    width: 498px;
    margin-top: 20px;
    padding: 7px;
    text-align: left;
    align-items: center;
    margin-left: 443px;
}
.msg{
    font-size: small;
} */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;

}

body{
  width: 100vw;
  height: 100vh;
  background-color: #efeff0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container{
  width: 1100px;
  height: 450px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  gap: 10px;
  margin-top: 51px;
  margin-bottom: 40px;
}

img{
  width: 100%;
  display: block;
}

.card-left{
  width: 600px;
  overflow: hidden;
}

.main-image{
  display: flex;
transition: all 0.5s ease;
}
.img-select{
  display: flex;
  margin-top: 2px;
}
.img{
  border:2px solid white;
}
.active{
  border-color:black;

}

.card-right{
  padding: 10px;
}

.card-right h2{
  font-weight: 400;

}

.star{
  display: flex;
  gap:20px;
  cursor: pointer;
}
.star-group ion-icon{
  color:rgba(0,0,0,0.3)
}
.star-group ion-icon:nth-child(1),
.star-group ion-icon:nth-child(2),
.star-group ion-icon:nth-child(3)
{
color:gold;
}

.card-right h4{
  margin-top: 20px;
  font-size: 18px;
  font-weight: 500;
}

.card-right h4 span{
  text-decoration: line-through;
  color:rgba(0,0,0,0.2);
  font-size:15px;
  padding-left: 15px;
}

.card-right p{
  margin: 15px 0;
  color:rgba(0,0,0,0.5);
  padding:10px 0 ;
}

.form{
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 20px;
}

.form-group label,
.form-group select
{
display: block;
}

.form-group select{
  width: 150px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.input-group{
display:flex;
width: 220px;
height: 30px;
}
.input-group input{
  width: 50px;
  border: 1px solid #ccc;
  outline: none;
  padding-left:20px ;
  font-size: 18px;
}
.input-group button{
  width: 30px;
  outline: none;
  border: none;
  background-color: #111;
  color:white;
}

.btn-cart{
  width: 150px;
  height: 40px;
  border: none;
  outline: none;
  color:white;
  background-color: #FF8401;
  font-size: 16px;
}
</style>
