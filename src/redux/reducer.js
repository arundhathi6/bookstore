import { ADD_DATA,DELETE_DATA ,TOTAL_AMOUNT} from "./actionType";

const init = {
    bag:{
        items:[],
        total_amount:0
    }
}
// console.log(init.bag.items)
export const reducer=(store=init,{type,payload})=>{
    switch(type){
        case ADD_DATA:
            return{...store, bag: {...store.bag, items:[...store.bag.items,payload]}}

            case TOTAL_AMOUNT:
                return{...store, bag: {...store.bag, total_amount: payload}}  

            case DELETE_DATA:
                console.log("before",store.bag.items)
                store.bag.items=store.bag.items.filter((e)=>{
                    if(e.id !== payload.id){
                        return e;
                    }
                })
                console.log("after",store.bag.items)
            return{...store}

            default:
                return { ...store };
    }

}