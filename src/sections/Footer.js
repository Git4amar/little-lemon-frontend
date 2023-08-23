const Footer = () => {
    return (
        <footer>
            <img
                src={require("../assets/logo/logo_v1.png")}
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
            <p>3891 Ranchview Dr. Richardson, California 62639</p>
            <p>(907) 555-0101</p>
            <p>little.lemon@icloud.com</p>
            <p>TODO Social links</p>
        </footer>
    )
}

export default Footer;