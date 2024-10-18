export const rainbowColors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#9400D3",
];

export const initialGridElements = [
  {
    id: 1,
    icon: "bi-collection",
    title: "Fresh new layout",
    text: "With Bootstrap 5, we've created a fresh new layout for this template!",
  },
  {
    id: 2,
    icon: "bi-cloud-download",
    title: "Free to download",
    text: "As always, Start Bootstrap has a powerful collection of free templates.",
  },
  {
    id: 3,
    icon: "bi-card-heading",
    title: "Jumbotron hero header",
    text: "The heroic part of this template is the jumbotron hero header!",
  },
  {
    id: 4,
    icon: "bi-bootstrap",
    title: "Feature boxes",
    text: "We've created some custom feature boxes using Bootstrap icons!",
  },
  {
    id: 5,
    icon: "bi-code",
    title: "Simple clean code",
    text: "We keep our dependencies up to date and squash bugs as they come!",
  },
  {
    id: 6,
    icon: "bi-patch-check",
    title: "A name you trust",
    text: "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
  },
];

export const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
