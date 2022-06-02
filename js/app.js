// expand text in cards
document.addEventListener('DOMContentLoaded', () => {
  const expandsMore = document.querySelectorAll('[expand-more]')

  function expand() {
    const showContent = document.getElementById(this.dataset.target)
    if (showContent.classList.contains('expand-active')) {
      this.innerHTML = this.dataset.showtext
    } else {
      this.innerHTML = this.dataset.hidetext
    }
    showContent.classList.toggle('expand-active')
  }

  expandsMore.forEach(expandMore => {
    expandMore.addEventListener('click', expand)
  })

})


//   scroll to top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 103) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#00cccc ${scrollValue}%, #FFF ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;