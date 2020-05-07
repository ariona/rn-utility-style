import Default from './default'
import Flexbox       from './utilities/flexbox'
import Padding       from './utilities/padding'
import Margin        from './utilities/margin'
import Border        from './utilities/border'
import Color         from './utilities/color'
import Typography    from './utilities/typography'
import Position      from './utilities/position'
import Sizing        from './utilities/sizing'
import Opacity       from './utilities/opacity'
import Transform     from './utilities/transform'
import Interactivity from './utilities/interactivity'
import Shadow        from './utilities/shadow'

export class UtilityStyle {
  utilities = {}
  config    = {}

  constructor() {
    this.loadConfig( Default );
  }

  loadConfig ( config ){
    this.config = {
      ...this.config,
      ...config
    }
    this.generateUtilities();
  }

  generateUtilities(){
    const utils = {
      ...Flexbox( this.config ),
      ...Padding( this.config ),
      ...Margin( this.config ),
      ...Border( this.config ),
      ...Color( this.config ),
      ...Typography( this.config ),
      ...Sizing( this.config ),
      ...Opacity( this.config ),
      ...Transform( this.config ),
      ...Position,
      ...Interactivity,
      ...Shadow,

      // added user defined utils
      ...this.config.extra
    }

    this.utilities = utils
  }
}

const utility = new UtilityStyle()

export default utility