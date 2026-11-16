export default function handler(req, res) {
  // Kita gunakan metode POST untuk menerima data dari form web
  if (req.method === 'POST') {
    const { namaPenerima, kesalahan, pesanTambahan, namaPengirim } = req.body;

    // Validasi sederhana
    if (!namaPenerima || !kesalahan || !namaPengirim) {
      return res.status(400).json({
        status: 'Gagal',
        pesan: 'Nama penerima, kesalahan, dan nama pengirim wajib diisi!'
      });
    }

    // Mengolah data menjadi draf kartu permintaan maaf yang rapi di server
    const drafKartu = {
      judul: "💌 Surat Permintaan Maaf Resmi",
      kepada: `Untuk ${namaPenerima},`,
      isiPesan: `Aku ingin meminta maaf yang sebesar-besarnya atas kesalahanku terkait "${kesalahan}". ${pesanTambahan ? pesanTambahan : ''} Aku berjanji tidak akan mengulanginya lagi.`,
      penutup: `Tertanda,\n${namaPengirim}`,
      waktuDibuat: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
    };

    return res.status(200).json({
      status: 'Sukses',
      informasi: 'Kartu permintaan maaf berhasil digenerate oleh serverless!',
      kartu: drafKartu
    });
  }

  return res.status(200).json({
    info: 'Gunakan metode POST untuk mengirim data ke endpoint ini.'
  });
}
