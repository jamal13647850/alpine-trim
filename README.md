

## Instal:

```
npm i alpine-trim
```


## Usage:

```
import alpinetrim from 'alpine-trim'
Alpine.plugin(alpinetrim)
```

```
<div x-data="{ txt: '<p>look at the picture <strong>and follow</strong> the model</p>' }">
		<div  x-html="txt" x-trim.count.50 ></div>
</div>
```