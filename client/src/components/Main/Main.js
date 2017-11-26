import React, { Component} from "react";
import Jumbotron from "../Jumbotron";
import Search from "../Search";
import Saved from "../Saved";
import API from "../../utils/API";

class Main extends Component {
  state = {
    savedArticles : [],
    deleteArticleId : "",
    savedArticleTitles : []
  };

  //when the component mounts, load all articles and save them to this.state.savedArticles
  componentDidMount() {
    this.loadSavedArticles();
  }
  
  loadSavedArticles = () => {
    //call the API function to get saved articles from MongoDB
    API.getSavedArticles()
      .then(res => {
        this.setState( { savedArticles : res.data} );
        this.setState( { savedArticleTitles : res.data.map(article => article.title)} );
      })
      .catch(err => console.log(err));
  }

  loadSavedArticleTitles = () => {
    API.getSavedArticleTitles()
      .then(res => this.setState( { savedArticleTitles : res.data} ))
      .catch(err => console.log(err));
  }

  removeArticle = (articleId) => {
    API.deleteArticle(articleId)
    .then(res => this.loadSavedArticles())
    .catch(err => console.log(err));
  }

  render() {
    //console.log(this.state.savedArticles);
    return (
      <div >
        <div className="container-fluid">
          <Jumbotron />
          <Search savedArticles={this.state.savedArticles} loadSavedArticles={this.loadSavedArticles} savedArticleTitles={this.state.savedArticleTitles}/>
          <Saved savedArticles={this.state.savedArticles} onClickRemoveButton={this.removeArticle}/>
        </div>
      </div>
    );
  } 
}

export default Main;