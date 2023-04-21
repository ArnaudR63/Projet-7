export async function getLogements() {
    return await fetch('./logements.json').then((response) => {
     return response.json();
    })
    .then((response) => { 
        return response;
    })
}

export async function getFiche() {
    return await fetch('../logements.json').then((response) => {
     return response.json();
    })
    .then((response) => { 
        return response;
    })
}