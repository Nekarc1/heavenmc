
window.onload = function () {

    // Menampilkan atau menyembunyikan pilihan coin
    const category = document.getElementById("category");
const rankSection = document.getElementById("rankSection");
const coinSection = document.getElementById("coinSection");

const hargaText = document.getElementById("hargaText");
const produkText = document.getElementById("produkText");

const hargaRank = {
    "-": "0",
    "vip": "Rp10.000",
    "vip+": "Rp20.000",
    "premium": "Rp50.000",
    "premium+": "Rp100.000"
};

const hargaCoin = {
    "- Coin": "0",
    "50 Coin": "Rp5.000",
    "100 Coin": "Rp10.000",
    "300 Coin": "Rp30.000",
    "500 Coin": "Rp50.000"
};

category.addEventListener("change", function () {

    if (category.value === "rank") {
        rankSection.style.display = "block";
        coinSection.style.display = "none";
    } else {
        rankSection.style.display = "none";
        coinSection.style.display = "block";
    }

});

// Update harga saat memilih rank
document.getElementById("rank").addEventListener("change", function () {

    const produk = this.value;

    produkText.textContent =
        this.options[this.selectedIndex].text;

    hargaText.textContent = hargaRank[produk];

});

// Update harga saat memilih coin
document.getElementById("coin").addEventListener("change", function () {

    const produk = this.value;

    produkText.textContent = produk;
    hargaText.textContent = hargaCoin[produk];

});

    // Tombol pesan
    document.getElementById("btn").addEventListener("click", function () {

        const rank = document.getElementById("rank").value;
        const gamertag = document.getElementById("gamertag").value;
        const coin = document.getElementById("coin").value;

        if (gamertag.trim() === "") {
            alert("Masukkan gamertag terlebih dahulu!");
            return;
        }
        if(category.value === "coin" && coin === "- Coin"){
    alert("Pilih jumlah coin terlebih dahulu!");
    return;
}

        const nomorAdmin = "62895337364256"; // Ganti nomor WA admin
        if(category.value === "rank" && rank === "-"){
    alert("Pilih rank terlebih dahulu!");
    return;
}

        let produk;
let harga;

if(category.value === "rank"){
    produk = rank;
    harga = hargaRank[rank];
}else{
    produk = coin;
    harga = hargaCoin[coin];
}

const pesan =
`☁️ HeavenMC Store ☁️

Kategori : ${category.value}
Produk : ${produk}
Harga : ${harga}
Gamertag : ${gamertag}

Mohon diproses ya admin.`;

        window.open(
            "https://wa.me/" + nomorAdmin + "?text=" + encodeURIComponent(pesan),
            "_blank"
        );

    });

}

fetch("https://api.mcsrvstat.us/2/heavensmp.my.id:19131")
.then(res => res.json())
.then(data => {

    if(data.online){

        document.getElementById("status").innerHTML =
        `🟢 Online<br>
        👥 ${data.players.online}/${data.players.max} Players`;

    }else{

        document.getElementById("status").innerHTML =
        `🔴 Offline`;

    }

});
function copyIP() {

    navigator.clipboard.writeText("heavensmp.my.id:19131");

    document.getElementById("copyMsg").textContent =
    "✅ IP berhasil disalin!";
}