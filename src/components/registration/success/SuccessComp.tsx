import Link from "next/link";

const SuccessComp: React.FC = () => {
  return (
    <div className="success-container">
      <div className="success-content">
        <div className="success-checkmark">✓</div>
        <h1 className="success-title">Registrasi Berhasil!</h1>
        <p className="success-message">
          Terima kasih telah mendaftar. Data pendaftaran Anda telah berhasil dikirim.
        </p>
        <Link href="/" className="success-button">Kembali ke Home</Link>
      </div>
    </div>
  );
};

export default SuccessComp;