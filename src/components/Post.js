import React, {useState} from 'react';
import marked from 'marked'

const Post = ({article}) => {
    console.log(article)
    const {title, date, image, text} = article.fields;
    const postDescription =  marked(text);
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="post">
            
            {image &&  <img className="image" src={image.fields.file.url} alt={title} title={title}/>}
            <p className="title">{title}</p>
            <div className="seecontent">
            <p className="date">{date}</p>
            <p className="show" onClick={()=>setIsActive(!isActive)}>{isActive? 'Show Less':'Show More'}</p>
            </div>
            
            {isActive && <section className="section" dangerouslySetInnerHTML={{__html: postDescription}} /> }
        </div>
    )
}


export default Post