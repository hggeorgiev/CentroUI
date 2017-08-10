# Contributing to Centro UI

## Code Style

All code contributed to this project should adhere to a consistent style, so please keep these in mind before you submit your Pull Requests:

- Space indentation, size of 4
- Double quotes
- Use template literals where possible, for example \`${varOne}\`
- Decalre component state at the top of the component, immediately below constructor and any static properties and functions, like this: 
	~~~~
	state = {
		key: value
	}
	~~~~

- Use arrow functions where possible
- Use import instead of require where possible
- async await is a must. It is much easier to read than .then() and .catch()
- Try not to leave trailing commas, for example
	~~~~
	import {
		key: value,
	} from ...
	~~~~

- Desctructure objects where possible, for example 
	~~~~
	const { width, height } = this.props
	const { loading, error } = this.state
	~~~~ 

- Use concise if-else statements where possible
	~~~~
	var winner = score1 > score2 ? score1 : score2
	~~~~ 

- Use OR if you want to use the first existing value out of many, ordered by priority, for example
	~~~~
	const style = userStyle || componentStyle || globalStyle
	~~~~ 
	In the above scenario we check if the user provided a style and if they did we use it. Otherwise we go up the ladder and check if there is a component style defined in the scope. You got the point

- When using a placeholder View, use it like so
	~~~~
	//correct 
	<View />

	// wrong
	<View><View/>
	~~~~ 

- Since React setState method is asynchronous, do NOT use it like this:
	~~~~
	this.setState({ expanded: !this.state.expanded })

	// this.state.expanded might not be what you expect
	// so instead use it like this

	this.setState(prevState => ({ expanded: !prevState.expanded }))
	~~~~

- When using arrow functions with one argument only, don't write braces
	~~~~
	(e) => console.log("Hello")

	//becomes

	e => console.log("Hello")
	~~~~

- Try to extract list children in separate components
- Render element of some condition is true
	~~~~
	{ isTrue && <p>True!</p> }
	~~~~