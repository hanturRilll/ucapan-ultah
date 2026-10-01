let tombol = document.querySelector('.tombol-lock');
tombol.addEventListener('click', sembunyikan);

function hitungMundur() {
    let sekarang = new Date();
    let target = new Date("oct 2, 2026");
    let hari = document.querySelector('.hari');
    let selisih = target.getTime() - sekarang.getTime();
    hari.textContent = Math.floor(selisih / (1000 * 60 * 60 * 24));
    let jam = document.querySelector('.jam');
    jam.textContent = Math.floor(selisih / (1000 * 60 * 60)) % 24;
    let menit = document.querySelector('.menit');
    menit.textContent = Math.floor(selisih / (1000 * 60)) % 60;
    let detik = document.querySelector('.detik');
    detik.textContent = Math.floor(selisih / 1000) % 60;

    if (hari.textContent < 10) {
        hari.textContent = "00" + hari.textContent;
    } else if (hari.textContent < 100) {
        hari.textContent = "0" + hari.textContent;
    } else {
        hari.textContent = hari.textContent;
    }

    if (jam.textContent < 10) {
        jam.textContent = "0" + jam.textContent;
    } else {
        jam.textContent = jam.textContent;
    }

    if (menit.textContent < 10) {
        menit.textContent = "0" + menit.textContent;
    } else {
        menit.textContent = menit.textContent;
    }

    if (detik.textContent < 10) {
        detik.textContent = "0" + detik.textContent;
    } else {
        detik.textContent = detik.textContent;
    }

    if (sekarang >= target) {
        let lock = document.querySelector('.lock-atas');
        let unlock = document.querySelector('.unlock');
        let bawahLock = document.querySelector('.bawah-lock');
        let teks = document.querySelector('.teks');
        teks.textContent = 'Horee udah bisa dibuka';
        bawahLock.textContent = 'Udah kebukaaa cooo';
        lock.classList.add('hidden');
        unlock.classList.remove('hidden');
        tombol.disabled = false;
        tombol.textContent = 'Terbuka';
        hari.textContent = '000';
        jam.textContent = '00';
        menit.textContent = '00';
        detik.textContent = '00';
    } else {
        tombol.disabled = true;
    }


}
function sembunyikan() {
    let kotak = document.querySelector('.kotak-waktu');
    let bukaKartu = document.querySelector('.pembungkus-kartu');
    kotak.classList.add('hidden');
    bukaKartu.classList.remove('hidden');
}

hitungMundur();
setInterval(hitungMundur, 1000);


