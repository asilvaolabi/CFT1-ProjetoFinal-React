import fluxoImg from '../../assets/fluxo.png'
import fotoPerfil from '../../assets/foto-perfil.png'
import styles from './sobre.module.css'

const Sobre = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
          Escreva sobre você!!!
        </h1>
        <div>
            <img src={fotoPerfil} alt="Foto de Perfil" />
        </div>
      </div>

      <div className={styles.containerSobre} >
          <h1 className={styles.nomeCompleto}>Amanda Silva</h1>
          <h2 className={styles.profissao}>Desenvolvedora Front-End</h2>
          <p className={styles.sobreMim}>
              Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. 
              Paisis, filhis, espiritis santis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. 
              Nam vulputate dapibus. Detraxit consequat et quo num tendi nada.
          </p>
      </div>

      <div className={styles.subtitulo}>
        <img src={fluxoImg} />
        <p>
        Este guia estruturado direciona as devas desde os conceitos básicos até as nuances avançadas 
        do React, proporcionando uma compreensão abrangente da biblioteca. 
        </p>
      </div>

      <div className={styles.containerVideo}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ss3Njo-FUDE?si=DfSY306Gj48sXBIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        <div className={styles.tituloSobre}>
          Aprenda com as duas Amandas a deixar seu Linkedin potente como você!!!
        </div>
      </div>
    </>
  )
}

export default Sobre;