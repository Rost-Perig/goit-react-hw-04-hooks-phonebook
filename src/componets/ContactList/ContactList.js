// import React, { Component } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css'
import ContactData from '../ContactData';
import FindForm from '../FindForm';

const ContactList = ({contactArr, idToDel}) => {
    const [findData, setFindData] = useState('');

    const tempContactArr = [...contactArr].sort((a, b) => a.subscriber.localeCompare(b.subscriber));

    const getFindData = data => setFindData(data);

     return (
        <div>

            <FindForm transDataToUp={getFindData} />
                
            <ul className={s.list}>
                 {tempContactArr.filter(item => item.subscriber.toLowerCase().includes(findData.toLowerCase())).map(item => {
                    const { id } = item;
                    return (
                        <li key={id} className={s.listItem}>
                            < ContactData contactObj={item} idToUp={idToDel} />
                        </li>
                    );
                })}
            </ul>
                
        </div>
    );
};

ContactList.propTypes = {
  id: PropTypes.string,
};

export default ContactList;