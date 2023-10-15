"use client"
import Header from '@/components/Header/Header'
import Image from 'next/image'
import ProjectList from "@/components/ProjectList/ProjectList";
import EditingProject from '@/components/EditingProject/EditingProject';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProjectList></ProjectList>
    </main>
  )
}
