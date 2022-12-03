<script>
    let wallet_linked = false;
    let created_moai_code;
   

    const onLinkWithWalletPressed = async  ()  => {
        wallet_linked = true;
    }

    const create_moai = async () => {
        let x = document.getElementById('moainame').value;
        console.log(x);
        setInterval(()=>{
            created_moai_code = '0xAhf43r8ejFFjshC';
        },1000);
    }

</script>

<div class="p-4">
    <h1 class="text-6xl text-green-800">Moai Alpha (ETHIndia 2022)</h1>
    <p class="text-2xl mt-2">In Japanese, a moai refers to a group of lifelong friends. Moais are social support groups that form in order to provide varying support from social, financial, health, or spiritual interests.
       <br> Moai allows your close friends to pool money and help each other for any sudden needs.
    </p> <br>

    <div class="p-3 my-2 ">
        <input class="inline my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Personal Name)">
        <button class="inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={onLinkWithWalletPressed}>
            Link With Wallet
          </button>
    </div><br>



    <h1 class="text-4xl text-green-800">Join a Moai</h1>
    <input class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="moaicode" type="text" placeholder="Moai Code (0x958dd.....)">

    <br><br>
    <h1 class="text-4xl text-green-800">Create a Moai</h1>
    <input class="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="moainame" type="text" placeholder="Enter name">
    <br>
   
 
      <button class=" {wallet_linked ? 'bg-blue-500' : 'bg-gray-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={create_moai}>
        Create Moai
      </button>
      <br>
      {#if created_moai_code !== undefined}
      <br>
      <h1 class="text-5xl">Moai Code: {created_moai_code}</h1>
      {/if}
   
</div>

<style lang='scss'>
    p{
        color: royalblue;
    }
</style>