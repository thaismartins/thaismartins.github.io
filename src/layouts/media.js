const sizes = {
  min: {
    huge: '1440',
    large: '1170',
    medium: '768',
    small: '450',
  },
  max: {
    huge: '1439',
    large: '1169',
    medium: '767',
    small: '449',
  },
}

const media = Object.keys(sizes.min).reduce(
  (acc, label) => {
    acc.min[label] = `(min-width: ${sizes.min[label]}px)`
    acc.max[label] = `(max-width: ${sizes.max[label]}px)`
    return acc
  },
  { min: {}, max: {} }
)

export default media
