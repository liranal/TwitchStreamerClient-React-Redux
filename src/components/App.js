import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamDelete from "./streams/StreamDelete";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exect component={StreamCreate} />
          <Route path="/streams/edit" exect component={StreamEdit} />
          <Route path="/streams/delete" exect component={StreamDelete} />
          <Route path="/streams/show" exect component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;