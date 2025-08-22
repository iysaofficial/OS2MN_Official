import Link from "next/link"

const ListOfWinnerDetail2024Comp = () => {
    return(
        <>
        <section className="low-detail-header-section">
            <div className="low-detail-header-content">
                <h2>OS2MN 2024</h2>
            </div>
        </section>
        <section className="low-detail-after-event-section" id="low-detail-after-event">
            <div className="low-detail-after-event-heading">
                <h1 className="section-header">After Event OS2MN 2024</h1>
            </div>
            <div className="low-detail-after-event-container">
                <div className="low-detail-after-event-row">

                    <div className="low-detail-after-event-video">
                        <iframe className="mt-5"  width="100%" height="315" src="https://www.youtube.com/embed/09smwgomUS0?si=Mne0UYPz875kmGIQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
        
                    <div className="low-detail-after-event-p">
                        <br />
                        <br />
                        <p>We are proud to present a video summary of this unforgettable event, as a testament to the passion, dedication, and brilliance that each participant has shown. In our after event video, you will be presented with the memorable moments we had together. </p>
                        <br />
                        <p>We invite you to join the celebration. See how passion, hard work, and collaboration can produce something extraordinary. We hope that through this video, you will not only feel our excitement, but also be inspired to continue pursuing your dreams and contributing to the field of science. </p>
                        <br />
                        <p>Thank you to all participants, mentors, and everyone who supported IYSA Olympiad. See you on the next event!</p>
                    </div>
                    
                </div>
            </div>
        </section>
        
        <section className="head-low-detail-document-section" id="head-low-detail-document">
            <div className="head-low-detail-document-heading">
                <h1 className="section-header">After Event Document 2024</h1>
            </div>
        </section>
        <section className="low-detail-document-section" id="low-detail-document">
            <div className="low-detail-document-container">

                <div className="serviceBox">
                    <div className="icon">
                        <i className="fa-solid fa-trophy"></i>
                    </div>
                    <div className="content">
                        <h2>Daftar Pemenang Online</h2>
                        <br />
                        <Link href="https://drive.google.com/file/d/1oZ0Hk1MTSYd7QAb7UqLC-WZ0I6XE-_zz/view?usp=sharing" target="_blank" className="low-detail-document-button">Download</Link>
                    </div>
                </div>

                <div className="serviceBox">
                    <div className="icon">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="content">
                        <h2>Kurasi</h2>
                        <br />
                        <Link href="https://drive.google.com/drive/u/0/folders/1KJzgJ2waLbokBkOTGYzLHB167IkdlQzN" target="_blank" className="low-detail-document-button">Download</Link>
                    </div>
                </div>

                <br />
                <br />
                <br />
             
            </div>
        </section>

        <section className="head-low-detail-document-section" id="head-low-detail-document">
            <div className="head-low-detail-document-heading">
                <h1 className="section-header">Press Release 2024</h1>
            </div>
            <section className="low-press-release-section">
                <div className="low-press-release-container">
                    <div className="low-press-release-wrapper">

                    <iframe src="https://drive.google.com/file/d/1BE-EOXpnXax2gpx9YzmXbVjH1Jkag2UL/preview"></iframe>
                    
                    </div>
                </div>
            </section>
            <div className="low-press-release-button-container">
                <Link href="https://drive.google.com/file/d/1BE-EOXpnXax2gpx9YzmXbVjH1Jkag2UL/view?usp=sharing" className="low-press-release-button">Download Press Release</Link>
            </div>
        </section>
        </>
    )
}

export default ListOfWinnerDetail2024Comp