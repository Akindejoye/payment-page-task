import styled from 'styled-components';

const Container = styled.div`
    padding-top: 4rem;
    padding-bottom: 4rem;
`;
const Summation = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
`;
const TextTag = styled.h2`
    font-size: 2rem;
`;
const Figure = styled.h2`
    font-size: 2rem;
`;


const Estimation = () => {
    return ( 
        <Container>
            <Summation>
                <TextTag>Subtotal</TextTag>
                <Figure>#2,497.00</Figure>
            </Summation>
            <Summation>
                <TextTag>Estimated TAC</TextTag>
                <Figure>#119.64</Figure>
            </Summation>
            <Summation>
                <TextTag>Promotional Code: Z4KXLM9A</TextTag>
                <Figure>#-60.00</Figure>
            </Summation>
        </Container>
     );
}
 
export default Estimation;