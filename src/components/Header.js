import styled from 'styled-components';

const StyledHeader = styled.div`
    font-size: 2rem;
`

export default function Header(){
    return (
        <StyledHeader>
        <div>
            <h1 className='Header'>Star Wars Characters</h1>
        </div>
        </StyledHeader>
    )
}