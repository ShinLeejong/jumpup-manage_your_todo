<script>

</script>

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
                <a href="https://github.com/ShinLeejong" target="_blank">
                    <p>Github</p>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100032943661331" target="_blank">
                    <p>Facebook</p>
                </a>
                <a href="https://www.instagram.com/___9510251/" target="_blank">
                    <p>Instagram</p>
                </a>
            </div>
        </div>
    </div>
</footer>

<style scoped>

    footer {
        position: relative;
        display: flex;
        background: lightcoral;
        justify-content: center;
        align-items: center;
        height: 4rem;
        opacity: 0.8;
        font-size: 0.6rem;
    }

    #footer--title {
        padding-bottom: 0.5rem;
    }

    #contact {
        padding: .25rem 0;
        text-align: center;
        border-top: 1px solid black;
        padding-top: .5rem;
    }

    #contact--navigator {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #contact--navigator * {
        width: 10em;
        cursor: pointer;
        text-align: center;
    }

</style>