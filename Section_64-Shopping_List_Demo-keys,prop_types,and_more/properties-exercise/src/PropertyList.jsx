import Property from "./Property"
import './PropertyList.css'

export default function PropertyList({ properties }) {
    return (
        <div className="PropertyList">
            {properties.map((prop) => {
                return <Property {...prop} key={prop.id} />
            })}
        </div>
    )
}