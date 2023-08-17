export default function Greeting({ person='everyone', from='anyone' }) {
    return (
        <>
            <h1>Hi there {person}</h1>
            <h3>--{from}</h3>
        </>
    );
}