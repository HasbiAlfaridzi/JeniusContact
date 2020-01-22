export async function filteredFetch(url, options) {
    return await fetch(
        url, options
    ).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText || 'Unknown Error');
        }
        return response.json();
    }).then(json => {
        

        // if (json.code != 200) {
        //     console.log(json.message);
        //     throw new Error(json.message || 'Unknown error');
            
        // }
        return json.data;
    });
}
