// Utility Types

/*
    TypeScript provides a variety of built-in utility types 
    that facilitate common type transformations, allowing developers to manipulate 
    and construct new types based on existing ones with ease and type safety.
*/

/*
Here are some of the most commonly used utility types:

    Partial<Type>: 
    Constructs a type where all properties of Type are optional. 
    This is useful for scenarios like creating an object for an update operation 
    where only some fields might be provided.

    Required<Type>: 
    The inverse of Partial; it constructs a type consisting of 
    all properties of Type set to required. This is useful for ensuring all data 
    is present before a final operation.

    Readonly<Type>: 
    Constructs a type where all properties of Type are marked as readonly, 
    meaning they cannot be reassigned after their initial declaration. 
    This helps enforce immutability.

    Pick<Type, Keys>: 
    Creates a new type by selecting a set of properties (Keys) from Type. 
    This is beneficial when you only need a subset of properties from a larger type.

    Omit<Type, Keys>: 
    Creates a new type by removing specified properties (Keys) from Type.
    This is useful when you want most properties of a type 
    but need to exclude a few specific ones 
    (e.g., removing a password field from a User type for a public profile).

    Record<Keys, Type>: 
    Constructs an object type whose property keys are Keys 
    (which can be a union of string literals, for example) and whose property values are Type.

    Exclude<Type, ExcludedUnion>: 
    Excludes from Type all union members that are assignable to ExcludedUnion. 
    This is used for filtering union types.

    Extract<Type, Union>: 
    Extracts from Type all union members that are assignable to Union. 
    This is the inverse of Exclude and is used for pulling specific types out of a union.

    NonNullable<Type>: 
    Constructs a type by excluding null and undefined from Type. 
    This is helpful for ensuring variables have defined values.

    ReturnType<Type>: 
    Constructs a type consisting of the return type of a function type Type. 
    This allows you to easily get the type of a function's output.

    Awaited<Type>: 
    This utility is used to unwrap the types that come from a Promise, 
    modeling the operation of await in async functions. 
*/

//────────────────────────────────────────── Partial
interface UserRecord {
    name: string;
    age: number;
    email?: string;
}

const updateUser = (user: Partial<UserRecord>) => { //Marked all properties optional
    console.log("Partial: ", user);
}
updateUser({ name: "Arbaz" });



//────────────────────────────────────────── Required
const newUser = (user: Required<UserRecord>) => {
    console.log("Required: ", user);    
}
newUser({name: "Arbaz", age: 22, email: "test@arbaz.com"});



//────────────────────────────────────────── Readonly
let readOnlyUser: Readonly<UserRecord> = {
    name: "Mayank",
    age: 23
}
// readOnlyUser.age = 40;  // gives error because its "Readonly"
console.log("Readonly: ", readOnlyUser);



//────────────────────────────────────────── Pick
type UserInfo = Pick<UserRecord, 'name' | 'email'>  //only pick properties of union

const myUser: UserInfo = {
    name: "New Arbaz"
}
console.log("Pick: ", myUser);



//────────────────────────────────────────── Omit
type UserWithoutEmail = Omit<UserRecord, 'email'>  //without email
const noEmailUser: UserWithoutEmail= {
    name: "Aman",
    age: 27,
    // email: "aman@test.com" // gives error
}
console.log("Omit: ", noEmailUser);



//────────────────────────────────────────── Record
type RecordUserInfo = Record<string, number>;  //reassigning datatype of key and value

const userRecordInfo: RecordUserInfo = {
    name: 22,
    age: 88,
    email: 22
}
console.log("Record: ", userRecordInfo);


//────────────────────────────────────────── Example of Record:
type Role = "admin" | "user" | "guest";

const userRoles: Record<Role, string> = {
    admin: "Madhav",
    user: "Shreya",
    guest: "Shubham"
}
console.log("Example of Record: ", userRoles);



//────────────────────────────────────────── Exclude
type Stat = 'Success' | 'Error' | 'Loading';
type ExcludedError = Exclude<Stat, 'Error'> //excluded 'Error' from Stat Type
const stat1: ExcludedError = 'Success';
const stat2: ExcludedError = 'Loading';
// const stat3: ExcludedError = 'Error';  // Gives error because its excluded
console.log("Exclude: ", stat1);



//────────────────────────────────────────── Extract
type ExtractError = Extract<Stat, 'Error' | 'Loading'>;

const statError: ExtractError = 'Error';
// const statSuccess: ExtractError = 'Success';  // gives error because of "Extract"
console.log("Extract: ", statError);



//────────────────────────────────────────── NonNullable
type MayBeUser = string | null | undefined;
type UserNull = NonNullable<MayBeUser>   //exlcude "null" and "undefined" also

const userNull: UserNull = "Shahrukh";
console.log("NotNullable: ", userNull);



//────────────────────────────────────────── ReturnType
function getType() {
    return {name: "Suman", age: 30}
}

type UserReturnType = ReturnType<typeof getType>    //setting return type of getType

const userType: UserReturnType = {
    name: "Salman",
    age: 55
}
console.log("ReturnType: ", userType);



//────────────────────────────────────────── Parameters
function updateUserData(name: string, age: number) {
    console.log("Parameters", `Name: ${name} and age: ${age}`);
}

type UpdateUserParams = Parameters<typeof updateUserData>  //takes the parameters type of updateUserData

const params: UpdateUserParams = ['Shahrukh', 60];



//────────────────────────────────────────── ConstructorParameters
class UserData {
    constructor(name: string, age: number) {}
}

type UserConstructorParams = ConstructorParameters<typeof UserData>

const userParams: UserConstructorParams = ['Aamir', 52];