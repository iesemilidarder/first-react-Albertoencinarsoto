
import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapTable from 'bootstrap-react-table';
import MyTableComponent from './component/MyTableComponent';

const title= "¡Hola Alberto!";
let myData = ["Jose","Alberto","jose","luisa"];
let myComplexData = [
    {name:"Jose",surname:"slotra"},
    {name:"Alberto",surname:"de castilla"},
    {name:"jose",surname:"luis"},
    {name:"luisa",surname:"mcyadra"}
];
const columns = [
    {
        id: 'position',
        name: 'numero',
        first: true,
    },
    {
        id: 'name',
        name: 'Nombre'
    },
    {
        id: 'quantity',
        name: 'Cantidad'
    }
];
const data = [
    {
        position: 1,
        name: 'Zapatos negros',
        quantity: 12
    },
    {
        position: 2,
        name: 'Chaqueta a rayas',
        quantity: 4
    },
    {
        position: 3,
        name: 'Pantalones azul',
        quantity: 11
    },
    {
        position: 4,
        name: 'Camiseta',
        quantity: 9
    },
];

ReactDOM.render(
    <div className="container">
        <h1>{title}</h1>
        <MyTableComponent/>
        <ul>
            <li>yuhu</li>
            {myData.map((v) =>
                <li>{v}</li>
            )}
        </ul>
        <table>
            <thead>
            <tr>
                <th> Nombres </th>
                <th> Apellidos </th>
            </tr>
            </thead>
            <tbody>
            {myComplexData.map((item) =>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                </tr>
            )}
            </tbody>
        </table>
        <BootstrapTable columns={columns} data={data}/>
    </div>
    ,document.getElementById('app')
);

