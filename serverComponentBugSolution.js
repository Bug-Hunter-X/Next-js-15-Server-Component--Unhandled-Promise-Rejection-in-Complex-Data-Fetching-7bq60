// serverComponentBugSolution.js
export default async function MyServerComponent() {
  try {
    const [data1, data2] = await Promise.all([
      fetch('/api/data1').then((res) => res.json()).catch((error) => {
        console.error('Error fetching data1:', error);
        return { error: 'Failed to fetch data1' };
      }),
      fetch('/api/data2').then((res) => res.json()).catch((error) => {
        console.error('Error fetching data2:', error);
        return { error: 'Failed to fetch data2' };
      }),
    ]);

    if (data1.error || data2.error) {
      return <div>Error fetching data: {data1.error || data2.error}</div>;
    }

    return (
      <div>
        <h1>Data from API 1:</h1>
        <pre>{JSON.stringify(data1, null, 2)}</pre>
        <h1>Data from API 2:</h1>
        <pre>{JSON.stringify(data2, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error('Global error:', error);
    return <div>A global error occurred.</div>;
  }
}
