// adds a dog image
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  const dogImg: HTMLImageElement = document.createElement("img");
  dogImg.src = msg;
  document.body.appendChild(dogImg);
});

// adds a word count
const article: HTMLElement | null = document.querySelector("article");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text: string | null = article.textContent;
  const wordMatchRegExp: RegExp = /[^\s]+/g; // Regular expression
  const words: IterableIterator<RegExpMatchArray> | undefined =
    text?.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount: number = words ? [...words].length : 0;
  const readingTime: number = Math.round(wordCount / 200);
  const badge: HTMLParagraphElement = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading: HTMLHeadingElement | null = article.querySelector("h1");
  // Support for article docs with date
  const date: any = article.querySelector("time")?.parentNode;

  (date ?? heading)?.insertAdjacentElement("afterend", badge);
}

// add an element that covers the entire page
const overlayDiv: HTMLDivElement = document.createElement("div");
const button: HTMLButtonElement = document.createElement("button")

// set the button's text
button.textContent = "click me"

// Set the style to cover the entire page
overlayDiv.style.position = "fixed";
overlayDiv.style.display = "block";
overlayDiv.style.top = "0";
overlayDiv.style.bottom = "0";
overlayDiv.style.right = "0";
overlayDiv.style.left = "0";
overlayDiv.style.width = "100%";
overlayDiv.style.height = "100%";
overlayDiv.style.overflow = "hidden";
overlayDiv.style.opacity = "1";
overlayDiv.style.margin = "0";
overlayDiv.style.padding = "0";
overlayDiv.style.border = "0";
overlayDiv.style.backgroundColor = "#FFFFFF"; // You can adjust the background color and opacity
overlayDiv.style.zIndex = "9999999999999999"; // Set a high z-index value

// Append the div to the document body
overlayDiv.appendChild(button)
document.body.appendChild(overlayDiv);