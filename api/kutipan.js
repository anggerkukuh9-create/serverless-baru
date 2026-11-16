export default function handler(req, res) {
  // Kita bisa menggunakan fetch bawaan Node.js untuk mengambil data dari API publik gratis
  // Contoh menggunakan API publik untuk kutipan bijak acak (ZenQuotes)
  
  // Menggunakan async/await di serverless function Vercel
  return fetch('https://zenquotes.io/api/random')
    .then(response => response.json())
    .then(data => {
      // Mengambil data spesifik dari hasil API luar
      const kutipanAsli = data[0];
      
      return res.status(200).json({
        status: 'Sukses',
        sumber: 'API Eksternal (ZenQuotes)',
        pesan: 'Berhasil mengambil data dari internet!',
        dataKutipan: {
          kutipan: kutipanAsli.q,
          penulis: kutipanAsli.a
        }
      });
    })
    .catch(error => {
      return res.status(500).json({
        status: 'Gagal',
        pesan: 'Gagal mengambil data dari API eksternal.'
      });
    });
}
