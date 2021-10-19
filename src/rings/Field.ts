import DivisionRing from "./DivisionRing";
import AbelianGroup from "../groups/AbelianGroup"

interface Field<T,
    A extends AbelianGroup<T>,
    M extends AbelianGroup<T>
> extends DivisionRing<T, A, M>{ }

export default Field