
import { Cmp9531Component } from './cmp';
describe('Cmp9531Component', () => {
  it('should add', () => {
    expect(new Cmp9531Component().add9531(1)).toBe(9532);
  });
});