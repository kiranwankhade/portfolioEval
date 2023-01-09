import React from 'react'
import {
  Flex,
  Box,
 Text,Button,Grid,GridItem,Image
} from "@chakra-ui/react"


import {FaFolder,FaStar,FaNetworkWired} from "react-icons/fa"



const Project = (data:any) => {
  // console.log(data.data.items)
  let project = data.data.items;
  console.log('project:', project)
  return (
    <div style={{color:'teal'}}>

       <Text style={{
            fontSize:'30px',
            fontWeight:'bold',
            textDecoration:'underline',
            textAlign:'center'
          }}>Projects</Text>
  
      <div style={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:'20px'}}>
        {
              project.map((el: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; stargazers_count: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; forks_count: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; })=>{
                <div key={el.id}>
                    <Text><span><FaFolder/></span>{el.name}</Text>
                    <Text>{el.description}</Text>
                    <Flex flexDirection={'row'} gap='20px'>
                        <Text><span><FaStar/></span>{el.stargazers_count}</Text>
                        <Text><span><FaNetworkWired/></span>{el.forks_count}</Text>
                    </Flex>
                    
                </div>
              })
        }
         
      </div>
      
    </div>
  )
}




export async function getStaticProps() {
  let res = await fetch("https://api.github.com/search/repositories?q=user:kiranwankhade+fork:true&sort=updated&per_page=10&type=Repositories");
  let d = await res.json();
  return {
      props: {
          data: d,
      },
  }
}
export default Project;