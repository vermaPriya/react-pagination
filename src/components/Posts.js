import React from 'react';

const Posts = ({ posts}) => {
  console.log(posts)
  const getList=()=>{
    if(posts){
    return  posts.map((value)=>{console.log(value)
        return(
          <tr key={value.id}>
            <td>{value.id}</td>
            <td>{value.name}</td>
            <td>{value.attenuation_level}</td>
            <td>{value.first_brewed}</td>
          </tr>
        )
      })
    }
  }
  return (
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Attenuation level</th>
      <th scope="col"> First brewed</th>    
    </tr>
  </thead>
    <tbody>
    {getList()}
    </tbody>
  </table>
  );
};

export default Posts;
