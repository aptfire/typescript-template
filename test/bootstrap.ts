import { config } from 'dotenv'
import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiLike from 'chai-like'
import chaiSpies from 'chai-spies'

chai.should()
chai.use(chaiAsPromised)
chai.use(chaiLike)
chai.use(chaiSpies)

config({ path: '.env.test' })
