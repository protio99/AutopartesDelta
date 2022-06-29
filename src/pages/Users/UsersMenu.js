import React from 'react';
import "./usersmenu.css";

import { TabMenu } from 'primereact/tabmenu';
export default function UsersMenu(){

    const items = [
        {label: 'Mi perfil', icon: 'pi pi-fw pi-home', url: '/User'},
        {label: 'Cambiar Contraseña', icon: 'pi pi-fw pi-calendar', url: '/UserResetPassword'},
        {label: 'Mis Compras', icon: 'pi pi-fw pi-pencil', url: '/PurchaseHistory'}

     
    ];

    return (
        <div>
                <TabMenu model={items}  />

                

        </div>
    );
}