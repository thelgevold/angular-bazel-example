
import { Cmp5960Component } from './cmp';
describe('Cmp5960Component', () => {
  it('should add', () => {
    expect(new Cmp5960Component().add5960(1)).toBe(5961);
  });
});