function Card(props) {
    return (
        <a className='fiche' href={`./fiche/${props.id}`}>
            <article className='card'>
                <div className='cover' style={{background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.cover})`}}>
                    <p className='title'>{props.title}</p>
                </div>
            </article>
        </a >
    )
}

export default Card;