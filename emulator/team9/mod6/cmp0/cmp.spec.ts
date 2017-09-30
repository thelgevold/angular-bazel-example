
import { Cmp4960Component } from './cmp';
describe('Cmp4960Component', () => {
  it('should add', () => {
    expect(new Cmp4960Component().add4960(1)).toBe(4961);
  });
});