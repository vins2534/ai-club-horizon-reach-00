
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type Blog = Tables<'blogs'>;
type BlogInsert = TablesInsert<'blogs'>;
type BlogUpdate = TablesUpdate<'blogs'>;

export const useBlogs = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const createBlog = useMutation({
    mutationFn: async (blog: BlogInsert) => {
      const { data, error } = await supabase
        .from('blogs')
        .insert(blog)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Success",
        description: "Blog created successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create blog: " + error.message,
        variant: "destructive",
      });
    },
  });

  const updateBlog = useMutation({
    mutationFn: async ({ id, ...updates }: BlogUpdate & { id: string }) => {
      const { data, error } = await supabase
        .from('blogs')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Success",
        description: "Blog updated successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update blog: " + error.message,
        variant: "destructive",
      });
    },
  });

  const deleteBlog = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Success",
        description: "Blog deleted successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete blog: " + error.message,
        variant: "destructive",
      });
    },
  });

  return {
    blogs,
    isLoading,
    createBlog,
    updateBlog,
    deleteBlog,
  };
};
