import React from 'react'
import {StyledFullContainer} from '../../GlobalStyles'
import { StyledProducts } from './Products.styles'
import {Navbar} from '../../Components/Navbar/Navbar'

function Products() {
  return (
    <div>

        <StyledFullContainer>
            <Navbar/>
            
            <StyledProducts>

            </StyledProducts>
        </StyledFullContainer>
        
    </div>
  )
}

export default Products