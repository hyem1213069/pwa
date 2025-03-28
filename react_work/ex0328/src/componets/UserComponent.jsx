import React from 'react';

function UserComponent({id, name, email}) {
    return (
        <div>
            <h1>id = {id}</h1>
            <h2>name = {name}</h2>
            <h3>email = {email}</h3>
        </div>
    );
}

export default UserComponent;