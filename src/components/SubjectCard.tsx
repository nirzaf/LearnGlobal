import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card"

interface SubjectCardProps {
  name: string
  icon: string
  description?: string
}

const descriptions = {
  'Mathematics': 'Master mathematical concepts from algebra to calculus with our expert tutors.',
  'Physics': 'Understand the fundamental laws that govern our universe.',
  'Chemistry': 'Explore the world of molecules, reactions, and chemical processes.',
  'Biology': 'Discover the fascinating science of life and living organisms.',
  'English': 'Develop strong communication skills and literary analysis abilities.',
  'Computer Science': 'Learn programming, algorithms, and computational thinking.',
}

export function SubjectCard({ name, icon }: SubjectCardProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="text-4xl mb-4 animate-bounce-subtle">{icon}</div>
          <h3 className="font-montserrat font-semibold text-secondary">{name}</h3>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">
            {descriptions[name as keyof typeof descriptions]}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default SubjectCard