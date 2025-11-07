 #![no_std]

 use soroban_sdk::{contract, contractimpl, contracttype, Env};

 #[contracttype]
 #[derive(Clone, Debug, Eq, PartialEq)]
 pub enum DataKey {
     Counter,
 }

 #[contract]
 pub struct Counter;

 #[contractimpl]
 impl Counter {
     pub fn increment(env: Env) -> i128 {
         let current = Self::get_count(env.clone());
         let new_value = current + 1;
         env.storage()
             .instance()
             .set(&DataKey::Counter, &new_value);
         new_value
     }

     pub fn get_count(env: Env) -> i128 {
         env.storage()
             .instance()
             .get::<DataKey, i128>(&DataKey::Counter)
             .unwrap_or(0)
     }

     pub fn reset(env: Env) {
         env.storage().instance().set(&DataKey::Counter, &0i128);
     }
 }

 #[cfg(test)]
 mod test {
     use super::*;
    use soroban_sdk::Env;

     #[test]
     fn counter_flow() {
         let env = Env::default();
         let contract_id = env.register(Counter, ());

         // Generated client by soroban-sdk for tests
         let client = CounterClient::new(&env, &contract_id);

         assert_eq!(client.get_count(), 0);
         assert_eq!(client.increment(), 1);
         assert_eq!(client.get_count(), 1);
         assert_eq!(client.increment(), 2);
         assert_eq!(client.get_count(), 2);

         client.reset();
         assert_eq!(client.get_count(), 0);
     }
 }


