import React from 'react';
import './Compare.css';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from '../../store/reducers/index';
import classNames from 'classnames';
import { Phone } from '../../types/phone';
import Popup from '../Popup';


const Compare: React.FC = () => {
    const state = useSelector((state: RootState) => state.phone);
    const [popup, setPopup] = React.useState<number | boolean>(false);
    const [checked, setChecked] = React.useState<boolean>(false);
    
    const dispatch = useDispatch();
    const [phones, setPhones] = React.useState(state.phones.filter((phone: Phone, index: number) => index < state.pagination));
    
    const pagination = [];
    
    for (let i = 2; i < (state.phones.length < 6 ? state.phones.length + 1 : 7) ; i++) {
        pagination.push(i);
    }

    React.useEffect(() => {
        setPhones(state.phones.filter((phone: Phone, index: number) => index < state.pagination));
    }, [state.pagination, state.phones]);

    const change = (p: Phone) => {
        if  (typeof popup === "number") {
            let newPhones = phones;
            newPhones[popup] = p;
            setPhones(newPhones);
            setPopup(false);
        }
    }

    let keys = Object.keys(state.phones);
    const searchPhones: Phone[] = [];
    keys.forEach((key: any) => {        
        if (state.phones[key] !== phones[key]) {
            searchPhones.push(state.phones[key]);
        }
    })    


    const objParam: any = {
        producer: null,
        year: null,
        diagonal: null,
        country: null,
        memory: null,
        hz: null,
        NFC: null,
        ESIM: null,
        wirelessCharging: null,
        price: null
    }

    if (checked) {
    let objPhone = Object.entries(phones[0])
        for (let j = 1; j < phones.length; j++) {
            for(let i=0;i<objPhone.length;i++){            
                if(Object.entries(phones[j])[i].join() === objPhone[i].join()) {
                    if (objParam[objPhone[i][0]] !== false) {
                        objParam[objPhone[i][0]] = true;
                    }
                } else {
                    objParam[objPhone[i][0]] = false;
                }
            }
        }
    }
    
    return (
        <div className="compare">
            <div className="compare__title">
                <h1>Смартфоны</h1>
                <div className="compare__title-display">
                    <h3>Отобразить товары:</h3>
                    {pagination.map((pag: number) => 
                        <span key={pag} onClick={() => dispatch({ type:'PAGINATION', payload: pag })} className={classNames({active: state.pagination === pag})}>{pag}</span>
                    )}
                </div>
            </div>
            <table className="compare__table">
                <thead>
                    <tr>
                        <td><input checked={checked} onChange={() => setChecked(!checked)} type="checkbox"/> <span>Показать различия</span></td>
                        {phones.map((p: Phone, index: number) => <td> 
                            <div key={p.id} className="container__phone">
                                {index === popup && <Popup popup={popup} setPopup={setPopup} change={change} searchPhones={searchPhones}/>}
                                <img src={`/assets/${p.photo}`} alt="phone" />
                                <img className="popup__arrow" onClick={() => setPopup(index)} src="/assets/arrow.svg" alt="arrow" />
                            </div> 
                            <br/> {p.name}</td>)}
                    </tr>
                </thead>
               <tbody>
                    {!objParam.producer && <tr>
                        <td>ПРОИЗВОДИТЕЛЬ</td>
                        {phones.map((p: Phone) => <td>{p.producer}</td>)}
                    </tr>}
                    {!objParam.year && <tr>
                        <td>ГОД РЕЛИЗА</td>
                        {phones.map((p: Phone) => <td>{p.year}</td>)}
                    </tr>}
                    {!objParam.diagonal && <tr> 
                        <td>Диагональ экрана <br/>(ДЮЙМ)</td>
                        {phones.map((p: Phone) => <td>{p.diagonal}</td>)}

                    </tr>}
                    {!objParam.country && <tr>
                        <td>СТРАНА-ПРОИЗВОДИТЕЛЬ</td>
                        {phones.map((p: Phone) => <td>{p.country}</td>)}

                    </tr>}
                    {!objParam.memory && <tr>
                        <td>ОБЪЕМ ПАМЯТИ</td>
                        {phones.map((p: Phone) => <td>{p.memory}</td>)}

                    </tr>}
                    {!objParam.hz && <tr>
                        <td>ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА</td>
                        {phones.map((p: Phone) => <td>{p.hz}</td>)}
                    </tr>}
                    {!objParam.NFC && <tr>
                        <td>NFC</td>
                        {phones.map((p: Phone) => <td><img src={`/assets/${p.NFC ? "check.svg" : "cross.svg"}`} alt="check" /></td>)}
                    </tr>}
                    {!objParam.ESIM && <tr>
                        <td>ПОДДЕРЖКА ESIM</td>
                        {phones.map((p: Phone) => <td><img src={`/assets/${p.ESIM ? "check.svg" : "cross.svg"}`} alt="check" /></td>)}
                    </tr>}
                    {!objParam.wirelessCharging && <tr>
                        <td>ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ</td>
                        {phones.map((p: Phone) => <td><img src={`/assets/${p.wirelessCharging ? "check.svg" : "cross.svg"}`} alt="check" /></td>)}
                    </tr>}
                    {!objParam.price && <tr>
                        <td>СТОИМОСТЬ</td>
                        {phones.map((p: Phone) => <td>{p.price}</td>)}
                    </tr>}
               </tbody>
            </table>
            
        </div>
    )
}

export default Compare;