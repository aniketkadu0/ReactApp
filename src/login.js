export default function Login(props){
    let isLoggedIn = props.isLoggedIn
    if(isLoggedIn)
    return (
        <h1>Login successfully</h1>
    );
    else
    return (
        <h1>Login failed</h1>
    )
} 