import { useState } from 'react';
import styled from 'styled-components';
import Completion from './Completion';
import Estimation from './Estimation';
import Header from './Header';
import InfoPayment from './InfoPayment';
import MobileHeader from './MobileHeader';

const PaymentWrapper  = styled.div`
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 4rem;
    overflow: hidden;
`;

const Hr = styled.hr`
    color: #e9e9e9;
    padding-left: 2rem;

    @media screen and (max-width: 750px) {
        display: none;
    } 
`;

const PaymentContainer = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return ( 
        <PaymentWrapper>
            <MobileHeader isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle} />
            <Hr />
            <InfoPayment />
            <Hr />
            <Estimation />
            <Hr />
            <Completion />
        </PaymentWrapper>
     );
}
 
export default PaymentContainer;