import logo from"../images/airbnb-navbar-logo.png"

function Navbar () {
    return (
        <nav className="nav">
            <img src={logo} className="nav--logo"/>
        </nav>
    )
}
export default Navbar