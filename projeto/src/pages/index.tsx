import Head from 'next/head';
import styles from '../styles/home.module.css';
import Image from 'next/image';

import heroImg from '../../public/assets/hero.png';

export default function Home() {
  return (
    
   
      <div className={styles.container}>
        <Head>
          <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.logoContent}>
          <Image 
          className={styles.hero} 
          alt='Logo Tarefas+' 
          src={heroImg} 
          priority>

          </Image>
          
            
           
          </div>
          <h1 className={styles.title}>
            Sistema Feito para você organizar <br/>
            seus estudos e tarefas
          </h1>

          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+10 Posts</span>
            </section>
            <section className={styles.box}>
              <span>+50 Comentários</span>

            </section>
          </div>
        </main>
        </div>
    
  );
}
