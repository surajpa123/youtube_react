import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { youtube_data, Title, des } from '../Redux/actions'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const [data, setData] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    getData()

  }, [])

  const getData = () => {
    axios.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyD1CoqZ7gRiWpyFNQdiEVueYCoUz_HazwI&maxResults=40").then(function (res) {
      setData(res.data.items)

    })
  }
  console.log(data)
  const handelsubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0]
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${value}&type=video&key=AIzaSyD1CoqZ7gRiWpyFNQdiEVueYCoUz_HazwI&maxResults=20`).then(function (res) {
      setData(res.data.items)
    })
  }

  const setVideo = (video, title, description) => {
    dispatch(youtube_data(`https://www.youtube.com/embed/${video}`))
    dispatch(Title(title))
    dispatch(des(description))
  }
  if (data == undefined) {
    return
  }

  return (

    <>
      <div class="container">
        <nav class="navbar navbar-light bg-light justify-content-between">
          <a class="navbar-brand"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" /> Youtube</a>
          <form class="form-inline" onSubmit={handelsubmit}>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" name='search' aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
          </form>
        </nav>
      </div>
      <div class="container w-100">
        <Link to={"/result"}>
          <div class="row row-cols-auto">
            {
              data.map((e) =>
                <>
                  <div onClick={() => { setVideo(e.id, e.snippet.title, e.snippet.description) }} class="col mt-4">
                    <img src={e.snippet.thumbnails.medium.url} alt="" />
                    <p>{e.snippet.title}</p>
                  </div>
                </>
              )
            }
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home