import {Closed} from "../axioms"

/**
 * Expresses grouping two elements of type T as another element of type T
 * Usually represented as a mid-dot symbol (∙)
 * 
 * Also referred to as a Groupoid, but the term has become ambiguous
 * 
 * http://mathworld.wolfram.com/Magma.html
 * https://en.wikipedia.org/wiki/Magma_(algebra)
 */
interface Magma<T> {
    Group: Closed<T>
}

export default Magma