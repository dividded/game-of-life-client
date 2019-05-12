import React from 'react';
import './App.css';
import GameOfLife from './components/game/GameOfLife';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'; 
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: purple,
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Segoe UI"
  },
});

export default () => {
  return (
      <div className="contentWrapper">
        <MuiThemeProvider theme={theme}>
          <GameOfLife/>
        </MuiThemeProvider>
      </div>
    );
}