import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type ExtractAppleOrBanana<T> = T extends "apple" | "banana" ? T : never;

type AppleOrBanana = ExtractAppleOrBanana<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
