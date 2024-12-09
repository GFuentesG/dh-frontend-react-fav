import {describe, test, expect, afterEach, vi} from "vitest";
import {cleanup, render, screen} from "@testing-library/react";
import Login from "../../../pages/login/Login";
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from "react-router-dom";

afterEach(() => {
  cleanup();
});

describe("Test <Login />", () => {
  test("Debe renderizar el formulario correctamente", () => {
    // Arrange
		render(<BrowserRouter>  {/* *** Envolvemos el componente Login con BrowserRouter */}
      <Login />
    </BrowserRouter>);
		// screen.debug();

		const inputEmail = screen.getByRole("email");
		// const inputEmail = screen.getByTestId("email");

		const inputPassword = screen.getByRole("password");
		// const inputPassword = screen.getByTestId("password");

    const buttonSubmit = screen.getByRole("button");

    expect(inputPassword).toBeDefined();
		expect(inputPassword.getAttribute("type")).toBe("password");
    
    expect(inputEmail).toBeDefined();
		expect(inputEmail.getAttribute("type")).toBe("email");

		expect(buttonSubmit).toBeDefined();
		expect(buttonSubmit.getAttribute("type")).toBe("submit");
	});

	test("Debe permitir escribir en los campos", async() => {
    // Arrange
    render(<BrowserRouter>  {/* *** Envolvemos el componente Login con BrowserRouter */}
      <Login />
    </BrowserRouter>);

    const user = userEvent.setup()
    const inputEmail = screen.getByRole("email");
    const inputPassword = screen.getByRole("password");
    const buttonSubmit = screen.getByRole("button");

    // Act
    await user.type(inputEmail, "humberto@correo.com")
    await user.type(inputPassword, "123456")    
    user.click(buttonSubmit)

    // Assert
    expect(inputEmail.value).toBe("humberto@correo.com")
    expect(inputPassword.value).toBe("123456")
	});

  // test("Debe redirigir a /dashboard al hacer login", async () => {
  //   // *** Mock de useNavigate
  //   const mockNavigate = vi.fn(); // *** Aquí creamos el mock para useNavigate
  //   // *** Renderizamos el componente Login con el mock
  //   render(<BrowserRouter>  {/* *** Envolvemos el componente Login con BrowserRouter */}
  //     <Login onLogin={() => {}} navigate={mockNavigate} />
  //   </BrowserRouter>);

  //   const user = userEvent.setup();
  //   const inputEmail = screen.getByRole("email");
  //   const inputPassword = screen.getByRole("password");
  //   const buttonSubmit = screen.getByRole("button");

  //   // Act
  //   await user.type(inputEmail, "humberto@correo.com");
  //   await user.type(inputPassword, "123456");
  //   user.click(buttonSubmit);

  //   // Assert
  //   // *** Verificamos que navigate haya sido llamado con "/dashboard"
  //   expect(mockNavigate).toHaveBeenCalledWith('/dashboard'); // *** Aquí verificamos la llamada a navigate
  // });

});
