import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div><Link href="/test/1">aaaa</Link></div>
  )
}