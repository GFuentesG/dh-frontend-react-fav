// src/pages/contact/Contact.test.jsx
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from '../../pages/contact/Contact';

describe('<Contact />', () => {
  test('Debe renderizar el formulario de contacto', () => {
    render(<Contact />);

    const formTitle = screen.getByText(/dejanos tus datos/i);
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/correo/i);
    const lastnameInput = screen.getByLabelText(/apellido/i);
    const phoneInput = screen.getByLabelText(/telefono/i);
    const messageInput = screen.getByLabelText(/mensaje/i);

    expect(formTitle).toBeTruthy(); // Verifica que el campo 'titulo' esté presente
    expect(nameInput).toBeTruthy(); // Verifica que el campo 'name' esté presente
    expect(emailInput).toBeTruthy(); // Verifica que el campo 'email' esté presente
    expect(lastnameInput).toBeTruthy(); // Verifica que el campo 'lastname' esté presente
    expect(phoneInput).toBeTruthy(); // Verifica que el campo 'phone' esté presente
    expect(messageInput).toBeTruthy(); // Verifica que el campo 'message' esté presente
  });
});
