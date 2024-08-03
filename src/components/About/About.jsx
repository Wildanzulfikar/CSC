  import React from 'react';
  import Navigasi from '../Navbar/Navigasi'; 
  import Brand from '../Navbar/Brand'; // 

  const About = () => {
    const frameStyle = {
      padding: '1rem',
      border: '1px solid #003366',
      borderRadius: '8px',
      marginBottom: '1rem',
      backgroundColor: '#3399ff', // warna latar belakang untuk frame
      color: 'white' // warna teks dalam frame
    };

    const lineStyle = {
      borderTop: '2px solid #007bff', // warna garis biru
      width: '10%', // panjang garis
      margin: '1rem 0', // jarak garis dari elemen di atas dan bawahnya
      alignSelf: 'center' // memusatkan garis dalam kontainer
    };

    const headerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '1rem 2rem',
      backgroundColor: '#003366'
    };

    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#003366', color: 'white' }}>
        <div style={headerStyle}>
          <Brand /> {/* Brand di kiri atas */}
          <Navigasi /> {/* Navigasi di kanan atas */}
        </div>
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>About Us</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={lineStyle}></div> {/* Garis biru di bawah judul About Us */}
            </div>
            <div style={frameStyle}>
              <p style={{ marginBottom: '1rem', textAlign: 'center' }}>
                Computer Student Club (CSC) adalah kelompok studi mahasiswa di Politeknik Negeri Jakarta yang berfokus pada minat mahasiswa dalam pengembangan perangkat lunak, dan IoT. Kami bertujuan untuk mengembangkan minat dan bakat mahasiswa serta meningkatkan prestasi mereka dalam bidang teknologi.
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>Visi</h2>
              <div style={lineStyle}></div> {/* Garis biru di bawah judul */}
              <div style={frameStyle}>
                <p style={{ marginBottom: '1rem', textAlign: 'center' }}>
                  Menjadi wadah pengembangan minat dan bakat mahasiswa dalam bidang teknologi yang berfokus pada kecerdasan buatan, pengembangan perangkat lunak, dan internet of things (IoT) yang menginspirasi dan mempengaruhi pengembangan masa depan dalam dunia teknologi.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
              <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'white' }}>Misi</h2>
              <div style={lineStyle}></div> {/* Garis biru di bawah judul */}
              <div style={frameStyle}>
                <p style={{ marginBottom: '1rem', textAlign: 'center' }}>
                  Memberikan pemahaman teknologi, mendukung keahlian mahasiswa, menyediakan platform eksplorasi, mendorong kolaborasi, menginspirasi inovasi, mendukung prestasi, mempromosikan keamanan teknologi, serta etika.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default About;
