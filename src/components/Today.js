import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";
import styled from 'styled-components';

import UserContext from "../Contexts/userContext";
import Header from './Header';
import Footer from "./Footer";
import Day from './dayjs';


export default function Today() {

    const { token } = useContext(UserContext);

    const [attApi, setAttApi] = useState(false)

    const [items, setItems] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config);

        promise.then((response) => {
            const { data } = response;
            setItems(data)
            console.log(data)
        });
        promise.catch(error => {
            alert("Deu algum erro...");
        });
    }, [token]);


    return (
        <>
            <Header />
            <ContainerA>
                <ContainerDay>
                    <Day />
                </ContainerDay>

                <>
                    {items.map((item) => <RenderTodayHabit
                        setItems={setItems}
                        done={item.done}
                        info={item}
                        items={items}
                        id={item.id}
                        name={item.name}
                        currentSequence={item.currentSequence}
                        highestSequence={item.highestSequence}
                        attApi={attApi}
                        setAttApi={setAttApi} />)}
                </>
            </ContainerA>
            <Footer />
        </>
    )
}

function RenderTodayHabit (props) {

    const { id, name, done, currentSequence, highestSequence, items, attApi, setAttApi } = props

    const { token } = useContext(UserContext);

    const IsCheckTrue = "#8FC549";
    const IsCheckFalse = "#EBEBEB";
    

    function HabitDone () {
        console.log("done", id, done, name)

        
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, null, config)
        promise.then( response => {
            setAttApi(!attApi)
            
        })
        promise.catch(err => {
            console.log(id)
            console.log(err.response)
        })
    }

    function HabitUndone () {
        console.log("undone", id, done, name)

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, null, config)
        promise.then( response => {
            setAttApi(!attApi)
            
        })
        promise.catch(err => {
            console.log(id)
            console.log(err)
        })
    }

    if (items.length > 0) {
        
            return <ContainerTodayHabits key={id}>
                <Infos>
                    <span>{name}</span>
                    <p>Sequência atual: {currentSequence} dias</p>
                    <p>Seu recorde: {highestSequence} dias</p>
                </Infos>
                <Button  IsCheck={done ? IsCheckTrue : IsCheckFalse } onClick={() => {
                    !done ?
                    HabitDone(id)
                    :
                    HabitUndone(id)
                }}>
                    <ion-icon name="checkmark"></ion-icon>
                </Button>
            </ContainerTodayHabits>
    } else {
        return <></>
    }
}

const ContainerA = styled.div`
    width: 375px;
    height: 100%;
    margin: auto auto;
    display:flex;
    justify-content: center;
    flex-direction: column;
`

const ContainerDay = styled.div`
    height: 107px;
    width: 340px;
    margin: auto auto;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const ContainerTodayHabits = styled.div`
    width:340px;
    height:94px;
    background: #ffffff;
    margin: auto auto;
    border-radius: 5px;
    margin-bottom: 10px;
    display:flex;
    position: relative;
    &:last-of-type {
        margin-bottom: 130px;
    }
`
const Infos = styled.div`
    position: absolute;
    height:93px;
    width:258px;
    margin: auto auto;
    span {
        position: absolute;
        font-family: 'Lexend Deca';
        font-size: 19.976px;
        color: #666666;
        margin-left:15px;
        margin-top:13px
    }
    p{
        font-family: 'Lexend Deca';
        font-size: 12.976px;
        color: #666666;
        margin-left: 15px;
        &:first-of-type {
            margin-top: 45px;
        }
        &:last-of-type {
            margin-top:3px
        }
    }
`
const Button = styled.button`
    position: absolute;
    width:69px;
    height:69px;
    right:0;
    margin-right:13px;
    margin-top:13px;
    background: ${props => props.IsCheck};
    border-radius: 5px;
    border:none;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    ion-icon {
        font-size:50px;
        font-weight: bold;
        color: white
    }
`