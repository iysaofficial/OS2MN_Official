const NewsContentComp = (props) =>{
    return(
        <>
        <section className="section-news-content">
            <div className="header-news-content container-news-content">
                <h1  className="news-content-title">{props.header}</h1>
                <img className="news-content-image" src={props.image} alt="" />
                <div className="news-content-paragraf">
                    <p>{props.paragraf1}</p>
                    <p>{props.paragraf2}</p>
                    <p>{props.paragraf3}</p>
                    <p>{props.paragraf4}</p>
                    <p>{props.paragraf5}</p>
                    <p>{props.paragraf6}</p>
                    <p>{props.paragraf7}</p>
                    <p>{props.paragraf8}</p>
                    <p>{props.paragraf9}</p>
                    <p>{props.paragraf10}</p>
                    <a href={props.sourceLink} target="_blank">{props.sourceText}</a>
                </div>
            </div>
        </section>
        <br />
        <br />
        <br />        
        </>
    )
}

export default NewsContentComp