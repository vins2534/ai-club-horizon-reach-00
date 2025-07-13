
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import type { Tables, TablesInsert, TablesUpdate } from '@/integrations/supabase/types';

type SymbitechSession = Tables<'symbitech_sessions'>;
type SymbitechInsert = TablesInsert<'symbitech_sessions'>;
type SymbitechUpdate = TablesUpdate<'symbitech_sessions'>;

export const useSymbitech = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: sessions = [], isLoading } = useQuery({
    queryKey: ['symbitech_sessions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('symbitech_sessions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const createSession = useMutation({
    mutationFn: async (session: SymbitechInsert) => {
      const { data, error } = await supabase
        .from('symbitech_sessions')
        .insert(session)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['symbitech_sessions'] });
      toast({
        title: "Success",
        description: "SymbiTech session created successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create session: " + error.message,
        variant: "destructive",
      });
    },
  });

  const updateSession = useMutation({
    mutationFn: async ({ id, ...updates }: SymbitechUpdate & { id: string }) => {
      const { data, error } = await supabase
        .from('symbitech_sessions')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['symbitech_sessions'] });
      toast({
        title: "Success",
        description: "SymbiTech session updated successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update session: " + error.message,
        variant: "destructive",
      });
    },
  });

  const deleteSession = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('symbitech_sessions')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['symbitech_sessions'] });
      toast({
        title: "Success",
        description: "SymbiTech session deleted successfully!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete session: " + error.message,
        variant: "destructive",
      });
    },
  });

  return {
    sessions,
    isLoading,
    createSession,
    updateSession,
    deleteSession,
  };
};
