import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import {
  Flex,
  Box,
 Text,Button,Grid,GridItem,Image
} from "@chakra-ui/react"
import Link from 'next/link'
import { useRouter } from 'next/router'
// import Image from 'next/image'

import {FaArrowCircleRight} from "react-icons/fa"

import portfolio from "../PortfolioHome.png"


const inter = Inter({ subsets: ['latin'] })

function Home(data:any) {
  let getData = data.data;
  console.log("data",getData)

  const textStyle = {
    color:'Teal',
    fontSize:'20px',
    fontWeight:'bold',
    padding:'2px'

  }

  const router = useRouter();
  const handleResume = () => {
    router.push("https://drive.google.com/file/d/1EMEVNUthn9N6BL4VRy9gAvVWpap44duz/view?usp=share_link")
  }

  const handleFollow = () => {
    router.push("https://github.com/kiranwankhade")
  }

  return (
    <div style={{width:'95%', display:'flex',flexDirection:'row',gap:'20px',margin:'auto',marginTop:'10px',color:'teal'}}>
      
      <Flex flex={3} flexDirection={'column'} justifyContent='center' alignItems={'center'}>
        <Flex gap={'2px'} marginTop='10px' flexDirection={'column'} alignItems='center' padding={3} height={'auto'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
          <Box>
            <Image src={getData.avatar_url} alt='prop' width={250} height={250} borderRadius='20px' border={'1px dashed #083224'}/>
          </Box>
          <Text style={textStyle}>Kiran Wankhade</Text>
          <Link style={{
            color:'#083224',
            fontSize:'15px',
            fontWeight:'bold',
            padding:'2px'
          }} href={'https://github.com/kiranwankhade'}>@kiranwankhade</Link>
          <Text style={textStyle}>Aspiring Full Stack Web Developer</Text>
          <Flex gap='20px'>
          <Text>Followers : {getData.followers}</Text>
          <Text>Following : {getData.following}</Text>
          </Flex>
          <Flex marginTop={5} flexDirection={'row'} justifyContent={'space-between'} gap='70px'>
            <Button bg={'#083224'} color='white' _hover={{ bg:'white',color:'black'}} onClick={handleResume}>Resume</Button>
            <Button bg={'#083224'} _hover={{ bg:'white',color:'black'}}  color='white' onClick={handleFollow}>Follow</Button>
          </Flex>
        </Flex>


        <Box width={'100%'} padding={3} height={'auto'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" textAlign={'center'}>
          <Text style={{
            color:'#083224',
            fontSize:'18px',
            fontWeight:'bold',
            padding:'2px'
          }}>Tech Stacks</Text>

          <Flex gap={6} flexDirection='row' justifyContent={'center'} >
              <Flex gap={2} flexDirection='column' textAlign={'left'}> 
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>CSS</li>
                <li>Node JS</li>
              </Flex>
              <Flex gap={2} flexDirection='column' textAlign={'left'}>
                <li>Next JS</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Swift</li>
              </Flex>
          </Flex>
        </Box>
        <Text style={{
          marginTop:'20px',
          color:'#083224',
          fontSize:'15px',
          fontWeight:'bold',
          padding:'2px'
        }}>Educations</Text>
        </Flex>
        

      <Flex flex={7} flexDirection='column'  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" >
          <Text style={{
            fontSize:'25px',
            fontWeight:'bold',
            textDecoration:'underline',
            textAlign:'center'
          }}>Education</Text>

        <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)',gap:'35px' ,justifyContent:'center',padding:'5px'}}>
            <Box style={{
                textAlign:'center'
              }}>
              <Text style={{
                fontSize:'20px',
                fontWeight:'bold',}} >Full Stack Web Development</Text>
              <Text>MASAI School</Text>
              <Text>July 2022 - Present</Text>
            </Box>

            <Box  style={{
                textAlign:'center'
              }}>
              <Text style={{
                fontSize:'20px',
                fontWeight:'bold',}} >iOS Application Development</Text>
              <Text>BRN InfoTech</Text>
              <Text>Aug 2018 - March 2019</Text>
            </Box>

            <Box  style={{
                textAlign:'center'
              }}>
              <Text  style={{
                fontSize:'20px',
                fontWeight:'bold',}}>BE (Computer Science)</Text>
              <Text>SSGB College of Engineering and Technologies (NMU)</Text>
              <Text>July 2013 - June 2018</Text>
            </Box>
          </div>

          <Link href={'/project'}>
            <Flex flexDirection={'row'} gap='10px' justifyContent="center" alignItems={'center'}>
                <Text style={{
                fontSize:'25px',
                fontWeight:'bold',
                textDecoration:'underline',
                textAlign:'center'
              }}>Projects</Text> <span style={{marginTop:'5px'}}><FaArrowCircleRight fontSize={20}/></span>
            </Flex>
            </Link>
          <Link href={'/project'}>
             <Image src='https://i.ibb.co/hdynLP5/homepic.png' alt='prt' width={'full'} height={'auto'}/>
          </Link>
      </Flex>
      


    </div>
  )
}

export async function getStaticProps() {
  let res = await fetch("https://api.github.com/users/kiranwankhade");
  let d = await res.json();
  return {
      props: {
          data: d,
      },
  }
}


export default Home;