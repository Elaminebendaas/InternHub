import LogoMomo from '../../assets/collegepng.png'
import './Navbar.css'
import { useSelector, useDispatch } from 'react-redux' 
import { resetState } from '../../GlobalState/UtilisateurConnecte'



export default function Navbar(){
    const user = useSelector(state => state.utilisateur)
    const dispatch = useDispatch()

    function logOut(){
        dispatch(resetState())
        localStorage.removeItem('persist:main-root')
    }



    return(
        <>
            <nav className='nav'>
            <a href='/'><img src={LogoMomo} width={50}/></a>

            <div className='nav-items'>
                <a href='/'>Home</a>
                <a href='/profilscompetences'>Profiles and skills of interns</a>
                <a href='/faq'>FAQ</a>

                {
                    //Add here Deroulement Stagieres pour les etudiants
                    user.isStudent && <a href='/deroulementstage'>Internship program structure</a>
                }
                {
                    //Add here Deroulement Stagieres pour les employeur
                    user.isStudent === false && <a href='/deroulementstageemployeur'>Internship program structure</a>
                }
                {
                    //Add here Ajouter un stage pour les employeur
                    user.isStudent === false && <a href='/creerstage'>Creating an internship</a>
                }
                {
                    //Add here voir les stages disponible pour les etudiants et les employeurs voir avec moad
                    user.userisLoggedIn && <a href='/stagesdispo'>Available internships</a>
                }
                

            </div>
            
            { user.userisLoggedIn ?
                
            <div className='nav-items'>
                <a onClick={logOut}>Logout</a>
            </div> 
            :
            <div className='nav-items'>
                <a href='/login'>Login</a>
                <a href='/enregistrement'>Sign up</a>
            </div> 
            }

            </nav>
        </>
    )

}