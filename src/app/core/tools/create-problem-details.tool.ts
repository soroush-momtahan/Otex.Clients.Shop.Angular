import { ProblemDetails } from '../models/errors/problem-details';

export function createProblemDetails(message: string): ProblemDetails {
  return {
    type: 'client-problem',
    status: 500,
    title: message,
    traceId: "client-01"
  }
}
