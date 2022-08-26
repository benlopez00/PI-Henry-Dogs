import React, {useEffect, handleClick} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getDoggo} from "../redux/actions/indexActions";
import { Link } from "react-router-dom";
import Card from "./Card";


export default function Home (){
    const dispatch = useDispatch();
    const allDoggo = useSelector((state) => state.dogs)

    useEffect(()=>{
        dispatch(getDoggo());
    },[dispatch])

    function handleClick(evento){
        evento.preventDefault();
        dispatch(getDoggo())
    }
    return(
        <div>
            <Link to='/dogs'>Crear Perro</Link>
            <button onClick={(e)=>{handleClick(e)}}>Volver a cargar todos los perros</button>
            <div>
                <select>
                    <option value="alfAsc">Alfabetico Ascendente</option>
                    <option value="alfDes">Alfabetico Descendente</option>
                    <option value="pesAsc">Peso Ascendente</option>
                    <option value="pesDes">Peso Descendiente</option>
                </select>
                <select>
                    <option value="tod">Todos</option>
                    <option value="cre">Creados</option>
                    <option value="exi">Existente</option>
                </select>
                {
                    allDoggo?.map((el) =>{
                        return(
                            <fragment>
                                <Link>
                                    <Card img={el.image} name={el.name} temper={el.temper}/>
                                    </Link>
                            </fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}