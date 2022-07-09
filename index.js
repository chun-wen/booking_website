const contentCard = document.querySelector(".content-card");
const contentLeftCard = document.querySelector(".description_left-card");
const contentRightCard = document.querySelector(".description_right-card");

function getCardInfo() {
  fetch(
    "https://fakerapi.it/api/v1/custom?title=city&image=image&description=text&date=dateTime&phone=phone&tag1=pokemon&tag2=pokemon&tag3=pokemon&address=streetAddress"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const { data } = result;
      console.log(data);
      // surrounding area
      let content = "";
      for (let i = 0; i < 3; i++) {
        content += `<div class="card content-cardContainer col-sm col-12 mb-3">
            <img src="${data[i].image}" class="card-img-top" alt="${data[i].title}" />
            <div class="card-body content-card-body">
                <h5 class="card-title content-card-title">${data[i].title}</h5>
                <p class="card-text content-card-description">${data[i].description}</p>
                <div style="padding-top: 45px">
                <button class="btn btn-light" type="button">${data[i].tag1}</button>
                <button class="btn btn-light" type="button">${data[i].tag2}</button>
                </div>
            </div>
            <div class="card-footer">
                <div class='content-card-footer-container'>
                <div class="card-footer-align">
                    <img src="./assets/icon/icon_time.svg" alt="icon_time" />
                    <span> 11:30–23:30 </span>
                </div>
                <div class="card-footer-align">
                    <img src="./assets/icon/icon_phone.svg" alt="icon_phone" />
                    <span> ${data[i].phone} </span>
                </div>
                </div>
                <div class="card-footer-align content-card-footer-address">
                <img src="./assets/icon/icon_location.svg" alt="icon_location" />
                <span> ${data[i].address} </span>
                </div>
            </div>
            </div>`;
      }
      contentCard.innerHTML = content;
      // contentLeftCard area
      let contentLeftCardInnerHTML = "";
      for (let i = 4; i < data.length; i++) {
        contentLeftCardInnerHTML += `<div class="card mb-3">
        <div class="row g-0">
            <div class="col-sm-3 col-12">
            <img src="${data[i].image}" class="card-img-top" alt="${
          data[i].title
        }" />
            </div>
            <div class="col-sm-9 col-12">
            <div class="card-body content-card-body">
                <h3 class="card-text mb-2 opacity-50 mb-4">${
                  data[i].date.date.split(" ")[0]
                }</h3>
                <h5 class="card-title content-card-title">${data[i].title}</h5>
                <p class="card-text content-card-description">${
                  data[i].description
                }</p>
                <div style="padding-top: 45px">
                <button class="btn btn-light" type="button">${
                  data[i].tag1
                }</button>
                <button class="btn btn-light" type="button">${
                  data[i].tag2
                }</button>
                <button class="btn btn-light" type="button">${
                  data[i].tag3
                }</button>
                </div>
            </div>
            <div class="card-footer" style='background: white'>
                <div
                class="content-card-footer-container flex-sm-row flex-column"
                >
                <div class="card-footer-align">
                    <img src="./assets/icon/icon_time.svg" alt="icon_time" />
                    <span> 11:30–23:30 </span>
                </div>
                <div class="card-footer-align content-card-footer-address">
                <img src="./assets/icon/icon_location.svg" alt="icon_location" />
                <span> ${data[i].address} </span>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>`;
      }
      contentLeftCard.innerHTML = contentLeftCardInnerHTML;

      // contentRightCard area
      let contentRightCardInnerHTML = "";
      for (let i = 0; i < 3; i++) {
        contentRightCardInnerHTML += `<div class="card mb-3">
                <div class="card-body content-card-body">
                <div class="content-card-body-Container pb-3">
                    <div class="content-card-body-text">
                    <img src="./assets/icon/icon_logo.svg" alt="logo" />
                    <h6 >D&A Hostel</h6>
                    </div>
                    <div class="content-card-body-time">${
                      data[i].date.date.split(" ")[0]
                    }</div>
                </div>
                <h5 class="card-title content-card-title">${data[i].title}</h5>
                <p class="card-text content-card-description">${
                  data[i].description
                }</p>
                </div>
            </div>`;
      }
      console.log("contentRightCardInnerHTML", contentRightCardInnerHTML);
      contentRightCard.innerHTML = contentRightCardInnerHTML;
    });
}

getCardInfo();
