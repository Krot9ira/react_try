import React from "react"
import PropTypes from 'prop-types'
import WhatItem from "./WhatItem"

const styles = {
    ul:{
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

 function WhatLis(props) {
    return (
        <ul style={styles.ul}>
            { props.whats.map((whats, index) =>{
                return <WhatItem 
                whats={whats} 
                key={whats.id} 
                index={index} 
                onChange={props.onToggle}/>
            }) }
        </ul>
    )
}
WhatLis.propTypes = {
    whats: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default WhatLis