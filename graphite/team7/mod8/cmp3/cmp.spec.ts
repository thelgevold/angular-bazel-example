
import { Cmp6783Component } from './cmp';
describe('Cmp6783Component', () => {
  it('should add', () => {
    expect(new Cmp6783Component().add6783(1)).toBe(6784);
  });
});