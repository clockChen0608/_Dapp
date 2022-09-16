import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import ERC20 from './tokens/ERC20';
import ERC677 from './tokens/ERC677';
import ERC777 from './tokens/ERC777';
import ERC721 from './NFTs/ERC721';
import ERC721A from './NFTs/ERC721A';
import ERC721R from './NFTs/ERC721R';
import ERC721Z from './NFTs/ERC721Z';
import ERC1155 from './NFTs/ERC1155';

export function App() {
  return (
    <>
      <NavBar />
      <Container paddingY='10'>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/20' element={<ERC20 />} />
          <Route path='/677' element={<ERC677 />} />
          <Route path='/777' element={<ERC777 />} />
          <Route path='/721' element={<ERC721 />} />
          <Route path='/721A' element={<ERC721A />} />
          <Route path='/721R' element={<ERC721R />} />
          <Route path='/721Z' element={<ERC721Z />} />
          <Route path='/1155' element={<ERC1155 />} />         
        </Routes>
      </Container>
    </>
  );
}
