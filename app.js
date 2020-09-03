// let contactBtn = document.getElementById("contactBtn");
// contactBtn.addEventListener("click",function(){
//     alert("Thanks for contacting us!!\n We'll contact you shortly.");
//     let contactName = document.getElementById("contactName");
//     let contactEmail = document.getElementById("contactEmail");
//     let contactMsg = document.getElementById("contactMsg");
//     contactName.value = "";
//     contactEmail.value = "";
//     contactMsg.value = "";
// })

// let homeBtn = document.getElementById("homeBtn");
// homeBtn.addEventListener("click",function(){

// // })

// // ************************************************
// // Shopping Cart API
// // ************************************************

// var shoppingCart = (function() {
//     // =============================
//     // Private methods and propeties
//     // =============================
//     cart = [];

//     // Constructor
//     function Item(name, price, count) {
//       this.name = name;
//       this.price = price;
//       this.count = count;
//     }

//     // Save cart
//     function saveCart() {
//       sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
//     }

//       // Load cart
//     function loadCart() {
//       cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
//     }
//     if (sessionStorage.getItem("shoppingCart") != null) {
//       loadCart();
//     }


//     // // =============================
//     // // Public methods and propeties
//     // // =============================
//     var obj = {};

//     // Add to cart
//     obj.addItemToCart = function(name, price, count) {
//       for(var item in cart) {
//         if(cart[item].name === name) {
//           cart[item].count ++;
//           saveCart();
//           return;
//         }
//       }
//       var item = new Item(name, price, count);
//       cart.push(item);
//       saveCart();
//     }
//     // Set count from item
//     obj.setCountForItem = function(name, count) {
//       for(var i in cart) {
//         if (cart[i].name === name) {
//           cart[i].count = count;
//           break;
//         }
//       }
//     };
//     // Remove item from cart
//     obj.removeItemFromCart = function(name) {
//         for(var item in cart) {
//           if(cart[item].name === name) {
//             cart[item].count --;
//             if(cart[item].count === 0) {
//               cart.splice(item, 1);
//             }
//             break;
//           }
//       }
//       saveCart();
//     }

//     // Remove all items from cart
//     obj.removeItemFromCartAll = function(name) {
//       for(var item in cart) {
//         if(cart[item].name === name) {
//           cart.splice(item, 1);
//           break;
//         }
//       }
//       saveCart();
//     }

//     // Clear cart
//     obj.clearCart = function() {
//       cart = [];
//       saveCart();
//     }

//     // Count cart 
//     obj.totalCount = function() {
//       var totalCount = 0;
//       for(var item in cart) {
//         totalCount += cart[item].count;
//       }
//       return totalCount;
//     }

//     // Total cart
//     obj.totalCart = function() {
//       var totalCart = 0;
//       for(var item in cart) {
//         totalCart += cart[item].price * cart[item].count;
//       }
//       return Number(totalCart.toFixed(2));
//     }

//     // List cart
//     obj.listCart = function() {
//       var cartCopy = [];
//       for(i in cart) {
//         item = cart[i];
//         itemCopy = {};
//         for(p in item) {
//           itemCopy[p] = item[p];

//         }
//         itemCopy.total = Number(item.price * item.count).toFixed(2);
//         cartCopy.push(itemCopy)
//       }
//       return cartCopy;
//     }

//     // cart : Array
//     // Item : Object/Class
//     // addItemToCart : Function
//     // removeItemFromCart : Function
//     // removeItemFromCartAll : Function
//     // clearCart : Function
//     // countCart : Function
//     // totalCart : Function
//     // listCart : Function
//     // saveCart : Function
//     // loadCart : Function
//     return obj;
//   })();


//   // *****************************************
//   // Triggers / Events
//   // ***************************************** 
//   // Add item
//   $('.add-to-cart').click(function(event) {
//     event.preventDefault();
//     var name = $(this).data('name');
//     var price = Number($(this).data('price'));
//     shoppingCart.addItemToCart(name, price, 1);
//     displayCart();
//   });

//   // Clear items
//   $('.clear-cart').click(function() {
//     shoppingCart.clearCart();
//     displayCart();
//   });


//   function displayCart() {
//     var cartArray = shoppingCart.listCart();
//     var output = "";
//     for(var i in cartArray) {
//       output += "<tr>"
//         + "<td>" + cartArray[i].name + "</td>" 
//         + "<td>(" + cartArray[i].price + ")</td>"
//         + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
//         + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//         + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
//         + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//         + " = " 
//         + "<td>" + cartArray[i].total + "</td>" 
//         +  "</tr>";
//     }
//     $('.show-cart').html(output);
//     $('.total-cart').html(shoppingCart.totalCart());
//     $('.total-count').html(shoppingCart.totalCount());
//   }

//   // Delete item button

//   $('.show-cart').on("click", ".delete-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCartAll(name);
//     displayCart();
//   })


//   // -1
//   $('.show-cart').on("click", ".minus-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.removeItemFromCart(name);
//     displayCart();
//   })
//   // +1
//   $('.show-cart').on("click", ".plus-item", function(event) {
//     var name = $(this).data('name')
//     shoppingCart.addItemToCart(name);
//     displayCart();
//   })

//   // Item count input
//   $('.show-cart').on("change", ".item-count", function(event) {
//      var name = $(this).data('name');
//      var count = Number($(this).val());
//     shoppingCart.setCountForItem(name, count);
//     displayCart();
//   });

//   displayCart();

let removeCartItemButtons = document.getElementsByClassName("btn-danger");
console.log(removeCartItemButtons)
for (let i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i];
  button.addEventListener("click", removeCartItem)
}

var quantityInputs = document.getElementsByClassName("cart-quantity-input")
for (let i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i]
  input.addEventListener("change", quantityChanged)
}

var addToCartButtons = document.getElementsByClassName("shop-items-button")
for (let i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked)
}

// document.getElementsByClassName("btn-purchase")[0].addEventListener("click",purchaseClicked)

function purchaseClicked(){
  alert("Thank you for your purchase!!")
  var cartItems = document.getElementsByClassName("cart-items")[0]
  while(cartItems.hasChildNodes()){
    cartItems.removeChild(cartItems.firstChild)
    updateCartTotal()
  }
}

function removeCartItem(e) {
  let buttonClicked = e.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(e) {
  var input = e.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  updateCartTotal()
}

var a = 0;
function addToCartClicked(e) {
  var button = e.target
  var cartBtnClicked = document.getElementsByClassName("btn-outline-dark")[0];
  var shopItem = button.parentElement.parentElement
  var price = shopItem.getElementsByClassName("card-title")[0].innerText
  var imageSrc = shopItem.getElementsByClassName("card-img-top")[0].src
  console.log(price, imageSrc)
  addItemToCart(price, imageSrc)
  updateCartTotal()
  cartBtnClicked.innerHTML = a++
  console.log(cartBtnClicked)
}

function addItemToCart(price, imageSrc) {
  var cartRow = document.createElement("div")
  cartRow.classList.add("cart-row")
  var cartItems = document.getElementsByClassName("cart-items")[0]
  // console.log(cartRow)
  var cartRowContents = `
  <div class="cart-item-cart-column">
  <img src="${imageSrc}" alt="" class="cart-item-image" width="100" height="100">
    <span class="cart-price-cart-column mx-5">${price}</span>
    <span class="cart-quantity-cart-column">
    <input type="number" class="cart-quantity-input mx-2" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
    </span>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click",removeCartItem)
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change",quantityChanged)
}


function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0]
  //  console.log(cartItemContainer)
  let cartRows = cartItemContainer.getElementsByClassName("cart-row")
  // console.log(cartRows)
  var total = 0
  for (let i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0]
    let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
    // console.log(priceElement)
    // console.log(quantityElement)
    var price = priceElement.innerText.replace("$", "")
    let quantity = quantityElement.value
    total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total
}


function cartBtnClicked(){
  a++;
  var cartBtnClicked = document.getElementsByClassName("btn-outline-primary")[0];
  // var cartBtnClicked = document.getElementsByClassName("modal-body")[0];
   console.log(cartBtnClicked)
  var displayCart = `
        <section class="container content-section">
        <h2 class="section-header">CART</h2>
        <div class="cart-row"> 
            <span class="cart-item cart-header cart-column mx-5">ITEM</span>
            <span class="cart-price cart-header cart-column mx-5">PRICE</span>
            <span class="cart-quantity cart-header cart-column mx-5">QUANTITY</span>
        </div>
        <div class="cart-items">
        </div>
        <div class="cart-total">
            <strong class="cart-total-title">Total</strong>
            <span class="cart-total-price">$0</span>
        </div>
        <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
      </section>
  `
  // cartBtnClicked.innerHTML = displayCart;
}

function showMore(){
  var showMoreRow = document.getElementsByClassName("showMoreRow")[0]
  var showMoreCol = showMoreRow.getElementsByClassName("showMoreCol")[0]
  showMoreCol.innerHTML = `
  <div class="cart-items">
                        <div class="card-deck">
                            <div class="card shop-items">
                                <img class="card-img-top" src="images/fp4.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">US $20.55 / piece</h5>
                                    <del>US $25.55 / piece</del><br><br>
                                    <button class="btn btn-primary shop-items-button">Add to Cart</button>
                                </div>

                            </div>
                            <div class="card shop-items">
                                <img class="card-img-top" src="images/fp5.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">US $22.99 / piece</h5>
                                    <del>US $31.99 / piece</del><br><br>
                                    <button class="btn btn-primary shop-items-button">Add to Cart</button>
                                </div>

                            </div>
                            <div class="card shop-items">
                                <img class="card-img-top" src="images/fp6.jpg" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title">US $13.87 / piece</h5>
                                    <del>US $17.87 / piece</del><br><br>
                                    <button class="btn btn-primary shop-items-button">Add to Cart</button>
                                </div>

                            </div>
                        </div>
                    </div>`
}