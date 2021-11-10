import React from "react"
import PropTypes from 'prop-types'

const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '2px solid #000',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    },
    strong: {
        marginRight: '1rem'
    }
}

function WhatItem({ whats, index, onChange}) {
    return (
        
        <li style={styles.li}>
        <span>
        <input type="checkbox" style={styles.input} onChange={ () => onChange(whats.id)}/>
        <strong style={styles.strong}>{index + 1}</strong>
        &nbsp;
        {whats.title}
        </span>

        <button className='rm'>&times;</button>
        </li>
    )
}

WhatItem.propTypes = {
    whats: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default WhatItem