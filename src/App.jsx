import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


const App = () => {

  const [topHeadlines, setTopHeadlines] = useState([])

  useEffect(() => {

    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=137049f91b254a0d8f4a3c95353c3935';
  
    fetch(url).then((res) => {
            return res.json()
        }).then((data) => {
          setTopHeadlines(data.articles)
        })

        // console.log(topHeadlines?.slice(0, 20))
  }, [])

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home topHeadlines={topHeadlines} />
        </Route>
      </Switch>

    </div>
  );
}

export default App
