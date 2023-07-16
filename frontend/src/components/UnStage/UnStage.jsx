import './UnStage.css'
import ModalStage from '../ModalStage/ModalStage'
import { useState } from 'react'
 
function UnStage(props){
    const [montrerModal, changerStatutModal] = useState(false)

    function modalControl(){
        if(montrerModal === true){
            changerStatutModal(false)
        }else{
            changerStatutModal(true)
        }
    }

    return( 
            <div className='cartestage'> 
                <h2>Company: {props.nomEnterprise}</h2>
                <h4>Recruiter's name: {props.nomEmployeur}</h4>
                <p>Description: {props.descriptionDuStage}</p>
                <p>Type of internship: {props.typeDeStage}</p>
                <p>Available positions: {props.numDePosDispo}</p>
                <button onClick={modalControl}>See more</button>
                <ModalStage display={montrerModal} 
                etudiantApplique={props.etudiantsApplique}
                nomEnterprise={props.nomEnterprise} 
                nomEmployeur={props.nomEmployeur}
                adresseCouriel={props.adresseCouriel}
                nomComplet={props.nomComplet}
                numTel={props.numTel}
                adresseEnterprise={props.adresseEnterprise}
                descriptionDuStage={props.descriptionDuStage}
                numDePosDispo={props.numDePosDispo}
                typeDeStage={props.typeDeStage}
                employeurID={props.employeurID}
                stageID={props.stageID}
                onClose={modalControl}
                 />
            </div>
        
    )
}

export default UnStage