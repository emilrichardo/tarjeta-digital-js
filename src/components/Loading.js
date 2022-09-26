/* window.onload = setTimeout(function () {
  loader.classList.add("hidden");
}, 1000);
 */
export default function Loading(state) {
  const loadingComponent = `
  <div class=" ${state}  bg-blue-900 h-screen w-screen fixed let-0 top-0">
      <span>Loading</span>
    </div>
  `;

  return loadingComponent;
}

//loading
/* const loader = document.getElementById("loader");
loader.innerHTML = Loading(false);
 */
