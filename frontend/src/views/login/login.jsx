import './login.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { changerUser } from "../../GlobalState/UtilisateurConnecte"
import LogoMomo from '../../assets/collegepng.png'
import { Footer } from '../../components'


export default function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, modiUser] = useState({
        couriel: "",
        password: ''
    })
    const [reduxUser, changerReduxUser] = useState({
        userID: '',
        nomComplet: '',
        isStudent: '',
        profilDeSortie: null,
    })
    const [empreduxUser, changerempReduxUser] = useState({
        userID: '',
        nomComplet: '',
        numTel: String,
        adresseCouriel: String,
        motDePasse: String,
        nomEnterprise: String,
        adresseEnterprise: String,
        isStudent: '',
        profilDeSortie: null,
    })
    const [loginState, changerLoginState] = useState("")

    async function loginUtilisateur(e){
        e.preventDefault()
        const res = await fetch(`https://finalproj-backend.onrender.com/login`,{
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const response = await res.json()
        console.log(res)

        if(res.status == 409){
            changerLoginState(response.message)
        }else if(res.status == 200){
            const temp = JSON.parse(JSON.stringify(response))
            
            reduxUser.userID = temp._id
            reduxUser.nomComplet = `${temp.nom}, ${temp.prenom}`
            reduxUser.profilDeSortie = temp.profilDeSortie
            reduxUser.isStudent = true

            console.log(reduxUser)
            dispatch(changerUser(reduxUser))
            navigate('/')
        }else if(res.status == 201){
            const temp = JSON.parse(JSON.stringify(response))
            
            empreduxUser.userID = temp._id
            empreduxUser.nomComplet = `${temp.nom}, ${temp.prenom}`
            empreduxUser.profilDeSortie = temp.profilDeSortie
            empreduxUser.adresseCouriel = temp.adresseCouriel
            empreduxUser.adresseEnterprise = temp.adresseEnterprise
            empreduxUser.numTel = temp.numTel
            empreduxUser.nomEnterprise = temp.nomEnterprise
            
            empreduxUser.isStudent = false
            dispatch(changerUser(empreduxUser))
            navigate('/')


        }
        
        

    }

    return(
    <>
        <div className="container">
            <h1 className='blanc'>Welcome!</h1>
            <form className='login-card'>
                <h1>Log-in</h1>
                <img src={LogoMomo} width={100}/>
                <label>Email Address</label>
                <input type="email" name="couriel" placeholder="johndoe@example.com" onChange={(e) => user.couriel = e.target.value}/>
                <br></br>   

                <label>Password</label>
                <input type="password" name="motdepasse" onChange={(e) => user.password = e.target.value}/>
                <br></br>
                <button onClick={loginUtilisateur}>Log-In</button>
                <br></br>
                <a href='/enregistrement'>Don't have an account?</a>

            </form>
            <p className='rouge'>{loginState}</p>
        </div>
<Footer/>
    </>
    )
}