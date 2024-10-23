"use client"; // Ini hanya diperlukan jika Anda menggunakan folder `app` di Next.js

import { useEffect, useState } from "react";
import { fetchData } from "../../lib/fetchData";

export default function Dewan() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(); // Panggil fungsi fetch dari `lib`
        setData(result); // Simpan hasil data ke state
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getData(); // Panggil fungsi getData untuk fetch
  }, []);

  // Handle loading dan error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data Foto</h1>
      <ul>
        {/* Render data dari API */}
        {data.foto.map((item) => (
          <li key={item.id}>
            <p>Nama: {item.nama}</p>
            <img src={item.url} alt={item.nama} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}
