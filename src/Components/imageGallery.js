const Gallery = (props) => {
    // DESTRUCTURING FOR PROPS TO RELAVENT NAME
    const { images } = props

    // CONDITIONAL RENDERING
    /* const haveimages = images.farm
    const totalimages = haveimages ? haveimages : []
    // const i = totalimages */
    return (

        <div className="container">
            <div className="row my-5">
                {
                    images.map((image) => {

                        return (

                            <div className="col-md-4">
                                <img className="image" src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Gallery;