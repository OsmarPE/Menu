import { OrderItem } from "@/types/types";
import { Product } from "@prisma/client";
import { create } from "zustand";

interface Store {
    order:OrderItem[]
    setProduct:(product:Product) => void,
    showMenu:boolean,
    setShowMenu:(value:boolean) => void,
    incrementOrder:(id:OrderItem['id']) => void,
    decrementOrder:(id:OrderItem['id']) => void,
    removeOrder:(id:OrderItem['id']) => void,
    clearOrders:() => void
}


export const useStore = create<Store>((set,get) => ({
    order:[],
    showMenu:false,
    setProduct:(product) => {

        const { categoryId,...item } = product

        const findProduct = get().order.find(orderItem => orderItem.id === item.id)

        let newProduct = {} as OrderItem
        let newOrders = []
        if (findProduct) {
            const quantity = findProduct.quantity + 1
            newProduct = {...findProduct,quantity: quantity, subtotal: quantity * findProduct.price }             
            newOrders = get().order.map(item => item.id !== newProduct.id ? item : newProduct )
        }else{
            newProduct = {...item,quantity:1, subtotal: item.price }
            newOrders = [...get().order,newProduct]
        }

        set(() => ({
            order: newOrders
        }))
    },
    setShowMenu:(value) => set((state => ({
        ...state,
        showMenu:value
    }))),
    incrementOrder:(id) => {
        const newOrders =  get().order.map(item => item.id !== id ? item : { 
            ...item,quantity: item.quantity + 1, 
            subtotal: (item.quantity + 1) * item.price } )
        set(() => ({
            order:newOrders
        }))
    },
    removeOrder:(id) => set((state) => ({
        order: state.order.filter( item => item.id !== id )
    })),
    decrementOrder:(id) => {
     
        const findProduct = get().order.find(orderItem => orderItem.id === id)

        let newProduct = {} as OrderItem
        let newOrders = [] as OrderItem[]
        
        if (findProduct) {

            if (findProduct.quantity > 1) {
                const quantity = findProduct.quantity - 1
                newProduct = {...findProduct,quantity: quantity, subtotal: quantity * findProduct.price }             
                newOrders = get().order.map(item => item.id !== newProduct.id ? item : newProduct )
            }else{
                newOrders = get().order.filter(item => item.id !== id )
            }
        }

        set(() => ({
            order: newOrders
        }))

    },
    clearOrders:() => set(() => ({order:[]}))
}))