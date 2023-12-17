import React, { useState } from 'react';

import NavBar from "./NavBar";
import ItemList from './ItemList';
import ActionButtons from './ActionButtons';


function ShopList(){



    const [items, setItems] = useState([
        { id: 1, name: 'Tužky', quantity: 4 },
        { id: 2, name: 'Papír', quantity: 1 },
        { id: 3, name: 'Monitor', quantity: 1 },
        { id: 4, name: 'Myš', quantity: 2 }
    ]);

    function removeItem(id) {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <div className="App container">
            <NavBar></NavBar>
            <ItemList items={items} removeItem={removeItem}/>
            <ActionButtons />
        </div>
    );

}
export default ShopList;