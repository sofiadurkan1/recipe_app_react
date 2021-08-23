import './App.css';
import React,{useEffect,useState} from 'react'
import Recipe from './Recipe';


function App() {
  const APP_ID = "10acd3a0"
  const APP_KEY = "5909072aaf43c1a4a50f2d44352a9ed9"


  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("chicken");
  

 

  useEffect(() =>{
    getRecipes();

  },[]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits)

  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }



  return (
    <div className="App">
        <form className="search-form">
          <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
          <button type="submit" className="search-button">Search</button>
        </form>
        {recipes.map(recipe =>(
          <Recipe 
          key ={recipe.recipe.label}
          title ={recipe.recipe.label} 
          calories = {recipe.recipe.calories} 
          image ={recipe.recipe.image}/>

        ))}
    </div>
  );
}

export default App; 