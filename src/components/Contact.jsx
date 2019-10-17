import React from 'react';
import './Contact.css';

const name = 'Salibor';
const avatar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ancylostoma_duodenale_boca.jpg/640px-Ancylostoma_duodenale_boca.jpg';
const online = true;
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        };
    }

    render() {
        return  ( 
            <div className="Contact"
            onClick={event => {
                const newOnline = !this.state.online;
                this.setState({online: newOnline});
            }}>
                <img className="avatar" src={this.props.avatar} />
                <article>
                    <h1 className="name">{this.props.name}</h1>
                    <div className="status">
                        <div className={this.state.online ? "status-online" : "status-offline"}>                        
                        </div>
                        <h2 className="status-text">{this.state.online ? "online" : "offline"}</h2>
                    </div>
                </article>
            </div>
        )
    }
}

    export default Contact;