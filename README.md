jQuery Dropalizer Plugin
========================

This plugin is under development! Fell free to contribute!

(Even with this very bad english written ReadMe!)

## Now you can make your selects fields more beautiful!

[You can see an example here](www.vicioempixels.com/dropalizer)

You just need to use the following structure in your html:

```html
<div class="yourClass">
	<label for="fieldName">Clique to see the options</label>
	<select name="fieldName">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
	</select>
</div>
```

So, you activate the plugin with the command:

```javascript
$(yourClass).dropalizer();
```

And it will transform your not customizable **select** tag into a group of **div** and **ul** wich works like a select and is fully customizable with normal CSS:

```html
<div class="yourClass dropalizer">
	<div class="listContainer">Clique to see the options</div>
	<input type="hidden" name="fieldName">
	<ul style="display: block;" id="fieldNameList">
	  <li data-value="1">Option 1</li>
	  <li data-value="2">Option 2</li>
	  <li data-value="3">Option 3</li>
	</ul>
</div>
```

Enjoy and contribute!
