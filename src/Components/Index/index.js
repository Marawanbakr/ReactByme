
import React ,{Component} from 'react';

import Home from './../Home'
import Settings from './../Settings'
import Bullets from './../Bullets'
import About from './../About'
import Skills from '../Skills'
import Gallery from './../Gallery'
import TimLine from './../TimLine'
import Features from './../Features'
import Testimonials from './../Testimonials'
 

class Index extends Component {

  render() {
    return(
      <div>
        <Home />
        <Settings />
        <Bullets />
        <About />
        <Skills />
        <Gallery />
        <TimLine />
        <Features />
        <Testimonials />
        
      </div>
    )
  }
}
export default Index;