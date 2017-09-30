
import { Cmp8278Component } from './cmp';
describe('Cmp8278Component', () => {
  it('should add', () => {
    expect(new Cmp8278Component().add8278(1)).toBe(8279);
  });
});