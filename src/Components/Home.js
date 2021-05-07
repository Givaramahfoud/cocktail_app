import React, { useEffect, useState } from 'react'
import './style/Home.css'
import Cocktails from './Cocktails';

function Home() {

    const [cocktails, setCocktails] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('Martini')

    useEffect(() => {
        getCocktails()
    }, [query])


    const getCocktails = async () => {
        const response = await fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        const data = await response.json()
        setCocktails(data.drinks)
        console.log(data);
    }

    function updateSearch(e) {
        setSearch(e.target.value)
    }

    function getSearch(e) {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    {
        return (
            <div>
                <div className='sticky'>
                    <div id='logo'>cocktail App</div>
                    <form onSubmit={getSearch}>
                        <input className='search' type="text" name="name" value={search} onChange={updateSearch} />
                        <button type="submit">Search</button>
                    </form>
                </div>

                <div className='cocktails'>
                    {cocktails.map(cocktail => (
                        <Cocktails
                            title={cocktail.strDrink}
                            ingredient={cocktail.strIngredient1, cocktail.strIngredient2}
                            image={cocktail.strDrinkThumb}
                            key={cocktail.idDrink}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Home