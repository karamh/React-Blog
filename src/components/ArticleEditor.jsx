import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { modules, ref, getContent, insertContent } from "./editorToolbar";
import { writeDocument } from '../vanilla/writeDocument'
import { uploadImage } from '../vanilla/uploadImage'
import { readSingle } from '../vanilla/readSingle'
import { readMany } from '../vanilla/readMany'


function ArticleEditor() {
    const params = useParams()
    const [state, setState] = useState({ value: null });
    const [bannerURL, setBannerURL] = useState("/");


    const handleChange = value => {
        setState({ value });
    };



    async function preview(event){
        const fileInput = document.getElementById('banner');
        const previewImage = document.getElementById('preview');
        console.log(event.target.files.length);
        if (event.target.files.length > 0) {
            uploadImage(fileInput.files[0], fileInput.name).then((res) => {
                console.log(res)
                setBannerURL(res);
                console.log(previewImage.src);
                previewImage.style.display = 'block';
                // fileInput.value = null;
            })
        }
    }

    
    useEffect(() => {
        
        if(params.id){
            readSingle("Article",params.id).then((res) => {
                // console.log(res);
                document.getElementById("title").value = res.Title
                insertContent(res.Body)
                setBannerURL(res.Banner)
                document.getElementById('preview').style.display = 'block';
                history.pushState(null, null, `/edit/${res.Slug}`);
            })  
        }
    },[])


    async function submitBodyConstructor(){

        // let banner = document.getElementById('banner').files[0];
        let banner = bannerURL;
        let title = document.getElementById('title').value;
        let category = document.getElementById('category').value;
        let body = getContent();
        let slug = (title.toLowerCase()).split(' ').join('-')
        let data = {
            banner: banner,
            title: title,
            category: category,
            body: body,
            slug: slug
        }

        if(params.id){

            writeDocument('Article',params.id,data)

            // uploadImage(banner, banner.name).then((res) => {
            //     data.banner = res
            //     writeDocument('Article',params.id,data)
            // })

        }else{

            readMany("Article").then((res) => {
                if(res.length > 0){
                    writeDocument('Article',parseInt(res.pop()[0])+1,data)
                }else{
                    writeDocument('Article',1,data)
                }
            })

            // uploadImage(banner, banner.name).then((res) => {
            //     data.banner = res
            //     readMany("Article").then((res) => {
            //         if(res.length > 0){
            //             writeDocument('Article',parseInt(res.pop()[0])+1,data)
            //         }else{
            //             writeDocument('Article',1,data)
            //         }
            //     })
            // })
            
        }
    }


    return (

        <div key='editor' className='editor'>
            <label htmlFor="banner">Choose Your Banner:</label>
            <img src={bannerURL} alt="" id="preview" style={{display:"none",maxHeight:"300px"}}/>
            <input type="file" id='banner' name='banner'accept="image/*" onChange={(event) => preview(event)}/>
            <label htmlFor="title">Enter Your Title:</label>
            <input type="text" id="title" name="title"></input>
            <label htmlFor="category">Choose a Category:</label>
            <select name="category" id="category" multiple>
                <option value="New">New</option>
                <option value="Classic">Classic</option>
                <option value="Luxury">Luxury</option>
                <option value="Family">Family</option>
            </select>
            <ReactQuill
                ref={ref}
                onChange={handleChange}
                placeholder={"Write something awesome..."}
                modules={modules}
            />
            <button className='saveArticle' onClick={() => submitBodyConstructor()}>Save</button>
            {/* <button className='saveArticle' onClick={() => writeDocument('Article',)}>Save</button> */}
        </div>

    )

}

export default ArticleEditor
