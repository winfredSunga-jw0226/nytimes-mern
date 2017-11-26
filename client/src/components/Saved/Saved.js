import React, { Component } from "react";
import "./Saved.css";

class Saved extends Component {
  state = {

  };



  render() {
    return (
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Saved Articles</h3>
            </div>
            <div className="panel-body">
              {this.props.savedArticles.map( (articleData, index) =>
                <div className="saved-article saved-articles-main-container clearfix" key={index}>
                  <div className="saved-articles-sub-container clearfix">
                    <button 
                      name="deleteArticleId"
                      value={articleData._id}
                      className="btn btn-primary pull-right col-sm-1" 
                      type="submit"
                      onClick={() => this.props.onClickRemoveButton(articleData._id)}
                    >Remove
                    </button>
                    {/*}
                    <button 
                      name="addAnnotation"
                      value="{articleData._id}"
                      className="btn btn-primary pull-right col-sm-2" 
                      type="submit"
                    >Add Annotation
                    </button>
                  {*/}
                    <div className="col-sm-1 pull-right"></div>
                    <p id="p-date"className="pull-right col-sm-3">{`Date Saved : ${new Date(articleData.savedDate).getMonth()}/${new Date(articleData.savedDate).getDate()}/${new Date(articleData.savedDate).getFullYear()}`}</p>
                    <a id="p-title" className="col-sm-6" href={articleData.url} target="_blank">{articleData.title}</a>
                  </div>
                  <input className="saved-articles-annotation-container col-sm-12" type="text" placeholder="add annotation">
                  </input>
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