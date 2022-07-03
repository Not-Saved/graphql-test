import type { NextApiRequest, NextApiResponse } from 'next'
import { apolloServer } from '@graphqlServer/server';

const apolloStart = apolloServer.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	await apolloStart;
	await apolloServer.createHandler({
		path: "/api/graphql",
	})(req, res);
}

export const config = {
	api: {
		bodyParser: false
	}
};

