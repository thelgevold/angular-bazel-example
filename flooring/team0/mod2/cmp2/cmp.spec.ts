
import { Cmp5022Component } from './cmp';
describe('Cmp5022Component', () => {
  it('should add', () => {
    expect(new Cmp5022Component().add5022(1)).toBe(5023);
  });
});