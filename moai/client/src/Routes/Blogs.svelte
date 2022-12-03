<script>
    import { onMount } from "svelte";
  
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/";
    let data = [];
  
    onMount(async () => {
      const response = await fetch(apiUrl);
      data = await response.json();
    });
  </script>
  
  <h1 class="text-6xl pb-3">Blogs</h1>
  
  {#each data as item, i}
   <div><span class="text-purple-400 font-bold mr-3">{i+1}</span> <a class="text-blue-800 hover:text-red-500 cursor-pointer text-lg underline" href="/blogs/{item.id}">{item.title}</a> </div>
  {/each}