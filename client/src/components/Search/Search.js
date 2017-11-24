import React, { Component } from "react";
import Results from "../Results";
import API from "../../utils/API";


class Search extends Component {
  state = {
    searchTerm : "",
    startYear : "",
    endYear : "",
    articles : []
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name] : value
    });
  };

  handleFormSubmit = event => {
    //prevent the default behavior of refreshing page upon form submit
    event.preventDefault();

    //send a get request to the NY Times API
    API.getArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.data.message);
      }
      //pick only 5 articles from the response
      this.setState({articles : res.data.response.docs.slice(0,5)}); 
      //console.log(res.data.response.docs.slice(0,5));
    })
    .catch(err => this.setState({error : err.message}));
  }

  render() {
    console.log(this.state);
    // console.log(`Start Year : ${this.state.startYear}`);
    // console.log(`End Year : ${this.state.endYear}`);
    return (
      <div>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="inputTopic" className="text-center">Topic</label>
                    <input 
                      name="searchTerm"
                      value={this.state.searchTerm}
                      onChange={this.handleInputChange}
                      type="text" 
                      className="form-control" 
                      placeholder= "search term"
                      id="inputTopic">
                    </input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStartYear" className="text-center">Start Year</label>
                    <input 
                      name="startYear"
                      value={this.state.startYear}
                      onChange={this.handleInputChange}
                      type="text" 
                      className="form-control" 
                      placeholder="YYYY"
                      id="inputStartYear">
                    </input>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputEndYear" className="text-center">End Year</label>
                    <input 
                      name="endYear"
                      value={this.state.endYear}
                      onChange={this.handleInputChange}
                      type="text" 
                      className="form-control" 
                      placeholder="YYYY"
                      id="inputEndYear">
                    </input>
                  </div>
                  <button type="submit" onClick={this.handleFormSubmit} className="btn btn-default">Search</button>
                </form>
              </div>
            </div>
          </div>
        </div> 
        <div className="row">
          <Results articles={this.state.articles}/>
        </div>    
      </div>  
    );
  }
}

export default Search;