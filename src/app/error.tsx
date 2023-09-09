'use client';

export default function ErrorPost({error}: {error: Error }) {
  return (
    <h1>Opps!!! {error.message}</h1>
  )
}