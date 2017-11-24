import React from "react";

const Saved = () =>
 <div className="row">
    <div className="col-sm-6 col-sm-offset-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Articles</h3>
        </div>
        <div className="panel-body">
          <button className="btn btn-primary pull-right" type="submit">Remove</button>
          <button className="btn btn-primary pull-right" type="submit">Add Annotation</button>
          <p className="pull-right">Date Saved Goes Here</p>
          <p>Saved Articles Go Here</p>
        </div>
      </div>
    </div>
  </div>    

export default Saved;