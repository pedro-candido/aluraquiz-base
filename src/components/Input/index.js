import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  
`

export default function Input({
  state, setState, onChange, placeholder, ...props
}) {
  return (
    <>
      <input
        id="name"
        placeholder="Type your name"
        type="text"
        value={state}
        autoComplete="disabled"
        onChange={(event) => setState((event.target.value).trim())}
      />
      <button
        disabled={state === ''}
        style={state === ''
          ? {
            opacity: '0',
            transition: '.3s',

          }
          : {
            transition: '.3s',
            opacity: '1',
            top: '0px',
          }}
        type="submit"
      >
        <FaChevronRight />
      </button>
    </>
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  setState: PropTypes.string.isRequired,
};