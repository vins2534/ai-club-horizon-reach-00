
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Calendar, Book, Image, Link, FolderOpen, Lightbulb } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const AdminPanel = () => {
  const { isAdminLoggedIn } = useAdmin();

  if (!isAdminLoggedIn) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground">Please login as an administrator to access this panel.</p>
        </div>
      </div>
    );
  }

  // Mock data for demonstration
  const mockEvents = [
    { id: '1', title: 'AI Workshop 2024', date: '2024-01-15', img: 'https://example.com/image1.jpg' },
    { id: '2', title: 'Machine Learning Bootcamp', date: '2024-02-20', img: 'https://example.com/image2.jpg' },
  ];

  const mockSymbitech = [
    { id: '1', session: 'Introduction to Neural Networks', speaker: 'Dr. Smith', img: 'https://example.com/neural.jpg' },
    { id: '2', session: 'Deep Learning Fundamentals', speaker: 'Prof. Johnson', img: 'https://example.com/deep.jpg' },
  ];

  const mockMediaPosts = [
    { id: '1', title: 'Intro to GANs', subtitle: 'Infographic' },
    { id: '2', title: 'What is NLP?', subtitle: 'Quick Guide' },
  ];

  const mockBlogs = [
    { id: '1', quote: 'AI won\'t replace you, but a person using AI might.', author: 'Sara S, AI Club', link: 'https://medium.com/' },
    { id: '2', quote: 'Prompt engineering is the new superpower.', author: 'Shivam B, Club Writer', link: 'https://medium.com/' },
  ];

  const mockResources = [
    { id: '1', title: 'TensorFlow Guide', description: 'Complete guide to TensorFlow', img: 'https://example.com/tf.jpg', link: 'https://tensorflow.org' },
    { id: '2', title: 'PyTorch Tutorial', description: 'Learn PyTorch from scratch', img: 'https://example.com/pytorch.jpg', link: 'https://pytorch.org' },
  ];

  const mockProjects = [
    { id: '1', project: 'Generative Art App', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80' },
    { id: '2', project: 'NLP Chatbot', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80' },
  ];

  const renderCRUDTable = (
    data: any[],
    columns: { key: string; label: string }[],
    entityName: string
  ) => (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Manage {entityName}</CardTitle>
            <CardDescription>Create, read, update, and delete {entityName.toLowerCase()}</CardDescription>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key}>{column.label}</TableHead>
              ))}
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                {columns.map((column) => (
                  <TableCell key={column.key}>
                    {column.key === 'img' && item[column.key] ? (
                      <img src={item[column.key]} alt="Preview" className="w-12 h-8 object-cover rounded" />
                    ) : column.key === 'link' && item[column.key] ? (
                      <a href={item[column.key]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View Link
                      </a>
                    ) : (
                      String(item[column.key] || '').substring(0, 50) + (String(item[column.key] || '').length > 50 ? '...' : '')
                    )}
                  </TableCell>
                ))}
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Admin Panel</h1>
          <p className="text-muted-foreground">Manage all content for the AI Club website</p>
        </div>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </TabsTrigger>
            <TabsTrigger value="symbitech" className="flex items-center space-x-2">
              <Lightbulb className="h-4 w-4" />
              <span>SymbiTech</span>
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center space-x-2">
              <Image className="h-4 w-4" />
              <span>Media Posts</span>
            </TabsTrigger>
            <TabsTrigger value="blogs" className="flex items-center space-x-2">
              <Book className="h-4 w-4" />
              <span>Blogs</span>
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center space-x-2">
              <Link className="h-4 w-4" />
              <span>Resources</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center space-x-2">
              <FolderOpen className="h-4 w-4" />
              <span>Projects</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            {renderCRUDTable(
              mockEvents,
              [
                { key: 'title', label: 'Title' },
                { key: 'date', label: 'Date' },
                { key: 'img', label: 'Image' },
              ],
              'Events'
            )}
          </TabsContent>

          <TabsContent value="symbitech">
            {renderCRUDTable(
              mockSymbitech,
              [
                { key: 'session', label: 'Session' },
                { key: 'speaker', label: 'Speaker' },
                { key: 'img', label: 'Image' },
              ],
              'SymbiTech Sessions'
            )}
          </TabsContent>

          <TabsContent value="media">
            {renderCRUDTable(
              mockMediaPosts,
              [
                { key: 'title', label: 'Title' },
                { key: 'subtitle', label: 'Subtitle' },
              ],
              'Media Posts'
            )}
          </TabsContent>

          <TabsContent value="blogs">
            {renderCRUDTable(
              mockBlogs,
              [
                { key: 'quote', label: 'Quote' },
                { key: 'author', label: 'Author' },
                { key: 'link', label: 'Link' },
              ],
              'Blogs & Articles'
            )}
          </TabsContent>

          <TabsContent value="resources">
            {renderCRUDTable(
              mockResources,
              [
                { key: 'title', label: 'Title' },
                { key: 'description', label: 'Description' },
                { key: 'img', label: 'Image' },
                { key: 'link', label: 'Link' },
              ],
              'Resources'
            )}
          </TabsContent>

          <TabsContent value="projects">
            {renderCRUDTable(
              mockProjects,
              [
                { key: 'project', label: 'Project Name' },
                { key: 'img', label: 'Image' },
              ],
              'Projects'
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
