import AuthentikProvider from 'next-auth/providers/authentik'

import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    secret: 'your-secret-here',
    providers: [
        AuthentikProvider.default({
            clientId: 'your-client-id',
            clientSecret: 'your-client-secret',
            issuer: "https://example.com"
        })
    ]
})
