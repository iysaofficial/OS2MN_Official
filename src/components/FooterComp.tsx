"use client";
import React, { useEffect } from "react";
import Link from 'next/link'
import '../assets/css/Footer.css'

const FooterComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfw1dAhzyY6p6crVCCuoEXzb_E7hBOi8cYuIBu_-JZzz2a25h-tCvT6Xd3dUH9Mx2fQA/exec";

        const form = document.forms.namedItem("footer-newsletter");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Data berhasil dikirim!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Gagal mengirim data.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);

    return(
        <>
        <section className='footer-section'>
        <div className="container-fluid justify-content-center">
            <div className="row py-5">
                <div className="col">
                    <div className="footer-card border-0">
                        <div className="card-body text-center">
                            <h2><b>Subscribe to our newsletter</b></h2>
                            <p className="pl-0 ml-0 mb-5">Subscribe to our newsletter to receive our latest news and exclusive deals.</p>
                            <form action="" method="POST" name="footer-newsletter">
                            <div className="row text-center justify-content-center">
                                <div className="col-auto">
                                    <div className="input-group-lg input-group mb-3">   
                                        <input type="email" name='Email' className="form-control" placeholder="Masukan Email Anda" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <div className="input-group-append"><button className="footer-btn" type="submit" id="button-addon2"> <b>Submit</b></button></div>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="mx-0 px-0"/>
            <footer>
                <div className="row justify-content-around mb-0 pt-5 pb-0 ">
                    <div className=" col-11">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-12 font-italic align-items-center mt-md-3 mt-4">
                            <h5><b className="text-dark"><span className="text-muted"> OS2MN</span></b></h5>
                            <p>kompetisi sains untuk peserta didik pada jenjang MI hingga MA di Indonesia. Olimpiade ini merupakan sebuah kompetisi yang diselenggarakan untuk menguji kemampuan dan pengetahuan para pelajar.</p>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4">Link</li>
                                    <li><Link href="/" className='footer-link'>Utama</Link></li>
                                    <li><Link href="https://drive.google.com/file/d/1YR8pd9vc7v5WrAXtG1TWDx2Ma1qr045C/view?usp=sharing" target='_blank' className='footer-link'>Buku Panduan</Link></li>
                                    <li><Link href="/contact" className='footer-link'>Hubungi Kami</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4">Social Media</li>
                                    <li><Link href="https://www.facebook.com/profile.php?id=100063979907207" className='footer-link' target='_blank'>Facebook</Link></li>
                                    <li><Link href="https://www.instagram.com/os2mn.officiall?igsh=d3N2d3EwaG40dmow" className='footer-link' target='_blank'>Instagram</Link></li>
                                    <li><Link href="https://www.youtube.com/@IYSAOfficial" className='footer-link' target='_blank'>Youtube</Link></li>
                                    <li><Link href="https://www.tiktok.com/@iysa.official" className='footer-link' target='_blank'>Tiktok</Link></li>
                                    <li><Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" className='footer-link' target='_blank'>Linkedin</Link></li>
                                </ul>
                            </div>
                            <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                                <ul className="list-unstyled">
                                    <li className="mt-md-3 mt-4">Office</li>
                                    <li><Link href="mailto:iysa.olympiad@gmail.com" className='footer-link'>iysa.olympiad@gmail.com</Link> </li>
                                    <li><Link href="https://wa.me/+6283870026877" className='footer-link'>+6283870026877</Link></li>
                                    <li><Link href="https://goo.gl/maps/9x18coXGCmSscKec6" className='footer-link'>Jl. Kemang, Pasir Putih, Kecamatan. <br />Sawangan, Kota Depok, Jawa Barat 16519</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        <div className="bottom-details">
            <div className="bottom_text">
                <span className="copyright_text">Copyright &#169; 2024 <Link href="#">OS2MN Official.</Link>All rights reserved</span>
                <span className="policy_terms">
                    <Link href="#">Privacy policy</Link>
                    <Link href="#">Terms & Condition</Link>
                </span>
            </div>
        </div>
        </section>
        </>
    )
}

export default FooterComp