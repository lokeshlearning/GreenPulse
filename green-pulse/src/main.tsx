import { createRoot } from 'react-dom/client'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo-client.tsx'
import {  RouterProvider} from 'react-router-dom'
import { router } from './app/routes/routes.tsx'
import { AuthProvider } from './features/auth/AuthContext.tsx'
createRoot(document.getElementById('root')!).render(
    <ApolloProvider client={client}>
    <AuthProvider>
    <RouterProvider router={router}/> 
     </AuthProvider>
    </ApolloProvider>
)
