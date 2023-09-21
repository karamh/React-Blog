import { useEffect, useState } from 'react'
import { readMany } from '../vanilla/readMany'
import { deleteDocument } from '../vanilla/deleteDocument'
import { Link, NavLink } from 'react-router-dom'

function ArticlesList() {

  const [articles, setArticles] = useState([<h2>Loading....</h2>])
  const [newArticles, setNewArticles] = useState([])

  useEffect(() => {

    readMany("Article").then((res) => {

        const documents = [];

        res.forEach((doc) => {
            console.log(doc[0])
            documents.push(
                
                <div key={doc[0]} className='article'>
                    <div>
                      <img src={doc[1].Banner} alt="thumbnail" className='listThumbnail'/>
                      <h2>{doc[1].Title}</h2>
                    </div>
                    <div>
                      <Link to={`/article/${doc[0]}`}>
                        <button className='btn'>View</button>
                      </Link>
                      <Link to={`/edit/${doc[0]}`}>
                        <button className='btn'>Edit</button>
                      </Link>
                      <button className='btn' onClick={() => {
                        deleteDocument("Article",doc[0])
                        setNewArticles(articles.splice(parseInt(doc[0])-1,1))
                      }}>Delete</button>
                    </div>
                </div>
    
            )
    
        });
        // console.log(res.length)
        setArticles(documents)
    
      })

  },[])

  useEffect(() => {
    readMany("Article").then((res) => {

      const documents = [];

      res.forEach((doc) => {
          console.log(doc[0])
          documents.push(
              
              <div key={doc[0]} className='article'>
                  <div>
                    <img src={doc[1].Banner} alt="thumbnail" className='listThumbnail'/>
                    <h2>{doc[1].Title}</h2>
                  </div>
                  <div>
                    <Link to={`/article/${doc[0]}`}>
                      <button className='btn'>View</button>
                    </Link>
                    <Link to={`/edit/${doc[0]}`}>
                      <button className='btn'>Edit</button>
                    </Link>
                    <button className='btn' onClick={() => {
                      deleteDocument("Article",doc[0])
                      setNewArticles(articles.splice(parseInt(doc[0])-1,1))
                    }}>Delete</button>
                  </div>
              </div>
  
          )
  
      });
      // console.log(res.length)
      setArticles(documents)
  
    })
  },[newArticles])

  return (

    <>
      <nav className='createBtn'>
        <NavLink to="/edit/">Create</NavLink>
      </nav>
      <div key='articlesList' className='articlesList'>
          {articles}
      </div>
    </>
    
  )

}

export default ArticlesList
