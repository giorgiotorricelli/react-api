{/* <div>{lista[0].name}</div> */ }

function CardWrapper({ lista }) {


    return <>
        <div className="container">
            <div className="row cards-wrapper-bs-row">
                {lista.map(current => {
                    const {
                        id,
                        image,
                        name,
                        nationality,
                        known_for,
                        awards,
                        biography,
                        birth_year
                    } = current

                    let stringKnownFor = '';
                    return <div className="my-card col-4" key={id}>
                        <div className="text-center">
                            <h4>{name}</h4>
                            </div>
                        
                        <div className="img-wrapper text-center">
                            <img src={image} alt={`${name}'s image`} className="card-img"/>
                        </div>
                        <p className="d-inline">{birth_year}</p>
                        <p className="d-inline">{`   (${nationality})`}</p>
                        <p>{biography}</p>
                        <div className="riconoscimenti">
                            <p><strong>Known For:</strong></p>
                            <p>{known_for.join(', ')}</p>
                        </div>
                        <div className="awards">
                            <p><strong>Awards:</strong></p>
                            <p>{awards.join(', ')}</p>
                        </div>

                    </div>
                })}
            </div>
        </div>


    </>;
}

export default CardWrapper