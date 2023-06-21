import axios from "axios";
import { useState } from "react";

const ImageUpload = () => {
    const [ image , Setimage]=useState('')
    function handleImage(e) {
        console.log(e.target.file)
        Setimage (e.target.file)

    }
    // function handleApi(){
    //     const formDate = new FormData()
    //     formDate.append('image',image)
    //     axios.post('url',formDate).then((res)=>{
    //         console.log(res)
    //     })
    
    return ( 
        <div className="page">
        <input type="file" name="file" onChange={handleImage} />
        <button>submit</button>
       
        </div>
     );
}
 
export default ImageUpload;