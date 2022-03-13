import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";

import { usePromiseTracker, trackPromise } from "react-promise-tracker";

const App = () => {

  const [topHeadlines, setTopHeadlines] = useState(null)
  const [everything, setEverything] = useState(null)
  const [topic, setTopic] = useState('')
  const [sort, setSort] = useState('publishedAt')

  const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=137049f91b254a0d8f4a3c95353c3935';
  const urlEverything = `https://newsapi.org/v2/everything?q=${topic}&sortBy=${sort}&apiKey=137049f91b254a0d8f4a3c95353c3935`;
  
  const firstTwentyEverything = everything && everything.slice(0, 20)

  useEffect(() => {  
    trackPromise(
    fetch(url).then((res) => {
            return res.json()
        }).then((data) => {
          setTopHeadlines(data.articles)
        })
    )
  }, [])

  useEffect(() => {
    trackPromise(
      fetch(urlEverything).then((res) => {
        return res.json()
      }).then((data) => {
        setEverything(data.articles)
      })
    )

  }, [topic, sort])


  const setTopicHandler = topicGot => {
    setTopic(topicGot)
  }

  const setSortHandler = sortGot => {
    setSort(sortGot)
  }

  const { promiseInProgress } = usePromiseTracker()

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home topHeadlines={topHeadlines} everything={everything} setTopicHandler={setTopicHandler} setSortHandler={setSortHandler} />
        </Route>
        {
            (promiseInProgress === true) ?
              <Route path='/article'>
                <Article/>
              </Route>
            :
            topHeadlines?.map((el, id) => (
              <Route key={id} path={`/article/${el.title?.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`}>
                <Article el={el} topHeadlines={topHeadlines} />
              </Route>
            ))
        }
        {
            (promiseInProgress === true) ?
              <Route path='/article'>
                <Article/>
              </Route>
            :
            firstTwentyEverything?.map((el, id) => (
              <Route key={id} path={`/article/${el.title?.replace(/\s+/g, '-').replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '').toLowerCase()}`}>
                <Article el={el} topHeadlines={topHeadlines} />
              </Route>
            ))
        }
      </Switch>
      <Footer />
    </div>
  );
}

export default App
