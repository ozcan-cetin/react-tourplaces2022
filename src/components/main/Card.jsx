

//! normalde card componenti oluşturmadan da main içerisinde halledebilirdim. Ancak props çalışmak için card componenti oluşturdum.

const Card = (data) => {
    console.log(data); //todo datadan ne geldiğiini buradan görebilirsin.
    const {title, image, desc} = data;
    return(
        <div className="cards">
            <div className="title">
            <h1>{title}</h1>
            </div>

            <img src={image} alt="" />

            <div className="card-over">
                <p>{desc}</p>
            </div>

        </div>
    )
}

export default Card;