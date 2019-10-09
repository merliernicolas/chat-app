import React from 'react';
import './Contact.css';

const name = 'Salibor';
const avatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ancylostoma_duodenale_boca.jpg/640px-Ancylostoma_duodenale_boca.jpg';
const online = true;
function Contact (props) {
    return  ( 
        <div className="Contact">
            <img className="avatar" src={props.avatar} />
            <article>
                <h1 className="name">{props.name}</h1>
                <div className="status">
                    <h2 className="status-text">{props.online ? "online" : "offline"}</h2>
                    <h2 className={props.online ? "status-online" : "status-offline"}></h2>
                </div>
            </article>
        </div>
    )
};

export default Contact;