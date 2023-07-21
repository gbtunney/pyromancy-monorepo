import { multiply } from './utils1.js'

/**
 * Performs a useless calculation
 *
 * @param {number} x Base value of the calculation
 * @customFunction
 */
export function USELESS_CALCULATION_NEW(x: number): number {
    return multiply(x, 10)
}

console.log('USELESS_CALCULATION_NEW', USELESS_CALCULATION_NEW)
