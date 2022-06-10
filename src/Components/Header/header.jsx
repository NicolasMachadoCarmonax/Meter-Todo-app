import { Resources } from "../../Resources/resources"
import './header.css'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={Resources.Logo} alt=""/>
            </div>
        </div>
    )
}