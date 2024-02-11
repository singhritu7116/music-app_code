import { useRef } from "react";
import { Songs } from "./Songs"

export const Search =({fn}) =>{
    const artist=useRef();
    return (
    <>
    <label>Artist Names</label>
    <input ref={artist} type="text" className="form-control" placeholder="search for artist"/>
    <br/>
    <button className="btn btn-success" onClick={()=>{
       fn(artist.current.value);
    }}>Search</button>
    <Songs/>
    </>
    )
}