export abstract class HealthApi {
  abstract health(): Promise<{ status: string; }>;
}
