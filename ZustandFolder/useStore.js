import { create } from 'zustand'

const countStore = create((set) => {
    count: 0
    increment: () => set((state) => ({ count: state.count + 1 }))
    decrement: () => set((state) => ({ count: state.count - 1 }))
    reset: () => set((state) => ({ count: 0 }))
    
})

export default countStore


// **PERSISTS**
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const useAuthStore = create(persist((set) => ({isLoggedIn: false,login: () => set({ isLoggedIn: true }),logout: () => set({ isLoggedIn: false }),}),
//     {
//       name: 'auth-storage',   // storage key
//       storage: AsyncStorage,  // where to save
//     }
//   )
// );

// export default useAuthStore;

// **COMBINE ** -> combines two middlewares to work together
// create(
//     persists(
//         immer(
//             (set) => ({
//                 count: 0
//                 inc: () => set((s) => { s.count += 1 })
//             }))
//     )
// )


