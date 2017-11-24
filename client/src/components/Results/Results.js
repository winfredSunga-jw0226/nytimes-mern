import React from "react";

  const Results = props =>
    <div className="row">
      <div className="col-sm-6 col-sm-offset-3">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Results</h3>
          </div>
          <div className="panel-body">
            {props.articles.map(article => 
              <div className="results-article clearfix">
                <button className="btn btn-primary pull-right" data-headline={article.headline.print_headline} data-pubdate={article.pub_date} data-url={article.web_url} type="submit">Save</button>
                <div className="article-title">
                  <p>{article.headline.print_headline}</p>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>;
    

export default Results;