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

     
      <div className="fimag1">
          <a href="">
            <img src={fimag1} className="logoimage" alt="" />
            <a style={{ marginTop: "-10px" }}>
              </a>
          </a>
        
        </div>
      

      Home Page  

    </Layout>
   )

 }

export default HomePage