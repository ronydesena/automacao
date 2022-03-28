import React from 'react'

import styles from './styles.css'

const CustomVerticalTimeline = () => {
  return (
    <div className={styles.timeline}>
      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2 className={styles.timelineTitle}>O sucesso não é por acaso</h2>
          <p className={styles.timelineDescription}>
            É planejado passo a passo, executado com disciplina e foco em
            resultado;
          </p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2 className={styles.timelineTitle}>Juntos somos mais fortes</h2>
          <p className={styles.timelineDescription}>
            Com humildade e trabalho em equipe somos melhores;
          </p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2 className={styles.timelineTitle}>Ganha ganha</h2>
          <p className={styles.timelineDescription}>
            Construímos relacionamento com nossos clientes, colaboradores e
            fornecedores de forma que todos ganhem;
          </p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2 className={styles.timelineTitle}>SAS</h2>
          <p className={styles.timelineDescription}>
            Sorisso, atenção e simpatia;
          </p>
        </div>
      </div>
      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2 className={styles.timelineTitle}>
            Missão dada é missão cumprida.
          </h2>
          <p className={styles.timelineDescription}>
            Coragem, disciplina, garra e foco.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CustomVerticalTimeline
