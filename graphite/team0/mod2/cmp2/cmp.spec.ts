
import { Cmp6022Component } from './cmp';
describe('Cmp6022Component', () => {
  it('should add', () => {
    expect(new Cmp6022Component().add6022(1)).toBe(6023);
  });
});