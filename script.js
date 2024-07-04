let ul = document.querySelector("ul");
let Allpage = 20;
function elem(Allpage, page) {
  let li = "";
  let beforePages = page - 1;
  let afterPages = page + 1;
  let liActive;
  if (page > 1) {
    li += `<li class="btn" onclick="elem(Allpage, ${page - 1})">
    <svg
      width="20px"
      class="left"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512">
      <path
        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
    </svg>
  </li>`;
  }

  for (let pagelength = beforePages; pagelength < afterPages; pagelength++) {
    if (pagelength > Allpage) {
      continue;
    }
    if (pagelength == 0) {
      pagelength = pagelength + 1;
    }
    if (page == pagelength) {
      liActive = "Active";
    } else {
      liActive = "";
    }
    li += `
        <li class="numb ${liActive}"><span>${pagelength}</span></li>
        `;
  }

  if (page < Allpage) {
    li += `<li class="btn" onclick="elem(Allpage, ${page + 1})">
    <svg
      width="20px"
      class="right"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512">
      <path
        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
    </svg>
  </li>`;
  }

  ul.innerHTML = li;
}
elem(Allpage, 2);
