//Write Function to retreive a blob of JSON
//Make an ajak request. Use the 'fetch Function




// ALL 3 DO THE SAME THING

function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(res => res.json())
        .then(json => console.log(json));
}


async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()

    console.log(json);
}

const fetchAlbums = async () => {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()

    console.log(json);
}

fetchAlbums();