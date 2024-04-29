export default function UserProtectedPage({ data }: any) {
  return (
    <div className="container">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Извлекаем refreshToken из куков
  const accessToken = context.req.cookies.accessToken;

  try {
    // Выполняем запрос к защищенному маршруту с использованием refreshToken
    const res = await fetch(`${process.env.API_URL}user/login/protected/`, {
      credentials: "include",
      method: "GET",
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    // Получаем данные из ответа
    const data = await res.json();
    
    // Возвращаем данные в виде пропсов для компонента
    return { props: { data } };
  } catch (error) {
    // В случае ошибки логируем ее и возвращаем пустой объект данных
    console.error(error);
    return { props: { data: {} } };
  }
}