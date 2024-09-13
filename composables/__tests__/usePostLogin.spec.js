import { expect, it } from 'vitest';
import { usePostLogin } from '../usePostLogin';

const mockResponse = {
    data: {
        email: "test@test.com",
        password: 'password',
    },
    status: {
        code: 200
    }
};

vi.stubGlobal('useNuxtApp', () => {
    return {
        $http: {
        post: vi.fn()
            .mockResolvedValue(mockResponse)
        },
    };
});

describe('usePostLogin test', () => {
    let logger;
    beforeEach(() => {
        vi.stubGlobal('useEndpoints', vi.fn().mockReturnValue({
            auth: {
                login: 'http://localhost:3000/login'
            }
        }));
    });

    afterAll(() => {
        vi.unstubAllGlobals();
    });

    it('should successfully', async () => {
        logger = await usePostLogin();
        expect(logger).toStrictEqual({
            email: "test@test.com",
            password: "password",
        });
    });
});