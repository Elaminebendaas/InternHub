import { useState } from "react"
import { useNavigate } from "react-router-dom"
import validator from 'validator'
import './enregistrer.css'
import { Footer } from "../../components";

export default function Enregistrer(){
    const navigate = useNavigate();
    const [userChoix, changerUserChoix] = useState(null) // true est que c'est un etudiant false pour employeur
    const [statutCouriel, changerCouriel] = useState()
    const [statutMDP, changerMDP] = useState(null)
    const [formState, changerFormState] = useState("")
    

    const [etudiantInfo, changerEtudiantInfo] = useState({
        prenom: "",
        nom: "",
        password:"",
        numeroDA: "",
        adresseCouriel: "",
        profilDeSortie: Boolean, //TRUE reseaux securite : FALSE appli dev
    })
    const [employeurInfo, changerEmployeurInfo] = useState({
        prenom: "",
        nom: "",
        password:"",
        numTel: "",
        adresseCouriel: "",
        nomEnterprise: "", 
        adresseEnterprise: ""
    })

    function selectChangement(e){
 
        if(e.target.value === "true"){
            etudiantInfo.profilDeSortie = true
        }else if(e.target.value === "false"){
            etudiantInfo.profilDeSortie = false
        }
    }

    function courielValidation(e){
        if(userChoix){
            etudiantInfo.adresseCouriel = e.target.value

            if(validator.isEmail(etudiantInfo.adresseCouriel)){
                changerCouriel(true)
            }else{
                changerCouriel(false)
            }
        }else{
            employeurInfo.adresseCouriel = e.target.value

            if(validator.isEmail(employeurInfo.adresseCouriel)){
                changerCouriel(true)
            }else{
                changerCouriel(false)
            }
        }
    }

    function mdpValidation(e){
        if(userChoix){
            etudiantInfo.password = e.target.value

            if(etudiantInfo.password.length > 8){
                changerMDP(true)
            }else{
                changerMDP(false)
            }
        }else{
            employeurInfo.password = e.target.value

            if(employeurInfo.password.length > 8){
                changerMDP(true)
            }else{
                changerMDP(false)
            }
        }
    }

    function formValidation(){
        if(userChoix){
            if(etudiantInfo.password.length > 8 && validator.isEmail(etudiantInfo.adresseCouriel) && etudiantInfo.prenom.length > 1 && etudiantInfo.nom.length > 1 && etudiantInfo.numeroDA.length > 1){
                return true
            }else{
                return false
            }
        }else{
            if(validator.isEmail(employeurInfo.adresseCouriel) && employeurInfo.password.length > 8 && employeurInfo.prenom.length > 1 && employeurInfo.nom.length > 1 && employeurInfo.adresseEnterprise.length > 1 && employeurInfo.nomEnterprise && employeurInfo.numTel){
                return true
            }else{
                return false
            }
        }
    }

    async function formSubmit(e){
        e.preventDefault()
        const verifieForm = formValidation()
        if(verifieForm === false){
            changerFormState("Remplissez toute les critere")
            return
        }else{
            changerFormState("")
        }

        if(userChoix && statutMDP && statutCouriel){
            //this will do a post for an etudiant
            const res = await fetch(`https://finalproj-backend.onrender.com/enregistrement/etudiant`,{
                method: 'POST',
                body: JSON.stringify(etudiantInfo),
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            })
            const response = await res.json()
       
            if(res.status === 409){
                changerFormState(response.message)
            }else{
                alert('le compte a été créé')
                navigate('/login')
            }
        }else if(userChoix === false && statutMDP && statutCouriel){
            //this will do a post for an employeur
            
            const res = await fetch(`https://finalproj-backend.onrender.com/enregistrement/employeur`,{
                method: 'POST',
                body: JSON.stringify(employeurInfo),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const response = await res.json()

            if(res.status === 409){
                changerFormState(response.message)
            }else{
                alert('le compte a été créé')
                navigate('/login')
            }
            
        }
    }


    return(
        <>
            <div className="container">
                <div className="enregist-card">
                    <form>
                        <input type="radio"  name="choixInscription" value="true"  onChange={() => changerUserChoix(true)}/>
                        <label >Student</label>
                        <input type="radio" name="choixInscription"  value="false" onChange={() => changerUserChoix(false)}/>
                        <label >Employer</label>
                    </form> 

                    {userChoix === null && <p>Please choose the type of account you want to create.</p>}    

                    {userChoix && 
                    
                    <form className="form-info">
                        <label>First name</label>
                        <input type="text" name="prenom" placeholder="John" onChange={(e) => etudiantInfo.prenom = e.target.value}/>
                        <br></br>
                        <label>Last name</label>
                        <input type="text" name="nom" placeholder="Doe" onChange={(e) => etudiantInfo.nom = e.target.value}/>
                        <br></br>
                        <label>Student ID number</label>
                        <input type="number" name="numeroDA" placeholder="12412311" onChange={(e) => etudiantInfo.numeroDA = e.target.value}/>
                        <br></br>
                        <label>Email address</label>
                        <input type="email" name="couriel" placeholder="johndoe@example.com" onChange={courielValidation}/>
                        {statutCouriel ? <p className="verts">Your email address is valid</p> : <p className="rouge">Your email address is invalid</p>}
                        <label>Password</label>
                        <input type="password" name="mdp" placeholder="Password" onChange={mdpValidation}/>
                        {statutMDP ? <p className="verts">A strong password!</p> : <p className="rouge">Your password is not strong enough</p>}

                        <label>Exit Profile</label>
                        <select name="sortie" onChange={(e) => selectChangement(e)}>
                            <option value="true" >Networks and Security</option>
                            <option value="false">Application Development</option>
                        </select>        
                        <br></br>
                        <button onClick={formSubmit}>Sign Up</button>
                    </form>
                    }

                    {userChoix === false && 

                    <form className="form-info">
                        <label>First name</label>
                        <input type="text" name="prenom" placeholder="John" onChange={(e) => employeurInfo.prenom = e.target.value}/>
                        <br></br>
                        <label>Last name</label>
                        <input type="text" name="nom" placeholder="Doe" onChange={(e) => employeurInfo.nom = e.target.value}/>
                        <br></br>
                        <label>Phone number</label>
                        <input type="tel" name="tel" placeholder="8192775245" onChange={(e) => employeurInfo.numTel = e.target.value}/>
                        <br></br>
                        <label>Company name</label>
                        <input type="text" name="prenom" placeholder="Adobe" onChange={(e) => employeurInfo.nomEnterprise = e.target.value}/>
                        <br></br>
                        <label>Company address</label>
                        <input type="text" name="adresseEnterprise" placeholder="25 Silicon Valley" onChange={(e) => employeurInfo.adresseEnterprise = e.target.value}/>
                        <br></br>
                        <label>Email address</label>
                        <input type="email" name="couriel" placeholder="johndoe@example.com" onChange={courielValidation}/>
                        {statutCouriel ? <p className="verts">Your email address is valid</p> : <p className="rouge">Your email address is invalid</p>}
                        <label>Mot de passe</label>
                        <input type="password" name="mdp" placeholder="Password" onChange={mdpValidation}/>
                        {statutMDP ? <p className="verts">A strong password!</p> : <p className="rouge">Your password is not strong enough</p>}
                        <br></br>
                        <button onClick={formSubmit}>Sign Up</button>
                    </form>
                    
                    } 
                    {formState}
                </div>
            </div>
            <Footer />
            
        </>
    )
}