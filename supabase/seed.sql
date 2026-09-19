-- Dzakirah.id seed data (generated from src/data/*.js)
-- Run AFTER supabase/schema.sql. Safe to re-run: it clears then re-inserts.

delete from public.articles;
delete from public.programs;
delete from public.events;
delete from public.facilitators;
delete from public.gallery;
delete from public.testimonials;

insert into public.articles (id, slug, title, excerpt, content, category, image, date, read_time, featured, published) values
  (1, 'mengenal-diri-langkah-pertama-menuju-pulih', 'Mengenal Diri: Langkah Pertama Menuju Pulih', 'Perjalanan pemulihan dimulai dari satu langkah sederhana: mengenal siapa diri kita sebenarnya. Dalam Islam, muhasabah adalah kunci untuk menemukan kedamaian...', 'Perjalanan pemulihan dimulai dari satu langkah sederhana: mengenal siapa diri kita sebenarnya. Dalam Islam, muhasabah adalah kunci untuk menemukan kedamaian.

Allah SWT berfirman dalam QS. Adz-Dzariyat ayat 21: "Dan (juga) pada dirimu sendiri. Maka apakah kamu tidak memperhatikan?"

## Mengapa Mengenal Diri Itu Penting?

Mengenal diri sendiri bukan sekadar tahu apa yang kita suka atau tidak suka. Lebih dari itu, ini tentang memahami pola pikir, emosi, dan reaksi kita terhadap berbagai situasi kehidupan.

## 5 Langkah Memulai Perjalanan Mengenal Diri

1. **Luangkan waktu untuk refleksi** — Sisihkan 10 menit sehari untuk merenungkan perasaan dan pikiran.
2. **Tulis jurnal harian** — Menuangkan isi hati ke dalam tulisan membantu kita melihat pola yang tersembunyi.
3. **Pelajari trigger emosi** — Apa yang membuat kita marah, sedih, atau cemas? Kenali pemicunya.
4. **Minta feedback** — Terkadang orang lain melihat hal yang tidak kita sadari tentang diri sendiri.
5. **Berdoa dan berdzikir** — Kembali kepada Allah adalah cara terbaik untuk menemukan jati diri.

Ingat, perjalanan ini bukanlah sprint melainkan marathon. Bersabarlah dengan diri sendiri, karena setiap langkah kecil adalah kemajuan yang bermakna.', 'Mental Health', '/images/blog-mental-health.png', '2026-05-15', '5 menit', true, true),
  (2, 'adab-taaruf-dalam-islam', 'Adab Taaruf dalam Islam: Panduan Lengkap', 'Taaruf yang syar''i bukan berarti kaku dan tanpa rasa. Mari belajar bagaimana Islam mengatur proses mengenal calon pasangan dengan indah...', 'Taaruf yang syar''i bukan berarti kaku dan tanpa rasa. Islam mengatur proses mengenal calon pasangan dengan cara yang penuh hikmah dan keindahan.

## Apa Itu Taaruf?

Taaruf secara bahasa berarti "saling mengenal". Dalam konteks pranikah, taaruf adalah proses mengenal calon pasangan hidup dengan tujuan yang jelas: menuju pernikahan yang diridhai Allah SWT.

## Prinsip-Prinsip Taaruf yang Syar''i

1. **Niat yang ikhlas** — Taaruf dilakukan semata-mata karena Allah.
2. **Melibatkan wali** — Kehadiran wali memberikan keberkahan dan perlindungan.
3. **Tidak berkhalwat** — Menjaga batasan syar''i dalam setiap pertemuan.
4. **Jujur dan terbuka** — Transparansi tentang diri sendiri adalah fondasi kepercayaan.
5. **Istikharah** — Meminta petunjuk Allah dalam setiap keputusan.

Semoga Allah memudahkan jalan setiap muslimah menuju pernikahan yang penuh keberkahan.', 'Pranikah', '/images/blog-pranikah.png', '2026-05-08', '7 menit', false, true),
  (3, 'gentle-parenting-perspektif-islami', 'Gentle Parenting dari Perspektif Islami', 'Bagaimana Rasulullah SAW memperlakukan anak-anak? Ternyata beliau adalah teladan sempurna gentle parenting jauh sebelum istilah ini populer...', 'Rasulullah SAW adalah teladan sempurna dalam mendidik anak. Beliau mencontohkan gentle parenting jauh sebelum istilah ini populer di kalangan psikolog modern.

## Teladan Rasulullah dalam Mendidik Anak

Dari Anas bin Malik RA: "Aku telah melayani Rasulullah SAW selama sepuluh tahun, dan beliau tidak pernah berkata ''uff'' kepadaku. Beliau tidak pernah berkata tentang sesuatu yang aku lakukan, ''Mengapa kamu melakukan ini?'' dan tidak pernah berkata tentang sesuatu yang tidak aku lakukan, ''Mengapa kamu tidak melakukan ini?''" (HR. Muslim)

## Prinsip Gentle Parenting Islami

1. **Kasih sayang tanpa syarat** — Mencintai anak bukan karena prestasi mereka.
2. **Komunikasi yang lembut** — "Berbicaralah yang baik atau diam" (HR. Bukhari Muslim).
3. **Memahami tahapan tumbuh kembang** — Setiap usia memiliki kebutuhan berbeda.
4. **Memberikan contoh, bukan hanya perintah** — Anak lebih banyak belajar dari apa yang mereka lihat.
5. **Doa yang tak putus** — Senjata terkuat orang tua.

Menjadi orang tua yang lembut bukan berarti lemah. Justru dibutuhkan kekuatan besar untuk konsisten dalam kelembutan.', 'Parenting', '/images/blog-parenting.png', '2026-04-28', '6 menit', false, true),
  (4, 'self-care-untuk-muslimah', 'Self-Care untuk Muslimah: Bukan Egois, Tapi Kebutuhan', 'Banyak muslimah merasa bersalah ketika meluangkan waktu untuk diri sendiri. Padahal, self-care adalah bagian dari menjaga amanah Allah...', 'Banyak muslimah merasa bersalah ketika meluangkan waktu untuk diri sendiri. Padahal, merawat diri adalah bagian dari menjaga amanah yang Allah berikan.

## Self-Care Bukan Egois

Nabi SAW bersabda: "Sesungguhnya tubuhmu memiliki hak atas dirimu" (HR. Bukhari). Ini menunjukkan bahwa Islam sangat memperhatikan keseimbangan dalam kehidupan.

## 7 Bentuk Self-Care Islami

1. **Wudhu sebagai terapi** — Air wudhu menenangkan jiwa.
2. **Sholat sebagai meditasi** — Momen khusyuk bersama Allah.
3. **Tilawah Al-Quran** — Obat hati yang paling mujarab.
4. **Olahraga ringan** — Jaga tubuh yang diamanahkan Allah.
5. **Istirahat cukup** — Tidur siang (qailulah) adalah sunnah.
6. **Bersilaturahmi** — Teman yang baik adalah obat kesepian.
7. **Batasi media sosial** — Jaga kesehatan mental dari konten negatif.

Ingat, kamu tidak bisa menuangkan dari gelas yang kosong. Isi dulu gelas dirimu agar bisa memberi kepada orang lain.', 'Mental Health', '/images/blog-mental-health.png', '2026-04-15', '4 menit', false, true),
  (5, 'manajemen-keuangan-rumah-tangga', 'Manajemen Keuangan Rumah Tangga Islami', 'Uang adalah salah satu sumber konflik terbesar dalam rumah tangga. Pelajari bagaimana Islam mengatur keuangan keluarga dengan bijak...', 'Manajemen keuangan yang baik adalah salah satu fondasi rumah tangga yang sakinah. Islam memberikan panduan yang lengkap tentang bagaimana mengatur harta dengan bijak dan penuh keberkahan.

## Prinsip Dasar Keuangan Islami

1. **Harta adalah titipan Allah** — Kita hanyalah pengelola, bukan pemilik sejati.
2. **Sedekah tidak mengurangi harta** — Justru membuka pintu rezeki.
3. **Hindari riba** — Cari alternatif syariah untuk setiap transaksi.
4. **Catat pemasukan dan pengeluaran** — Transparansi dalam keluarga.
5. **Siapkan dana darurat** — Ikhtiar menghadapi ketidakpastian.

Semoga setiap keluarga muslimah bisa mengelola keuangan dengan penuh keberkahan dan ridha Allah SWT.', 'Pranikah', '/images/blog-pranikah.png', '2026-04-01', '5 menit', false, true),
  (6, 'mendampingi-anak-tantrum', 'Cara Mendampingi Anak Tantrum dengan Sabar', 'Tantrum adalah bagian normal dari tumbuh kembang anak. Yang membedakan adalah bagaimana kita sebagai orang tua meresponnya...', 'Tantrum adalah ekspresi emosi yang wajar pada anak, terutama di usia 1-3 tahun. Yang penting bukan menghentikan tantrum, tapi bagaimana kita mendampinginya dengan penuh kesabaran.

## Memahami Tantrum

Anak tantrum bukan berarti anak nakal. Mereka sedang belajar mengelola emosi yang masih terlalu besar untuk mereka tangani sendiri.

## Tips Mendampingi Anak Tantrum

1. **Tetap tenang** — Anak membutuhkan kita sebagai anchor emosi mereka.
2. **Validasi perasaan** — "Mama tahu kamu sedih. Mama ada di sini."
3. **Jangan mempermalukan** — Hindari memarahi di depan umum.
4. **Peluk jika anak mau** — Sentuhan fisik memberikan rasa aman.
5. **Bicarakan setelah tenang** — Ajarkan nama emosi yang mereka rasakan.
6. **Berdoa bersama** — Ajarkan anak untuk kembali kepada Allah.

"Rabbana hab lana min azwajina wa dzurriyyatina qurrata a''yun..." — Ya Allah, anugerahkan kepada kami pasangan dan keturunan yang menjadi penyejuk mata kami.', 'Parenting', '/images/blog-parenting.png', '2026-03-20', '6 menit', false, true),
  (7, 'mengatasi-overthinking-dan-burnout-muslimah', 'Mengatasi Overthinking & Burnout bagi Muslimah', 'Apakah kamu sering merasa lelah mental karena pikiran yang terus berputar? Islam dan psikologi menawarkan solusi untuk menenangkan jiwamu...', 'Apakah kamu sering merasa lelah mental karena pikiran yang terus berputar? Keadaan ini sering kita kenal sebagai overthinking yang jika dibiarkan dapat memicu burnout (kelelahan mental dan fisik yang ekstrem).

Sebagai muslimah yang aktif belajar dan bekerja, menjaga kesehatan jiwa adalah bagian dari amanah merawat diri.

## Hubungan Overthinking dan Burnout

Overthinking memakan energi mental kita secara diam-diam. Saat otak terus memikirkan skenario terburuk yang belum terjadi, tubuh merespon dengan melepaskan hormon stres, yang lambat laun memicu kelelahan fisik.

## Langkah Mengatasinya secara Psikologis & Islami

1. **Latihan Grounding & Dzikir:** Saat pikiran melayang, tarik napas dalam-dalam, rasakan pijakan kakimu, dan ucapkan istighfar secara perlahan untuk mengembalikan kesadaran ke momen saat ini.
2. **Batasi Asupan Informasi:** Kurangi scrolling media sosial yang memicu perbandingan sosial (hasad) dan kecemasan berlebih.
3. **Pahami Batas Kendali Diri:** Bedakan antara hal yang bisa kamu usahakan dan hal yang mutlak menjadi ketetapan Allah. Di sinilah indahnya konsep tawakal.
4. **Berbagi Cerita:** Jangan simpan bebanmu sendiri. Bergabunglah dalam sharing circle Dzakirah untuk melepaskan penat bersama sesama muslimah yang mendukungmu.', 'Mental Health', '/images/blog-mental-health.png', '2026-06-10', '5 menit', true, true),
  (8, 'taaruf-vs-pacaran-islami', 'Ta''aruf vs Pacaran Islami: Batasan yang Benar', 'Banyak yang menyamakan proses ta''aruf dengan pacaran berlabel islami. Mari pahami perbedaan mendasar dan batasan syar''inya...', 'Seiring maraknya tren hijrah, istilah ta''aruf semakin sering terdengar. Namun, sering kali terjadi kesalahpahaman di mana proses pengenalan pranikah ini dipraktikkan layaknya pacaran biasa yang hanya diganti labelnya menjadi "pacaran islami".

Mari kita telaah perbedaan esensial agar ikhtiar menjemput jodoh tetap dalam koridor yang diridhai Allah SWT.

## Perbedaan Mendasar Ta''aruf vs Pacaran

1. **Kehadiran Perantara (Wali/Mediator):** Dalam ta''aruf yang syar''i, komunikasi selalu dimediasi oleh perantara terpercaya (wali, ustadz, atau mentor). Tidak ada ruang untuk bertukar pesan pribadi secara berdua-duaan tanpa pengawasan.
2. **Kejelasan Niat dan Waktu:** Ta''aruf dilakukan dengan target pernikahan yang jelas dan dalam jangka waktu yang terukur. Jika tidak cocok, proses segera dihentikan secara baik-baik tanpa membuang waktu.
3. **Fokus pada Data Objektif:** Ta''aruf mengutamakan pertukaran biodata (cv ta''aruf) yang jujur tentang prinsip hidup, kesehatan, finansial, dan visi misi keluarga, bukan obrolan emosional atau romansa semu.

## Mengapa Menjaga Batasan Itu Penting?

Menjaga batasan pranikah adalah perlindungan bagi hatimu. Menghindari khalwat (berdua-duan) dan menjaga lisan dari rayuan sebelum ijab kabul akan menyelamatkan pernikahanmu dari hilangnya keberkahan awal.', 'Pranikah', '/images/blog-pranikah.png', '2026-06-18', '6 menit', false, true),
  (9, 'menjaga-kesehatan-mental-ibu', 'Menjaga Kesehatan Mental Ibu: Kunci Harmonis Keluarga', 'Ibu yang bahagia melahirkan generasi yang bahagia. Mengapa menjaga kesehatan mental seorang ibu adalah prioritas utama rumah tangga...', 'Ada ungkapan indah yang sering kita dengar: "Ibu adalah madrasah pertama bagi anak-anaknya." Namun, bagaimana seorang ibu bisa mengajar dan mengasuh dengan penuh kasih jika tangki emosionalnya sendiri kosong dan jiwanya lelah?

Menjaga kesehatan mental ibu bukanlah bentuk keegoisan, melainkan prioritas utama demi tegaknya keharmonisan keluarga.

## Mengapa Mental Ibu Begitu Krusial?

Seorang ibu yang mengalami stres kronis atau depresi pasca melahirkan (postpartum depression) akan kesulitan membangun bonding emosional yang sehat dengan anaknya. Anak-anak menangkap getaran emosi ibunya; jika ibu merasa cemas, anak cenderung rewel dan cemas pula.

## Tips Menjaga Tangki Emosi Ibu Tetap Penuh

1. **Bangun Komunikasi dengan Suami:** Suami adalah support system nomor satu. Sampaikan kelelahanmu tanpa rasa bersalah, dan sepakati pembagian tugas rumah tangga secara adil.
2. **Luangkan Waktu untuk Diri Sendiri (Micro Self-Care):** Cukup 15 menit sehari untuk menikmati teh hangat, membaca Al-Quran dengan tenang, atau sekadar melakukan relaksasi napas saat anak tidur.
3. **Bergabung dengan Komunitas Pendukung:** Di Dzakirah, kami menyediakan support group sesama ibu untuk saling menyemangati, bertukar tips parenting, dan berbagi tawa tanpa adanya penghakiman.', 'Parenting', '/images/blog-parenting.png', '2026-06-22', '5 menit', false, true);

insert into public.programs (id, slug, title, tagline, focus, icon, color, color_light, description, audience, long_description, objectives, schedule, format, published) values
  (1, 'mental-health', 'Mental Health', 'Menyembuhkan Diri, Menemukan Kedamaian', 'Pemulihan Diri', 'Brain', '#E592A1', '#FAEAEB', 'Program kesehatan mental yang dirancang khusus untuk muslimah. Kami menyediakan ruang aman untuk berbagi, belajar mengenali emosi, dan menemukan ketenangan melalui pendekatan islami.', '["Muslimah yang mengalami kecemasan atau burnout","Siapa saja yang ingin belajar mengenali emosi & regulasi diri","Muslimah yang ingin menyembuhkan luka batin (self-healing)"]', 'Kesehatan mental adalah fondasi dari kehidupan yang bermakna. Di Dzakirah, kami percaya bahwa setiap perempuan berhak mendapatkan ruang untuk pulih dan tumbuh.

Program Mental Health kami mencakup:
• Kajian rutin tentang kesehatan mental dalam perspektif Islam
• Sesi sharing circle yang aman dan terpercaya
• Workshop pengenalan emosi dan self-regulation
• Konsultasi one-on-one dengan fasilitator terlatih
• Journaling therapy dan expressive writing

Kami menggunakan pendekatan yang menggabungkan ilmu psikologi modern dengan nilai-nilai Al-Quran dan Sunnah, sehingga setiap muslimah bisa menemukan ketenangan yang hakiki.', '["Membantu muslimah mengenali dan memahami emosi mereka","Menyediakan ruang aman untuk berbagi pengalaman","Mengajarkan teknik self-care berbasis islami","Membangun komunitas yang saling mendukung"]', 'Setiap Sabtu, 09:00 - 11:00 WIB', 'Online via Zoom & Offline di Bandar Lampung', true),
  (2, 'pranikah', 'Pranikah', 'Mempersiapkan Kehidupan Baru dengan Ilmu', 'Persiapan Keluarga', 'Heart', '#7A8E6B', '#D4DEC9', 'Program persiapan pernikahan untuk muslimah yang ingin membangun rumah tangga sakinah, mawaddah, wa rahmah. Belajar dari ahli dan praktisi berpengalaman.', '["Single muslimah yang ingin membekali diri sebelum menikah","Muslimah yang sedang berproses taaruf atau khitbah","Mereka yang ingin memahami fiqih munakahat & komunikasi pasutri"]', 'Pernikahan adalah ibadah yang indah, dan persiapan yang matang adalah kunci keberhasilannya. Program Pranikah Dzakirah hadir untuk membekali muslimah dengan ilmu dan kesiapan sebelum melangkah ke jenjang pernikahan.

Program Pranikah kami mencakup:
• Fiqih Munakahat — hukum dan adab pernikahan dalam Islam
• Komunikasi efektif dalam hubungan
• Manajemen keuangan rumah tangga
• Persiapan mental dan emosional
• Taaruf yang sehat dan syar''i
• Memahami peran suami-istri dalam Islam

Setiap sesi dibawakan oleh ustadzah dan praktisi yang berpengalaman di bidangnya, dengan pendekatan yang hangat dan relevan untuk muslimah masa kini.', '["Membekali muslimah dengan ilmu pernikahan islami","Membangun kesiapan mental dan emosional sebelum menikah","Mengajarkan komunikasi dan manajemen konflik","Memberikan pemahaman tentang hak dan kewajiban dalam pernikahan"]', 'Setiap Minggu, 13:00 - 15:00 WIB', 'Online via Zoom & Offline di Bandar Lampung', true),
  (3, 'parenting', 'Parenting', 'Menjadi Orang Tua yang Luar Biasa', 'Kepengasuhan', 'Users', '#C49B8C', '#F0E0D8', 'Program parenting islami untuk ibu muslimah. Belajar membesarkan generasi sholih/sholihah dengan pendekatan yang penuh kasih sayang dan berbasis dalil.', '["Ibu muslimah yang ingin mendidik anak di era digital","Calon ibu yang ingin mempelajari gentle parenting berbasis Islam","Ibu yang butuh support system & menyelaraskan kesehatan mental"]', 'Menjadi ibu adalah amanah termulia dari Allah SWT. Program Parenting Dzakirah hadir untuk mendampingi setiap ibu dalam perjalanan membesarkan anak-anak yang sholih dan sholihah.

Program Parenting kami mencakup:
• Mendidik anak sesuai tahapan usia dalam Islam
• Gentle parenting dengan perspektif islami
• Membangun bonding yang kuat dengan anak
• Mengatasi tantangan parenting sehari-hari
• Mendidik anak di era digital
• Self-care untuk ibu — karena ibu yang sehat melahirkan generasi yang sehat

Kami menghadirkan narasumber dari berbagai latar belakang: psikolog anak, ustadzah, dan ibu-ibu berpengalaman yang siap berbagi ilmu dan pengalaman.', '["Membekali ibu dengan ilmu parenting islami yang praktis","Mengajarkan teknik mendidik anak sesuai tahapan usia","Menyediakan support system untuk ibu-ibu muslimah","Membantu ibu merawat kesehatan mental mereka sendiri"]', 'Setiap Sabtu, 13:00 - 15:00 WIB', 'Online via Zoom & Offline di Bandar Lampung', true);

insert into public.events (id, title, date, time, location, category, description, image, published) values
  (1, 'Sharing Circle: Mengelola Kecemasan', '2026-06-07', '09:00 - 11:00 WIB', 'Offline — Bandar Lampung', 'Mental Health', 'Sesi sharing circle yang aman untuk berbagi pengalaman dan belajar teknik mengelola kecemasan sehari-hari. Dipandu oleh fasilitator terlatih dengan pendekatan islami.', null, true),
  (2, 'Workshop Pranikah: Komunikasi Efektif', '2026-06-14', '13:00 - 15:00 WIB', 'Online via Zoom', 'Pranikah', 'Workshop interaktif tentang bagaimana membangun komunikasi yang sehat dalam hubungan pranikah. Belajar dari ustadzah dan konselor berpengalaman.', null, true),
  (3, 'Kajian Parenting: Mendidik Anak di Era Digital', '2026-06-21', '13:00 - 15:00 WIB', 'Offline — Bandar Lampung', 'Parenting', 'Bagaimana cara bijak mendampingi anak di era digital? Belajar tips dan trik parenting islami untuk menghadapi tantangan teknologi.', null, true),
  (4, 'Journaling Therapy: Menulis untuk Pulih', '2026-05-10', '09:00 - 11:00 WIB', 'Offline — Bandar Lampung', 'Mental Health', 'Sesi journaling therapy yang membantu menuangkan perasaan melalui tulisan. Terapi yang menyembuhkan melalui kata-kata.', null, true),
  (5, 'Talkshow: Persiapan Mental Sebelum Menikah', '2026-04-20', '10:00 - 12:00 WIB', 'Online via Zoom', 'Pranikah', 'Talkshow interaktif bersama psikolog dan ustadzah tentang kesiapan mental dan emosional menghadapi pernikahan.', null, true),
  (6, 'Gathering Muslimah: Silaturahmi & Self-Care', '2026-03-15', '08:00 - 12:00 WIB', 'Offline — Bandar Lampung', 'Komunitas', 'Acara silaturahmi bulanan komunitas Dzakirah yang menggabungkan kajian ringan, sesi self-care, dan makan bersama.', null, true);

insert into public.facilitators (id, name, role, specialty, bio, avatar, published) values
  (1, 'Despa Putri Lestari, S.Psi', 'Founder & Certified Counselor', 'Self Healing & Mental Health Support', 'Pemberdaya perempuan yang mendirikan Dzakirah.id sebagai wadah aman bagi muslimah untuk memproses luka batin dan menemukan ketenangan sejati.', '🌸', true),
  (2, 'Ustadzah Khansa Salsabila, Lc.', 'Islamic Law & Sharia Advisor', 'Fiqih Wanita & Fiqih Munakahat', 'Lulusan Al-Azhar Kairo yang aktif memberikan bimbingan syar''i terkait persiapan pernikahan, hak kewajiban suami istri, dan adab rumah tangga.', '📖', true),
  (3, 'Dr. Sarah Annisa, Sp.KJ', 'Mental Health Consultant', 'Clinical Psychiatry & Psychology Integration', 'Dokter spesialis kedokteran jiwa yang mendampingi program kesehatan mental Dzakirah agar selaras dengan sains kedokteran dan ukhuwah islamiyah.', '🧠', true),
  (4, 'Rahma Wardhani, M.Psi., Psikolog', 'Child & Family Psychologist', 'Gentle Parenting & Family Counseling', 'Psikolog keluarga yang membimbing para ibu muda dalam merespon tantrum anak dan menjaga kesehatan mental ibu di tengah tantangan pengasuhan modern.', '🤱', true);

insert into public.gallery (id, title, event, date, category, image, published) values
  (1, 'Sharing Circle — Mengelola Kecemasan', 'Kajian Mental Health', '2026-03-15', 'Mental Health', '/images/blog-mental-health.png', true),
  (2, 'Workshop Pranikah — Komunikasi Sehat', 'Workshop Pranikah Batch 5', '2026-02-20', 'Pranikah', '/images/blog-pranikah.png', true),
  (3, 'Gathering Muslimah — Silaturahmi', 'Gathering Bulanan', '2026-03-01', 'Komunitas', '/images/gallery-community.png', true),
  (4, 'Kajian Parenting — Gentle Parenting', 'Kajian Parenting Batch 3', '2026-01-18', 'Parenting', '/images/blog-parenting.png', true),
  (5, 'Belajar Sedekah — Jumat Berkah', 'Program Jumat Berkah', '2026-02-14', 'Belajar Sedekah', '/images/gallery-community.png', true),
  (6, 'Journaling Therapy — Menulis untuk Pulih', 'Workshop Journaling', '2026-01-25', 'Mental Health', '/images/blog-mental-health.png', true),
  (7, 'Talkshow — Kesiapan Mental Menikah', 'Talkshow Pranikah', '2025-12-10', 'Pranikah', '/images/blog-pranikah.png', true),
  (8, 'Self-Care Day — Me Time Islami', 'Self-Care Workshop', '2025-12-20', 'Komunitas', '/images/gallery-community.png', true),
  (9, 'Bakti Sosial — Berbagi Sembako', 'Program Belajar Sedekah', '2025-11-15', 'Belajar Sedekah', '/images/gallery-community.png', true),
  (10, 'Kajian Akhir Tahun — Muhasabah', 'Kajian Spesial Akhir Tahun', '2025-12-28', 'Komunitas', '/images/gallery-community.png', true),
  (11, 'Workshop — Mengenali Emosi', 'Workshop Mental Health', '2025-11-08', 'Mental Health', '/images/blog-mental-health.png', true),
  (12, 'Parenting Class — Mendidik Anak Sholih', 'Kelas Parenting Batch 2', '2025-10-22', 'Parenting', '/images/blog-parenting.png', true);

insert into public.testimonials (id, name, is_anonymous, text, program, date, published) values
  (1, 'Aisyah', false, 'Dzakirah benar-benar menjadi ruang pulih untuk saya. Di sini saya belajar bahwa menangis bukan berarti lemah, tapi itu adalah cara hati untuk bernafas. Terima kasih sudah memberikan tempat yang aman 🌷', 'Mental Health', '2026-04-20', true),
  (2, null, true, 'Setelah mengikuti program pranikah, saya jadi lebih paham tentang arti kesiapan menikah. Bukan hanya soal materi, tapi juga kesiapan mental dan ilmu. Jazakillahu khairan, Dzakirah!', 'Pranikah', '2026-04-15', true),
  (3, 'Fatimah', false, 'Sebagai ibu baru, saya sering merasa overwhelmed. Program parenting Dzakirah mengajarkan saya bahwa tidak ada ibu yang sempurna, yang ada adalah ibu yang terus belajar. ❤️', 'Parenting', '2026-04-10', true),
  (4, 'Khadijah', false, 'Saya bergabung sejak 2021 dan Dzakirah sudah seperti keluarga kedua. Setiap kajian selalu membawa insight baru. Komunitasnya hangat sekali!', 'Komunitas', '2026-03-28', true),
  (5, null, true, 'Dulu saya takut untuk bercerita tentang masalah mental health saya. Tapi di sharing circle Dzakirah, saya merasa diterima apa adanya. Tanpa judgement, hanya pelukan dan doa. 🤲', 'Mental Health', '2026-03-20', true),
  (6, 'Zahra', false, 'Workshop gentle parenting-nya luar biasa! Sekarang saya lebih sabar menghadapi tantrum anak. Ternyata yang perlu berubah bukan hanya anak, tapi juga cara kita merespon.', 'Parenting', '2026-03-15', true),
  (7, 'Maryam', false, 'Ikut program belajar sedekah Dzakirah membuka mata saya bahwa berbagi bukan soal nominal, tapi soal keikhlasan. Alhamdulillah, semoga terus berkah! 🌸', 'Belajar Sedekah', '2026-03-10', true),
  (8, null, true, 'Dzakirah mengajarkan saya bahwa healing itu bukan instant. Butuh proses, butuh waktu, dan butuh lingkungan yang mendukung. Dan Dzakirah adalah lingkungan itu.', 'Mental Health', '2026-02-28', true);

-- resync sequences after explicit id inserts
select setval(pg_get_serial_sequence('public.articles','id'), (select coalesce(max(id),1) from public.articles));
select setval(pg_get_serial_sequence('public.programs','id'), (select coalesce(max(id),1) from public.programs));
select setval(pg_get_serial_sequence('public.events','id'), (select coalesce(max(id),1) from public.events));
select setval(pg_get_serial_sequence('public.facilitators','id'), (select coalesce(max(id),1) from public.facilitators));
select setval(pg_get_serial_sequence('public.gallery','id'), (select coalesce(max(id),1) from public.gallery));
select setval(pg_get_serial_sequence('public.testimonials','id'), (select coalesce(max(id),1) from public.testimonials));
