
import { Cmp7022Component } from './cmp';
describe('Cmp7022Component', () => {
  it('should add', () => {
    expect(new Cmp7022Component().add7022(1)).toBe(7023);
  });
});