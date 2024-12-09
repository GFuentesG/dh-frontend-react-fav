import { useNavigate } from "react-router";
import styles from "./Login.module.css";

const Login = ({ onLogin }) => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		console.log(email, password);
		onLogin(true);
		navigate("/dashboard");
	};
	return (
		<section className={styles.formWrapper}>
			<h1 className={styles.title}>Login</h1>
			<form onSubmit={handleSubmit} data-testid="login-form">
				<div className={styles.formGroup}>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" role="email" data-testid="email" required/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" role="password" data-testid="password" required/>
				</div>
				<button type="submit" className={styles.submitButton}>Ingresar</button>
			</form>
		</section >
	);
};
export default Login;
