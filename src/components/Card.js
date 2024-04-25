import starImage from "../images/star.png"
function Card ({item}) {
    let badgeText;
    if (!item.openSpots) {
        badgeText = "SOLD OUT"
    } else if (item.location.toLowerCase() === "online") {
        badgeText = "online"
    }
    return (
        <div className="card">
          {badgeText && <div className="card--badge">{badgeText.toUpperCase()}</div>}
            <img src={require(`../images/${item.coverImg}`)} className="card--image" />
            <div className="card--stats">
                <img src={starImage} className="card--star"/>
                <span>{item.stats.rating} </span>
                <span className="gray">({item.stats.reviewCount}) .</span>
                <span className="gray">{item.location}</span>
            </div>
            <div>
                <p>{item.title}</p>
                <p><span className="bold">From ${item.sprice} /</span> person</p>
            </div>
        </div>
    )
}

export default Card