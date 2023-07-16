import './AjouterStage.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Footer } from '../../components'

export default function AjouterStage(){
    const navigate = useNavigate()
    const user = useSelector(state => state.utilisateur)
    const [leStage, modifierStage] = useState({
        employeurID: "",
        nomEmployeur: "",
        courielEmployeur: "",
        telEmployeur: "",
        nomEnterprise: "",
        adresseEnterprise: "",
        typeDeStage: "Reseaux et Securite",
        numDePosDispo: 0,
        descriptionDuStage: "",
    })
    const [status, changerStatus] = useState('')

    async function postForm(e){
        e.preventDefault()
        leStage.employeurID = user.userID
        leStage.nomEmployeur = user.nomComplet
        leStage.courielEmployeur = user.adresseCouriel
        leStage.telEmployeur = user.numTel
        leStage.nomEnterprise = user.nomEnterprise
        leStage.adresseEnterprise = user.adresseEnterprise
        
        

        if(leStage.numDePosDispo < 1 || leStage.descriptionDuStage.length < 8 ){
            changerStatus( "Remplissez toute les criteres")
        }else{
            const res = await fetch(`https://finalproj-backend.onrender.com/creerstage`,{
            method: 'POST',
            body: JSON.stringify(leStage),
            headers: {
                'Content-Type': 'application/json'
            }
            
        })
        navigate('/stageajouter')

        }
        
        
        



    }

    return(
        <>
        <div className='hero'><h1>Add an Internship</h1></div>
            <div className='container'>
                <div className='card-ajout'>
                    <form>
                        <label>Type of Internship</label>
                        <select name="sortie" onChange={(e) => leStage.typeDeStage = e.target.value}>
                            <option value="Reseaux et Securite">Networks and Security</option>
                            <option value="Developement d'application">Application Development</option>
                        </select>  
                        <br></br>

                        <label>Number of positions available</label>
                        <input type='number' onChange={(e) => leStage.numDePosDispo = e.target.value}/>
                        <br></br>   
                        <label>Internship Description</label>
                        <textarea onChange={(e) => leStage.descriptionDuStage = e.target.value}></textarea>
                        <br></br>
                        <button onClick={postForm}>Create the internship</button>
                        {<p className='rouge'>{status}</p>}
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}