import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';

import Form from './Form';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';

describe('render form', () =>
  test('render user form', () => {
    render(<Form />);
    expect(screen.getByTestId('form-user')).toBeInTheDocument();
    expect(screen.getByTestId('first-name')).toBeInTheDocument();
  }));

describe('submit is not validate if input to text no text', () => {
  test('error output for incorrect data entered to first name', async () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('first-name'), '2');
    userEvent.click(screen.getByTestId('button-submit'));
    await waitFor(() => {
      const errorBlocks = screen.getAllByTestId('error-text');
      expect(errorBlocks[0]).toHaveClass('formBlockErrorText');
    });
  });

  //   test('displays an error text if not all required fields are filled', () => {
  //     render(<Form />);
  //     userEvent.type(screen.getByTestId('first-name'), 'user');
  //     userEvent.click(screen.getByTestId('button-submit'));
  //     expect(screen.getByTestId('error-text')).toBeInTheDocument();
  //     userEvent.type(screen.getByTestId('last-name'), 'user');
  //     userEvent.click(screen.getByTestId('button-submit'));
  //     expect(screen.getByTestId('error-text')).toBeInTheDocument();
  //     userEvent.type(screen.getByTestId('email'), 'user@ss.us');
  //     userEvent.click(screen.getByTestId('button-submit'));
  //     expect(screen.getByTestId('error-text')).toBeInTheDocument();
  //     userEvent.clear(screen.getByTestId('gender-female'));
  //     userEvent.click(screen.getByTestId('gender-male'));
  //     userEvent.click(screen.getByTestId('button-submit'));
  //     expect(screen.getByTestId('error-text')).toBeInTheDocument();
  //     userEvent.clear(screen.getByTestId('checkbox-button'));
  //     userEvent.click(screen.getByTestId('button-submit'));
  //     expect(screen.getByTestId('error-text')).toBeInTheDocument();
  //   });
});
describe('input length error checking', () => {
  test('shows invalid input text', async () => {
    render(<Form />);
    userEvent.type(screen.getByTestId('first-name'), 'word');

    await waitFor(() => {
      userEvent.click(screen.getByTestId('button-submit'));
      userEvent.type(screen.getByTestId('first-name'), 'as');
      expect(screen.getByText(/characters/i)).toBeInTheDocument();
    });
  });
});

describe('submit is validate if input has a text', () =>
  test('not error output ', async () => {
    render(<Form />);

    await act(() => {
      userEvent.type(screen.getByTestId('first-name'), '2222');
      userEvent.type(screen.getByTestId('last-name'), '2222');
      userEvent.type(screen.getByTestId('input-email'), 'user@user.us');
      userEvent.click(screen.getByTestId('checkbox-button'));
      userEvent.click(screen.getByTestId('gender-female'));
      userEvent.click(screen.getByTestId('gender-male'));
      expect(screen.getByTestId('gender-male')).toBeChecked();
      userEvent.click(screen.getByTestId('button-submit'));
    });
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
describe('shows information about the loaded image on the page', () => {
  test('shows name image', async () => {
    window.URL.createObjectURL = function () {};
    const files = [new File(['hello'], 'hello.png', { type: 'image/png' })];
    render(<Form />);

    const input = screen.getByLabelText(/choice image/i);
    userEvent.upload(input, files);

    expect(input.files[0]).toStrictEqual(files[0]);
    await waitFor(() => {
      expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
  });
});

describe('after pressing the button is disabled ', () => {
  test('button disabled', async () => {
    render(<Form />);
    const buttonSubmit = screen.getByTestId('button-submit');
    userEvent.click(buttonSubmit);
    await waitFor(() => {
      expect(buttonSubmit).toBeDisabled();
    });
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
