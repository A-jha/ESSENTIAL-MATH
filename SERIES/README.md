# Sequence and Series

## Sequence

Any set of numbers saperated by comma is called sequence.

- sequence may be related or may not be related to each other.
- > 2, 4, 5, 11, 394

## Progression

When terms of sequence follows some logic / formula is called progression.

- > 2, 4, 6, 8
- > 1, 3, 5, 7

## Series

When terms of sequence or progressions are added then we call them series.

- > 1 + 2 + 3 + 4 . . . (sum of progression)
- > 1 + 123 + 4325 + 4 + ....(sum of sequence)

## Terms

An element of Sequence/ progression / series is called terms.

- terms are denoted using natural number
- > T<sub>1</sub> - Term 1
- > T<sub>2</sub> - Term 2
- > T<sub>n</sub> - Term n

## Sum of N terms S<sub>n</sub>

- > S(n) = T<sub>1</sub> + T<sub>2</sub> + ...+ T<sub>n</sub>

## S<sub>n</sub> to T<sub>n</sub>

General Term - A formula in term of n (T(n))

> ```
> S(n) = T(1) + T(2) + ... + T(n-1) + T(n)
>
> S(n-1) = T(1) + T(2)+...+ T(n-1)
> ----------------------------------------------
> S(n) - S(n-1) = T(n)
> ```

> For a progression S<sub>n</sub> = 2n<sup>2</sup> -3n find T<sub>n</sub>
>
> ```math
> Tn = Sn - Sn-1
>   = (2n^2 - 3n) - (2(n-1)^2 - 3(n-1))
>   = 4n - 5 (General term)
> ```

## Summation operation

> ```
> n ---> Upper bound
> Σ (exp)
> i ---> Lower Bound
> ```

Examples:

```
4
Σ (r^2 + 2) =  (1^2 + 2) + (2^2 + 2) + (3^2 + 2) + (4^2 + 2)
1

6
Σ (4r^2 + 2)/3  = [(4*3^2 + 2) / 3] + [(4*4^2 + 2)/3] + [(4*5^2 + 2)/3]
3
```

### Properties of Σ

> ```
> Σ (a + b) = Σa + Σb
> ```

> ```
> Σ ka = k Σa
> ```

> ```
> Σ k = nk
> ```

> ```
>       n(n+1)
> Σr = --------
>        2
> ```

> ```
>         n(n+1)(2n + 1)
> Σr^2 = -----------------
>                6
> ```

> ```
> Σr^3 = (Σr)^2
> ```

> ```
>        n(n + 1)(2n + 1)(3n^2 + 3n -1)
> Σr^4 =  -------------------------------
>                30
> ```

> ```
>        k(k^n - 1)
> Σk^r = ------------
>           k-1
> ```

## T<sub>n</sub> to S<sub>n</sub>

On Applying summition operation on T<sub>n</sub> we will get S<sub>n</sub>

- **S<sub>n</sub> = Σ T<sub>n</sub>**

Example-1

```
Given -- Tn = 4n + 1
Find Sn = ?

Sn = Σ (4n + 1)

Sn = 4Σn + Σ1

Sn = 4(n(n+1)/2) + n

Sn = 2n^2 + 3n <------ Answer
```

Example-2

```
Find Sn of Series
1.2 + 2.3 + 3.4 + ....... upto n terms

General terms from observation
Tn = n(n+1)

Sn = ΣTn
Sn = Σn^2 + Σn

Sn = n(n+1)(2n+1)/6 + n(n+1)/2
```

Example-3

```
Find Sn of Series
1.3 + 3.5 + 5.7 + 7.9 + . . . Upto n terms

General Terms from observation
Tn = (2n-1)(2n+1)

Sn = ΣTn
Sn = Σ(4n^2 - 1)
Sn = 4Σn^2 - Σ1

Sn = 4(n(n+1)(2n+1)/6) - n
```

# Progreassions and their Properties

- Arithmatic Progression (AP)

- Geomatric Progression (GP)
- Harmonic Progression (HP)
- Arithmatic Geomatic Progression (AGP)
