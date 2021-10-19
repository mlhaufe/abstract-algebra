import RingWithUnity from "./RingWithUnity";
import Group from "../groups/Group";

interface DivisionRing<T,
    A extends Group<T>, 
    M extends Group<T>
> extends RingWithUnity<T, A, M>{ }

export default DivisionRing