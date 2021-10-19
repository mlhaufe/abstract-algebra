import {Closed, Associative} from "../axioms"
import Magma from "./Magma"

/**
 * Expresses that the grouped elements of type T are associative
 * 
 * 
 *  @see {@link | https://en.wikipedia.org/wiki/Associative_property#Generalized_associative_law }
 *  @see {@link | https://en.wikipedia.org/wiki/Catalan_number#Applications_in_combinatorics }
 */
interface SemiGroup<T> extends Magma<T> {
    Group: Closed<T> & Associative<T>
}

export default SemiGroup
