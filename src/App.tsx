import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './components/project';
import { ThemeProvider } from './context/theme-provider';
import { CityPage, WeatherDashboard } from './pages';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ThemeProvider defaultTheme="dark">
                        <Layout>
                            <Routes>
                                <Route path="/" element={<WeatherDashboard />} />
                                <Route path="/city/:cityName" element={<CityPage />} />
                            </Routes>
                        </Layout>
                    </ThemeProvider>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </>
    );
}

export default App;
