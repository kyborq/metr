export type Result<T = unknown> = {
  data?: T;
  notice?: string;
  error?: string;
};

/**
 * Формирует ответ в едином формате.
 *
 * @param payload   – данные, которые нужно вернуть (может быть `undefined`)
 * @param options   – дополнительные поля
 * @returns Result  – объект, готовый к отправке клиенту
 */
export const result = <T = unknown>(
  payload: T | undefined,
  options: {
    notice?: string;
    error?: string;
  } = {}
): Result<T> => {
  const { notice, error } = options;
  if (error) return { error, notice };
  if (payload === undefined) return { notice };
  return { data: payload, notice };
};
