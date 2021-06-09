function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    hideCollapse();
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function hideCollapse() {
  elements = document.getElementsByClassName("details");
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("class", "details collapse");
  }
}

// collapse all elements while typing


function createPage() {

  //data for each city
  let cities = [

    //negros occidental
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
      other: { contact: "Bago LGU", link: "https://www.facebook.com/cadizcityhealthoffice" }
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
      other: { contact: "La Carlota LGU", link: "https://www.facebook.com/La-Carlota-City-Health-Office-109444283784014/" }
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
      other: { contact: "Murcia LGU", link: "https://www.facebook.com/GerryMRojas" }
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
      other: { contact: "Pulupandan LGU", link: "https://www.facebook.com/MHOPulupandan/posts/2923097544521855" }
    },

    {
      name: "Sagay",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSdO1jMqsvRtfep3yiuxCJBe8SiawMi-91vwmuKxM6H4ssLrJQ/viewform" },
      other: { contact: "Sagay LGU", link: "https://www.facebook.com/pg/sagaycity/posts/" }
    },

    {
      name: "Salvador Benedicto",
      link: { vaccine: "" },
      other: { contact: "Don Salvador Benedicto LGU", link: "https://www.facebook.com/DonSalvadorBenedictoLGU/" }
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
    },

    // negros oriental
    {
      name: "Amlan",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSebsulg8uwjlTnxsX5m9AFo4wITg9dI0s0hIUvMfTKwqcmFZg/viewform?fbclid=IwAR2Hhi8nWuaZdT9zvpcfVYi_Ir9SI4LotxKWZhnkUAR6SNcIarVEOdUPwvg" },
      other: { contact: "Amlan LGU", link: "https://web.facebook.com/lguamlan/?ref=page_internal" }
    },
    {
      name: "Ayungon",
      link: { vaccine: "" },
      other: { contact: "Ayungon LGU", link: "https://www.facebook.com/lguAyungon/" }
    },
    {
      name: "Bacong",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSc_jnduIkHroI-dnbVdhJaifdeNPpLEYZj1XoUPfSwSVaYNSA/viewform" },
      other: { contact: "Bacong LGU", link: "https://web.facebook.com/BacongPhilippines6216/?ref=page_internal" }
    },
    {
      name: "Bais",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLScovG4t0YvupKsVnRjUBIreTu3YH3VhXp6OTXWaILcPbIwqDw/viewform?fbclid=IwAR01ztMdYnvQSK13ZGnNRmhLtdX8mdFsadA47HS7xENwp8LvNUj4ZSFKxV8" },
      other: { contact: "Bais LGU", link: "https://web.facebook.com/BaisPIO/posts/306805297512838" }
    },
    {
      name: "Basay",
      link: { vaccine: "" },
      other: { contact: "Basay LGU", link: "https://web.facebook.com/Basay-Rural-Health-Unit-101982551382338/?ref=page_internal" }
    },
    {
      name: "Bayawan",
      link: { vaccine: "" },
      other: { contact: "Bayawan LGU", link: "https://web.facebook.com/BywnCity/?_rdc=1&_rdr" }
    },
    {
      name: "Bindoy",
      link: { vaccine: "" },
      other: { contact: "Bindoy LGU", link: "https://web.facebook.com/bindoy6209/?_rdc=1&_rdr" }
    },
    {
      name: "Canlaon",
      link: { vaccine: "" },
      other: { contact: "Canlaon LGU", link: "http://canlaoncity.gov.ph/?pageid=1&newsid=25&category=about&whatarticle=4&wfunc=viewarticle&rightpanel=yes&titlecap=Contact%20Us" }
    },
    {
      name: "Dauin",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLScqG-8mBys-BgDd1jJALpzGb_MrHnpFGxXM9kDQhDC_NXe3Vw/viewform" },
      other: { contact: "Dauin LGU", link: "https://web.facebook.com/Dauin-Inter-Agency-Task-Force-102767128359233/" }
    },
    {
      name: "Dumaguete",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSeG2nDFKO48_4l0GRnnYkpZnDcbxF4nCWHkdoDVup8LYLA0Jw/viewform?fbclid=IwAR1p3Kalfy2Gik7g6Hk7Vq-33uURs3EZgItOneEgkzAGa86OxOxzdXqOAV8" },
      other: { contact: "Dumaguete LGU", link: "https://dumaguetecity.gov.ph/2021/04/05/do-you-want-to-be-vaccinated-against-covid-19/" }
    },
    {
      name: "Guihulngan",
      link: { vaccine: "" },
      other: { contact: "Guihulngan LGU", link: "https://web.facebook.com/lguguihulngancity" }
    },
    {
      name: "Jimalalud",
      link: { vaccine: "" },
      other: { contact: "Jimalalud LGU", link: "https://jimalalud.gov.ph/" }
    },
    {
      name: "La Libertad",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSeSqKmYaoX-O3kgTFx-X2qN04jLJ7dVyr1nAhDy5EWTWYzKkQ/viewform" },
      other: { contact: "La Libertad LGU", link: "https://web.facebook.com/La-Libertad-Negros-Oriental-343589612389868" }
    },

    {
      name: "Jimalalud",
      link: { vaccine: "" },
      other: { contact: "Jimalalud LGU", link: "https://jimalalud.gov.ph/" }
    },

    {
      name: "Mabinay",
      link: { vaccine: "" },
      other: { contact: "Mabinay LGU", link: "https://web.facebook.com/Municipality-of-Mabinay-104717014542326/" }
    },

    {
      name: "Manjuyod",
      link: { vaccine: "" },
      other: { contact: "Manjuyod LGU", link: "https://web.facebook.com/MunicipalityofManjuyodOfficial/?_rdc=1&_rdr" }
    },

    {
      name: "Pamplona",
      link: { vaccine: "" },
      other: { contact: "Pamplona LGU", link: "https://web.facebook.com/pamplona6205/?_rdc=1&_rdr" }
    },
    {
      name: "San Jose",
      link: { vaccine: "" },
      other: { contact: "San Jose LGU", link: "https://web.facebook.com/SanJoseFirst/" }
    },
    {
      name: "Santa Catalina",
      link: { vaccine: "" },
      other: { contact: "Santa Catalina LGU", link: "https://www.facebook.com/Sidlak-Santa-Catalina-675197745908906" }
    },
    {
      name: "Siaton",
      link: { vaccine: "" },
      other: { contact: "Siaton LGU", link: "https://web.facebook.com/SiatonUpdates/" }
    },
    {
      name: "Sibulan",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSeVZgTi2SRmaKzil5PEulh5XGty6s5aFY4NHWvv5gD0M7bEjQ/viewform" },
      other: { contact: "Sibulan LGU", link: "https://www.facebook.com/Sibulanos" }
    },
    {
      name: "Tanjay",
      link: { vaccine: "" },
      other: { contact: "Tanjay LGU", link: "https://web.facebook.com/Tanjay-City-Information-Office-102611131537775/" }
    },
    {
      name: "Tayasan",
      link: { vaccine: "" },
      other: { contact: "Tayasan LGU", link: "https://web.facebook.com/LGUTayasan/" }
    },
    {
      name: "Valencia",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLScyclYFDRjUE29KF1Z8hndoh5jA_cKjuWtTUb-8QKgeeQomRA/viewform?fbclid=IwAR2PkJS5fYjtJEryTLj4w_AnnlFfk2eyhzpTQ4dqZVTTNdxUYvVGjm7J6Bc" },
      other: { contact: "Valencia LGU", link: "https://web.facebook.com/LGUCityofValencia/" }
    }, {
      name: "Vallehermoso",
      link: { vaccine: "https://docs.google.com/forms/d/e/1FAIpQLSfKKuoQZoC7g9vYN_TnOQCwayhPYXO4BVkLUJi7AZgLpLuzBQ/viewform" },
      other: { contact: "Vallehermoso LGU", link: "https://web.facebook.com/RHUVallehermosoNegOr/" }
    },
    {
      name: "Zamboanguita",
      link: { vaccine: "" },
      other: { contact: "Zamboanguita LGU", link: "https://web.facebook.com/MayorGlenson/" }
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
    details_container.setAttribute("class", "collapse details");
    details_container.setAttribute("id", id);
    details.setAttribute("class", "card card-body drops");

    //color changer

    if (cities[i]["link"]["vaccine"].length > 1) {
      details.innerHTML = `
      <div class = "inputs">Vaccine registration <a href = ${cities[i]["link"]["vaccine"]}>link</a></div>
      <div class = "inputs">${cities[i]["other"]["contact"]} <a href = ${cities[i]["other"]["link"]}>contact</a></div>
      `
      details.setAttribute("style", "background-color: #a9ff94");
    }

    else {
      details.innerHTML = `
      <div class = "inputs">Currently no online vaccine registration link is available. Contact LGU for potential in-person registration.</div>
      <div class = "inputs">${cities[i]["other"]["contact"]} <a href = ${cities[i]["other"]["link"]}>contact</a></div>
      `
      details.setAttribute("style", "background-color: #ffcbab");
    }



    //  details.textContent = cities[i]["link"]["vaccine"];


    entry.appendChild(entry_link);
    list.appendChild(entry);
    details_container.appendChild(details);
    list.appendChild(details_container);

  }


}

createPage();