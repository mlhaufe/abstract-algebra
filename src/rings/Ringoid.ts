import Magma from "../groups/Magma"

interface Ringoid<T, A extends Magma<T>, M extends Magma<T>> {
    distribute(a: T, b: T): T 
}

export default Ringoid