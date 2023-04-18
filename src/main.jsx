import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

import { ThemeProvider, createTheme } from "@mui/material/styles";
import TodoApp from "./TodoApp";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <TodoApp />
  </ThemeProvider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)