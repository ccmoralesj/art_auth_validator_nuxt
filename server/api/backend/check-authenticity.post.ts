export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const runtimeConfig = useRuntimeConfig();
  const API_URL = runtimeConfig.public.BACKEND_API;
  console.log({ API_URL });
  const resposne = await $fetch(`${API_URL}/validators/check-authenticity`, {
    method: "POST",
    headers: {
      Authentication: `Bearer ${runtimeConfig.BACKEND_API_KEY}`,
    },
    body,
    // transform: (_data) => _data.data
  });
  console.log(resposne);
});
