(function () {
  function $(id) {
    return document.getElementById(id);
  }

  let inside = document.getElementsByClassName("wishesFont");
  var card = $("card"),
    openB = $("open"),
    closeB = $("close"),
    nextB = $("next"),
    prevB = $("prev"),
    timer = null;

  // Array of messages/pages (now with 3 new pages)
  const pages = [
    // Page 1 – How It All Started
    `<center>
  <p>
    My dearest SS, ❤️
  </p>
  <p>
    We met through work at MID Construction. I was focused on responsibilities and never really thought love would find me there.
  </p>
  <p>
    But around the third month, something changed. I started noticing you more, not because I had to, but because I wanted to. You had this quiet presence that kept pulling me in.
  </p>
  <p>
    One day, I saw you playing chess. I noticed your in-game name and, out of curiosity, searched for your socials. That led me to your Instagram.
  </p>
  <p>
    I still don’t know where I got the courage, but I sent you a message. You replied. And that small moment became the beginning of something truly special—something I now call us.
  </p>
</center>`,

    // Page 2 – Favorite Memories
    `<center>
    <p>
      Every little moment with you means so much, even the ordinary ones. 
      From silly chats to deep talks, laughing about random things, or just watching you smile, 
      those are the memories I hold close.
    </p>
    <div class="image-gallery">
      <img src="img1.jpg" alt="Memory 1" class="zoomable" style="width: 25%; margin: 10px;  object-fit: cover; object-position: center;" />
      <img src="img2.jpg" alt="Memory 2" class="zoomable" style="width: 25%; margin: 10px;  object-fit: cover; object-position: center;" />
      <img src="img3.jpg" alt="Memory 2" class="zoomable" style="width: 25%; margin: 10px; object-fit: cover; object-position: center;" />
      <img src="img4.jpg" alt="Memory 2" class="zoomable" style="width: 25%; margin: 10px;  object-fit: cover; object-position: center;" />
      <img src="img5.jpg" alt="Memory 2" class="zoomable" style="width: 25%; margin: 10px;  object-fit: cover; object-position: center;" />
      <img src="img6.jpg" alt="Memory 2" class="zoomable" style="width: 25%; margin: 10px;  object-fit: cover; object-position: center;" />
    </div>
  </center>`,

    // Page 3 – What I Love About You
    `<center>
  <p>
    I love how you care so deeply, how you stay faithful to God, and how you never stop giving your best in everything you do. 
    Your faith inspires me, your strength amazes me, and your heart brings peace to mine.
  </p>
  <p>
    You encourage me to grow and to be better, not just for myself, but for us and for the Lord. 
    You are the most precious gift God has ever given to me, and I honestly can’t imagine life with anyone else.
  </p>
  <img src="solo.jpg" alt="Beautiful Memory" class="zoomable" style="width: 37%; margin-top: 15px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); object-fit: cover;" />
</center>`,

    // Page 4 – My Promises
    `<center>
  <p>
    I’m so proud of the woman you are. You are faithful, hardworking, loving, and wise. You’ve been my biggest encourager, and I’m so grateful.
  </p>
  <p>
    I know I’m not perfect, and I make mistakes sometimes. But I’m sorry for the moments I fall short, and I want you to know that I’m always trying to be better — for you, for us, and for the future we’re building together.
  </p>
  <p>
    I promise to keep choosing you every day. I will walk beside you, support your dreams, and love you through every season.
    You are my answered prayer, and I will do my best to be the man who protects your heart and leads with faith and love.
  </p>
</center>`,

    // Page 5 – Happy Anniversary
    `<center>
  <div style="font-weight:bold; color:#F26B38; margin-bottom:8px; font-size:1.1em;">
    July 15
  </div>
  <p>
    Happy 1st Anniversary, my love. This year with you has been one of the most beautiful chapters of my life.
  </p>
  <p>
    I want to grow more, not just as your partner but as a man of God. I want to lead with purpose, love with patience, and thrive in every way so I can be someone you're proud of.
  </p>
  <p>
    Thank you for being my greatest blessing. I look forward to forever with you — faithfully, joyfully, and hand-in-hand with God at the center.
  </p>
  <span class="emoji">💖💐✨</span>
</center>
<p class="signed">
    Yours Forever, <br />
    Seamor Estrabon
  </p>`,

    // Page 6 – Forever Us
    `<div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
  <img src="start.jpg" alt="Forever Us" class="zoomable" style="max-width: 56%; max-height: 100vh; object-fit: cover; border-radius: 10px; box-shadow: 0 6px 12px rgba(0,0,0,0.3);" />
  <p style="margin-top: 15px; font-weight: bold; font-size: 1.2em;">
    Our story is just beginning... 🤍
  </p>
  </div>`,
  ];

  let currentPage = 0;

  function showPage(index) {
    if (inside[0]) {
      // Add fade-out transition
      inside[0].style.transition = "opacity 0.4s";
      inside[0].style.opacity = 0;

      setTimeout(function () {
        inside[0].innerHTML = pages[index];
        // Add fade-in transition
        inside[0].style.opacity = 1;
      }, 400);
    }
  }

  // Show the first page on load
  showPage(currentPage);

  openB.addEventListener("click", function () {
    const annivTimer = document.getElementById("relationship-timer");
    card.setAttribute("class", "open-half");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "open-fully");
      timer = null;
    }, 1000);

    setTimeout(function () {
      nextB.style.display = "block";
      prevB.style.display = "block";
      if (annivTimer) {
        annivTimer.classList.add("show");
        annivTimer.classList.remove("hidden");
      }
    }, 2000);

    // Play music on first open
    var music = document.getElementById("bg-music");
    if (music) {
      music.play().catch(() => {}); // Ignore errors if already playing
    }
  });

  closeB.addEventListener("click", function () {
    const annivTimer = document.getElementById("relationship-timer");
    card.setAttribute("class", "close-half");
    if (annivTimer) {
      annivTimer.classList.add("hidden");
      annivTimer.classList.remove("show");
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute("class", "");
      timer = null;
    }, 1000);
    setTimeout(function () {
      nextB.style.display = "none";
      prevB.style.display = "none";
    }, 2000);
  });

  nextB.addEventListener("click", function () {
    setTimeout(function () {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
        prevB.style.display = "block";
        // Hide next if last page
        if (currentPage === pages.length - 1) nextB.style.display = "none";
      }
    }, 1000);
  });

  prevB.addEventListener("click", function () {
    setTimeout(function () {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
        nextB.style.display = "block";
        // Hide prev if first page
        if (currentPage === 0) prevB.style.display = "none";
      }
    }, 1000);
  });

  // Modal zoom logic
  document.addEventListener("click", function (e) {
    if (e.target.classList && e.target.classList.contains("zoomable")) {
      var modal = document.getElementById("img-modal");
      var modalImg = document.getElementById("img-modal-content");
      modalImg.src = e.target.src;
      modal.style.display = "flex";
    }
    // Close modal when clicking outside the image
    if (e.target.id === "img-modal") {
      e.target.style.display = "none";
    }
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const startDate = new Date("2024-07-15T00:00:00");
  const timerElement = document.getElementById("relationship-timer");

  function updateTimer() {
    const now = new Date();
    let delta = Math.floor((now - startDate) / 1000); // Total seconds difference

    const years = Math.floor(delta / (365.25 * 24 * 60 * 60));
    delta -= Math.floor(years * 365.25 * 24 * 60 * 60);

    const months = Math.floor(delta / (30.44 * 24 * 60 * 60));
    delta -= Math.floor(months * 30.44 * 24 * 60 * 60);

    const days = Math.floor(delta / (24 * 60 * 60));
    delta -= days * 24 * 60 * 60;

    const hours = Math.floor(delta / 3600);
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60);
    const seconds = Math.floor(delta % 60); // ✅ Make sure to floor this

    timerElement.innerHTML =
      `${years} year(s), ${months} month(s), ${days} day(s), ` +
      `${hours.toString().padStart(2, "0")}h ` +
      `${minutes.toString().padStart(2, "0")}m ` +
      `${seconds.toString().padStart(2, "0")}s`;
  }

  setInterval(updateTimer, 1000);
  updateTimer();
});
