import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)({
  padding: "1rem",
});

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [todoInputError, setTodoInputError] = useState(false);
  const [todoCount, setTodoCount] = useState(0);

  const handleAddTodo = () => {
    if (todoInput.trim() === "") {
      setTodoInputError(true);
      return;
    }

    setTodoList([...todoList, todoInput]);
    setTodoInput("");
    setTodoInputError(false);
    setTodoCount(todoCount + 1);
  };

  const handleRemoveTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    setTodoCount(todoCount - 1);
  };

  const handleSubmit = () => {
    const mockTodoData = {
      userId: 1,
      title: "My todo list",
      body: todoList.join("\n"),
    };
    console.log(mockTodoData);
    setTodoList([]);
    setTodoCount(0);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <StyledPaper>
          <Typography variant="h4" gutterBottom>
            Todo List ({todoCount})
          </Typography>
          <TextField
            fullWidth
            label="Add todo"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
              setTodoInputError(false);
            }}
            error={todoInputError}
            helperText={todoInputError && "Please enter a todo"}
          />
          <Button variant="contained" onClick={handleAddTodo}>
            Add
          </Button>
          <ul>
            {todoList.map((todo, index) => (
              <li key={index}>
                {todo}
                <Button
                  variant="outlined"
                  onClick={() => handleRemoveTodo(index)}
                >
                  X
                </Button>
              </li>
            ))}
          </ul>
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={todoList.length === 0}
          >
            Submit
          </Button>
        </StyledPaper>
      </Grid>
    </Grid>
  );
}

export default TodoApp;
