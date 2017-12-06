import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#1DB954',
    textColor: '#FFFFFF'
  },
  fontFamily: "Lato, sans-serif"
});


const MaterialUiTheme = ({children}) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      {children}
    </MuiThemeProvider>
  )
}
export default MaterialUiTheme