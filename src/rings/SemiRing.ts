import Ringoid from "./Ringoid"
import SemiGroup from "../groups/SemiGroup"

interface SemiRing<T,
    A extends SemiGroup<T>, 
    M extends SemiGroup<T>
> extends Ringoid<T, A, M>{ }

export default SemiRing