import Link from "next/link"

const HomeRegistrationComp = () =>{
    return(
        <>
        <section className="registration-section">
            <div className="registration-container">
            <div className="registration-header">
                <h2 className="registration-title">FORMULIR REGISTRASI</h2>
                <h3 className="registration-subtitle">Pilih Kategori Kompetisi untuk Pendaftaran OS2MN 2026</h3>
            </div>
            </div>
            <div className="registration-links">
            <Link href="/registration/national/national-offline" className="registration-link">Kompetisi Offline</Link>
            <Link href="/registration/national/national-online" className="registration-link">Kompetisi Online</Link>
            </div>
        </section>
        </>
    )
}

export default HomeRegistrationComp