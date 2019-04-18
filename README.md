# useNumberField
React hook for normalising the input type="number" across browsers. This is useful for Safari where you can input whatever charachters in a type="number" input.

# What it does
The hook returns a ref that you have to pass to the input component. It will leverage the onkeypress DOM event and based on the pressed key the event in canceled or not, preserving this way only charachters suited for the number filed.

If you already have a ref for your input, pass that ref to the hook, and it will be used to attach the event to that ref instead of a new one.

# What it doesn't do
This hook doesn't validate the input! It's your job to ensure the validity of the value in the input. This hook is just limiting the charachters for the input.

# Improvements
[] The regex `[-+,e\\.\\s\\d]+` that does the charachter filtering can be more precise.

# Contributing
Pull Requests are more than welcome!
