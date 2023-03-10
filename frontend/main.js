window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const localApi = "http://localhost:7071/api/GetResumeCounter";
const functionApi =
  "https://ctsgetresumecounter.azurewebsites.net/api/GetResumeCounter?code=6BHGYLwtA5mLgW60hsnI7NMvz1iEw9Gvacer0Em-G_piAzFu5CI-tA==";

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Site called function API.");
      count = response.count;
      document.getElementById("counter").innerText = count;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};
