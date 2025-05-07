<!DOCTYPE html>
<html lang="sw">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name='viewport' content='width=device-width, initial-scale=1'/>
  <title>Kanisa la Kiinjili la Kilutheri Tanzania - Dayosisi ya Konde Usharika wa Ruanda</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary-color: #4b0082; /* dark purple */
      --accent-color: #6a0dad; /* lighter purple */
      --light-color: #f5f5f5; /* very light grey */
      --white-color: #ffffff;
      --dark-color: #1c1c1c; /* very dark grey / black */
      --text-color: #333333;
      --section-bg-light: #fcfcfc; /* even lighter grey for alternating sections */
      --border-color: #e0e0e0;
      --success-color: #28a745;
      --info-color: #17a2b8;
    }

    body {
      font-family: 'Roboto', sans-serif;
      background-color: var(--white-color);
      color: var(--text-color);
      scroll-behavior: smooth;
      line-height: 1.7;
      overflow-x: hidden;
      padding-top: 70px; /* Adjusted for fixed navbar height */
    }

    h1, h2, h3, h4, h5, h6, .navbar-brand, .card-title {
      font-family: 'Poppins', sans-serif;
    }

    .navbar {
      background-color: var(--primary-color);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      min-height: 70px;
    }

    .navbar-brand {
      display: flex; /* For aligning logo and text */
      align-items: center; /* Vertically center logo and text */
      color: var(--white-color) !important;
      font-weight: 500;
    }
    .navbar-logo-img { /* Style for the logo in navbar */
        height: 40px; /* Adjust as needed */
        width: auto;
        margin-right: 10px; /* Space between logo and text */
        border-radius: 4px; /* Optional: if you want slightly rounded corners on logo */
    }

    .nav-link {
        margin-left: 1px;
        margin-right: 1px;
        padding: 0.5rem 0.6rem !important;
        font-size: 0.9rem;
        border-radius: 4px;
        transition: background-color 0.3s ease, color 0.3s ease;
        color: var(--white-color) !important;
        font-weight: 500;
    }

    .navbar:hover {
      background-color: var(--accent-color);
    }

    .nav-link:hover, .nav-link.active {
      background-color: rgba(255, 255, 255, 0.1);
      color: var(--white-color) !important;
    }

    header.hero {
      background: url('images/hero-bg.jpg') center center/cover no-repeat;
      min-height: calc(100vh - 70px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--white-color);
      text-align: center;
      padding: 3rem 1.5rem;
      position: relative;
      overflow: hidden;
    }

    header.hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(50, 0, 90, 0.7);
      z-index: 1;
    }

    header.hero .container {
        position: relative;
        z-index: 2;
        animation: fadeIn 1.5s ease-in-out;
    }

    .hero-church-image {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 25px;
        border: 4px solid var(--white-color);
        background-color: var(--white-color);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        animation: fadeUp 1.8s ease-out 0.3s backwards;
    }

    header.hero h1 {
      font-size: clamp(2.5rem, 5vw, 4.0rem);
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
      animation: fadeUp 2s ease-out 0.5s backwards;
    }

    header.hero p.lead {
      font-size: clamp(1.1rem, 2.5vw, 1.5rem);
      font-weight: 300;
      margin-bottom: 30px;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
      animation: fadeUp 2.2s ease-out 0.7s backwards;
    }

    header.hero a.btn {
      padding: 14px 35px;
      font-size: 1.1rem;
      font-weight: 600;
      background-color: var(--accent-color);
      color: var(--white-color);
      border: none;
      border-radius: 50px;
      text-transform: uppercase;
      transition: background-color 0.3s ease, transform 0.3s ease;
      animation: fadeUp 2.5s ease-out 0.9s backwards;
    }

    header.hero a.btn:hover {
      background-color: var(--primary-color);
      transform: translateY(-3px);
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fadeUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    section {
        padding: 70px 0;
    }

    section:nth-of-type(odd):not(header) {
        background-color: var(--white-color);
    }
    section:nth-of-type(even):not(header) {
        background-color: var(--section-bg-light);
    }

    .section-title {
      text-align: center;
      color: var(--primary-color);
      margin-bottom: 50px;
      position: relative;
      font-size: 2.5rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .section-title::after {
      content: '';
      width: 70px;
      height: 4px;
      background: var(--accent-color);
      position: absolute;
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 2px;
    }

    .card {
      border: 1px solid var(--border-color);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
      border-radius: 10px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      overflow: hidden;
      height: 100%;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
    }

    .card-body {
      text-align: center;
      padding: 25px;
    }

    .card-icon {
      font-size: 3rem;
      color: var(--accent-color);
      margin-bottom: 20px;
    }

    .card-title {
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: 12px;
      color: var(--primary-color);
    }

    .card-text {
      font-size: 0.95rem;
      color: var(--text-color);
      line-height: 1.6;
    }

    .about-section p, .pastor-welcome-content p, .leadership-section p {
        font-size: 1.05rem;
        line-height: 1.8;
        text-align: left;
    }

    .pastor-welcome-content .pastor-image {
        width: 200px; /* Desired width for square image */
        height: 200px; /* Desired height for square image */
        border-radius: 8px; /* Square with rounded corners */
        object-fit: cover; /* Ensures image covers the area, might crop */
        margin-bottom: 20px;
        border: 5px solid var(--accent-color);
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media (min-width: 768px) {
      .pastor-welcome-content .pastor-image {
        float: left;
        margin-left: 0;
        margin-right: 25px;
        margin-bottom: 10px;
      }
    }

    .leadership-card {
        background-color: var(--white-color);
        border: 1px solid var(--border-color);
        border-left: 5px solid var(--accent-color);
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        text-align: left;
        height: 100%; /* Ensure cards in a row have same height */
    }
    .leadership-card h5 {
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 15px;
        font-size: 1.3rem;
        text-align: center;
    }
     .leadership-card p {
        margin-bottom: 5px;
        font-size: 1rem;
        line-height: 1.6;
    }
    .leadership-card .leader-title {
        font-weight: 500;
        color: var(--accent-color);
    }
    .leader-image {
        width: 140px; /* Width for square leader image */
        height: 140px; /* Height for square leader image */
        border-radius: 8px; /* Square with rounded corners */
        object-fit: cover; /* Crop to fit if not square */
        margin: 0 auto 15px auto;
        display: block;
        border: 3px solid var(--accent-color);
    }

    /* Vikundi na Idara Section Styling */
    .kikundi-info-card {
        background-color: var(--white-color);
        border: 1px solid var(--border-color);
        padding: 25px;
        border-radius: 10px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.07);
    }
    .kikundi-detail-item {
        margin-bottom: 2rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--border-color);
    }
    .kikundi-detail-item:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
    .kikundi-detail-item h4 {
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 0.75rem;
    }
    .kikundi-detail-item p {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 0.5rem;
    }
    .kikundi-detail-item p strong {
        color: var(--accent-color);
    }


    .project-item {
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 25px;
      box-shadow: 0 6px 12px rgba(75, 0, 130, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .project-item:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 20px rgba(75, 0, 130, 0.3);
    }
    .project-item h5 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .project-images img {
        border: 2px solid var(--accent-color);
        margin-bottom: 5px;
    }
    .project-images h6 {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 10px;
    }

    .announcement-item, .event-item {
      background-color: var(--primary-color);
      color: var(--white-color);
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 25px;
      box-shadow: 0 6px 12px rgba(75, 0, 130, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .announcement-item a, .event-item a {
        color: var(--light-color);
        text-decoration: underline;
    }
    .announcement-item a:hover, .event-item a:hover {
        color: var(--white-color);
    }
    .announcement-item:hover, .event-item:hover {
      transform: translateY(-6px);
      box-shadow: 0 10px 20px rgba(75, 0, 130, 0.3);
    }
    .announcement-item h5, .event-item h4 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .event-item p { margin-bottom: 0.75rem; }
    .event-item p strong { font-weight: 600; }

    .sunday-images-section .image-card .card-img-top {
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid var(--border-color);
    }
    .sunday-images-section .image-card .card-body {
        padding: 15px;
    }
     .sunday-images-section .image-card .card-text {
        font-size: 0.9rem;
        margin-bottom: 8px;
    }

    .giving-methods .giving-card {
        background-color: var(--white-color);
        border: 1px solid var(--border-color);
        border-left: 5px solid var(--accent-color);
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.05);
    }
    .giving-methods .giving-card h5 {
        color: var(--primary-color);
        font-weight: 600;
        margin-bottom: 15px;
        font-size: 1.2rem;
    }
    .giving-methods .giving-card p {
        margin-bottom: 5px;
        font-size: 0.95rem;
    }
    .giving-methods .giving-card .icon {
        font-size: 1.5rem;
        margin-right: 10px;
        color: var(--accent-color);
    }

    .swiper-container {
      width: 100%;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px 0 50px 0;
      border-radius: 10px;
      overflow: hidden; /* Important for border-radius on swiper slides */
    }
    .swiper-slide {
      background: var(--light-color);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      color: var(--dark-color);
      height: 400px;
      border-radius: 10px; /* Rounded corners for slides */
    }
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px; /* Match slide border-radius */
    }
    .swiper-button-next, .swiper-button-prev {
        color: var(--primary-color) !important;
        background-color: rgba(255,255,255,0.7);
        border-radius: 50%;
        width: 40px !important;
        height: 40px !important;
        transition: background-color 0.3s ease;
    }
    .swiper-button-next:hover, .swiper-button-prev:hover {
        background-color: rgba(255,255,255,0.9);
    }
    .swiper-button-next::after, .swiper-button-prev::after {
        font-size: 1.3rem !important;
    }
    .swiper-pagination-bullet-active {
        background: var(--primary-color) !important;
    }

    .form-container {
      background-color: var(--white-color);
      padding: 35px;
      border-radius: 10px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      max-width: 650px;
      margin: 0 auto;
    }
    section:nth-of-type(even) .form-container {
        background-color: var(--white-color);
    }
    .form-container h3 {
        text-align: center;
        color: var(--primary-color);
        margin-bottom: 25px;
        font-size: 1.8rem;
        font-weight: 600;
    }
    .form-container input[type="text"],
    .form-container input[type="email"],
    .form-container textarea {
      width: 100%;
      padding: 12px;
      margin-bottom: 18px;
      border-radius: 5px;
      border: 1px solid var(--border-color);
      font-size: 0.95rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .form-container input[type="text"]:focus,
    .form-container input[type="email"]:focus,
    .form-container textarea:focus {
        border-color: var(--accent-color);
        box-shadow: 0 0 0 0.2rem rgba(106, 13, 173, 0.25);
        outline: none;
    }
    .form-container button {
      background-color: var(--accent-color);
      color: var(--white-color);
      border: none;
      padding: 10px 25px;
      font-size: 1rem;
      font-weight: 500;
      border-radius: 50px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
      display: block;
      margin: 0 auto;
    }
    .form-container button:hover {
      background-color: var(--primary-color);
      transform: translateY(-2px);
    }

    .links-section .container {
        text-align: center;
    }
    .links-section a {
      display: inline-block;
      color: var(--accent-color);
      font-size: 1.1rem;
      font-weight: 500;
      text-decoration: none;
      padding: 10px 18px;
      margin: 8px;
      border-radius: 5px;
      border: 1px solid var(--accent-color);
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    .links-section a:hover {
      background-color: var(--accent-color);
      color: var(--white-color);
      text-decoration: none;
    }

    #backToTopBtn {
        display: none;
        position: fixed;
        bottom: 20px;
        right: 30px;
        z-index: 99;
        border: none;
        outline: none;
        background-color: var(--accent-color);
        color: white;
        cursor: pointer;
        padding: 10px 13px;
        border-radius: 50%;
        font-size: 16px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: background-color 0.3s ease, opacity 0.3s ease, visibility 0.3s ease;
    }
    #backToTopBtn:hover {
        background-color: var(--primary-color);
    }

    footer {
      background-color: var(--primary-color);
      color: var(--light-color);
      padding: 30px 0 15px 0;
      text-align: center;
      border-top: 5px solid var(--accent-color);
    }
    footer p {
        margin-bottom: 8px;
        font-size: 0.9rem;
    }
    .social-icon {
      color: var(--light-color);
      margin: 0 10px;
      font-size: 1.6rem;
      transition: color 0.3s ease, transform 0.3s ease;
    }
    .social-icon:hover {
      color: var(--white-color);
      transform: translateY(-3px);
    }
    .footer-info p {
        font-size: 0.85rem;
        color: rgba(245, 245, 245, 0.8);
        margin-top: 12px;
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#home">
        <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2Fruanda_lutheranlogo.png" alt="Logo" class="navbar-logo-img">
        KKKT Usharika wa Ruanda
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#home">Nyumbani</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">Kuhusu Sisi</a></li>
          <li class="nav-item"><a class="nav-link" href="#pastor-welcome">Salamu za Mchungaji</a></li>
          <li class="nav-item"><a class="nav-link" href="#leadership">Viongozi wa Kanisa</a></li>
          <li class="nav-item"><a class="nav-link" href="#ministries">Vikundi Na Idara</a></li>
          <li class="nav-item"><a class="nav-link" href="#services">Ibada Zetu</a></li>
          <li class="nav-item"><a class="nav-link" href="#sunday-images">Picha za Jumapili</a></li>
          <li class="nav-item"><a class="nav-link" href="#events">Matukio</a></li>
          <li class="nav-item"><a class="nav-link" href="#gallery">Maktaba ya Picha</a></li>
          <li class="nav-item"><a class="nav-link" href="#giving">Matoleo</a></li>
          <li class="nav-item"><a class="nav-link" href="#announcements">Matangazo</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects">Miradi</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Wasiliana Nasi</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <header class="hero" id="home">
    <div class="container">
      <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2Fruanda_lutheranlogo.png" alt="Nembo ya KKKT Usharika wa Ruanda" class="hero-church-image">
      <h1>Karibu KKKT Usharika wa Ruanda</h1>
      <p class="lead">Tukitumikia kwa Imani, Tumaini na Upendo - Kanisa la Kiinjili la Kilutheri Tanzania,Dayosisi ya Konde</p>
      <a href="#about" class="btn btn-lg mt-3">Jifunze Zaidi</a>
    </div>
  </header>

  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">Kuhusu Sisi</h2>
      <p>KKKT DKO-USHARIKA WA RUANDA ina mitaa Miwili Na Vijiji Saba. Mtaa Wa Station (Kanisa Moja, Kanisa Mbili Na Teku). Mtaa wa Galilaya (Soweto, Galilaya, Ruanda Moja, Ruanda Mbili).</p>
      <p>Usharika wa Ruanda ni jumuiya hai ndani ya Dayosisi ya Konde, iliyojitolea kueneza Injili, kukuza imani, na kuihudumia jamii. Tunaamini katika nguvu ya maombi, ushirika, na huduma ya upendo kwa wale wenye mahitaji. Historia yetu imejaa kujitolea na mustakabali wetu umejikita katika kukuza familia yetu ya kiroho na huduma za ufikiaji.</p>
    </div>
  </section>

  <section id="pastor-welcome" class="pastor-welcome-section">
    <div class="container">
        <h2 class="section-title">Salamu Kutoka kwa Mchungaji Wetu</h2>
        <div class="row align-items-center">
            <div class="col-lg-8 offset-lg-2">
                <div class="pastor-welcome-content clearfix">
                    <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2Fpastor_israel_chipezya.jpg" alt="Mch. Israel B. Chipezya" class="pastor-image img-fluid">
                  <p>Salamu za joto katika jina la thamani la Bwana na Mwokozi wetu, Yesu Kristo!</p>
                  <p>Ni kwa furaha kubwa ninawakaribisha kwenye tovuti rasmi ya Usharika wa Ruanda. Iwe wewe ni mshiriki wa muda mrefu, mgeni kutoka Dayosisi yetu pendwa ya Konde, au mtu anayetafuta kujifunza zaidi kuhusu jumuiya yetu ya imani kutoka mbali, tunafurahi kuwa nawe hapa.</p>
                  <p>Kanisa letu ni familia, yenye mizizi katika upendo wa Mungu na iliyojitolea kwa utumishi Wake. Tunajitahidi kuwa nuru ya tumaini, mahali pa kulishwa kiroho, na jumuiya inayoshiriki kikamilifu katika kubadilisha maisha kupitia Injili. Hapa, utapata fursa za kukua katika imani yako, kuungana na waumini wenzako, na kushiriki katika huduma zinazogusa jamii yetu na kwingineko.</p>
                  <p>Tovuti hii ni dirisha la maisha yetu ya kanisa. Gundua ibada zetu, huduma, matukio yajayo, na njia mbalimbali unazoweza kushiriki. Tunaomba kwamba unapopitia kurasa hizi, utasikia uchangamfu wa ushirika wetu na kina cha upendo wa Mungu kwako.</p>
                  <p>Ikiwa uko eneo la Mbeya, tutafurahi sana ukiungana nasi katika ibada ana kwa ana. Njoo ujionee imani hai na ushirika unaotambulisha Usharika wa Ruanda.</p>

                    <p>Mungu akubariki sana,<br>
                    <em>Mch. Israel B. Chipezya</em><br>
                    Mchungaji Kiongozi, KKKT Usharika wa Ruanda</p>
                </div>
            </div>
        </div>
    </div>
  </section>

  <section id="leadership" class="leadership-section">
    <div class="container">
        <h2 class="section-title">Viongozi wa Kanisa</h2>
        <p class="text-center mb-5 lead" style="max-width: 800px; margin-left: auto; margin-right:auto;">
            Usharika wa Ruanda unaongozwa na timu ya wachungaji na viongozi wa kikanisa waliojitolea, wanaofanya kazi pamoja kuhakikisha ukuaji wa kiroho na uendeshaji mzuri wa shughuli zote za kanisa. Tunathamini uwajibikaji, utumishi wa unyenyekevu, na uongozi unaoongozwa na Roho Mtakatifu.
        </p>
        <div class="row gy-4 justify-content-center">
            <div class="col-md-6 col-lg-4">
                <div class="leadership-card text-center">
                    <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2Fpastor_israel_chipezya.jpg" alt="Mchungaji Kiongozi" class="leader-image"> <h5>Mchungaji Kiongozi</h5>
                    <p><span class="leader-title">Jina:</span> Mch. Israel B. Chipezya</p>
                    <p>Anahusika na uongozi wa kiroho wa usharika, mafundisho, na usimamizi wa shughuli za kichungaji.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="leadership-card text-center">
                    <img src="images/placeholder_leader.png" alt="Mwinjilisti wa Mtaa Wa Station" class="leader-image">
                    <h5>Mwinjilisti wa Mtaa Wa Station</h5>
                    <p><span class="leader-title">Jina:</span> Nabwike Kilima</p>
                    <p>Anasaidia katika shughuli za uinjilisti, ufikiaji wa jamii, na kuongoza programu za wanafunzi wapya Katika Mtaa Wa Station.</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="leadership-card text-center">
                    <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2FIMG-20250415-WA0037.jpg" alt="Mwinjilisti Wa Mtaa Wa Galilaya" class="leader-image">
                    <h5>Mwinjlisti Wa Mtaa Wa Galilaya</h5>
                    <p><span class="leader-title">Jina:</span> Niko Kwanini</p>
                    <p>Anasaidia katika shughuli za uinjilisti, ufikiaji wa jamii, na kuongoza programu za wanafunzi wapya Katika Mtaa Wa Galilaya</p>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="leadership-card text-center">
                    <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2FIMG-20250507-WA0074.jpg" alt="Katibu wa Kanisa" class="leader-image">
                    <h5>Katibu wa Kanisa</h5>
                    <p><span class="leader-title">Jina:</span> Peter Sanga</p>
                    <p>Anahusika na utunzaji wa kumbukumbu za kanisa, mawasiliano, na uratibu wa mikutano.</p>
                </div>
            </div>
             <div class="col-md-6 col-lg-4">
                <div class="leadership-card text-center">
                    <img src="images/placeholder_leader.png" alt="Wazee wa Kanisa" class="leader-image">
                    <h5>Wazee wa Kanisa</h5>
                    <p>Baraza la wazee hushauri na kusaidia katika maamuzi muhimu ya kiroho na kiutawala ya usharika. Majina yao yanapatikana katika ofisi ya kanisa.</p>
                </div>
            </div>
        </div>
        <p class="text-center mt-4">Kwa mawasiliano zaidi na viongozi, tafadhali wasiliana na ofisi ya kanisa.</p>
    </div>
</section>

  <section id="ministries" class="ministries-section">
    <div class="container">
      <h2 class="section-title">Vikundi Na Idara</h2>
      <div class="row justify-content-center">
        <div class="col-lg-10 col-xl-8">
            <div class="kikundi-info-card">
                <div class="kikundi-detail-item">
                    <h4>Idara ya Vijana</h4>
                    <p><strong>Viongozi:</strong> Irene Mathias (Mwenyekiti), Baraka Moshi (Katibu) </p>
                    <p><em>Wajumbe wengine: [Ongeza hapa kama wapo]</em></p>
                    <p><strong>Malengo:</strong> [Andika malengo makuu ya kikundi cha vijana hapa. Kwa mfano: Kukuza vijana kiroho, kuwahusisha katika huduma, na kuandaa shughuli za kujenga ushirika.]</p>
                    <p><strong>Mawasiliano (Mwenyekiti):</strong> <a href="tel:+255XXXXXXXXX">[Namba ya Simu ya Irene Mathias]</a></p>
                    <p><strong>Mikutano:</strong> Ijumaa saa 11:00 Jioni.</p>
                    <p><em>[Maelezo zaidi kuhusu shughuli za Idara ya Vijana, mafanikio, au matukio yajayo.]</em></p>
                </div>
                <hr>
                <div class="kikundi-detail-item">
                    <h4>Idara ya Wanawake</h4>
                    <p><strong>Viongozi:</strong> [Jina la Mwenyekiti], [Jina la Katibu], [Jina la Mweka Hazina]</p>
                    <p><strong>Malengo:</strong> [Andika malengo makuu ya kikundi cha wanawake hapa. Mfano: Kuwawezesha wanawake kiroho na kijamii, kusaidiana, na kuongoza miradi ya kijamii.]</p>
                    <p><strong>Mawasiliano (Mwenyekiti):</strong> <a href="tel:+255XXXXXXXXX">[Namba ya Simu ya Mwenyekiti wa Wanawake]</a></p>
                    <p><strong>Mikutano:</strong> Jumatano na Ijumaa saa 1:00 Asubuhi.</p>
                    <p><em>[Maelezo zaidi kuhusu shughuli za Idara ya Wanawake.]</em></p>
                </div>
                <hr>
                <div class="kikundi-detail-item">
                    <h4>Idara ya Muziki na Watoto</h4>
                    <p><strong>Viongozi:</strong> [Jina la Mwenyekiti/Kiongozi], [Washiriki wengine muhimu]</p>
                    <p><strong>Malengo:</strong> [Andika malengo ya idara hii. Mfano: Kuongoza sifa na kuabudu kupitia muziki, kukuza vipaji vya wanakwaya, na kutoa mafunzo ya Shule ya Jumapili kwa watoto.]</p>
                    <p><strong>Mawasiliano:</strong> <a href="tel:+255XXXXXXXXX">[Namba ya Simu ya Kiongozi]</a></p>
                    <p><em>[Maelezo kuhusu kwaya mbalimbali, mazoezi, huduma za watoto, nk.]</em></p>
                </div>
                <hr>
                <div class="kikundi-detail-item">
                    <h4>Idara ya Fedha, Mipango na Utawala</h4>
                    <p><strong>Viongozi:</strong> [Jina la Mwenyekiti], [Mhasibu wa Kanisa - kama ni sehemu ya hii au anashirikiana]</p>
                    <p><strong>Malengo:</strong> [Andika malengo ya idara hii. Mfano: Kusimamia mapato na matumizi ya kanisa, kupanga bajeti, na kuhakikisha utawala bora.]</p>
                    <p><strong>Mawasiliano:</strong> <a href="tel:+255XXXXXXXXX">[Namba ya Simu ya Mwenyekiti]</a></p>
                    <p><em>[Maelezo kuhusu uwazi wa kifedha, miradi ya mapato, nk.]</em></p>
                </div>
                <hr>
                <div class="kikundi-detail-item">
                    <h4>Idara ya Faragha (Ushauri Nasaha)</h4>
                    <p><strong>Viongozi:</strong> [Jina la Mwenyekiti/Kiongozi], [Washauri]</p>
                    <p><strong>Malengo:</strong> [Andika malengo ya idara hii. Mfano: Kutoa ushauri wa kiroho na kijamii kwa washarika, kusaidia familia, na kushughulikia masuala ya faragha.]</p>
                    <p><strong>Mawasiliano:</strong> <a href="tel:+255XXXXXXXXX">[Namba ya Simu ya Kiongozi]</a></p>
                    <p><em>[Maelezo kuhusu upatikanaji wa huduma za ushauri.]</em></p>
                </div>
                <hr>
                <div class="kikundi-detail-item">
                    <h4>Idara ya Miradi</h4>
                    <p><strong>Viongozi:</strong> [Jina la Mwenyekiti], [Wajumbe wa kamati ya miradi]</p>
                    <p><strong>Malengo:</strong> [Andika malengo ya idara hii. Mfano: Kubuni na kusimamia miradi ya maendeleo ya kanisa na jamii.]</p>
                    <p><strong>Mawasiliano:</strong> <a href="tel:+255XXXXXXXXX">[Namba ya Simu ya Mwenyekiti]</a></p>
                    <p><em>[Maelezo kuhusu miradi inayoendelea au iliyokamilika.]</em></p>
                </div>
                <hr>
                <div class="kikundi-detail-item">
                    <h4>Idara ya Majengo</h4>
                    <p><strong>Viongozi:</strong> [Jina la Mwenyekiti], [Wajumbe wa kamati ya majengo]</p>
                    <p><strong>Malengo:</strong> [Andika malengo ya idara hii. Mfano: Kusimamia ujenzi, ukarabati, na utunzaji wa majengo yote ya kanisa.]</p>
                    <p><strong>Mawasiliano:</strong> <a href="tel:+255XXXXXXXXX">[Namba ya Simu ya Mwenyekiti]</a></p>
                    <p><em>[Maelezo kuhusu hali ya majengo na mipango ya ukarabati au ujenzi mpya.]</em></p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title">Ibada Zetu</h2>
      <div class="row gy-4">
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-icon"><i class="fas fa-church"></i></div>
              <h5 class="card-title">Ibada ya Jumapili</h5>
              <p class="card-text">Ungana nasi kwa ibada zetu za Jumapili kila wiki, kuanzia saa 1:00 Asubuhi na saa 4:00 Asubuhi.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-icon"><i class="fas fa-sun"></i></div>
              <h5 class="card-title">Maombi ya Asubuhi (Morning Glory)</h5>
              <p class="card-text">Anza siku yako na Mungu: Jumatatu hadi Ijumaa, Saa 12:00 Asubuhi - Saa 1:00 Asubuhi.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-icon"><i class="fas fa-book-open"></i></div>
              <h5 class="card-title">Mafundisho ya Biblia</h5>
              <p class="card-text">Ongeza imani yako na mafundisho yetu ya Biblia ya kila wiki: Alhamisi na Jumapili saa 9:00 Alasiri.</p>
            </div>
          </div>
        </div>
         <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-body">
              <div class="card-icon"><i class="fas fa-users-rays"></i></div> <h5 class="card-title">Jumuiya za Jumamosi</h5>
              <p class="card-text">Kukaa pamoja kama jumuiya katika nyumba zetu tukimwabudu Mungu: Jumamosi saa 12:00 Asubuhi.</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="card">
            <div class="card-body">
                <div class="card-icon"><i class="fas fa-pray"></i></div>
                <h5 class="card-title">Mikutano Mingine</h5> {/* Updated from Mikutano ya Idara as those are now in Vikundi section */}
              <p class="card-text">Angalia matangazo kwa mikutano mingine maalum ya maombi na ushirika.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="sunday-images" class="sunday-images-section">
    <div class="container">
        <h2 class="section-title">Picha za Jumapili za Karibuni</h2>
        <div class="row gy-4">
            <div class="col-md-6 col-lg-4">
                <div class="card image-card">
                    <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2FIMGL0130.JPG" class="card-img-top" alt="Picha ya Ibada ya Jumapili">
                    <div class="card-body">
                        <p class="card-text">Ibada ya Jumapili iliyopita ilivyopendeza.</p>
                        <small class="text-muted">Tarehe: Mei 4, 2025</small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card image-card">
                    <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2Fjumapili_picha_2.JPG" class="card-img-top" alt="Wanakwaya wakimsifu Mungu">
                    <div class="card-body">
                        <p class="card-text">Wanakwaya wetu wakiimba kwa shangwe.</p>
                        <small class="text-muted">Tarehe: Mei,4, 2025</small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card image-card">
                    <img src="content://com.android.externalstorage.documents/tree/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html/document/primary%3AHTML%20CODE%20IMAGES%2Fwebsite%2Fimages.html%2Fjumapili_picha_3.jpg" class="card-img-top" alt="Ushirika baada ya Ibada">
                    <div class="card-body">
                        <p class="card-text">Washarika wakifurahia baada ya ibada.</p>
                        <small class="text-muted">Tarehe: Mei 4, 2025</small>
                    </div>
                </div>
            </div>
            </div>
    </div>
  </section>

  <section id="events" class="events-section-list">
    <div class="container">
      <h2 class="section-title">Matukio Yajayo</h2>
      <div class="event-item">
        <h4>Mashindano ya Mbio (Konde Marathon)</h4>
        <p>Jiunge nasi kwa Mashindano ya Mbio ya Konde ya kila mwaka! Mbio za afya, jamii, na imani.</p>
        <p><strong>Tarehe:</strong> Juni 26, 2025</p>
        <p><strong>Mahali:</strong> Konde, Mbeya</p>
        <p><a href="https://www.elct-konde.org" target="_blank" rel="noopener noreferrer">Jisajili Hapa</a></p>
      </div>
      <div class="event-item">
        <h4>Wiki ya Sikukuu ya Vijana 2025</h4>
        <p>Ungana nasi kwa Wiki ya furaha, chakula, na semina kuanzia Julai 20 hadi Julai 27.</p>
         <p><strong>Kaulimbiu:</strong> Itatangazwa</p>
      </div>
      <p class="text-center mt-5">Kwa matukio zaidi na ratiba kamili, tafadhali wasiliana na ofisi ya kanisa au angalia mbao zetu za matangazo kanisani.</p>
    </div>
  </section>

  <section id="gallery">
    <div class="container">
        <h2 class="section-title">Maktaba Yetu ya Picha</h2>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="images/gallery_event1.jpg" alt="Picha ya Tukio la Kanisa 1"></div>
                <div class="swiper-slide"><img src="images/gallery_event2.jpg" alt="Picha ya Tukio la Kanisa 2"></div>
                <div class="swiper-slide"><img src="images/gallery_community1.jpg" alt="Picha ya Huduma ya Kijamii"></div>
                <div class="swiper-slide"><img src="images/gallery_church_building.jpg" alt="Jengo la Kanisa"></div>
                <div class="swiper-slide"><img src="images/gallery_youth_group.jpg" alt="Kikundi cha Vijana"></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </div>
  </section>

  <section id="giving" class="giving-section">
    <div class="container">
        <h2 class="section-title">Matoleo na Zaka</h2>
        <p class="text-center mb-5 lead" style="max-width: 800px; margin-left: auto; margin-right:auto;">
            "Kila mtu na atoe kama alivyokusudia moyoni mwake, si kwa huzuni, wala si kwa kulazimishwa; maana Mungu humpenda yeye atoaye kwa moyo wa ukunjufu." - 2 Wakorintho 9:7...
        </p>
        <div class="row gy-4 giving-methods">
            <div class="col-md-6">
                <div class="giving-card">
                    <h5><i class="fas fa-mobile-alt icon"></i>Pesa kwa Simu (M-Pesa / Tigo Pesa / Airtel Money)</h5>
                    <p><strong>M-Pesa (Vodacom):</strong> Lipa Namba [Namba Yako Hapa] (KKKT Usharika wa Ruanda)</p>
                    <p><strong>Tigo Pesa (Tigo):</strong> Lipa Bili [Namba ya Kampuni], Namba ya Kumbukumbu [Namba Yako Hapa] (KKKT Usharika wa Ruanda)</p>
                    <p><strong>Airtel Money (Airtel):</strong> Lipa kwa [Namba ya Biashara] (KKKT Usharika wa Ruanda)</p>
                    <p><em>(Tafadhali weka namba sahihi za kanisa lako hapa.)</em></p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="giving-card">
                    <h5><i class="fas fa-university icon"></i>Amana ya Benki / Uhamisho</h5>
                    <p><strong>Jina la Benki:</strong> [Jina la Benki ya Kanisa, k.m., NMB, CRDB]</p>
                    <p><strong>Jina la Akaunti:</strong> KKKT Usharika wa Ruanda Dayosisi ya Konde</p>
                    <p><strong>Namba ya Akaunti:</strong> [Namba ya Akaunti ya Benki ya Kanisa]</p>
                    <p><strong>Tawi:</strong> [Tawi la Benki, k.m., Mbeya]</p>
                    <p><strong>SWIFT Code (kwa uhamisho wa kimataifa):</strong> [SWIFT Code ya Benki]</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="giving-card">
                    <h5><i class="fas fa-hand-holding-heart icon"></i>Matoleo Kanisani</h5>
                    <p>Unaweza kutoa zaka na sadaka zako ana kwa ana wakati wa ibada zetu za Jumapili au kwa kutembelea ofisi ya kanisa siku za kazi.</p>
                    <p><strong>Saa za Ofisi:</strong> Jumatatu - Jumamosi, Saa 2:00 Asubuhi - Saa 11:00 Jioni</p>
                </div>
            </div>
            <div class="col-md-6">
                 <div class="giving-card">
                    <h5><i class="fas fa-question-circle icon"></i>Maswali Kuhusu Matoleo?</h5>
                    <p>Ikiwa una maswali yoyote kuhusu utoaji au unahitaji usaidizi, tafadhali wasiliana na mhasibu wetu wa kanisa au ofisi ya kanisa.</p>
                    <p><strong>Simu:</strong> [Namba ya Simu ya Ofisi ya Kanisa]</p>
                    <p><strong>Baruapepe:</strong> [Baruapepe ya Fedha ya Kanisa, mf. ruandalutheranchurch@gmail.com]</p>
                </div>
            </div>
        </div>
        <p class="text-center mt-4">Asante kwa uaminifu na msaada wako. Mungu abariki utoaji wako wa furaha!</p>
    </div>
  </section>

  <section id="announcements" class="announcements-section-list">
    <div class="container">
      <h2 class="section-title">Matangazo</h2>
      <div class="announcement-item">
        <h5>Tamasha la Kijamii - Mwezi Ujao!</h5>
        <p>Jiunge nasi kwa siku ya furaha, chakula, na ushirika Jumamosi, Juni 14, 2025 saa 9:00 Alasiri. Tafadhali leta chakula cha kuchangia!</p>
      </div>
      <div class="announcement-item">
        <h5>Semina ya Mafundisho ya Biblia - Usajili Umeanza</h5>
        <p>Usikose Semina yetu ijayo ya Mafundisho ya Biblia Julai 19-20, 2025. Kaulimbiu: "Wenye Mizizi Katika Neno". Jisajili ofisini kanisani.</p>
      </div>
      </div>
  </section>

  <section id="projects" class="projects-section-list">
    <div class="container">
      <h2 class="section-title">Miradi Yetu</h2>
      <div class="project-item">
        <h5>UJENZI WA NYUMBA YA MCHUNGAJI</h5>
        <p>Tunaendelea kuchangisha fedha kwa ajili ya ujenzi wa nyumba ya Mchungaji wa Usharika...</p>
        <div class="project-images mt-3">
            <h6 class="text-white">Picha za Mradi Huu:</h6>
            <div class="row g-2">
                <div class="col-6 col-md-3 mb-2"><img src="images/project_pastor_house_1.jpg" alt="Picha 1 ya Ujenzi wa Nyumba ya Mchungaji" class="img-fluid rounded"></div>
                <div class="col-6 col-md-3 mb-2"><img src="images/project_pastor_house_2.jpg" alt="Picha 2 ya Ujenzi wa Nyumba ya Mchungaji" class="img-fluid rounded"></div>
                <div class="col-6 col-md-3 mb-2"><img src="images/project_pastor_house_3.jpg" alt="Picha 3 ya Ujenzi wa Nyumba ya Mchungaji" class="img-fluid rounded"></div>
                <div class="col-6 col-md-3 mb-2"><img src="images/project_pastor_house_4.jpg" alt="Picha 4 ya Ujenzi wa Nyumba ya Mchungaji" class="img-fluid rounded"></div>
            </div>
        </div>
      </div>
       <div class="project-item">
        <h5>UKODISHAJI WA UKUMBI</h5>
        <p>Kwa shughuli mbalimbali kama harusi, send-off, mahafali na mikutano ya kibiashara...</p>
         <div class="project-images mt-3">
            <h6 class="text-white">Picha za Ukumbi:</h6>
            <div class="row g-2">
                <div class="col-6 col-md-3 mb-2"><img src="images/project_hall_1.jpg" alt="Picha 1 ya Ukumbi" class="img-fluid rounded"></div>
                <div class="col-6 col-md-3 mb-2"><img src="images/project_hall_2.jpg" alt="Picha 2 ya Ukumbi" class="img-fluid rounded"></div>
            </div>
        </div>
      </div>
       <div class="project-item">
        <h5>UKODISHAJI WA BASI</h5>
        <p>Kwa usafiri kwenda maeneo mbalimbali! Wasiliana na ofisi ya kanisa kwa kukodi.</p>
        <div class="project-images mt-3">
            <h6 class="text-white">Picha ya Basi:</h6>
            <div class="row g-2 justify-content-center"> <div class="col-8 col-md-4 mb-2"><img src="images/project_bus_1.jpg" alt="Picha ya Basi la Kanisa" class="img-fluid rounded"></div>
            </div>
        </div>
      </div>
      <div class="project-item">
        <h5>UMISIONI KAMSAMBA</h5>
        <p>Umisioni wa Kamsamba ni mmoja wa miradi yetu muhimu...</p>
        <div class="project-images mt-3">
            <h6 class="text-white">Picha za Umisioni Kamsamba:</h6>
            <div class="row g-2">
                <div class="col-6 col-md-3 mb-2"><img src="images/project_kamsamba_1.jpg" alt="Picha 1 Umisioni Kamsamba" class="img-fluid rounded"></div>
                <div class="col-6 col-md-3 mb-2"><img src="images/project_kamsamba_2.jpg" alt="Picha 2 Umisioni Kamsamba" class="img-fluid rounded"></div>
            </div>
        </div>
      </div>
      </div>
  </section>

  <section id="links" class="links-section">
    <div class="container">
        <h2 class="section-title">Viungo Muhimu</h2>
        <a href="https://www.elct-konde.org" target="_blank" rel="noopener noreferrer">Tovuti Rasmi ya Dayosisi ya Konde</a>
        <a href="#" target="_blank" rel="noopener noreferrer">Tovuti Kuu ya KKKT (Mfano)</a>
        </div>
  </section>

  <section id="contact">
    <div class="container">
        <h2 class="section-title">Wasiliana Nasi</h2>
        <div class="form-container">
            <h3>Tutumie Ujumbe au Hoja</h3>
            <form action="#" method="POST">
                <input type="text" name="name" placeholder="Jina Lako Kamili" required>
                <input type="email" name="email" placeholder="Baruapepe Yako" required>
                <textarea name="message" rows="5" placeholder="Ujumbe wako au Hoja" required></textarea>
                <button type="submit">Tuma Ujumbe</button>
            </form>
        </div>
    </div>
  </section>

  <button id="backToTopBtn" title="Rudi Juu"><i class="fas fa-arrow-up"></i></button>
  <footer>
    <div class="container">
        <p>© <script>document.write(new Date().getFullYear())</script> KKKT Dayosisi ya Konde Usharika wa Ruanda | Haki zote zimehifadhiwa</p>
     <p>Tufuatilie Kwenye:
            <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
            <a href="#" class="social-icon" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        </p>
        <div class="footer-info">
            <p id="timeDisplay">Muda: Inapakia...</p>
            <p id="visitorCount">Wageni: Inapakia...</p>
        </div>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

  <script>
    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
          768: {
              slidesPerView: 2,
              spaceBetween: 30
          },
          992: {
              slidesPerView: 3,
              spaceBetween: 30
          }
      }
    });

    // Show current time
    function updateTime() {
      const now = new Date();
      const timeStr = now.toLocaleString('sw-TZ', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const timeDisplayElement = document.getElementById('timeDisplay');
      if (timeDisplayElement) {
        timeDisplayElement.textContent = 'Saa za Hivi Punde: ' + timeStr;
      }
    }
    setInterval(updateTime, 1000);
    updateTime();

    // Simple visitor counter using localStorage
    const visitorCountElement = document.getElementById('visitorCount');
    if (visitorCountElement) {
        let countKey = 'rlcKondeVisitCount_v3_sw';
         try {
            if (!localStorage.getItem(countKey)) {
              localStorage.setItem(countKey, 1);
            } else {
              let count = parseInt(localStorage.getItem(countKey));
              count++;
              localStorage.setItem(countKey, count);
            }
            visitorCountElement.textContent = 'Idadi ya Waliotembelea: ' + localStorage.getItem(countKey);
        } catch (e) {
            console.warn("LocalStorage haipatikani. Idadi ya wageni imezimwa kwa mtazamo huu. Hitilafu:", e);
            visitorCountElement.textContent = 'Idadi ya Waliotembelea: (haipatikani)';
        }
    }

    // Back to Top Button Functionality
    let backToTopButton = document.getElementById("backToTopBtn");
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
      if (backToTopButton) { // Check if button exists
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      }
    }
    if(backToTopButton) {
        backToTopButton.addEventListener('click', function() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
    }

    // Active Nav Link highlighting on scroll
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLi = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
    const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 70;

    window.addEventListener("scroll", () => {
        let current = "home"; // Default to home
        sections.forEach((section) => {
            const sectionTop = section.offsetTop - navbarHeight - 20; 
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active");
            if (li.getAttribute("href") === ("#" + current)) {
                li.classList.add("active");
            }
        });
    });
    // Trigger scroll on load to highlight the nav item for the section currently in view (e.g. if URL has a #hash)
    // Or to highlight "Nyumbani" if at the top.
    window.dispatchEvent(new Event('scroll'));
  </script>
</body>
</html>
