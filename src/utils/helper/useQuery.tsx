// import { IpoDetailsService } from '@https/IpoDetailService';
// import { useQuery as RNUseQuery } from 'react-query';

// /**
//  * @param { keyof APIService | import ("react-query").UseQueryOptions & {functionName : keyof APIService; args: unknown} } arg1
//  * @param { unknown[] } arg2
//  * @param { import ("react-query").UseQueryOptions } arg3
//  **/

// type UseQueryProps = {
//     functionName: keyof typeof IpoDetailsService;
//     args: any;
// };

// export function useQuery(arg1: any, arg2?: any, arg3?: any) {
//     const {
//         functionName,
//         args = [],
//         ...options
//     }: UseQueryProps = typeof arg1 === 'string'
//         ? { functionName: arg1, args: arg2, ...arg3 }
//         : arg1;

//     return RNUseQuery(
//         [functionName, ...args],
//         () => IpoDetailsService[functionName](args),
//         options,
//     );
// }
