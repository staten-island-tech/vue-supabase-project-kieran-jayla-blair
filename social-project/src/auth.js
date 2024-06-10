import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabase } from '@/lib/supabase'; 
export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const error = ref(null);

  async function signIn(email, password) {
    const { data, error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      error.value = signInError.message;
    } else {
      user.value = data.user;
    }
  }
  async function checkAuth() {
    const { data } = await supabase.auth.getUser();
    user.value = data.user;
  }

  return {
    user,
    error,
    signIn,
    checkAuth,
  };
});