import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundry";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const {id} = useParams();
  const result = useQuery(["details", id], fetchPet);
  if(result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">😶</h2>
      </div>
    )
  }

  const pet = result.data.pets[0];

    return(
      <div className="details">
      <Carousel images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>
            {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
            <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p> 
          {
            showModal ? 
            (
              <Modal>
                <div>
                  <h1>Would you like to adapt {pet.name}</h1>
                  <div className="buttons">
                    <button>Yes</button>
                    <button onClick={() => setShowModal(false)}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null
          }
          </h2>   
        </div>
      </div>
    );
  };
  
  function DeatilsErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <Details {...props} />
      </ErrorBoundary>
    )
  }

  export default DeatilsErrorBoundary; 