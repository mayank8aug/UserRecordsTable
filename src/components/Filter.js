import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterQuery } from '../actions';
import './Filter.css';

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (!timeout) func.apply(context, args);
    };
}

let handleInput = function (query, dispatch) {
    dispatch(setFilterQuery(query));
};

handleInput = debounce(handleInput, 100);

const Filter = React.memo(() => {
    const filterQuery = useSelector(state => state.user.filterQuery);
    const dispatch = useDispatch();
    return (
        <div className="filter">
            <input className="input-filter" type="text" value={filterQuery || ''} placeholder="--Search--" onChange={(ev) => { handleInput(ev.target.value, dispatch) }}/>
        </div>
    );
});

export default Filter;