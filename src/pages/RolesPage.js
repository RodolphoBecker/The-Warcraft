import React, {useState, useEffect} from 'react';

const Roles = (props) => {

    const roleSelected = props.role;
    console.log(`${roleSelected} atual`)
    
    const rolesData = [
        {
            id: 0,
            name: 'Priest',

        },
        {
            id: 1,
            name: 'Hunter'
        }
    ]

    const mappedRolesData = rolesData.map((role) => {
        return(
            <div>
                {role.id}
                {role.name}
            </div>
        );
    })

    return(
        <div style={{ marginTop: '200px' }}>
            {mappedRolesData}
        </div>
    );

}
    

export default Roles;