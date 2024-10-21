import { TbHistoryToggle } from "react-icons/tb";
import { MdEventNote } from "react-icons/md";

export default function About() {
  const foundingYear = 1987; // Replace with the actual founding year
  const currentYear = new Date().getFullYear();
  const calculatedAge = currentYear - foundingYear;

  return (
    <div className="w-full bg-black">
      <div className="w-[90%] mx-auto">
        <div className="w-full bottom-20  block md:flex justify-between">
          {/* Section 1: History */}
          <div className="w-full md:w-[50%] text-center">
            <div className="h-[13vh] bg-yellowColor flex items-center pl-[10%] gap-[3rem]">
              <TbHistoryToggle size={50} />
              <span className="block text-left">
                <p className="font-bold text-[2rem]">Selayang Pandang</p>
                <p className="font-medium text-[1.7rem]">Abbulosibatang</p>
              </span>
            </div>
            <div className="bg-black text-white py-[5%]">
              <div className="w-[90%] block mx-auto text-[1.5rem]">
                <p className="text-left">
                  <span className="font-bold">Ambalan Abbulosibatang</span> yang
                  juga dikenal sebagai Abb Scout adalah satuan pramuka penegak
                  yang berada di SMA Negeri 1 Gowa. Berada di Kwartir Daerah
                  Sulawesi Selatan, Kwartir Cabang Gowa, Kwartir Ranting Somba
                  Opu dengan nomor Gugus Depan 01.125 - 01.126.
                </p>
                <p className="text-left">
                  <span className="font-bold">Ambalan Abbulosibatang</span>{" "}
                  disepakati berdiri pada tanggal 14 Agustus 1987, dan masih
                  tetap konsisten berkarya selama {calculatedAge} tahun, dari
                  masa ke masa tetap menjadi teladan.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Events */}
          <div className="w-full md:w-[50%] text-center">
            <div className="h-[13vh] bg-yellowColor md:bg-white flex items-center pl-[10%] gap-[3rem] text-black">
              <MdEventNote size={50} />
              <span className="block text-left">
                <p className="font-bold text-[2rem]">Main Event</p>
                <p className="font-normal text-[1.7rem]">Abbulosibatang</p>
              </span>
            </div>
            <div className="bg-black text-white py-[5%]">
              <div className="w-[90%] block mx-auto text-[1.5rem]">
                <p className="text-left">
                  <span className="font-bold">ABB SCORE:</span> Lomba Tingkat
                  Penegak se Sulawesi Selatan dan Barat dengan model perkemahan,
                  kegiatan ini sudah dilaksanakan 2 kali, yaitu 2012 dan 2014.
                </p>
                <p className="text-left">
                  <span className="font-bold">LPKP:</span> Lomba Tingkat
                  Penggalang se Sulawesi Selatan yang fokus untuk menguji
                  keterampilan skill Pioneering adik-adik Penggalang, kegiatan
                  ini sudah dilaksanakan 2 kali, yaitu 2013 dan 2015.
                </p>
                <p className="text-left">
                  <span className="font-bold">ABB CAMP 159:</span> Kegiatan
                  kemah blok tahunan sebagai bentuk selebrasi bagi angkatan baru
                  di SMA Negeri 1 Gowa yang bertujuan untuk membentuk karakter
                  siswa-siswi SMA Negeri 1 Gowa, kegiatan ini sudah pernah
                  dilaksanakan 4 kali, yaitu 2017, 2021, 2022, dan 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
