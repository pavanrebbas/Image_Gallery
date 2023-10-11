import axios from "axios";
import { Fragment, useState } from "react"
import Gallery from "./imageGallery";
import Shimmer from "./shimmer";


const Body = () => {


    // API KEY FORM IMAGES
    const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

    // CREATE USESTARE FOR MAPPING BY USING THIS TO GALLERY COMPONET
    const [data, setdata] = useState([])

    // CREATE USESTATE FOR SEARCH
    const [search, setsearch] = useState("")

    // CREATE ONCHAGE EVENT FOR INPUT
    const onchangeHandler = (e) => {
        setsearch(e.target.value)
    }

    // CREATE ONSUBMIT  EVENT FOR FORM SUBMIT
    const onsubmitHandler = (e) => {
        e.preventDefault(); // EDHI PAGE REFRESH KAKUNTA AND DEFAULT GA AMAYNA UNTE DHANNI PREVENT CHEYYADANIKI
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
            response => setdata(response.data.photos.photo)
        ).catch((err) => console.error(err + "  somthing went wrong "))
    }

    return (

        <Fragment>
            <div>
                <center className="container">
                    <div className="row my-3">
                        <div className="col-md-6 offset-md-3">
                            <h2>Gallery snapshots</h2> <br />
                            <form onSubmit={onsubmitHandler}>
                                <input className="form-control" type="text" placeholder="serach for like cars,bikes,fruits etc...." value={search} onChange={onchangeHandler} /> <br /><br />
                                <button className="button" type="submit">submit</button>
                            </form>


                        </div>

                        {/* CALLING THE GALLERY COMPONENT PASSING THE EXISTING DATA BY USING PROPS */}
                        {data.length >= 1 ? <Gallery images={data}></Gallery> : <Shimmer></Shimmer>}


                    </div>

                </center>
            </div>
        </Fragment>
    )

};

export default Body;