// import { useEffect, useState } from 'react';
// import { useAccount, useContractRead, useContractWrite, useBalance, useFeeData } from 'wagmi';
// import abiFile from '../contracts/ERC721A.json';
// import ReactCardFlip from 'react-card-flip';
// import useAnimateNumber from 'use-animate-number';
// import {
//   Flex,
//   Grid,
//   Image,
//   SimpleGrid,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // import MiniStatistics from '../components/MiniStatistics'
// import FlipCard from '../components/FlipCard';



// let CONTRACT_ADDRESS = '0x1Fb2c456173B564AA2e37Cee8bCdB66CA55213cB';
// CONTRACT_ADDRESS = CONTRACT_ADDRESS.toLowerCase();
// const getOpenSeaURL = (tokenId: string | number) =>
//     `https://goerli.pixxiti.com/nfts/${CONTRACT_ADDRESS}/${tokenId}`;
// //`https://gateway.pinata.cloud/ipfs/QmYQG6c7BMdTQNk6n4kNJiYhpareb1pgCSrSGvXoe7qXmw/${tokenId}.png`;
// const Contract_View = `https://goerli.etherscan.io/address/${CONTRACT_ADDRESS}`;

// const blindURI = 'https://gateway.pinata.cloud/ipfs/Qmf8oauEnvxTG2zPdhrt2SFkfbXkBqNZKtBPedbM6SBAxm/0';
// const getImgURL = (tokenId: string | number) =>
//     //`https://goerli.pixxiti.com/nfts/${CONTRACT_ADDRESS}/${tokenId}`;
//     `https://gateway.pinata.cloud/ipfs/QmYQG6c7BMdTQNk6n4kNJiYhpareb1pgCSrSGvXoe7qXmw/${tokenId}.png`;

// function Erc721A() {
//     const contractConfig = {
//         addressOrName: CONTRACT_ADDRESS,
//         contractInterface: abiFile.abi,
//     };

//     const [imgURL, setImgURL] = useState('');

//     const { writeAsync: mint, error: mintError } = useContractWrite({
//         ...contractConfig,
//         functionName: 'gift',
//     });
//     const [mintLoading, setMintLoading] = useState(false);
//     const { address } = useAccount();
//     const isConnected = !!address;
//     const [mintedTokenId, setMintedTokenId] = useState(0);
//     //const [totalMinted, setTotalMinted] = useState(0);
//     const [totalMinted, setTotalMinted] = useAnimateNumber(0);
//     const { data: totalSupplyData } = useContractRead({
//         ...contractConfig,
//         functionName: 'totalSupply',
//         watch: true
//     });
//     useEffect(() => {
//         if (totalSupplyData) {
//             setTotalMinted(totalSupplyData.toNumber(),true);
//         }
//     }, [totalSupplyData]);
//     const onMintClick = async () => {
//         try {
//             setMintLoading(true);
//             const tx = await mint({
//                 args: [address, 1],
//             });
//             const receipt = await tx.wait();
//             console.log('TX receipt', receipt);
//             // @ts-ignore
//             const mintedTokenId = await receipt.events[0].args[2].toString();
//             setMintedTokenId(mintedTokenId);
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setMintLoading(false);
//         }
//     };
//     const contractURL = (ADDRESS: string) => `https://goerli.etherscan.io/address/${ADDRESS}#code`;
//     const [flip, setFlip] = useState(false);
    

//     return (
//        <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
//       <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
          
//       </SimpleGrid>
//       <Grid
//         templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
//         templateRows={{ md: "1fr auto", lg: "1fr" }}
//         my='26px'
//         gap='24px'>
        
//       </Grid>
//       <Grid
//         templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
//         templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
//         gap='24px'
//         mb={{ lg: "26px" }}>
        
      
//       </Grid>
//       <Grid
//         templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
//         templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
//         gap='24px'>
//          <ReactCardFlip isFlipped={mintedTokenId == 0 ? flip : !flip}
//                 flipDirection="horizontal">
//                 <div style={{
//                     // width: '300px',
//                     // height: '300px',
//                     background: '#d7fbda',
//                     // fontSize: '40px',
//                     color: 'green',

//                     borderRadius: '30px',
//                 }}>
//                     <Image src={getImgURL(mintedTokenId)}
//                         width="100%"
//                         height="100%"
//                         borderRadius='30px'
//                     />
//                 </div>
//                 <div style={{
//                      width: '300px',
//                      height: '300px',
//                     background: '#fbd7f8',
//                      fontSize: '40px',
//                     color: 'blue',
//                      margin: '20px',
//                     borderRadius: '30px',
//                 }}>
//                     <Image src={getImgURL(mintedTokenId)}
//                         width="100%"
//                         height="100%"
//                         borderRadius='30px'
//                     />
//                 </div>
//             </ReactCardFlip>
//       </Grid>
//     </Flex>
//     )
// }


// export default Erc721A
