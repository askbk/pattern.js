# pattern.js
A tiny javascript templating engine

## Use
### Example

HTML code:
```
<div id="template">
    <p>{{paraGraphText}}</p>
</div>

```

JavaScript code:
```
let data = [
    {paraGraphText : "Lorem ipsum1"},
    {paraGraphText : "Lorem ipsum2"},
    {paraGraphText : "Lorem ipsum3"},
    {paraGraphText : "Lorem ipsum4"}
];

let template = document.getElementById("template");
template.innerHTML = Pattern.render(template.innerHTML, data);
```

Resulting HTML code:

```
<div id="template">
    <p>Lorem ipsum1</p>
    <p>Lorem ipsum2</p>
    <p>Lorem ipsum3</p>
    <p>Lorem ipsum4</p>
</div>
```
