<script>
	import router from "page";
	import routes from "./routes";
	let page = null;
	let params = {};
	let user = false;
	routes.forEach((route) => {
		router(
			route.path,
			(ctx, next) => {
				params = { ...ctx.params };
				next();
			},
			() => {
				if (route.auth && !user) {
					router.redirect("/");
				} else {
					page = route.component;
					
				}
			}
		);
	});
	router.start();
</script>


<!-- Components Common to the Entire Application  -->
<nav id="navbar" class="p-5 space-x-4 text-blue-500 bg-gray-700">
	<a class="hover:text-red-600" href="/">Home</a>
	<a class="hover:text-red-600" href="/blogs">Blog</a>
	<a class="hover:text-red-600" href="/about">About</a>
</nav>

<!-- SLOT -->
<main class="bg-gray-100 min-h-screen p-4">
	<svelte:component this={page} {params} />
</main>
