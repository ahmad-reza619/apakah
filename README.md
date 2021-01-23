<img src="https://www.seekpng.com/png/detail/218-2188461_thinking-meme-png-thinking-meme-with-cup.png" alt="Thinking Meme Png - Thinking Meme With Cup@seekpng.com">

# apakah

Type check your variables

### Installation
`npm install apakah`

### Documentation

1. apakah.string

Check if type is string

```js
console.log(apakah.string('123')) // true
```

2. apakah.num

Check if type is number

```js
console.log(apakah.num(321)) // true
```

3. apakah.bool

Check if type is boolean

```js
console.log(apakah.bool(false)) // true
```

4. apakah.func

Check if type is function

```js
function hello() {
   return 'world';
}
console.log(apakah.func(hello)) // true
```

5. apakah.obj

Check if type is object

```js
const schema = {
   hello: apakah.string,
}

const match = obj(schema);

console.log(match({
  hello: 'world',
})) // true
```
