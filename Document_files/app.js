// const func = () => {
//   let i = 0;
//   let j = setTimeout(() => {
//     i++;
//     return i;
//   }, 3000);
//   console.log("who am i", j);
// };
// func();

// console.log("hi");

/**Fetch data from server */
data = fetch("https://course-api.com/react-tabs-project")
  .then((response) => response.json())
  .then((data) => console.log(data));

const a =  async (){
  data = await fetch("https://course-api.com/react-tabs-project");
  response = await data.json();
  return response;
};
console.log(a);
