
import { Cmp8799Component } from './cmp';
describe('Cmp8799Component', () => {
  it('should add', () => {
    expect(new Cmp8799Component().add8799(1)).toBe(8800);
  });
});