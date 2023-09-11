function transaksi() {
   let form = document.getElementById('form');
   let nama = form.nama.value;
   let produk = form.produk.value;
   let jumlah = form.jumlah.value;

   let harga;
   switch (produk) {
      case "TV":
         harga = 2000000;
         break;
      case "AC":
         harga = 3000000;
         break;
      case "Kalkas":
         harga = 4000000;
         break;
   }

   let hargaKotor = harga * jumlah;

   let diskon;
   if (produk == "Kulkas" && jumlah >= 3) {
      diskon = hargaKotor * (30 / 100);
   } else if (produk == "AC" && jumlah >= 3) {
      diskon = hargaKotor * (20 / 100);
   } else {
      diskon = hargaKotor * (10 / 100);
   }

   let hargaDiskon = hargaKotor - diskon;
   let ppn = hargaDiskon * (10 / 100);

   let hargaBayar = hargaDiskon + ppn;

   alert(`
   Nama           : ${nama}
   Produk         : ${produk} 
   Harga Satuan   : ${harga} 
   Jumlah Produk  : ${jumlah}
   Harga Kotor    : ${hargaKotor}
   Diskon         : ${diskon}
   PPN            : ${ppn}
   Harga Bayar    : ${hargaBayar}
   `)
}