<header>
    <nav>
        <ul>
            <li><a href = "/">Home</a></li>
            <li><a href = "/search">Search</a></li>
            <li><a href = "/parts">Parts</a></li>
        </ul>
    </nav>
    <main>
        <slot/>
    </main>
</header>

<script>
    
</script>

<style>
    header {
        background-color: #333;
        color: #fff;
        padding: 1rem;
    }
    nav {
        display: flex;
        justify-content: space-between;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-right: 2rem;
    }
    a {
        color: #fff;
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
        text-shadow: #333 0 0 1px;
    }
</style>