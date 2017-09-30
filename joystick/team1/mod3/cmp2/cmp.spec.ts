
import { Cmp9132Component } from './cmp';
describe('Cmp9132Component', () => {
  it('should add', () => {
    expect(new Cmp9132Component().add9132(1)).toBe(9133);
  });
});