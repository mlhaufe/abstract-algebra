import Group from "../groups/Group"
import Monoid from "../groups/Monoid"
import Ring from "./Ring"

interface RingWithUnity<T,
    A extends Group<T>,
    M extends Monoid<T>
> extends Ring<T, A, M>{ }

export default RingWithUnity