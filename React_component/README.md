<h1 align="center">React Component Project </h1>

## Project Description
The React Component project involves the implementation and enhancement of various React components. The tasks cover a range of topics including class components, lifecycles, event handling, containment, specialization, Higher Order Components (HOCs), and optimization techniques such as creating pure components.

## Task 0: Commence with Class Components
Objective: Convert the existing functional component App into a React class.
Requirements:
Ensure that the project still passes tests from the previous React Props project.
Reloading the App should display the same page as the last task with no errors or warnings.

## Task 1: Lifecycles
Objective: Add lifecycle methods to the App Class.
Key Steps:
Add a logOut prop to the App Class.
Set up an event listener for key presses (Ctrl + H) to log out and display an alert.
Ensure proper cleanup by removing the event listener when the component is unmounted.
Implement tests to validate the key press event handling.

## Task 2: Handling Events
Objective: Create and handle a new event in the Notifications and NotificationItem components.
Key Steps:
Convert the Notifications and NotificationItem functions into React classes.
Implement a markAsRead function in Notifications to log a message.
Modify NotificationItem to call markAsRead on click with the appropriate ID.
Write tests to validate event handling and function calls.

## Task 3: Reusable Components & Specialization
Objective: Create reusable components for containment and specialization.
Key Components:
BodySection: A component that renders a title and its children.
BodySectionWithMarginBottom: Specialized BodySection with added margin.
Integration:
Use these components in the App to wrap CourseList and Login.
Create a new block with the title "News from the School" using BodySection.

## 4: HOC - WithLogging
Objective: Implement a Higher Order Component (HOC) for logging mount and unmount events.
Implementation:
Create WithLogging HOC that logs component mount and unmount events.
Modify the displayName of the HOC for debugging purposes.
Testing:
Write tests to ensure proper logging for both HTML and component cases.

## Task 5: Pure Components
Objective: Optimize components for performance using pure components.
Implementation:
Declare NotificationItem as a pure component using React.memo.
Implement shouldComponentUpdate in Notifications based on the length of listNotifications.

## Conclusion
The React Component project focuses on building and optimizing components, handling events, and implementing Higher Order Components for enhanced functionality. The tasks cover a wide range of concepts crucial for developing scalable and efficient React applications.
