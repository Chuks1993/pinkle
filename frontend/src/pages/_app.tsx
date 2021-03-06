import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
// import { compose } from 'utils/react-utils'
import theme from 'theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from 'components/contexts/auth-context'
import { NavBar } from 'components'
// import { UserProvider } from 'components/contexts/user-context'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	// const AppProviders = compose(
	// 	[QueryClientProvider, { client: queryClient }],
	// 	[ChakraProvider, { resetCSS: true, theme }],
	// 	[ColorModeProvider, { options: { useSystemColorMode: true } }],
	// 	AuthProvider,
	// )
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<ChakraProvider resetCSS={true} theme={theme}>
					<ColorModeProvider options={{ useSystemColorMode: true }}>
						<NavBar />
						<Component {...pageProps} />
					</ColorModeProvider>
				</ChakraProvider>
			</AuthProvider>
		</QueryClientProvider>
	)
}

export default MyApp
