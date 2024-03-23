function Card({ title, profilePic, description }){
    return (
        <div className="card">
            <img className='card-image'src={profilePic} alt={title}></img>
            <h3 className="card-title" >{title}</h3>
            <p className="card-text">{description}</p>
        </div>
    );
};

export default Card;