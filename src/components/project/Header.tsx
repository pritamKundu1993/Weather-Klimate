import { useTheme } from '@/context/theme-provider';
import { Link } from 'react-router';
import ThemeToggle from './ThemeToggle';

const Header = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to="./">
                    <img
                        src={isDark ? '/logo.png' : '/logo2.png'}
                        alt="Klimate logo"
                        className="h-14"
                    />
                </Link>
                <div>
                    {/* search */}
                    {/* toggle */}

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
