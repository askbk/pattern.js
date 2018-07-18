# pattern.js
A tiny javascript templating engine

## Use
### Example

HTML code:
```
<div id="template">
    <p>{{paragraphText}}</p>
</div>

```

JavaScript code:
```
let data = [
    {paragraphText : "Lorem ipsum1"},
    {paragraphText : "Lorem ipsum2"},
    {paragraphText : "Lorem ipsum3"},
    {paragraphText : "Lorem ipsum4"}
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
