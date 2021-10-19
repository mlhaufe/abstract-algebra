import Group from "./Group"

/**
 * Expresses that the order of elements in a grouping does not matter 
 * 
 * axiom Commutative a * b = b * a
 * 
 * http://mathworld.wolfram.com/Abelianization.html
 */
interface AbelianGroup<T> extends Group<T> {}

export default AbelianGroup