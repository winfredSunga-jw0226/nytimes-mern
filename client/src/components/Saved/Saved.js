import React, { Component } from "react";
import API from "../../utils/API";

class Saved extends Component {
  state = {
    savedArticles : []
  };

  //when the component mounts, load all articles and save them to this.state.savedArticles
  componentDidMount() {
    this.loadSavedArticles();
  }

  loadSavedArticles = () => {
    //call the API function to get saved articles from MongoDB
    API.getSavedArticles()
      .then(res => this.setState({ savedArticles : res.data})
      )
      .catch(err =>console.log(err)      
      );
  }

  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
              {this.state.savedArticles.map( (articleData, index) =>
                <div className="saved-article clearfix" key={index}>
                  <button className="btn btn-primary pull-right" type="submit">Remove</button>
                  <button className="btn btn-primary pull-right" type="submit">Add Annotation</button>
                  <p className="pull-right">{articleData.savedDate}</p>
                  <p>{articleData.title}</p>
                </div>
              )}    
            </div>
          </div>
        </div>
      </div> 
    )
  }
}

export default Saved;