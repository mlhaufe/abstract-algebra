import Group from "../groups/Group"
import SemiGroup from "../groups/SemiGroup"
import SemiRing from "./SemiRing"

interface Ring<T,
    A extends Group<T>, 
    M extends SemiGroup<T>
> extends SemiRing<T, A, M>{ }

export default Ring