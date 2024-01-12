
import './App.css';
import Card from "./Card";
import NavBar from "./NavBar";
import {Link } from 'react-router-dom';
function HomePage() {
    return (
        <div className="HomePage">
            <NavBar></NavBar>
            <h1>Přehled</h1>
            <div className="listButtons">
                <button id="all" type="button" className="btn btn-primary">Zobrazit všechny</button>
                <button type="button" className="btn btn-success">Vytvořit nový seznam</button>
            </div>
            <div className="shopList">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>

            <li><Link to="/ShopList">Shop</Link></li>

        </div>

    );
}

export default HomePage;
