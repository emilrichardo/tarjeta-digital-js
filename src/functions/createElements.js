//function para crear elemento html
export default function createElements(element, dataElement) {
  const elemento = document.querySelectorAll(element);
  if (elemento) {
    elemento.forEach((el) => {
      el.innerHTML = dataElement;
    });
  }
}
