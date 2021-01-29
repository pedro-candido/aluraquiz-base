import styled from 'styled-components';

const Widget = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
  opacity: 0.85;
  border-radius: 2px;
  overflow: hidden;

  h1,h2,h3{
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    opacity: 1.0;
  }

  p{
    opacity: 1.0;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 1.0;

  h1{
    margin-block-start: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  opacity: 1.0;
  color: ${({ theme }) => theme.colors.contrastText};


  & > *::first-child{
    margin-top: 0;
  }

  & > *::last-child{
    margin-bottom: 0;
  }

  ul{
    list-style: none;
    padding: 0;
  }
`;

export default Widget;