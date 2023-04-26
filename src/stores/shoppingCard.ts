import { defineStore } from "pinia";

//data structure for product in shopping card
interface CardProduct {
     id: String;
     numberOfProduct: Number;
     name: String;
     price: Number;
     img: String;
}

export const useShoppingCard = defineStore("shoppingCard", {
     state: () => ({
          idProducts: [] as String[],
          cardProducts: [] as CardProduct[],
          totalPrice: 0,
          //true when the items is adding | false if the prosess will be end
          doing: false,
          //show alert user isn't logged 
          showAlertLogged: false
     }),
     getters: {
          //function how many items exist in shopping card
          numberProducts: (state) => state.cardProducts.length,

          //function that calculates the value of products
          calculateValueOfProducts: (state) => {
               let totalPrice = 0;
               state.cardProducts.forEach((product) => {
                    let fullPriceProduct;
                    fullPriceProduct = product.numberOfProduct * product.price;
                    totalPrice += fullPriceProduct;
               });
               state.totalPrice = totalPrice;
               return totalPrice;
          },
     },
     actions: {
          //handle  function show alert the product success added to shopping card
          showAlert() {
               this.$state.doing = true;
               setTimeout(() => {
                    this.$state.doing = false;
               }, 2000);
          },

          // add product to shopping card
          addProductToShoppingCard(product: CardProduct, userLogged: Boolean) {
               if (userLogged) {
                    let productExist;

                    // check the product exist in array
                    if (this.$state.cardProducts.length === 0) {
                         this.$state.cardProducts.push({
                              id: product.id,
                              numberOfProduct: 1,
                              name: product.name,
                              price: product.price,
                              img: product.imgMain,
                         });
                         productExist = true;
                         this.showAlert();
                    } else {
                         this.$state.cardProducts.map((item) => {
                              if (item.name === product.name) {
                                   productExist = true;
                                   item.numberOfProduct++;
                                   this.showAlert();
                              } else {
                                   productExist = false;
                              }
                         });
                    }

                    if (!productExist) {
                         this.$state.cardProducts.push({
                              id: product.id,
                              numberOfProduct: 1,
                              name: product.name,
                              price: product.price,
                              img: product.imgMain,
                         });
                         this.showAlert();
                    }
               } else {
                    this.$state.showAlertLogged = true;
               }
          },
          //remove product from shopping card
          removeProductFromShoppingCard(idProduct: String) {
               this.$state.cardProducts.forEach((product) => {
                    if (product.id === idProduct) {
                         const positionInArray = this.$state.cardProducts.indexOf(product);
                         this.$state.cardProducts.splice(positionInArray, 1);

                         const positionInSecoundArray = this.$state.idProducts.indexOf(product);
                         this.$state.idProducts.splice(positionInSecoundArray, 1);
                    }
               });
          },
          //add number of product
          addNumberProduct(idProduct: String) {
               this.$state.cardProducts.forEach((product) => {
                    if (product.id === idProduct) {
                         product.numberOfProduct += 1;
                    }
               });
          },
          //subtract one from numer of product
          removeNumberProduct(idProduct: String) {
               this.$state.cardProducts.forEach((product) => {
                    if (product.id === idProduct) {
                         if (product.numberOfProduct !== 1) {
                              product.numberOfProduct -= 1;
                         }
                    }
               });
          },
     },
});
