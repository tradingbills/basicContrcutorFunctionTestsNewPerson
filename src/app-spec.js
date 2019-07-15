import { User } from "./app";
import test from "tape";

function theContext() {
  return this;
}

test("variations of validating if an instance is of a constructor function", t => {
  let actual, expected, obj;
  actual = new User("Jason", "Ashley");
  expected = User;
  t.equals(actual instanceof User, true, "actual is an instanceof User");
  t.equals(
    Object.getPrototypeOf(actual),
    User.prototype,
    "prototype of actual is User.prototype"
  );
  t.equals(
    actual.constructor,
    User,
    "actual has a constructor prop reference to User"
  );
  t.end();
});

test("add fn to return this && compare against different instance", t => {
  let actual, expected00, expected01, obj;
  actual = new User("Jason", "Ashley");
  actual.myContext = theContext;
  expected00 = actual.myContext();
  expected01 = new User("Jason", "Ashley");
  expected01.myContext = theContext;
  t.equals(actual, expected00, 'inside the acutal context, "this"');
  t.notEquals(
    actual,
    expected01,
    "the two instances are placed in different memory locations, not strictEqual"
  );
  t.deepEquals(
    actual,
    expected01,
    "the two instances are placed in different memory locations, are deepEquals"
  );
  t.end();
});

test("show the User context with return this", t => {
  let actual, expected00, expected01, obj;
  User.myContext = theContext;
  User.prototype.myContextOnPrototype = theContext;
  t.equals(User.myContext(), User, "show User context");
  t.ok(
    !("getFirstName" in User),
    "getFirstName not in User, its in prototype of User"
  );
  t.ok("getFirstName" in User.prototype, "getFirstName in prototype of User");
  t.equals(
    typeof User.prototype,
    "object",
    "The prototype is typeof an object"
  );
  // t.equals(User.prototype.myContextOnPrototype(), undefined, 'show User context' )
  t.end();
});
