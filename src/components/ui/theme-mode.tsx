import { MoonIcon, SunIcon } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { IconButton, IconButtonProps } from './icon-button';

export interface ThemeModeProps extends IconButtonProps {}

const setTheme = (theme: 'light' | 'dark') => {
    const oppositeTheme = theme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(oppositeTheme);
    document.body.classList.add(theme);
};

export const ThemeMode: FC<ThemeModeProps> = ({ ...props }) => {
    const existingTheme = localStorage.getItem('noteable-current-theme');
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(
        existingTheme === 'light' || existingTheme === 'dark' ? existingTheme : 'dark'
    );

    useEffect(() => {
        setTheme(currentTheme);
        localStorage.setItem('noteable-current-theme', currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    };
    return (
        <IconButton
            size={{ base: 'sm', md: 'md' }}
            colorPalette={'emerald'}
            onClick={toggleTheme}
            {...props}
        >
            {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </IconButton>
    );
};
