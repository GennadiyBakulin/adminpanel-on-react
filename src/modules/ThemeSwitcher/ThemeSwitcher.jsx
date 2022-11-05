import React from 'react';
import { ThemeContext, themes } from '../../contexts/ThemeContext';
import styles from './ThemeSwitcher.module.css';
import { Button, Dropdown } from '../../shared/components';

export const ThemeSwitcher = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <Dropdown
          className={styles._}
          trigger={
            <Button
              theme='blueTransparent'
              size='small'
              icon={theme === themes.light ? 'sun' : 'moon'}
              value={theme === themes.light ? 'Светлая тема' : 'Темная тема'}
            />
          }
          overlay={
            <>
              Выберите тему
              <Button
                className={styles.button}
                theme={theme === themes.light ? 'blue' : 'blueTransparent'}
                icon='sun'
                size='small'
                value='Светлая'
                onClick={() => {
                  if (theme === themes.night) setTheme(themes.light);
                }}
              />
              <Button
                className={styles.button}
                theme={theme === themes.night ? 'blue' : 'blueTransparent'}
                size='small'
                icon='moon'
                value='Тёмная'
                onClick={() => {
                  if (theme === themes.light) setTheme(themes.night);
                }}
              />
            </>
          }
        />
      )}
    </ThemeContext.Consumer>
  );
};
