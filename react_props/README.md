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

<img src="https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/b3afbb1c-de43-44ab-b507-64112cfd77c0" width=50% align="center">


## Default Props
Default props provide a way to set default values for props in case they are not explicitly provided by the parent component.

### Example:

<img src="https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/63f96756-966b-41e8-8c66-d3d8f0b1cd04" width=50% align="center">

In this example, if the greeting prop is not provided by the parent component, the default value 'Default Greeting' will be used.

## Prop Types
PropTypes are used to specify the data type and requirements for each prop, helping catch potential issues early and providing documentation.

### Example:

<img src="https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/9ac099a7-0fa7-4b24-865a-d3c6270044aa" width=50% align="center">

In this example, PropTypes.string.isRequired ensures that the greeting prop must be a string and is required.

### Examples

<img src="https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/a1f47a08-ff70-4787-9c59-0a328a6cf42b" width=50% align="center">


## Default Props

<img src="https://github.com/moezabdelkefi/holbertonschool-web_react/assets/113900578/5b1887c0-867e-45aa-b9e0-1ff435744026" width=50% align="center">


## Best Practices
### Keep Props Immutable: 
Props should not be modified within a component. React follows a unidirectional data flow, and modifying props directly can lead to unpredictable behavior.

### Document Props: 
Use PropTypes to document and validate the expected types of props. This serves as a form of self-documentation and helps catch errors during development.

### Use Default Props Wisely: 
Set default props for cases where a value is expected but may not be provided. Be mindful of default values to avoid unexpected behavior.
