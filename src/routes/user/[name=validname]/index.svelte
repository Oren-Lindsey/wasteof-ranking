<script>
    export let result
    export let name
    export let avg
    export let followers
    export let diff
</script>
{#if name !== 'jeffalo'}
    {#if result == 'underrated'}
    <div class="w-screen h-screen grid place-items-center text-white bg-green-600 p-4">
        <div>
            <h1 class="text-3xl">The user <a class="underline hover:text-indigo-500" href="{`https://beta.wasteof.money/@${name}`}">@{name}</a> is: {result}</h1>
            <p>{name} has {followers} followers</p>
            <p>Their followers have an average follower count of {avg}, a difference of {#if avg > followers}-{diff}{:else}{diff}{/if}</p>
        </div>
    </div>
    {:else if result == 'normal'}
    <div class="w-screen h-screen grid place-items-center text-white bg-gray-600 p-4">
        <div>
            <h1 class="text-3xl">The user <a class="underline hover:text-indigo-500" href="{`https://beta.wasteof.money/@${name}`}">@{name}</a> is: {result}</h1>
            <p>{name} has {followers} followers</p>
            <p>Their followers have an average follower count of {avg}, a difference of {#if avg > followers}-{diff}{:else}{diff}{/if}</p>
        </div>
    </div>
    {:else}
    <div class="w-screen h-screen grid place-items-center text-white bg-red-600 p-4">
        <div>
            <h1 class="text-3xl">The user <a class="underline hover:text-indigo-500" href="{`https://beta.wasteof.money/@${name}`}">@{name}</a> is: {result}</h1>
            <p>{name} has {followers} followers</p>
            <p>Their followers have an average follower count of {avg}, a difference of {#if avg > followers}-{diff}{:else}{diff}{/if}</p>
        </div>
    </div>
    {/if}
{:else}
<div class="w-screen h-screen grid place-items-center text-white bg-indigo-500 p-4">
    <div>
        <h1 class="text-3xl">The user <a class="underline hover:text-black" href="{`https://beta.wasteof.money/@${name}`}">@{name}</a> is: {result}</h1>
        <p>how could you think jeffalo is underrated, he made wasteof.money?!?</p>
    </div>
</div>
{/if}