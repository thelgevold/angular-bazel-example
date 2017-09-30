
import { Cmp8638Component } from './cmp';
describe('Cmp8638Component', () => {
  it('should add', () => {
    expect(new Cmp8638Component().add8638(1)).toBe(8639);
  });
});