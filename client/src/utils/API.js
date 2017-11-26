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
  getSavedArticles :  function() {
    return axios.get("/api/saved");
  },
  // Deletes the article with the given id
  deleteArticle : function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an article to the database
  saveArticle : function(articleData) {
    console.log("I am here in the API file");
    console.log(articleData);
    return axios.post("/api/saved", articleData);
  }
};
