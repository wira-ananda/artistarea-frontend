// "use client"; // Ini hanya diperlukan jika Anda menggunakan folder `app` di Next.js
// import useFetchData from "../../server/hooks/useFetchData"; // Pastikan path ini sesuai

// export default function Dewan() {
//   const { data, loading, error } = useFetchData(
//     "https://api.sheety.co/19d7975c8b9de9a1359c61369d16493d/abbulosibatangDatabase/fotodewan"
//   );

//   // Pastikan data adalah objek dan foto adalah array
//   const dataFoto = Array.isArray(data?.fotodewan) ? data.fotodewan : []; // Menghindari TypeError

//   return (
//     <div>
//       <h1>Data Foto</h1>
//       <ul>
//         {loading ? (
//           <p className="text-yellowColor">Loading articles...</p>
//         ) : error ? (
//           <p className="text-red-500">{error}</p>
//         ) : dataFoto.length > 0 ? ( // Cek jika dataFoto tidak kosong
//           dataFoto.map((item) => (
//             <li key={item.id}>
//               <p>Nama: {item.nama}</p>
//               {/* Pastikan menggunakan item.url untuk akses URL gambar */}
//               <img src={item.url} alt={item.nama} width="200" />
//             </li>
//           ))
//         ) : (
//           <p>No photos available.</p> // Pesan jika tidak ada foto
//         )}
//       </ul>
//     </div>
//   );
// }
