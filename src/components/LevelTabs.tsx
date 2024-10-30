import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

export function LevelTabs() {
  const levels = {
    'GCSE': {
      description: 'Comprehensive GCSE preparation across all subjects',
      subjects: ['Mathematics', 'Sciences', 'English', 'Languages']
    },
    'A-Level': {
      description: 'Expert A-Level tutoring for university preparation',
      subjects: ['Further Mathematics', 'Physics', 'Chemistry', 'Biology']
    },
    'IB': {
      description: 'International Baccalaureate support at all levels',
      subjects: ['Higher Level', 'Standard Level', 'Theory of Knowledge']
    }
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="GCSE" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {Object.keys(levels).map((level) => (
            <TabsTrigger key={level} value={level}>
              {level}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(levels).map(([level, content]) => (
          <TabsContent key={level} value={level}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{content.description}</h3>
              <ul className="grid grid-cols-2 gap-4">
                {content.subjects.map((subject) => (
                  <li key={subject} className="flex items-center space-x-2">
                    <span className="text-primary">✓</span>
                    <span>{subject}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}