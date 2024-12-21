//Peta lokasi
function initMap() {
    const mapOptions = {
        center: { lat: -7.250445, lng: 112.768845 }, // Koordinat kota
        zoom: 12,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Menambahkan event listener untuk memuat peta saat halaman dimuat
window.onload = function() {
    initMap();
};

//Ulasan Pengunjung
const reviewForm = document.getElementById('reviewForm');
const reviewContainer = document.querySelector('.review-container');

reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reviewerName = document.getElementById('reviewerName').value;
    const reviewText = document.getElementById('reviewText').value;

    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `<p>"${reviewText}"</p><footer>- ${reviewerName}</footer>`;
    reviewContainer.appendChild(blockquote);

    reviewForm.reset();
});


// Kontak Kami
// Menambahkan event listener untuk contactForm
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const name = document.getElementById('name').value; // Ambil nilai dari input nama
    const email = document.getElementById('email').value; // Ambil nilai dari input email
    const message = document.getElementById('message').value; // Ambil nilai dari input pesan

    // Tampilkan alert dengan informasi yang diisi
    alert(`Nama: ${name}\nEmail: ${email}\nPesan: ${message}`);

    // Reset form setelah alert
    contactForm.reset();
});

//scrol button
let calcScrollValue = () => {
    let scrollProgress = document.getElementById
    ("progress");
    let progressValue = document.getElementById
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if(pos > 100){
        scrollProgress.style.display = "grid";
    } else{
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient( #005d69 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = function() {
    const progress = document.getElementById('progress');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        progress.style.display = "block"; // Tampilkan ikon
    } else {
        progress.style.display = "none"; // Sembunyikan ikon
    }
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;