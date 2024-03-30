import React from 'react'
import random from "../Images/avatar.svg"
import Image from 'next/image'
import { IconTrash  } from '@tabler/icons-react';

function createData(id,name,status,date,h,fh,bg) {
          return { id,name,status,date,h,fh,bg};
}

const rows = [
  createData("1","Parth Panara","Closed" ,"Mon, Nov 2","Sed ut perspiciatis unde omnis iste","ab illo inventore veritatis et quasi architect","bg-danger-subtle"),
  createData("2","Ashish Mandal","Pending" ,"Sun, Aug 8","Sed ut perspiciatis unde omnis iste","ab illo inventore veritatis et quasi architect","bg-warning-subtle"),
  createData("3","Rohit Rathod","Open" ,"Tus, feb 18","Sed ut perspiciatis unde omnis iste","ab illo inventore veritatis et quasi architect","bg-success-subtle"),
];

const TableData = () => {
  return (
    rows.map((row) => (
    <tr>
    <td class="align-middle py-3 fs-6 fw-light" >
        {row.id}
    </td>
    <td class="align-middle py-3">
        <h5 class="m-0 fs-5 fw-medium">{row.h}</h5>
        <span className='fw-light'>{row.fh}</span>
    </td>
    <td class="align-middle py-3">
        <div class="d-flex align-items-center">
            {/* <img src={random} class="img-fluid width-25" style={{ maxWidth: "25%" }} alt="..." /> */}
            <Image src={random} width={50}/>
            <h6 class="mx-3">{row.name}</h6>
        </div>
    </td>
    <td class="align-middle py-3"><span class={`badge ${row.bg} rounded-pill text-secondary fw-semibold`}>{row.status}</span>
    </td>
    <td class="align-middle py-3 fs-6 fw-light">{row.date}</td>
    <td class="align-middle">
        <IconTrash stroke={2} size={18} cursor={'pointer'} color='gray'/>
    </td>
</tr>)) 
  )
}

export default TableData
