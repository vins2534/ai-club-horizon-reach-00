
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type MediaPost = Tables<'media_posts'>;
type MediaPostInsert = TablesInsert<'media_posts'>;
type MediaPostUpdate = TablesUpdate<'media_posts'>;

export const useMediaPosts = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: mediaPosts = [], isLoading } = useQuery({
    queryKey: ['media_posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('media_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const createMediaPost = useMutation({
    mutationFn: async (post: MediaPostInsert) => {
      const { data, error } = await supabase
        .from('media_posts')
        .insert(post)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['media_posts'] });
      toast({
        title: "Success",
        description: "Media post created successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create media post: " + error.message,
        variant: "destructive",
      });
    },
  });

  const updateMediaPost = useMutation({
    mutationFn: async ({ id, ...updates }: MediaPostUpdate & { id: string }) => {
      const { data, error } = await supabase
        .from('media_posts')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['media_posts'] });
      toast({
        title: "Success",
        description: "Media post updated successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update media post: " + error.message,
        variant: "destructive",
      });
    },
  });

  const deleteMediaPost = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('media_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['media_posts'] });
      toast({
        title: "Success",
        description: "Media post deleted successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete media post: " + error.message,
        variant: "destructive",
      });
    },
  });

  return {
    mediaPosts,
    isLoading,
    createMediaPost,
    updateMediaPost,
    deleteMediaPost,
  };
};
