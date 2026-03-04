# Student Result Management (App.jsx + Result.jsx)

This project contains a simple React-based student result calculator with two core components:
- `App.jsx` (form input + result calculation)
- `Result.jsx` (result display)

## Component Overview

### `src/App.jsx`
`App.jsx` is the main container component.

Responsibilities:
- Maintains input state for:
	- student name
	- subject 1 marks
	- subject 2 marks
	- subject 3 marks
- Handles form submission with `handleSubmit`
- Calculates:
	- `total = marks1 + marks2 + marks3`
	- `percentage = total / 3`
- Assigns grade using percentage:
	- `A` for percentage >= 90
	- `B` for percentage >= 75
	- `C` for percentage >= 60
	- `D` otherwise
- Stores final data in `studentData`
- Conditionally renders `Result` only when `studentData` exists

### `src/Result.jsx`
`Result.jsx` is a presentational component.

Responsibilities:
- Receives a `data` prop object from `App.jsx`
- Displays:
	- Name
	- Total Marks
	- Percentage
	- Grade

## Data Contract Between Components

`App.jsx` passes the following object to `Result.jsx` as `data`:

```js
{
	name: string,
	total: number,
	percentage: number,
	grade: "A" | "B" | "C" | "D"
}
```

## User Flow

1. User enters name and marks for 3 subjects.
2. User clicks **Calculate Result**.
3. App computes total, percentage, and grade.
4. `Result.jsx` displays the computed output.

## Run the Project

```bash
npm install
npm run dev
```
