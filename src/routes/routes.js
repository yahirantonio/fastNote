import {wrap} from 'svelte-spa-router/wrap'

import Home from '../views/Home.svelte'

export default {
    '/': Home,

    '/history': wrap({
        asyncComponent: () => import('../views/History.svelte')
    }),

    '/note/:id?': wrap({
        asyncComponent: () => import('../views/Note.svelte')
    }),

   //  '*': NotFound,
}