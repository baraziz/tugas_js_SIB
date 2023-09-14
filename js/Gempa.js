class Gempa {
   lokasi;
   skala;
   efek;

   constructor(lokasi, skala) {
      this.lokasi = lokasi;
      this.skala = skala;
   }

   dampak() {
      if (this.dampak <= 2) {
         this.efek = "Tidak Terasa";
      } else if (this.skala <= 4) {
         this.efek = "Bangunan Retak";
      } else if (this.skala <= 6) {
         this.efek = "Bangunan Roboh";
      } else {
         this.efek = "Terjadi Tsunami";
      }

      document.write(`
      Lokasi Gempa : ${this.lokasi} <br>
      Skala : ${this.skala} <br>
      Dampak : ${this.efek} <br><br><br>
      `);
   }

}

const gempa1 = new Gempa('Maroko, Agadir', 5);
const gempa2 = new Gempa('Jepang, Tohoku', 9);
const gempa3 = new Gempa('Lombok Tengah', 3.9);
const gempa4 = new Gempa('Aceh', 5.2);
const gempa5 = new Gempa('Sumatra', 8.7);

gempa1.dampak();
gempa2.dampak();
gempa3.dampak();
gempa4.dampak();
gempa5.dampak();