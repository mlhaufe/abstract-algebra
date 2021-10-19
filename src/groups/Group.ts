import Monoid from "./Monoid";

/**
 * Expresses that every element of type T has an
 * opposite element of type T, where when grouped
 * together would return the identity element
 * 
 * 
 */
interface Group<T> extends Monoid<T> {
    // A^-1 * A = 1
    Inverse(t: T): T
}

  export default Group