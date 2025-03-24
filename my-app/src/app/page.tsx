"use client";
import {supabase} from "lib/supabase"



import { useEffect, useState } from 'react';


export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('users').select('*');

      console.log("داده‌های دریافتی از Supabase:", data); // چاپ داده‌ها در کنسول

      if (error) {
        console.error('خطا در دریافت داده‌ها:', error);
      } else {
        setUsers(data || []); // اگر data مقدار null باشد، مقدار پیش‌فرض [] قرار می‌گیرد
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>لیست کاربران</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user}>
             {user.created_at} - {user.role} - {user.email} - {user.id} 
            </li>
          ))
        ) : (
          <p>هیچ داده‌ای یافت نشد.</p>
        )}
      </ul>
    </div>
  );
}

