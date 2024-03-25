import { Firestore } from '@google-cloud/firestore';

const db = new Firestore({
	projectId: 'gmsprt',
	keyFilename: 'gmsprt-5b5d6ca15e61.json'
});

export default defineEventHandler(async (event) => {
	const snapshot = await db.collection('boards').get();
	const boards = new Array();
	snapshot.docs.forEach((doc) => {
		boards.push({ id: doc.id, ...doc.data() });
	});
	return boards;
});