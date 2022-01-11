export const initialState ={
    user: null,
    playlist:[],
    playing: false,
    item:null,
    token: 'BQBCbj1WPhTadW7u2kTY5tzdS-dsdLu6G8A2LF7VuY-Cz6W4gSNp3IEGhkdfkkdCMyjsOQCkb9fAEX-L9nBSI9GSb2daVxU_P96u_k_MlJgTcmrYB4c0NBZu0sYio7ENWZYbD2CI6Y7si7m3ea32b_WAguhfjL3bhOH12x_3HFRGLS33',
}

const reducer =(state, action)=>{
    console.log(action)
        switch(action.type){
            case 'SET_USER':
                return{
                    ...state,
                    user: action.user
                }
            case 'SET_TOKEN':
                return{
                    ...state,
                    token: action.token,
                }
                default: 
                return state
        }
}
export default reducer