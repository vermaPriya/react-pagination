import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const[offset, setOffset]=useState(0);
  const[perPage, setPerPage] =useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState('');
  const [isReceive, setIsReceive] = useState(false);

    useEffect(() => {
      const fetchPosts = async () => {
        await axios.get(`https://api.punkapi.com/v2/beers`)
        .then((res)=>{
          setPosts(res.data);
          setIsReceive(true)
        })
      };
      fetchPosts();
    }, []);
    
    useEffect(()=>{
      receiveData()
    },[isReceive === true])

    useEffect(()=>{
      setIsReceive(false);
      receiveData()
    },[offset,currentPage])
     

  const receiveData=()=>{
    var data =[]
    data= posts;
    const sliceData =data && data.slice(offset,offset + perPage)
    const pageCount = Math.ceil(data && data.length/perPage)
    setPostsData(sliceData)
    setPageCount(pageCount)
  }

  const handlePageClick=(e)=>{
    const selectedPage= e.selected;
    const offset= selectedPage *  perPage;
    setCurrentPage(selectedPage)
    setOffset(offset)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">List</h1>
      <Posts posts={postsData}/>
      <Pagination
       pageCount={pageCount}
       onPageChange={handlePageClick}
      />
    </div>
  );
};

export default App;
