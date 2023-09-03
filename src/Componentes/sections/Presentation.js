import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect, useState } from 'react'

function Presentation(){

    const [text, setText] = useState('');
    const toRotate = ['Walter Luiz!', ' Futuro Desenvolvedor'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 80;
    const [delta, setDelta] = useState(80)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=> {clearInterval(ticker)} 

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText =  isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0, text.length+1)
        
        setText(updatedText);

        if(!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }

   
    
    }

    return(
        <div className={styles.presentation} id='presentantion' >
            <h4><strong> Bem-vindo ao meu portfólio </strong></h4>
            <h1>Oi, eu sou {text}!</h1>

            <p>Sou apaixonado por tecnologia, por tudo que envolva aplicações<br/>
                que facilitam o nosso dia-a-dia. Visto que isso é o que eu amo,<br/>
                migrei para area de programação para poder criar e inovar tudo<br/>
                que possa facilitar a vida das pessoas e torna-las melhores seres-humanos.<br/>
                Acredito que a fusão entre homem e maquina é a proxima evolução natural da espécie,<br/>
                Porem é necessario que nosso lado emocional seja a maior parte dessa fusão
            </p>

            <ButtonA link='https://github.com/Wallterr' text='Conecte-se comigo'/>
            

        </div>
    )
}

export default Presentation