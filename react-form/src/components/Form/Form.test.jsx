import { render, screen } from '@testing-library/react';
import React from 'react';

import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('render form', () =>
  test('render user form', () => {
    render(<Form />);
    expect(screen.getByTestId('form-user')).toBeInTheDocument();
    expect(screen.getByTestId('first-name')).toBeInTheDocument();
  }));

describe('submit is not validate if input to text no text', () => {
  test('error output for incorrect data entered to first name', () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('first-name'), '2');
    userEvent.click(screen.getByText(/submit/i));
    expect(screen.getByTestId('error-text')).toBeInTheDocument();
  });
  test('displays an error text if not all required fields are filled', () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('first-name'), 'user');
    userEvent.click(screen.getByTestId('button-submit'));
    expect(screen.getByTestId('error-text')).toBeInTheDocument();
    userEvent.type(screen.getByTestId('last-name'), 'user');
    userEvent.click(screen.getByTestId('button-submit'));
    expect(screen.getByTestId('error-text')).toBeInTheDocument();
    userEvent.type(screen.getByTestId('email'), 'user@ss.us');
    userEvent.click(screen.getByTestId('button-submit'));
    expect(screen.getByTestId('error-text')).toBeInTheDocument();
    userEvent.clear(screen.getByTestId('gender-female'));
    userEvent.click(screen.getByTestId('gender-male'));
    userEvent.click(screen.getByTestId('button-submit'));
    expect(screen.getByTestId('error-text')).toBeInTheDocument();
    userEvent.clear(screen.getByTestId('checkbox-button'));
    userEvent.click(screen.getByTestId('button-submit'));
    expect(screen.getByTestId('error-text')).toBeInTheDocument();
  });
});

describe('submit is validate if input has a text', () =>
  test('not error output ', () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('first-name'), '2222');
    userEvent.type(screen.getByTestId('last-name'), '2222');
    userEvent.type(screen.getByTestId('email'), 'user@user.us');
    userEvent.click(screen.getByTestId('checkbox-button'));
    userEvent.click(screen.getByTestId('gender-female'));
    userEvent.click(screen.getByTestId('gender-male'));
    expect(screen.getByTestId('gender-male')).toBeChecked();
    userEvent.click(screen.getByText(/submit/i));
    expect(screen.queryByTestId('error-text')).not.toBeInTheDocument();
  }));

test('upload file', () => {
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });

  render(
    <div>
      <label htmlFor="file-uploader">Upload file:</label>
      <input id="file-uploader" type="file" />
    </div>
  );
  const input = screen.getByLabelText(/upload file/i);
  userEvent.upload(input, file);

  expect(input.files[0]).toStrictEqual(file);
  expect(input.files.item(0)).toStrictEqual(file);
  expect(input.files).toHaveLength(1);
});

describe('upload image', () => {
  test('user going to load image', () => {
    window.URL.createObjectURL = function () {};
    const files = [
      new File(['hello'], 'hello.png', { type: 'image/png' }),
      new File(['there'], 'there.png', { type: 'image/png' }),
    ];
    render(<Form />);

    const input = screen.getByLabelText(/choice image/i);
    userEvent.upload(input, files);

    expect(input.files[0]).toStrictEqual(files[0]);
  });
});

describe("don't load image", () => {
  test('user not going to load image', () => {
    const files = [new File([''], '', { type: 'image/png' })];
    render(<Form />);
    const input = screen.getByLabelText(/choice image/i);
    userEvent.upload(input, files);

    expect(screen.queryByTestId('image-block')).toBeNull();
  });
});
