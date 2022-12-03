import Home from './Routes/Home.svelte'
import Blogs from './Routes/Blogs.svelte'
import NotFound from './Routes/404.svelte'
import SingleBlog from './Routes/SingleBlog.svelte'
import About from './Routes/About.svelte'

const route = (path, component) => {
	return {
		path: path,
		component: component
	};
};

export default [
	route('/', Home),
	route('/blogs', Blogs),
	route('/blogs/:id', SingleBlog),
	route('/about', About),
	route('*', NotFound),
]