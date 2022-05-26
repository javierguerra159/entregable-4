import axios from 'axios';
import React, { useEffect, useState, } from 'react';

const UsersForm = ({getUser, userSelected, deselectUser}) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(() => {
        
        if(userSelected !== null){
            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday)
        }else{
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setBirthday("")
        }
    }, [userSelected])

    const submit = e =>{
        e.preventDefault();

        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            birthday
        }
        if(userSelected !== null){
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
            .then(() => {
                getUser();
                deselectUser()
            })
            .catch(error => console.log(error.response))
        } else{

            axios.post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUser() )
        
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor='name'>Nombre</label>
                    <input 
                        type="text" 
                        id='name'
                        onChange={e =>setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Apellido</label>
                    <input 
                        type="text" 
                        id='lastName'
                        onChange={e =>setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type="text" 
                        id='email'
                        onChange={e =>setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type="password" 
                        id='password'
                        onChange={e =>setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div>
                    <label htmlFor='birthday'>Birthday</label>
                    <input 
                        type="date" 
                        id='birthday'
                        onChange={e =>setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>
            <button type='submit'>submit</button>
            </form>
        </div>
    );
};

export default UsersForm;