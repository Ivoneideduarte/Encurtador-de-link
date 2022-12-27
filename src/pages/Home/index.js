import { useState } from 'react'
import { FiLink } from 'react-icons/fi'
import './home.css'
import Menu from '../../components/Menu'
import LinkItem from '../../components/LinkItem'

import api from '../../services/api'
import { saveLink } from '../../services/storeLinks'

export default function Home() { 
    const [link, setLink] = useState("");
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)

    async function handleShortLink() {
        //alert("MEU LINK " + link)
        //setShowModal(true)

        //Requisição https
        try {
            const response = await api.post('/shorten', {
                long_url: link
            })

            //console.log(response.data)
            setData(response.data) //Retorno da chamada da api
            setShowModal(true)

            saveLink("@encurtaLink", response.data)

            setLink('') //Volta para o estado inicial de vazio
        } catch {
            alert("Ops parece que algo deu")
            setLink('') //Volta para o estado inicial de vazio
        }
    }

    return(
        <div className="container-home">
            <div className='logo'>
               
                <h1>ReactJS Links</h1>
                <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color='#fff' />   
                    <input 
                        type='text' 
                        placeholder='Cole seu link aqui...' 
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>
                    Encurtar Link
                </button>
            </div>

            <Menu/>
            
            { showModal && (
                //Mostra o modal ao clicar no botão para encurtar o link
                <LinkItem closeModal = {() => 
                    setShowModal(false)} 
                //Ao clicar no X o modal desaparece da tela
                    content={data}
                />

            ) }
        </div>
    )
}