
var cartselect=document.querySelector ('.cart');
var cartremove=document.querySelector('#close');
var addcart=document.querySelector('#addcart');

addcart.addEventListener('click',()=>{
    cartselect.classList.add ('cartactive')
})
cartremove.addEventListener('click',()=>{
    cartselect.classList.remove('cartactive')
})
// care remove


document.addEventListener('DOMContentLoaded',loadfood)
function loadfood() {
    loadcontainer()
}
function loadcontainer() {

// cart-qty increace
var cartqty=document.querySelectorAll('.cart-quantity');
cartqty.forEach((input) => {
    input.addEventListener('change',valuechange)
});
//  Remove cart item
var remove=document.querySelectorAll('#remove')
remove.forEach((btn2) => {
    btn2.addEventListener('click',removitem)
});

var menubtn=document.querySelectorAll('#menubtn')
 
menubtn.forEach((btn) => {
    btn.addEventListener('click',menuselect)
   
   
});
updateTotal();
}



function valuechange() {
    if (isNaN(this.value) || this.value<1) {
        this.value=1;
    }
    loadcontainer()
}

function removitem() {
    if (confirm('remve')) {
        let titles=this.parentElement.querySelectorAll('menu-cart-name').innerHTML
        list=list.filter(el=>el.titles!=titles);
        this.parentElement.remove()
        loadcontainer()
    }
}

let list=[]
// functin calling
function menuselect() {
    let cookies=this.parentElement;
    let menufood=cookies.querySelector('.menu-food').innerHTML;
    let menuprice=cookies.querySelector('.menu-price').innerHTML;
    let menuimg=cookies.querySelector('.menuimg').src
    console.log(menufood,menuprice,menuimg);
    newproducts={menufood,menuprice,menuimg}
    if (list.find((el)=>el.menufood==newproducts.menufood)) {
        alert('already'
           
        )
        return
    }
    else{
        list.push(newproducts)
    }
    let newproduct=newproductelement(menufood,menuprice,menuimg)
    // new element create
    let element=document.createElement('div');
    element.innerHTML=newproduct;
    let basket=document.querySelector('.cart-container');
    basket.append(element)
    loadcontainer()
}
// callback
function newproductelement(menufood,menuprice,menuimg) {
    return `<div class="cart-box">
                    <img src="${menuimg}" class="cartimg">
                <div class="detail-box">
                  <div class="carfodtitle">${menufood}</div>
                  <div class="price-box">
                    <div class="cart-price">${menuprice}</div>
                     <div class="cart-amt">${menuprice}</div>
                 </div>
                 <input type="number" class="cart-quantity" value="1">
                </div>
                <i class="fa-solid fa-xmark" id="remove"></i>
              </div> `
}


// total
function updateTotal()
{
  const cartItems=document.querySelectorAll('.cart-box');
  const totalValue=document.querySelector('.total-price');

  let total=0;

  cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price');
    let prce=parseFloat(priceElement.innerHTML.replace("Rs."," "));
    let qty=product.querySelector('.cart-quantity').value;
    total+=(prce*qty);
    product.querySelector('.cart-amt').innerText="Rs."+prce*qty;

  });

  totalValue.innerHTML='Rs.'+total;


  // Add Product Count in Cart Icon

  const cartCount=document.querySelector('.cart-count');
  let count=itemList.length;
  cartCount.innerHTML=count;
  



}


// 

var model=document.createElement('div');
model .id="model"
document.body.append(model)

const images=document.querySelectorAll('.menuimg')
images.forEach(image => {
   image.addEventListener('click',()=>{
    model.classList.add('modelactive')
 const img=document.createElement('img');
 img.src=image.src;
 img.id="imgs"
 while(model.firstChild){
    model.removeChild(model.firstChild)
 }
 model.append(img)
   })
});

model.addEventListener('click',()=>{
    model.classList.remove('modelactive')
})