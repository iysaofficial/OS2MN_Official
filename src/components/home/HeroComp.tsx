import Link from "next/link"

const HeroComp = () =>{
    return(
        <>
        <section className="hero-section">
            <div className="hero-container">
                <img src="/assets/images/logo/OSSMN.png" alt=""/>
                <h1>Olimpiade Sains Siswa Madrasah Nasional</h1>
                {/* <p>Pendaftaran Olimpiade Sains Siswa Madrasah Nasional telah dibuka!<br /> Bergabunglah dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!
                </p> */}
                <br />
                <br />
                <Link href="#" className="registration-button">Pendaftaran di Tutup</Link>
                <br />
                <br />
                <br />
                <div className="hero-social-icon">
                    <span>Follow us</span>
                    <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></Link>
                    <Link href="https://www.instagram.com/os2mn.officiall?igsh=d3N2d3EwaG40dmow" target='_blank'><i className='fab fa-instagram instagram-bg'></i></Link>
                    <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></Link>
                    <Link href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></Link>
                    <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></Link>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp