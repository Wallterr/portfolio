import styles from './ButtonB.module.css'

function ButtonB({text}){
    return(
        <div>
          <button className={styles.btnB}> {text} </button> 
        </div>
    )
}

export default ButtonB