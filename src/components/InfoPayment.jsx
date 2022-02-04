import styled from 'styled-components';
import Master from '../images/master-card.jpg';
import Visa from '../images/visa-logo.png';
import Discover from '../images/discover-logo.png';
import Paypal from '../images/paypal-logo.png';

const Container = styled.div`
    display: flex;
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

`;

const InfoLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;
const Header = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 750px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 2.5rem;
    }
`;
const SubHeader = styled.h2`
    font-size: 2rem;
    opacity: 0.3;
    margin-bottom: 2rem;

    @media screen and (max-width: 750px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;
const MasterCard = styled.div``;
const Card = styled.img`
    width: 100%;
`;
const InfoRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;
const LogoWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4rem;

    @media screen and (max-width: 750px) {
        display: none;
    }
`;
const Logo = styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 3rem;
`;
const WrapperMainInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 750px) {
        margin-top: 5rem;
    }

    @media screen and (max-width: 690px) {
        display: flex;
        flex-direction: column;
    }
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
    margin-right: 2rem;

    @media screen and (max-width: 690px) {
       margin-bottom: 2rem;
    }
`;
const Label = styled.label`
    font-size: 1.6rem;
    padding-bottom: 1rem;
`;
const Input = styled.input`
    width: 27rem;
    height: 4rem;
    border: 1px solid #e9e9e983;
    background-color: #e9e9e983;
    outline: none;
    padding: 0.5rem 2rem;
    color: #1B1212;
`;

const PurchaseWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
`;
const Radio = styled.input`
    width: 2rem;
    height: 2rem;
    background-color: blue;
`;
const LabelRadio = styled.label`
    margin-left: 2rem;
    font-size: 1.7rem;
`;

const AddCard = styled.button`
    padding: 2rem;
    background-color: #1260cc;
    border: none;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 5px;

    @media screen and (max-width: 750px) {
        width: 70%;
        margin: 0 auto;
    }
`;



const InfoPayment = () => {
    return ( 
        <Container>
            <InfoLeft>
                <Header>Payment Information</Header>
                <SubHeader>Choose your method of payment.</SubHeader>
                <MasterCard>
                    <Card src={Master}></Card>
                </MasterCard>
            </InfoLeft>
            <InfoRight>
                <LogoWrapper>
                    <Logo src={Visa}></Logo>
                    <Logo src={Discover}></Logo>
                    <Logo src={Paypal}></Logo>
                </LogoWrapper>
                <WrapperMainInput>
                    <InputWrapper>
                        <Label>Credit card number</Label>
                        <Input placeholder='5412  1234  5678  9010' />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Expiration date</Label>
                        <Input placeholder='01/20' />
                    </InputWrapper>
                </WrapperMainInput>
                <WrapperMainInput>
                    <InputWrapper>
                        <Label>Security Code</Label>
                        <Input placeholder='420' />
                    </InputWrapper>
                    <InputWrapper>
                        <Label>Postal Code</Label>
                        <Input placeholder='10119' />
                    </InputWrapper>
                </WrapperMainInput>
                <PurchaseWrapper>
                    <Radio type='radio' />
                    <LabelRadio>
                        Use this card for next time purchase
                    </LabelRadio>
                </PurchaseWrapper>
                <AddCard>Add card</AddCard>
            </InfoRight>
        </Container>
     );
}
 
export default InfoPayment;