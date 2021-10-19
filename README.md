# Group Theory

The study of a single operation "group" (&middot;)

## Magma

Closure: S &middot; S => S

## SemiGroup <: Magma

Associativity: (a &middot; b) &middot; c = a &middot; (b &middot; c)

## Monoid <: SemiGroup

Identity: a &middot; 1 = 1 &middot; a = a

## Group <: Monoid

Inverse: a &middot; a<sup>-1</sup> = e

## Abelian Group <: Group

Also called a Commutative Group

Commutativity: a &middot; b = b &middot; a

# Ring Theory

The study of two Magmas represented by (&middot;) (&plus;)

An additional axiom is defined for how the operations distribute:

Distributivity:

a &middot; (b &plus; c) = (a &middot; b) + (a &middot; c)

(a &plus; b) &middot; c = (a &middot; c) &plus; (b &middot; c)

## Ringoid

(&plus;): Magma 
<br>
(&middot;): Magma

## SemiRing <: Ringoid

(&plus;): SemiGroup
<br>
(&middot;): SemiGroup

## Ring <: SemiRing

(&plus;): Group
<br>
(&middot;): SemiGroup

## RingWithUnity <: Ring

(&plus;): Group
<br>
(&middot;): Monoid

## DivisionRing <: RingWithUnity

(&plus;): Group
<br>
(&middot;): Group

## Field <: DivisionRing

(&plus;): AbelianGroup
<br>
(&middot;): AbelianGroup

# Module Theory

∘

# References

https://antimatroid.wordpress.com/2012/04/01/abstract-algebra-in-c/
https://en.wikipedia.org/wiki/Quasigroup
https://www.johndcook.com/blog/2018/07/08/weak-groups/
https://twitter.com/johncarlosbaez/status/1243560612757565441


# Misc Notes

https://en.wikipedia.org/wiki/Group_theory

Module Theory

https://en.wikipedia.org/wiki/Quotient_group

What is the relationship between associativity and ordering?

    (a,(b,c))    [a b c]
    ((a,b),c)

Types vs Algebras vs Sets vs Categories vs Logic

- Boolean Algebra vs Boolean Logic

## Quotients

"""
Bags are lists quotiented by permutation. By looking at
Taylor series, the bag type constructor corresponds to
the exponential function. Unsurprisingly, then, it is the
type of its own one-hole contexts.
"""
-- James Wood (@laMudri)

Referencing:
"The Derivative of a Regular Type is its Type of One-Hole Contexts"
	-- Conor McBride
http://strictlypositive.org/diff.pdf




CoAlgebra == CoMonoid?

Vector Space?

http://learnyouahaskell.com/functors-applicative-functors-and-monoids

## Regular Algebra / Kleene Algebra

https://en.wikipedia.org/wiki/Kleene_algebra

Testing the Equivalence of Regular Languages
https://arxiv.org/abs/0907.5058

## CoMonad

http://www.haskellforall.com/2013/02/you-could-have-invented-comonads.html



## Algebra / CoAlgebra

Notes from Bart Jacobs: "Object and Classes, Coalgebraically", 1991

Algebra
	has a set of constructors
		a constructor is an operation that terminates in the algebra
		A constructor introduces a new type
	an algebra is a Monoid?


CoAlgebra
	has a set of destructors
		a destructor is an operation that terminates in a different algebra
		a destructor eliminates a type
		a destructor "observes" a "behavior"
	a CoAlgebra is a CoMonoid?

