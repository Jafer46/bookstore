import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './providers/themeProvider.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark'>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
