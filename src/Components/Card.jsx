import React from 'react'

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card h-100" >
                    <img  src={props.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.disc}</p>
                        <a href="/" className="btn btn-primary">{props.button}</a>
                    </div>
                </div>

            </div>




        </>
    )
}
export default Card