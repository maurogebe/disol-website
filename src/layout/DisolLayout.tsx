import React, { Component }       from 'react'

import { ThemeProvider }          from '@material-ui/styles';
import Header                     from "../components/Header";
import disolTheme                 from "../theme";
import Footer                     from "../components/Footer";



export class DisolLayout extends Component<any, any> {
  render() {
    return (
      <ThemeProvider theme = {  disolTheme }>
        <Header/>
        {   this.props.children   }
        <Footer/>
      </ThemeProvider>
    )
  }
}