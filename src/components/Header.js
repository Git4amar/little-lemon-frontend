const Header = () => {
    return (
        <header>
            <img
                // height={64}
                src={require("./assets/logo/logo_export.png")}
                alt="Little Lemon logo"
            />
            <nav>
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/menu">MENU</a></li>
                    <li><a href="/reservations">RESERVATIONS</a></li>
                    <li><a href="/orderonline">ORDER ONLINE</a></li>
                    <li><a href="/login">LOG IN</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;