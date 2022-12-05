/////////////////////////////////
// Sticky Header with Navbar

const stickyHeaderObserver = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];

    if (ent.isIntersecting) {
      $(".main-header").removeClass("sticky-top");
      $(".main-header").addClass("static-top");
    }
    if (!ent.isIntersecting) {
      $(".main-header").addClass("sticky-top");
      $(".main-header").removeClass("static-top");
    }
  },
  {
    root: null,
    rootMargin: "-60px",
  }
);

stickyHeaderObserver.observe($(".section-hero")[0]);

///////////////////////////////////
// Back to the top button

$("#btn-to-top").click(() => {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});
