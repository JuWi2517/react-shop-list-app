import React, { useState } from 'react';

import NavBar from "./NavBar";
import './ShopList.css'

function ShopList() {
    const [items, setItems] = useState([]);
    const [boughtItems, setBoughtItems] = useState([]); // State to track bought items
    const [isArchived, setArchive] = useState(false);
    const [isDone, setDone] = useState(false);
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(1);
    const [showAddItemFields, setShowAddItemFields] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    const [username, setUsername] = useState('');
    const hardcodedUsers = ['Matej', 'Strom', 'Nekolas'];

    const addItem = () => {
        const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
        const newItem = {
            id: newId,
            name: newItemName,
            quantity: newItemQuantity
        };
        setItems([...items, newItem]);
        setNewItemName('');
        setNewItemQuantity(1);
        setShowAddItemFields(false);
    };

    const boughtItem = (id) => {
        setBoughtItems(prevBoughtItems => {
            if (prevBoughtItems.includes(id)) {
                return prevBoughtItems.filter(itemId => itemId !== id);
            } else {
                return [...prevBoughtItems, id];
            }
        });
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const addUser = () => {
        alert('User has been successfully added: ' + username);
        setUsername(''); // Clear input field
        setShowUserModal(false); // Close modal
    };

    function showModal(){
        setShowUserModal(true);
    }

    function removeAll(){
        setItems([]);
    }

    function archiveList(){
        setArchive(true);
        alert("Seznam byl archivován")
    }

    function listDone(){
        setDone(true);
        alert("Seznam byl označen jako hotový")
    }

    return (
        <div className="ShopList">
            <NavBar/>
            <div className="item-list mb-4">
                {items.map(item => (
                    <div
                        id={item.id}
                        className={`d-flex justify-content-between align-items-center border p-2 mb-2 ${boughtItems.includes(item.id) ? 'bg-green' : ''}`}
                        key={item.id}
                    >
                        <div className="item-name">{item.name}</div>
                        <div className="item-quantity">{item.quantity} ks</div>
                        <div>
                            <button className="btn btn-success btn-sm me-2" onClick={() => boughtItem(item.id)}>Hotovo</button>
                            <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Odebrat</button>
                        </div>
                    </div>
                ))}
            </div>
            {showAddItemFields && (
                <div>
                    <input
                        type="text"
                        placeholder="Item name"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Quantity"
                        value={newItemQuantity}
                        onChange={(e) => setNewItemQuantity(Number(e.target.value))}
                    />
                    <button onClick={addItem}>Potvrdit</button>
                </div>
            )}
            {showUserModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowUserModal(false)}>&times;</span>
                        <input
                            type="text"
                            placeholder="Uživatelské jméno"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <button onClick={addUser}>Přidat uživatele</button>
                        <ul>
                            {hardcodedUsers.map(user => (
                                <li key={user}>{user}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            <div className="actions mb-4">
                <button className="btn btn-primary me-2" onClick={() => setShowAddItemFields(true)}>Přidat položku</button>
                <button className="btn btn-secondary me-2" onClick={showModal}>Přidat uživatele</button>
                <button className="btn btn-info me-2" onClick={listDone}>Označit jako hotové</button>
                <button className="btn btn-warning me-2" onClick={archiveList}>Archivovat</button>
                <button className="btn btn-danger" onClick={removeAll}>Smazat položky</button>
            </div>
        </div>
    );
}

export default ShopList;
