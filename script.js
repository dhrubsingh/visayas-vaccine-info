function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}


function createPage() {

  //data for each city
  let cities = [
    {
      name: "Bacolod",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSfvvKWs1O5ewyusg4zl97JcmeC7BLxtn9DOFCd4apEnAGbS1Q/viewform?fbclid=IwAR28qG_b7IsYGFJATEAKf9q-_l3CYPA3NwVzo3bvCvTwVL-MWjpBT072YJc" },
      other: { contact: "Bacolod City Government", link: "https://www.bacolodcity.gov.ph/" }

    },
    {
      name: "Talisay",
      link: { vaccine: "https://bit.ly/talisaycityvaccine" },
      other: { contact: "Talisay City Government", link: "https://www.talisaycity.gov.ph/" }
    },
    {
      name: "Silay",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSdj-ftpVYrpJNpG8uQiL5EhEatsFjBYAtFGv1_jjCN4BxAQQA/viewform?vc=0&c=0&w=1&flr=0&fbclid=IwAR27AaZ4szgm4pMGpcZ5ldxX4fp0esNX63B1RAm_9oZj3YKVlf0mTCAxB9I" },
      other: { contact: "Silay City Government", link: "http://www.silaycity.gov.ph/about.html" }
    },

    {
      name: "Himamalyan",
      link: { vaccine: "" },
      other: { contact: "Himamalyan EOC", link: "https://www.facebook.com/MayorRaymundTongsonOfficial/?ref=page_internal" }

    },

    {
      name: "Cadiz",
      link: { vaccine: "https://www.facebook.com/cadizcityhealthoffice/posts/4003532036351303" },
      other: { contact: "Cadiz LGU", link: "https://www.facebook.com/cadizcityhealthoffice" }
    },

    {
      name: "Bago",
      link: { vaccine: "" },
      other: { contact: "Vaccine registration in-person at Bago LGU", link: "https://www.facebook.com/cadizcityhealthoffice" }
    },

    {
      name: "Binalbagan",
      link: { vaccine: "" },
      other: { contact: "Binalbagan LGU", link: "https://www.facebook.com/LGU-Binalbagan-205696892778314/" }
    },

    {
      name: "Calatrava",
      link: { vaccine: "" },
      other: { contact: "Calatrava LGU", link: "https://www.facebook.com/calatravanegrospage/" }
    },

    {
      //important double check!!
      name: "Candoni",
      link: { vaccine: "" },
      other: { contact: "Candoni LGU", link: "https://www.facebook.com/cadizcityhealthoffice" }
    },

    {
      name: "Cauayan",
      link: { vaccine: "" },
      other: { contact: "Cauayan Information Center", link: "https://www.facebook.com/cauayanlsihelpdesk/" }
    },

    {
      name: "Escalante",
      link: { vaccine: "" },
      other: { contact: "Escalante LGU", link: "https://www.facebook.com/escalantecitylgu/" }
    },
    {
      name: "Hinigaran",
      link: { vaccine: "" },
      other: { contact: "Hinigran LGU", link: "http://www.hinigaran.gov.ph/about-hinigaran/contact-us" }
    },

    {
      name: "Hinoba-an",
      link: { vaccine: "" },
      other: { contact: "Hinoba-an LGU", link: "http://www.hinobaan.gov.ph/contact-us" }
    },
    {
      name: "Ilog",
      link: { vaccine: "" },
      other: { contact: "Ilog LGU", link: "https://www.facebook.com/BastaIlogMabaskog/" }
    },
    {
      name: "Isabela",
      link: { vaccine: "" },
      other: { contact: "Isabela LGU", link: "https://www.facebook.com/LGU-Isabela-100748058061150/" }
    },
    {
      name: "Kabankalan",
      link: { vaccine: "https://www.facebook.com/lgukabankalan/posts/30-kabankalan-medical-frontliners-gets-covid-19-vaccine-thirty-medical-frontline/5200702509972031/" },
      other: { contact: "In-person registration at Kabankalan LGU", link: "https://www.facebook.com/lgukabankalan/?ref=page_internal" }
    },
    {
      name: "La Carlota",
      link: { vaccine: "" },
      other: { contact: "Check La Carlota LGU for perhaps in-person registration", link: "https://www.facebook.com/La-Carlota-City-Health-Office-109444283784014/" }
    },
    {
      name: "La Castellana",
      link: { vaccine: "" },
      other: { contact: "La Castellana LGU", link: "https://www.facebook.com/Mdrrmo-La-Castellana-105690740799256/" }
    },
    {
      name: "Manapla",
      link: { vaccine: "" },
      other: { contact: "Manapla LGU", link: "https://www.facebook.com/Municipality-of-Manapla-LGU-566376233400192/" }
    },
    {
      name: "Moises Padilla",
      link: { vaccine: "" },
      other: { contact: "Moises Padilla", link: "https://www.facebook.com/biradahugpongmagallon/" }
    },
    {
      name: "Murcia",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSfvvKWs1O5ewyusg4zl97JcmeC7BLxtn9DOFCd4apEnAGbS1Q/viewform?fbclid=IwAR28qG_b7IsYGFJATEAKf9q-_l3CYPA3NwVzo3bvCvTwVL-MWjpBT072YJc" },
      other: { contact: "Mayor Gerry M. Rojas", link: "https://www.facebook.com/GerryMRojas" }
    },
    {
      name: "Pontevedra",
      link: { vaccine: "" },
      other: { contact: "Pontevedra LGU", link: "https://www.facebook.com/Marayo2016" }
    },
    {
      name: "Cadiz",
      link: { vaccine: "https://www.facebook.com/cadizcityhealthoffice/posts/4003532036351303" },
      other: { contact: "Cadiz LGU", link: "https://www.facebook.com/cadizcityhealthoffice" }
    },

    {
      name: "Pontevedra",
      link: { vaccine: "" },
      other: { contact: "Pontevedra LGU", link: "https://www.facebook.com/Marayo2016" }
    },

    {
      name: "Pulupandan",
      link: { vaccine: "" },
      other: { contact: "Contact Health Care Workers in your Barangay: Pulupandan LGU", link: "https://www.facebook.com/MHOPulupandan/posts/2923097544521855" }
    },

    {
      name: "Sagay",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSdO1jMqsvRtfep3yiuxCJBe8SiawMi-91vwmuKxM6H4ssLrJQ/viewform" },
      other: { contact: "Sagay LGU", link: "https://www.facebook.com/pg/sagaycity/posts/" }
    },

    {
      name: "Salvador Benedicto",
      link: { vaccine: "" },
      other: { contact: "Registration in-person: Don Salvador Benedicto LGU", link: "https://www.facebook.com/DonSalvadorBenedictoLGU/" }
    },

    {
      name: "San Carlos",
      link: { vaccine: "https://vamosmobile.app/resbakuna/" },
      other: { contact: "Pontevedra LGU", link: "https://www.facebook.com/pg/SCCLGUPH/posts/" }
    },
    {
      name: "San Enrique",
      link: { vaccine: "" },
      other: { contact: "No LGU Facebook page", link: "" }
    },

    {
      name: "Sipalay",
      link: { vaccine: "https://www.facebook.com/sipalaycityLGU/posts/4091184017609409" },
      other: { contact: "Sipalay LGU", link: "https://www.facebook.com/sipalaycityLGU/" }
    },

    {
      name: "Sipalay",
      link: { vaccine: "https://www.facebook.com/sipalaycityLGU/posts/4091184017609409" },
      other: { contact: "Sipalay LGU", link: "https://www.facebook.com/sipalaycityLGU/" }
    },
    {
      name: "Toboso",
      link: { vaccine: "" },
      other: { contact: "Toboso LGU", link: "https://www.facebook.com/toboso.mho/" }
    },
    {
      name: "Valladolid",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSd1BjH_9VNE2W8S-8dmFbeA8c4x8eUPViKfOU0BXUcbrXOzkw/closedform" },
      other: { contact: "Form currently closed, but stay tuned to website: Valladolid LGU", link: "https://www.facebook.com/Valladolid2017/" }
    },
    {
      name: "Victorias",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSd1BjH_9VNE2W8S-8dmFbeA8c4x8eUPViKfOU0BXUcbrXOzkw/closedform" },
      other: { contact: "Form currently closed, but stay tuned to website: Victorias LGU", link: "http://victoriascity.gov.ph/first-batch-covid-vaccine-priorities-gets-2nd-dose/#respond" }
    }
  ];


  container = document.querySelector(".container");
  list = document.getElementById("myUL");

  for (let i = 0; i < cities.length; i++) {

    let entry = document.createElement("li");
    let entry_link = document.createElement("a");
    let details_container = document.createElement("div")
    let details = document.createElement("div");
    entry_link.textContent = cities[i]["name"];

    id = `collapse${String(i)}`

    // create list element tags
    entry.setAttribute("class", "list-group-item");

    //set tags for anchor element
    entry_link.setAttribute("data-toggle", "collapse");
    entry_link.setAttribute("href", `#${id}`);
    entry_link.setAttribute("role", "button");
    entry_link.setAttribute("aria-expanded", "false");
    entry_link.setAttribute("aria-controls", `id`);

    //create details
    details_container.setAttribute("class", "collapse");
    details_container.setAttribute("id", id);
    details.setAttribute("class", "card card-body");

    if (cities[i]["link"]["vaccine"].length > 1) {
      details.innerHTML = `
      <div>Vaccine registration <a href = ${cities[i]["link"]["vaccine"]}>link</a></div>
      <div>${cities[i]["other"]["contact"]} <a href = ${cities[i]["other"]["link"]}>contact</a></div>
      `
    }

    else {
      details.innerHTML = `
      <div>Currently no online vaccine registration link is available</div>
      <div>${cities[i]["other"]["contact"]} <a href = ${cities[i]["other"]["link"]}>contact</a></div>
      `
    }



    //  details.textContent = cities[i]["link"]["vaccine"];


    entry.appendChild(entry_link);
    list.appendChild(entry);
    details_container.appendChild(details);
    list.appendChild(details_container);

  }


}

createPage();