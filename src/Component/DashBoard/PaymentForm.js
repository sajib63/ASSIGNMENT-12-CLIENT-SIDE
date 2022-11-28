import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const PaymentForm = ({paymentData}) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const { sell_price, email, product_name , _id} = paymentData;
    console.log(sell_price, email, product_name, _id);



    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {

        fetch("https://y-sajib63.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // authorization: `bearer ${localStorage.getItem('access-Token')}`

            },
            body: JSON.stringify({ sell_price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [sell_price]);



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        setSuccess('');
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: product_name,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
            return
        }

        if (paymentIntent.status === "succeeded") {

            const payment = {
                sell_price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id

            }

            fetch('https://y-sajib63.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('access-Token')}`

                },
                body: JSON.stringify(payment)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess('Congrats ! your payment success')
                        setTransactionId(paymentIntent.id)
                        setProcessing(false)
                    }
                })

        }

        console.log('paymentIntent', paymentIntent);


    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='btn btn-primary btn-sm mt-5'
                type="submit"
                disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>

        </form>
        <p className="text-sm text-red-600">{cardError}</p>
        <div>

            {
                success && <div>
                    <p className="text-sm text-primary">{success}</p>
                    <p className="text-sm text-primary">Your Transaction Id : {transactionId}</p>

                </div>
            }
        </div>

    </>
    );
};

export default PaymentForm;