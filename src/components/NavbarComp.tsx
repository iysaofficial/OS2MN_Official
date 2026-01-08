'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../assets/css/Navbar.css'

const NavbarComp = () =>{
    useEffect(() => {
        // Pastikan kode berjalan di client side
        if (typeof window === 'undefined') return;

        // Handler functions untuk dropdown menus
        const handleSubMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const subMenu = btn.nextElementSibling as HTMLElement;
            if (subMenu && subMenu.classList.contains("sub-menu")) {
                if (subMenu.style.display === "none" || subMenu.style.display === "") {
                    subMenu.style.display = "block";
                } else {
                    subMenu.style.display = "none";
                }
            }
        };

        const handleMoreMenuClick = (e: Event) => {
            e.preventDefault();
            const btn = e.currentTarget as HTMLElement;
            const moreMenu = btn.nextElementSibling as HTMLElement;
            if (moreMenu && moreMenu.classList.contains("more-menu")) {
                if (moreMenu.style.display === "none" || moreMenu.style.display === "") {
                    moreMenu.style.display = "block";
                } else {
                    moreMenu.style.display = "none";
                }
            }
        };

        // Handler functions untuk responsive menu
        const handleMenuOpen = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.add("active");
        };

        const handleMenuClose = () => {
            const menu = document.querySelector(".menu");
            menu?.classList.remove("active");
        };

        // Add event listeners
        const subBtns = document.querySelectorAll(".sub-btn");
        const moreBtns = document.querySelectorAll(".more-btn");
        const menuBtn = document.querySelector(".menu-btn");
        const closeBtn = document.querySelector(".close-btn");

        subBtns.forEach((btn) => {
            btn.addEventListener("click", handleSubMenuClick);
        });

        moreBtns.forEach((btn) => {
            btn.addEventListener("click", handleMoreMenuClick);
        });

        menuBtn?.addEventListener("click", handleMenuOpen);
        closeBtn?.addEventListener("click", handleMenuClose);

        // Cleanup function
        return () => {
            subBtns.forEach((btn) => {
                btn.removeEventListener("click", handleSubMenuClick);
            });
            moreBtns.forEach((btn) => {
                btn.removeEventListener("click", handleMoreMenuClick);
            });
            menuBtn?.removeEventListener("click", handleMenuOpen);
            closeBtn?.removeEventListener("click", handleMenuClose);
        };
    }, []);
    
    return(
        <>
        <header>
            <Link href="/">
                <Image 
                    className='logo-nav' 
                    src="/assets/images/logo/OSSMN.png" 
                    alt="OS2MN Logo" 
                    width={100} 
                    height={50}
                    priority
                />
            </Link>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'><Link href="/">Utama</Link></li>
                    <li className='menu-item'><Link href="/about">Tentang</Link></li>
                    <li className='menu-item'>
                        <Link href="https://drive.google.com/file/d/1YR8pd9vc7v5WrAXtG1TWDx2Ma1qr045C/view?usp=sharing" 
                            target='_blank'
                            rel="noopener noreferrer">
                            Buku Panduan
                        </Link>
                    </li>
                 
                    <li className='menu-item'>
                        <Link href="/contact">Kontak</Link>
                    </li>
                    {/* <li className='menu-item'><a href="https://drive.google.com/file/d/1jkpeD9EN2kWu059MDmriUHgqil_P31xT/view" target='_blank'>Press Release</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Liputan Media <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1BE-EOXpnXax2gpx9YzmXbVjH1Jkag2UL/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li> */}
                    <li className='menu-item'>
                        <Link href="/after-event">Daftar Pemenang</Link>
                        {/* <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1oZ0Hk1MTSYd7QAb7UqLC-WZ0I6XE-_zz/view?usp=sharing" target='_blank'>Daftar Pemenang 2024</a></li>
                        </ul> */}
                    </li>
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">Kurasi <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/u/0/folders/1KJzgJ2waLbokBkOTGYzLHB167IkdlQzN" target='_blank'>Kurasi 2024</a></li>
                        </ul>
                    </li> */}
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Sertifikat Supervisor <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1FoEVkNCajucgsWokdI9fsIMW8M5xlJlR?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        Sertifikat Supervisor 2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/15bumsFDA9N81uxqOfPSAcmHWrV1i2_M1?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        Sertifikat Supervisor 2024
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <Link className='sub-btn' href="#">
                            Galeri <i className='fas fa-angle-down'></i>
                        </Link>
                        <ul className='sub-menu'>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1VyWAS62nEW0nazBFjGaXl6m_tEDEPzZU?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        2025
                                </Link>
                            </li>
                            <li className='sub-item'>
                                <Link href="https://drive.google.com/drive/folders/1osHM0JXgH6lSE1xsDXxmln9IHVMUto6x?usp=sharing" 
                                    target='_blank' 
                                    rel="noopener noreferrer">
                                        2024
                                </Link>
                            </li>
                        </ul>
                    </li>
                    
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">List of Winner <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1fguKg3dnfY3YTBwxsyx-3xq3l4VIlNta/view" target='_blank'>IYEO 2023</a></li>
                        </ul>
                    </li> */}

                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">With Sub-dropdown <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="#">Sub Item 01</a></li>
                            <li className='sub-item'><a href="#">Sub Item 02</a></li>
                            <li className='sub-item'><a href="#">Sub Item 03</a></li>
                            <li className='sub-item'><a href="#">Sub Item 04</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">More Items <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="#">More Item 01</a></li>
                                    <li className='more-item'><a href="#">More Item 02</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp