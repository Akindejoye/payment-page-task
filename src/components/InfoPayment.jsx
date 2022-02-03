import styled from 'styled-components';
import Master from '../images/master-card.jpg';
import Visa from '../images/visa-logo.png';
import Discover from '../images/discover-logo.png';
import Paypal from '../images/paypal-logo.png';

const Container = styled.div`
    display: flex;

`;

const InfoLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const Header = styled.h1`
    font-size: 3rem;
`;
const SubHeader = styled.h2`
    font-size: 2rem;
    opacity: 0.3;
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
`;
const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    margin-bottom: 3rem;
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
                        <Input placeholder='03/24' />
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
            </InfoRight>
        </Container>
     );
}
 
export default InfoPayment;