import { config } from 'dotenv'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import * as chaiLike from 'chai-like'

chai.should()
chai.use(chaiAsPromised)
chai.use(chaiLike)

config({ path: '.env.test' })
