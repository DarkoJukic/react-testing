import React, { Component } from 'react';   
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return ( 
        <div>
            <button
            onClick={onReset}
            className="btn btn-sm btn primary m-2"
            >Reset
            </button>
            {counters.map(counter => 
            // umjesto da saljemo npr value={counter.id}, mozemo poslati cijeli counter objekt
            <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                value={counter.value}
                id={counter.id}
                onIncrement={onIncrement}
                counter ={counter}
                >
            {/* children element h4, renderira se u counter klasi */}
            <h4>Title #{counter.id}</h4>
            </Counter>
            )}
        </div> 
        );
    }
}
 
export default Counters;