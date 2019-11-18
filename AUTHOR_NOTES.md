# Author Notes

I purposefully avoided any external libraries, styling, or complex organization to keep in line with the idea that this is the result of an in-person test!
As such, I also did not spend a great deal of time tidying up code, searching for edge cases, or refining too much.

## Follow up section

1. Ideas:
  - Increase usability by showing all properties as column data (ward, division, type) and allow sorting/filtering/searching by any
  - Allow inputs to create a table based on any of the available object properties
  - COMPLEX: Enable a query system by which users could create custom tables (e.g. offices listed by number of votes)
1. Scaling:
  - For large data sets, we would probably need to operate on the data in chunks, meaning that we split the primary array into some optimal number of smaller arrays, perform operations on each of the smaller arrays, and then combine them back when finished (probably requires additional sorting strategies to manage the data slices, as in sharding, of which I am not an expert)
  - Certain operations should probably be handled server side, where operating on the client would not be ideal due to client resource constraints
  - In displaying large data sets, it's usually best to employ some kind of pagination/infinite scrolling strategy so that the client can be efficient about only loading the data it needs to display at any given moment (plus the next screen worth or so, to keep things flowing smoothly from a UX perspective)
  - Pre-sorted, collated, transformed data should also be cached when possible to help with common performance heavy operations. On the client or server, this might be via techniques like memoization (storing pre-calculated data and retrieving closer to object hash speeds) or common data requests kept at separate cdn endpoints
