import {wrap} from 'svelte-spa-router/wrap'

// Note that Author and Book are not imported here anymore, so they can be imported at runtime
import Home from '../views/Home.svelte'

export default {
    '/': Home,

    // Wrapping the Author component
    '/history': wrap({
        asyncComponent: () => import('../views/history.svelte')
    }),

    // Wrapping the Book component
    '/note/:id?': wrap({
        asyncComponent: () => import('../views/Note.svelte')
    }),

    // Catch-all route last
   //  '*': NotFound,
}