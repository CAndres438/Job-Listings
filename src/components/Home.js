import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../helpers/url';
import { Contenedor, Header, Cards, Img, Content, Info, Title, Time, Tech, Ultech, ListTech, T, Bu, ListTech2, Cards2, Clear, New, Feat} from '../stylesComponents/stylesC'



export const Home = () => {

    const [contenido, setContenido] = useState([]);
    const [contenido2, setContenido2] = useState([]);

    const [reserva, setReserva] = useState([]);

    useEffect(() => {
      getData ();
    },[])
    const getData = () =>{
        axios.get(url)
        .then(response=>{
            setContenido(response.data)
            setReserva(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const de = (keywords) =>{
      
      setContenido((contenido.filter(cont=> cont.keywords.includes(keywords))))
      if(contenido2.includes(keywords)){
        alert('ya agregado')
      }
      else{
      setContenido2(contenido2.concat(keywords))}
    }
    const borrado = (wo) =>{
      setContenido2(contenido2.filter(function(co){
        return co !== wo
      }))
      
      if(contenido2.length>1){
      setContenido((reserva.filter(cont=> cont.keywords.includes(contenido2[0]))))
    
      console.log(contenido2[0])}
      
      else{
        setContenido(reserva)
      }
    }
    const clear = () =>{
      setContenido2([])
      setContenido(reserva)
    }
      return (
        <Contenedor>
          <Header>
          </Header>
          <Cards2>
            {contenido2.map(wo=>(
              <div key={wo}>
                <Tech>
                  <Ultech>
                <ListTech2>
                 {wo}
                 <Bu onClick={()=>borrado(wo)}>
                 <img src="https://res.cloudinary.com/cortiz/image/upload/v1650045972/recursos_Job_listing/icon-remove_vuumpr.svg" alt="cerrar"></img>
                 </Bu>
                </ListTech2>
                </Ultech>
                </Tech>
              </div> 
            ))}
            <Tech>
              <Ultech>
            <Clear onClick={()=>clear()}>
                   Clear
           </Clear>
           </Ultech>
            </Tech>
          </Cards2> 
          {contenido.map(reg=>(
              <div key={reg.id}>
          <Cards>
            <Img ><img src={reg.logo} alt='logo' /></Img>
            
            <Content>
              <Info>
              <New>{reg.new ? "New" : "Old"}</New>
              <Feat>{reg.featured ? "Featured": "Normal"} </Feat>
                <Title>{reg.company}</Title>
                <T>{reg.position}</T>
                
                <Time>{reg.postedAt + "     •     " + reg.contract + "     •     " + reg.location}</Time>
              </Info>
              <Tech>
                <Ultech>
                <ListTech onClick={()=>de(reg.keywords[0])}>
                    {reg.keywords[0]}
                  </ListTech>
                  <ListTech onClick={()=>de(reg.keywords[1])}>
                    {reg.keywords[1]}
                  </ListTech>
                  <ListTech onClick={()=>de(reg.keywords[2])}>
                    {reg.keywords[2]}
                  </ListTech>
                  <ListTech onClick={()=>de(reg.keywords[3])}>
                    {reg.keywords[3]}
                  </ListTech>
                  <ListTech onClick={()=>de(reg.keywords[4])}>
                    {reg.keywords[4]}
                  </ListTech>
                </Ultech>
              </Tech>
            </Content>
          </Cards></div>))}
          </Contenedor>
          )
  }
