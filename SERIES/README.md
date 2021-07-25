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

## Aritmatic Progression (AP)

```
General Form
a, a + d , a + 2d, a + 3d , .... , a + (n-1)d

General Term Tn = a + (n-1)d

a = first term
d = common difference

Sn = n/2(2a + (n-1)d) = n/2(T1 + Tn)

```

```
Proof of Sn using Summation method
Sn = ΣTn
Sn = Σ(a+ nd -d)
Sn = an + dΣn - Σd
Sn = an + d(n(n-1)/2) - nd
Sn = n/2((n+1)d + 2(a-d))
Sn = n/2(2a + (n-1)d)

Proof of Sn using Reverse and Add Method
Sn = a + a + d + a + 2d + ..... + a + (n-1)d
Sn = a + (n-1)d + a + (n-2)d + a + (n-3)d+ . . . + a
----------------------------------------------------
2Sn = n(2a+(n-1)d)

Sn = n/2(2a + (n-1)d)
```

```
The sum of terms at equal distance form front and end are equal
T1 = a
Tn = a + (n-1)d
------------------------
T1 + Tn = 2a + (n-1)d

T2 = a + d
Tn-1 = a + (n-2)d
-------------------------
T2 + Tn-1 = 2a + (n-1)d
```

```
If three numbers are in AP say a, b, c
Then  b - a = c - b
-------------
|2b = a + c |
-------------
```

### Arithmatic Mean(AM)

```
     a + a + d + a + 2d + ... + a + (n-1)d
AM =--------------------------------------
                    2
```

```
Three Numbers in AP
a - d , a, a + d

Four numbers are in AP
a - 3d, a - d , a + d, a + 3d (Common difference = 2d)

Five No are in AP
a - 2d, a + d, a, a + d , a + 2
```

```
Each terms are Aritmatic mean of their equidistant terms from left and right

a + (a+d) + (a+2d) + (a+3d) + (a+4d) + (a+5d) + (a+6d)
      |       |                  |         |
      |       |------------------|         |
      |             a+3d                   |
      |------------------------------------|
                    a+3d
```

```
If an AP is Added or Subtracted by a number then AP Remains AP and their Common difference remains Same.
AP = a + a + d + a + 2d + a + 3d + . . + a + (n-1)d
AP + k = a+k , a+k +d , a+k +2d ( same for - )

If an AP is Multiplied bu any number then AP remains AP but common diffrence changes to multipled numbers times
AP x 2 =  2a + 2a + 2d .......
new_d = d x k

same for division
new_d = d/k
```

Example -1

```
Q : First terms of an AP is 5 and Last term is 45 and sum of all terms is 400 find no of terms and common differnce(d).

Sol :
    T1 = 5
    Tn = 45
    Sn = 400

    Sn = n/2(2a + (n-1)d)
    400 = n/2(a + (a+ (n-1)d))
    400 = n/2(a + Tn)
    400 = n/2(T1 + Tn)
    n/2(5 + 45 ) = 400
    50n = 800
    n = 16

    Tn =  T1 + (n-1)d
    45 =  5 +(16 -1)d
    15d = 40
    d = 40 / 15
    d = 8/3
```

Example-2

```
Q: Sum of first 3 terms of AP is 27 and sum of their square is 293 the find Sn.

Sol:
    let first 3 terms are a-d , a , a+d
    sum of first 3 terms = 3a = 27
                         => a = 9

    Sum of their suare is = (9-d)^2 + 9^2 + (9 +d)^2 = 293
                          => 81 + d^2 - 18d + 81 + 81 + d^2 + 18d = 293
                          => 2d^2 + 243 = 293
                          => 2d^2 = 50
                          => d^2 = 25
                          => d = +5 or -5

    First 3 terms if d = -5
     T1 = 14 , T2 = 9 , T3 = 4

    First 3 terms if d = +5
     T1 = 4 , T2 = 9 , T3 = 14

    Sn = n/2(2a + (n-1)d)
     if d = -5
     Sn = n/2(14 + (n-1)(-5))
        => n/2(14 - 5n + 5)

     if d = 5
     Sn = n/2(4 + (n-1)5)
        => n/2(4 + 5n -5)
```

Example-3:

```
Q: In an AP
 Tm = 1/n and Tn = 1/m
find Smn

Sol:
let first terms is a and common differece is d
    Tm = a + (m-1)d = 1/n -----------i
    Tn = a + (n-1)d = 1/m -----------ii

    eq: i - ii
    => md - d - nd + d = 1/n - 1/m
    => (m-n)d = (m-n)/mn
    => d = 1/ mn

    put value a in eqn i
    a + (m-1)/mn = 1/n
    a = 1/n - 1/n + 1/mn
    a = 1/mn

    Smn = mn/2(2a + (mn-1)d)
        => mn/2(2/mn + (mn - 1)/mn)
        => mn/2((mn+1)/mn)
        => (mn+1)/2
```

Example-4:

```
Q: Sum of n terms of two different AP's are in a ratio 7n + 1 / 4n + 27 find ratio of their 11th terms.

Sol: let first AP is a , a + d , a + 2d , .....
     let Second AP is a' , a' + d' + a' + 2d'+ .....

      Sn/Sn' = 7n + 1 / 4n + 27

      let's understand the concept
      Sn/Sn' = n/2(2a + (n-1)d) / n/2(2a' + (n-1)d')

      Sn/Sn' = 2a + (n-1)d / 2a' + (n-1)d'

      Sn/Sn' = (a + (n-1)d/2) / (a' + (n-1)d'/2) -------- i

      Tm/Tm' = a + (m-1) d / a' + (m-1)d' -------- ii

      from eqn i  and ii we can conclude that if in place of n we put 2m -1
      n-1/2 = m-1 then we can get the ratio
      n = 2m-2+1
      n = 2m-1

      we have to find 11th terms ratio
       m = 11
       n = 2m -1
       n = 21

     T11/T11' = 7*21 + 1 / 4 * 21 +27
              => 148/109

```

Example-5

```
Q: In an AP Sp = q and Sq = p find Spq

Sol:
    Sp : p/2(2a + (p-1)d) = q
        => 2a + (p-1)d = 2q/p ---------- i

    Sq : q/2(2a + (q-1)d) = p
        => 2a + (q-1)d = 2p/q ----------ii

    eqn i - eqn ii
    pd - d - qd + d = 2q/p - 2p/q
    => pd - qd = 2q^2 - 2p^2/pq
    =>d(p-q) = 2(q+p)(q-p)/pq
    =>d = -2(q+p)/pq

    put d in eqn i
    2a + (q-1)(-2(q+p)/pq) = 2q / p
    2a - 2(q-1)(q+p)/pq = 2q/p
    2a - 2(q^2 - q + pq - p)/pq = 2q/p
    a = (p^2 + q^2 -p -q +pq)/pq

    Spq = pq/2(2a + (pq-1)d)
    Spq = -(p + q)
```

Example-6 :

```
Q: The number of terms in AP is even and sum of terms at odd place is 24 and sum of terms at even place is 30 and last term exceeds first terms by 21/2. Find the AP.

Sol:
    let no of terms is 2n
    common difference is d
    first term is a
    last term : a +(2n-1)d  -a = 21/2
                (2n-1)d = 21/2 -----------iii

    AP is --> a + a+d + a+2d + a+3d + a+4d + a+5d + a+6d + ......

    ODD TERMS --> a + a+2d + a+4d + a+6d + ......
    Sodd : n/2(2a + (n-1)2d) = 24
           n(a+(n-1)d) = 24 ---------i

    EVEN TERMS --> a+d + a+3d + a+5d + ......
    Seven : n/2(2(a+d) + (n-1)2d) = 30
            n((a+d) + (n-1)d) = 30 -----ii

    eqn ii / i

    n((a+d) + (n-1)d)    30
    ----------------- = -----
      n(a+(n-1)d)        24

       a + nd      5
    ------------ =---
      a + nd -d    4

      4a + 4nd = 5a + 5nd - 5d
       0 = a + nd -5d

      a +(21/2 +d)1/2 -5d = 0
      a + 21/4 +d/2 -5d = 0
      a + 21/4 -9d/2 = 0

    d =3/2
    n = 4
    total no of terms = 2n = 8
```

Example-7

```
Q: a1,a2,a3,a4,a5,...... are in AP
    Show That
    (1/√a1 + √a2) + (1/√a2 + √a3) + . . . +(1/√an-1 + √an) = n-1/√a1 + √an

Sol: LHS = (1/√a1 + √a2) + (1/√a2 + √a3) + . . . +(1/√an-1 + √an)

         = (√a1 - √a2)/(a1 - a2) + (√a2 - √a3)/(a2 - a3) + ... + (√an-1 - √an)/(an-1 - an)

         = (√a1 - √a2)/(-d) + (√a2 - √a3)/(-d) + ... + (√an-1 - √an)/(-d)

         = -1/d(√a1 - √a2 + √a2 - √a3 + √a3 - √a4 + ... + √an-1 - √an)

         = -1/d(√a1 - √an)

         = -1/d((a1 - an)/(√a1 + √an)) -----an = a1 + (n-1)d

         = -1/d(a1 - a1 -(n-1)d)/(√a1 - √an)

         = n -1 / √a1 - √an
```

Example-8

```
Q: a1, a2, a3, a4, ..., an is in AP
Show That
    1/a1a2 + 1/a2a3 + 1/a3a4 + ... + 1/an-1an = n-1/a1an

Sol: LHS = 1/d(d/a1a2 + d/a2a3 + d/a3a4 + . . . + d/an-1an)

     = 1/d(a2-a1/a1a2 + a3-a2/a2a3 + a4-a3/a3a4 + . . + an - an-1/an-1an)

     = 1/d(1/a1 - 1/a2 + 1/a2 - 1/a3 + 1/a3 - 1/a4 + . . . + 1/an-1 - 1/an)

     = 1/d(1/a1 - 1/an) -----------an = a1 + (n-1)d

     = 1/d(an -a1/a1an)
     = 1/d((n-1)d)/a1an

     = (n-1)d/a1an
```

- Geomatric Progression (GP)
- Harmonic Progression (HP)
- Arithmatic Geomatic Progression (AGP)
