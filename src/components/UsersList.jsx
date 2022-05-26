import React from 'react';

const UsersList = ({users, selectUser, removeUser}) => {
    return (
        <ul>
            {
                users.map(user =>(
                    
                        <li key={user.id} className='users-list'>

                            <h3>Nombre: <b>{user.first_name}</b></h3>
                            <p>Apellido: <b>{user.last_name}</b></p>
                            <p>Email: <b>{user.email}</b></p>
                            <p>Contraseña: <b>{user.password}</b></p>
                            <p>Fecha de nacimiento: <b>{user.birthday}</b></p>
                            <button onClick={() =>selectUser(user)}>editar</button>
                            <button onClick={() =>removeUser(user.id)}>eliminar</button>
                        </li>
                    
                ))
            }
        </ul>
    );
};

export default UsersList;