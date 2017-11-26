import React from "react";
import "./Results.css";

const Results = props => 
  <div className="col-sm-8 col-sm-offset-2">
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h3 className="panel-title">Results</h3>
      </div>
      <div className="panel-body">
        {props.articles.map( (article, index) => 
          <div className="results-article clearfix" key={index}>
            <button 
            disabled={props.savedArticleTitles.includes(article.headline.main)}
            className="btn btn-primary pull-right col-sm-2 col-sm-offset-2 btn-{index}" 
            type="submit"
            onClick={() => props.fnSaveArticle(article)}>Save</button>
            <div className="article-title col-sm-6">
              <p>{article.headline.main}</p>
            </div>
          </div>
        )}
        
      </div>
    </div>
  </div>

export default Results;
