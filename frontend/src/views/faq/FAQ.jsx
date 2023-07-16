import { Footer } from '../../components'
import './FAQ.css'

export default function FAQ(){

    return(
        <>
        <div className='hero'><h1>Frequently Asked Questions - FAQ</h1></div>
            <div className='container'>
                
                <div className='questionsBox'>
                    <h1>The Questions</h1>
                    <div className='qaBox'>
                        <h3>Is the internship mandatory?</h3>
                        <p>The end-of-studies internship in computer science is mandatory for obtaining the college diploma. </p>
                    </div>
                    <div className='qaBox'>
                        <h3>What is the student's schedule during internships?</h3>
                        <p>The student must adhere to the schedule set by the company during their internship.</p>
                    </div>
                    <div className='qaBox'>
                        <h3>Does the student work during pedagogical days and make-up days?</h3>
                        <p>The student must adhere to the schedule set by the company during their internship, including pedagogical days and make-up days.</p>
                    </div>
                    <div className='qaBox'>
                        <h3>What is the duration of an end-of-studies internship?</h3>
                        <p>The duration of the internship is 15 weeks for both program streams (networks and programming).</p>
                    </div>
                    <div className='qaBox'>
                        <h3>What are the scheduled dates for the internships?</h3>
                        <p>The internships are scheduled from January 21st to May 3rd, 2023.</p>
                    </div>                   
                </div>

            </div>
            <Footer />
        </>
    )
}