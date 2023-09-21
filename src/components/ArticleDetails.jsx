import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { readSingle } from '../vanilla/readSingle'
import { useParams } from 'react-router-dom'

function ArticlesDetails() {

  const parser = new DOMParser();

  const params = useParams()

  const [fullArticle, setFullArticle] = useState("... Loading")

  useEffect(() => {
        
    if(params.id){
        readSingle("Article",params.id).then((res) => {
          history.pushState(null, null, `/article/${res.Slug}`)
          setFullArticle({
            Banner: res.Banner,
            Title: res.Title,
            Body: res.Body
          })
        })  
      }
  },[])
  
  return (

    <div style={{maxWidth:"800px"}}>
      <img src={fullArticle.Banner} alt="banner" style={{maxHeight:"250px"}}/>
      <h1>{fullArticle.Title}</h1>
      <div dangerouslySetInnerHTML={{__html: fullArticle.Body}}></div>
    </div>
    
  )

}

export default ArticlesDetails
