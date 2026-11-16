export default function handler(req, res) {
  // Mengambil angka dari parameter URL (contoh: /api/hitung?angka1=10&angka2=5)
  const angka1 = parseFloat(req.query.angka1);
  const angka2 = parseFloat(req.query.angka2);

  // Validasi: Pastikan keduanya adalah angka yang valid
  if (isNaN(angka1) || isNaN(angka2)) {
    return res.status(400).json({
      status: 'Gagal',
      pesan: 'Masukkan angka1 dan angka2 dengan benar pada URL. Contoh: /api/hitung?angka1=10&angka2=5'
    });
  }

  // Proses perhitungan
  const hasilJumlah = angka1 + angka2;

  return res.status(200).json({
    status: 'Sukses',
    operasi: 'Penjumlahan Serverless',
    nilai1: angka1,
    nilai2: angka2,
    hasil: hasilJumlah
  });
}
