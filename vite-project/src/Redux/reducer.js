import { YOUTUBE_DATA ,TITLE,DESCRIPTION} from "./actions";


const initState = {
    Data:[],
    Title:[],
    Description:[]
}


export const reducer = (store = initState, {type,payload}) =>{
    console.log("Store",store)

    switch(type){
        case YOUTUBE_DATA:
           return({...store,Data:payload})
           case TITLE:
               return({...store,Title:payload})
               case DESCRIPTION:
               return({...store,Description:payload})
                    default:
                        return store
    }
}