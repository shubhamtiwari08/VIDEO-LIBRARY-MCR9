export const videoReducer=(state,{type,payload})=>{

    switch(type){
        case "ADD_TO_WATCH_LATER":
            if(state.watchLater.find(video=>video._id == payload._id)){
           return state 
        }else{
            console.log("add")
         return {...state,watchLater:[...state.watchLater,payload]}
        }
        case "REMOVE_FROM_WATCH_LATER":
            console.log("remove")
            const newWatchLater = state.watchLater.filter(({_id})=> _id !== payload._id)
         return {...state,watchLater:[...newWatchLater]}
        case "ADD_TO_PLAYLIST":
            
          return {...state,video:payload}
        case "REMOVE_FROM_PLAYLIST":
          return {...state,video:payload}
    }
}