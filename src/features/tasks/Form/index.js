import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { StyledForm, FormInput, FormButton } from './styled';
import { addTask } from '../tasksSlice';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    const inputRef = useRef(null);

    const focusFormInput = () => {
        inputRef.current.focus();
    };

    return (<StyledForm onSubmit={onFormSubmit}>
        <FormInput
            ref={inputRef}
            value={newTaskContent}
            placeholder="Co jest do zrobienia?"
            onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <FormButton onClick={focusFormInput}>
            Dodaj zadanie
        </FormButton>
    </StyledForm>)
};

export default Form; 