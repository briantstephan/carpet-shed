import styles from './styles.css'

export default function PinCard({username, description, title, latitude, longitude}){

    let cardStyle = {
        border: "thick solid #ffffff",
        color: "red",
    }

    return (
        <div key={title} style={cardStyle}>
            {title && <h4 className={cardStyle}>
                "{title}"
            </h4>}
                
            {username
                ? <h6>
                    Found by {username}
                </h6>
                : <h6>Anonymous submission</h6> }

            {description && <h5>
                    "{description}"
                </h5>}

            {latitude && longitude && <h5>{latitude}, {longitude}</h5>}
        </div>
    )
}
