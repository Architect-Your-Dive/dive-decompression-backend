Dive Decompression & Surface Interval Planner
Table data gathered from the U.S. Navy Diving Manual,
Which can be referenced [here](https://www.divetable.info/workshop/USN_Rev7_Tables.pdf)

deployed api can be accessed [here](https://decompression.herokuapp.com/)

### Tech Stack Used

- Javascript
- NodeJS with ExpressJS framework
- npm
- PostgreSQL

## API Documentation:

### No Decompression Limit:

[GET] /api/no-d - returns an array filled with the maximum bottom time for 
depths falling between a range of minimum and maximum feet of seawater
similar to the following:

```js
[
  {

  }
]
```