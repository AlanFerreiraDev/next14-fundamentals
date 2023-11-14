export default async function Test() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <h1
      onClick={() => {
        console.log('teste')
      }}
    >
      Test
    </h1>
  )
}
