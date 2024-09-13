import { expect, it } from 'vitest';
import { usePostUser } from '../usePostUser';

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

describe('usePostUser test', () => {
    let user;
    beforeEach(() => {
        vi.stubGlobal('useEndpoints', vi.fn().mockReturnValue({
            auth: {
                register: 'http://localhost:3000/login'
            }
        }));
    });

    afterAll(() => {
        vi.unstubAllGlobals();
    });

    it('should successfully', async () => {
        user = await usePostUser();
        expect(user).toStrictEqual({
            email: "test@test.com",
            password: "password",
        });
    });
});