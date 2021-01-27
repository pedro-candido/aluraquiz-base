import styled from "styled-components"

const Switch = styled.a`
    text-decoration: none;
    font-weight: bold;
    color: #fff;
`

const SwitchPage = ({children, to}) => {
    return (
        <Switch href={to}>
            {children}
        </Switch>
    )
}

export default SwitchPage
