import React, {useState, useEffect, useHistory} from 'react'
import { Box, TitleBox, Forms, Perfil, Security, CTA } from '../../styles'
import api from '../../services/api'
import UserPhoto from '../../assets/img/yan.jpg'
import User from '../../components/User'

export default function Usuario () {
    const [nome, setNome] = useState()
    const [email, setEmail] = useState()   
    const [editar, setEditar] = useState(true)

    const token = localStorage.getItem('token')

    function editarConta () {
        
    }

    useEffect(() => { 
        async function loadUserData() {
          
            const dados = await api.get('/perfil', {
                headers: {
                    Authorization: token
                }
            })
            setNome(dados.data.nome)
            setEmail(dados.data.email)
        }
        
        loadUserData()
      }, [])
    return (
        <>
           { editar ? 
           <>
            <Box>
                <TitleBox>
                    <h4>Meu perfil</h4>
                </TitleBox>
                <Perfil>
                    <img src={UserPhoto}></img>                    
                    <div>
                        <span>Nome: {nome}</span>
                        <span>Email: {email}</span>
                    </div>
                    
                </Perfil>
                <CTA>
                    <div />
                    <button onClick={() => setEditar(false)}>Editar usuário</button>
                </CTA>
                              
                
            </Box>
           </> : 
           <>
           <Box>

           <TitleBox>
                    <h4>Editar perfil</h4>
                </TitleBox>
                <form onSubmi={editarConta}>
                    <div>   
                    <input placeholder={nome} ></input>
                    <input placeholder={email}></input>
                    </div>
                    

                    <Security>                  
                    <label>Alterar a senha</label>        
                    <div>
                        <input type="password" placeholder="Sua nova senha"></input>
                        <input type="password" placeholder="Repita a senha"></input>
                    </div>
                        
                    </Security>
                    <CTA>
                    <div />
                    <button type="submit">Salvar edições</button>
                </CTA>
                    
                </form>    
           </Box>
                                            
           </>
           
           }     
        </>
        
    )
}