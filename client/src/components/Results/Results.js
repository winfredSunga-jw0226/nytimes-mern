import React, { Component } from "react";

const Results = props =>
    <div className="col-sm-6 col-sm-offset-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body">
          {props.articles.map((article, index) => 
            <div className="results-article clearfix" key={index}>
              <button 
              className="btn btn-primary pull-right" 
              type="submit"
              onClick={() => props.fn(article)}>Save</button>
              <div className="article-title">
                <p>{article.headline.print_headline}</p>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>


export default Results;