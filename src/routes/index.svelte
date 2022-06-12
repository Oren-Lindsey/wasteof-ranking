<script>
    let name = ""
    async function redirect() {
        window.location.href = `/user/${name}`
    }
</script>
<div class="w-screen h-screen grid place-items-center bg-blue-400 text-white p-4">
    <div>
        <h1 class="text-3xl">wasteof.money ranking</h1>
        <p>Are you overrated or underrated on <a href="https://wasteof.money">wasteof.money</a>?</p>
        <form on:submit|preventDefault={redirect}>
            <label for="username">Username to check:</label>
            <input class="rounded p-1 border-black border text-black" id="username" placeholder="username" bind:value={name} />
            <button class="rounded bg-blue-600 p-1 hover:bg-blue-200 hover:text-black transition ease-in-out delay-75 text-white" type="submit">Go</button>
        </form>
    </div>
</div>