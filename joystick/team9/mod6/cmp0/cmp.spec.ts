
import { Cmp9960Component } from './cmp';
describe('Cmp9960Component', () => {
  it('should add', () => {
    expect(new Cmp9960Component().add9960(1)).toBe(9961);
  });
});