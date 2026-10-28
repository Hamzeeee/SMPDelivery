import { useNavigate } from 'react-router-dom';

function HomePage() {
    return (
        <div className='homepage'>
            <title>DepExpress | Homepage</title>
            <h1>DepExpress</h1>
            <p>Willkommen bei DepExpress, ihr Händler des Vertrauens!</p>
            <LoginButton />
        </div>
    )
}

function LoginButton() {
    const navigation = useNavigate();
    return (
        <button onClick={() => navigation("/login")}>Log-In</button>
    )
}

export default HomePage;