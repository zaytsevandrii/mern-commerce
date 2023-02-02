import Footer from "./components/Footer"
import Header from "./components/Header"
import { Container } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import ProductSreen from "./screens/ProductSreen"
import HomeScreen from "./screens/HomeScreens"

function App() {
    return (
        <>
            <Header />

            <main className="py-3">
                <Container>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/product/:id" element={<ProductSreen/>} />
                    </Routes>
                    <Footer />
                </Container>
            </main>
        </>
    )
}

export default App
