# React Native Select Input



### Installation

Installation can be done through `npm` or `yarn`:

```bash
npm install lmksystems-input --save
# or
yarn add lmksystems-input
```
### Usage

Import the `SelectInput` and wrap you content inside of it.

```js
import React from 'react'
import { View } from 'react-native'
import SelectInput from 'lmksystems-input'

class Component extends React.Component {
  render() {
    const options = [{ value: 0, label: '0' }]

    return (
      <View>
        <SelectInput value={0} options={options} />
      </View>
    )
  }
}
```
# install dependencies with
npm install
# or
yarn install

# run the project with
react-native run-ios
# or
react-native run-android
```

## License

[MIT.](https://github.com/markuswind/react-native-select-input-ios/blob/master/LICENSE)
