

/* eslint-disable jsx-a11y/alt-text */
export const Song = ({ fn,song }) => {
//    const[playerFlag,setPlayerFlag]=useState(false)
   const showPlayer=()=>{
    //  setPlayerFlag(!playerFlag);
      fn(true,song);
   }
    return (
        
        <div className="row">
            <div className="col-4">
                <img src={song.artworkUrl100} class="rounded mx-auto d-block"></img><br/><br/>
                </div>
                <div className="col-4">
                    {song.artistName} {song.trackName} <br/><audio controls>
                  <source src={song.previewUrl} type="audio/mp4"></source>
                </audio>
                </div>
                {/* <div className="col-4">
                    <button onClick={showPlayer} className='btn btn-primary'>PlaySong</button>
                </div> */}
            </div>
    
)

        // eslint-disable-next-line no-lone-blocks, no-unreachable
        {/* <div className="row">
            <div className="col-4">
                <img src={song.artworkUrl100} />
            </div>
            <div className="col-4">
            {song.artistName} {song.trackViewUrl}</div>
            <div className="col-4">
                <button type="button" class="btn btn-primary" data-bs-toggle="button">Play</button>
                </div> 
            </div> */}
        }    
