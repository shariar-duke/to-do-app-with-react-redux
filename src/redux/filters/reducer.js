/* eslint-disable no-case-declarations */
import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initialState from "./initialState";


 const reducer =(state = initialState , action) => 
{
    switch (action.type)
    {
      case STATUSCHANGED: 
        
         return {
            ...state, 
            status : action.paylod,
         }

     case COLORCHANGED : 
        
         const {color, changeType} = action.paylod;

         switch(changeType)
         {
            case "added":
                return {
                    ...state, 
                    color: [...state.colors, color]
                }


            case "remove":
                return {
                    ...state, 
                    colors : state.colors.filter((existingColor)=> existingColor !== color)
                }

            default:
                return state
               

         }

    default:
        return state     

    }
}

export default reducer
