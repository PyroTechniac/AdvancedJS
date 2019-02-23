## Classes

<dl>
<dt><a href="#Admap">Admap</a> ⇐ <code>Map</code></dt>
<dd><p>An Advanced Map structure with more utility methods</p>
</dd>
<dt><a href="#Adset">Adset</a> ⇐ <code>Set</code></dt>
<dd><p>An Advanced Set structure with more utility methods</p>
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
</dl>

## Typedefs

<dl>
<dt><a href="#AdsetGetOptions">AdsetGetOptions</a> : <code>Object</code></dt>
<dd><p>Options for an Adset&#39;s <code>get()</code> method</p>
</dd>
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
Exactly the same as [`Map.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) but
returns the Admap instead of undefined

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
Stores the data in the set, while calling the `access()` method. This means that the data should **not** be
sealed
<warn> This writes to a JSON file, and should not be used often, as JSON files are prone to corruption when written
and read from repeatedly</warn>

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Object</code> - The JSON Object that was written to the file  
<a name="Adset+parse"></a>

### adset.parse() ⇒ <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code>
Creates a new Map object containing the type of value(s) as the key, and an object ordering them
by insertion with the key as the number, and the value as an array with the number in the original
set, and the actual value

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code> - The Map mentioned above  
<a name="Adset+access"></a>

### adset.access() ⇒ <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code>
Creates a new [Admap](#Admap) object containing the type of value(s) as the key, and an array of every value
as the value

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
Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) but
returns the old Adset instead of undefined

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The old set, can be discarded if not needed anymore  
<a name="Adset+first"></a>

### adset.first([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the first value(s) in the Adset

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting from
the end if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the beginning |

<a name="Adset+last"></a>

### adset.last([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the last value(s) in the Adset. This relies on [array](#Adset+array)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting from
the beginning if the amount is negative  

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
Exactly the same as [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) but
returns the Adset instead of undefined

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+find"></a>

### adset.find(fn, [thisArg]) ⇒ <code>\*</code>
Searches for a single value where a given function returns truthy, similar to
[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Kind**: instance method of [<code>Adset</code>](#Adset)  
**Returns**: <code>\*</code> - The argument found, undefined if nothing returned truthy  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+filter"></a>

### adset.filter(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
but returns an Adset instead of an Array

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
Exactly the same as [`Map.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach) but
returns the Admap instead of undefined

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
Stores the data in the set, while calling the `access()` method. This means that the data should **not** be
sealed
<warn> This writes to a JSON file, and should not be used often, as JSON files are prone to corruption when written
and read from repeatedly</warn>

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Object</code> - The JSON Object that was written to the file  
<a name="Adset+parse"></a>

### basicset.parse() ⇒ <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code>
Creates a new Map object containing the type of value(s) as the key, and an object ordering them
by insertion with the key as the number, and the value as an array with the number in the original
set, and the actual value

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Admap.&lt;String, Object.&lt;String, Array&gt;&gt;</code> - The Map mentioned above  
<a name="Adset+access"></a>

### basicset.access() ⇒ <code>Admap.&lt;String, Array.&lt;\*&gt;&gt;</code>
Creates a new [Admap](#Admap) object containing the type of value(s) as the key, and an array of every value
as the value

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
Exactly the same as [`Set.clear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear) but
returns the old Adset instead of undefined

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The old set, can be discarded if not needed anymore  
<a name="Adset+first"></a>

### basicset.first([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the first value(s) in the Adset

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting from
the end if the amount is negative  

| Param | Type | Description |
| --- | --- | --- |
| [amount] | <code>number</code> | Amount of values to obtain from the beginning |

<a name="Adset+last"></a>

### basicset.last([amount]) ⇒ <code>\*</code> \| <code>Array.&lt;\*&gt;</code>
Obtains the last value(s) in the Adset. This relies on [array](#Adset+array)

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> \| <code>Array.&lt;\*&gt;</code> - A single value if no amount is provided, or an array of values, starting from
the beginning if the amount is negative  

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
Exactly the same as [`Set.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach) but
returns the Adset instead of undefined

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>Adset.&lt;\*&gt;</code> - The set after the function was ran  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to run |
| [thisArg] | <code>\*</code> | The argument to use as `this` |

<a name="Adset+find"></a>

### basicset.find(fn, [thisArg]) ⇒ <code>\*</code>
Searches for a single value where a given function returns truthy, similar to
[Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

**Kind**: instance method of [<code>Basicset</code>](#Basicset)  
**Returns**: <code>\*</code> - The argument found, undefined if nothing returned truthy  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | The function to execute (should return boolean) |
| [thisArg] | <code>\*</code> | Argument to use as `this` |

<a name="Adset+filter"></a>

### basicset.filter(fn, [thisArg]) ⇒ <code>Adset.&lt;\*&gt;</code>
Exactly the same as [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
but returns an Adset instead of an Array

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

<a name="AdsetGetOptions"></a>

## AdsetGetOptions : <code>Object</code>
Options for an Adset's `get()` method

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  | The value to search for |
| [mode] | <code>String</code> | <code>strict</code> | The mode to search, either `loose (==)` or `strict (===)` |

