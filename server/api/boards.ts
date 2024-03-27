import { Firestore } from '@google-cloud/firestore';

export default defineEventHandler(async (event) => {

	const config = useRuntimeConfig(event);

	// console.log(`[projectId]: ${config.projectId}`);
	// console.log(`[clientEmail]: ${config.clientEmail}`);
	// console.log(`[private_key.length]: ${config.privateKey.length}`);

	const db = new Firestore({
		projectId: config.projectId,
		credentials: {
			client_email: config.clientEmail,
			private_key: config.privateKey.replace(/\\n/g, '\n'),
		},
	});

	const snapshot = await db.collection('boards').get();
	const boards = new Array();
	snapshot.docs.forEach((doc) => {
		boards.push({ id: doc.id, ...doc.data() });
	});
	return boards;
});