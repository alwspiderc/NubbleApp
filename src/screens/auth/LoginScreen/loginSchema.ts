import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string().min(1, 'Senha obrigatório'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
