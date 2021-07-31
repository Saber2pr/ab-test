# @saber2pr/ab-test

ab test in browser.

## Usage

```ts
import ABTest from '@saber2pr/ab-test'

const test = new ABTest()

// by custom id, like session-id、jwt-token
test.getAB('your id') // 'A' | 'B'

// by fingerprint
test.getVisitorAB() // Promise<'A' | 'B'>
```

## Reference

1. google/google-analytics
2. fingerprintjs/[fingerprintjs](https://github.com/fingerprintjs/fingerprintjs)
3. tcollinsworth/[ab-test-selector](https://github.com/tcollinsworth/ab-test-selector)
