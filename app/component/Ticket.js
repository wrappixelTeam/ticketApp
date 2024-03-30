import React from 'react'
import TableData from './TableData';
import TicketCard from './TicketCard';

const Ticket = () => {
  return (
    <div class="container">
        <section class="my-5"> 
            <div class="row d-flex" >
                <TicketCard number="5"  name="Total Tickets" bg="bg-primary-subtle" tc="text-primary"/>
                <TicketCard number="1" name="Pending Tickets" bg="bg-warning-subtle" tc="text-warning"/>
                <TicketCard number="1" name="Open Tickets" bg="bg-success-subtle" tc="text-success"/>
                <TicketCard number="3" name="Closed Tickets" bg="bg-danger-subtle" tc="text-danger"/>
            </div>
        </section>

                <div class="mb-3 d-flex justify-content-end">
                    <div class="form-floating mb-3 w-25">
                        <input type="search" class="form-control" id="floatingInput" placeholder="" />
                        <label for="floatingInput">Search</label>
                    </div>
                </div>
        
                <div class="table-responsive">
                    <table class="table text-nowrap">
                        <thead>
                            <tr>
                                <th className='fw-medium' scope="col">Id</th>
                                <th className='fw-medium' scope="col">Ticket</th>
                                <th className='fw-medium' scope="col">Assigned To</th>
                                <th className='fw-medium' scope="col">Status</th>
                                <th className='fw-medium' scope="col">Date</th>
                                <th className='fw-medium' scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            <TableData />     
                        </tbody>
                    </table>
                </div>

                <nav aria-label="Page navigation example ">
                    <ul class="pagination d-flex justify-content-end">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                    </nav>
            </div>
            
  )
}

export default Ticket
