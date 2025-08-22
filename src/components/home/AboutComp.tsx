import Link from "next/link"

const AboutComp = () =>{
    return(
    <>
    <section className="about-section">
        <div className="about-content">
            <img src="/assets/images/logo/OSSMN.png" alt="" />
            <div className="about-text">
                <h1>OS2MN</h1>
                <h5>Olimpiade Sains Siswa Madrasah Nasional</h5>
                <p>Olimpiade Sains Siswa Madrasah Nasional (OS2MN) adalah kompetisi sains untuk peserta didik pada jenjang MI hingga MA di Indonesia. Olimpiade ini merupakan sebuah kompetisi yang diselenggarakan untuk menguji kemampuan dan pengetahuan para pelajar. Ajang ini dirancang untuk mendorong para pelajar agar lebih mendalami dan mengembangkan potensi mereka. Para peserta akan diuji dengan berbagai soal, Salah satu ukuran kesuksesan Olimpiade Sains adalah pencapaian tim yang konsisten di kompetisi. </p>
                <Link href="/about">Selengkapnya</Link>
            </div>
        </div>
    </section>
    </>
    )
}

export default AboutComp