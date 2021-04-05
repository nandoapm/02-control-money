import styled from 'styled-components'

export const Container = styled.header`
    background: var(--green-dark);
`;

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 0.8rem;
        color: var(--green-dark);
        background: var(--shape);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9)
        }
    
    }

    @media (max-width: 720px) {
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem 6rem;
        button {
            margin-top: 1.5rem;
            width: 100%;
        }
    }
    
`;

