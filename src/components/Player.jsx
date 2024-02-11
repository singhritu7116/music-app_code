export const Player =(song)=>{
    return(
        <div>
        <button className="btn btn-success">Back to songs</button>
        <p>
            
            {song?.artistName || song.previewUrl} {song?.trackName || "Unknown Track"}
        </p>
        <br/><br/>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
        </audio>
    </div>
    )
}
