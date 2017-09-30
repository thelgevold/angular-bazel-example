
import { Cmp4022Component } from './cmp';
describe('Cmp4022Component', () => {
  it('should add', () => {
    expect(new Cmp4022Component().add4022(1)).toBe(4023);
  });
});