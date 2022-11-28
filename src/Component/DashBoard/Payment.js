import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { Loader } from '../Shared/Loader';
import PaymentForm from './PaymentForm';


const stripePromise = loadStripe("pk_test_51M65QEI5QMdTMQHL6YJnfkm9jtXb4rMUgP3zD8k1ulfJY1XPXhtAgzSxjn2FBpSobSVpURKkqH6HZcwRL7eFoir500FdtiaEcn");

const Payment = () => {
    const paymentData = useLoaderData();

    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return <Loader></Loader>
    }
    return (
        <div>
            <h1 className='text-3xl'>Payment For {paymentData?.product_name}</h1>





            {/* <div className='w-96 my-12'>
       <Elements stripe={stripePromise}>
           <PaymentForm
            paymentData={paymentData}
           
           ></PaymentForm>
        </Elements>
       </div> */}



            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <PaymentForm
                        paymentData={paymentData}
                    ></PaymentForm>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;