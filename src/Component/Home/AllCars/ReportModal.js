import React from 'react';
import toast from 'react-hot-toast';

const ReportModal = ({ report }) => {
    const { purchase_Price, sell_price, picture, age, time, seller_name, product_name, phone, address, verification } = report;

    const reportModal = event => {
        event.preventDefault();
        const message = event.target.report.value;
        const reportProduct = {
            purchase_Price,
            sell_price,
            picture,
            age,
            time,
            seller_name,
            product_name,
            phone, address,
            verification,
            message

        }
        fetch('https://y-sajib63.vercel.app/report', {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(reportProduct)
          })
          .then(res=> res.json())
          .then(data =>{
            toast.success('successfully added on server')
            event.target.reset();
          })
          .catch(error=>{
            toast.error(error.message);
          })

        event.target.reset();

    }

    return (
        <div>

            <input type="checkbox" id="report-modal" className="modal-toggle" />
            <div className="modal">

                <form onSubmit={reportModal} className="modal-box">
                    <label htmlFor="report-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{product_name}</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Type your Report</span>
                        </label>


                        <textarea name='report' className="textarea textarea-bordered input-primary" placeholder="Type Your Complain" required></textarea>
                    </div>






                    <input type="submit" className='btn btn-primary w-full my-5' value="Submit" />

                </form>
            </div>
        </div>
    );
};

export default ReportModal;