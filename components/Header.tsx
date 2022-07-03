import { useGetAuthorQuery } from "@gTypes/graphql-generated"

export default function Header() {
	const { data, isLoading, isError } = useGetAuthorQuery({ id: "752" })

	return <header>
		<h1>{isLoading ? "loading" : data?.getAuthor.name}</h1>
	</header>
}