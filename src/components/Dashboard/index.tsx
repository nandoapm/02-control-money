import { Summary } from "../Summary";
import { TransitionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransitionTable />
        </Container>
    )
}