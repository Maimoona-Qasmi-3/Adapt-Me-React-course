const fetchBreedList = async ({queryKey}) => {
    const animal = queryKey[1];

    if(!animal) return [];

    const apiRest = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);
    if(!apiRest.ok){
        throw new Error(`breeds/${animal} fetch do not works`);
    }

    return apiRest.json();
};

export default fetchBreedList;