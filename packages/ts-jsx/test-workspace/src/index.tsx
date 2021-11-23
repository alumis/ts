import { o } from "@alumis/ts-observables/ModifiableObservable";
import { Component, createNode } from "@alumis/ts-jsx/JSX";


let bool1 = o(true);
let bool2 = o("true");



class TestComponent extends Component<DocumentFragment> {
	render() {
		return (
			<>
				<div>Dette er en test</div>
				<div>Dette er en test2 {bool2}</div>
				<div>Dette er en test3 {bool1}</div>
			</>
		);
	}
}

document.body.appendChild(
	<>
		<div>Hello, world!</div>
		<button type="button" onclick={() => bool1.value = !bool1.peek()}>Value: {bool1}</button>
		{() => bool1.value ? <button type="button" onclick={() => bool2.value = bool2.peek() === "true" ? "false" : "true"}>Value: {bool2}</button> : null}
		<TestFunction />
		<TestComponent />
		<p>Foo</p>
	</>
);

function TestFunction() {
	return <p>Test function {bool2}</p>;
}