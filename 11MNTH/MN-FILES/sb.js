function updlog() {
    var text = document.getElementById("hiddenLog");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
    text.style.display = "none";
     }
    }

// Ensure the script runs after HTML loads
document.addEventListener("DOMContentLoaded", () => {
let myBtn = document.getElementById("btt");
  window.onscroll = function() {
    // Checks both documentElement and body for compatibility
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (scrollPos > 100) {
      myBtn.style.display = "block";
    } else {
      myBtn.style.display = "none";
    }
  };
});

function topFunction() {
  setTimeout(function() {}, 50);
  // Scrolls smoothly to the top for all modern browsers
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function sugBfunction() {
  const button = document.getElementById('sugB');
  const sound = document.getElementById('feedback');
    // Wait 50ms before opening the new page
    sound.play();
    setTimeout(function() {
      window.open('mailto:{irishiruuu@gmail.com}?subject=Soundboard Feedback&body=Hello! I would like to provide feedback for your project.');
    }, 50);

    // const email = "irishiruuu@gmail.com";
    // const subject = encodeURIComponent("Soundboard v1.0 | Feedback");
    // const body = encodeURIComponent("This is a pre-filled email body.");

}

// Cute SFX

function playyippee() {
  // Locate the audio tag by its ID
  const audio = document.getElementById("yippee");
  audio.currentTime = 0; // Reset sound to the beginning
  audio.type = "audio/mpeg"; // Set the type to audio/mpeg
  audio.play(); // Play the file
}

function playpikmin() {
  const audio = document.getElementById("pikmin");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playquack() {
  const audio = document.getElementById("quack");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playsnore() {
  const audio = document.getElementById("snore");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playevillaugh() {
  const audio = document.getElementById("evillaugh");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playdingle() {
  const audio = document.getElementById("dingle");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playnumnumnum() {
  const audio = document.getElementById("numnumnum");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
} 

function playbowomp() {
  const audio = document.getElementById("bowomp");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playRnumnumnum() {
  const audio = document.getElementById("Rnumnumnum");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

// Funny SFX

function playindiansong() {
  const audio = document.getElementById("indiansong");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playscream() {
  const audio = document.getElementById("scream");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playsuspense() {
  const audio = document.getElementById("suspense");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playarayko() {
  const audio = document.getElementById("arayko");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playfart() {
  const audio = document.getElementById("fart");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playbhagt() {
  const audio = document.getElementById("bhagt");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playfaaah() {
  const audio = document.getElementById("faaah");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playgetOUT() {
  const audio = document.getElementById("getOUT");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

// Memes SFX

function playangry() {
  const audio = document.getElementById("angry");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playpinoyeminem() {
  const audio = document.getElementById("pinoyeminem");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playallenkalbo() {
  const audio = document.getElementById("allenkalbo");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}