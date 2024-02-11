import { Song } from "./Song"

export const Songs = ({ fn, allSongs }) => {
    if (!allSongs) {
        // Handle the case where allSongs is not defined or empty
        return null; // You can return something else, like a loading indicator or an error message
    }
    console.log(allSongs);

    return (
        <>
            {allSongs.map((currentSong, index) => <Song fn={fn} key={index} song={currentSong} />)}
        </>
    );
}

    // Check if allSongs is undefined or not an array
    // if (!Array.isArray(allSongs)) {
    //     return <p></p>; // Or handle the empty case appropriately
    // }
