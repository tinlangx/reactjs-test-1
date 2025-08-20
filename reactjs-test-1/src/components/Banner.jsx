function Banner({ show }) {
    if (!show) return null;
    return (
        <div className="banner">
            {/* Dùng cùng 1 ảnh cho banner */}
            <img src={show.image} alt={`${show.movieName} banner`} />
            <div className="bannerContent">
                <h2 className="bannerTitle">{show.movieName}</h2>
                <p className="bannerDesc">{show.description}</p>
            </div>
        </div>
    );
}
export default Banner