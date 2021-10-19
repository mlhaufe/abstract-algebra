import SemiGroup from "./SemiGroup"

/**
 * Expresses that there exists an element of the type T (1)
 * where if grouped with any another element of the type (a), 
 * becomes irrelevant to the Grouping
 * 
 * sometimes called unit | empty | 1 
 * Identity: a ∙ 1 = a
 * 
 * https://en.wikipedia.org/wiki/Monoid
 * 
 * Is this also called an "Algebra"? An Associative Algebra?
 * 
 * https://stackoverflow.com/questions/23855070/what-does-a-nontrivial-comonoid-look-like#23858109
 * 
 * "A Monoid Is a Category With Just One Object."
 * https://twitter.com/dependent_types/status/1135501777711771648
 */
interface Monoid<T> extends SemiGroup<T> {
    Identity(): T
}

export default Monoid