import React, { Suspense } from 'react'
import Spline from '@splinetool/react-spline'
import { Button } from '@chakra-ui/react'
import{useContractRead} from 'wagmi'
const Claim  = () =>{console.error('danger')};

let CONTRACT_ADDRESS = '0x1Fb2c456173B564AA2e37Cee8bCdB66CA55213cB';
const ERC20 = () => {
  return (
    <div>
      <div style={{width:'21rem',
                    height:'21rem'}}>
      <Spline scene="https://prod.spline.design/V8FXU4Hb8e5nGXQo/scene.splinecode" />
      </div>
      <div style={{width:'21rem',
                    height:'21rem',
                    alignItems:'center'}}>

      <Button style={{background:'linear-gradient(#e66465, #9198e5)'}} onClick={()=>Claim()}>Cliam WTC</Button>
      </div>
      
    </div>


  )
}

export default ERC20