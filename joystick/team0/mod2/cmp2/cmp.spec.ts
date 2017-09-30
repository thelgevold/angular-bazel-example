
import { Cmp9022Component } from './cmp';
describe('Cmp9022Component', () => {
  it('should add', () => {
    expect(new Cmp9022Component().add9022(1)).toBe(9023);
  });
});