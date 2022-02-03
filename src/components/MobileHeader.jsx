import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';

const Container = styled.div`
    display:none;

    @media screen and (max-width: 750px) {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    }
`;
const Icon = styled.button`
    font-size: 5rem;
    position: absolute;
    right: 2rem;
    top: 1rem;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
`;
const ListWrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    text-align: cneter;

    /* @media screen and (max-width: 750px) {
        display: none;
    } */
   
`;

const ListItem = styled.li`
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
`;


const MobileHeader = ({ isOpen, toggle }) => {
    return ( 
        <Container isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <FaTimes />
            </Icon>
            <ListWrapper>
                <ListItem>Trips</ListItem>
                <ListItem>Recently Viewed</ListItem>
                <ListItem>Bookings</ListItem>
            </ListWrapper>
        </Container>
     );
}
 
export default MobileHeader;