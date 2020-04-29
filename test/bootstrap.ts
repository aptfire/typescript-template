import { config } from 'dotenv'
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

chai.should()
chai.use(chaiAsPromised)

config({ path: '.env.test' })
