import axios from "axios";

export default {
  // Gets articles from NY Times
  getArticles :  function(searchTerm, startYear, endYear) {
    const startDate = `${startYear}0101`;
    const endDate = `${endYear}1231`;
    let apiKey = "24881b82f17b48b299e435dbc820ef19";
    let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${searchTerm}&begin_date=${startDate}&end_date=${endDate}&fl=web_url, pub_date, headline`; 

    return axios.get(url);
  },  
  // Gets the article with the given id
  getArticle :  function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle : function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle : function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};



//import axios from "axios";

// export default {
//   // Gets all articles
//   getArticles: function(topic, startYear, endYear) {
//       console.log(topic); // + ' | ' + startyear + ' | ' + endyear);
//     let apikey = `24881b82f17b48b299e435dbc820ef19`;
//     let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apikey}&q=${topic}&begin_date=${startYear}0101&end_date=${endYear}1231`;
//     return axios.get(url)
//       .then(res => {
//           // console.log(res.data.response.docs);
//         return res.data.response.docs;
//       });
//   },