import { useState } from "react";

const ANIMALS = ["cat", "dog", "bird", "fish", "monkey", "lizard", "cockroach"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

    return (
        <div className="search-params">
            <form>
                <label htmlFor="LOCATION">Location
                <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
                </label>  
                <label htmlFor="animals">
                Animal
                <select
                id="animal"
                value={animal}
                onChange={e => setAnimal(e.target.value)}
                >
                <option />
                {ANIMALS.map(animal => (
                    <option key={animal}>{animal}</option>
                ))}
                </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;