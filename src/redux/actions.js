import { ADD_DATA,DELETE_DATA,TOTAL_AMOUNT } from "./actionType";

export const addData=(payload)=>{
    return{
        type:ADD_DATA,
        payload,
    };
};

export const totalAmount=(payload)=>{
    return{
        type:TOTAL_AMOUNT,
        payload,
    };
};

export const deleteData=(payload)=>{
    return{
        type:DELETE_DATA,
        payload,
    };
};