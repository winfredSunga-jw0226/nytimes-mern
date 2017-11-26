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
            <div className="saved-article clearfix" key={index}>
              <button 
                name="deleteArticleId"
                value={articleData._id}
                className="btn btn-primary pull-right col-sm-2" 
                type="submit"
                onClick={() => props.onClickRemoveButton(articleData._id)}
              >Remove
              </button>
              <button 
                className="btn btn-primary pull-right col-sm-2" 
                type="submit"
              >Add Annotation
              </button>
              <p id="p-date"className="pull-right col-sm-3">{`Date Saved : ${new Date(articleData.savedDate).getMonth()}/${new Date(articleData.savedDate).getDate()}/${new Date(articleData.savedDate).getFullYear()}`}</p>
              <p id="p-title col-sm-5">{articleData.title}</p>
            </div>
          )}    
        </div>
      </div>
    </div>
  </div> 

export default Saved;