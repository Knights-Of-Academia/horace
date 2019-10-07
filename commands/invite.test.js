const invite = require('./invite.js');
const messageStub = require('../stub/messageStub');

test('Sends default message on no parameters', async () => {
	// Arrange
	const message = new messageStub();

	// Act
	const responseMessage = await invite.execute(null, message, []);

	// Assert
	const expectedResponse = 'Invite to the KOA server: https://discord.gg/EYX7XGG';
	expect(responseMessage).toBe(expectedResponse);
});

test('Sends default message on non-defined parameters', async () => {
	// Arrange
	const message = new messageStub();

	// Act
	const responseMessage = await invite.execute(null, message, ['otherwise']);

	// Assert
	const expectedResponse = 'Invite to the KOA server: https://discord.gg/EYX7XGG';
	expect(responseMessage).toBe(expectedResponse);
});

test('Sends right message on args camelot', async () => {
	// Arrange
	const message = new messageStub();

	// Act
	const responseMessage = await invite.execute(null, message, ['camelot']);

	// Assert
	const expectedResponse = 'Invite to the Knights of Academia: Camelot server: https://discord.gg/wu3a6JA';
	expect(responseMessage).toBe(expectedResponse);
});

test('Sends right message on args CAMELOT', async () => {
	// Arrange
	const message = new messageStub();

	// Act
	const responseMessage = await invite.execute(null, message, ['CAMELOT']);

	// Assert
	const expectedResponse = 'Invite to the Knights of Academia: Camelot server: https://discord.gg/wu3a6JA';
	expect(responseMessage).toBe(expectedResponse);
});

test('Sends right message on args koai', async () => {
	// Arrange
	const message = new messageStub();

	// Act
	const responseMessage = await invite.execute(null, message, ['koai']);

	// Assert
	const expectedResponse = 'Invite to the Knights of Academia: International server: https://discord.gg/Fuvabsm';
	expect(responseMessage).toBe(expectedResponse);
});

test('Sends right message on args KOAI', async () => {
	// Arrange
	const message = new messageStub();

	// Act
	const responseMessage = await invite.execute(null, message, ['KOAI']);

	// Assert
	const expectedResponse = 'Invite to the Knights of Academia: International server: https://discord.gg/Fuvabsm';
	expect(responseMessage).toBe(expectedResponse);
});