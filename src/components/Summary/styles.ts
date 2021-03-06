import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem;
    margin-top: -6rem;
    
    @media(max-width: 720px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;

    }

    div {
        background: var(--shape);
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header { 
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block; //strong vem por padrão display: inline
            margin-top: 1rem;
            font-size: 1.7rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.hightlight-background {
            background: var(--green);
            color: var(--shape);
        }
    }
`;