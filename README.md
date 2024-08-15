## Task: Develop a Search Filter App

### Description:

You will be creating a Search Filter App that allows users to enter search keys and filters a list of users based on the entered key. The user list will be provided as a hardcoded JSON array.

### Requirements:

1. **UI Components:**
   - An input field where users can enter their search keys.
   - A list that displays user names filtered based on the search key.
2. **Functional Requirements:**
   - The app should use a hardcoded list of users in JSON format.
   - As the user types in the search field, the list of users should dynamically update to show only those that match the search key.
   - The search should be case-insensitive.
   - Search should only work if user input more than 2 symbols.
3. **JSON List:**
   - Use a hardcoded JSON list of users. Example:

```jsx
[{ name: "John Doe" }, { name: "Jane Smith" }, { name: "Michael Johnson" }, { name: "Emily Davis" }];
```

### Additional Requirements:

- Use React for developing the application.
- Ensure a responsive design so the app looks good on different devices.
- Write clean and understandable code, following best practices.

### Acceptance Criteria:

- The user interface correctly displays the input field and the filtered list of users.
- The list dynamically updates as the user types in the search field.
- The search is case-insensitive and matches users based on the entered key.
