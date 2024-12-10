import { describe, test, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Form from '../../components/form/Form';  // Ajusta la ruta según tu estructura
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

describe('<Form />', () => {
  test('Debe renderizar correctamente los campos del formulario', () => {
    // Arrange: Renderizamos el formulario dentro de BrowserRouter
    render(
      <BrowserRouter>
        <Form />
      </BrowserRouter>
    );

    // Act: Obtener los elementos del formulario
    const inputNombre = screen.getByRole("name");
    const inputApellido = screen.getByRole("lastname");
    const inputDireccion = screen.getByRole("address");
    const buttonSubmit = screen.getByRole("button");

    // Assert: Verificar que los campos y el botón están en el documento
    expect(inputNombre).toBeDefined();  // Verifica si el input para el nombre está en el DOM
    expect(inputApellido).toBeDefined();  // Verifica si el input para el apellido está en el DOM
    expect(inputDireccion).toBeDefined();  // Verifica si el input para la dirección está en el DOM
    expect(buttonSubmit).toBeDefined();  // Verifica si el botón de submit está en el DOM
  });

  


});
