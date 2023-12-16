import React, { useCallback, useContext, useEffect, useState } from "react";

const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext =React.createContext();

const AppProvider=({children})=>{

const[loading,setLoading]=useState(false);
const[searchTerm,setSearchTerm]=useState('a');
const[cocktails,setCocktails]=useState([]);

const fetchDrinks=useCallback(async()=>{
    setLoading(true)
    try {
        const response=await fetch(`${url}${searchTerm}`);
        const data=await response.json()
        const {drinks}=data;
       if(drinks){
        // console.log(drinks);
        const newDrinks=drinks.map((cocktail)=>{
            const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=cocktail
            return({
                id:idDrink,
                name:strDrink,
                image:strDrinkThumb,
                info:strAlcoholic,
                glass:strGlass
            })
        })
        setCocktails(newDrinks)
       }
       else{
         setCocktails([])
       }
       setLoading(false)
    } catch (error) {
        setLoading(false)
        console.log(error)
    }
},[searchTerm])

useEffect(()=>{
    fetchDrinks()
},[searchTerm,fetchDrinks])

return <AppContext.Provider 
value=
{{
    loading,
    setSearchTerm,
    cocktails,
}}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider}