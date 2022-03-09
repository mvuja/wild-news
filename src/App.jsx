import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Article from "./components/Article/Article";

import { usePromiseTracker, trackPromise } from "react-promise-tracker";

const App = () => {

  const [topHeadlines, setTopHeadlines] = useState(null)

  useEffect(() => {

    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=137049f91b254a0d8f4a3c95353c3935';
  
    trackPromise(
    fetch(url).then((res) => {
            return res.json()
        }).then((data) => {
          setTopHeadlines(data.articles)
        })
    )
  }, [])

  const { promiseInProgress } = usePromiseTracker()

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home topHeadlines={topHeadlines} />
        </Route>
        {
            (promiseInProgress === true) ?
              <Route path='/article'>
                <Article/>
              </Route>
            :
            topHeadlines?.map((el, id) => (
              <Route key={id} path={`/article/${el.title.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`}>
                <Article el={el} />
              </Route>
            ))
          }
      </Switch>

    </div>
  );
}

export default App
