import Image from 'next/image';
import styles from './page.module.css';
import Hero from './components/main/hero/Hero';
import Header from './components/main/header/Header';
export default function Home() {
    return (
        <>
            <Header />
            {/* <StarsCanvas /> */}

            <main className={styles.main}>
                {/* <div className={styles.videoBox}>
                    <video autoPlay muted loop className={styles.video}>
                        <source src="/blackhole.webm" type="video/webm" />
                    </video>
                </div> */}
                <div className={styles.container}>
                    <Hero />
                    {/* <Technology /> */}
                </div>
            </main>
        </>
    );
}
