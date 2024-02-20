import './topBox.scss'
//import { topDealUsers } from '../../data'
import { useEffect, useState } from 'react';
import axios from 'axios';

const TopBox = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5172/TopBox')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

  return (
    <div className='topBox'>
        <h1>Top Dealer</h1>
        <div className="list">
              {items.map(user => (
                <div className="listItem" key={user.id}>
                    <div className="user">
 
                        <div className="userTexts">
                              <div className="username">{user.dlr_name}</div>
                              <div className="email">{user.addressline1}</div>
                        </div>
                    </div>
                      <span className="amount">${user.id}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TopBox