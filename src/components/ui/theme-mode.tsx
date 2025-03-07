import { MoonIcon, SunIcon } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { IconButton } from './icon-button';

export interface ThemeModeProps {}

const setTheme = (theme: 'light' | 'dark') => {
    const oppositeTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(oppositeTheme);
    document.body.classList.add(theme);
};

export const ThemeMode: FC<ThemeModeProps> = () => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(
        document.body.classList.contains('dark') ? 'dark' : 'light'
    );

    useEffect(() => {
        setTheme(currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    };
    return (
        <IconButton colorPalette={'emerald'} onClick={toggleTheme}>
            {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </IconButton>
    );
};
