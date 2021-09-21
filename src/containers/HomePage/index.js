import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import fimag1 from "../../images/logo/fimag1.png";


/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
      Home Page 
      <a className="fimag1">
          <a href="">
            <img src={fimag1} className="logoimage" alt="" />
            <a style={{ marginTop: "-10px" }}>
              </a>
          </a>
        
        </a>
      
    </Layout>
   )

 }

export default HomePage