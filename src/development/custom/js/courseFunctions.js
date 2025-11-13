let backCount = 0;

function pageLoadedCourseFunction() {
    
    console.log("pageLoadedCourseFunction function called: " + nextDirection);

    const TOTAL = 4;
    const base = "content/images/pageImages/pageBackground";

    const step = nextDirection === 0 ? 1 : Math.sign(nextDirection) || 1;

    backCount = ((backCount - 1 + step + TOTAL) % TOTAL) + 1;

    $("#nextPage").css({
      backgroundImage: "url('content/images/pageImages/pageBackground" + backCount + ".png')",
      backgroundPosition: "top left",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    });

    $("#previousPage").css({
      backgroundImage: "url('content/images/pageImages/pageBackground" + backCount + ".png')",
      backgroundPosition: "top left",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    });
    
  }

  function finishedMovingInCourseFunction() {
    
    console.log("finishedMovingInCourseFunction function called");

    $("#currentPage").css({
      backgroundImage: "url('content/images/pageImages/pageBackground" + backCount + ".png')",
      backgroundPosition: "top left",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    });

  }