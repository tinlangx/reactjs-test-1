function ShowCard({ show, onSelect }) {
    return (
        <button className="card cardBtn" onClick={() => onSelect?.(show)}>
            <div className="posterWrap">
                <img className="poster" src={show.image} alt={`${show.movieName} poster`} />
                <div className="episodeTag">Episode {show.episode}</div>
            </div>
            <p className="title">{show.movieName}</p>
        </button>
    );
}
export default ShowCard