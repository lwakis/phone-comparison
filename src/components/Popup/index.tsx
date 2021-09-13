import React from 'react';
import { Phone } from '../../types/phone';
import './Popup.css';

interface PropsType {
    popup: number | boolean;
    setPopup: any;
    change: any;
    searchPhones: any;
}

const Popup: React.FC<PropsType> = ({popup, setPopup, change, searchPhones}) => {    
    const [searchFound, setSearchFound] = React.useState<any>(searchPhones);
    const [searchText, setSearchText] = React.useState<string>("");


    React.useEffect(() => {   
        const timeOutId = setTimeout(() => setSearchFound(searchPhones.filter((element: Phone) => element.name.toLowerCase().includes(searchText.toLowerCase()))), 500);
        console.log(searchFound);
        if (searchFound?.length === 0) {
          setSearchFound(null);
        }
        return () => clearTimeout(timeOutId);    
      }, [searchText, searchFound, searchPhones]);
      
    const ref = React.useRef<HTMLHeadingElement>(null);

    const handleClickOutside = (e: Event) => {
        if (ref.current && !ref.current.contains(e.target as HTMLInputElement) ) {
            setPopup(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        <>
        {popup >= 0 && <div ref={ref} className="popup">
                <input onChange={(e) => setSearchText(e.target.value)} 
                    placeholder="Поиск"
                    value={searchText} type="text"/>
                {searchFound.map((p: Phone) => 
                    <div key={p.id} className="popup__search-item">
                        <img onClick={() => change(p)} src="/assets/change.svg" alt="change" />
                        <img className="popup__phone-photo" src={`/assets/${p.photo}`} alt="phone" />
                        <span>{p.name}</span>
                    </div>)}
            </div>}
        </>
    )
}

export default Popup;