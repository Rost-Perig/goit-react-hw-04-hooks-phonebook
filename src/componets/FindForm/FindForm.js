import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './FindForm.module.css';

const FindForm = ({transDataToUp}) => {
    const  [inputValue, setInputValue]  = useState('');

    const findInputChange = e => {
        setInputValue(e.currentTarget.value);
        transDataToUp(e.currentTarget.value);
    };

    const reset = (e) => setInputValue('');

    return (
        <div className={s.frame}>
            <h3>Find contacts by name</h3>
            <input
                className={s.input}
                type="text"
                name="find"
                value={inputValue}
                onChange={findInputChange}
                onBlur={reset}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </div>
    );

};

FindForm.propTypes = {
    inputValue: PropTypes.string
};

export default FindForm;