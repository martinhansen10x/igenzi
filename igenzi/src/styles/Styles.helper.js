import { PixelRatio } from 'react-native'
import { Metrics } from '.'

const pixelRatio = PixelRatio.get()

const scaleSize = (size = 0) => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (Metrics.screenWidth < 360) {
      return size * 0.95
    }
    // iphone 5
    if (Metrics.screenHeight < 667) {
      return size
      // iphone 6-6s
    } else if (Metrics.screenHeight >= 667 && Metrics.screenHeight <= 735) {
      return size * 1.15
    }
    // older phablets
    return size * 1.25
  } else if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (Metrics.screenWidth <= 360) {
      return size
    }
    // Catch other weird android width sizings
    if (Metrics.screenHeight < 667) {
      return size * 1.15
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (Metrics.screenHeight >= 667 && Metrics.screenHeight <= 735) {
      return size * 1.2
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27
  } else if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (Metrics.screenWidth <= 360) {
      return size
      // Catch other smaller android height sizings
    }
    if (Metrics.screenHeight < 667) {
      return size * 1.2
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (Metrics.screenHeight >= 667 && Metrics.screenHeight <= 735) {
      return size * 1.25
    }
    // catch larger phablet devices
    return size * 1.4
  }

  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size
}

export default scaleSize