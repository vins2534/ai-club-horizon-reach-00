
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2, Calendar, Book, Image, Link, FolderOpen, Lightbulb } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useEvents } from '@/hooks/useEvents';
import { useSymbitech } from '@/hooks/useSymbitech';
import { useMediaPosts } from '@/hooks/useMediaPosts';
import { useBlogs } from '@/hooks/useBlogs';
import { useResources } from '@/hooks/useResources';
import { useProjects } from '@/hooks/useProjects';

const AdminPanel = () => {
  const { isAdminLoggedIn } = useAdmin();
  const { events, isLoading: eventsLoading, deleteEvent } = useEvents();
  const { sessions, isLoading: sessionsLoading, deleteSession } = useSymbitech();
  const { mediaPosts, isLoading: mediaLoading, deleteMediaPost } = useMediaPosts();
  const { blogs, isLoading: blogsLoading, deleteBlog } = useBlogs();
  const { resources, isLoading: resourcesLoading, deleteResource } = useResources();
  const { projects, isLoading: projectsLoading, deleteProject } = useProjects();

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

  const renderCRUDTable = (
    data: any[],
    columns: { key: string; label: string }[],
    entityName: string,
    isLoading: boolean,
    onDelete: (id: string) => void
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
        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
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
                      ) : column.key === 'date' && item[column.key] ? (
                        new Date(item[column.key]).toLocaleDateString()
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
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => onDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {data.length === 0 && (
                <TableRow>
                  <TableCell colSpan={columns.length + 1} className="text-center py-8 text-muted-foreground">
                    No {entityName.toLowerCase()} found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
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
              events,
              [
                { key: 'title', label: 'Title' },
                { key: 'date', label: 'Date' },
                { key: 'img', label: 'Image' },
                { key: 'description', label: 'Description' },
              ],
              'Events',
              eventsLoading,
              (id) => deleteEvent.mutate(id)
            )}
          </TabsContent>

          <TabsContent value="symbitech">
            {renderCRUDTable(
              sessions,
              [
                { key: 'session', label: 'Session' },
                { key: 'speaker', label: 'Speaker' },
                { key: 'img', label: 'Image' },
                { key: 'description', label: 'Description' },
              ],
              'SymbiTech Sessions',
              sessionsLoading,
              (id) => deleteSession.mutate(id)
            )}
          </TabsContent>

          <TabsContent value="media">
            {renderCRUDTable(
              mediaPosts,
              [
                { key: 'title', label: 'Title' },
                { key: 'subtitle', label: 'Subtitle' },
                { key: 'img', label: 'Image' },
                { key: 'content', label: 'Content' },
              ],
              'Media Posts',
              mediaLoading,
              (id) => deleteMediaPost.mutate(id)
            )}
          </TabsContent>

          <TabsContent value="blogs">
            {renderCRUDTable(
              blogs,
              [
                { key: 'quote', label: 'Quote' },
                { key: 'author', label: 'Author' },
                { key: 'link', label: 'Link' },
                { key: 'content', label: 'Content' },
              ],
              'Blogs & Articles',
              blogsLoading,
              (id) => deleteBlog.mutate(id)
            )}
          </TabsContent>

          <TabsContent value="resources">
            {renderCRUDTable(
              resources,
              [
                { key: 'title', label: 'Title' },
                { key: 'description', label: 'Description' },
                { key: 'category', label: 'Category' },
                { key: 'img', label: 'Image' },
                { key: 'link', label: 'Link' },
              ],
              'Resources',
              resourcesLoading,
              (id) => deleteResource.mutate(id)
            )}
          </TabsContent>

          <TabsContent value="projects">
            {renderCRUDTable(
              projects,
              [
                { key: 'project', label: 'Project Name' },
                { key: 'description', label: 'Description' },
                { key: 'technologies', label: 'Technologies' },
                { key: 'img', label: 'Image' },
                { key: 'link', label: 'Link' },
              ],
              'Projects',
              projectsLoading,
              (id) => deleteProject.mutate(id)
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
