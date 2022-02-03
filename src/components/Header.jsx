import styled from 'styled-components';
import Lady from '../images/lady-blue.jpg';
import {FaBars} from 'react-icons/fa';

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 3rem;
    padding-right: 2rem;
    padding-bottom: 8rem;
    opacity: ${({ toggle }) => (!toggle ? '0' : '100%')};
`;
const ListWrapper = styled.ul`
    list-style: none;
    display: flex;
    gap: 5rem;
    margin-right: 8rem;

    @media screen and (max-width: 750px) {
        display: none;
    }
   
`;

const ListItem = styled.li`
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
`;

const HeaderProfile = styled.div`
    
`;

const Profile = styled.img`
    width: 10rem;
    height: 10rem;
    border-radius: 50%;

    @media screen and (max-width: 750px) {
        display: none;
    }

`;

const Icon = styled.button`
    display: none;

    @media screen and (max-width: 750px) {
        display: block;
        font-size: 5rem;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: transparent;
    }
`;

const Header = ({ toggle }) => {
    return ( 
        <Container toggle>
            <ListWrapper>
                <ListItem>Trips</ListItem>
                <ListItem>Recently Viewed</ListItem>
                <ListItem>Bookings</ListItem>
            </ListWrapper>
            <HeaderProfile>
                <Profile src={Lady}></Profile>
            </HeaderProfile>
            <Icon onClick={toggle}>
                <FaBars />
            </Icon>
        </Container>
     );
}
 
export default Header;