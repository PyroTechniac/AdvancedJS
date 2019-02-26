## Classes

<dl>
<dt><a href="#Admap">Admap</a> ⇐ <code>Map</code></dt>
<dd><p>An Advanced Map structure with more utility methods</p>
</dd>
<dt><a href="#Adset">Adset</a> ⇐ <code>Set</code></dt>
<dd><p>An Advanced Set structure with more utility methods</p>
</dd>
<dt><a href="#AdvancedConsole">AdvancedConsole</a> ⇐ <code>Console</code></dt>
<dd><p>An advanced console with more options and colors</p>
</dd>
<dt><a href="#Basicmap">Basicmap</a> ⇐ <code><a href="#Admap">Admap</a></code></dt>
<dd><p>A Basicmap structure with the same utility methods as <a href="#Admap">Admap</a>, but can only have Strings and Numbers as keys</p>
</dd>
<dt><a href="#Basicset">Basicset</a> ⇐ <code><a href="#Adset">Adset</a></code></dt>
<dd><p>A Basicset structure with the same utility methods as <a href="#Adset">Adset</a>, but can only store Strings and Numbers</p>
</dd>
<dt><a href="#CustomError">CustomError</a> ⇐ <code>Error</code></dt>
<dd><p>A custom error, with a providable name to make it unique</p>
</dd>
<dt><a href="#Colors">Colors</a></dt>
<dd><p>A Colors class for use with <a href="#AdvancedConsole">AdvancedConsole</a></p>
</dd>
<dt><a href="#Timestamp">Timestamp</a></dt>
<dd><p>A timestamp class for use with <a href="#AdvancedConsole">AdvancedConsole</a></p>
</dd>
<dt><a href="#Util">Util</a></dt>
<dd><p>A Utility class with several methods</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AdsetGetOptions">AdsetGetOptions</a> : <code>Object</code></dt>
<dd><p>Options for an Adset&#39;s <code>get()</code> method</p>
</dd>
<dt><a href="#ConsoleOptions">ConsoleOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ConsoleColorStyles">ConsoleColorStyles</a> : <code>Object</code></dt>
<dd><p>Time is for the timestamp of the log, message is for the actual output.</p>
</dd>
<dt><a href="#ConsoleColorObjects">ConsoleColorObjects</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ConsoleMessageObject">ConsoleMessageObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ConsoleTimeObject">ConsoleTimeObject</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ConsoleColorTypes">ConsoleColorTypes</a> : <code>Object</code></dt>
<dd><p>All the valid color types.</p>
</dd>
<dt><a href="#ConsoleStyleTypes">ConsoleStyleTypes</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ColorsFormatOptions">ColorsFormatOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TimestampObject">TimestampObject</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Admap"></a>

## Admap ⇐ <code>Map</code>
An Advanced Map structure with more utility methods

**Kind**: global class  
**Extends**: <code>Map</code>  

* [Admap](#Admap) ⇐ <code>Map</code>
    * [new Admap([iterable])](#new_Admap_new)
    * [.keyArray()](#Admap+keyArray) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.array()](#Admap+array) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.seal()](#Admap+seal) ⇒ <code>Admap.&lt;\*, \*&gt;</code>
    * [.break()](#Admap+break) ⇒ <code>Admap.&lt;\*, \*&gt;</code>
    * [.each(fn, [thisArg])](#Admap+each) ⇒ <code>Admap.&lt;\*, \*&gt;</code>

<a name="new_Admap_new"></a>

### new Admap([iterable])
Initializes an Admap


| Param | Type | Description |
| --- | --- | --- |
| [iterable] | <code>Iterable.&lt;\*, \*&gt;</code> | The iterable to initialize the Admap with |

<a name="Admap+keyArray"></a>

### admap.keyArray() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an ordered array of all the keys in this Admap

**Kind**: instance method of [<code>Admap</code>](#Admap)  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array of the keys  
<a name="Admap+array"></a>

### admap.array() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an ordered array of all the values in this Admap

**Kind**: instance method of [<code>Admap</code>](#Admap)  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array of the values  
<a name="Admap+seal"></a>

### admap.seal() ⇒ <code>Admap.&lt;\*, \*&gt;</code>
Seals an Admap, preventing further modification in any way until the [break](#Admap+break) method is called

**Kind**: instance method of [<code>Admap</code>](#Admap)  
**Returns**: <code>Admap.&lt;\*, \*&gt;</code> - The sealed Admap  
<a name="Admap+break"></a>

### admap.break() ⇒ <code>Admap.&lt;\*, \*&gt;</code>
Breaks a seal, allowing the Admap to be modified again, does nothing if the Admap wasn't sealed

**Kind**: instance method of [<code>Admap</code>](#Admap)  
**Returns**: <code>Admap.&lt;\*, \*&gt;</code> - The Admap, after being unsealed  
<a name="Admap+each"></a>

### admap.each(fn, [thisArg]) ⇒ <code>Admap.&lt;\*, \*&gt;</code>
Exactly the same as [`Map.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) butreturns the Admap instead of undefined

**Kind**: instance method of [<code>Admap</code>](#Admap)  
**Returns**: <code>Admap.&lt;\*, \*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset"></a>

## Adset ⇐ <code>Set</code>
An Advanced Set structure with more utility methods

**Kind**: global class  
**Extends**: <code>Set</code>  

* [Adset](#Adset) ⇐ <code>Set</code>
    * [new Adset([iterator])](#new_Adset_new)
    * [.store()](#Adset+store) ⇒ <code>Object</code>
    * [.parse()](#Adset+parse) ⇒ <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code>
    * [.access()](#Adset+access) ⇒ <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code>
    * [.array()](#Adset+array) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.arrays()](#Adset+arrays) ⇒ <code>Adset.&lt;Array&gt;</code>
    * [.clear()](#Adset+clear) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.first([amount])](#Adset+first) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.last([amount])](#Adset+last) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.concat(...Adsets)](#Adset+concat) ⇒ [<code>Adset</code>](#Adset)
    * [.strings()](#Adset+strings) ⇒ <code>Adset.&lt;String&gt;</code>
    * [.objects()](#Adset+objects) ⇒ <code>Adset.&lt;Object&gt;</code>
    * [.numbers()](#Adset+numbers) ⇒ <code>Adset.&lt;Number&gt;</code>
    * [.each(fn, [thisArg])](#Adset+each) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.find(fn, [thisArg])](#Adset+find) ⇒ <code>\*</code>
    * [.filter(fn, [thisArg])](#Adset+filter) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.map(fn, [thisArg])](#Adset+map) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.clone()](#Adset+clone) ⇒ [<code>Adset</code>](#Adset)
    * [.random([amount])](#Adset+random) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.get(options)](#Adset+get) ⇒ <code>\*</code>
    * [.seal()](#Adset+seal) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.break()](#Adset+break) ⇒ <code>Adset.&lt;\*&gt;</code>

<a name="new_Adset_new"></a>

### new Adset([iterator])
Initializes a new Adset


| Param | Type | Description |
| --- | --- | --- |
| [iterator] | <code>Iterator</code> | Any type of iterator |

<a name="Adset+store"></a>

### adset.store() ⇒ <code>Object</code>
Stores the data in the set, while calling the `access()` method. This means that the data should **not** besealed<warn> This writes to a JSON file, and should not be used often, as JSON files are prone to corruption when writtenand read from repeatedly</warn>

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Object</code> - The JSON Object that was written to the file  
<a name="Adset+parse"></a>

### adset.parse() ⇒ <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code>
Creates a new Map object containing the type of value(s) as the key, and an object ordering themby insertion with the key as the number, and the value as an array with the number in the originalset, and the actual value

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code> - The Map mentioned above  
<a name="Adset+access"></a>

### adset.access() ⇒ <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code>
Creates a new [Admap](#Admap) object containing the type of value(s) as the key, and an array of every valueas the value

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code> - A map with the typeof value as the key, and an array of values as the value  
<a name="Adset+array"></a>

### adset.array() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an ordered array of all the values in this Adset

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array of the values  
<a name="Adset+arrays"></a>

### adset.arrays() ⇒ <code>Adset.&lt;Array&gt;</code>
Retrieves all the arrays in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;Array&gt;</code> - All the arrays that are in the Adset  
<a name="Adset+clear"></a>

### adset.clear() ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) butreturns the old Adset instead of undefined

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The old set, can be discarded if not needed anymore  
<a name="Adset+first"></a>

### adset.first([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the first value(s) in the Adset

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting fromthe end if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the beginning |

<a name="Adset+last"></a>

### adset.last([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the last value(s) in the Adset. This relies on [array](#Adset+array)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting fromthe beginning if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the end |

<a name="Adset+concat"></a>

### adset.concat(...Adsets) ⇒ [<code>Adset</code>](#Adset)
Combines this Adset with others into a new Set. None of the Adsets are modified

**Kind**: instance method of [<code>Adset</code>](#Adset)  

| Param | Type | Description |
| --- | --- | --- |
| ...Adsets | [<code>Adset</code>](#Adset) | Adsets to merge |

**Example**  
```js
const newSet = someSet.concat(someOtherSet, anotherSet, ohBoyASet);
```
<a name="Adset+strings"></a>

### adset.strings() ⇒ <code>Adset.&lt;String&gt;</code>
Retrieves all the strings in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;String&gt;</code> - All the strings that are in the Adset  
<a name="Adset+objects"></a>

### adset.objects() ⇒ <code>Adset.&lt;Object&gt;</code>
Retrieves all the objects in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;Object&gt;</code> - All the objects that are in the Adset  
<a name="Adset+numbers"></a>

### adset.numbers() ⇒ <code>Adset.&lt;Number&gt;</code>
Retrieves all the numbers in the set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;Number&gt;</code> - All the numbers that are in the Adset  
<a name="Adset+each"></a>

### adset.each(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) butreturns the Adset instead of undefined

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+find"></a>

### adset.find(fn, [thisArg]) ⇒ <code>\*</code>
Searches for a single value where a given function returns truthy, similar to[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> - The argument found, undefined if nothing returned truthy  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+filter"></a>

### adset.filter(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)but returns an Adset instead of an Array

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset after the filter was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+map"></a>

### adset.map(fn, [thisArg]) ⇒ <code>Array.&lt;\*&gt;</code>
Exactly the same as [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Array.&lt;\*&gt;</code> - The array after mapping  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function that produces an element of the new array, taking two arguments |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+clone"></a>

### adset.clone() ⇒ [<code>Adset</code>](#Adset)
Creates an identical copy of the Set

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Example**  
```js
const newSet = oldSet.clone();
```
<a name="Adset+random"></a>

### adset.random([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains unique random value(s) from the Adset, this relies on [array](#Adset+array)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided or an array of values  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to randomly obtain |

<a name="Adset+get"></a>

### adset.get(options) ⇒ <code>\*</code>
Gets a value from the set, can be loose `==` or strict `===`

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> - The found value  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>GetOptions</code> | The options to use for `get()` |

<a name="Adset+seal"></a>

### adset.seal() ⇒ <code>Adset.&lt;\*&gt;</code>
Seals an Adset, preventing further modification in any way until unsealed with the [break](#Adset+break) method

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset, after being sealed  
<a name="Adset+break"></a>

### adset.break() ⇒ <code>Adset.&lt;\*&gt;</code>
Breaks a seal, allowing the Adset to be modified again, does nothing if the Adset wasn't sealed

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset, after being unsealed  
<a name="AdvancedConsole"></a>

## AdvancedConsole ⇐ <code>Console</code>
An advanced console with more options and colors

**Kind**: global class  
**Extends**: <code>Console</code>  

* [AdvancedConsole](#AdvancedConsole) ⇐ <code>Console</code>
    * [new AdvancedConsole([options])](#new_AdvancedConsole_new)
    * [.stdout](#AdvancedConsole+stdout) : <code>NodeJS.WritableStream</code>
    * [.stderr](#AdvancedConsole+stderr) : <code>NodeJS.WritableStream</code>
    * [.template](#AdvancedConsole+template) : [<code>Timestamp</code>](#Timestamp)
    * [.colors](#AdvancedConsole+colors) : <code>object</code>
    * [.utc](#AdvancedConsole+utc) : <code>boolean</code>

<a name="new_AdvancedConsole_new"></a>

### new AdvancedConsole([options])
Constructs a new AdvancedConsole


| Param | Type | Description |
| --- | --- | --- |
| [options] | [<code>ConsoleOptions</code>](#ConsoleOptions) | Options for the AdvancedConsole |

<a name="AdvancedConsole+stdout"></a>

### advancedConsole.stdout : <code>NodeJS.WritableStream</code>
The standard output stream for this console, defaults to process.stderr

**Kind**: instance property of [<code>AdvancedConsole</code>](#AdvancedConsole)  
**Read only**: true  
<a name="AdvancedConsole+stderr"></a>

### advancedConsole.stderr : <code>NodeJS.WritableStream</code>
The standard error output stream for this console, defaults to process.stderr

**Kind**: instance property of [<code>AdvancedConsole</code>](#AdvancedConsole)  
**Read only**: true  
<a name="AdvancedConsole+template"></a>

### advancedConsole.template : [<code>Timestamp</code>](#Timestamp)
Whether or not to enable timestamps

**Kind**: instance property of [<code>AdvancedConsole</code>](#AdvancedConsole)  
<a name="AdvancedConsole+colors"></a>

### advancedConsole.colors : <code>object</code>
The colors for this console

**Kind**: instance property of [<code>AdvancedConsole</code>](#AdvancedConsole)  
<a name="AdvancedConsole+utc"></a>

### advancedConsole.utc : <code>boolean</code>
Whether the timestamp is in utc or nor

**Kind**: instance property of [<code>AdvancedConsole</code>](#AdvancedConsole)  
<a name="Basicmap"></a>

## Basicmap ⇐ [<code>Admap</code>](#Admap)
A Basicmap structure with the same utility methods as [Admap](#Admap), but can only have Strings and Numbers as keys

**Kind**: global class  
**Extends**: [<code>Admap</code>](#Admap)  

* [Basicmap](#Basicmap) ⇐ [<code>Admap</code>](#Admap)
    * [.keyArray()](#Admap+keyArray) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.array()](#Admap+array) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.seal()](#Admap+seal) ⇒ <code>Admap.&lt;\*, \*&gt;</code>
    * [.break()](#Admap+break) ⇒ <code>Admap.&lt;\*, \*&gt;</code>
    * [.each(fn, [thisArg])](#Admap+each) ⇒ <code>Admap.&lt;\*, \*&gt;</code>

<a name="Admap+keyArray"></a>

### basicmap.keyArray() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an ordered array of all the keys in this Admap

**Kind**: instance method of [<code>Basicmap</code>](#Basicmap)  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array of the keys  
<a name="Admap+array"></a>

### basicmap.array() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an ordered array of all the values in this Admap

**Kind**: instance method of [<code>Basicmap</code>](#Basicmap)  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array of the values  
<a name="Admap+seal"></a>

### basicmap.seal() ⇒ <code>Admap.&lt;\*, \*&gt;</code>
Seals an Admap, preventing further modification in any way until the [break](#Admap+break) method is called

**Kind**: instance method of [<code>Basicmap</code>](#Basicmap)  
**Returns**: <code>Admap.&lt;\*, \*&gt;</code> - The sealed Admap  
<a name="Admap+break"></a>

### basicmap.break() ⇒ <code>Admap.&lt;\*, \*&gt;</code>
Breaks a seal, allowing the Admap to be modified again, does nothing if the Admap wasn't sealed

**Kind**: instance method of [<code>Basicmap</code>](#Basicmap)  
**Returns**: <code>Admap.&lt;\*, \*&gt;</code> - The Admap, after being unsealed  
<a name="Admap+each"></a>

### basicmap.each(fn, [thisArg]) ⇒ <code>Admap.&lt;\*, \*&gt;</code>
Exactly the same as [`Map.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) butreturns the Admap instead of undefined

**Kind**: instance method of [<code>Basicmap</code>](#Basicmap)  
**Returns**: <code>Admap.&lt;\*, \*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Basicset"></a>

## Basicset ⇐ [<code>Adset</code>](#Adset)
A Basicset structure with the same utility methods as [Adset](#Adset), but can only store Strings and Numbers

**Kind**: global class  
**Extends**: [<code>Adset</code>](#Adset)  

* [Basicset](#Basicset) ⇐ [<code>Adset</code>](#Adset)
    * [.store()](#Adset+store) ⇒ <code>Object</code>
    * [.parse()](#Adset+parse) ⇒ <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code>
    * [.access()](#Adset+access) ⇒ <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code>
    * [.array()](#Adset+array) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.arrays()](#Adset+arrays) ⇒ <code>Adset.&lt;Array&gt;</code>
    * [.clear()](#Adset+clear) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.first([amount])](#Adset+first) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.last([amount])](#Adset+last) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.concat(...Adsets)](#Adset+concat) ⇒ [<code>Adset</code>](#Adset)
    * [.strings()](#Adset+strings) ⇒ <code>Adset.&lt;String&gt;</code>
    * [.objects()](#Adset+objects) ⇒ <code>Adset.&lt;Object&gt;</code>
    * [.numbers()](#Adset+numbers) ⇒ <code>Adset.&lt;Number&gt;</code>
    * [.each(fn, [thisArg])](#Adset+each) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.find(fn, [thisArg])](#Adset+find) ⇒ <code>\*</code>
    * [.filter(fn, [thisArg])](#Adset+filter) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.map(fn, [thisArg])](#Adset+map) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.clone()](#Adset+clone) ⇒ [<code>Adset</code>](#Adset)
    * [.random([amount])](#Adset+random) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
    * [.get(options)](#Adset+get) ⇒ <code>\*</code>
    * [.seal()](#Adset+seal) ⇒ <code>Adset.&lt;\*&gt;</code>
    * [.break()](#Adset+break) ⇒ <code>Adset.&lt;\*&gt;</code>

<a name="Adset+store"></a>

### basicset.store() ⇒ <code>Object</code>
Stores the data in the set, while calling the `access()` method. This means that the data should **not** besealed<warn> This writes to a JSON file, and should not be used often, as JSON files are prone to corruption when writtenand read from repeatedly</warn>

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Object</code> - The JSON Object that was written to the file  
<a name="Adset+parse"></a>

### basicset.parse() ⇒ <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code>
Creates a new Map object containing the type of value(s) as the key, and an object ordering themby insertion with the key as the number, and the value as an array with the number in the originalset, and the actual value

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code> - The Map mentioned above  
<a name="Adset+access"></a>

### basicset.access() ⇒ <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code>
Creates a new [Admap](#Admap) object containing the type of value(s) as the key, and an array of every valueas the value

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code> - A map with the typeof value as the key, and an array of values as the value  
<a name="Adset+array"></a>

### basicset.array() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an ordered array of all the values in this Adset

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Array.&lt;\*&gt;</code> - An array of the values  
<a name="Adset+arrays"></a>

### basicset.arrays() ⇒ <code>Adset.&lt;Array&gt;</code>
Retrieves all the arrays in the set

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;Array&gt;</code> - All the arrays that are in the Adset  
<a name="Adset+clear"></a>

### basicset.clear() ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) butreturns the old Adset instead of undefined

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The old set, can be discarded if not needed anymore  
<a name="Adset+first"></a>

### basicset.first([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the first value(s) in the Adset

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting fromthe end if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the beginning |

<a name="Adset+last"></a>

### basicset.last([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the last value(s) in the Adset. This relies on [array](#Adset+array)

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting fromthe beginning if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the end |

<a name="Adset+concat"></a>

### basicset.concat(...Adsets) ⇒ [<code>Adset</code>](#Adset)
Combines this Adset with others into a new Set. None of the Adsets are modified

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  

| Param | Type | Description |
| --- | --- | --- |
| ...Adsets | [<code>Adset</code>](#Adset) | Adsets to merge |

**Example**  
```js
const newSet = someSet.concat(someOtherSet, anotherSet, ohBoyASet);
```
<a name="Adset+strings"></a>

### basicset.strings() ⇒ <code>Adset.&lt;String&gt;</code>
Retrieves all the strings in the set

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;String&gt;</code> - All the strings that are in the Adset  
<a name="Adset+objects"></a>

### basicset.objects() ⇒ <code>Adset.&lt;Object&gt;</code>
Retrieves all the objects in the set

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;Object&gt;</code> - All the objects that are in the Adset  
<a name="Adset+numbers"></a>

### basicset.numbers() ⇒ <code>Adset.&lt;Number&gt;</code>
Retrieves all the numbers in the set

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;Number&gt;</code> - All the numbers that are in the Adset  
<a name="Adset+each"></a>

### basicset.each(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) butreturns the Adset instead of undefined

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+find"></a>

### basicset.find(fn, [thisArg]) ⇒ <code>\*</code>
Searches for a single value where a given function returns truthy, similar to[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> - The argument found, undefined if nothing returned truthy  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+filter"></a>

### basicset.filter(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)but returns an Adset instead of an Array

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset after the filter was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+map"></a>

### basicset.map(fn, [thisArg]) ⇒ <code>Array.&lt;\*&gt;</code>
Exactly the same as [`Array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Array.&lt;\*&gt;</code> - The array after mapping  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function that produces an element of the new array, taking two arguments |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+clone"></a>

### basicset.clone() ⇒ [<code>Adset</code>](#Adset)
Creates an identical copy of the Set

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Example**  
```js
const newSet = oldSet.clone();
```
<a name="Adset+random"></a>

### basicset.random([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains unique random value(s) from the Adset, this relies on [array](#Adset+array)

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided or an array of values  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to randomly obtain |

<a name="Adset+get"></a>

### basicset.get(options) ⇒ <code>\*</code>
Gets a value from the set, can be loose `==` or strict `===`

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> - The found value  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>GetOptions</code> | The options to use for `get()` |

<a name="Adset+seal"></a>

### basicset.seal() ⇒ <code>Adset.&lt;\*&gt;</code>
Seals an Adset, preventing further modification in any way until unsealed with the [break](#Adset+break) method

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset, after being sealed  
<a name="Adset+break"></a>

### basicset.break() ⇒ <code>Adset.&lt;\*&gt;</code>
Breaks a seal, allowing the Adset to be modified again, does nothing if the Adset wasn't sealed

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The Adset, after being unsealed  
<a name="CustomError"></a>

## CustomError ⇐ <code>Error</code>
A custom error, with a providable name to make it unique

**Kind**: global class  
**Extends**: <code>Error</code>  
<a name="new_CustomError_new"></a>

### new CustomError(message, [name])
Creates a new Error, usually to be used with [`throw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>String</code> |  | The Error Message |
| [name] | <code>String</code> | <code>AdvancedJSError</code> | The name of the error, defaults to `AdvancedJSError` |

<a name="Colors"></a>

## Colors
A Colors class for use with [AdvancedConsole](#AdvancedConsole)

**Kind**: global class  

* [Colors](#Colors)
    * [new Colors([options])](#new_Colors_new)
    * [.opening](#Colors+opening) : <code>string</code>
    * [.closing](#Colors+closing) : <code>string</code>
    * [.format(string)](#Colors+format) ⇒ <code>string</code>

<a name="new_Colors_new"></a>

### new Colors([options])
Creates a color instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>ColorFormatOptions</code> | <code>{}</code> | The options for this format |

<a name="Colors+opening"></a>

### colors.opening : <code>string</code>
The opening tags

**Kind**: instance property of [<code>Colors</code>](#Colors)  
<a name="Colors+closing"></a>

### colors.closing : <code>string</code>
The closing tags

**Kind**: instance property of [<code>Colors</code>](#Colors)  
<a name="Colors+format"></a>

### colors.format(string) ⇒ <code>string</code>
Formats a string

**Kind**: instance method of [<code>Colors</code>](#Colors)  

| Param | Type | Description |
| --- | --- | --- |
| string | <code>string</code> | String to format |

<a name="Timestamp"></a>

## Timestamp
A timestamp class for use with [AdvancedConsole](#AdvancedConsole)

**Kind**: global class  

* [Timestamp](#Timestamp)
    * [new Timestamp(pattern)](#new_Timestamp_new)
    * _instance_
        * [.pattern](#Timestamp+pattern) : <code>string</code>
        * [._template](#Timestamp+_template) : [<code>Array.&lt;TimestampObject&gt;</code>](#TimestampObject)
        * [.display([time])](#Timestamp+display) ⇒ <code>string</code>
        * [.displayUTC([time])](#Timestamp+displayUTC) ⇒ <code>string</code>
        * [.edit(pattern)](#Timestamp+edit) ⇒ <code>this</code>
        * [.toString()](#Timestamp+toString) ⇒ <code>string</code>
    * _static_
        * [.displayArbitrary(pattern, [time])](#Timestamp.displayArbitrary) ⇒ <code>string</code>
        * [.utc([time])](#Timestamp.utc) ⇒ <code>Date</code>

<a name="new_Timestamp_new"></a>

### new Timestamp(pattern)
Starts a new Timestamp and parses the pattern


| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> | The pattern to parse |

<a name="Timestamp+pattern"></a>

### timestamp.pattern : <code>string</code>
**Kind**: instance property of [<code>Timestamp</code>](#Timestamp)  
<a name="Timestamp+_template"></a>

### timestamp.\_template : [<code>Array.&lt;TimestampObject&gt;</code>](#TimestampObject)
**Kind**: instance property of [<code>Timestamp</code>](#Timestamp)  
<a name="Timestamp+display"></a>

### timestamp.display([time]) ⇒ <code>string</code>
Display the current date with the current pattern

**Kind**: instance method of [<code>Timestamp</code>](#Timestamp)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [time] | <code>Date</code> \| <code>number</code> \| <code>string</code> | <code>new Date()</code> | The time to display |

<a name="Timestamp+displayUTC"></a>

### timestamp.displayUTC([time]) ⇒ <code>string</code>
Display the current date utc with the current pattern

**Kind**: instance method of [<code>Timestamp</code>](#Timestamp)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [time] | <code>Date</code> \| <code>number</code> \| <code>string</code> | <code>new Date()</code> | The time to display in utc |

<a name="Timestamp+edit"></a>

### timestamp.edit(pattern) ⇒ <code>this</code>
Edits the current pattern

**Kind**: instance method of [<code>Timestamp</code>](#Timestamp)  
**Chainable**  

| Param | Type | Description |
| --- | --- | --- |
| pattern | <code>string</code> | The new pattern for this instance |

<a name="Timestamp+toString"></a>

### timestamp.toString() ⇒ <code>string</code>
Defines the toString behavior of Timestamp.

**Kind**: instance method of [<code>Timestamp</code>](#Timestamp)  
<a name="Timestamp.displayArbitrary"></a>

### Timestamp.displayArbitrary(pattern, [time]) ⇒ <code>string</code>
Display the current date with the current pattern

**Kind**: static method of [<code>Timestamp</code>](#Timestamp)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| pattern | <code>string</code> |  | The pattern to parse |
| [time] | <code>Date</code> \| <code>number</code> \| <code>string</code> | <code>new Date()</code> | The time to display |

<a name="Timestamp.utc"></a>

### Timestamp.utc([time]) ⇒ <code>Date</code>
Creates a UTC Date object

**Kind**: static method of [<code>Timestamp</code>](#Timestamp)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [time] | <code>Date</code> \| <code>number</code> \| <code>string</code> | <code>new Date()</code> | The date to convert to utc |

<a name="Util"></a>

## Util
A Utility class with several methods

**Kind**: global class  

* [Util](#Util)
    * [.isFunc(input)](#Util.isFunc) ⇒ <code>Boolean</code>
    * [.isClass(input)](#Util.isClass) ⇒ <code>Boolean</code>
    * [.isObject(input)](#Util.isObject) ⇒ <code>Boolean</code>
    * [.deepClone(source)](#Util.deepClone) ⇒ <code>\*</code>
    * [.sleep(delay, [args])](#Util.sleep) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.exec(command, [options])](#Util.exec) ⇒ <code>Promise.&lt;{stdout: string, stderr: string}&gt;</code>

<a name="Util.isFunc"></a>

### Util.isFunc(input) ⇒ <code>Boolean</code>
Checks if the provided input is a Function

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the input was a function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>function</code> | The function to verify |

<a name="Util.isClass"></a>

### Util.isClass(input) ⇒ <code>Boolean</code>
Checks if the provided input is a class

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the input was a class  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>function</code> | The class to verify |

<a name="Util.isObject"></a>

### Util.isObject(input) ⇒ <code>Boolean</code>
Checks if the provided input is an object

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Boolean</code> - Whether the input was an object  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | The Object to verify |

<a name="Util.deepClone"></a>

### Util.deepClone(source) ⇒ <code>\*</code>
Deep clone a value

**Kind**: static method of [<code>Util</code>](#Util)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>\*</code> | The object to clone |

<a name="Util.sleep"></a>

### Util.sleep(delay, [args]) ⇒ <code>Promise.&lt;\*&gt;</code>
Promisified version of [setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout) to be used with await

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Promise.&lt;\*&gt;</code> - The args value passed in  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>Number</code> | The amount of time in ms to delay |
| [args] | <code>\*</code> | Any args to pass to the .then (mostly pointless in this form) |

<a name="Util.exec"></a>

### Util.exec(command, [options]) ⇒ <code>Promise.&lt;{stdout: string, stderr: string}&gt;</code>
Promisified version of exec to be used with await

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Promise.&lt;{stdout: string, stderr: string}&gt;</code> - The promise  

| Param | Type | Description |
| --- | --- | --- |
| command | <code>String</code> | The command to run |
| [options] | <code>external:ExecOptions</code> | The options to pass to exec |

<a name="AdsetGetOptions"></a>

## AdsetGetOptions : <code>Object</code>
Options for an Adset's `get()` method

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to search for |
| [mode] | <code>String</code> | <code>strict</code> | The mode to search, either `loose (==)` or `strict (===)` |

<a name="ConsoleOptions"></a>

## ConsoleOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [colors] | [<code>ConsoleColorStyles</code>](#ConsoleColorStyles) | The console color styles |
| [stdout] | <code>NodeJS.WritableStream</code> | The WritableStream for the output logs |
| [stderr] | <code>NodeJS.WritableStream</code> | The WritableStream for the error logs |
| [timestamps] | <code>boolean</code> \| <code>string</code> | If false, it won't use timestamps. Otherwise it will use 'YYYY-MM-DD HH:mm:ss' if true or custom if string is given |
| [useColor] | <code>boolean</code> | Whether the timestamps should use colours |
| [utc] | <code>boolean</code> | If the timestamps should be in utc |

<a name="ConsoleColorStyles"></a>

## ConsoleColorStyles : <code>Object</code>
Time is for the timestamp of the log, message is for the actual output.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| debug | [<code>ConsoleColorObjects</code>](#ConsoleColorObjects) | An object containing a message and time color object |
| error | [<code>ConsoleColorObjects</code>](#ConsoleColorObjects) | An object containing a message and time color object |
| log | [<code>ConsoleColorObjects</code>](#ConsoleColorObjects) | An object containing a message and time color object |
| verbose | [<code>ConsoleColorObjects</code>](#ConsoleColorObjects) | An object containing a message and time color object |
| warn | [<code>ConsoleColorObjects</code>](#ConsoleColorObjects) | An object containing a message and time color object |
| wtf | [<code>ConsoleColorObjects</code>](#ConsoleColorObjects) | An object containing a message and time Color Object |

<a name="ConsoleColorObjects"></a>

## ConsoleColorObjects : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [type] | <code>string</code> | <code>&quot;&#x27;log&#x27;&quot;</code> | The method from Console this color object should call |
| message | [<code>ConsoleMessageObject</code>](#ConsoleMessageObject) |  | A message object containing colors and styles |
| time | [<code>ConsoleTimeObject</code>](#ConsoleTimeObject) |  | A time object containing colors and styles |

<a name="ConsoleMessageObject"></a>

## ConsoleMessageObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| background | [<code>ConsoleColorTypes</code>](#ConsoleColorTypes) | The background color. Can be a basic string like "red", a hex string, or a RGB array |
| text | [<code>ConsoleColorTypes</code>](#ConsoleColorTypes) | The text color. Can be a basic string like "red", a hex string, or a RGB array |
| style | [<code>ConsoleStyleTypes</code>](#ConsoleStyleTypes) | A style string from ConsoleStyleTypes |

<a name="ConsoleTimeObject"></a>

## ConsoleTimeObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| background | [<code>ConsoleColorTypes</code>](#ConsoleColorTypes) | The background color. Can be a basic string like "red", a hex string, or a RGB array |
| text | [<code>ConsoleColorTypes</code>](#ConsoleColorTypes) | The text color. Can be a basic string like "red", a hex string, a RGB array, or HSL array |
| style | [<code>ConsoleStyleTypes</code>](#ConsoleStyleTypes) | A style string from ConsoleStyleTypes |

<a name="ConsoleColorTypes"></a>

## ConsoleColorTypes : <code>Object</code>
All the valid color types.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| black | <code>string</code> | The black colour |
| red | <code>string</code> | The red colour |
| green | <code>string</code> | The green colour |
| yellow | <code>string</code> | The yellow colour |
| blue | <code>string</code> | The blue colour |
| magenta | <code>string</code> | The magenta colour |
| cyan | <code>string</code> | The cyan colour |
| gray | <code>string</code> | The gray colour |
| grey | <code>string</code> | The grey colour (alias for gray) |
| lightgray | <code>string</code> | The light gray colour |
| lightgrey | <code>string</code> | The light grey colour (alias for light gray) |
| lightred | <code>string</code> | The light red colour |
| lightgreen | <code>string</code> | The light green colour |
| lightyellow | <code>string</code> | The light yellow colour |
| lightblue | <code>string</code> | The light blue colour |
| lightmagenta | <code>string</code> | The light magenta colour |
| lightcyan | <code>string</code> | The light cyan colour |
| white | <code>string</code> | The white colour |

<a name="ConsoleStyleTypes"></a>

## ConsoleStyleTypes : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| normal | <code>string</code> | Default style |
| bold | <code>string</code> | Bold style. May appear with a lighter colour in many terminals |
| dim | <code>string</code> | Dim style |
| italic | <code>string</code> | Italic style |
| underline | <code>string</code> | Underline style |
| inverse | <code>string</code> | Inverse colours style |
| hidden | <code>string</code> | Hidden text style |
| strikethrough | <code>string</code> | Strikethrough text style |

<a name="ColorsFormatOptions"></a>

## ColorsFormatOptions : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [style] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The style or styles to apply |
| [background] | <code>string</code> | The format for the background |
| [text] | <code>string</code> | The format for the text |

<a name="TimestampObject"></a>

## TimestampObject : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | The type of the current variable |
| [content] | <code>string</code> | The content of the type. Only accessible if the type is 'literal' |

