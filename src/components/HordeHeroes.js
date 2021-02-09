import React, { useState } from 'react';
import Modal from 'react-modal';
import Thrall from '../assets/heroes/horde-thrall-portrait.jpg';
import ThrallBackground from '../assets/heroes/horde-thrall-background.jpg';
import Voljin from '../assets/heroes/horde-voljin-portrait.jpg';

const HordeHeroes = () => {

    const[champion, setChampion] = useState(0);
       
    // Modal.setAppElement('HordeHeroes');

    var subtitle;

    const [modalIsOpen,setIsOpen] = React.useState(false);

    const openModal = (id) => {
        setIsOpen(true);
        setChampion(id);
    }

    function afterOpenModal() {
    // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal(){
        setIsOpen(false);
    }

    const heroes = [
        {
            id: 0,
            name: "Thrall",
            race: "Orc",
            portrait: Thrall,
            background: ThrallBackground,
            lore: "Thrall (birthname Go'el), son of Durotan, was the Warchief of the restored orcish Horde and ruler of the red land of Durotar in Kalimdor. Before the Cataclysm, he was Warchief of all the Horde, but temporarily gave leadership to Garrosh Hellscream in order to lead the Earthen Ring's effort with Farseer Nobundo against the Twilight's Hammer cult and elemental imbalance afflicting Azeroth caused by the awakening of Deathwing. After Garrosh's tyranny was overthrown, Thrall renounced his claim on the title of Warchief and instead gave the position to his close friend and ally, Vol'jin."
        },
        {
            id: 1,
            name: "Vol'jin",
            race: "Troll",
            portrait: Voljin,
            background: ThrallBackground,
            lore: "The shadow hunter Vol'jin (occasionally called Vol'jin Darkspear and referred to by the Shado-Pan as Vol'jian), son of Sen'jin, was the Warchief of the Horde, as well as Chieftain of the Darkspear tribe and rightful ruler of Durotar and the Echo Isles. Vol'jin had sworn to do everything in his power to lead the Darkspear tribe just as his late father, Sen'jin, would have. For years Vol'jin resided in Orgrimmar, offering strategic advice to then-Warchief Thrall and assisting with critical operations such as retaking the Undercity after the Forsaken bastion had been usurped by Grand Apothecary Putress and the dreadlord Varimathras. During the Cataclysm, however, Vol'jin came into conflict with the Horde's new warchief, Garrosh Hellscream. Alienated by the orc's extremism and lust for war, the troll leader departed Orgrimmar and took up residence on Darkspear Isle. Despite his conflict with the new warchief, Vol'jin remained loyal to the Horde and opposed the efforts of the Zandalari to create a new troll empire in the wake of the Cataclysm."
        }
    ]

    const mappedHeroes = heroes.map((hero) => {
        return(
            <li key={hero.id} className="col-6 col-lg-4" style={{ textAlign: 'center' }}>
                <img onClick={() => openModal(hero.id)} alt={hero.name} src={hero.portrait} style={{ borderRadius: "30px" }} className="img-fluid"></img>
                <div className="stylized-title horde-title" style={{ textAlign: 'center' }}>
                    <h1 style={{ borderBottom: 'none' }}>{hero.name}</h1>
                </div>
            </li>
        );
    })

    const customStyles = {
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            height                : '100vh',
            backgroundImage       : `url(${heroes[champion].background})`,
        }
    };

    return (
        <React.Fragment>
            <ul className="d-flex w-100">
               {mappedHeroes}
            </ul>
            
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2 ref={_subtitle => (subtitle = _subtitle)}>{heroes[champion].name}</h2>
                <p>{heroes[champion].lore}</p>
                <button onClick={closeModal}>close</button>
            </Modal>
        </React.Fragment>
    );
}

export default HordeHeroes;
