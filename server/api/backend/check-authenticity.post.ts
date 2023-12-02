export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const runtimeConfig = useRuntimeConfig();
  const API_URL = runtimeConfig.public.BACKEND_API;
  const response = await $fetch(`${API_URL}/validators/check-authenticity`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${runtimeConfig.BACKEND_API_KEY}`,
    },
    body,
    // transform: (_data) => _data.data
  });
  return response;
});
