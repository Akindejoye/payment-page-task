import styled from 'styled-components';

const Container = styled.div`
    padding-top: 4rem;
    padding-bottom: 4rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 650px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    
`;
const Button = styled.button`
    color: #fff;
    background-color: #1260cc;
    font-size: 2rem;
    padding: 2rem 4rem;
    border: none;

    @media screen and (max-width: 650px) {
       margin-bottom: 2rem;
    }

`;
const Total = styled.span`
    font-size: 4rem;
    font-weight: 900;
    text-transform: uppercase;

    @media screen and (max-width: 380px) {
       font-size: 2.5rem;
    }
`;

const Completion = () => {
    return ( 
        <Container>
            <Button>Complete payment</Button>
            <Total>Total: #2556.64</Total>
        </Container>
     );
}
 
export default Completion;
