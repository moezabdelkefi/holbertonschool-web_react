<h1 align="center">React Props Guide</h1>

## Introduction
This guide provides an overview of using React props to pass data from parent to child components. Understanding and utilizing React props is essential for building modular and reusable React applications.

## Table of Contents
What are Props?
Passing Props
Default Props
Prop Types
Examples
Best Practices

## What are Props?
In React, "props" (short for properties) are a mechanism for passing data from a parent component to its child components. Props allow components to communicate and share information, enabling the creation of dynamic and flexible applications.

## Passing Props
Props are passed to a component as attributes in JSX. The child component can then access and use these props as properties of its props object.

### Example:

<img src="https://raw.githubusercontent.com/moezabdelkefi/holbertonschool-web_react/main/assets/113900578/ec014faf-e84b-4934-8754-2f8ced250193.png" alt="code1" width="200"/>


## Default Props
Default props provide a way to set default values for props in case they are not explicitly provided by the parent component.

### Example:

![code2](https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/63f96756-966b-41e8-8c66-d3d8f0b1cd04)

In this example, if the greeting prop is not provided by the parent component, the default value 'Default Greeting' will be used.

## Prop Types
PropTypes are used to specify the data type and requirements for each prop, helping catch potential issues early and providing documentation.

### Example:

![code3](https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/9ac099a7-0fa7-4b24-865a-d3c6270044aa)

In this example, PropTypes.string.isRequired ensures that the greeting prop must be a string and is required.

### Examples

![code4](https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/a1f47a08-ff70-4787-9c59-0a328a6cf42b)


## Default Props

![code5](https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/5b1887c0-867e-45aa-b9e0-1ff435744026)


## Best Practices
### Keep Props Immutable: 
Props should not be modified within a component. React follows a unidirectional data flow, and modifying props directly can lead to unpredictable behavior.

### Document Props: 
Use PropTypes to document and validate the expected types of props. This serves as a form of self-documentation and helps catch errors during development.

### Use Default Props Wisely: 
Set default props for cases where a value is expected but may not be provided. Be mindful of default values to avoid unexpected behavior.
