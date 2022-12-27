import { useEffect, useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

  async function requestPets(){
    const res = await fetch (
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();
    setPets(json.pets);
  }
    return (
        <div className="search-params">
            <form onSubmit={e => {e.preventDefault();
            requestPets();}}>
                <label htmlFor="LOCATION">Location
                <input id="location" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
                </label>  
                <label htmlFor="animals">
                Animal
                <select
                id="animal"
                value={animal}
                onChange={(e) => {
                setAnimal(e.target.value); 
                setBreed("");
                }}
                >
                <option />
                {ANIMALS.map(animal => (
                    <option key={animal}>{animal}</option>
                ))}
                </select>
                </label>
                <label htmlFor="breed">
                Breed
                <select
                id="breed"
                disabled={breeds.length === 0}
                value={breed}
                onChange={e => setBreed(e.target.value)}
                >
                <option />
                {breeds.map(breed => (
                    <option key={breed}>{breed}</option>
                ))}
                </select>
                </label>
                <button>Submit</button>
            </form>
                    <Results pets={pets}/>
        </div>
    )
} 

export default SearchParams;