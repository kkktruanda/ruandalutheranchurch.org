
<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ruanda Lutheran Church - Konde Diocese</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&amp;family=Roboto:wght@400;700&amp;display=swap" rel="stylesheet">
  <style>
        /* Global Styles */
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa; /* Light grey background */
            color: #495057; /* Dark grey text */
            line-height: 1.7;
        }

        a {
            color: #007bff; /* Primary blue color for links */
            text-decoration: none;
            transition: color 0.3s ease-in-out;
        }

        a:hover {
            color: #0056b3; /* Darker blue on hover */
        }

        /* Header */
        header {
            background-color: #fff;
            padding: 40px 20px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            margin-bottom: 20px;
        }

        .logo-container {
            width: 100px; /* Adjust logo size as needed */
            height: 100px; /* Adjust logo size as needed */
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 20px; /* Center above the title */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .logo-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        header h1 {
            font-family: 'Playfair Display', serif;
            color: #2c3e50; /* Dark blue heading */
            font-size: 3.5em;
            margin-bottom: 10px;
        }

        header p {
            color: #777;
            font-size: 1.2em;
        }

        /* Navigation */
        nav {
            background-color: #2c3e50; /* Dark blue navigation */
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: center;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            margin-bottom: 20px;
        }

        nav a {
            color: white;
            padding: 10px 20px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s ease-in-out;
            border-radius: 5px;
            margin: 0 10px;
        }

        nav a:hover {
            background-color: #34495e; /* Slightly darker blue on hover */
        }

        /* Container */
        .container {
            width: 95%;
            max-width: 1200px;
            margin: 20px auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
        }

        /* Welcome Section */
        .welcome {
            background-color: #f0f8ff; /* Light blue background */
            padding: 40px;
            text-align: center;
            border-radius: 8px;
            margin-bottom: 30px;
        }

        .welcome h2 {
            color: #2c3e50;
            font-size: 2.8em;
            margin-bottom: 15px;
        }

        .welcome p {
            font-size: 1.1em;
            color: #555;
        }

        /* Section Headings */
        h2 {
            color: #2c3e50;
            font-size: 2.4em;
            border-bottom: 3px solid #2c3e50;
            padding-bottom: 15px;
            margin-top: 40px;
            margin-bottom: 25px;
        }

        h3 {
            color: #2c3e50;
            font-size: 1.8em;
            margin-top: 30px;
            margin-bottom: 15px;
        }

        /* Lists */
        ul {
            list-style: none;
            padding-left: 0;
        }

        ul li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
        }

        ul li:last-child {
            border-bottom: none;
        }

        ul strong {
            font-weight: bold;
            color: #333;
        }

        /* Gallery */
        .gallery-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .gallery-container img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease-in-out;
        }

        .gallery-container img:hover {
            transform: scale(1.03);
        }

        /* Footer */
        footer {
            background-color: #343a40;
            color: #fff;
            text-align: center;
            padding: 30px 20px;
            margin-top: 40px;
            border-radius: 8px 8px 0 0;
            font-size: 0.9em;
        }

        /* Slideshow Styles */
        .slideshow-container {
            position: relative;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
            margin-bottom: 30px;
        }

        .slide {
            display: none;
            text-align: center;
            border-radius: 8px;
            overflow: hidden;
        }

        .slide img {
            width: 100%;
            height: auto;
            vertical-align: middle;
        }

        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            margin-top: -22px;
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }

        .prev:hover, .next:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        .dot-container {
            text-align: center;
            margin-top: 20px;
        }

        .dot {
            cursor: pointer;
            height: 15px;
            width: 15px;
            margin: 0 5px;
            background-color: #bbb;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.6s ease;
        }

        .active, .dot:hover {
            background-color: #717171;
        }

        /* Fading animation */
        .fade {
            animation-name: fade;
            animation-duration: 1.5s;
        }

        @keyframes fade {
            from {opacity: .4}
            to {opacity: 1}
        }
    </style>
 </head>
 <body>
  <header>
   <div class="logo-container">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Lutherrose.svg/1200px-Lutherrose.svg.png" alt="Ruanda Lutheran Church Logo">
   </div>
   <h1>Ruanda Lutheran Church</h1>
   <p>Konde Diocese</p>
  </header>
  <nav>
   <a href="#">Home</a> <a href="#about">About Us</a> <a href="#services">Services</a> <a href="#events">Events</a> <a href="#gallery">Gallery</a> <a href="#contact">Contact Us</a>
  </nav>
  <div class="container">
   <section class="welcome">
    <h2>A Heartfelt Welcome to Our Church Family</h2>
    <p>Joining together in faith, community, and service in the beautiful Konde Diocese.</p>
   </section>
   <section class="slideshow-container">
    <div class="slide fade">
     <img src="https://via.placeholder.com/800x400/5cb85c/fff?Text=Worship+Together" style="width:100%">
    </div>
    <div class="slide fade">
     <img src="https://via.placeholder.com/800x400/f0ad4e/fff?Text=Serving+Our+Community" style="width:100%">
    </div>
    <div class="slide fade">
     <img src="https://via.placeholder.com/800x400/5bc0de/fff?Text=Growing+in+Faith" style="width:100%">
    </div><a class="prev" onclick="plusSlides(-1)">❮</a> <a class="next" onclick="plusSlides(1)">❯</a>
    <div class="dot-container">
     <span class="dot" onclick="currentSlide(1)"></span> <span class="dot" onclick="currentSlide(2)"></span> <span class="dot" onclick="currentSlide(3)"></span>
    </div>
   </section>
   <section id="about">
    <h2>About Ruanda Lutheran Church –</h2>
    <p>Ruanda Lutheran Church is a vibrant Christian congregation located in Mbeya City, Tanzania, within the Konde Diocese. We are united by our commitment to worshipping God, nurturing our faith, and extending compassion to our community. Everyone is embraced here, finding fellowship, the strength of the Gospel, and the enduring hope found in Jesus Christ.</p>
    <h3>Service Times</h3>
    <ul>
     <li><strong>Sunday Worship:</strong> 1st Service - 7:00 AM | 2nd Service - 10:00 AM</li>
     <li><strong>Midweek Fellowship:</strong> Morning Glory - 6:00 AM</li>
     <li><strong>Bible Studies:</strong> Thursdays &amp; Sundays - 3:00 PM</li>
     <li><strong>Youth Fellowship:</strong> Fridays - 5:00 PM</li>
     <li><strong>Sunday School:</strong> During both Sunday Services - 7:00 AM &amp; 10:00 AM</li>
    </ul>
    <h3>Ministries &amp; Groups</h3>
    <ul>
     <li><strong>Youth Ministry:</strong> Empowering the next generation in faith.</li>
     <li><strong>Women's Ministry:</strong> Supporting and connecting women in our church.</li>
     <li><strong>Choir &amp; Worship Team:</strong> Leading us in praise and worship.</li>
     <li><strong>Fellowship:</strong>Connect, support, and grow in faith together. All welcome! .</li>
     <li><strong>Social Services:</strong> Providing support and care to those in need.</li>
    </ul>
    <h3>Church Leadership</h3>
    <ul>
     <li><strong>Parish Pastor:</strong> Rev. Israel Chipezya</li>
     <li><strong>Evangelists:</strong> Nabikwe Kirima, Nico Kwanini</li>
     <li><strong>Parish Worker:</strong> Grace Kawiche</li>
     <li><strong>Church Secretary:</strong> Peter Sanga</li>
    </ul>
    <h3>Contact Information</h3>
    <ul>
     <li><strong>Phone/WhatsApp:</strong> +255 [Insert Number]</li>
     <li><strong>Email:</strong> [Insert Email]</li>
     <li><strong>Facebook Page:</strong> [Insert Facebook Link]</li>
     <li><strong>Location:</strong> Ruanda Area, Mbeya City, Tanzania</li>
    </ul>
   </section>
   <section id="events">
    <h2>Upcoming Events</h2>
    <ul>
     <li><strong>Regular Sunday Worship:</strong> Every Sunday at 7:00 AM &amp; 9:00 AM.</li>
     <li><strong>Weekly Bible Study:</strong> Every Thursday &amp; Sunday at 3:00 PM.</li>
     <li><strong>Special Event:</strong> Konde Diocese Annual Gathering - [Date].</li>
     <li><strong>Community Initiative:</strong> Local Food Drive - [Start Date] to [End Date].</li>
    </ul>
   </section>
   <section id="gallery">
    <h2>Our Photo Gallery</h2>
    <p>A glimpse into the life and moments of our vibrant church community.</p>
    <div class="gallery-container">
     <img src="https://images.unsplash.com/photo-1551882544-6d9b0a5bdd06?fit=crop&amp;w=500&amp;q=60" alt="Church Service"> <img src="https://images.unsplash.com/photo-1526269469835-6592c7332001?fit=crop&amp;w=500&amp;q=60" alt="Community Event"> <img src="https://images.unsplash.com/photo-1564777022881-43111e697414?fit=crop&amp;w=500&amp;q=60" alt="Youth Group"> <img src="https://images.unsplash.com/photo-1587559485986-a7176989c0a1?fit=crop&amp;w=500&amp;q=60" alt="Fellowship"> <img src="https://images.unsplash.com/photo-1576764853333-8e59d697251b?fit=crop&amp;w=500&amp;q=60" alt="Outreach"> <img src="https://images.unsplash.com/photo-1503443207925-d71980649c17?fit=crop&amp;w=500&amp;q=60" alt="Bible Study">
    </div>
   </section>
   <section id="contact">
    <h2>Connect With Us</h2>
    <p>We invite you to join our community and connect with us. For inquiries or more information, please reach out.</p>
    <ul>
     <li><strong>Address:</strong> Ruanda Area, Mbeya City, Tanzania</li>
     <li><strong>Phone/WhatsApp:</strong> +255 [Insert Number]</li>
     <li><strong>Email:</strong> [Insert Email]</li>
     <li><strong>Facebook:</strong> [Insert Facebook Link]</li>
    </ul>
   </section>
  </div>
  <footer>
   <p>© 2025 Ruanda Lutheran Church - Konde Diocese | Embracing Faith, Serving Community</p>
  </footer>
  <div style="display: flex; gap: 20px; justify-content: center; margin-top: 20px;">
   <a href="[Your Instagram Link]" target="_blank" aria-label="Instagram" style="color: #E4405F; font-size: 2em;"> <i class="fab fa-instagram"></i> </a> <a href="[Your YouTube Link]" target="_blank" aria-label="YouTube" style="color: #FF0000; font-size: 2em;"> <i class="fab fa-youtube"></i> </a> <a href="[Your Facebook Link]" target="_blank" aria-label="Facebook" style="color: #1877F2; font-size: 2em;"> <i class="fab fa-facebook"></i> </a> <a href="[Your TikTok Link]" target="_blank" aria-label="TikTok" style="color: #000; background: linear-gradient(to right, #000000 50%, #ffffff 50%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2em;"> <i class="fab fa-tiktok"></i> </a> <a href="[Your X Space Link]" target="_blank" aria-label="X (formerly Twitter)" style="color: #000; font-size: 2em;"> <i class="fab fa-x-twitter"></i> </a>
  </div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer">
  <script>
        let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slide");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
</script>
 </body>
</html>
