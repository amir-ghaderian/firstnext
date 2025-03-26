"use client";
import { supabase } from "lib/supabase";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (!error) setUsers(data || []);
      else console.error("خطا در دریافت کاربران:", error);
    };

    const fetchPosts = async () => {
      const { data, error } = await supabase.from("posts").select("*");
      if (!error) setPosts(data || []);
      else console.error("خطا در دریافت پست‌ها:", error);
    };

    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>صفحه کاربران و پست‌ها</h1>

      {/* نمایش لیست کاربران */}
      <h2>👥 لیست کاربران</h2>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              {user.created_at} - {user.role} - {user.email} - {user.id}
            </li>
          ))
        ) : (
          <p>هیچ کاربری یافت نشد.</p>
        )}
      </ul>

      {/* نمایش لیست پست‌ها */}
      <h2>📌 لیست پست‌ها</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ddd", padding: "10px", marginBottom: "10px" }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>هیچ پستی یافت نشد.</p>
      )}
    </div>
  );
}
