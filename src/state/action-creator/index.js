export const depositMondy = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'deposit',
            payload: amount
        })
    }
}
export const withdrawMondy = (amount) =>{
    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload: amount
        })
    }
}