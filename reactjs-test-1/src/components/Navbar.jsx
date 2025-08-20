function Navbar() {
    return (
        <div className="nav container">
            <div className="brand">Anonime</div>

            <nav className="navlinks" aria-label="Primary">
                <a href="#" onClick={e => e.preventDefault()}>Home</a>
                <a href="#" onClick={e => e.preventDefault()}>List anime</a>
            </nav>
            <div className="search">
                <input
                    type="search"
                    placeholder="Search anime or movie"
                    aria-label="Search anime or movie"
                />
            </div>
        </div>
    );
}
export default Navbar