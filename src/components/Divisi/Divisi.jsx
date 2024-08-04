// src/components/Divisi/Divisi.jsx
import React from 'react';
import Navigasi from '../Navbar/Navigasi'; 
import Brand from '../Navbar/Brand'; 
import softwareLogo from '../../assets/divisi/softdev-logo.png'; 
import exploreLogo from '../../assets/divisi/explore-logo.png'; 
import cyberSecurityLogo from '../../assets/divisi/cysec-logo.png'; 

const Divisi = () => {
    const lineStyle = {
        borderTop: '2px solid white',
        width: '10%',
        margin: '1rem auto',
        alignSelf: 'center'
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#003366', color: 'white' }}>
            <header className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '1rem 2rem', backgroundColor: '#003366' }}>
                <Brand />
                <Navigasi />
            </header>
            <main className="main-content-container mx-auto p-6">
                <h1 className="division-title text-4xl text-center my-6 border-2" style={{ borderColor: '#003366', backgroundColor: '#003366', color: 'white', fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Divisi</h1>
                <div style={lineStyle}></div>
                <div className="division-list-container flex flex-col items-center space-y-8">
                    <div className="division-item flex items-start p-6 rounded-lg" style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', width: '60%' }}>
                        <img src={softwareLogo} alt="Software Developer Logo" className="division-logo w-40 h-40 rounded mr-6" />
                        <div className="division-text-container">
                            <h2 className="division-name text-2xl font-bold text-white">Software Developer</h2>
                            <p className="division-description mt-2 text-white">Divisi yang menggali dunia pemrograman dengan berfokus pada bahasa pemrograman, 
                                teknologi, dan konsep Pemrograman Berorientasi Objek (OOP). 
                                Kami menyelenggarakan berbagai proyek pengembangan perangkat lunak dan kompetisi 
                                pemrograman, serta berbagi sumber daya belajar dan tutorial bagi anggota kami.</p>
                        </div>
                    </div>
                    <div className="division-item flex items-start p-6 rounded-lg" style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', width: '60%' }}>
                        <div className="division-text-container">
                            <h2 className="division-name text-2xl font-bold text-white">Explore</h2>
                            <p className="division-description mt-2 text-white">Divisi yang memperkenalkan dunia dari Internet of Things (IoT) 
                                dan teknologi fisik. Kami mengeksplorasi konsep dasar IoT 
                                dan memberikan kesempatan bagi Anda untuk terlibat dalam 
                                praktik perakitan perangkat keras, eksperimen IoT, 
                                serta pengenalan komponen-komponen komputer.</p>
                        </div>
                        <img src={exploreLogo} alt="Explore Logo" className="division-logo w-40 h-40 rounded ml-6" />
                    </div>
                    <div className="division-item flex items-start p-6 rounded-lg" style={{ border: '2px solid #003366', backgroundColor: '#003366', color: 'white', width: '60%' }}>
                        <img src={cyberSecurityLogo} alt="Cyber Security Logo" className="division-logo w-40 h-40 rounded mr-6" />
                        <div className="division-text-container">
                            <h2 className="division-name text-2xl font-bold text-white">Cyber Security</h2>
                            <p className="division-description mt-2 text-white">Divisi yang mempelajari dasar-dasar ethical hacking dan penetration testing. 
                                Para member akan diajari teknik-teknik peretasan yang umum digunakan 
                                serta syarat-syarat peretasan yang dianggap sah atau legal. 
                                Selain itu, para member di-support untuk aktif mengikuti kompetisi 
                                seperti Capture The Flag (CTF) dan lain-lain.</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="footer text-center text-gray-300 mt-8">#UnlimitedConnection</footer>
        </div>
    );
};

export default Divisi;
