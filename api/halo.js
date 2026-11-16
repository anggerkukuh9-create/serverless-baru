export default function handler(req, res) {
  const { nama = 'Teman' } = req.query;
  res.status(200).json({ 
    pesan: `Halo ${nama}! Serverless berhasil berjalan dari HP.` 
  });
}
