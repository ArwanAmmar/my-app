import styled from "styled-components";

const Container = styled.div`

    width:100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),rgba(255,255,255,0.5)
        ),
         url("https://images.pexels.com/photos/3684772/pexels-photo-3684772.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
    background-repeat:none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position-y:100%;

`;
const Wrapper = styled.div`
    width:25%;
    padding: 20px;
    background-color: white;

`;
const Form = styled.form`
    display: flex;
    flex-direction: column;

`;
const Input = styled.input`
    flex:1;
    min-width: 25%;
    margin:10px 0px ;
    padding: 10px;
`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Button = styled.button`
    width: 40%;
    border:none;
    padding: 15px 20px;
    background-color: teal;
    color:white;
    cursor:pointer;
    margin-bottom: 10px;

`;
const Link = styled.a`
    margin:10px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOGIN</Button>
                <Link>SO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>

            </Form>
        </Wrapper>

    </Container>  
  );
};

export default Login;
