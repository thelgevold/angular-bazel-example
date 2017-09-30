
import { Cmp8371Component } from './cmp';
describe('Cmp8371Component', () => {
  it('should add', () => {
    expect(new Cmp8371Component().add8371(1)).toBe(8372);
  });
});