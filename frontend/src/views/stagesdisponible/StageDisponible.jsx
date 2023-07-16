import './StageDisponible.css'
import UnStage  from '../../components/UnStage/UnStage'
import { useEffect, useState } from 'react'
import { Footer } from '../../components'


export default function StageDisponible(){
    const [lesStages, changerLesStage] = useState([])

    useEffect(()=>{
        
        const fetching = async () =>{
            const res =await fetch(`https://finalproj-backend.onrender.com/creerstage/fetchstage`)
            const { message } = await res.json()
            changerLesStage(message)
        
        }
        fetching()
    },[])
    


    return(
        <>
            <div className='hero'><h1>Available internships</h1></div>
            <div className='container'>
                <div className='container-stages'>
                {lesStages && lesStages.map((stage, index) => {return(
                        <> 
                            <UnStage key={index} 
                            nomEnterprise={stage.nomEnterprise}
                            nomEmployeur={stage.nomEmployeur}
                            descriptionDuStage={stage.descriptionDuStage}
                            numDePosDispo={stage.numDePosDispo}
                            etudiantsApplique={stage.etudiantsApplique}
                            numTel={stage.telEmployeur}
                            adresseCouriel={stage.courielEmployeur}
                            adresseEnterprise={stage.adresseEnterprise}
                            typeDeStage={stage.typeDeStage}
                            employeurID={stage.employeurID}
                            stageID={stage._id}
                            />
                        </>
                    )})
                }
                </div>
            </div>
            <Footer />
        </>
    )
}