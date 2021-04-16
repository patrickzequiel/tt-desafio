import { Requests } from "../Requests";
import { Summary } from "../Symmary";
import { Container } from "./styles";

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <Requests />
        </Container>
    )
}