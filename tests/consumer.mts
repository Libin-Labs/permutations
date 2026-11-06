import * as api from '@lp-labs/permutations';
import { permutations } from '@lp-labs/permutations';
console.log(permutations([1, 2, 3], 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.permutations([1], 'two');
