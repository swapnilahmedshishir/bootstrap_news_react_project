import React from 'react';
import Toast  from 'react-bootstrap/Toast';
function ToastItem()  {
    return (
        <>
         <Toast>
         <Toast.Header>
         <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
         <strong className='me-auto'>Bootstrap</strong>
         <small> 12 mins ago </small>
         </Toast.Header>
         <Toast.Body> Thanks for your Order complete </Toast.Body>
         </Toast>   
        </>
    );
};

export default ToastItem;