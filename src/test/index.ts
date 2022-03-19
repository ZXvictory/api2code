import { swaggerGenCode } from '../command';
import swaggerJson from './swagger-all.json';
// import swaggerSimple from './swagger-simple.json'


(async () => {
    // @ts-expect-error
    const ccc = await swaggerGenCode(swaggerJson);
    
    console.log('----', ccc, '----');
})()
