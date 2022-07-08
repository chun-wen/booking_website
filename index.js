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
        content += `<div class="card content-cardContainer">
                      <img src="${data[i].image}" class="card-img-top" alt="${data[i].title}">
                      <div class="card-body content-card-body">
                        <h5 class="card-title content-card-title">${data[i].title}</h5>
                        <p class="card-text content-card-description">${data[i].description}</p>
                        <div style="padding-top:45px">
                        <button class="btn btn-light" type="button">${data[i].tag1}</button>
                        <button class="btn btn-light" type="button">${data[i].tag2}</button>
                        </div>
                      </div>
                      <div class="card-footer">
                      <div style="display:flex;justify-content: space-between;margin-bottom: 15px; margin-top:10px">
                       <div class="card-footer-align">
                       <img src="./assets/icon/icon_time.svg" alt="icon_time">
                        <span>
                         11:30–23:30
                        </span>
                      </div>
                      <div class="card-footer-align">
                        <img src="./assets/icon/icon_phone.svg" alt="icon_phone">
                        <span>
                         ${data[i].phone}
                        </span>
                      </div>
                      </div>
                     
                       <div class="card-footer-align content-card-footer-address">
                       <img src="./assets/icon/icon_location.svg" alt="icon_location">
                        <span>
                         ${data[i].address}
                        </span>
                       </div>
                        
                      </div>
                    </div>`;
      }
      contentCard.innerHTML = content;
      // contentLeftCard area
      let contentLeftCard = "";

      // contentRightCard area
      let contentRightCard = "";
    });
}

getCardInfo();
