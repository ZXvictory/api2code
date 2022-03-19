import { swaggerGenCode } from '../index';
import swaggerJson from './swagger.json';
// import swaggerSimple from './swagger-simple.json'


(async () => {
    // @ts-expect-error
    const ccc = await swaggerGenCode(swaggerJson);
    
    console.log('----', ccc, '----');
    
})()
