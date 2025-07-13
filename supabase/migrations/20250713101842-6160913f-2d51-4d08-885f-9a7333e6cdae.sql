
-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  date DATE NOT NULL,
  img TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create symbitech sessions table
CREATE TABLE public.symbitech_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session TEXT NOT NULL,
  speaker TEXT NOT NULL,
  img TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create media posts table
CREATE TABLE public.media_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  img TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blogs table
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  link TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create resources table
CREATE TABLE public.resources (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  img TEXT,
  link TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project TEXT NOT NULL,
  img TEXT,
  description TEXT,
  link TEXT,
  technologies TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - Since this is admin-only content, we'll allow public read access
-- but you can modify these policies later based on your needs

-- Enable RLS on all tables
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.symbitech_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (for website visitors)
CREATE POLICY "Allow public read access to events" ON public.events FOR SELECT USING (true);
CREATE POLICY "Allow public read access to symbitech sessions" ON public.symbitech_sessions FOR SELECT USING (true);
CREATE POLICY "Allow public read access to media posts" ON public.media_posts FOR SELECT USING (true);
CREATE POLICY "Allow public read access to blogs" ON public.blogs FOR SELECT USING (true);
CREATE POLICY "Allow public read access to resources" ON public.resources FOR SELECT USING (true);
CREATE POLICY "Allow public read access to projects" ON public.projects FOR SELECT USING (true);

-- For now, allow all operations without authentication (you can restrict this later)
-- In a production app, you'd want to add proper authentication checks
CREATE POLICY "Allow all operations on events" ON public.events FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on symbitech sessions" ON public.symbitech_sessions FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on media posts" ON public.media_posts FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on blogs" ON public.blogs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on resources" ON public.resources FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all operations on projects" ON public.projects FOR ALL USING (true) WITH CHECK (true);

-- Insert some sample data
INSERT INTO public.events (title, date, img, description) VALUES
('AI Workshop 2024', '2024-03-15', 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&q=80', 'Annual AI workshop covering latest trends and technologies'),
('Machine Learning Bootcamp', '2024-04-20', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80', 'Intensive bootcamp on machine learning fundamentals');

INSERT INTO public.symbitech_sessions (session, speaker, img, description) VALUES
('Introduction to Neural Networks', 'Dr. Smith', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', 'Basic concepts and applications of neural networks'),
('Deep Learning Fundamentals', 'Prof. Johnson', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80', 'Deep dive into deep learning architectures');

INSERT INTO public.media_posts (title, subtitle, img, content) VALUES
('Intro to GANs', 'Infographic', 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80', 'Visual guide to Generative Adversarial Networks'),
('What is NLP?', 'Quick Guide', 'https://images.unsplash.com/photo-1516110833967-0b5716ca75b1?auto=format&fit=crop&w=400&q=80', 'Natural Language Processing explained simply');

INSERT INTO public.blogs (quote, author, link, content) VALUES
('AI won''t replace you, but a person using AI might.', 'Sara S, AI Club', 'https://medium.com/@aiclub/ai-future', 'Exploring the future of AI and human collaboration'),
('Prompt engineering is the new superpower.', 'Shivam B, Club Writer', 'https://medium.com/@aiclub/prompt-engineering', 'Master the art of communicating with AI');

INSERT INTO public.resources (title, description, img, link, category) VALUES
('TensorFlow Guide', 'Complete guide to TensorFlow', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=400&q=80', 'https://tensorflow.org', 'Framework'),
('PyTorch Tutorial', 'Learn PyTorch from scratch', 'https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?auto=format&fit=crop&w=400&q=80', 'https://pytorch.org', 'Framework');

INSERT INTO public.projects (project, img, description, link, technologies) VALUES
('Generative Art App', 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80', 'AI-powered generative art creation tool', 'https://github.com/aiclub/generative-art', 'Python, TensorFlow, React'),
('NLP Chatbot', 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', 'Natural language processing chatbot', 'https://github.com/aiclub/nlp-chatbot', 'Python, NLTK, Flask');
