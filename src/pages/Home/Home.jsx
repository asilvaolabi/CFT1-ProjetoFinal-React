import styles from './home.module.css'
import homeImg from '../../assets/homeimg.svg'
import salarioImg from '../../assets/salario.svg'
import vagasImg from '../../assets/vagas.svg'

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <h1>
            Projeto Final Pretalab 2024
        </h1>
        <img src={homeImg} />
      </div>
      <div className={styles.subtitulo}>
        <p>
          Esse é o site do projeto final do módulo de React do Ciclo formativo Básico da Pretalab.
          Projeto desenvolvido em React abordando todos os tópicos vistos durante a aula (Componentes, Props,
          Estados, Listas e Keys, Hooks, onChange e onClick, Context API em React, React Router DOM
          imagens e modularização do CSS, TDD).
        </p>
      </div>
      <div className={styles.beneficios}>
    <section className={styles.content}>
      <div className={styles.cardsContainer}>
        <h2 className={styles.tituloCards}>Razões para se tornar uma pessoa desenvolvedora</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={vagasImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Vagas</h3>
              <p className={styles.texto}>Tecnologia é o mercado que mais cresce no mundo. Estima-se que até 2025, no Brasil, 800 mil vagas de pessoas desenvolvedoras não serão preenchidas por falta de pessoas qualificadas.</p>
            </div>
          </div>
          <div className={styles.card}>
            <img className={styles.imagemCard} src={salarioImg} />
            <div className={styles.textos}>
              <h3 className={styles.subtituloCard}>Salários</h3>
              <p className={styles.texto}>Os salários e benefícios são muito atrativos chegando a valer mais do dobro do salário médio no Brasil, até para pessoas iniciantes ou estagiárias.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
    </>
  )
}

export default Home