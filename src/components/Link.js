import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'react-bootstrap';

const Link = ({ active, children, onClick }) => (
  <Radio 
     onChange={onClick}
     checked={active}
     disabled={active}
     style={{
         marginLeft: '4px',
     }}
  >
    {children}
  </Radio>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link