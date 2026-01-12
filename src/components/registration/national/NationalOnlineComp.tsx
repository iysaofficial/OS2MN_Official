import React, { useState, useEffect } from "react";

interface FormState {
  selectedMaxNamaLengkap: string;
  selectedMaxProject: string;
}

const NationalOnlineComp: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    selectedMaxNamaLengkap: "",
    selectedMaxProject: ""
  });
  
  const maxNameChars = 180;

  const handleInputNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length <= maxNameChars) {
      setFormState(prev => ({
        ...prev,
        selectedMaxNamaLengkap: value
      }));
    }
  };

  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxz9v5v9Q8f2izizo4MxADUAlpMr44g7iuDkBKtxfEHiNZWOmkVtcUc0Kk8uwITdeZq6A/exec";

    const form = document.forms.namedItem("regist-form");
    let buttonCounter = 0;

    if (form) {
      const handleSubmit = async (e: Event) => {
        e.preventDefault();
        
        if (buttonCounter === 0) {
          try {
            buttonCounter++;
            const submitButton = form.querySelector('.submit-button') as HTMLButtonElement;
            
            // Disable button and show loading state
            if (submitButton) {
              submitButton.disabled = true;
              submitButton.textContent = 'MENGIRIM...';
              submitButton.style.backgroundColor = '#6b7280';
            }
            
            await fetch(scriptURL, {
              method: "POST",
              body: new FormData(form),
            });
            
            // Success state
            if (submitButton) {
              submitButton.textContent = 'BERHASIL DIKIRIM!';
              submitButton.style.backgroundColor = '#10b981';
            }
            
            // Redirect after 2 seconds
            setTimeout(() => {
              window.location.href = "/registration/success";
            }, 2000);
            
          } catch (error) {
            console.error("Error saat mengirim data:", error);
            
            // Error state
            const submitButton = form.querySelector('.submit-button') as HTMLButtonElement;
            if (submitButton) {
              submitButton.textContent = 'GAGAL DIKIRIM - COBA LAGI';
              submitButton.style.backgroundColor = '#ef4444';
              submitButton.disabled = false;
            }
            buttonCounter = 0;
          }
        }
      };

      form.addEventListener("submit", handleSubmit);

      // Cleanup listener
      return () => {
        form.removeEventListener("submit", handleSubmit);
      };
    }
  }, []);

  // Character counter color logic
  const getCharCounterColor = (length: number, max: number): string => {
    if (length > max * 0.9) return '#ef4444'; // Red
    if (length > max * 0.8) return '#f59e0b'; // Orange
    return '#64748b'; // Default gray
  };

  return (
    <div className="page-container">
      {/* Header Section */}
      <HeaderSection />
      
      {/* Instruction Section */}
      <InstructionSection />

      {/* Registration Form */}
      <div className="registration-form">
        <form name="regist-form">
          
          {/* BIODATA SECTION */}
          <BiodataSection 
            selectedMaxNamaLengkap={formState.selectedMaxNamaLengkap}
            handleInputNameChange={handleInputNameChange}
            maxNameChars={maxNameChars}
            charCounterColor={getCharCounterColor(formState.selectedMaxNamaLengkap.length, maxNameChars)}
          />

          {/* DATA SEKOLAH SECTION */}
          <DataSekolahSection />

          {/* DATA PEMBIMBING SECTION */}
          <DataPembimbingSection />

          {/* INFORMASI UMUM SECTION */}
          <InformasiUmumSection />

          <input type="hidden" name="PRICE" value="Rp. 350.000" readOnly />
          
          {/* Submit Button */}
          <div className="submit-container">
            <button type="submit" className="submit-button">
              KIRIM PENDAFTARAN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Header Component
const HeaderSection: React.FC = () => (
  <div className="header-section">
    <div className="header-content">
      <h1 className="main-title">FORMULIR PENDAFTARAN</h1>
      <div className="title-underline"></div>
      <h2 className="event-title">OS2MN 2026</h2>
    </div>
  </div>
);

// Instruction Component
const InstructionSection: React.FC = () => (
  <div className="instruction-section">
    <h3 className="instruction-title">
      HALLO PESERTA OS2MN 2026, Mohon perhatikan informasi berikut ini sebelum mengisi formulir pendaftaran:
    </h3>
    <div className="instruction-list">
      <div className="instruction-item">
        <span className="instruction-number">1</span>
        <p className="instruction-text">
          Mohon mengisi data yang diperlukan dengan benar dan memastikan tidak ada kesalahan penulisan. 
          Pastikan juga bahwa data yang dikirim sudah final dan tidak mengalami perubahan.
        </p>
      </div>
      <div className="instruction-item">
        <span className="instruction-number">2</span>
        <p className="instruction-text">
          Setelah memastikan data sudah benar, Anda dapat mengklik tombol <strong>KIRIM PENDAFTARAN</strong> cukup sekali saja. 
          Jika data telah berhasil dikirimkan, Anda akan dipindahkan ke halaman lain.
        </p>
      </div>
      <div className="instruction-item">
        <span className="instruction-number">3</span>
        <p className="instruction-text">
          Akan ada email informasi bahwa pendaftaran telah diterima yang dikirimkan ke alamat email ketua tim, 
          dan berkas akan divalidasi oleh tim kami. Mohon bersabar dan tunggu maksimal 3 hari setelah waktu pendaftaran, 
          Letter of Acceptance (LOA) akan dikirimkan ke alamat email ketua tim.
        </p>
      </div>
    </div>
  </div>
);

// Biodata Section Component
interface BiodataSectionProps {
  selectedMaxNamaLengkap: string;
  handleInputNameChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxNameChars: number;
  charCounterColor: string;
}

const BiodataSection: React.FC<BiodataSectionProps> = ({
  selectedMaxNamaLengkap,
  handleInputNameChange,
  maxNameChars,
  charCounterColor
}) => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">BIODATA</h2>
      <div className="section-underline"></div>
    </div>
    
    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Kategori Peserta</label>
        <input
          type="text"
          name="KATEGORI_PESERTA"
          className="input-field"
          value="PESERTA INDONESIA"
          readOnly
        />
      </div>
      
      <div className="field-group">
        <label className="field-label">Kategori Kompetisi</label>
        <select name="KATEGORI_KOMPETISI" className="select-field" required>
          <option value="">--Pilih Kategori Kompetisi--</option>
          <option value="Online Competition">Online Competition</option>
        </select>
      </div>
    </div>

    <div className="field-grid">      
      <div className="field-group">
        <label className="field-label">Kategori Olimpiade</label>
        <select name="KATEGORI_OLIMPIADE" className="select-field" required>
          <option value="">--Pilih Kategori Olimpiade--</option>
          <option value="Biologi">Biologi - (Untuk Madrasah Aliyah)</option>
          <option value="Ekonomi">Ekonomi - (Untuk Madrasah Aliyah)</option>
          <option value="Fisika">Fisika - (Untuk Madrasah Aliyah)</option>
          <option value="Geografi">Geografi - (Untuk Madrasah Aliyah)</option>
          <option value="Kimia">Kimia - (Untuk Madrasah Aliyah)</option>
          <option value="Matematika">Matematika - (Untuk Madrasah Ibtidaiyah, Madrasah Tsanawiyah, Madrasah Aliyah)</option>
        </select>
      </div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Nama Ketua & Anggota Tim</label>
        <div className="field-note">
          <p>Masukan nama ketua dan anggota tim dengan nama ketua tim diawal, dengan format seperti berikut:</p>
          <p><strong>Note:</strong> maksimal 1 anggota + 1 ketua tim</p>
          <div className="example-box">
            <div>Kamal Putra Ramadhan</div>
            <div>Ranu Ramadhan</div>
          </div>
        </div>
        <textarea
          name="NAMA_LENGKAP"
          className="textarea-field"
          placeholder="Masukan Nama Ketua & Anggota"
          required
          value={selectedMaxNamaLengkap}
          onChange={handleInputNameChange}
        />
        <div className="char-counter" style={{ color: charCounterColor }}>
          {selectedMaxNamaLengkap.length} / {maxNameChars} karakter
        </div>
      </div>

      <div className="field-group">
        <label className="field-label">NISN / NIM Ketua & Anggota Tim</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Masukan NISN / NIM dengan sesuai urutan nama ketua dan anggota tim, dengan format seperti berikut:</p>
          <div className="example-box">
            <div>231700</div>
            <div>241700</div>
          </div>
        </div>
        <textarea
          name="NISN_NIM"
          className="textarea-field"
          placeholder="Masukan NISN / NIM Ketua & Anggota Tim"
          required
        />
      </div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Nomor WhatsApp Ketua Tim</label>
        <div className="field-note">
          <p>Harap tulis dengan kode telepon, contoh: (kode negara) (nomor telepon) +62 81770914xxxx</p>
          <p><strong>Notes:</strong> Dimohon untuk mengisi nomor ketua tim dengan benar, untuk dimasukan kedalam grup WhatsApp</p>
        </div>
        <input
          type="number"
          name="WHATSAPP_KETUA"
          className="input-field"
          placeholder="Masukan Nomor WhatsApp Ketua Tim"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Alamat Email Ketua Tim</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Dimohon untuk mengisi email dengan benar, pengiriman LOA akan dikirim melalui email address ketua tim yang di isi.</p>
        </div>
        <input
          type="email"
          name="EMAIL_KETUA"
          className="input-field"
          placeholder="Masukan Email Ketua Tim"
          required
        />
      </div>
    </div>
  </section>
);

// Data Sekolah Section Component
const DataSekolahSection: React.FC = () => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">DATA SEKOLAH</h2>
      <div className="section-underline"></div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Nama Sekolah/Universitas</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Masukan nama sekolah dengan format sesuai urutan nama ketua dan anggota tim asal sekolah masing-masing, dengan format seperti berikut:</p>
          <div className="example-box">
            <div>SMA CERIA</div>
            <div>SMA BAHAGIA</div>
          </div>
        </div>
        <textarea
          name="NAMA_SEKOLAH"
          className="textarea-field"
          placeholder="Masukan Nama Sekolah/Universitas Anda"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Nomor Pokok Sekolah Nasional (NPSN)</label>
        <div className="field-note">
          <p><strong>Notes:</strong> Masukan NPSN jika masih bersekolah dengan sesuai urutan nama ketua dan anggota tim, dengan format seperti berikut:</p>
          <div className="example-box">
            <div>1201301</div>
            <div>1302402</div>
          </div>
        </div>
        <textarea
          name="NPSN"
          className="textarea-field"
          placeholder="Masukan Nomor Pokok Sekolah Nasional (NPSN)"
        />
      </div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Jenjang Pendidikan</label>
        <select name="JENJANG_PENDIDIKAN" className="select-field" required>
          <option value="">--Pilih Jenjang Pendidikan Anda--</option>
          <option value="MI/MIN">MI/MIN Sederajat (hanya untuk kategori MATEMATIKA)</option>
          <option value="MTs/MTsN">MTs/MTsN Sederajat (hanya untuk kategori MATEMATIKA)</option>
          <option value="MA/MAN">MA/MAN Sederajat</option>
        </select>
      </div>

      <div className="field-group">
        <label className="field-label">Provinsi</label>
        <input
          type="text"
          name="PROVINSI"
          className="input-field"
          placeholder="Masukan Provinsi Anda"
          required
        />
      </div>
    </div>
  </section>
);

// Data Pembimbing Section Component
const DataPembimbingSection: React.FC = () => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">DATA PEMBIMBING</h2>
      <div className="section-underline"></div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Nama Guru/Pembimbing</label>
        <textarea
          name="NAMA_PEMBIMBING"
          className="textarea-field"
          placeholder="Masukan Nama Guru/Pembimbing"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Nomor WhatsApp Guru/Pembimbing</label>
        <div className="field-note">
          <p>Harap tulis dengan kode telepon, contoh: (kode negara) (nomor telepon) +62 81770914xxx</p>
        </div>
        <input
          type="number"
          name="WHATSAPP_PEMBIMBING"
          className="input-field"
          placeholder="Masukan Nomor WhatsApp Guru/Pembimbing"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Alamat Email Guru/Pembimbing</label>
        <input
          type="email"
          name="EMAIL_PEMBIMBING"
          className="input-field"
          placeholder="Alamat Email Guru/Pembimbing"
          required
        />
      </div>
    </div>
  </section>
);

// Informasi Umum Section Component
const InformasiUmumSection: React.FC = () => (
  <section className="form-section">
    <div className="section-header">
      <h2 className="section-title">INFORMASI UMUM</h2>
      <div className="section-underline"></div>
    </div>

    <div className="field-grid">
      <div className="field-group">
        <label className="field-label">Alamat Lengkap</label>
        <div className="field-note">
          <p>Mohon tuliskan alamat lengkap (Nama Jalan, Nomor Rumah, RT & RW, Kecamatan, Kabupaten, Kota, Provinsi, Kode Pos)</p>
        </div>
        <textarea
          name="ALAMAT"
          className="textarea-field"
          placeholder="Masukan Alamat Lengkap Anda"
          required
        />
      </div>

      <div className="field-group">
        <label className="field-label">Sumber Informasi Kompetisi OS2MN 2026</label>
        <select name="SUMBER_INFORMASI" className="select-field" required>
          <option value="">--Pilih Sumber Informasi--</option>
          <option value="IYSA Instagram">IYSA Instagram</option>
          <option value="OS2MN Instagram">OS2MN Instagram</option>
          <option value="Pembimbing/Sekolah">Pembimbing/Sekolah</option>
          <option value="IYSA FaceBook">IYSA FaceBook</option>
          <option value="IYSA Linkedin">IYSA Linkedin</option>
          <option value="IYSA Website">IYSA Website</option>
          <option value="OS2MN Website">OS2MN Website</option>
          <option value="IYSA Email">IYSA Email</option>
          <option value="OS2MN Email">OS2MN Email</option>
          <option value="Acara Sebelumnya">Acara Sebelumnya</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>

      <div className="field-group">
        <label className="field-label">
          Jika Anda mendapatkan pendaftaran gratis dari acara sebelumnya atau kegiatan kunjungan sekolah sebelumnya, 
          harap lampirkan bukti dokumentasi
        </label>
        <input
          type="url"
          name="FILE"
          className="input-field"
          placeholder="Upload Link File Drive"
        />
      </div>
    </div>
  </section>
);

export default NationalOnlineComp;