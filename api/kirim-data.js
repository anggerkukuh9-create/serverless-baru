export default function handler(req, res) {
  // Mengecek apakah metode yang digunakan adalah POST
  if (req.method === 'POST') {
    const { pesanUser = 'Tidak ada pesan' } = req.body;
    
    return res.status(200).json({
      status: 'Sukses',
      informasi: 'Data berhasil diterima oleh serverless!',
      pesanDiterima: pesanUser
    });
  }

  // Jika diakses lewat browser biasa (GET)
  return res.status(200).json({
    info: 'Endpoint ini khusus untuk metode POST. Kirim data menggunakan format JSON ya!'
  });
}
