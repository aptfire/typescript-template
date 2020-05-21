import { config } from 'dotenv'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import * as chaiLike from 'chai-like'
import * as chaiSpies from 'chai-spies'

chai.should()
chai.use(chaiAsPromised)
chai.use(chaiLike)
chai.use(chaiSpies)

config({ path: '.env.test' })
