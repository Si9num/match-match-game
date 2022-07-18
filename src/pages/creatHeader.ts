function creater(page: string): HTMLElement {
  const elem = document.createElement("div");
  elem.innerHTML = page;
  return elem;
}
export default creater;
