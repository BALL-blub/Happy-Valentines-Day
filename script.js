document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('hearts-container');
    const div1 = document.getElementById('div1');
    const div2 = document.getElementById('div2');
    const div3 = document.getElementById('div3');
    const div4 = document.getElementById('div4');
    const div5 = document.getElementById('div5');
    const div6 = document.getElementById('div6');
    const song = document.getElementById('song');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const nameInput = document.getElementById('name-input');
    const hopeInput = document.getElementById('hope-input');
    
    // Array 30 ucapan random untuk harapan terwujud
    const randomMessages = [
        "Semoga harapanmu segera terwujud dengan indah",
        "Aku yakin harapanmu akan menjadi kenyataan",
        "Harapanmu akan terwujud dengan cinta dan semangat",
        "Semoga langkahmu menuju harapan itu penuh kebahagiaan",
        "Harapanmu adalah doa yang akan dikabulkan",
        "Aku percaya harapanmu akan membawa kebaikan",
        "Semoga harapanmu terwujud di waktu yang tepat",
        "Harapanmu akan menjadi cerita indah di masa depan",
        "Aku mendoakan agar harapanmu segera tercapai",
        "Semoga harapanmu membawa senyum setiap hari",
        "Harapanmu adalah bintang yang akan bersinar terang",
        "Aku yakin takdir akan mewujudkan harapanmu",
        "Semoga perjalanan menuju harapan itu penuh petualangan",
        "Harapanmu akan menjadi motivasi untuk hari esok",
        "Aku mendoakan agar harapanmu terwujud dengan lancar",
        "Semoga harapanmu membawa kedamaian di hati",
        "Harapanmu adalah impian yang akan menjadi nyata",
        "Aku percaya harapanmu akan membawa keberuntungan",
        "Semoga harapanmu terwujud dengan cinta yang tulus",
        "Harapanmu akan menjadi cahaya di kegelapan",
        "Aku mendoakan agar harapanmu segera tercapai",
        "Semoga harapanmu membawa kegembiraan abadi",
        "Harapanmu adalah doa yang akan dijawab Tuhan",
        "Aku yakin harapanmu akan menjadi kenyataan indah",
        "Semoga perjuanganmu menuju harapan itu berbuah manis",
        "Harapanmu akan menjadi inspirasi bagi orang lain",
        "Aku mendoakan agar harapanmu terwujud dengan sempurna",
        "Semoga harapanmu membawa kebahagiaan sejati",
        "Harapanmu adalah mimpi yang akan menjadi realitas",
        "Aku percaya harapanmu akan membawa keajaiban"
    ];
    
    // Array 16 warna acak berbasis pink, putih, dan biru (dengan shades tambahan untuk variasi)
    const colors = [
        '#ffb6c1', // Light pink
        '#ff69b4', // Hot pink
        '#ffc0cb', // Pink
        '#ff1493', // Deep pink
        '#ffe4e1', // Misty rose
        '#ffb3ba', // Light blush
        '#ffffff', // White
        '#f5f5f5', // Whitesmoke
        '#fafafa', // Snow
        '#e6e6fa', // Lavender
        '#add8e6', // Light blue
        '#87ceeb', // Sky blue
        '#0000ff', // Blue
        '#4169e1', // Royal blue
        '#00bfff', // Deep sky blue
        '#1e90ff'  // Dodger blue
    ];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'falling-heart';
        
        // SVG untuk bentuk hati
        heart.innerHTML = `
            <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        `;
        
        // Pilih warna acak dari array (sekarang 16 warna)
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        heart.querySelector('svg path').style.fill = randomColor;
        
        // Rotasi akhir acak: -360° hingga 360° (bisa positif, negatif, atau 0)
        const randomRotation = Math.random() * 720 - 360; // -360 to 360
        heart.style.setProperty('--rotation', `${randomRotation}deg`);
        
        // Posisi horizontal acak
        heart.style.left = Math.random() * 100 + 'vw';
        
        // Durasi animasi acak (1-7 detik untuk lebih realistis)
        const duration = Math.random() * 6 + 1; // 1 to 7 seconds
        
        // Animasi tanpa delay (langsung jatuh)
        heart.style.animation = `fall ${duration}s linear infinite`;
        
        // Tambahkan ke container
        container.appendChild(heart);
        
        // Hapus hati setelah animasi selesai untuk menghindari akumulasi
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }
    
    // Buat hati baru setiap 300ms (sesuaikan untuk kepadatan hujan)
    setInterval(createHeart, 300);
    
    // Logika Transisi Div
    btn1.addEventListener('click', function() {
        div1.classList.add('hidden');
        div2.classList.remove('hidden');
    });
    
    btn2.addEventListener('click', function() {
        song.pause(); // Hentikan lagu
        song.currentTime = 0; // Reset lagu
        div2.classList.add('hidden');
        div3.classList.remove('hidden');
    });
    
    btn3.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name) {
            div3.classList.add('hidden');
            div4.querySelector('h1').textContent = `Terima Kasih, ${name}!`; // Ganti nama di ucapan
            div4.classList.remove('hidden');
        } else {
            alert('Tolong isi nama kamu dulu!');
        }
    });
    
    btn4.addEventListener('click', function() {
        div4.classList.add('hidden');
        div5.classList.remove('hidden');
    });
    
    btn5.addEventListener('click', function() {
        const hope = hopeInput.value.trim();
        const name = nameInput.value.trim();
        if (hope) {
            div5.classList.add('hidden');
            const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
            div6.querySelector('h1').textContent = `${name}, ${randomMessage}!`; // Ganti nama dan ucapan random
            div6.classList.remove('hidden');
        } else {
            alert('Tolong isi harapan kamu dulu!');
        }
    });
});