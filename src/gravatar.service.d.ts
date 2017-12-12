export declare class GravatarService {
    /**
     * Returns the url for a user's gravatar image.
     *
     * @param {string} email email associated with gravatar account
     * @param {number} size size of gravatar image returned
     * @param {string} fallback fallback in case something goes wrong
     * @returns {string}
     * @memberof GravatarService
     */
    url(email: string, size?: number, fallback?: string): string;
}
