export default function handler(req, res) {
  if (req.method === 'POST') {
    const { pesanUser } = req.body;

    // 1. Validasi: Cek apakah pesan kosong atau tidak ada
    if (!pesanUser || pesanUser.trim() === '') {
      return res.status(400).json({
        status: 'Gagal',
        pesan: 'Pesan tidak boleh kosong, bos!'
      });
    }

    // 2. Pengolahan Data di Backend
    const teksKapital = pesanUser.toUpperCase();
    const jumlahKarakter = pesanUser.length;
    const waktuDiterima = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    // 3. Mengirim kembali data yang sudah diolah
    return res.status(200).json({
      status: 'Sukses',
      informasi: 'Data berhasil divalidasi dan diolah oleh serverless!',
      hasilOlah: {
        pesanAsli: pesanUser,
        pesanKapital: teksKapital,
        panjangKarakter: jumlahKarakter,
        waktuServer: waktuDiterima
      }
    });
  }

  return res.status(200).json({
    info: 'Endpoint ini khusus untuk metode POST.'
  });
}
