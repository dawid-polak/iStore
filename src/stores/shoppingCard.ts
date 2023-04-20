import { defineStore } from "pinia";

interface CardProduct {
    id: String;
    numberOfProducts: Number;
}

export const useShoppingCard = defineStore("shoppingCard", {
    state: () => ({
        idProducts: [],
        cardProducts: [] as CardProduct[]
    }),
    getters: {
        
    }
})