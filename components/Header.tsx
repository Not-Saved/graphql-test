import { useGetAuthorQuery } from "@gTypes/graphql-generated"

export default function Header() {
	const { data, loading } = useGetAuthorQuery({ variables: { id: "752" } })

	return <header>
		<h1>{loading ? "loading" : data?.getAuthor.name}</h1>
	</header>
}