// show more and show less in index page
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".sm-toggle_btn");
  const textContent = document.querySelector(".sm-text_content");

  // Set initial state
  const maxHeight = 100; // Limit of visible text
  textContent.style.maxHeight = `${maxHeight}px`;

  toggleButton.addEventListener("click", function () {
    if (textContent.style.maxHeight === `${maxHeight}px`) {
      // Show the full content with smooth transition
      textContent.style.maxHeight = `${textContent.scrollHeight}px`;
      toggleButton.innerHTML =
        'Read less <span class="toggle-icocn_wraper"><iconify-icon icon="uil:angle-up"></iconify-icon></span>';
    } else {
      // Collapse the content with smooth transition
      textContent.style.maxHeight = `${maxHeight}px`;
      toggleButton.innerHTML =
        'Read more <span class="toggle-icocn_wraper"><iconify-icon icon="uil:angle-down"></iconify-icon></span>';
    }
  });
});
