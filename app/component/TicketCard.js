import React from 'react'

const TicketCard = (props) => {
  return (
    <div class="col-lg-3 col-md-6 d-flex justify-content-center">
        <div class={`card align-items-center w-100 py-4 ${props.bg}  ${props.tc}  border-0`} >
            <div class="d-flex  align-items-center">
                <h3>{props.number}</h3>
            </div>
            <div class="d-flex  align-items-center">
                <h6>{props.name}</h6>
            </div>
        </div>
    </div>
  )
}

export default TicketCard
