import React ,{useState}from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/GifGrid'

export const GifExpertApp = () => {

//const categorias =['One Punch','Samurai X','Dragon Ball'];
const [categorias,setCategories] = useState(['One Punch'])

// const handleAdd=()=>{
//   // setCategorias(['HunterXHunter',...categorias]);
//    setCategorias(cats=>[...cats,'HunterXHunter']);
// }

return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory 
            setCategories={setCategories}/>
            <hr/>
            <ol>
               {
               categorias.map(categoria=>(
               <GifGrid  
                key={categoria}
                category={categoria}>
                </GifGrid>))
                 
                 
               }
            </ol>
            
        </>
    )
}
