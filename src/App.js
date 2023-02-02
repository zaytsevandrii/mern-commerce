import Footer from "./components/Footer"
import Header from "./components/Header"
import { Container, Row, Col } from "react-bootstrap"

function App() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <h1>This is main page</h1>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default App
