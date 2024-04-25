import Navbar from "./components/Nabar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import './style.css'
import data from "./data.js";

function App () {
    const cards = data.map((item) =>{
        return <Card
            key = {item.id}
            item = {item}    
        />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}
export default App;