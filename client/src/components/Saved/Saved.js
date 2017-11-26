import React from "react";
import "./Saved.css";


  const Saved = props =>
    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Saved Articles</h3>
          </div>
          <div className="panel-body">
            {props.savedArticles.map( (articleData, index) =>
              <div className="saved-article saved-articles-main-container clearfix" key={index}>
                <div className="saved-articles-sub-container clearfix">
                  <button 
                    name="deleteArticleId"
                    value={articleData._id}
                    className="btn btn-primary pull-right col-sm-1 align-middle" 
                    type="submit"
                    onClick={() => props.onClickRemoveButton(articleData._id)}
                  >Remove
                  </button>
                  <div className="col-sm-1 pull-right align-middle"></div>
                  <p id="p-date"className="pull-right col-sm-3 align-middle">{`Date Saved : ${new Date(articleData.savedDate).getMonth()}/${new Date(articleData.savedDate).getDate()}/${new Date(articleData.savedDate).getFullYear()}`}</p>
                  <a id="p-title" className="col-sm-6 align-middle pull-left" href={articleData.url} target="_blank">{articleData.title}</a>
                </div>
                <input className="saved-articles-annotation-container col-sm-12" type="text" placeholder="add annotation">
                </input>
              </div>
            )}    
          </div>
        </div>
      </div>
    </div> 

export default Saved;