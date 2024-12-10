import { describe, test, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from '../../components/form/Form';  // Ajusta la ruta según tu estructura
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('<Form />', () => {


  test("Debe permitir escribir en los campos del formulario de contacto", async () => {
    // Arrange: Renderizar el formulario de contacto
    render(
      <BrowserRouter>  
        <Form />
      </BrowserRouter>
    );

    // Act: Configurar el usuario y simular la escritura en los campos del formulario
    const user = userEvent.setup();

    // Obtener los campos por su role
    const inputName = screen.getByRole("name");
    const inputLastname = screen.getByRole("lastname");
    const inputAddress = screen.getByRole("address");
    const inputEmail = screen.getByRole("email");
    const inputPhone = screen.getByRole("phone");
    const inputSubject = screen.getByRole("subject");
    const inputMessage = screen.getByRole("message");

    const buttonSubmit = screen.getByRole("button");

    // Simular la escritura en cada campo
    await user.type(inputName, "Juan");
    await user.type(inputLastname, "Perez");
    await user.type(inputAddress, "Calle Falsa 123");
    await user.type(inputEmail, "juan@correo.com");
    await user.type(inputPhone, "1234567890");
    await user.type(inputSubject, "Consulta sobre el servicio");
    await user.type(inputMessage, "Quisiera saber más sobre el servicio que ofrecen.");

    // Act: Simular el clic en el botón de enviar
    user.click(buttonSubmit);

    // Assert: Verificar que los valores de los campos sean correctos
    expect(inputName.value).toBe("Juan");
    expect(inputLastname.value).toBe("Perez");
    expect(inputAddress.value).toBe("Calle Falsa 123");
    expect(inputEmail.value).toBe("juan@correo.com");
    expect(inputPhone.value).toBe("1234567890");
    expect(inputSubject.value).toBe("Consulta sobre el servicio");
    expect(inputMessage.value).toBe("Quisiera saber más sobre el servicio que ofrecen.");
  });


});
