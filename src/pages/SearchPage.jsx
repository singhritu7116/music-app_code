import { useEffect, useState } from "react";
import { Search } from "../components/Search"
import { Songs } from "../components/Songs";
import { getSongs } from "../sevices/api-client";
import { Player } from "../components/Player";

export const SearchPage = () => {
    const [allSongs, setSongs] = useState([]);
    const[flag,setFlag]=useState(false);
    const[song,setPlayerSong]=useState(null);
    const loadSongs= async()=>{
        setSongs(await getSongs('Latest Songs'));
    }
     useEffect(()=>{
       loadSongs();
    },[])
    const getArtistName = async (artistName) => {
        console.log(artistName);
        const songs = await getSongs(artistName);
        setSongs(songs);
    }
    
     const togglePlayer=(flag,songarg)=>{
        console.log(flag,songarg);
        setPlayerSong(songarg);
        setFlag(flag);
     }
     const jsx=<> <Search fn={getArtistName} />
     <Songs fn={togglePlayer} allSongs={allSongs} /></>
    return (
        <div className="container">
            <h1 className="alert alert-info">Music Store</h1>
             {flag?<Player song={song}/>:jsx} 
            
        </div>
    )
}
