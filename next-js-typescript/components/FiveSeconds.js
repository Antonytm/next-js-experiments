function FiveSeconds({ date }) {
    return (
        <h3>
            {date}
        </h3>
    )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
    const date = new Date().toLocaleTimeString() + " each 5 seconds. ";
    return {
        props: {
            date,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 5, // In seconds
    }
}


export default FiveSeconds;