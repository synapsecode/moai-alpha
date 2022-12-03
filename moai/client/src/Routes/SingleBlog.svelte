<script>
  import { onMount } from "svelte";

  export let params;

  const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  let data = [];

  onMount(async () => {
    const response = await fetch(apiUrl + params.id);
    data = await response.json();
  });
</script>

<div class="md:w-3/4 w-full">
    {#if data.title != undefined || data.body != undefined}
        <h1 class="text-blue-900 text-6xl mb-4">{data.title}</h1>
        <p class="text-gray-900 text-3xl">{data.body}</p>
    {:else}
        <h1>LOADING</h1>
    {/if}

    <button 
        class="mt-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        on:click={async ()=>{
            let x = (await (await fetch(`/api/message`)).json())
            alert(x['message']);
        }}
    >
        Button
      </button>
</div>