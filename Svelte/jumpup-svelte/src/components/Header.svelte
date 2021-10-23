<script>
import logo from "../assets/logo.png";
import get_date from "../logics/get_date";
import date_formatter from "../logics/date_formatter";

const obj_date = get_date();
const str_formatted_date = date_formatter(obj_date)

</script>

<header>
    <a href="/">
        <img id="logo" src="{logo}" alt="logo"/>
    </a>
    <a href="/">
        <div class="text-uppercase">jump up</div>
    </a>
    <div>{str_formatted_date}</div>
</header>

<style scoped>
    header {
        position: sticky;
        display: flex;
        height: 4rem;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
        opacity: 0.8;
        background-color: bisque;
    }

    #logo {
        object-fit: cover;
        width: 3rem;
        height: 3rem;
        cursor: pointer;
    }
</style>