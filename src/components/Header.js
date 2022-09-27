import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <div className="bg-primart py-4">
            <Container>
            <h1>Bienvenidos a React Router DoM</h1>
            <h2>Aprendiendo Router</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="./">Home</Link>
                    </li>
                </ul>
            </nav>

            </Container>
        </div>
    )
}