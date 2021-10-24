import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <div id="footer--container">
                <div id="footer--title">
                    <p>
                        This application is made by Shin Leejong - KNUT, 1444018; for a graduation thesis.
                    </p>
                </div>
                <div>
                <p id="contact">Contact Me</p>
                <div id="contact--navigator">
                    <a href="https://github.com/ShinLeejong" target="_blank" rel="noreferrer">
                        <p>Github</p>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100032943661331" target="_blank" rel="noreferrer">
                        <p>Facebook</p>
                    </a>
                    <a href="https://www.instagram.com/___9510251/" target="_blank" rel="noreferrer">
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;