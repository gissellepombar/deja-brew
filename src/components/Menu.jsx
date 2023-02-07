import { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import './menu.css';

export default function Menu() {
    const [coffees, setCoffees] = useState() 
    const [temperature, setTemperature] = useState('hot')
    useEffect(() => {
        fetch(`https://api.sampleapis.com/coffee/${temperature}`)
        .then(res => res.json())
        .then(setCoffees)
        .catch(alert)
    }, [temperature])
    return(
        <article>
            <div>
                <button onClick={() => {setTemperature('hot')}}>Hot Coffees</button>
                <button onClick={() => {setTemperature('iced')}}>Iced Coffees</button>
            </div>
            {!coffees 
            ? <h2> Welcome to Déja Brew</h2>
            : <section className="coffee-containter">
                {coffees.map(coffee => (
                    <MenuCard key={coffee.id} coffee={coffee}/>
                ))}    
                </section>}
        </article>
    )
}