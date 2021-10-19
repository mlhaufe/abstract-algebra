type Closed<T> = (left: T, right: T) => T

// Associativity:  (a ∙ b) ∙ c = a ∙ (b ∙ c)
type Associative<T> = any

export {Closed, Associative}