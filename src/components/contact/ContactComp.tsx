"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const ContactComp = () =>{
    useEffect(() => {
        const scriptURL =
        "https://script.google.com/macros/s/AKfycbzdgUOy_s6zjJQTgqXQ7GX3H1_w6TvWq1hsBZgH0mSREWt3qXCKA34-qo74-jfDVbHE/exec";

        const form = document.forms.namedItem("home-contact");

        if (form) {
        const handleSubmit = async (e: Event) => {
            e.preventDefault();
            try {
            await fetch(scriptURL, {
                method: "POST",
                body: new FormData(form),
            });
            alert("Pesan berhasil dikirim!");
            form.reset();
            } catch (error) {
            console.error("Error:", error);
            alert("Gagal mengirim Pesan.");
            }
        };

        form.addEventListener("submit", handleSubmit);

        // cleanup listener
        return () => {
            form.removeEventListener("submit", handleSubmit);
        };
        }
    }, []);

    useEffect(() => {
        const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".input");

        const focusFunc = (e: Event) => {
            const target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
            target.parentElement?.classList.add("focus");
        };

        const blurFunc = (e: Event) => {
            const target = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
            if (!target.value) target.parentElement?.classList.remove("focus");
        };

        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc);
            input.addEventListener("blur", blurFunc);
        });

        return () => {
            inputs.forEach((input) => {
            input.removeEventListener("focus", focusFunc);
            input.removeEventListener("blur", blurFunc);
            });
        };
    }, []);

    return(
        <>
            <section className='contact-section' id='contact'>
            <div className="container1">
                <div className="form">
                    <div className="contact-info">
                        <h3 className="title">Ayo hubungi kami</h3> 
                        <p>
                            Jangan ragu untuk menghubungi kami. Kami di sini untuk membantu Anda dengan semua kebutuhan Anda.
                        </p>

                        <div className="info">
                            <div className="information">
                                <img src="/assets/images/icon/location.png" className="contact-icon" alt="" />
                                <Link href='https://goo.gl/maps/9x18coXGCmSscKec6' target='_blank'>Jl. Kemang No. 63 RT 03 RW 06</Link>
                            </div>
                            <div className="information">
                                <img src="/assets/images/icon/email.png" className="contact-icon" alt="" />
                                <Link href='mailto:youngscientist.iysa@gmail.com' target='_blank'>youngscientist.iysa@gmail.com</Link>
                            </div>
                            <div className="information">
                                <img src="/assets/images/icon/phone.png" className="contact-icon" alt="" />
                                <Link href='https://wa.me/+6281770914129' target='_blank'>+62817-7091-4129</Link>
                            </div>
                        </div>

                        <div className="social-media">
                            <p>Connect with us :</p>
                            <div className="social-icons">
                                <Link href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'>
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link href="https://www.instagram.com/os2mn.officiall?igsh=d3N2d3EwaG40dmow" target='_blank'>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link href="https://www.youtube.com/@IYSAOfficial" target='_blank'>
                                    <i className="fab fa-youtube"></i>
                                </Link>
                                <Link href="https://www.tiktok.com/@iysa.official" target='_blank'>
                                    <i className="fab fa-tiktok"></i>
                                </Link>
                                <Link href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'>
                                    <i className="fab fa-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>
                    
                        <form action="" autoComplete='off' method='POST' name="home-contact">
                            <h3 className="title">Hubungi Kami</h3>
                            <div className="input-container">
                                <input type="text" name="Name" className="input"/>
                                <label htmlFor="">Nama</label>
                                <span>Nama</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="Email" className="input"/>
                                <label htmlFor="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container textarea">
                                <textarea name="Message" className="input"></textarea>
                                <label htmlFor="">Pesan</label>
                                <span>Pesan</span>
                            </div>
                            <input type="submit" value={"Kirim"} className="btn-contact"/>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default ContactComp