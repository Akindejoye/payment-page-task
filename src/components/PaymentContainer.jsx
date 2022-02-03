import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import InfoPayment from './InfoPayment';
import MobileHeader from './MobileHeader';

const PaymentWrapper  = styled.div`
    
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
        </PaymentWrapper>
     );
}
 
export default PaymentContainer;