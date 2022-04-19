import { swaggerGenCode } from '../command';
// import swaggerJson from './swagger-large.json';
import swaggerSimple from './swagger-simple.json'


(async () => {
    // @ts-expect-error
   const ccc = await swaggerGenCode(swaggerSimple, ['ts']);

    // console.log('----', ccc.apiInfo.apiList[0], '----');
})()
