import './Acceuil.css';
import LogoMomo from '../../assets/collegepng.png'
import { Footer } from '../../components';


export default function Acceuil(){

    return(
        <>
            <div className='container'>
                <img src={LogoMomo}/>
                <h1>2023 edition</h1>
                <h2>Welcome to the internship website for the Computer Techniques program at Collège Montmorency!</h2>
                <div className='container2'>
                    <p>At the end of their studies, students are encouraged to apply the skills they have acquired during the program. This is made possible through the participation of local businesses that welcome them to complete their training.</p>

                    <p>Collège Montmorency provides employers with the opportunity to acquire competent workforce while also allowing them to contribute to the final training of students.</p>

                    <p>The end-of-studies internship is a concrete experience that allows students to gain valuable professional experience.</p>

                    <p>Students complete the academic portion of their computer studies program through one of the two program streams:Network and Computer SecurityApplication Development</p>
                </div>
            </div>
            <Footer />
        </>
    )

}