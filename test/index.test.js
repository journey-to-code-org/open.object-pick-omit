import test from "node:test";
import assert from "node:assert/strict";
import { pick, omit } from "../src/index.js";
test("picks keys",()=>assert.deepEqual(pick({a:1,b:2},["a"]),{a:1}));
test("omits keys",()=>assert.deepEqual(omit({a:1,b:2},["a"]),{b:2}));
test("ignores missing pick keys",()=>assert.deepEqual(pick({a:1},["x"]),{}));
