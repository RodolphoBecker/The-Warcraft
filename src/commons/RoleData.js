import React from 'react';

const roles = () => {
    const roleData = [
        {
            id: 1,
            name: 'Warrior',
            title: 'Lords of War',
            description: 'For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat. Some protect from the front lines with shields, locking down enemies while allies support the warrior from behind with spell and bow. Others forgo the shield and unleash their rage at the closest threat with a variety of deadly weapons.',
            information: 'Warriors equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor. They use diverse combat tactics and a wide variety of weapon types to protect their more vulnerable allies. Warriors must carefully master their rage – the power behind their strongest attacks – in order to maximize their effectiveness in combat.',
        },
        {
            id: 2,
            name: 'Paladin',
            title: 'Paragons of Justice',
            description: 'This is the call of the paladin: to protect the weak, to bring justice to the unjust, and to vanquish evil from the darkest corners of the world. These holy warriors are equipped with plate armor so they can confront the toughest of foes, and the blessing of the Light allows them to heal wounds and, in some cases, even restore life to the dead.',
            information: 'Paladins stand directly in front of their enemies, relying on heavy armor and healing in order to survive incoming attacks. Whether with massive shields or crushing two-handed weapons, Paladins are able to keep claws and swords from their weaker fellows – or they use healing magic to ensure that they remain on their feet.',
        }
    ]

    const mappedRoleData = roleData.map((role) => {
        return(
            <div>
                <h1>{role.id}</h1>
                <h2>{role.name}</h2>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
            </div>
        );
    });

    return(
        <React.Fragment>
            {mappedRoleData}
        </React.Fragment>
    );
}


export default roles;