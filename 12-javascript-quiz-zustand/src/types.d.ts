interface QuizQuestion {
  id: number;
  question: string;
  language: string;
  level: "básico" | "medio" | "avanzado";
  code: string;
  answers: string[];
  correctAnswer: number;
  userSelectedAnswer?: number;
  isCorrectUserAnswer?: boolean;
}
