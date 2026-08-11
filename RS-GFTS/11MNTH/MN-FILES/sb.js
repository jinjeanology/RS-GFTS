<<<<<<< HEAD:RS-GFTS/11MNTH/MN-FILES/sb.js
// Update Log

function updlog() {
    var text = document.getElementById("hiddenLog");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
    text.style.display = "none";
     }
    }

// Settings

function settings() {
    var text = document.getElementById("hiddenSettings");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
    text.style.display = "none";
     }
    }

// Back to Top

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

// Opens a new tab to Outlook(?)

function topFunction() {
  setTimeout(function() {}, 50);
  // Scrolls smoothly to the top for all modern browsers
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function spotifyFunction() {
  const button = document.getElementById('spotify')
  const audio = document.getElementById('spotify')
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();  
}

function sugBfunction() {
  const button = document.getElementById('sugB');
  const sound = document.getElementById('feedback');
    // Wait 50ms before opening the new page
    sound.play();
    setTimeout(function() {
      window.open('mailto:{irishiruuu@gmail.com}?subject=Soundboard Feedback&body=Hello! I would like to provide feedback for your project.', '_blank');
    }, 50);

    // const email = "irishiruuu@gmail.com";
    // const subject = encodeURIComponent("Soundboard v1.0 | Feedback");
    // const body = encodeURIComponent("This is a pre-filled email body.");

}

// IN PROGRESS: SITE COLOR GENERATOR

function rndC() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
            
      // Construct the RGB color string
  const randomColor = `rgb(${r}, ${g}, ${b})`;
            
      // Target the text element by its ID and change its color style
  document.getElementById('rndC').style.color = randomColor;
}

//oooo Secret Button?
function rareChance() {
        // Replace 'yourfile.pdf' with the path or URL to your actual file
  const fileUrl = 'SFX/MSFX/No Way Out/index3.html';    
        // '_blank' forces the browser to open it in a new tab
  window.open(fileUrl, '_blank'); 
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

function playRscream() {
  const audio = document.getElementById("Rscream");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playgahdayum() {
  const audio = document.getElementById("gahdayum");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playTscream() {
  const audio = document.getElementById("Tscream");
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

function playbwthb() {
  const audio = document.getElementById("bwthb");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playcooked() {
  const audio = document.getElementById("cooked");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playdbgg() {
  const audio = document.getElementById("dbgg");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playhltbo() {
  const audio = document.getElementById("hltbo");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playijgsn() {
  const audio = document.getElementById("ijgsn");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playlaugh() {
  const audio = document.getElementById("laugh");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playmccave() {
  const audio = document.getElementById("mccave");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playmsy() {
  const audio = document.getElementById("msy");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playrgburp() {
  const audio = document.getElementById("rgburp");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playttgbf() {
  const audio = document.getElementById("ttgbf");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playviwty() {
  const audio = document.getElementById("viwty");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playyams() {
  const audio = document.getElementById("yams");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
}

function playwscream() {
  const audio = document.getElementById("wscream");
  audio.currentTime = 0;
  audio.type = "audio/mpeg";
  audio.play();
=======
// Update Log

function updlog() {
    var text = document.getElementById("hiddenLog");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
    text.style.display = "none";
     }
    }

// Settings

function settings() {
    var text = document.getElementById("hiddenSettings");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
    text.style.display = "none";
     }
    }

// Back to Top

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

// Opens a new tab to Outlook(?)

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

// IN PROGRESS: SITE COLOR GENERATOR

function rndC() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
            
      // Construct the RGB color string
  const randomColor = `rgb(${r}, ${g}, ${b})`;
            
      // Target the text element by its ID and change its color style
  document.getElementById('rndC').style.color = randomColor;
}

//oooo Secret Button?
function rareChance() {
        // Replace 'yourfile.pdf' with the path or URL to your actual file
  const fileUrl = 'SFX/MSFX/No Way Out/index3.html';    
        // '_blank' forces the browser to open it in a new tab
  window.open(fileUrl, '_blank'); 
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

function playRscream() {
  const audio = document.getElementById("Rscream");
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
>>>>>>> fef020029b188a870b4df7d4e133d0ac47ca4c4e:11MNTH/MN-FILES/sb.js
}