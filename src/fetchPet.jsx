const fetchPet = async ({queryKey}) => {
    const id = queryKey[1];

    const apiRest = await fetch(`http://pets-v2.dev-apis.com/pets?id=`${id});
}