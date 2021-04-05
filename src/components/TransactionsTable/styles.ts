import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2rem;

    table { 
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }

            &.deposit {
                color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }
        }
    }

    @media (max-width: 720px) {     
        table {
            //background: red;
            display: block;
            position: relative;
            width: 100%;

            thead, tbody, th, td, tr {
                display: block;
            }

            td, th {
                height: 35px;
                border-radius: 0.25rem;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin-right: 0.5rem;
                margin-bottom: 0.25rem;
            }

            th {
                border: 1px solid #d9d9d9;
            }

            thead {
                float: left;
                //border-bottom: 1px solid #999999;
                //background: red;
            }

            tbody {
                width: auto;
                position: relative;
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                white-space: nowrap;
            }

            tbody tr {
                display: inline-block;
            }

            
            table td:last-child {
                border-right: #999999 solid 1px;
            }
        }
        
    }
`;