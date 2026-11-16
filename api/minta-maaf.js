export default function handler(req, res) {
  if (req.method === 'POST') {
    const { namaPenerima, kesalahan, pesanTambahan, namaPengirim } = req.body;

    if (!namaPenerima || !kesalahan || !namaPengirim) {
      return res.status(400).json({
        status: 'Gagal',
        pesan: 'Nama penerima, kesalahan, dan nama pengirim wajib diisi ya!'
      });
    }

    // Draf surat permintaan maaf versi romantis & puitis yang dirangkai oleh server
    const drafKartuRomantis = {
      hiasan: "🌹✨💌✨🌹",
      judul: "Surat Ketulusan Hati & Permintaan Maaf",
      kepada: `Untuk Seseorang yang Berharga, ${namaPenerima}`,
      pembuka: "Halo kamu, izinkan aku menuliskan pesan kecil ini dari lubuk hati yang paling dalam...",
      isiPesan: `Aku tahu aku telah berbuat salah terkait "${kesalahan}". Aku menyadari hal itu membuatmu kecewa, dan sungguh, itu tidak pernah menjadi niatku. ${pesanTambahan ? `Catatan khusus dariku: "${pesanTambahan}".` : ''}`,
      janjiManis: "Beri aku kesempatan untuk memperbaiki semuanya, karena senyummu adalah hal yang paling ingin kulihat kembali.",
      penutup: `Dengan tulus dan penuh penyesalan,\n❤️ ${namaPengirim} ❤️`,
      waktuKirim: new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })
    };

    return res.status(200).json({
      status: 'Sukses',
      informasi: 'Kartu maaf romantis berhasil dirangkai oleh serverless!',
      kartu: drafKartuRomantis
    });
  }

  return res.status(200).json({
    info: 'Gunakan metode POST untuk mengirim data ke endpoint ini.'
  });
}
