-- This module serves as the root of the `proof-platform` library.
-- Import modules here that should be built as part of the library.
import Test.Basic
def add_assoc_test : Bool :=
  (1 + 2 + 3) = (1 + (2 + 3))

#eval add_assoc_test -- should return true
