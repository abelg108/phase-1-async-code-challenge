// code here
const shows = [
    {
      id: 1,
      title: "The Walking Dead"
    },
    {
      id: 2,
      title: "Loki"
    },
    {
      id: 3,
      title: "Riverdale"
    },
    {
      id: 4,
      title: "Game Of Thrones"
    },
    {
      id: 5,
      title: "Legacies"
    }
  ]
const showContainer = document.getElementById("list")

  function rendershow(shows) {
   
    const showName = document.createElement("li")
    showName.textContent = shows.title 
    showContainer.append(showName)

  } 
 function init() {
    shows.forEach(rendershow)
 } 

 init()