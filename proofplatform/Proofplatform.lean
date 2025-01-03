-- This module serves as the root of the `Proofplatform` library.
-- Import modules here that should be built as part of the library.
import Proofplatform.Basic


-- Commutativity of addition
theorem add_comm (a b : Nat) : a + b = b + a := by
  rw [Nat.add_comm]

-- Associativity of addition
theorem add_assoc (a b c : Nat) : a + b + c = a + (b + c) := by
  rw [Nat.add_assoc]
