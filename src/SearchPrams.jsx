import { useState } from "react";
import useBreedList from "./useBreedList";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import fetchSearch from "./fetchSearch"

const ANIMALS = ["cat", "dog", "bird", "rabbit", "reptile"];

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
});
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

   const results = useQuery(["search", requestParams], fetchSearch);
   const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form onSubmit={e => {e.preventDefault();
            const formData = new FormData(e.target);
            const obj = {
                animal: formData.get("animal") ?? "",
                breed: formData.get("breed") ?? "",
                location: formData.get("location") ?? "",
            };
            setRequestParams(obj);
            }}>
                <label htmlFor="LOCATION"> 
                 Location
                <input 
                name="location"
                id="location" 
                placeholder="Location" />
                </label>  
                <label htmlFor="animals">
                Animal
                <select
                id="animal"
                value={animal}
                onChange={(e) => {
                setAnimal(e.target.value); 
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
                name="breed"
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