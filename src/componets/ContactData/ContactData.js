import PropTypes from 'prop-types';
import s from './ContactData.module.css';

const ContactData = ({contactObj, idToUp}) => {

    const deletedId = e => idToUp(e.target.dataset.key);
    const {subscriber, id, number} = contactObj;
    return (
        <>
            <p className={s.textItem}>
                <span>{subscriber}:</span>
                <span>{number}</span>
            </p>
            <button
                className={s.btn}
                type={"button"}
                data-key={id}
                onClick={deletedId}>
                Delete
            </button>
        </>
    );
};

ContactData.propTypes = {
  subscriber: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default ContactData;