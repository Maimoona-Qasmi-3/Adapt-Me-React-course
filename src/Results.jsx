import Pet from "./Pet";

const Results = ({pets}) => {
    return(
        <div className="search">
         {
            !pets.length?(<h1>Pets not Found</h1>) : (pets.map(pet => (
                <Pet
                animal={pet.animal}
                breed={pet.breed}
                id={pet.id}
                name={pet.name}
                images={pet.images}
                location={`${pet.city}, ${pet.state}`}
                key={pet.id}
                 />
            )))
         }
        </div>
    )
}

export default Results;